import { buildSeedPayload } from "../seeds/005_data_seed";
import { getProductBySlug as getStaticProductBySlug } from "../../data/products";
import { mapDbProductToCanonical } from "../../lib/data/catalog";
import type { ProductCategory, Product } from "../../data/types";

async function verifyStep4B() {
  console.log("=======================================================");
  console.log("   STEP 4B: STOREFRONT PRODUCT DETAIL INTEGRATION TEST  ");
  console.log("=======================================================\n");

  const payload = buildSeedPayload();
  const categoryNameMap = new Map(payload.categories.map((c) => [c.id, c.name as ProductCategory]));
  const subcategoryNameMap = new Map(payload.subcategories.map((sc) => [sc.id, sc.name]));

  // Mock server-side fetch from DB payload (simulating DB query)
  function fetchFromDb(slug: string): Product | null {
    const p = payload.products.find((prod) => prod.slug === slug);
    if (!p) return null;
    const categoryName = categoryNameMap.get(p.category_id)!;
    const subcategoryName = p.subcategory_id ? subcategoryNameMap.get(p.subcategory_id) : null;
    const variants = payload.variants.filter((v) => v.product_id === p.id);
    const images = payload.images.filter((img) => img.product_id === p.id);
    const specs = payload.specifications.filter((s) => s.product_id === p.id);
    const faqs = payload.faqs.filter((f) => f.product_id === p.id);
    const variantIds = new Set(variants.map((v) => v.id));
    const samagri = payload.samagriItems.filter((s) => variantIds.has(s.variant_id));

    return mapDbProductToCanonical(
      {
        ...p,
        status: p.status as "draft" | "active" | "archived",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      categoryName,
      subcategoryName,
      variants.map((v) => ({ ...v, created_at: "", updated_at: "" })),
      images.map((img) => ({ ...img, created_at: "" })),
      specs.map((s) => ({ ...s, created_at: "" })),
      faqs.map((f) => ({ ...f, created_at: "" })),
      samagri.map((s) => ({ ...s, created_at: "" }))
    );
  }

  // Combined resolver matching app/products/[slug]/page.tsx logic
  function resolveProduct(slug: string, forceDbFailure = false): Product | null {
    if (!forceDbFailure) {
      const dbProduct = fetchFromDb(slug);
      if (dbProduct) return dbProduct;
    }
    // Fallback to static catalog
    return getStaticProductBySlug(slug) || null;
  }

  const testCases = [
    {
      slug: "satyanarayan-pooja-kit",
      expectedName: "Satyanarayan Pooja Kit",
      expectedCategory: "Puja Kits",
      expectedSubcategory: undefined,
      hasVariants: true,
      hasSamagri: true,
      minSpecs: 1,
      minFaqs: 1,
    },
    {
      slug: "original-karungali-mala-108-beads",
      expectedName: "Original Karungali Mala – 108 Beads (Black Ebony Wood)",
      expectedCategory: "Mala",
      expectedSubcategory: undefined,
      hasVariants: true,
      hasSamagri: false,
      minSpecs: 1,
      minFaqs: 1,
    },
    {
      slug: "1-mukhi-rudraksha",
      expectedName: "1 Mukhi Rudraksha",
      expectedCategory: "Rudraksha",
      expectedSubcategory: "Nepali Rudraksha",
      hasVariants: false,
      hasSamagri: false,
      minSpecs: 0,
      minFaqs: 0,
    },
    {
      slug: "5-mukhi-rudraksha",
      expectedName: "5 Mukhi Rudraksha",
      expectedCategory: "Rudraksha",
      expectedSubcategory: "Nepali Rudraksha",
      hasVariants: false,
      hasSamagri: false,
      minSpecs: 0,
      minFaqs: 0,
    },
  ];

  console.log("--- 1. Testing Supabase-Backed Resolution ---");
  for (const tc of testCases) {
    const product = resolveProduct(tc.slug, false);
    if (!product) throw new Error(`Failed to resolve product: ${tc.slug}`);

    console.log(`\nProduct: "${product.name}" (${tc.slug})`);
    console.log(`  - Category: ${product.category} | Subcategory: ${product.subCategory || "None"}`);
    console.log(`  - Price: ₹${product.price ?? "N/A"} | MRP: ₹${product.mrp ?? "N/A"}`);
    console.log(`  - Image: ${product.image} (${product.images?.length || 0} total images)`);
    console.log(`  - Variants: ${product.variants.length}`);
    if (tc.hasVariants) {
      if (product.variants.length === 0) throw new Error(`Expected variants for ${tc.slug}`);
      product.variants.forEach((v, idx) => {
        const samagriCount = v.samagriChecklist?.reduce((acc, c) => acc + c.items.length, 0) || 0;
        console.log(`    [${idx + 1}] ${v.name}: ₹${v.price} (MRP: ₹${v.mrp}) | Samagri: ${samagriCount} items`);
      });
    }
    console.log(`  - Spec Groups: ${product.specifications?.length || 0}`);
    console.log(`  - FAQs: ${product.faqs?.length || 0}`);

    // Assertions
    if (product.name !== tc.expectedName) throw new Error(`Name mismatch for ${tc.slug}: ${product.name}`);
    if (product.category !== tc.expectedCategory) throw new Error(`Category mismatch for ${tc.slug}: ${product.category}`);
    if (tc.expectedSubcategory && product.subCategory !== tc.expectedSubcategory) {
      throw new Error(`Subcategory mismatch for ${tc.slug}: ${product.subCategory}`);
    }
    if (tc.hasSamagri) {
      const v1Samagri = product.variants[0]?.samagriChecklist;
      if (!v1Samagri || v1Samagri.length === 0) throw new Error(`Expected samagri for ${tc.slug}`);
    }
  }

  console.log("\n--- 2. Testing Static Fallback When Supabase Is Unavailable ---");
  for (const tc of testCases) {
    const product = resolveProduct(tc.slug, true);
    if (!product) throw new Error(`Fallback failed to resolve: ${tc.slug}`);
    console.log(`  ✅ Fallback verified for "${product.name}"`);
  }

  console.log("\n=======================================================");
  console.log("   ✅ ALL STEP 4B VERIFICATIONS PASSED SUCCESSFULLY!  ");
  console.log("=======================================================\n");
}

verifyStep4B().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});

import { buildSeedPayload } from "../seeds/005_data_seed";
import { mapDbProductToCanonical, mapDbCategoryToCanonical } from "../../lib/data/catalog";
import type { ProductCategory } from "../../data/types";

async function runTests() {
  console.log("=======================================================");
  console.log("   SUPABASE DATA ACCESS LAYER — VERIFICATION SUITE     ");
  console.log("=======================================================\n");

  const payload = buildSeedPayload();

  // 1. Verify Category Mapping
  console.log("1. Testing Category Mapping...");
  const canonicalCategories = payload.categories.map((c) =>
    mapDbCategoryToCanonical({
      id: c.id,
      slug: c.slug,
      name: c.name,
      description: c.description,
      image_url: c.image_url,
      icon: c.icon,
      badge: c.badge,
      display_order: c.display_order,
      is_active: c.is_active,
      is_service: c.is_service,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
  );

  if (canonicalCategories.length !== 5) {
    throw new Error(`Expected 5 categories, got ${canonicalCategories.length}`);
  }
  console.log(`✅ Categories Mapped: ${canonicalCategories.length} categories verified.\n`);

  // 2. Verify Complete Product Mapping
  console.log("2. Testing Complete Product Mapping across entire seeded catalog...");
  const categoryNameMap = new Map(payload.categories.map((c) => [c.id, c.name as ProductCategory]));
  const subcategoryNameMap = new Map(payload.subcategories.map((sc) => [sc.id, sc.name]));

  const mappedProducts = payload.products.map((p) => {
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
  });

  // Verify Entity Counts
  let totalVariants = 0;
  let totalSamagriItems = 0;
  let totalSpecs = 0;
  let totalFaqs = 0;

  for (const mp of mappedProducts) {
    totalVariants += mp.variants.length;
    if (mp.specifications) {
      for (const sg of mp.specifications) {
        totalSpecs += sg.specs.length;
      }
    }
    if (mp.faqs) totalFaqs += mp.faqs.length;
    for (const v of mp.variants) {
      if (v.samagriChecklist) {
        for (const sc of v.samagriChecklist) {
          totalSamagriItems += sc.items.length;
        }
      }
    }
  }

  console.table([
    { Entity: "Products", Mapped: mappedProducts.length, Expected: 38, Status: mappedProducts.length === 38 ? "✅" : "❌" },
    { Entity: "Variants", Mapped: totalVariants, Expected: 79, Status: totalVariants === 79 ? "✅" : "❌" },
    { Entity: "Specifications", Mapped: totalSpecs, Expected: 220, Status: totalSpecs === 220 ? "✅" : "❌" },
    { Entity: "FAQs", Mapped: totalFaqs, Expected: 81, Status: totalFaqs === 81 ? "✅" : "❌" },
    { Entity: "Samagri Checklist Items", Mapped: totalSamagriItems, Expected: 2507, Status: totalSamagriItems === 2507 ? "✅" : "❌" },
  ]);

  if (
    mappedProducts.length !== 38 ||
    totalVariants !== 79 ||
    totalSpecs !== 220 ||
    totalFaqs !== 81 ||
    totalSamagriItems !== 2507
  ) {
    throw new Error("Mapped entity count mismatch!");
  }

  // 3. Test Specific Slug Lookups
  console.log("\n3. Testing Specific Product Lookups...");

  // Test A: Puja Kit (Satyanarayan Pooja Kit)
  const satyanarayan = mappedProducts.find((p) => p.slug === "satyanarayan-pooja-kit");
  if (!satyanarayan) throw new Error("Satyanarayan kit lookup failed");
  console.log(`✅ Puja Kit: "${satyanarayan.name}" | Variants: ${satyanarayan.variants.length} | Price: ₹${satyanarayan.price}`);
  const basicVariant = satyanarayan.variants[0];
  const totalKitSamagri = basicVariant.samagriChecklist?.reduce((acc, cat) => acc + cat.items.length, 0) || 0;
  console.log(`   - Variant 1: "${basicVariant.name}" | Samagri Items: ${totalKitSamagri} items`);

  // Test B: Mala (Original Karungali Mala)
  const karungali = mappedProducts.find((p) => p.slug === "original-karungali-mala-108-beads");
  if (!karungali) throw new Error("Karungali mala lookup failed");
  console.log(`✅ Mala: "${karungali.name}" | Variants: ${karungali.variants.length} | Price: ₹${karungali.price} | Specs: ${karungali.specifications?.length} groups | FAQs: ${karungali.faqs?.length}`);

  // Test C: Rudraksha (1 Mukhi Rudraksha)
  const rudraksha1 = mappedProducts.find((p) => p.slug === "1-mukhi-rudraksha");
  if (!rudraksha1) throw new Error("1 Mukhi Rudraksha lookup failed");
  console.log(`✅ Rudraksha: "${rudraksha1.name}" | Category: "${rudraksha1.category}" | Subcategory: "${rudraksha1.subCategory}" | Badge: "${rudraksha1.badge}" | Image: "${rudraksha1.image}"`);

  // Test D: Rudraksha (5 Mukhi Rudraksha)
  const rudraksha5 = mappedProducts.find((p) => p.slug === "5-mukhi-rudraksha");
  if (!rudraksha5) throw new Error("5 Mukhi Rudraksha lookup failed");
  console.log(`✅ Rudraksha: "${rudraksha5.name}" | Category: "${rudraksha5.category}" | Subcategory: "${rudraksha5.subCategory}" | Image: "${rudraksha5.image}"`);

  console.log("\n=======================================================");
  console.log("   ✅ ALL SUPABASE DATA ACCESS TESTS PASSED!          ");
  console.log("=======================================================\n");
}

runTests().catch((err) => {
  console.error("Test Suite Failed:", err);
  process.exit(1);
});

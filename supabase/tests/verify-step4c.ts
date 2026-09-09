import { buildSeedPayload } from "../seeds/005_data_seed";
import { pujaKitProducts } from "../../data/pujaKits";
import { malaProducts } from "../../data/malas";
import { rudrakshaProducts } from "../../data/rudraksha";
import { mapDbProductToCanonical } from "../../lib/data/catalog";
import type { ProductCategory, Product } from "../../data/types";

async function verifyStep4C() {
  console.log("=======================================================");
  console.log("   STEP 4C: COLLECTION PAGES INTEGRATION TEST          ");
  console.log("=======================================================\n");

  const payload = buildSeedPayload();
  const categoryNameMap = new Map(payload.categories.map((c) => [c.id, c.name as ProductCategory]));
  const subcategoryNameMap = new Map(payload.subcategories.map((sc) => [sc.id, sc.name]));

  // Mock server-side fetch from DB payload (simulating DB query by category)
  function fetchFromDbByCategory(categoryIdentifier: string): Product[] {
    const category = payload.categories.find(
      (c) =>
        c.slug.toLowerCase() === categoryIdentifier.toLowerCase() ||
        c.name.toLowerCase() === categoryIdentifier.toLowerCase()
    );
    if (!category) return [];

    const products = payload.products.filter((p) => p.category_id === category.id && p.status === "active");

    return products.map((p) => {
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
  }

  // Combined resolver matching collection pages logic
  function resolveCollection(
    categorySlug: string,
    staticList: Product[],
    filterPlaceholders: boolean,
    forceDbFailure = false
  ): Product[] {
    if (!forceDbFailure) {
      const dbProducts = fetchFromDbByCategory(categorySlug);
      if (dbProducts && dbProducts.length > 0) {
        return filterPlaceholders ? dbProducts.filter((p) => !p.isPlaceholder) : dbProducts;
      }
    }
    // Fallback to static
    return filterPlaceholders ? staticList.filter((p) => !p.isPlaceholder) : staticList;
  }

  console.log("--- 1. Testing Collection Product Resolution (Supabase-backed) ---");

  // A. Puja Kits
  const pujaKits = resolveCollection("puja-kits", pujaKitProducts, true, false);
  console.log(`\nPuja Kits Collection: ${pujaKits.length} products returned (Expected: 19)`);
  if (pujaKits.length !== 19) throw new Error(`Expected 19 Puja Kits, got ${pujaKits.length}`);
  const firstKit = pujaKits[0];
  console.log(`  Sample 1: "${firstKit.name}" | Price: ₹${firstKit.price} | MRP: ₹${firstKit.mrp} | Badge: ${firstKit.badge || "None"}`);
  if (!firstKit.price || !firstKit.image) throw new Error("Puja kit missing price or image");

  // B. Malas
  const malas = resolveCollection("malas", malaProducts, true, false);
  console.log(`\nMala Collection: ${malas.length} products returned (Expected: 10)`);
  if (malas.length !== 10) throw new Error(`Expected 10 Malas, got ${malas.length}`);
  const firstMala = malas[0];
  console.log(`  Sample 1: "${firstMala.name}" | Price: ₹${firstMala.price} | MRP: ₹${firstMala.mrp} | Badge: ${firstMala.badge || "None"}`);
  if (!firstMala.price || !firstMala.image) throw new Error("Mala missing price or image");

  // C. Rudraksha
  const rudrakshas = resolveCollection("rudraksha", rudrakshaProducts, false, false);
  console.log(`\nRudraksha Collection: ${rudrakshas.length} products returned (Expected: 9)`);
  if (rudrakshas.length !== 9) throw new Error(`Expected 9 Rudrakshas, got ${rudrakshas.length}`);
  for (const r of rudrakshas) {
    if (r.price !== undefined) throw new Error(`Rudraksha preview product has invented price: ${r.name}`);
    if (r.variants.length > 0) throw new Error(`Rudraksha preview product has unexpected variants: ${r.name}`);
    if (!r.image) throw new Error(`Rudraksha missing image: ${r.name}`);
  }
  console.log(`  Sample 1: "${rudrakshas[0].name}" | Subcategory: ${rudrakshas[0].subCategory} | Image: ${rudrakshas[0].image} | Price: ${rudrakshas[0].price ?? "Unpriced Preview"}`);
  console.log(`  Sample 9: "${rudrakshas[8].name}" | Subcategory: ${rudrakshas[8].subCategory} | Image: ${rudrakshas[8].image} | Price: ${rudrakshas[8].price ?? "Unpriced Preview"}`);

  console.log("\n--- 2. Testing Fallback to Static Catalog When Supabase Is Unavailable ---");
  const fallbackPuja = resolveCollection("puja-kits", pujaKitProducts, true, true);
  const fallbackMalas = resolveCollection("malas", malaProducts, true, true);
  const fallbackRudraksha = resolveCollection("rudraksha", rudrakshaProducts, false, true);

  console.log(`  ✅ Fallback Puja Kits: ${fallbackPuja.length} products`);
  console.log(`  ✅ Fallback Malas: ${fallbackMalas.length} products`);
  console.log(`  ✅ Fallback Rudraksha: ${fallbackRudraksha.length} products`);

  if (fallbackPuja.length !== 19 || fallbackMalas.length !== 10 || fallbackRudraksha.length !== 9) {
    throw new Error("Fallback count mismatch");
  }

  console.log("\n=======================================================");
  console.log("   ✅ ALL STEP 4C VERIFICATIONS PASSED SUCCESSFULLY!  ");
  console.log("=======================================================\n");
}

verifyStep4C().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});

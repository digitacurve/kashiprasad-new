import crypto from "crypto";
import fs from "fs";
import path from "path";
import { pujaKitProducts } from "../../data/pujaKits";
import { malaProducts } from "../../data/malas";
import { rudrakshaProducts } from "../../data/rudraksha";
import { Product } from "../../data/types";

// =====================================================================
// CONSTANTS & DETERMINISTIC UUID GENERATION
// =====================================================================

const NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";

export function generateDeterministicUuid(name: string): string {
  const hash = crypto.createHash("sha1").update(NAMESPACE + name).digest("hex");
  return [
    hash.substring(0, 8),
    hash.substring(8, 12),
    "5" + hash.substring(13, 16), // version 5
    ((parseInt(hash.substring(16, 18), 16) & 0x3f) | 0x80).toString(16) + hash.substring(18, 20),
    hash.substring(20, 32),
  ].join("-");
}

export const EXPECTED_COUNTS = {
  categories: 5,
  subcategories: 3,
  products: 38,
  variants: 79,
  samagriItems: 2507,
  specifications: 220,
  faqs: 81,
  activeInventory: 79,
};

export interface SeedProduct {
  id: string;
  slug: string;
  sku: string | null;
  code: string | null;
  name: string;
  category_id: string;
  subcategory_id: string | null;
  tagline: string | null;
  short_description: string | null;
  detailed_overview: string[];
  badge: string | null;
  status: string;
  is_featured: boolean;
  is_placeholder: boolean;
  base_price: number | null;
  compare_at_price: number | null;
  has_divine_offering: boolean;
  divine_offering_price: number;
  shipping_guarantee: string | null;
  rating: number;
  review_count: number;
  tags: string[];
  seo_title: string | null;
  seo_description: string | null;
}

export interface SeedVariant {
  id: string;
  product_id: string;
  variant_key: string;
  sku: string | null;
  name: string;
  price: number;
  mrp: number;
  badge: string | null;
  suitable_for: string | null;
  description: string | null;
  key_highlights: string[];
  divine_offering_option: string | null;
  display_order: number;
  is_active: boolean;
}

export interface SeedImage {
  id: string;
  product_id: string;
  variant_id: string | null;
  storage_path: string;
  alt_text: string | null;
  display_order: number;
  is_primary: boolean;
}

export interface SeedSpecification {
  id: string;
  product_id: string;
  group_name: string;
  label: string;
  value: string;
  display_order: number;
}

export interface SeedFaq {
  id: string;
  product_id: string;
  question: string;
  answer: string;
  display_order: number;
}

export interface SeedSamagriItem {
  id: string;
  variant_id: string;
  category_name: string;
  item_name: string;
  quantity: string;
  display_order: number;
}

export interface SeedInventoryItem {
  id: string;
  variant_id: string;
  stock_quantity: number;
  reserved_quantity: number;
  low_stock_threshold: number;
  allow_backorder: boolean;
}

// =====================================================================
// CATEGORIES & SUBCATEGORIES SEED DATA
// =====================================================================

export const CATEGORIES_SEED = [
  {
    id: generateDeterministicUuid("cat-puja-kits"),
    slug: "puja-kits",
    name: "Puja Kits",
    description: "Vedic Ritual Sets with complete, authentic samagri.",
    image_url: "/assets/puja-kits/01-satyanarayan-pooja-kit.jpg",
    icon: "🕉️",
    badge: "19 Kits",
    display_order: 1,
    is_active: true,
    is_service: false,
  },
  {
    id: generateDeterministicUuid("cat-malas"),
    slug: "malas",
    name: "Mala",
    description: "108 Sacred Beads consecrated along the sacred ghats of Varanasi.",
    image_url: "/assets/mala/01_mala_regenerated_01.png",
    icon: "📿",
    badge: "10 Malas",
    display_order: 2,
    is_active: true,
    is_service: false,
  },
  {
    id: generateDeterministicUuid("cat-rudraksha"),
    slug: "rudraksha",
    name: "Rudraksha",
    description: "Authentic 1–21 Mukhi Nepali beads consecrated with Ganga jal.",
    image_url: "/hero/assets/rudraksha-bead.png",
    icon: "🟤",
    badge: "100% Nepali",
    display_order: 3,
    is_active: true,
    is_service: false,
  },
  {
    id: generateDeterministicUuid("cat-ratnas"),
    slug: "ratnas",
    name: "Ratnas",
    description: "Natural Vedic gems and stones, lab-certified for astrological purity.",
    image_url: null,
    icon: "💎",
    badge: "Lab Certified",
    display_order: 4,
    is_active: true,
    is_service: false,
  },
  {
    id: generateDeterministicUuid("cat-puja-services"),
    slug: "puja-services",
    name: "Puja Services",
    description: "Personalized ritual experiences and temple sankalp performed in Kashi.",
    image_url: null,
    icon: "🪔",
    badge: "Temple Sankalp",
    display_order: 5,
    is_active: true,
    is_service: true,
  },
];

export const SUBCATEGORIES_SEED = [
  {
    id: generateDeterministicUuid("subcat-nepali-rudraksha"),
    category_id: generateDeterministicUuid("cat-rudraksha"),
    slug: "nepali-rudraksha",
    name: "Nepali Rudraksha",
    description: "Original Himalayan beads with deep natural mukhi fissures.",
    display_order: 1,
  },
  {
    id: generateDeterministicUuid("subcat-gemstones"),
    category_id: generateDeterministicUuid("cat-ratnas"),
    slug: "gemstones",
    name: "Gemstones",
    description: "Astrological primary gemstones (Navratna).",
    display_order: 1,
  },
  {
    id: generateDeterministicUuid("subcat-stones"),
    category_id: generateDeterministicUuid("cat-ratnas"),
    slug: "stones",
    name: "Stones",
    description: "Natural semi-precious secondary stones (Upratna).",
    display_order: 2,
  },
];

// =====================================================================
// DATA TRANSFORMATION & VALIDATION ENGINE
// =====================================================================

export interface SeedPayload {
  categories: typeof CATEGORIES_SEED;
  subcategories: typeof SUBCATEGORIES_SEED;
  products: SeedProduct[];
  variants: SeedVariant[];
  images: SeedImage[];
  specifications: SeedSpecification[];
  faqs: SeedFaq[];
  samagriItems: SeedSamagriItem[];
  inventoryItems: SeedInventoryItem[];
}

export function buildSeedPayload(): SeedPayload {
  const allSourceProducts: Product[] = [
    ...pujaKitProducts,
    ...malaProducts,
    ...rudrakshaProducts,
  ];

  const categoryMap: Record<string, string> = {
    "Puja Kits": generateDeterministicUuid("cat-puja-kits"),
    "Mala": generateDeterministicUuid("cat-malas"),
    "Rudraksha": generateDeterministicUuid("cat-rudraksha"),
    "Ratnas": generateDeterministicUuid("cat-ratnas"),
    "Puja Services": generateDeterministicUuid("cat-puja-services"),
  };

  const subcategoryMap: Record<string, string> = {
    "Nepali Rudraksha": generateDeterministicUuid("subcat-nepali-rudraksha"),
    "Gemstones": generateDeterministicUuid("subcat-gemstones"),
    "Stones": generateDeterministicUuid("subcat-stones"),
  };

  const products: SeedProduct[] = [];
  const variants: SeedVariant[] = [];
  const images: SeedImage[] = [];
  const specifications: SeedSpecification[] = [];
  const faqs: SeedFaq[] = [];
  const samagriItems: SeedSamagriItem[] = [];
  const inventoryItems: SeedInventoryItem[] = [];

  for (const product of allSourceProducts) {
    const productId = generateDeterministicUuid(`prod-${product.slug}`);
    const categoryId = categoryMap[product.category];

    if (!categoryId) {
      throw new Error(`Unmapped category: "${product.category}" on product "${product.slug}"`);
    }

    const subcategoryId = product.subCategory ? subcategoryMap[product.subCategory] || null : null;

    // Special image override for 1-Mukhi Rudraksha until dedicated shoot is uploaded
    let primaryImagePath = product.image;
    if (product.slug === "1-mukhi-rudraksha" && product.image === "/assets/rudraksha/1-mukhi-rudraksha.png") {
      primaryImagePath = "/hero/assets/rudraksha-bead.png";
    }

    products.push({
      id: productId,
      slug: product.slug,
      sku: product.code || product.id || null,
      code: product.code || product.id || null,
      name: product.name,
      category_id: categoryId,
      subcategory_id: subcategoryId,
      tagline: product.tagline || null,
      short_description: product.shortDescription || null,
      detailed_overview: product.detailedOverview || [],
      badge: product.badge || null,
      status: "active",
      is_featured: Boolean(product.featured),
      is_placeholder: Boolean(product.isPlaceholder),
      base_price: product.price !== undefined ? product.price : null,
      compare_at_price: product.mrp !== undefined ? product.mrp : null,
      has_divine_offering: Boolean(product.hasDivineOffering),
      divine_offering_price: product.divineOfferingPrice || 0.0,
      shipping_guarantee: product.shippingGuarantee || null,
      rating: product.rating || 5.0,
      review_count: product.reviewCount || 0,
      tags: product.tags || [],
      seo_title: `${product.name} | Kashi Prasad`,
      seo_description: product.shortDescription || product.tagline || null,
    });

    // Process Product Images
    const rawImages = product.images && product.images.length > 0 ? product.images : [primaryImagePath];
    rawImages.forEach((imgPath, idx) => {
      let resolvedPath = imgPath;
      if (product.slug === "1-mukhi-rudraksha" && imgPath === "/assets/rudraksha/1-mukhi-rudraksha.png") {
        resolvedPath = "/hero/assets/rudraksha-bead.png";
      }
      images.push({
        id: generateDeterministicUuid(`img-${product.slug}-${idx}`),
        product_id: productId,
        variant_id: null,
        storage_path: resolvedPath,
        alt_text: product.name,
        display_order: idx,
        is_primary: idx === 0,
      });
    });

    // Process Specifications
    if (product.specifications && product.specifications.length > 0) {
      let specIdx = 0;
      for (const specGroup of product.specifications) {
        for (const spec of specGroup.specs) {
          specifications.push({
            id: generateDeterministicUuid(`spec-${product.slug}-${specGroup.groupName}-${spec.label}`),
            product_id: productId,
            group_name: specGroup.groupName,
            label: spec.label,
            value: spec.value,
            display_order: specIdx++,
          });
        }
      }
    }

    // Process FAQs
    if (product.faqs && product.faqs.length > 0) {
      product.faqs.forEach((faq, fIdx) => {
        faqs.push({
          id: generateDeterministicUuid(`faq-${product.slug}-${fIdx}`),
          product_id: productId,
          question: faq.q,
          answer: faq.a,
          display_order: fIdx,
        });
      });
    }

    // Process Variants
    if (product.variants && product.variants.length > 0) {
      product.variants.forEach((variant, vIdx) => {
        const variantId = generateDeterministicUuid(`var-${product.slug}-${variant.id}`);
        variants.push({
          id: variantId,
          product_id: productId,
          variant_key: variant.id,
          sku: variant.id,
          name: variant.name,
          price: variant.price,
          mrp: variant.mrp,
          badge: variant.badge || null,
          suitable_for: variant.suitableFor || null,
          description: variant.description || null,
          key_highlights: variant.keyHighlights || [],
          divine_offering_option: variant.divineOfferingOption || null,
          display_order: vIdx,
          is_active: true,
        });

        // Seed initial inventory for purchasable variant (50 units default)
        inventoryItems.push({
          id: generateDeterministicUuid(`inv-${variantId}`),
          variant_id: variantId,
          stock_quantity: 50,
          reserved_quantity: 0,
          low_stock_threshold: 5,
          allow_backorder: false,
        });

        // Process Samagri Checklist items
        if (variant.samagriChecklist && variant.samagriChecklist.length > 0) {
          let itemIdx = 0;
          for (const samagriGroup of variant.samagriChecklist) {
            for (const item of samagriGroup.items) {
              samagriItems.push({
                id: generateDeterministicUuid(`samagri-${variantId}-${samagriGroup.category}-${item.name}-${itemIdx}`),
                variant_id: variantId,
                category_name: samagriGroup.category,
                item_name: item.name,
                quantity: item.quantity,
                display_order: itemIdx++,
              });
            }
          }
        }
      });
    }
  }

  return {
    categories: CATEGORIES_SEED,
    subcategories: SUBCATEGORIES_SEED,
    products,
    variants,
    images,
    specifications,
    faqs,
    samagriItems,
    inventoryItems,
  };
}

// =====================================================================
// VALIDATION & RUNNER
// =====================================================================

export function validatePayload(payload: SeedPayload): boolean {
  console.log("\n=======================================================");
  console.log("   KASHI PRASAD — ZERO-LOSS SEED VALIDATION REPORT     ");
  console.log("=======================================================");

  const results = [
    { entity: "Categories", count: payload.categories.length, expected: EXPECTED_COUNTS.categories },
    { entity: "Subcategories", count: payload.subcategories.length, expected: EXPECTED_COUNTS.subcategories },
    { entity: "Products", count: payload.products.length, expected: EXPECTED_COUNTS.products },
    { entity: "Product Variants", count: payload.variants.length, expected: EXPECTED_COUNTS.variants },
    { entity: "Variant Samagri Items", count: payload.samagriItems.length, expected: EXPECTED_COUNTS.samagriItems },
    { entity: "Specifications", count: payload.specifications.length, expected: EXPECTED_COUNTS.specifications },
    { entity: "Product FAQs", count: payload.faqs.length, expected: EXPECTED_COUNTS.faqs },
    { entity: "Active Inventory Items", count: payload.inventoryItems.length, expected: EXPECTED_COUNTS.activeInventory },
  ];

  let hasMismatch = false;

  console.table(
    results.map((r) => {
      const match = r.count === r.expected;
      if (!match) hasMismatch = true;
      return {
        Entity: r.entity,
        "Source / Generated Count": r.count,
        "Expected Checksum": r.expected,
        Status: match ? "✅ MATCH" : "❌ MISMATCH",
      };
    })
  );

  // Check unique constraints in memory
  const productSlugs = new Set(payload.products.map((p) => p.slug));
  if (productSlugs.size !== payload.products.length) {
    console.error("❌ ERROR: Duplicate product slugs detected!");
    hasMismatch = true;
  }

  const variantKeys = new Set(payload.variants.map((v) => `${v.product_id}:${v.variant_key}`));
  if (variantKeys.size !== payload.variants.length) {
    console.error("❌ ERROR: Duplicate variant keys detected!");
    hasMismatch = true;
  }

  if (hasMismatch) {
    console.error("\n❌ VALIDATION FAILED: Count mismatch or integrity violation detected. Seed aborted.\n");
    return false;
  }

  console.log("\n✅ ALL VALIDATION CHECKS PASSED PERFECTLY (100% Data Fidelity).\n");
  return true;
}

// Generate Raw SQL for migration / seeding execution
export function generateSeedSql(payload: SeedPayload): string {
  const escapeSqlStr = (str: string | null | undefined): string => {
    if (str === null || str === undefined) return "NULL";
    return `'${str.replace(/'/g, "''")}'`;
  };

  const escapeSqlArray = (arr: string[]): string => {
    if (!arr || arr.length === 0) return "'{}'";
    const escaped = arr.map((item) => `"${item.replace(/"/g, '\\"')}"`).join(",");
    return `'${escaped}'`;
  };

  let sql = `-- =====================================================================\n`;
  sql += `-- KASHI PRASAD — SEED DATA SCRIPT (005_data_seed.sql)\n`;
  sql += `-- Generated Deterministically with Zero Data Loss\n`;
  sql += `-- =====================================================================\n\n`;
  sql += `BEGIN;\n\n`;

  // 1. Categories
  sql += `-- 1. Seed Categories\n`;
  for (const c of payload.categories) {
    sql += `INSERT INTO public.categories (id, slug, name, description, image_url, icon, badge, display_order, is_active, is_service)\n`;
    sql += `VALUES ('${c.id}', '${c.slug}', ${escapeSqlStr(c.name)}, ${escapeSqlStr(c.description)}, ${escapeSqlStr(c.image_url)}, ${escapeSqlStr(c.icon)}, ${escapeSqlStr(c.badge)}, ${c.display_order}, ${c.is_active}, ${c.is_service})\n`;
    sql += `ON CONFLICT (slug) DO UPDATE SET\n`;
    sql += `  name = EXCLUDED.name, description = EXCLUDED.description, image_url = EXCLUDED.image_url, badge = EXCLUDED.badge, display_order = EXCLUDED.display_order, is_active = EXCLUDED.is_active, updated_at = now();\n\n`;
  }

  // 2. Subcategories
  sql += `-- 2. Seed Subcategories\n`;
  for (const sc of payload.subcategories) {
    sql += `INSERT INTO public.subcategories (id, category_id, slug, name, description, display_order)\n`;
    sql += `VALUES ('${sc.id}', '${sc.category_id}', '${sc.slug}', ${escapeSqlStr(sc.name)}, ${escapeSqlStr(sc.description)}, ${sc.display_order})\n`;
    sql += `ON CONFLICT (category_id, slug) DO UPDATE SET\n`;
    sql += `  name = EXCLUDED.name, description = EXCLUDED.description, display_order = EXCLUDED.display_order;\n\n`;
  }

  // 3. Products
  sql += `-- 3. Seed Products (${payload.products.length} records)\n`;
  for (const p of payload.products) {
    sql += `INSERT INTO public.products (\n`;
    sql += `  id, slug, sku, code, name, category_id, subcategory_id, tagline, short_description,\n`;
    sql += `  detailed_overview, badge, status, is_featured, is_placeholder, base_price, compare_at_price,\n`;
    sql += `  has_divine_offering, divine_offering_price, shipping_guarantee, rating, review_count, tags, seo_title, seo_description\n`;
    sql += `) VALUES (\n`;
    sql += `  '${p.id}', '${p.slug}', ${escapeSqlStr(p.sku)}, ${escapeSqlStr(p.code)}, ${escapeSqlStr(p.name)}, '${p.category_id}', ${p.subcategory_id ? `'${p.subcategory_id}'` : "NULL"},\n`;
    sql += `  ${escapeSqlStr(p.tagline)}, ${escapeSqlStr(p.short_description)}, ${escapeSqlArray(p.detailed_overview)}, ${escapeSqlStr(p.badge)}, '${p.status}', ${p.is_featured}, ${p.is_placeholder},\n`;
    sql += `  ${p.base_price !== null ? p.base_price : "NULL"}, ${p.compare_at_price !== null ? p.compare_at_price : "NULL"}, ${p.has_divine_offering}, ${p.divine_offering_price}, ${escapeSqlStr(p.shipping_guarantee)},\n`;
    sql += `  ${p.rating}, ${p.review_count}, ${escapeSqlArray(p.tags)}, ${escapeSqlStr(p.seo_title)}, ${escapeSqlStr(p.seo_description)}\n`;
    sql += `) ON CONFLICT (slug) DO UPDATE SET\n`;
    sql += `  name = EXCLUDED.name, base_price = EXCLUDED.base_price, compare_at_price = EXCLUDED.compare_at_price, detailed_overview = EXCLUDED.detailed_overview,\n`;
    sql += `  tags = EXCLUDED.tags, badge = EXCLUDED.badge, rating = EXCLUDED.rating, review_count = EXCLUDED.review_count, updated_at = now();\n\n`;
  }

  // 4. Product Images
  sql += `-- 4. Seed Product Images (${payload.images.length} records)\n`;
  for (const img of payload.images) {
    sql += `INSERT INTO public.product_images (id, product_id, variant_id, storage_path, alt_text, display_order, is_primary)\n`;
    sql += `VALUES ('${img.id}', '${img.product_id}', ${img.variant_id ? `'${img.variant_id}'` : "NULL"}, ${escapeSqlStr(img.storage_path)}, ${escapeSqlStr(img.alt_text)}, ${img.display_order}, ${img.is_primary})\n`;
    sql += `ON CONFLICT (id) DO UPDATE SET storage_path = EXCLUDED.storage_path, is_primary = EXCLUDED.is_primary;\n`;
  }
  sql += `\n`;

  // 5. Product Variants
  sql += `-- 5. Seed Product Variants (${payload.variants.length} records)\n`;
  for (const v of payload.variants) {
    sql += `INSERT INTO public.product_variants (\n`;
    sql += `  id, product_id, variant_key, sku, name, price, mrp, badge, suitable_for, description, key_highlights, divine_offering_option, display_order, is_active\n`;
    sql += `) VALUES (\n`;
    sql += `  '${v.id}', '${v.product_id}', '${v.variant_key}', ${escapeSqlStr(v.sku)}, ${escapeSqlStr(v.name)}, ${v.price}, ${v.mrp}, ${escapeSqlStr(v.badge)},\n`;
    sql += `  ${escapeSqlStr(v.suitable_for)}, ${escapeSqlStr(v.description)}, ${escapeSqlArray(v.key_highlights)}, ${escapeSqlStr(v.divine_offering_option)}, ${v.display_order}, ${v.is_active}\n`;
    sql += `) ON CONFLICT (product_id, variant_key) DO UPDATE SET\n`;
    sql += `  name = EXCLUDED.name, price = EXCLUDED.price, mrp = EXCLUDED.mrp, key_highlights = EXCLUDED.key_highlights, updated_at = now();\n\n`;
  }

  // 6. Active Inventory Items
  sql += `-- 6. Seed Inventory (${payload.inventoryItems.length} records)\n`;
  for (const inv of payload.inventoryItems) {
    sql += `INSERT INTO public.inventory_items (id, variant_id, stock_quantity, reserved_quantity, low_stock_threshold, allow_backorder)\n`;
    sql += `VALUES ('${inv.id}', '${inv.variant_id}', ${inv.stock_quantity}, ${inv.reserved_quantity}, ${inv.low_stock_threshold}, ${inv.allow_backorder})\n`;
    sql += `ON CONFLICT (variant_id) DO UPDATE SET stock_quantity = EXCLUDED.stock_quantity, updated_at = now();\n`;
  }
  sql += `\n`;

  // 7. Specifications
  sql += `-- 7. Seed Specifications (${payload.specifications.length} records)\n`;
  for (const spec of payload.specifications) {
    sql += `INSERT INTO public.product_specifications (id, product_id, group_name, label, value, display_order)\n`;
    sql += `VALUES ('${spec.id}', '${spec.product_id}', ${escapeSqlStr(spec.group_name)}, ${escapeSqlStr(spec.label)}, ${escapeSqlStr(spec.value)}, ${spec.display_order})\n`;
    sql += `ON CONFLICT (id) DO UPDATE SET value = EXCLUDED.value;\n`;
  }
  sql += `\n`;

  // 8. FAQs
  sql += `-- 8. Seed Product FAQs (${payload.faqs.length} records)\n`;
  for (const faq of payload.faqs) {
    sql += `INSERT INTO public.product_faqs (id, product_id, question, answer, display_order)\n`;
    sql += `VALUES ('${faq.id}', '${faq.product_id}', ${escapeSqlStr(faq.question)}, ${escapeSqlStr(faq.answer)}, ${faq.display_order})\n`;
    sql += `ON CONFLICT (id) DO UPDATE SET answer = EXCLUDED.answer;\n`;
  }
  sql += `\n`;

  // 9. Samagri Checklist Items
  sql += `-- 9. Seed Samagri Checklist Items (${payload.samagriItems.length} records)\n`;
  for (const s of payload.samagriItems) {
    sql += `INSERT INTO public.variant_samagri_items (id, variant_id, category_name, item_name, quantity, display_order)\n`;
    sql += `VALUES ('${s.id}', '${s.variant_id}', ${escapeSqlStr(s.category_name)}, ${escapeSqlStr(s.item_name)}, ${escapeSqlStr(s.quantity)}, ${s.display_order})\n`;
    sql += `ON CONFLICT (id) DO UPDATE SET quantity = EXCLUDED.quantity;\n`;
  }
  sql += `\n`;

  sql += `COMMIT;\n`;
  return sql;
}

// =====================================================================
// MAIN ENTRYPOINT
// =====================================================================

async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes("--dry-run") || args.length === 0;
  const shouldEmitSql = args.includes("--sql");

  console.log("Generating deterministic seed payload from source TypeScript catalog...");
  const payload = buildSeedPayload();

  const isValid = validatePayload(payload);
  if (!isValid) {
    process.exit(1);
  }

  if (shouldEmitSql) {
    const sqlContent = generateSeedSql(payload);
    const sqlPath = path.join(process.cwd(), "supabase", "migrations", "005_data_seed.sql");
    fs.writeFileSync(sqlPath, sqlContent, "utf8");
    console.log(`✅ Seed SQL successfully written to: ${sqlPath}`);
  }

  if (isDryRun) {
    console.log("Dry-run validation complete. Use '--sql' to output 005_data_seed.sql.");
  }
}

if (require.main === module) {
  main().catch((err) => {
    console.error("Fatal Seed Error:", err);
    process.exit(1);
  });
}

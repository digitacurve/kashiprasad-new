import { SupabaseClient } from "@supabase/supabase-js";
import { createClient as createServerSupabaseClient } from "../supabase/server";
import type { Database } from "../supabase/types";
import type {
  Product,
  ProductCategory,
  ProductVariant,
  SpecGroup,
  FAQItem,
  SamagriCategory,
  CategoryInfo,
} from "../../data/types";

// =====================================================================
// TYPE MAPPERS & UTILITIES
// =====================================================================

type DbClient = SupabaseClient<Database>;

/**
 * Resolves a Supabase client: uses the injected client (e.g. for scripts or testing)
 * or creates a standard SSR server client for Next.js Server Components / Actions.
 */
async function getClient(client?: DbClient): Promise<DbClient | null> {
  if (client) return client;
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
    return null;
  }
  try {
    return await createServerSupabaseClient();
  } catch (err) {
    console.warn("[catalog:getClient] Failed to initialize server Supabase client:", err);
    return null;
  }
}

/**
 * Maps a database category row to the canonical CategoryInfo interface.
 */
export function mapDbCategoryToCanonical(row: Database["public"]["Tables"]["categories"]["Row"]): CategoryInfo {
  return {
    id: row.id,
    name: row.name as ProductCategory,
    slug: row.slug,
    href: `/${row.slug}`,
    description: row.description,
    image: row.image_url || undefined,
    icon: row.icon || undefined,
    badge: row.badge || undefined,
    isService: row.is_service,
  };
}

/**
 * Assembles a canonical Product model from relational database entities.
 */
export function mapDbProductToCanonical(
  productRow: Database["public"]["Tables"]["products"]["Row"],
  categoryName: ProductCategory,
  subcategoryName?: string | null,
  variantsRows: Database["public"]["Tables"]["product_variants"]["Row"][] = [],
  imagesRows: Database["public"]["Tables"]["product_images"]["Row"][] = [],
  specsRows: Database["public"]["Tables"]["product_specifications"]["Row"][] = [],
  faqsRows: Database["public"]["Tables"]["product_faqs"]["Row"][] = [],
  samagriRows: Database["public"]["Tables"]["variant_samagri_items"]["Row"][] = []
): Product {
  // 1. Process Images
  const sortedImages = [...imagesRows].sort((a, b) => a.display_order - b.display_order);
  const primaryImage = sortedImages.find((img) => img.is_primary)?.storage_path || sortedImages[0]?.storage_path || "";
  const allImagePaths = sortedImages.map((img) => img.storage_path);

  // 2. Group Specifications by group_name
  const specGroupsMap = new Map<string, { label: string; value: string }[]>();
  const sortedSpecs = [...specsRows].sort((a, b) => a.display_order - b.display_order);
  for (const s of sortedSpecs) {
    if (!specGroupsMap.has(s.group_name)) {
      specGroupsMap.set(s.group_name, []);
    }
    specGroupsMap.get(s.group_name)!.push({ label: s.label, value: s.value });
  }
  const specifications: SpecGroup[] = Array.from(specGroupsMap.entries()).map(([groupName, specs]) => ({
    groupName,
    specs,
  }));

  // 3. Process FAQs
  const sortedFaqs = [...faqsRows].sort((a, b) => a.display_order - b.display_order);
  const faqs: FAQItem[] = sortedFaqs.map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  // 4. Process Variants and attach nested Samagri checklists
  const sortedVariants = [...variantsRows].sort((a, b) => a.display_order - b.display_order);
  const variants: ProductVariant[] = sortedVariants.map((v) => {
    // Filter and group samagri for this variant
    const variantSamagri = samagriRows
      .filter((s) => s.variant_id === v.id)
      .sort((a, b) => a.display_order - b.display_order);

    const samagriCategoryMap = new Map<string, { name: string; quantity: string }[]>();
    for (const s of variantSamagri) {
      if (!samagriCategoryMap.has(s.category_name)) {
        samagriCategoryMap.set(s.category_name, []);
      }
      samagriCategoryMap.get(s.category_name)!.push({ name: s.item_name, quantity: s.quantity });
    }

    const samagriChecklist: SamagriCategory[] = Array.from(samagriCategoryMap.entries()).map(
      ([category, items]) => ({
        category,
        items,
      })
    );

    return {
      id: v.variant_key,
      name: v.name,
      price: v.price,
      mrp: v.mrp,
      badge: v.badge || undefined,
      suitableFor: v.suitable_for || undefined,
      description: v.description || undefined,
      keyHighlights: v.key_highlights && v.key_highlights.length > 0 ? v.key_highlights : undefined,
      divineOfferingOption: v.divine_offering_option || undefined,
      samagriChecklist: samagriChecklist.length > 0 ? samagriChecklist : undefined,
    };
  });

  return {
    id: productRow.code || productRow.id,
    slug: productRow.slug,
    name: productRow.name,
    category: categoryName,
    subCategory: subcategoryName || undefined,
    image: primaryImage,
    images: allImagePaths.length > 0 ? allImagePaths : undefined,
    badge: productRow.badge || undefined,
    rating: productRow.rating,
    reviewCount: productRow.review_count,
    tagline: productRow.tagline || undefined,
    shortDescription: productRow.short_description || undefined,
    detailedOverview: productRow.detailed_overview,
    tags: productRow.tags,
    price: productRow.base_price !== null ? productRow.base_price : undefined,
    mrp: productRow.compare_at_price !== null ? productRow.compare_at_price : undefined,
    featured: productRow.is_featured,
    inStock: true,
    hasDivineOffering: productRow.has_divine_offering,
    divineOfferingPrice: productRow.divine_offering_price,
    shippingGuarantee: productRow.shipping_guarantee || undefined,
    isPlaceholder: productRow.is_placeholder,
    variants,
    specifications: specifications.length > 0 ? specifications : undefined,
    faqs: faqs.length > 0 ? faqs : undefined,
  };
}

// =====================================================================
// SERVER-SIDE READ-ONLY DATA ACCESS FUNCTIONS
// =====================================================================

/**
 * Retrieves all active categories ordered by display_order.
 */
export async function getActiveCategories(client?: DbClient): Promise<CategoryInfo[]> {
  try {
    const supabase = await getClient(client);
    if (!supabase) return [];

    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("is_active", true)
      .order("display_order", { ascending: true });

    if (error) {
      console.error("[getActiveCategories] Query Error:", error.message);
      return [];
    }

    return (data || []).map(mapDbCategoryToCanonical);
  } catch (err) {
    console.error("[getActiveCategories] Unexpected Error:", err);
    return [];
  }
}

/**
 * Retrieves all active products with full relational data (images, variants, specs, faqs).
 */
export async function getActiveProducts(client?: DbClient): Promise<Product[]> {
  try {
    const supabase = await getClient(client);
    if (!supabase) return [];

    // Query active products with their joined categories and subcategories
    const { data: productsData, error: prodError } = await supabase
      .from("products")
      .select(
        `
        *,
        categories!inner(id, name, slug),
        subcategories(id, name, slug)
      `
      )
      .eq("status", "active")
      .order("created_at", { ascending: true });

    if (prodError || !productsData || productsData.length === 0) {
      if (prodError) console.error("[getActiveProducts] Products Query Error:", prodError.message);
      return [];
    }

    const productIds = productsData.map((p) => p.id);

    // Fetch related child tables in parallel
    const [
      { data: variantsData },
      { data: imagesData },
      { data: specsData },
      { data: faqsData },
      { data: samagriData },
    ] = await Promise.all([
      supabase.from("product_variants").select("*").in("product_id", productIds).eq("is_active", true),
      supabase.from("product_images").select("*").in("product_id", productIds),
      supabase.from("product_specifications").select("*").in("product_id", productIds),
      supabase.from("product_faqs").select("*").in("product_id", productIds),
      supabase.from("variant_samagri_items").select("*"),
    ]);

    const variants = variantsData || [];
    const images = imagesData || [];
    const specs = specsData || [];
    const faqs = faqsData || [];
    const samagri = samagriData || [];

    return productsData.map((prod) => {
      const categoryObj = prod.categories as { id: string; name: string; slug: string };
      const subcategoryObj = prod.subcategories as { id: string; name: string; slug: string } | null;

      const prodVariants = variants.filter((v) => v.product_id === prod.id);
      const prodImages = images.filter((img) => img.product_id === prod.id);
      const prodSpecs = specs.filter((s) => s.product_id === prod.id);
      const prodFaqs = faqs.filter((f) => f.product_id === prod.id);

      return mapDbProductToCanonical(
        prod,
        categoryObj.name as ProductCategory,
        subcategoryObj?.name || null,
        prodVariants,
        prodImages,
        prodSpecs,
        prodFaqs,
        samagri
      );
    });
  } catch (err) {
    console.error("[getActiveProducts] Unexpected Error:", err);
    return [];
  }
}

/**
 * Retrieves a single active product by its unique slug with all relational data.
 */
export async function getProductBySlug(slug: string, client?: DbClient): Promise<Product | null> {
  try {
    if (!slug) return null;
    const supabase = await getClient(client);
    if (!supabase) return null;

    const { data: prod, error: prodError } = await supabase
      .from("products")
      .select(
        `
        *,
        categories!inner(id, name, slug),
        subcategories(id, name, slug)
      `
      )
      .eq("slug", slug)
      .eq("status", "active")
      .maybeSingle();

    if (prodError || !prod) {
      if (prodError) console.error(`[getProductBySlug] Error fetching slug '${slug}':`, prodError.message);
      return null;
    }

    const productId = prod.id;

    // Fetch related child tables for this single product
    const [
      { data: variantsData },
      { data: imagesData },
      { data: specsData },
      { data: faqsData },
    ] = await Promise.all([
      supabase.from("product_variants").select("*").eq("product_id", productId).eq("is_active", true),
      supabase.from("product_images").select("*").eq("product_id", productId),
      supabase.from("product_specifications").select("*").eq("product_id", productId),
      supabase.from("product_faqs").select("*").eq("product_id", productId),
    ]);

    const variants = variantsData || [];
    const variantIds = variants.map((v) => v.id);

    // Fetch samagri items for these variants
    let samagri: Database["public"]["Tables"]["variant_samagri_items"]["Row"][] = [];
    if (variantIds.length > 0) {
      const { data: samagriData } = await supabase
        .from("variant_samagri_items")
        .select("*")
        .in("variant_id", variantIds);
      samagri = samagriData || [];
    }

    const categoryObj = prod.categories as { id: string; name: string; slug: string };
    const subcategoryObj = prod.subcategories as { id: string; name: string; slug: string } | null;

    return mapDbProductToCanonical(
      prod,
      categoryObj.name as ProductCategory,
      subcategoryObj?.name || null,
      variants,
      imagesData || [],
      specsData || [],
      faqsData || [],
      samagri
    );
  } catch (err) {
    console.error(`[getProductBySlug] Unexpected Error for slug '${slug}':`, err);
    return null;
  }
}

/**
 * Retrieves all active products belonging to a specific category (by category slug or name).
 */
export async function getProductsByCategory(categoryIdentifier: string, client?: DbClient): Promise<Product[]> {
  try {
    if (!categoryIdentifier) return [];
    const supabase = await getClient(client);
    if (!supabase) return [];

    // Match by slug or case-insensitive name
    const { data: categoryData, error: catError } = await supabase
      .from("categories")
      .select("id, name, slug")
      .or(`slug.eq.${categoryIdentifier.toLowerCase()},name.ilike.${categoryIdentifier}`)
      .maybeSingle();

    if (catError || !categoryData) {
      if (catError) console.error(`[getProductsByCategory] Error finding category '${categoryIdentifier}':`, catError.message);
      return [];
    }

    const { data: productsData, error: prodError } = await supabase
      .from("products")
      .select(
        `
        *,
        categories!inner(id, name, slug),
        subcategories(id, name, slug)
      `
      )
      .eq("category_id", categoryData.id)
      .eq("status", "active")
      .order("created_at", { ascending: true });

    if (prodError || !productsData || productsData.length === 0) {
      return [];
    }

    const productIds = productsData.map((p) => p.id);

    const [
      { data: variantsData },
      { data: imagesData },
      { data: specsData },
      { data: faqsData },
      { data: samagriData },
    ] = await Promise.all([
      supabase.from("product_variants").select("*").in("product_id", productIds).eq("is_active", true),
      supabase.from("product_images").select("*").in("product_id", productIds),
      supabase.from("product_specifications").select("*").in("product_id", productIds),
      supabase.from("product_faqs").select("*").in("product_id", productIds),
      supabase.from("variant_samagri_items").select("*"),
    ]);

    return productsData.map((prod) => {
      const subcategoryObj = prod.subcategories as { id: string; name: string; slug: string } | null;
      return mapDbProductToCanonical(
        prod,
        categoryData.name as ProductCategory,
        subcategoryObj?.name || null,
        (variantsData || []).filter((v) => v.product_id === prod.id),
        (imagesData || []).filter((img) => img.product_id === prod.id),
        (specsData || []).filter((s) => s.product_id === prod.id),
        (faqsData || []).filter((f) => f.product_id === prod.id),
        samagriData || []
      );
    });
  } catch (err) {
    console.error(`[getProductsByCategory] Unexpected Error for '${categoryIdentifier}':`, err);
    return [];
  }
}

/**
 * Retrieves variants for a given product ID.
 */
export async function getProductVariants(
  productId: string,
  client?: DbClient
): Promise<Database["public"]["Tables"]["product_variants"]["Row"][]> {
  try {
    const supabase = await getClient(client);
    if (!supabase) return [];

    const { data, error } = await supabase
      .from("product_variants")
      .select("*")
      .eq("product_id", productId)
      .eq("is_active", true)
      .order("display_order", { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error(`[getProductVariants] Error for product '${productId}':`, err);
    return [];
  }
}

/**
 * Retrieves images for a given product ID.
 */
export async function getProductImages(
  productId: string,
  client?: DbClient
): Promise<Database["public"]["Tables"]["product_images"]["Row"][]> {
  try {
    const supabase = await getClient(client);
    if (!supabase) return [];

    const { data, error } = await supabase
      .from("product_images")
      .select("*")
      .eq("product_id", productId)
      .order("display_order", { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error(`[getProductImages] Error for product '${productId}':`, err);
    return [];
  }
}

/**
 * Retrieves specifications for a given product ID.
 */
export async function getProductSpecifications(
  productId: string,
  client?: DbClient
): Promise<Database["public"]["Tables"]["product_specifications"]["Row"][]> {
  try {
    const supabase = await getClient(client);
    if (!supabase) return [];

    const { data, error } = await supabase
      .from("product_specifications")
      .select("*")
      .eq("product_id", productId)
      .order("display_order", { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error(`[getProductSpecifications] Error for product '${productId}':`, err);
    return [];
  }
}

/**
 * Retrieves FAQs for a given product ID.
 */
export async function getProductFaqs(
  productId: string,
  client?: DbClient
): Promise<Database["public"]["Tables"]["product_faqs"]["Row"][]> {
  try {
    const supabase = await getClient(client);
    if (!supabase) return [];

    const { data, error } = await supabase
      .from("product_faqs")
      .select("*")
      .eq("product_id", productId)
      .order("display_order", { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error(`[getProductFaqs] Error for product '${productId}':`, err);
    return [];
  }
}

/**
 * Retrieves samagri items for a given variant ID.
 */
export async function getVariantSamagriItems(
  variantId: string,
  client?: DbClient
): Promise<Database["public"]["Tables"]["variant_samagri_items"]["Row"][]> {
  try {
    const supabase = await getClient(client);
    if (!supabase) return [];

    const { data, error } = await supabase
      .from("variant_samagri_items")
      .select("*")
      .eq("variant_id", variantId)
      .order("display_order", { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error(`[getVariantSamagriItems] Error for variant '${variantId}':`, err);
    return [];
  }
}

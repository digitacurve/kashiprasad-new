/** Canonical Storefront Category Enum / Union */
export type ProductCategory =
  | "Puja Kits"
  | "Mala"
  | "Rudraksha"
  | "Ratnas"
  | "Puja Services";

export interface SpecItem {
  label: string;
  value: string;
}

export interface SpecGroup {
  groupName: string;
  specs: SpecItem[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface SamagriItem {
  name: string;
  quantity: string;
}

export interface SamagriCategory {
  category: string;
  items: SamagriItem[];
}

export interface ProductReview {
  id: string;
  author: string;
  location?: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
}

/** Canonical Product Variant */
export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  mrp: number;
  badge?: string;
  suitableFor?: string;
  description?: string;
  keyHighlights?: string[];
  samagriChecklist?: SamagriCategory[];
  includedItems?: string[];
  divineOfferingOption?: string;
}

/** Canonical Storefront Product Model */
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  subCategory?: string; // e.g. "Nepali Rudraksha" | "Gemstones" | "Stones" | "Collector Beads"
  image: string;
  images?: string[];
  placeholderIcon?: string;
  badge?: string;
  rating?: number;
  reviewCount?: number;
  tagline?: string;
  shortDescription?: string;
  detailedOverview?: string[];
  tags?: string[];
  price?: number;
  mrp?: number;
  featured?: boolean;
  inStock?: boolean;
  hasDivineOffering?: boolean;
  divineOfferingPrice?: number;
  variants: ProductVariant[];
  specifications?: SpecGroup[];
  faqs?: FAQItem[];
  shippingGuarantee?: string;
  isPlaceholder?: boolean;
  code?: string;
  suitableFor?: string;
  includes?: string[];
  reviews?: ProductReview[];
}

/** Canonical Puja Service Model */
export interface PujaService {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  detailedOverview: string[];
  locationMode: string;
  duration: string;
  startingPrice: number;
  mrp: number;
  prasadDelivery: string;
  code: string;
  badge: string;
  image?: string;
  placeholderIcon?: string;
  priestCount?: string;
  sankalpType?: string;
  includedItems: string[];
  faqs?: FAQItem[];
}

/** Canonical Store Category Info */
export interface CategoryInfo {
  id: string;
  name: ProductCategory;
  slug: string;
  href: string;
  description: string;
  itemCount?: string;
  badge?: string;
  visualCode?: string;
  image?: string;
  icon?: string;
  isService?: boolean;
  subcategories?: {
    id: string;
    name: string;
    description: string;
    slug: string;
  }[];
}

/** Canonical Cart Item */
export interface CartItem {
  lineId: string;
  productId: string;
  slug: string;
  name: string;
  category?: ProductCategory;
  image: string;
  variantId: string;
  variantName: string;
  price: number;
  mrp?: number;
  quantity: number;
  divineOffering: boolean;
  divineOfferingPrice?: number;
}

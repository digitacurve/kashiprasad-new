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

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Puja Kits" | "Mala" | "Rudraksha" | "Ratnas";
  subCategory?: string; // e.g. "Gemstones" | "Stones" | "Collector Beads" | "Nepali Rudraksha"
  image: string;
  images?: string[];
  placeholderIcon?: string;
  badge: string;
  rating: number;
  reviewCount: number;
  tagline: string;
  shortDescription: string;
  detailedOverview: string[];
  tags: string[];
  price: number;
  mrp: number;
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

export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  href: string;
  description: string;
  itemCount: string;
  badge: string;
  visualCode: string;
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

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  variantId: string;
  variantName: string;
  price: number;
  mrp: number;
  quantity: number;
  withDivineOffering: boolean;
  divineOfferingPrice: number;
}

import { allProducts } from "./products";

export type StoreCategoryId = "puja-kits" | "malas" | "rudraksha" | "ratnas" | "puja-services";

export interface StoreCategory {
  id: StoreCategoryId;
  name: string;
  href: string;
  description: string;
  image?: string;
  isService?: boolean;
  subcategories?: string[];
}

export const storeCategories: StoreCategory[] = [
  {
    id: "puja-kits",
    name: "Puja Kits",
    href: "/puja-kits",
    description: "Curated essentials for meaningful rituals.",
    image: "/assets/puja-kits/01-satyanarayan-pooja-kit.png",
  },
  {
    id: "malas",
    name: "Mala",
    href: "/malas",
    description: "Prayer malas made for daily devotion.",
    image: "/assets/mala/01_mala_regenerated_01.png",
  },
  {
    id: "rudraksha",
    name: "Rudraksha",
    href: "/rudraksha",
    description: "A dedicated catalogue for sacred beads and mukhi types.",
    image: "/hero/assets/rudraksha-bead.png",
  },
  {
    id: "ratnas",
    name: "Ratnas",
    href: "/ratnas",
    description: "Natural gems and stones, organised in one sacred collection.",
    subcategories: ["Gemstones", "Stones"],
  },
  {
    id: "puja-services",
    name: "Puja Services",
    href: "/puja-services",
    description: "Book a personalised ritual experience when services are available.",
    isService: true,
  },
];

export const featuredProducts = allProducts
  .filter((product) => !product.isPlaceholder)
  .slice(0, 6)
  .map((product) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    category: product.category,
    image: product.image,
    price: product.price,
    badge: product.badge,
  }));

export const comingSoonProductSlots = [
  { id: "rudraksha-slot", category: "Rudraksha", label: "Product catalogue in preparation" },
  { id: "ratnas-slot", category: "Ratnas", label: "Product catalogue in preparation" },
];

export const trustPillars = [
  ["Authentic sourcing", "Clear product information and source details, where available."],
  ["Considered offering", "Each collection is structured to make ritual shopping simpler."],
  ["Secure shopping", "A future-ready checkout flow for delivery, payment and support."],
];

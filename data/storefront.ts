import { allProducts } from "./products";
import { malaProducts } from "./malas";
import { rudrakshaProducts } from "./rudraksha";
import { pujaKitProducts } from "./pujaKits";

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
    image: "/assets/rudraksha/1-mukhi-rudraksha.png",
  },
  {
    id: "ratnas",
    name: "Ratnas",
    href: "/ratnas",
    description: "Natural gems and stones, organised in one sacred collection.",
    image: "/assets/ratnas/emerald-panna.png",
    subcategories: ["Gemstones", "Stones"],
  },
  {
    id: "puja-services",
    name: "Puja Services",
    href: "/puja-services",
    description: "Vedic Rudrabhishek, Aartis & Sacred Sevas at Kashi Vishwanath.",
    image: "/assets/puja-services/kashi-vishwanath-pooja-services.jpg",
    isService: true,
  },
];

export const featuredProducts = [
  rudrakshaProducts[0],
  malaProducts[0],
  pujaKitProducts[0],
];

export const comingSoonProductSlots = [
  { id: "puja-services-slot", category: "Puja Services", label: "Ritual bookings in preparation" },
];

export const trustPillars = [
  ["Authentic sourcing", "Clear product information and source details, where available."],
  ["Considered offering", "Each collection is structured to make ritual shopping simpler."],
  ["Secure shopping", "A future-ready checkout flow for delivery, payment and support."],
];

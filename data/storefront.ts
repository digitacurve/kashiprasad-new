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

export interface TrustPillarItem {
  id: string;
  title: string;
  hindi: string;
  copy: string;
  icon: string;
  badge: string;
  tag: string;
}

export const trustPillars: TrustPillarItem[] = [
  {
    id: "consecration",
    title: "Kashi Pran Pratishtha",
    hindi: "काशी प्राण प्रतिष्ठा",
    copy: "Every Ratna, Nepali Rudraksha & Mala is consecrated at Assi Ghat & Kashi Vishwanath with Vedic Mantras and holy Ganga Abhishek.",
    icon: "🏛️",
    badge: "Vedic Consecration",
    tag: "Assi Ghat & Temple Rituals",
  },
  {
    id: "authenticity",
    title: "100% Lab Tested & Certified",
    hindi: "लैब प्रमाणित शुद्धता",
    copy: "Individual X-Ray & density test reports with digital verification seal and origin certification (Nepal/Ceylon).",
    icon: "🔬",
    badge: "100% Natural Guarantee",
    tag: "Digital Verification & QR",
  },
  {
    id: "offerings",
    title: "Gangajal & Sacred Bhasma Gift",
    hindi: "पवित्र गंगाजल व भस्म भेंट",
    copy: "Complimentary authentic Varanasi Gangajal vial, sanctified Kashi Bhasma, and a luxury red velvet temple box with every delivery.",
    icon: "🪔",
    badge: "Sanctified Prasad Kit",
    tag: "Complimentary Temple Gifts",
  },
  {
    id: "guidance",
    title: "Acharya Ji Lifetime Guidance",
    hindi: "आचार्य जी का मार्गदर्शन",
    copy: "Direct 1-on-1 WhatsApp access to learned Kashi Shastris for wearing vidhi, auspicious muhurta, and personalized astrological guidance.",
    icon: "💬",
    badge: "Pandit Ji WhatsApp Support",
    tag: "Personalized Gotra Vidhi",
  },
];

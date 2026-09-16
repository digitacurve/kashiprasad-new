import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";
import SeoFaqSection from "@/components/SeoFaqSection";
import { pujaKitProducts } from "@/data/pujaKits";
import { getProductsByCategory } from "@/lib/data/catalog";

export const metadata: Metadata = {
  title: "Vedic Puja Kits & Hawan Essentials — Consecrated in Varanasi | Kashi Prasad",
  description:
    "Complete authentic Vedic Pooja Kits for Griha Pravesh, Rudrabhishek, Mahamrityunjaya, Navgraha, Laxmi-Ganesh, and daily temple rituals prepared with holy Varanasi samagri.",
  keywords: [
    "Puja Kits Varanasi",
    "Rudrabhishek Pooja Kit",
    "Griha Pravesh Kit",
    "Hawan Samagri Kashi",
    "Navgraha Pooja Kit",
    "Mahamrityunjaya Kit",
  ],
  alternates: {
    canonical: "https://kashiprasad.in/puja-kits",
  },
  openGraph: {
    title: "Vedic Puja Kits & Hawan Essentials | Kashi Prasad",
    description:
      "Complete authentic Vedic Pooja Kits prepared with holy Varanasi samagri and pure Gangajal.",
    url: "https://kashiprasad.in/puja-kits",
    siteName: "Kashi Prasad",
    images: [{ url: "https://kashiprasad.in/logo.png", width: 1024, height: 1024, alt: "Kashi Prasad Puja Kits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Puja Kits & Hawan Essentials | Kashi Prasad",
    description: "Pure puja samagri directly from Varanasi temples.",
    images: ["https://kashiprasad.in/logo.png"],
  },
};

const pujaKitFaqs = [
  {
    question: "What makes Kashi Prasad Puja Kits authentic and unique?",
    answer:
      "Unlike ordinary market samagri, our kits are packed with sacred essentials consecrated directly in Varanasi — including pure Gangajal from Dashashwamedh Ghat, genuine Kashi Bhasma, unbroken Akshat, and pure organic Hawan herbs prepared according to Vedic Karmakanda scriptures.",
  },
  {
    question: "Does the kit contain all items required for Griha Pravesh or Rudrabhishek?",
    answer:
      "Yes. Each kit is curated with complete item checklists (Navgraha samidha, pure camphor, chandan, dhoop, rakshasutra, janeu, and specific prasad offerings) ensuring your temple priest or family purohit has everything required without missing components.",
  },
  {
    question: "Can I get personalized puja guidance from Varanasi priests?",
    answer:
      "Yes. Kashi Prasad connects you with certified Vedic Shastris who can guide your Sankalp, Muhurat selection, and ritual steps via live video call or WhatsApp consultation.",
  },
];

export default async function PujaKitsPage() {
  let products = await getProductsByCategory("puja-kits");
  if (!products || products.length === 0) {
    products = pujaKitProducts.filter((product) => !product.isPlaceholder);
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kashiprasad.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Puja Kits",
        item: "https://kashiprasad.in/puja-kits",
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Vedic Puja Kits & Ritual Essentials Collection",
    description: "Authentic complete ritual kits curated by learned Kashi Shastris with holy Gangotri and Kashi samagri.",
    url: "https://kashiprasad.in/puja-kits",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.slice(0, 12).map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://kashiprasad.in/products/${p.slug}`,
        name: p.name,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <CollectionPage
        eyebrow="Sanctified Samagri"
        title="Vedic Puja Kits"
        description="Comprehensive ritual kits featuring pure Kashi Gangajal, Bhasma, Roli, and authentic Hawan herbs blessed by temple purohits."
        products={products}
      />
      <SeoFaqSection
        title="Vedic Puja Kits & Hawan Samagri Guide"
        subtitle="Authentic Varanasi temple samagri preparation and complete Karmakanda ritual essentials."
        faqs={pujaKitFaqs}
      />
    </>
  );
}

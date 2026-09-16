import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";
import SeoFaqSection from "@/components/SeoFaqSection";
import { rudrakshaProducts } from "@/data/rudraksha";
import { getProductsByCategory } from "@/lib/data/catalog";

export const metadata: Metadata = {
  title: "Authentic Nepali Rudraksha (1 to 14 Mukhi) | Lab Certified | Kashi Prasad",
  description:
    "Buy 100% original, lab-certified Nepali Rudraksha beads and Kantha malas. Consecrated with sacred Vedic Pran Pratishtha at Kashi Vishwanath Dham, Varanasi. Free consultation & certificate.",
  keywords: [
    "Nepali Rudraksha",
    "Original Rudraksha Varanasi",
    "5 Mukhi Rudraksha",
    "1 to 14 Mukhi Rudraksha",
    "Certified Rudraksha Kashi",
    "Rudraksha Pran Pratishtha",
  ],
  alternates: {
    canonical: "https://kashiprasad.in/rudraksha",
  },
  openGraph: {
    title: "Authentic Nepali Rudraksha (1 to 14 Mukhi) | Lab Certified | Kashi Prasad",
    description:
      "Buy 100% original, lab-certified Nepali Rudraksha beads consecrated with sacred Vedic Pran Pratishtha in Varanasi.",
    url: "https://kashiprasad.in/rudraksha",
    siteName: "Kashi Prasad",
    images: [{ url: "https://kashiprasad.in/logo.png", width: 1024, height: 1024, alt: "Kashi Prasad Rudraksha" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authentic Nepali Rudraksha (1 to 14 Mukhi) | Kashi Prasad",
    description: "Lab-tested Nepali Rudraksha consecrated in Varanasi.",
    images: ["https://kashiprasad.in/logo.png"],
  },
};

const rudrakshaFaqs = [
  {
    question: "How to identify 100% original Nepali Rudraksha beads?",
    answer:
      "Authentic Nepali Rudraksha beads possess clear, natural deep-grooved Mukhi lines running seamlessly from head to tail, natural density, and distinct internal seed chambers verifiable via X-ray testing. Every Rudraksha from Kashi Prasad is certified by government-recognized gemological laboratories and accompanied by a digital Pran Pratishtha report.",
  },
  {
    question: "What is Vedic Pran Pratishtha and why is it essential?",
    answer:
      "Pran Pratishtha is an ancient consecration ritual conducted by learned Kashi Shastris along the sacred Ganga ghats. Using holy Gangajal, Panchamrit, and authentic Vedic Beej Mantras, the spiritual vibrations of the bead are activated to provide protection, mental peace, and planetary harmony to the wearer.",
  },
  {
    question: "Can anyone wear Nepali Rudraksha regardless of gender or zodiac?",
    answer:
      "Yes. According to the Shiva Purana and Padma Purana, Rudraksha carries pure divine energy with zero malefic side effects. Anyone seeking spiritual focus, health benefits, stress relief, and positive aura can wear authentic Nepali Rudraksha. 5 Mukhi is universally beneficial for all individuals.",
  },
  {
    question: "How should I maintain and energize my Rudraksha bead?",
    answer:
      "Clean your bead gently with a soft brush and clean water once a month, let it dry naturally, and apply a drop of natural sandalwood or sesame oil. Re-energize it by holding it in your right hand and chanting 'Om Namah Shivaya' 108 times.",
  },
];

export default async function RudrakshaPage() {
  let products = await getProductsByCategory("rudraksha");
  if (!products || products.length === 0) {
    products = rudrakshaProducts;
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
        name: "Rudraksha",
        item: "https://kashiprasad.in/rudraksha",
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Authentic Nepali Rudraksha Collection",
    description: "Lab-certified authentic 1 to 14 Mukhi Nepali Rudraksha beads and malas blessed in Varanasi.",
    url: "https://kashiprasad.in/rudraksha",
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
        eyebrow="Vedic Consecrated Rudraksha"
        title="Sacred Nepali Rudraksha"
        description="Authentic 1 to 14 Mukhi beads and Collector Kanthas, lab-certified for density and internal chamber structure with holy Assi Ghat Pran Pratishtha."
        products={products}
      />
      <SeoFaqSection
        title="Nepali Rudraksha Spiritual & Authenticity Guide"
        subtitle="Key insights into sacred Mukhi selection, laboratory certification, and Varanasi rituals."
        faqs={rudrakshaFaqs}
      />
    </>
  );
}

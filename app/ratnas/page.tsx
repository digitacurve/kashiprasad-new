import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";
import SeoFaqSection from "@/components/SeoFaqSection";
import { ratnaProducts } from "@/data/ratnas";

export const metadata: Metadata = {
  title: "Certified Vedic Gemstones (Ratnas) — Astrological Quality | Kashi Prasad",
  description:
    "Explore 100% natural, unheated & untreated Vedic Ratnas (Manikya Ruby, Panna Emerald, Pukhraj Yellow Sapphire, Moti Pearl, Neelam) energized with planetary Graha mantras in Varanasi.",
  keywords: [
    "Vedic Ratnas",
    "Natural Gemstones Varanasi",
    "Manikya Ruby",
    "Panna Emerald",
    "Pukhraj Yellow Sapphire",
    "Moti Pearl",
    "Certified Jyotish Gemstones",
  ],
  alternates: {
    canonical: "https://kashiprasad.in/ratnas",
  },
  openGraph: {
    title: "Certified Vedic Gemstones (Ratnas) | Kashi Prasad",
    description:
      "Explore 100% natural, unheated & untreated Vedic Ratnas energized with planetary Graha mantras in Varanasi.",
    url: "https://kashiprasad.in/ratnas",
    siteName: "Kashi Prasad",
    images: [{ url: "https://kashiprasad.in/logo.png", width: 1024, height: 1024, alt: "Kashi Prasad Vedic Ratnas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Vedic Gemstones (Ratnas) | Kashi Prasad",
    description: "Natural gemstones energized with Vedic mantras along the holy Ganga.",
    images: ["https://kashiprasad.in/logo.png"],
  },
};

const ratnaFaqs = [
  {
    question: "Why must astrological gemstones (Ratnas) be unheated and untreated?",
    answer:
      "In Vedic Jyotish, only 100% natural, unheated gemstones retain their cosmic mineral frequency to channel planetary rays into your body's energy chakras. Heat-treated or glass-filled stones lose their metaphysical properties. Kashi Prasad guarantees strictly unheated, non-treated gemstones.",
  },
  {
    question: "How is the Vedic Pran Pratishtha conducted for gemstones?",
    answer:
      "Before dispatch, every stone is immersed in Gangajal and raw cow's milk, followed by 1,008 Vedic Graha Beej Mantra chants performed by Varanasi priests during the auspicious Hora and Tithi of the gemstone's ruling planet.",
  },
  {
    question: "How do I choose the correct gemstone for my horoscope?",
    answer:
      "Gemstone recommendation depends on your Janam Kundali (Ascendant/Lagna chart and Mahadasha periods). Kashi Prasad provides free consultation with certified Vedic astrologers to confirm the ideal gemstone, carat weight, metal (Gold/Silver/Panchdhatu), and finger placement.",
  },
  {
    question: "Are all Kashi Prasad gemstones laboratory certified?",
    answer:
      "Yes. Every gemstone comes with an individual lab certification report from ISO-certified gemological testing laboratories specifying exact origin, dimensions, refractive index, and authenticity.",
  },
];

export default function RatnasPage() {
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
        name: "Ratnas",
        item: "https://kashiprasad.in/ratnas",
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Certified Vedic Gemstones (Ratnas) Collection",
    description: "Natural, astrologically certified gemstones consecrated along the sacred ghats of Varanasi.",
    url: "https://kashiprasad.in/ratnas",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: ratnaProducts.map((p, index) => ({
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
        eyebrow="Astrological Gemstones"
        title="Sacred Vedic Ratnas"
        description="Natural, 100% lab-certified unheated gemstones consecrated along the holy ghats of Varanasi with planetary Graha Shanti mantras."
        products={ratnaProducts}
        emptyMessage="Approved Ratnas products and imagery will appear here."
      />
      <SeoFaqSection
        title="Vedic Gemstones (Ratnas) Astrological Guide"
        subtitle="Important information on natural gemstone testing, Graha energies, and Varanasi consecration."
        faqs={ratnaFaqs}
      />
    </>
  );
}

import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";
import SeoFaqSection from "@/components/SeoFaqSection";
import { malaProducts } from "@/data/malas";
import { getProductsByCategory } from "@/lib/data/catalog";

export const metadata: Metadata = {
  title: "Sacred Japa Malas (108 Beads) — Tulsi, Sphatik, Chandan, Rudraksha | Kashi Prasad",
  description:
    "Shop authentic 108-bead Japa Malas energized at Assi Ghat, Varanasi. Handcrafted Tulsi, Red & White Sandalwood, Kamal Gatta, Vaijayanti, and Pure Sphatik malas with Vedic Pran Pratishtha.",
  keywords: [
    "Japa Mala 108 Beads",
    "Tulsi Mala Varanasi",
    "Chandan Mala",
    "Sphatik Mala Original",
    "Kamal Gatta Mala",
    "Vaijayanti Mala",
    "Rudraksha Japa Mala",
  ],
  alternates: {
    canonical: "https://kashiprasad.in/malas",
  },
  openGraph: {
    title: "Sacred Japa Malas (108 Beads) — Tulsi, Sphatik, Chandan | Kashi Prasad",
    description:
      "Shop authentic 108-bead Japa Malas energized at Assi Ghat, Varanasi with complete Vedic Pran Pratishtha.",
    url: "https://kashiprasad.in/malas",
    siteName: "Kashi Prasad",
    images: [{ url: "https://kashiprasad.in/logo.png", width: 1024, height: 1024, alt: "Kashi Prasad Japa Malas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacred Japa Malas (108 Beads) | Kashi Prasad",
    description: "Authentic prayer malas energized along the sacred ghats of Varanasi.",
    images: ["https://kashiprasad.in/logo.png"],
  },
};

const malaFaqs = [
  {
    question: "Why do sacred Japa Malas contain exactly 108 beads + 1 Guru bead?",
    answer:
      "In Vedic tradition, 108 signifies cosmic completion — corresponding to the 12 astrological Rashis multiplied by the 9 Navagrahas (12 x 9 = 108), as well as the 108 primary energy channels (nadis) connecting at the Anahata heart chakra. The extra Guru bead anchors the cycle of chanting.",
  },
  {
    question: "What is the difference between Tulsi Mala and Rudraksha Mala?",
    answer:
      "Tulsi Mala is dedicated to Lord Vishnu and Lord Krishna, radiating sattvic purity, calmness, and heart devotion. Rudraksha Mala is consecrated to Lord Shiva and Mahadev energies, generating powerful concentration, fearlessness, and deep meditative focus.",
  },
  {
    question: "Can I wear my Japa chanting mala or should it be kept in a Gomukhi?",
    answer:
      "For optimal spiritual discipline, it is ideal to keep your primary mantra chanting mala inside a sacred cotton Gomukhi bag to preserve accumulated positive vibration, while wearing a separate consecrated necklace mala throughout the day.",
  },
  {
    question: "How do I maintain and protect pure Tulsi, Chandan, and Sphatik malas?",
    answer:
      "Avoid soaking natural wood malas in soapy tap water. Store in a clean dry altar box, and occasionally apply a tiny drop of pure white sandalwood attar or sesame oil to preserve natural scent and bead longevity.",
  },
];

export default async function MalasPage() {
  let products = await getProductsByCategory("malas");
  if (!products || products.length === 0) {
    products = malaProducts.filter((product) => !product.isPlaceholder);
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
        name: "Malas",
        item: "https://kashiprasad.in/malas",
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Sacred Japa Malas (108 Beads) Collection",
    description: "Handcrafted 108-bead Tulsi, Chandan, Sphatik, and Rudraksha malas blessed in holy Varanasi.",
    url: "https://kashiprasad.in/malas",
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
        eyebrow="Sacred Chanting Malas"
        title="108 Beads Japa Malas"
        description="Authentic Tulsi, Red & White Sandalwood, Sphatik, and Vaijayanti malas energized under strict Vedic rituals at Assi Ghat, Varanasi."
        products={products}
      />
      <SeoFaqSection
        title="Sacred Japa Malas (108 Beads) Guide"
        subtitle="Spiritual significance, bead selection, and daily chanting disciplines from Varanasi."
        faqs={malaFaqs}
      />
    </>
  );
}

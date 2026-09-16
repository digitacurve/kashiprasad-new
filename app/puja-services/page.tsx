import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Vedic Puja Services in Kashi — Personalized Sankalp & Live Video | Kashi Prasad",
  description:
    "Book authentic Kashi Vishwanath Rudrabhishek, Mahamrityunjaya Jaap, and personalized family Gotra Sankalp conducted live by learned Varanasi Shastris with sanctified Prasad delivery.",
  keywords: [
    "Kashi Vishwanath Rudrabhishek",
    "Online Puja Varanasi",
    "Mahamrityunjaya Jaap Booking",
    "Gotra Sankalp Kashi",
    "Varanasi Pandit Booking",
    "Ganga Aarti Booking",
  ],
  alternates: {
    canonical: "https://kashiprasad.in/puja-services",
  },
  openGraph: {
    title: "Vedic Puja Services in Kashi — Personalized Sankalp | Kashi Prasad",
    description:
      "Book authentic Kashi Vishwanath Rudrabhishek and personalized family Sankalp conducted by learned Varanasi Shastris.",
    url: "https://kashiprasad.in/puja-services",
    siteName: "Kashi Prasad",
    images: [{ url: "https://kashiprasad.in/logo.png", width: 1024, height: 1024, alt: "Kashi Prasad Puja Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Puja Services in Kashi | Kashi Prasad",
    description: "Personalized Sankalp and sacred rituals from holy Kashi Dham.",
    images: ["https://kashiprasad.in/logo.png"],
  },
};

export default function PujaServicesPage() {
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
        name: "Puja Services",
        item: "https://kashiprasad.in/puja-services",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kashi Vedic Puja & Sankalp Services",
    serviceType: "Spiritual and Vedic Rituals",
    provider: {
      "@type": "Organization",
      name: "Kashi Prasad",
      url: "https://kashiprasad.in",
    },
    areaServed: "Worldwide",
    description:
      "Authentic Vedic Rudrabhishek, Mahamrityunjaya recitations, and family Gotra Sankalp performed at Kashi Vishwanath Dham with sanctified Prasad dispatch.",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "1100",
      availability: "https://schema.org/InStock",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePage />
    </>
  );
}

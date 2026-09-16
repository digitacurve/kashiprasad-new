import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Pran Pratishtha Certificate & Lab Report | Kashi Prasad",
  description:
    "Digitally verify the Vedic Pran Pratishtha consecration, presiding Acharya details, and laboratory authentication certificate of your Kashi Prasad sacred order.",
  keywords: [
    "Verify Rudraksha Certificate",
    "Pran Pratishtha Verification",
    "Kashi Consecration Certificate",
    "Gemstone Lab Report Check",
  ],
  alternates: {
    canonical: "https://kashiprasad.in/verify-certificate",
  },
  openGraph: {
    title: "Verify Pran Pratishtha Certificate & Lab Report | Kashi Prasad",
    description: "Digital verification portal for consecrated Vedic items from Varanasi.",
    url: "https://kashiprasad.in/verify-certificate",
    siteName: "Kashi Prasad",
    images: [{ url: "https://kashiprasad.in/logo.png", width: 1024, height: 1024, alt: "Verify Certificate Kashi Prasad" }],
  },
};

export default function VerifyCertificateLayout({ children }: { children: React.ReactNode }) {
  const schema = {
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
        name: "Verify Certificate",
        item: "https://kashiprasad.in/verify-certificate",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}

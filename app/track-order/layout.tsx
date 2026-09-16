import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Your Sacred Order & Prasad Dispatch | Kashi Prasad",
  description:
    "Track your dispatched consecrated parcel, holy Kashi prasad, and authenticity certificate in real time with live SMS and WhatsApp tracking updates.",
  keywords: [
    "Track Kashi Prasad Order",
    "Prasad Dispatch Status",
    "Varanasi Parcel Tracking",
    "Rudraksha Order Status",
  ],
  alternates: {
    canonical: "https://kashiprasad.in/track-order",
  },
  openGraph: {
    title: "Track Your Sacred Order & Prasad Dispatch | Kashi Prasad",
    description: "Live real-time parcel and consecration certificate tracking.",
    url: "https://kashiprasad.in/track-order",
    siteName: "Kashi Prasad",
    images: [{ url: "https://kashiprasad.in/logo.png", width: 1024, height: 1024, alt: "Track Order Kashi Prasad" }],
  },
};

export default function TrackOrderLayout({ children }: { children: React.ReactNode }) {
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
        name: "Track Order",
        item: "https://kashiprasad.in/track-order",
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Ganga Aarti & Kashi Vishwanath Darshan 24x7 | Kashi Prasad",
  description:
    "Watch 24x7 sacred live streaming of Varanasi Ganga Aarti from Dashashwamedh Ghat and holy Kashi Vishwanath Jyotirlinga sanctum. Experience divine blessings in real time.",
  keywords: [
    "Live Ganga Aarti Varanasi",
    "Kashi Vishwanath Live Darshan",
    "Dashashwamedh Ghat Aarti Live",
    "Varanasi Aarti Timing",
    "Online Darshan Kashi",
  ],
  alternates: {
    canonical: "https://kashiprasad.in/live-darshan",
  },
  openGraph: {
    title: "Live Ganga Aarti & Kashi Vishwanath Darshan 24x7 | Kashi Prasad",
    description:
      "Watch 24x7 sacred live streaming of Varanasi Ganga Aarti and holy Kashi Vishwanath Jyotirlinga.",
    url: "https://kashiprasad.in/live-darshan",
    siteName: "Kashi Prasad",
    images: [{ url: "https://kashiprasad.in/logo.png", width: 1024, height: 1024, alt: "Live Darshan Kashi Prasad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Ganga Aarti & Kashi Vishwanath Darshan | Kashi Prasad",
    description: "24x7 holy streaming from the sacred ghats of Varanasi.",
    images: ["https://kashiprasad.in/logo.png"],
  },
};

export default function LiveDarshanLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            name: "Live Darshan",
            item: "https://kashiprasad.in/live-darshan",
          },
        ],
      },
      {
        "@type": "BroadcastEvent",
        name: "Kashi Vishwanath & Ganga Aarti 24x7 Live Darshan",
        description: "Continuous sacred live streaming of holy Varanasi Ganga Aarti and Kashi Vishwanath Dham.",
        isLiveBroadcast: true,
        videoFormat: "HD",
        broadcastOfEvent: {
          "@type": "Event",
          name: "Varanasi Maha Ganga Aarti & Temple Darshan",
          location: {
            "@type": "Place",
            name: "Dashashwamedh Ghat & Kashi Vishwanath Temple, Varanasi",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Varanasi",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
          },
        },
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

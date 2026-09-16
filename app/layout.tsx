import type { Metadata } from "next";
import Script from "next/script";
import { Cinzel, Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { AuthProvider } from "@/components/AuthProvider";
import { CurrencyProvider } from "@/components/CurrencyProvider";
import { WishlistProvider } from "@/components/WishlistProvider";
import CartDrawer from "@/components/CartDrawer";
import WishlistDrawer from "@/components/WishlistDrawer";
import SearchModal from "@/components/SearchModal";
import AuthModal from "@/components/AuthModal";
import WhatsAppConsultation from "@/components/WhatsAppConsultation";
import AutoLoginPrompt from "@/components/AutoLoginPrompt";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kashiprasad.in"),
  title: {
    default: "Kashi Prasad | Sacred Consecrated Malas, Ratnas & Divine Adornments",
    template: "%s | Kashi Prasad",
  },
  description:
    "Official website of Kashi Prasad (kashiprasad.in). Authentic consecrated 5-Mukhi Nepali Rudraksha, Certified Vedic Ratnas, and Kashi Vishwanath Puja Services sanctified in Varanasi.",
  keywords: [
    "kashiprasad.in",
    "kashiprasad",
    "Kashi Prasad",
    "Kashi Vishwanath Prasad",
    "Nepali Rudraksha",
    "Vedic Ratnas",
    "Rudraksha Mala Varanasi",
    "Kashi Pooja Services",
    "Ganga Aarti Varanasi",
  ],
  authors: [{ name: "Kashi Prasad" }],
  creator: "Kashi Prasad",
  publisher: "Kashi Prasad",
  alternates: {
    canonical: "https://kashiprasad.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kashiprasad.in",
    siteName: "Kashi Prasad",
    title: "Kashi Prasad | Sacred Consecrated Malas, Ratnas & Divine Adornments",
    description:
      "Authentic consecrated 5-Mukhi Nepali Rudraksha, Certified Vedic Ratnas, and Kashi Vishwanath Puja Services sanctified along the holy ghats of Varanasi.",
    images: [
      {
        url: "https://kashiprasad.in/logo.png",
        width: 1024,
        height: 1024,
        alt: "Kashi Prasad Sacred Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashi Prasad | Sacred Consecrated Malas & Vedic Ratnas",
    description: "Authentic consecrated spiritual adornments blessed in holy Varanasi.",
    images: ["https://kashiprasad.in/logo.png"],
  },
  verification: {
    google: "googled6607382bfe7c86c",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kashiprasad.in/#organization",
      name: "Kashi Prasad",
      alternateName: ["kashiprasad", "kashiprasad.in", "KashiPrasad", "Kashi Prasad Varanasi", "Kashi Prasad Store"],
      url: "https://kashiprasad.in",
      logo: {
        "@type": "ImageObject",
        url: "https://kashiprasad.in/logo.png",
        width: "1024",
        height: "1024",
      },
      image: "https://kashiprasad.in/logo.png",
      sameAs: [
        "https://www.instagram.com",
        "https://wa.me/918604971503"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8604971503",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["Hindi", "English"],
      },
    },
    {
      "@type": "Store",
      "@id": "https://kashiprasad.in/#store",
      name: "Kashi Prasad",
      description: "Authentic consecrated Nepali Rudraksha, Vedic Gemstones (Ratnas), Japa Malas, and Kashi Puja Services from Varanasi.",
      url: "https://kashiprasad.in",
      telephone: "+91-8604971503",
      priceRange: "₹₹",
      image: "https://kashiprasad.in/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kashi Vishwanath Corridor, Dashashwamedh",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        postalCode: "221001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "25.3176",
        longitude: "82.9739",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "06:00",
          closes: "22:00",
        },
      ],
      currenciesAccepted: "INR",
      paymentAccepted: "UPI, Credit Card, Debit Card, Net Banking, Cash on Delivery",
    },
    {
      "@type": "WebSite",
      "@id": "https://kashiprasad.in/#website",
      url: "https://kashiprasad.in",
      name: "Kashi Prasad",
      alternateName: ["kashiprasad", "kashiprasad.in", "KashiPrasad"],
      publisher: {
        "@id": "https://kashiprasad.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://kashiprasad.in/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Brand",
      "@id": "https://kashiprasad.in/#brand",
      name: "Kashi Prasad",
      alternateName: ["kashiprasad", "kashiprasad.in"],
      url: "https://kashiprasad.in",
      logo: "https://kashiprasad.in/logo.png",
    },
    {
      "@type": "ItemList",
      "@id": "https://kashiprasad.in/#sitelinks",
      name: "Kashi Prasad Sacred Collections & Services",
      description: "Direct access to authentic consecrated spiritual products and temple services from Varanasi.",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Authentic Nepali Rudraksha",
          description: "100% lab-certified 1 to 14 Mukhi Nepali Rudraksha beads consecrated at Kashi Vishwanath Dham.",
          url: "https://kashiprasad.in/rudraksha",
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "Sacred Japa Malas (108 Beads)",
          description: "Original consecrated Tulsi, Sphatik, Chandan, Kamal Gatta, and Rudraksha prayer malas.",
          url: "https://kashiprasad.in/malas",
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "Certified Vedic Ratnas (Gemstones)",
          description: "Natural unheated Manikya (Ruby), Panna (Emerald), Pukhraj, and Neelam energized with Vedic mantras.",
          url: "https://kashiprasad.in/ratnas",
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Vedic Puja Kits & Hawan Essentials",
          description: "Complete authentic ritual kits for Rudrabhishek, Mahamrityunjaya, Griha Pravesh, and Navgraha puja.",
          url: "https://kashiprasad.in/puja-kits",
        },
        {
          "@type": "SiteNavigationElement",
          position: 5,
          name: "Vedic Puja Services in Kashi",
          description: "Personalized Sankalp and live video rituals conducted by learned Varanasi Shastris with prasad dispatch.",
          url: "https://kashiprasad.in/puja-services",
        },
        {
          "@type": "SiteNavigationElement",
          position: 6,
          name: "Live Kashi Darshan & Ganga Aarti",
          description: "24x7 live streaming of holy Dashashwamedh Ghat Ganga Aarti and Kashi Vishwanath Jyotirlinga sanctum.",
          url: "https://kashiprasad.in/live-darshan",
        },
        {
          "@type": "SiteNavigationElement",
          position: 7,
          name: "Verify Pran Pratishtha Certificate",
          description: "Verify digital consecration certificates, priest details, and lab authenticity reports.",
          url: "https://kashiprasad.in/verify-certificate",
        },
        {
          "@type": "SiteNavigationElement",
          position: 8,
          name: "Track Order & Prasad Dispatch",
          description: "Live tracking of holy Varanasi dispatch parcel, tracking ID, and delivery status.",
          url: "https://kashiprasad.in/track-order",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${cormorant.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#06080c] text-[#f5f5f7] font-sans antialiased">
        <CurrencyProvider>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                {children}
                <CartDrawer />
                <WishlistDrawer />
                <SearchModal />
                <AuthModal />
                <WhatsAppConsultation />
                <AutoLoginPrompt />
                <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}

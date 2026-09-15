import type { Metadata } from "next";
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
import WelcomeOfferModal from "@/components/WelcomeOfferModal";
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kashiprasad.in",
    siteName: "Kashi Prasad",
    title: "Kashi Prasad | Sacred Consecrated Malas, Ratnas & Divine Adornments",
    description:
      "Authentic consecrated 5-Mukhi Nepali Rudraksha, Certified Vedic Ratnas, and Kashi Vishwanath Puja Services sanctified along the holy ghats of Varanasi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashi Prasad | Sacred Consecrated Malas & Vedic Ratnas",
    description: "Authentic consecrated spiritual adornments blessed in holy Varanasi.",
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
      alternateName: ["kashiprasad.in", "KashiPrasad", "Kashi Prasad Varanasi"],
      url: "https://kashiprasad.in",
      logo: "https://kashiprasad.in/favicon.ico",
      sameAs: [
        "https://www.instagram.com",
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
      "@type": "WebSite",
      "@id": "https://kashiprasad.in/#website",
      url: "https://kashiprasad.in",
      name: "Kashi Prasad",
      alternateName: "kashiprasad.in",
      publisher: {
        "@id": "https://kashiprasad.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://kashiprasad.in/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
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
                <WelcomeOfferModal />
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}

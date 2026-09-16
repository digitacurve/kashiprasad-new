import React from "react";
import { notFound } from "next/navigation";
import { getProductBySlug as getStaticProductBySlug, getAllActiveProducts } from "@/data/products";
import { getProductBySlug as getSupabaseProductBySlug } from "@/lib/data/catalog";
import ProductDetailClient from "./ProductDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllActiveProducts().map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  let product = await getSupabaseProductBySlug(slug);
  if (!product) {
    product = getStaticProductBySlug(slug) || null;
  }

  if (!product) return {};

  const fullTitle = `${product.name}${product.tagline ? ` — ${product.tagline}` : ""} | Kashi Prasad`;
  const canonicalUrl = `https://kashiprasad.in/products/${product.slug}`;
  const imageUrl = product.images?.[0] || "https://kashiprasad.in/logo.png";

  return {
    title: fullTitle,
    description: product.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: product.shortDescription,
      url: canonicalUrl,
      siteName: "Kashi Prasad",
      images: [
        {
          url: imageUrl,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: product.shortDescription,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // 1. Attempt to fetch from Supabase server-side read layer
  let product = await getSupabaseProductBySlug(slug);

  // 2. Gracefully fall back to existing static catalog if Supabase returns null / offline
  if (!product) {
    product = getStaticProductBySlug(slug) || null;
  }

  if (!product || product.isPlaceholder) {
    notFound();
  }

  const categorySlug = product.category || "rudraksha";
  const categoryName = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  const productSchema = {
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
            name: categoryName,
            item: `https://kashiprasad.in/${categorySlug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: `https://kashiprasad.in/products/${product.slug}`,
          },
        ],
      },
      {
        "@type": "Product",
        "@id": `https://kashiprasad.in/products/${product.slug}#product`,
        name: product.name,
        image: product.images,
        description: product.shortDescription,
        sku: product.id || product.slug,
        brand: {
          "@type": "Brand",
          name: "Kashi Prasad",
        },
        offers: {
          "@type": "Offer",
          url: `https://kashiprasad.in/products/${product.slug}`,
          priceCurrency: "INR",
          price: (product.price || product.variants?.[0]?.price || 1100).toString(),
          priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: "IN",
            returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 7,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/FreeReturn",
          },
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "INR",
            },
            shippingDestination: {
              "@type": "DefinedRegion",
              addressCountry: "IN",
            },
            deliveryTime: {
              "@type": "ShippingDeliveryTime",
              handlingTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 1,
                unitCode: "DAY",
              },
              transitTime: {
                "@type": "QuantitativeValue",
                minValue: 2,
                maxValue: 5,
                unitCode: "DAY",
              },
            },
          },
          seller: {
            "@type": "Organization",
            name: "Kashi Prasad",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "128",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}


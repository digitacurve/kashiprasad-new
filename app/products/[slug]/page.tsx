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

  return {
    title: `${product.name}${product.tagline ? ` — ${product.tagline}` : ""} | Kashi Prasad`,
    description: product.shortDescription,
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

  return <ProductDetailClient product={product} />;
}


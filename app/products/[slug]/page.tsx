import React from "react";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllActiveProducts } from "@/data/products";
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
  const product = getProductBySlug(slug);

  if (!product) return {};

  return {
    title: `${product.name} — ${product.tagline} | Kashi Prasad`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.isPlaceholder) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

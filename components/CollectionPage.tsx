"use client";

import React from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import ProductCard from "./ProductCard";
import { Product } from "@/data/types";

export type CollectionProduct = Product;

interface CollectionPageProps {
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
  emptyMessage?: string;
  subcategories?: string[];
}

export default function CollectionPage({
  eyebrow,
  title,
  description,
  products,
  emptyMessage,
  subcategories,
}: CollectionPageProps) {
  return (
    <div className="min-h-screen bg-[#06080c] text-zinc-100">
      <SiteHeader />
      <main>
        {/* Collection Header */}
        <section className="border-b border-amber-500/10 px-4 py-12 text-center sm:px-8 sm:py-20">
          <p className="text-xs font-mono uppercase tracking-[.22em] text-amber-400">{eyebrow}</p>
          <h1 className="mt-3 font-serif text-3xl font-bold uppercase sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-400">
            {description}
          </p>
          {subcategories && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {subcategories.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-xs text-amber-300"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* Product Catalogue Grid (5-column desktop, 3-4 tablet, 2 mobile) */}
        <section className="mx-auto max-w-7xl px-3.5 py-10 sm:px-6 lg:px-8 sm:py-14">
          {products.length ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/40 p-10 text-center text-zinc-500">
              {emptyMessage ??
                "This collection is being prepared. Product details and imagery will appear here once approved."}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

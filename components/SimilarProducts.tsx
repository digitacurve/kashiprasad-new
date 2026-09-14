"use client";

import { useMemo } from "react";
import { Product } from "@/data/types";
import { allProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function SimilarProducts({ currentProduct }: { currentProduct: Product }) {
  const recommendations = useMemo(() => {
    // 1. Same category products
    const sameCat = allProducts.filter(
      (p) =>
        p.id !== currentProduct.id &&
        !p.isPlaceholder &&
        p.category.toLowerCase() === currentProduct.category.toLowerCase()
    );

    // 2. Complementary products from other categories
    const otherCat = allProducts.filter(
      (p) =>
        p.id !== currentProduct.id &&
        !p.isPlaceholder &&
        p.category.toLowerCase() !== currentProduct.category.toLowerCase()
    );

    // Combine and take top 4
    const combined = [...sameCat, ...otherCat].slice(0, 4);
    return combined;
  }, [currentProduct]);

  if (recommendations.length === 0) return null;

  return (
    <section className="mt-16 sm:mt-24 border-t border-amber-500/15 pt-12 sm:pt-16">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300">
          <span>✦ Sacred Harmony</span>
        </div>
        <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-zinc-100">
          Customers Also Explored
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-zinc-400 max-w-xl">
          Complementary sacred malas, energized rudrakshas, and authentic puja essentials crafted for your spiritual path.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {recommendations.map((prod) => (
          <div key={prod.id} className="w-full">
            <ProductCard product={prod} />
          </div>
        ))}
      </div>
    </section>
  );
}

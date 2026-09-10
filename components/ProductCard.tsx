import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/types";

export interface ProductCardProps {
  product: Product | {
    id: string;
    slug?: string;
    name: string;
    category?: string;
    subCategory?: string;
    image?: string;
    price?: number;
    mrp?: number;
    badge?: string;
    rating?: number;
    reviewCount?: number;
  };
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const hasRating = typeof product.rating === "number" && product.rating > 0;
  const hasReviews = typeof product.reviewCount === "number" && product.reviewCount > 0;
  const hasDiscount =
    typeof product.price === "number" &&
    typeof product.mrp === "number" &&
    product.mrp > product.price;

  const discountPercent = hasDiscount
    ? Math.round((((product.mrp! - product.price!) / product.mrp!) * 100))
    : 0;

  const cardInner = (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-2.5 sm:p-3 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-zinc-900/60 hover:shadow-xl hover:shadow-black/60 ${className}`}
    >
      {/* Product Image Area */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800/50">
        {/* Product Badge / Tag */}
        {product.badge && (
          <span className="absolute left-2 top-2 z-10 rounded-md border border-amber-500/30 bg-zinc-950/80 px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-medium uppercase tracking-wider text-amber-300 backdrop-blur-md">
            {product.badge}
          </span>
        )}

        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2.5 sm:p-3 transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-2xl text-amber-500/40">
            ✦
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="mt-2.5 flex flex-1 flex-col justify-between">
        <div>
          {/* Category / Eyebrow Label */}
          {product.category && (
            <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-amber-400/90 truncate">
              {product.category}
            </p>
          )}

          {/* Product Name */}
          <h3 className="mt-1 font-serif text-xs sm:text-sm font-medium text-zinc-100 leading-snug line-clamp-2 min-h-[2.4rem] group-hover:text-amber-200 transition-colors">
            {product.name}
          </h3>

          {/* Rating & Review Count (Rendered only if actual data exists) */}
          {hasRating && (
            <div className="mt-1 flex items-center gap-1.5 text-xs">
              <div className="flex items-center text-amber-400 text-[11px] tracking-tighter" aria-label={`Rating: ${product.rating} out of 5`}>
                {"★".repeat(Math.round(product.rating!))}
                {"☆".repeat(Math.max(0, 5 - Math.round(product.rating!)))}
              </div>
              <span className="font-mono text-[11px] font-semibold text-zinc-300">
                {product.rating!.toFixed(1)}
              </span>
              {hasReviews && (
                <span className="text-[11px] text-zinc-500">
                  ({product.reviewCount})
                </span>
              )}
            </div>
          )}
        </div>

        {/* Price Information */}
        {product.price !== undefined && (
          <div className="mt-2 flex items-baseline gap-1.5 sm:gap-2 pt-1 border-t border-zinc-800/40">
            <span className="font-serif text-sm sm:text-base font-semibold text-zinc-100">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {hasDiscount && (
              <span className="text-[11px] sm:text-xs text-zinc-500 line-through">
                ₹{product.mrp!.toLocaleString("en-IN")}
              </span>
            )}
            {hasDiscount && discountPercent > 0 && (
              <span className="text-[10px] font-mono font-medium text-emerald-400/90 ml-auto">
                {discountPercent}% OFF
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );

  if (product.slug) {
    return (
      <Link href={`/products/${product.slug}`} className="block h-full select-none">
        {cardInner}
      </Link>
    );
  }

  return cardInner;
}

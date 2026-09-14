"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/types";

import { playLuxuryHaptic } from "@/lib/audio";

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
    shortDescription?: string;
  };
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  const isHoveredRef = useRef(false);

  const hasRating = typeof product.rating === "number" && product.rating > 0;
  const hasReviews = typeof product.reviewCount === "number" && product.reviewCount > 0;
  const hasDiscount =
    typeof product.price === "number" &&
    typeof product.mrp === "number" &&
    product.mrp > product.price;

  const discountPercent = hasDiscount
    ? Math.round(((product.mrp! - product.price!) / product.mrp!) * 100)
    : 0;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    // Smooth dynamic 3D tilt angles
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 10;

    setMousePos({ x: percentX, y: percentY, rotateX, rotateY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!isHoveredRef.current) {
      isHoveredRef.current = true;
      setIsHovered(true);
      playLuxuryHaptic();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    setIsHovered(false);
    setMousePos({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  }, []);

  const cardInner = (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-2.5 sm:p-3 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-amber-500/50 hover:bg-zinc-900/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(223,171,82,0.22)] cursor-pointer select-none [perspective:1000px] overflow-hidden ${className}`}
    >
      {/* Dynamic Interactive Card-Wide Cursor Spotlight Shimmer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 235, 180, 0.22), rgba(223, 171, 82, 0.14) 45%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle Golden Border Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl border border-amber-400/0 opacity-0 transition-all duration-300 group-hover:border-amber-400/40 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Product Image Area with 3D Holographic Parallax & Radiant Lighting */}
      <div
        className="relative aspect-square w-full rounded-xl overflow-hidden border border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-950 transition-all duration-500 ease-out"
        style={{
          transform: isHovered
            ? `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) scale3d(1.04, 1.04, 1.04)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 20px 40px -10px rgba(223, 171, 82, 0.35), 0 0 25px rgba(223, 171, 82, 0.2)"
            : "none",
        }}
      >
        {/* Product Badge / Tag */}
        {product.badge && (
          <span className="absolute left-2 top-2 z-10 rounded-md border border-amber-500/30 bg-zinc-950/80 px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-medium uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-sm">
            {product.badge}
          </span>
        )}

        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2.5 sm:p-3 transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
            sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-2xl text-amber-500/40">
            ✦
          </div>
        )}

        {/* Image-Specific Cursor Spotlight Shimmer */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(240px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 235, 180, 0.28), rgba(223, 171, 82, 0.15) 45%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Prismatic Light Flare Glint Sweep */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transition-opacity duration-700 ${
            isHovered ? "opacity-100 animate-luxury-glint" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Refined Gold Border Glow on Image */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl border border-amber-400/0 transition-all duration-500 group-hover:border-amber-400/40"
          aria-hidden="true"
        />
      </div>

      {/* Product Information */}
      <div className="mt-2.5 flex flex-1 flex-col justify-between relative z-10">
        <div>
          {/* Category / Eyebrow Label */}
          {product.category && (
            <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-amber-400/90 truncate">
              {product.category}
            </p>
          )}

          {/* Product Name */}
          <h3 className="mt-1 font-serif text-xs sm:text-sm font-medium text-zinc-100 leading-snug line-clamp-2 min-h-[2.4rem] group-hover:text-amber-200 transition-colors duration-300">
            {product.name}
          </h3>

          {/* Short description for Ratnas or products that provide it */}
          {"shortDescription" in product && product.shortDescription && (
            <p className="mt-1 text-[11px] text-zinc-400 line-clamp-2 leading-relaxed font-sans">
              {product.shortDescription}
            </p>
          )}

          {/* Rating & Review Count */}
          {hasRating && (
            <div className="mt-1.5 flex items-center gap-1.5 text-xs">
              <div
                className="flex items-center text-amber-400 text-[11px] tracking-tighter"
                aria-label={`Rating: ${product.rating} out of 5`}
              >
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

        {/* Price & CTA Information */}
        {product.price !== undefined && (
          <div className="mt-2.5 pt-2 border-t border-zinc-800/60">
            {product.category === "Ratnas" ? (
              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400">
                    Starting from
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-amber-300">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-0.5">
                  <span className="text-[11px] font-mono font-medium text-amber-400 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all flex items-center gap-1">
                    Customize {product.name.split("(")[0].trim()} <span className="text-xs">→</span>
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-500">
                    Customizable
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-baseline gap-1.5 sm:gap-2">
                <span className="font-serif text-sm sm:text-base font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {hasDiscount && (
                  <span className="text-[11px] sm:text-xs text-zinc-500 line-through">
                    ₹{product.mrp!.toLocaleString("en-IN")}
                  </span>
                )}
                {hasDiscount && discountPercent > 0 && (
                  <span className="text-[10px] font-mono font-medium text-emerald-400/90 ml-auto bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>
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
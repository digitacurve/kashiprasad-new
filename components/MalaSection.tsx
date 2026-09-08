"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { malaProducts, MalaProduct } from "@/data/malas";

export default function MalaSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const isPointerDownRef = useRef(false);
  const hasMovedRef = useRef(false);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const toggleWishlist = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < maxScroll - 6);

    if (maxScroll > 0) {
      setScrollProgress(Math.min(Math.max(scrollLeft / maxScroll, 0), 1));
    }
  }, []);

  useEffect(() => {
    checkScrollability();
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleResize = () => checkScrollability();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [checkScrollability]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-mala-card]");
    const cardWidth = firstCard ? firstCard.offsetWidth : el.clientWidth * 0.75;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Mouse Drag to Scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isPointerDownRef.current = true;
    hasMovedRef.current = false;
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPointerDownRef.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.25;
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true;
      setIsDragging(true);
    }
    el.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    isPointerDownRef.current = false;
    setTimeout(() => {
      setIsDragging(false);
      hasMovedRef.current = false;
    }, 50);
  };

  return (
    <section
      id="mala"
      className="relative z-30 bg-[#06080c] border-t border-amber-500/15 py-8 sm:py-32 px-4 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Soft atmospheric golden ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[950px] h-[160px] sm:h-[380px] bg-gradient-to-b from-amber-500/8 via-amber-600/3 to-transparent blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-amber-400 bg-amber-500/10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-amber-500/20 mb-2 sm:mb-4">
            <span className="text-[9px] sm:text-[10px] text-amber-300">✦</span>
            SACRED MALA COLLECTION
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 uppercase">
            108 PRAYER MALAS
          </h2>
          <p className="text-zinc-400 font-subheading italic text-sm sm:text-xl mt-1.5 sm:mt-4 leading-relaxed">
            Authentic 108-bead consecrated prayer malas, hand-knotted and energized along the sacred ghats of Varanasi.
          </p>
        </div>

        {/* Carousel Header Controls */}
        <div className="flex items-center justify-between mb-3 sm:mb-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-zinc-950/80 border border-zinc-800/80 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-amber-300/90">
                {malaProducts.length} Consecrated Malas • Hand-Threaded & Energized
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-amber-500/30 bg-zinc-900/90 text-amber-300 hover:bg-amber-500/15 hover:border-amber-400 disabled:opacity-25 disabled:pointer-events-none flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-black/60 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-[18px] sm:h-[18px]"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-amber-500/30 bg-zinc-900/90 text-amber-300 hover:bg-amber-500/15 hover:border-amber-400 disabled:opacity-25 disabled:pointer-events-none flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-black/60 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-[18px] sm:h-[18px]"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Track Container */}
        <div className="relative -mx-4 sm:mx-0 px-4 sm:px-0">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            data-lenis-prevent
            className={`flex gap-3 sm:gap-6 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-pl-4 sm:scroll-pl-0 scroll-smooth pb-2 sm:pb-4 select-none touch-pan-x ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {malaProducts.map((product) => {
              const isWishlisted = !!wishlist[product.id];

              return (
                <div
                  key={product.id}
                  data-mala-card
                  className="snap-start flex-shrink-0 w-[66vw] min-w-[210px] max-w-[250px] sm:w-[calc(50%-12px)] sm:min-w-0 sm:max-w-none lg:w-[calc((100%-48px)/3)] group relative bg-zinc-950/80 rounded-xl sm:rounded-2xl border border-zinc-800/90 hover:border-amber-500/50 p-3 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(223,171,82,0.12)]"
                >
                  {/* Subtle Background Radial Accent */}
                  <div
                    className="absolute top-0 right-0 w-32 sm:w-44 h-32 sm:h-44 bg-amber-500/5 blur-3xl rounded-full group-hover:bg-amber-500/15 transition-all duration-500 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Top Area: Image & Badges */}
                  <div>
                    <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-lg sm:rounded-xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-2 sm:p-4 flex items-center justify-center overflow-hidden mb-2.5 sm:mb-6 border border-zinc-800/80 group-hover:border-amber-500/40 transition-colors">
                      {/* Product Badge */}
                      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[8px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 px-2 py-0.5 rounded-full z-10 shadow-sm shadow-black/60">
                        {product.badge}
                      </span>

                      {/* Wishlist Button */}
                      <button
                        type="button"
                        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                        onClick={(e) => toggleWishlist(product.id, e)}
                        className={`absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full border transition-all z-10 active:scale-90 flex items-center justify-center ${
                          isWishlisted
                            ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_10px_rgba(223,171,82,0.5)]"
                            : "bg-zinc-900/80 border-zinc-700/60 hover:border-amber-500/60 hover:text-amber-300 text-zinc-400"
                        }`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill={isWishlisted ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="sm:w-3.5 sm:h-3.5"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </button>

                      {/* Actual Mala Image */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full object-contain rounded-md sm:rounded-lg group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Rating & Review Count */}
                    <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-amber-400 mb-1 sm:mb-2">
                      <span className="text-amber-300">★</span>
                      <span className="font-semibold text-zinc-200">{product.rating}</span>
                      <span className="text-zinc-500 text-[9px] sm:text-[11px]">
                        ({product.reviewCount})
                      </span>
                      <span className="hidden sm:inline-block text-zinc-600 text-[10px] ml-auto font-mono">
                        Varanasi Sourced
                      </span>
                    </div>

                    {/* Tagline */}
                    <span className="text-[9px] sm:text-[11px] font-mono text-amber-400/90 uppercase tracking-wider block mb-0.5 sm:mb-1 line-clamp-1">
                      {product.tagline}
                    </span>

                    {/* Product Name */}
                    <h3 className="font-serif text-sm sm:text-xl font-bold text-zinc-100 group-hover:text-amber-300 transition-colors leading-tight line-clamp-1 sm:line-clamp-none">
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 sm:mt-2 leading-relaxed line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Bottom Area: Pricing & CTA */}
                  <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-5 border-t border-zinc-800/80">
                    <div className="flex items-baseline justify-between mb-2.5 sm:mb-4">
                      <div>
                        <span className="text-[8px] sm:text-[10px] font-mono text-zinc-500 uppercase block leading-none">
                          Starting At
                        </span>
                        <div className="flex items-baseline gap-1.5 sm:gap-2 mt-0.5">
                          <span className="font-serif text-base sm:text-2xl font-bold text-zinc-100">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                          <span className="text-[10px] sm:text-xs text-zinc-500 line-through">
                            ₹{product.mrp.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                      <span className="text-[8px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                        50% Off
                      </span>
                    </div>

                    {/* Explore Mala CTA Button */}
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={(e) => {
                        if (hasMovedRef.current) e.preventDefault();
                      }}
                      className="w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#dfab52] via-[#fed88b] to-[#b88628] hover:from-[#fed88b] hover:to-[#dfab52] text-zinc-950 text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5 sm:gap-2 active:scale-98 group/btn"
                    >
                      <span>Explore Mala</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover/btn:translate-x-1 transition-transform sm:w-3.5 sm:h-3.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Progress Bar & Instruction Footnote */}
        <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-500 text-[10px] sm:text-xs font-mono">
            <span className="text-amber-400">↔</span>
            <span>Drag or swipe horizontally to explore all 10 Sacred Malas</span>
          </div>

          <div className="w-28 sm:w-48 h-1 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-150 rounded-full"
              style={{
                width: `${Math.max(20, Math.min(scrollProgress * 100, 100))}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

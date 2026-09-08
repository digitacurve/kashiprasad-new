"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

export interface ProductOffering {
  id: string;
  tag: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  rating: string;
  reviewsCount: number;
  imagePlaceholder: string;
}

interface ProductCarouselProps {
  products: ProductOffering[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const isPointerDownRef = useRef(false);
  const hasMovedRef = useRef(false);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < maxScroll - 5);

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

    const firstCard = el.querySelector<HTMLElement>("[data-product-card]");
    const cardWidth = firstCard ? firstCard.offsetWidth : el.clientWidth * 0.75;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Mouse Drag to Scroll handlers
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
    const walk = (x - startX) * 1.2;
    if (Math.abs(walk) > 5) {
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
    <div className="relative w-full">
      {/* Top Header Controls Bar (Mobile & Desktop) */}
      <div className="flex items-center justify-between mb-8 sm:mb-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-amber-300/80">
              {products.length} Relics Available
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-amber-500/30 bg-zinc-900/90 text-amber-300 hover:bg-amber-500/15 hover:border-amber-400 disabled:opacity-25 disabled:pointer-events-none flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-black/60 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-amber-500/30 bg-zinc-900/90 text-amber-300 hover:bg-amber-500/15 hover:border-amber-400 disabled:opacity-25 disabled:pointer-events-none flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-black/60 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track Container */}
      <div className="relative -mx-6 sm:mx-0 px-6 sm:px-0">
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          data-lenis-prevent
          className={`flex gap-4 sm:gap-6 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-pl-6 sm:scroll-pl-0 scroll-smooth pb-4 select-none touch-pan-x ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          } [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              data-product-card
              className="snap-start flex-shrink-0 w-[72vw] min-w-[260px] max-w-[310px] sm:w-[calc(50%-12px)] sm:min-w-0 sm:max-w-none lg:w-[calc((100%-48px)/3)] group relative bg-zinc-950/70 rounded-2xl border border-zinc-800/80 hover:border-amber-500/40 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Top Area: Image Placeholder & Wishlist */}
              <div>
                <div className="relative aspect-square w-full rounded-xl bg-gradient-to-b from-zinc-900 to-black p-5 sm:p-6 flex flex-col items-center justify-center overflow-hidden mb-5 sm:mb-6 border border-zinc-800/60 group-hover:border-amber-500/30 transition-colors">
                  {/* Product Tag Badge */}
                  <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full z-10">
                    {product.tag}
                  </span>

                  {/* Wishlist Button Placeholder */}
                  <button
                    type="button"
                    aria-label="Add to Wishlist"
                    onClick={(e) => {
                      if (hasMovedRef.current) e.preventDefault();
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700/60 hover:border-amber-500/60 hover:text-amber-300 text-zinc-400 flex items-center justify-center transition-all z-10 active:scale-90"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </button>

                  {/* Clean Visual Specimen Placeholder Box */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-amber-500/20 bg-amber-500/5 flex items-center justify-center text-center p-2 group-hover:scale-105 group-hover:border-amber-500/40 transition-transform duration-500">
                    <span className="text-[9px] sm:text-[10px] font-mono text-amber-300/70 tracking-widest leading-tight">
                      {product.imagePlaceholder}
                    </span>
                  </div>
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-1.5 text-xs text-amber-400 mb-2">
                  <span>★</span>
                  <span className="font-semibold text-zinc-200">{product.rating}</span>
                  <span className="text-zinc-500 text-[11px]">
                    ({product.reviewsCount} reviews)
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="font-serif text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-amber-300 transition-colors leading-snug">
                  {product.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Bottom Area: Pricing & Actions */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-zinc-800/80">
                <div className="flex items-baseline gap-2 mb-3.5 sm:mb-4">
                  <span className="font-serif text-lg sm:text-xl font-bold text-zinc-100">
                    {product.price}
                  </span>
                  <span className="text-xs text-zinc-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      if (hasMovedRef.current) e.preventDefault();
                    }}
                    className="w-full py-2.5 px-2.5 sm:px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 hover:border-amber-500/40 text-zinc-200 text-xs font-medium tracking-wide transition-all active:scale-98"
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      if (hasMovedRef.current) e.preventDefault();
                    }}
                    className="w-full py-2.5 px-2.5 sm:px-3 rounded-lg bg-gradient-to-r from-[#dfab52] to-[#b88628] hover:from-[#fed88b] hover:to-[#dfab52] text-zinc-950 text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-amber-500/10 active:scale-98"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sleek Visual Progress Indicator */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono">
            Swipe or use arrows to explore
          </span>
        </div>

        {/* Ambient progress line */}
        <div className="w-32 sm:w-44 h-1 bg-zinc-800/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-150 rounded-full"
            style={{
              width: `${Math.max(15, Math.min(scrollProgress * 100, 100))}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

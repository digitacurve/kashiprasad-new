"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { rubyProduct } from "@/data/ratnas";
import { playLuxuryHaptic } from "@/lib/audio";

export default function FeaturedRubyCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  const isHoveredRef = useRef(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    // Smooth dynamic 3D tilt angles
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 12;

    setMousePos({ x: percentX, y: percentY, rotateX, rotateY });
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100));

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 12;

    setMousePos({ x: percentX, y: percentY, rotateX, rotateY });
    setIsHovered(true);
    playLuxuryHaptic();
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100));

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 12;

    setMousePos({ x: percentX, y: percentY, rotateX, rotateY });
  }, []);

  const handleTouchEnd = useCallback(() => {
    setTimeout(() => {
      setIsHovered(false);
      setMousePos({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
    }, 450);
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

  return (
    <Link href={`/products/${rubyProduct.slug}`} className="block h-full select-none">
      <article
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-2.5 sm:p-3 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-amber-500/50 hover:bg-zinc-900/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(223,171,82,0.22)] active:scale-[0.98] active:border-amber-400/60 active:shadow-[0_10px_25px_rgba(223,171,82,0.25)] touch-luxury-card cursor-pointer select-none [perspective:1000px]"
      >
        {/* Card-Wide Dynamic Cursor Spotlight Shimmer */}
        <div
          className={`pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
          style={{
            background: `radial-gradient(280px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 235, 180, 0.22), rgba(220, 38, 38, 0.14) 45%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Subtle Golden Border Highlight */}
        <div
          className={`pointer-events-none absolute -inset-px rounded-2xl border border-amber-400/0 transition-all duration-300 ${
            isHovered ? "border-amber-400/50 opacity-100" : "opacity-0 group-hover:border-amber-400/40 group-hover:opacity-100"
          }`}
          aria-hidden="true"
        />

        {/* Product Image Area with 3D Holographic Parallax */}
        <div>
          <div
            className="relative aspect-square w-full rounded-xl overflow-hidden border border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-950 transition-all duration-500 ease-out"
            style={{
              transform: isHovered
                ? `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) scale3d(1.04, 1.04, 1.04)`
                : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
              transformStyle: "preserve-3d",
              boxShadow: isHovered
                ? "0 20px 40px -10px rgba(220, 38, 38, 0.45), 0 0 25px rgba(223, 171, 82, 0.25)"
                : "none",
            }}
          >
            {/* Surya Gemstone Badge */}
            <span className="absolute left-2 top-2 z-10 rounded-md border border-amber-500/30 bg-zinc-950/80 px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-medium uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-sm">
              Surya Gemstone
            </span>

            {/* Product image */}
            <Image
              src={rubyProduct.image}
              alt={rubyProduct.name}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 pointer-events-none"
              sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />

            {/* Dynamic Interactive Cursor Spotlight Shimmer */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(260px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 235, 180, 0.28), rgba(220, 38, 38, 0.15) 45%, transparent 70%)`,
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

            {/* Refined Gold Border Glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-xl border border-amber-400/0 transition-all duration-500 group-hover:border-amber-400/40"
              aria-hidden="true"
            />
          </div>

          {/* Product Information */}
          <div className="mt-2.5 flex flex-1 flex-col justify-between relative z-10">
            <div>
              <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-amber-400/90 truncate">
                माणिक्य / माणिक
              </p>
              <h3 className="mt-1 font-serif text-xs sm:text-sm font-medium text-zinc-100 leading-snug line-clamp-2 min-h-[2.4rem] group-hover:text-amber-200 transition-colors duration-300">
                {rubyProduct.name}
              </h3>

              {/* Short Description */}
              <p className="mt-1 text-[11px] text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                {rubyProduct.shortDescription}
              </p>

              {/* Rating & Reviews */}
              <div className="mt-1.5 flex items-center gap-1.5 text-xs">
                <div
                  className="flex items-center text-amber-400 text-[11px] tracking-tighter"
                  aria-label={`Rating: ${rubyProduct.rating} out of 5`}
                >
                  {"★".repeat(Math.round(rubyProduct.rating || 5))}
                  {"☆".repeat(Math.max(0, 5 - Math.round(rubyProduct.rating || 5)))}
                </div>
                <span className="font-mono text-[11px] font-semibold text-zinc-300">
                  {rubyProduct.rating?.toFixed(1)}
                </span>
                <span className="text-[11px] text-zinc-500">
                  ({rubyProduct.reviewCount})
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Price & Action Section */}
        <div className="mt-2.5 pt-2 border-t border-zinc-800/60 relative z-10">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400">
                Starting from
              </span>
              <span className="font-serif text-sm sm:text-base font-bold text-amber-300">
                ₹{rubyProduct.price?.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex items-center justify-between pt-0.5">
              <span className="text-[11px] font-mono font-medium text-amber-400 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all flex items-center gap-1">
                Customize Ruby <span className="text-xs">→</span>
              </span>
              <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-500">
                Customizable
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

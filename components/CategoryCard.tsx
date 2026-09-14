"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { StoreCategory } from "@/data/storefront";
import { Gem, Flame, ArrowRight } from "lucide-react";
import { playLuxuryHaptic } from "@/lib/audio";

export default function CategoryCard({ category }: { category: StoreCategory }) {
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

  return (
    <Link href={category.href} className="block h-full select-none">
      <article
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-4 sm:p-5 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-amber-500/50 hover:bg-zinc-900/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(223,171,82,0.22)] cursor-pointer select-none [perspective:1000px]"
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

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            {/* Visual Box with 3D Holographic Parallax & Radiant Lighting */}
            <div
              className="relative mb-4 sm:mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800/80 flex items-center justify-center shadow-lg transition-all duration-500 ease-out"
              style={{
                transform: isHovered
                  ? `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) scale3d(1.04, 1.04, 1.04)`
                  : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                transformStyle: "preserve-3d",
                boxShadow: isHovered
                  ? "0 20px 40px -10px rgba(223, 171, 82, 0.4), 0 0 25px rgba(223, 171, 82, 0.25)"
                  : "none",
              }}
            >
              {category.image ? (
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain p-3.5 transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
                  sizes="(min-width: 1024px) 20vw, 50vw"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 text-amber-400/85">
                  {category.id === "ratnas" ? (
                    <Gem className="h-10 w-10 stroke-[1.5] text-amber-400 drop-shadow-[0_4px_12px_rgba(223,171,82,0.3)] transition-transform duration-300 group-hover:scale-115" />
                  ) : (
                    <Flame className="h-10 w-10 stroke-[1.5] text-amber-400 drop-shadow-[0_4px_12px_rgba(223,171,82,0.3)] transition-transform duration-300 group-hover:scale-115" />
                  )}
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

              {/* Refined Gold Border Glow on Visual Box */}
              <div
                className="pointer-events-none absolute inset-0 rounded-xl border border-amber-400/0 transition-all duration-500 group-hover:border-amber-400/40"
                aria-hidden="true"
              />
            </div>

            {/* Category Title */}
            <h3 className="font-serif text-lg sm:text-xl font-medium text-zinc-100 group-hover:text-amber-200 transition-colors drop-shadow-sm">
              {category.name}
            </h3>

            {/* Category Description */}
            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-400 line-clamp-2">
              {category.description}
            </p>
          </div>

          {/* Explore Link */}
          <div className="mt-4 pt-3 border-t border-zinc-800/60 w-full">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-400 group-hover:text-amber-300 transition-colors font-mono font-medium">
              <span>Explore</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

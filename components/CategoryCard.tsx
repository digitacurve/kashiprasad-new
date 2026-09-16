"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { StoreCategory } from "@/data/storefront";
import { Gem, Flame, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { playLuxuryHaptic } from "@/lib/audio";

const categoryBadges: Record<string, { badge: string; tag: string }> = {
  "puja-kits": { badge: "19 Sacred Kits", tag: "Vedic Ritual Sets" },
  "malas": { badge: "108 Consecrated Beads", tag: "Japa & Daily Devotion" },
  "rudraksha": { badge: "1–21 Mukhi Nepali", tag: "Certified Natural Beads" },
  "ratnas": { badge: "Lab Certified", tag: "Jyotish Gemstones" },
  "puja-services": { badge: "Temple Sankalp", tag: "Kashi Vishwanath Seva" },
};

export default function CategoryCard({
  category,
  index = 0,
}: {
  category: StoreCategory;
  index?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  const isHoveredRef = useRef(false);
  const cardRectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);

  const updateCoordinates = useCallback((clientX: number, clientY: number, maxTilt: number = 8) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = cardRectRef.current || cardRef.current?.getBoundingClientRect();
      if (!rect || rect.width === 0 || rect.height === 0) return;
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100));

      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;
      const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * maxTilt;

      setMousePos({ x: percentX, y: percentY, rotateX, rotateY });
    });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRectRef.current && cardRef.current) {
      cardRectRef.current = cardRef.current.getBoundingClientRect();
    }
    updateCoordinates(e.clientX, e.clientY, 8);
  }, [updateCoordinates]);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || e.touches.length === 0) return;
    cardRectRef.current = cardRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    updateCoordinates(touch.clientX, touch.clientY, 8);
    setIsHovered(true);
    playLuxuryHaptic();
  }, [updateCoordinates]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    updateCoordinates(touch.clientX, touch.clientY, 8);
  }, [updateCoordinates]);

  const handleTouchEnd = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    cardRectRef.current = null;
    setTimeout(() => {
      setIsHovered(false);
      setMousePos({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
    }, 450);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (cardRef.current) {
      cardRectRef.current = cardRef.current.getBoundingClientRect();
    }
    if (!isHoveredRef.current) {
      isHoveredRef.current = true;
      setIsHovered(true);
      playLuxuryHaptic();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    cardRectRef.current = null;
    isHoveredRef.current = false;
    setIsHovered(false);
    setMousePos({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  }, []);

  const meta = categoryBadges[category.id] || {
    badge: "Consecrated",
    tag: "Vedic Authentic",
  };

  const isFifthItem = index === 4;

  return (
    <Link
      href={category.href}
      className={`block h-full select-none ${
        isFifthItem ? "col-span-2 sm:col-span-1" : "col-span-1"
      }`}
    >
      <article
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-3 sm:p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-amber-500/50 hover:bg-zinc-900/80 hover:shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_25px_rgba(223,171,82,0.2)] active:scale-[0.98] active:border-amber-400/60 active:shadow-[0_10px_25px_rgba(223,171,82,0.25)] touch-luxury-card cursor-pointer select-none [perspective:1000px] ${
          isFifthItem
            ? "sm:flex-col flex-row items-center sm:items-stretch gap-3 sm:gap-0 bg-gradient-to-r sm:bg-none from-amber-950/20 via-zinc-950 to-zinc-950 border-amber-500/30"
            : ""
        }`}
      >
        {/* Dynamic Interactive Card-Wide Cursor/Touch Spotlight Shimmer */}
        <div
          className={`pointer-events-none absolute -inset-px rounded-xl sm:rounded-2xl transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
          style={{
            background: `radial-gradient(280px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 235, 180, 0.22), rgba(223, 171, 82, 0.14) 45%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Subtle Golden Border Highlight */}
        <div
          className={`pointer-events-none absolute -inset-px rounded-xl sm:rounded-2xl border border-amber-400/0 transition-all duration-300 ${
            isHovered ? "border-amber-400/50 opacity-100" : "opacity-0 group-hover:border-amber-400/40 group-hover:opacity-100"
          }`}
          aria-hidden="true"
        />

        {/* Top / Left Visual Box */}
        <div
          className={`relative overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800/80 flex items-center justify-center shadow-md transition-all duration-500 ease-out flex-shrink-0 ${
            isFifthItem
              ? "h-20 w-20 sm:h-auto sm:w-full sm:aspect-[4/3] mb-0 sm:mb-4"
              : "aspect-square sm:aspect-[4/3] w-full mb-2.5 sm:mb-4"
          }`}
          style={{
            transform: isHovered
              ? `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) scale3d(1.04, 1.04, 1.04)`
              : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
            transformStyle: "preserve-3d",
            boxShadow: isHovered
              ? "0 15px 30px -8px rgba(223, 171, 82, 0.35), 0 0 20px rgba(223, 171, 82, 0.2)"
              : "none",
          }}
        >
          {category.image ? (
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-contain p-2 sm:p-3.5 transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
              sizes="(min-width: 1024px) 20vw, 50vw"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 text-amber-400/85">
              {category.id === "ratnas" ? (
                <Gem className="h-6 w-6 sm:h-10 sm:w-10 stroke-[1.5] text-amber-400 drop-shadow-[0_4px_12px_rgba(223,171,82,0.3)] transition-transform duration-300 group-hover:scale-115" />
              ) : (
                <Flame className="h-6 w-6 sm:h-10 sm:w-10 stroke-[1.5] text-amber-400 drop-shadow-[0_4px_12px_rgba(223,171,82,0.3)] transition-transform duration-300 group-hover:scale-115" />
              )}
            </div>
          )}

          {/* Prismatic Light Flare Glint Sweep (Hover + Mobile Ambient) */}
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-amber-200/25 to-transparent transition-opacity duration-700 ${
              isHovered ? "opacity-100 animate-luxury-glint" : "opacity-40 animate-mobile-glint"
            }`}
            aria-hidden="true"
          />

          {/* Refined Gold Border Glow */}
          <div
            className={`pointer-events-none absolute inset-0 rounded-lg sm:rounded-xl border transition-all duration-500 ${
              isHovered ? "border-amber-400/50" : "border-amber-400/0 group-hover:border-amber-400/40"
            }`}
            aria-hidden="true"
          />
        </div>

        {/* Content Info */}
        <div className="relative z-10 flex flex-1 flex-col justify-between min-w-0">
          <div>
            {/* Sacred Tag / Badge */}
            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-amber-400/90 mb-0.5 sm:mb-1">
              <span className="text-amber-400 font-bold">✦</span>
              <span className="truncate">{meta.badge}</span>
            </div>

            {/* Category Title */}
            <h3 className="font-serif text-sm sm:text-lg font-bold text-zinc-100 group-hover:text-amber-200 transition-colors drop-shadow-sm truncate sm:whitespace-normal">
              {category.name}
            </h3>

            {/* Subtitle / Description */}
            <p className="mt-0.5 sm:mt-1.5 text-[11px] sm:text-xs leading-tight sm:leading-relaxed text-zinc-400 line-clamp-1 sm:line-clamp-2">
              {category.description}
            </p>
          </div>

          {/* Explore Link */}
          <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2.5 border-t border-zinc-800/60 w-full flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs uppercase tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors font-mono font-medium">
              <span>Explore</span>
              <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="hidden sm:inline text-[10px] font-mono text-zinc-500 group-hover:text-amber-400/80 transition-colors">
              {meta.tag}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}


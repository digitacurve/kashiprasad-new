"use client";

import React, { useRef, useState, useCallback } from "react";
import { TrustPillarItem } from "@/data/storefront";
import { playLuxuryHaptic } from "@/lib/audio";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function TrustPillarCard({
  pillar,
  index,
}: {
  pillar: TrustPillarItem;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
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
    isHoveredRef.current = true;
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
      isHoveredRef.current = false;
      setMousePos({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
    }, 450);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (cardRef.current) {
      cardRectRef.current = cardRef.current.getBoundingClientRect();
    }
    if (!isHoveredRef.current) {
      isHoveredRef.current = true;
      playLuxuryHaptic();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    cardRectRef.current = null;
    isHoveredRef.current = false;
    setMousePos({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-[#0d1017] via-[#080b10] to-[#05070a] p-3 sm:p-5 lg:p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_30px_rgba(223,171,82,0.25)] active:scale-[0.98] active:border-amber-400/60 active:shadow-[0_10px_25px_rgba(223,171,82,0.25)] touch-luxury-card cursor-pointer select-none [perspective:1000px]"
    >
      {/* Dynamic Interactive Cursor/Touch Spotlight Shimmer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl sm:rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 235, 180, 0.22), rgba(223, 171, 82, 0.14) 45%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle Golden Border Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl sm:rounded-2xl border border-amber-400/0 opacity-0 transition-all duration-300 group-hover:border-amber-400/40 group-hover:opacity-100 group-active:border-amber-400/50 group-active:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Top Header with Icon & Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 mb-2.5 sm:mb-4">
          <div className="flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl border border-amber-500/30 bg-amber-500/10 text-lg sm:text-2xl shadow-[0_0_12px_rgba(251,191,36,0.2)] group-hover:scale-110 group-hover:border-amber-400 transition-transform duration-300 shrink-0">
            {pillar.icon}
          </div>
          <span className="text-[8px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 px-2 py-0.5 sm:py-1 rounded-full border border-amber-500/20 max-w-full truncate">
            0{index + 1} · {pillar.badge}
          </span>
        </div>

        {/* Title & Hindi Subtitle */}
        <div>
          <span className="text-[9px] sm:text-[11px] font-sans text-amber-400/80 font-medium block mb-0.5 truncate">
            {pillar.hindi}
          </span>
          <h3 className="font-serif text-xs sm:text-lg lg:text-xl font-bold text-zinc-100 group-hover:text-amber-200 transition-colors drop-shadow-sm leading-snug line-clamp-2">
            {pillar.title}
          </h3>
        </div>

        {/* Copy Description */}
        <p className="mt-1.5 sm:mt-3 text-[10px] sm:text-xs lg:text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors line-clamp-3 sm:line-clamp-none">
          {pillar.copy}
        </p>
      </div>

      {/* Bottom Highlight Tag */}
      <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[9px] sm:text-[11px] font-mono text-amber-300/90 relative z-10">
        <span className="flex items-center gap-1 sm:gap-1.5 truncate">
          <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">{pillar.tag}</span>
        </span>
        <span className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">✦</span>
      </div>
    </article>
  );
}

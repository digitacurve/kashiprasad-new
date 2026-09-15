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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 8;

    setMousePos({ x: percentX, y: percentY, rotateX, rotateY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!isHoveredRef.current) {
      isHoveredRef.current = true;
      playLuxuryHaptic();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    setMousePos({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-[#0d1017] via-[#080b10] to-[#05070a] p-5 sm:p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_30px_rgba(223,171,82,0.25)] cursor-pointer select-none [perspective:1000px]"
    >
      {/* Dynamic Interactive Cursor Spotlight Shimmer */}
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

      <div className="relative z-10">
        {/* Top Header with Icon & Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-2xl shadow-[0_0_12px_rgba(251,191,36,0.2)] group-hover:scale-110 group-hover:border-amber-400 transition-transform duration-300">
            {pillar.icon}
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
            0{index + 1} · {pillar.badge}
          </span>
        </div>

        {/* Title & Hindi Subtitle */}
        <div>
          <span className="text-[11px] font-sans text-amber-400/80 font-medium block mb-0.5">
            {pillar.hindi}
          </span>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-amber-200 transition-colors drop-shadow-sm">
            {pillar.title}
          </h3>
        </div>

        {/* Copy Description */}
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
          {pillar.copy}
        </p>
      </div>

      {/* Bottom Highlight Tag */}
      <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-amber-300/90 relative z-10">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
          {pillar.tag}
        </span>
        <span className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
      </div>
    </article>
  );
}

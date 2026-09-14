"use client";

import React, { useRef, useState, useCallback } from "react";

export default function ArchiveCard({ label }: { label: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, rotateX: 0, rotateY: 0 });

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
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-3 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-amber-500/50 hover:bg-zinc-900/70 hover:shadow-[0_16px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(223,171,82,0.18)] cursor-pointer select-none [perspective:1000px]"
    >
      {/* Dynamic Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(260px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 235, 180, 0.2), rgba(223, 171, 82, 0.12) 45%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle Golden Border Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl border border-amber-400/0 opacity-0 transition-all duration-300 group-hover:border-amber-400/40 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div
        className="relative z-10 flex aspect-square items-center justify-center rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900 to-[#090a0d] p-4 text-center text-[10px] sm:text-[11px] uppercase tracking-[.16em] text-zinc-400 group-hover:text-amber-200 transition-colors"
        style={{
          transform: isHovered
            ? `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transformStyle: "preserve-3d",
        }}
      >
        {label}
      </div>
    </article>
  );
}

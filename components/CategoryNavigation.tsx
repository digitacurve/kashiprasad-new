"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { playLuxuryHaptic } from "@/lib/audio";

export interface NavCategory {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  href: string;
  image?: string;
  icon?: string;
  badge?: string;
  code: string;
}

export const topLevelCategories: NavCategory[] = [
  {
    id: "nav-puja-kits",
    name: "Puja Kits",
    shortName: "Puja Kits",
    subtitle: "Vedic Ritual Sets",
    href: "/puja-kits",
    image: "/assets/puja-kits/01-satyanarayan-pooja-kit.png",
    code: "PK-01",
    badge: "19 Kits",
  },
  {
    id: "nav-mala",
    name: "Mala",
    shortName: "Malas",
    subtitle: "108 Sacred Beads",
    href: "/malas",
    image: "/assets/mala/01_mala_regenerated_01.png",
    code: "ML-02",
    badge: "108 Beads",
  },
  {
    id: "nav-rudraksha",
    name: "Rudraksha",
    shortName: "Rudraksha",
    subtitle: "1–21 Mukhi Beads",
    href: "/rudraksha",
    image: "/hero/assets/rudraksha-bead.png",
    code: "RD-03",
    badge: "Nepali",
  },
  {
    id: "nav-ratnas",
    name: "Ratnas",
    shortName: "Ratnas",
    subtitle: "Gems & Stones",
    href: "/ratnas",
    image: "/assets/ratnas/emerald-panna.png",
    icon: "💎",
    code: "RT-04",
    badge: "Certified",
  },
  {
    id: "nav-puja-services",
    name: "Puja Services",
    shortName: "Services",
    subtitle: "Kashi Sankalp",
    href: "/puja-services",
    image: "/assets/puja-services/kashi-vishwanath-pooja-services.jpg",
    icon: "🕉️",
    code: "SRV-05",
    badge: "Sankalp",
  },
];

interface CategoryNavigationProps {
  className?: string;
  isMobile?: boolean;
}

export default function CategoryNavigation({
  className = "",
  isMobile = false,
}: CategoryNavigationProps) {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeMobileId, setActiveMobileId] = useState<string | null>(null);

  // GSAP Smooth Hover and Expand Interaction for Desktop
  useEffect(() => {
    if (isMobile) return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const isCurrentHovered = hoveredIndex === index;
      const isAnyHovered = hoveredIndex !== null;

      const targetFlexGrow = isCurrentHovered ? 1.55 : isAnyHovered ? 0.85 : 1;
      const targetBorderColor = isCurrentHovered
        ? "rgba(223, 171, 82, 0.75)"
        : isAnyHovered
          ? "rgba(223, 171, 82, 0.12)"
          : "rgba(223, 171, 82, 0.22)";
      const targetShadow = isCurrentHovered
        ? "0 4px 20px rgba(223, 171, 82, 0.25)"
        : "0 2px 10px rgba(0, 0, 0, 0.35)";
      const targetBg = isCurrentHovered
        ? "rgba(18, 22, 34, 0.95)"
        : isAnyHovered
          ? "rgba(8, 10, 15, 0.75)"
          : "rgba(10, 13, 20, 0.85)";

      gsap.to(card, {
        flexGrow: targetFlexGrow,
        borderColor: targetBorderColor,
        boxShadow: targetShadow,
        backgroundColor: targetBg,
        duration: 0.3,
        ease: "power2.out",
      });

      // Animate Inner Thumbnail Scale
      const img = card.querySelector<HTMLElement>("[data-nav-img]");
      if (img) {
        gsap.to(img, {
          scale: isCurrentHovered ? 1.15 : 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      // Animate Explore Arrow
      const explorePill = card.querySelector<HTMLElement>("[data-nav-explore]");
      if (explorePill) {
        gsap.to(explorePill, {
          opacity: isCurrentHovered ? 1 : 0,
          x: isCurrentHovered ? 0 : 4,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    });
  }, [hoveredIndex, isMobile]);

  if (isMobile) {
    // World-Class 5-Column Non-Cutoff Mobile Category Matrix
    return (
      <nav
        className={`w-full select-none ${className}`}
        aria-label="Mobile Category Navigation"
      >
        <div className="grid grid-cols-5 gap-1 sm:gap-1.5 w-full">
          {topLevelCategories.map((cat) => {
            const isSelected = activeMobileId === cat.id;

            return (
              <Link
                key={cat.id}
                href={cat.href}
                onTouchStart={() => {
                  setActiveMobileId(cat.id);
                  playLuxuryHaptic();
                }}
                className={`group relative flex flex-col items-center justify-center rounded-xl border py-1.5 px-0.5 transition-all duration-200 select-none ${
                  isSelected
                    ? "border-amber-400 bg-amber-500/20 shadow-[0_0_12px_rgba(223,171,82,0.35)] scale-[0.97]"
                    : "border-amber-500/25 bg-[#0a0d14]/90 hover:border-amber-500/50 active:border-amber-400 active:scale-95"
                }`}
              >
                {/* Visual Thumbnail Frame */}
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-b from-zinc-900 to-black border border-amber-500/35 flex items-center justify-center p-0.5 overflow-hidden shadow-inner flex-shrink-0 group-hover:border-amber-400/80">
                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-xs text-amber-300 font-serif">{cat.icon || "✦"}</span>
                  )}
                </div>

                {/* Category Title */}
                <span className="font-serif font-bold text-[9px] sm:text-[10px] text-zinc-100 uppercase tracking-tight mt-1 text-center truncate max-w-full leading-tight group-hover:text-amber-200">
                  {cat.shortName}
                </span>

                {/* Micro Tag */}
                <span className="text-[7.5px] sm:text-[8px] font-mono text-amber-400/90 leading-none truncate max-w-full mt-0.5">
                  {cat.badge}
                </span>

                {/* Bottom Gold Indicator */}
                <div className="absolute bottom-0 left-1 right-1 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent group-hover:via-amber-400" />
              </Link>
            );
          })}
        </div>
      </nav>
    );
  }

  // Desktop Compact Navigation Rail (In Center of Header)
  return (
    <nav
      className={`flex items-center gap-1.5 lg:gap-2 w-full ${className}`}
      onMouseLeave={() => setHoveredIndex(null)}
      aria-label="Category Navigation"
    >
      {topLevelCategories.map((cat, idx) => (
        <Link
          key={cat.id}
          href={cat.href}
          ref={(el) => {
            cardsRef.current[idx] = el;
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          className="group relative flex items-center h-[40px] lg:h-[44px] rounded-xl border border-amber-500/20 bg-[#0a0d14]/85 backdrop-blur-md px-2 lg:px-2.5 py-1 transition-colors overflow-hidden select-none flex-1 min-w-0"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500/10 blur-md rounded-full pointer-events-none group-hover:bg-amber-500/20 transition-all" />

          {/* Visual Thumbnail Box */}
          <div className="relative w-6 h-6 lg:w-7 lg:h-7 rounded-lg bg-gradient-to-b from-zinc-900 to-black border border-amber-500/25 flex-shrink-0 flex items-center justify-center p-0.5 overflow-hidden shadow-inner group-hover:border-amber-400/60 transition-colors">
            {cat.image ? (
              <img
                data-nav-img
                src={cat.image}
                alt={cat.name}
                loading="eager"
                className="w-full h-full object-contain rounded transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div
                data-nav-img
                className="w-full h-full rounded flex items-center justify-center bg-amber-500/10 text-amber-300 font-serif text-xs group-hover:scale-110 transition-transform duration-300"
              >
                <span>{cat.icon || "✦"}</span>
              </div>
            )}
          </div>

          {/* Typography */}
          <div className="flex flex-col justify-center min-w-0 flex-1 ml-1.5 lg:ml-2">
            <span className="font-serif font-bold text-[11px] lg:text-xs text-zinc-100 uppercase tracking-wider truncate group-hover:text-amber-300 transition-colors">
              {cat.name}
            </span>
            <span className="hidden 2xl:block text-[9px] font-mono text-zinc-500 truncate group-hover:text-amber-400/80 transition-colors">
              {cat.subtitle}
            </span>
          </div>

          {/* Minimal Explore Arrow */}
          <div
            data-nav-explore
            className="hidden xl:flex items-center text-[11px] text-amber-300 font-mono opacity-0 translate-x-1 ml-auto flex-shrink-0"
          >
            <span>→</span>
          </div>

          {/* Bottom Golden Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/80 transition-all duration-300" />
        </Link>
      ))}
    </nav>
  );
}


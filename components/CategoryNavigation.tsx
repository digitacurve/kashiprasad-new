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

      const targetBorderColor = isCurrentHovered
        ? "rgba(223, 171, 82, 0.75)"
        : "rgba(223, 171, 82, 0.2)";
      const targetShadow = isCurrentHovered
        ? "0 4px 20px rgba(223, 171, 82, 0.25)"
        : "0 2px 8px rgba(0, 0, 0, 0.3)";
      const targetBg = isCurrentHovered
        ? "rgba(25, 30, 44, 0.95)"
        : "rgba(10, 13, 20, 0.85)";

      gsap.to(card, {
        borderColor: targetBorderColor,
        boxShadow: targetShadow,
        backgroundColor: targetBg,
        duration: 0.25,
        ease: "power2.out",
      });

      // Animate Inner Thumbnail Scale
      const img = card.querySelector<HTMLElement>("[data-nav-img]");
      if (img) {
        gsap.to(img, {
          scale: isCurrentHovered ? 1.15 : 1,
          duration: 0.25,
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
                <span className="font-serif font-bold text-[8px] sm:text-[9.5px] text-zinc-100 uppercase tracking-tighter mt-1 text-center whitespace-nowrap leading-none group-hover:text-amber-200">
                  {cat.shortName}
                </span>

                {/* Micro Tag */}
                <span className="text-[7px] sm:text-[7.5px] font-mono text-amber-400/90 leading-none whitespace-nowrap mt-0.5">
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

  // Desktop Luxury Capsule Rail (In Center of Header - Non-Truncating, Premium Aesthetics)
  return (
    <nav
      className={`inline-flex items-center gap-1 xl:gap-1.5 p-1 rounded-full border border-amber-500/25 bg-[#080b12]/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] ${className}`}
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
          className="group relative flex items-center gap-1.5 h-8 xl:h-9 rounded-full border border-amber-500/20 bg-[#0c101a]/70 px-2.5 xl:px-3 transition-all duration-200 select-none flex-shrink-0"
        >
          {/* Visual Thumbnail Box */}
          <div className="relative w-5 h-5 xl:w-5.5 xl:h-5.5 rounded-full bg-gradient-to-b from-zinc-800 to-black border border-amber-500/30 flex-shrink-0 flex items-center justify-center p-0.5 overflow-hidden shadow-inner group-hover:border-amber-400/70 transition-colors">
            {cat.image ? (
              <img
                data-nav-img
                src={cat.image}
                alt={cat.name}
                loading="eager"
                className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div
                data-nav-img
                className="w-full h-full rounded-full flex items-center justify-center bg-amber-500/10 text-amber-300 font-serif text-[10px] group-hover:scale-110 transition-transform duration-300"
              >
                <span>{cat.icon || "✦"}</span>
              </div>
            )}
          </div>

          {/* Typography - Never Truncates */}
          <span className="font-serif font-bold text-[11px] xl:text-[11.5px] text-zinc-200 uppercase tracking-wider whitespace-nowrap group-hover:text-amber-200 transition-colors">
            {cat.name}
          </span>

          {/* Bottom Golden Line */}
          <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/80 transition-all duration-300" />
        </Link>
      ))}
    </nav>
  );
}


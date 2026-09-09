"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export interface NavCategory {
  id: string;
  name: string;
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
    subtitle: "Vedic Ritual Sets",
    href: "/puja-kits",
    image: "/assets/puja-kits/01-satyanarayan-pooja-kit.png",
    code: "PK-01",
    badge: "19 Kits",
  },
  {
    id: "nav-mala",
    name: "Mala",
    subtitle: "108 Sacred Beads",
    href: "/malas",
    image: "/assets/mala/01_mala_regenerated_01.png",
    code: "ML-02",
    badge: "10 Malas",
  },
  {
    id: "nav-rudraksha",
    name: "Rudraksha",
    subtitle: "1–21 Mukhi Beads",
    href: "/rudraksha",
    image: "/hero/assets/rudraksha-bead.png",
    code: "RD-03",
    badge: "100% Nepali",
  },
  {
    id: "nav-ratnas",
    name: "Ratnas",
    subtitle: "Gems & Stones",
    href: "/ratnas",
    icon: "💎",
    code: "RT-04",
    badge: "Lab Certified",
  },
  {
    id: "nav-puja-services",
    name: "Puja Services",
    subtitle: "Kashi Sankalp",
    href: "/puja-services",
    icon: "🕉️",
    code: "SRV-05",
    badge: "Temple Sankalp",
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
    // Mobile Horizontally Scrollable Header Rail
    return (
      <div
        className={`w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory py-0.5 ${className}`}
      >
        <div className="flex items-center gap-2 w-max px-1">
          {topLevelCategories.map((cat) => {
            const isSelected = activeMobileId === cat.id;

            return (
              <Link
                key={cat.id}
                href={cat.href}
                onTouchStart={() => setActiveMobileId(cat.id)}
                className={`relative flex items-center h-[34px] sm:h-[36px] rounded-lg border backdrop-blur-md px-2 py-1 transition-all select-none snap-start flex-shrink-0 ${
                  isSelected
                    ? "border-amber-400 bg-zinc-900/95 shadow-[0_0_12px_rgba(223,171,82,0.3)]"
                    : "border-amber-500/20 bg-[#0a0d14]/85 active:border-amber-400/50"
                }`}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-zinc-900 border border-amber-500/30 flex items-center justify-center p-0.5 flex-shrink-0 overflow-hidden">
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-[10px] text-amber-300 font-serif">{cat.icon || "✦"}</span>
                  )}
                </div>

                <span className="font-serif font-bold text-[10px] sm:text-[11px] text-zinc-100 uppercase tracking-wide ml-1.5 whitespace-nowrap">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
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

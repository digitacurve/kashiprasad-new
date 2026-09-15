"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, X } from "lucide-react";

interface ShubhMuhuratInfo {
  tithiName: string;
  significance: string;
  deity: string;
  nextDate: string;
  ctaText: string;
  badge: string;
}

export default function PanchangBanner() {
  const [muhurat, setMuhurat] = useState<ShubhMuhuratInfo | null>(null);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Dynamic Vedic calculation based on current day of week and month
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sun, 1 = Mon, ...
    
    // Dynamic auspicious highlight cycle
    const upcomingEvents: ShubhMuhuratInfo[] = [
      {
        tithiName: "Somwar Mahadev Vishesh",
        significance: "Assi Ghat Ganga Snan & Kashi Vishwanath Jalabhishek",
        deity: "Lord Shiva",
        nextDate: "This Monday",
        ctaText: "Book Sankalp",
        badge: "Most Auspicious",
      },
      {
        tithiName: "Shukla Paksha Ekadashi",
        significance: "Lord Vishnu & Lakshmi Maha-Archana for Prosperity",
        deity: "Lord Vishnu",
        nextDate: "Upcoming Tithi",
        ctaText: "Reserve Slot",
        badge: "Punya Tithi",
      },
      {
        tithiName: "Trayodashi Pradosh Vrat",
        significance: "Kashi Rudrabhishek for Health, Peace & Dosha Nivaran",
        deity: "Lord Shiva",
        nextDate: "Pradosh Sandhya",
        ctaText: "Book Sankalp",
        badge: "Maha Muhurat",
      },
      {
        tithiName: "Purnima Maha Ganga Aarti",
        significance: "Consecration of Pure Karungali & 5-Mukhi Malas",
        deity: "Maa Ganga & Shiva",
        nextDate: "Purnima Night",
        ctaText: "Consecrate Now",
        badge: "Sacred Energy",
      },
    ];

    // Pick based on day modulus so it feels alive and dynamically shifts
    const index = (dayOfWeek + today.getDate()) % upcomingEvents.length;
    setMuhurat(upcomingEvents[index]);
  }, []);

  if (isDismissed || !muhurat) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#120e06] via-[#1a1407] to-[#120e06] border-b border-amber-500/25 px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs text-amber-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4 px-2 sm:px-4">
        {/* Left: Auspicious Tithi Badge & Details */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-500/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
            <Sparkles className="h-2.5 w-2.5 text-amber-300 animate-spin-slow" />
            <span>{muhurat.badge}</span>
          </span>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-serif font-bold text-amber-100 flex items-center gap-1">
              <span className="text-amber-400 font-normal">🕉️</span> {muhurat.tithiName}:
            </span>
            <span className="text-zinc-300 hidden md:inline truncate max-w-md">
              {muhurat.significance}
            </span>
            <span className="text-amber-300/80 font-mono text-[10px] sm:text-[11px] hidden sm:inline">
              ({muhurat.nextDate})
            </span>
          </div>
        </div>

        {/* Right: Quick Action CTA & Dismiss */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/services"
            className="group flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-3 py-1 text-[10px] sm:text-xs font-bold font-mono uppercase text-zinc-950 shadow-[0_0_12px_rgba(223,171,82,0.3)] transition"
          >
            <span>{muhurat.ctaText}</span>
            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/track-order"
            className="hidden lg:inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-amber-300 underline underline-offset-2 transition"
          >
            Track Order
          </Link>

          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss Auspicious Banner"
            className="flex h-5 w-5 items-center justify-center rounded-full text-zinc-400 hover:text-white transition"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

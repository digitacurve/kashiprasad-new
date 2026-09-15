"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ratnaProducts } from "@/data/ratnas";
import { rudrakshaProducts } from "@/data/rudraksha";
import { malaProducts } from "@/data/malas";
import { pujaKitProducts } from "@/data/pujaKits";
import { kashiPoojaServices } from "@/data/pujaServices";
import ProductCard from "@/components/ProductCard";
import { Sparkles, Shuffle, RefreshCw, Clock, ArrowRight } from "lucide-react";
import { playLuxuryHaptic } from "@/lib/audio";
import { useCurrency } from "@/components/CurrencyProvider";

const ROTATION_INTERVAL_SEC = 60; // 1 minute auto-shuffle

export default function DynamicFeaturedCollection() {
  const [ratnaIndex, setRatnaIndex] = useState(0);
  const [rudrakshaIndex, setRudrakshaIndex] = useState(0);
  const [malaIndex, setMalaIndex] = useState(0);
  const [pujaKitIndex, setPujaKitIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  const [timeLeft, setTimeLeft] = useState(ROTATION_INTERVAL_SEC);
  const [isPaused, setIsPaused] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const isPausedRef = useRef(false);
  const { formatPrice } = useCurrency();

  const handleNextRotation = useCallback(() => {
    setIsShuffling(true);
    playLuxuryHaptic();

    setRatnaIndex((prev) => (prev + 1) % ratnaProducts.length);
    setRudrakshaIndex((prev) => (prev + 1) % rudrakshaProducts.length);
    setMalaIndex((prev) => (prev + 1) % malaProducts.length);
    setPujaKitIndex((prev) => (prev + 1) % pujaKitProducts.length);
    setServiceIndex((prev) => (prev + 1) % kashiPoojaServices.length);

    setTimeLeft(ROTATION_INTERVAL_SEC);
    setTimeout(() => setIsShuffling(false), 500);
  }, []);

  // 1-second countdown timer that ticks down every second and rotates every 60s
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPausedRef.current) {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleNextRotation();
            return ROTATION_INTERVAL_SEC;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [handleNextRotation]);

  const handleManualShuffle = () => {
    handleNextRotation();
  };

  const activeRatna = ratnaProducts[ratnaIndex] || ratnaProducts[0];
  const activeRudraksha = rudrakshaProducts[rudrakshaIndex] || rudrakshaProducts[0];
  const activeMala = malaProducts[malaIndex] || malaProducts[0];
  const activePujaKit = pujaKitProducts[pujaKitIndex] || pujaKitProducts[0];
  const activeService = kashiPoojaServices[serviceIndex] || kashiPoojaServices[0];

  const progressPercent = ((ROTATION_INTERVAL_SEC - timeLeft) / ROTATION_INTERVAL_SEC) * 100;

  return (
    <section
      id="collection"
      className="relative px-4 py-16 sm:px-8 border-b border-amber-500/10 bg-gradient-to-b from-[#06080c] via-[#090b10] to-[#06080c]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header with Title & Shuffle Control */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-amber-300">
              <Sparkles className="h-3 w-3 text-amber-400 animate-pulse" />
              Live Curated Showcase
            </div>
            <h2 className="mt-2 font-serif text-2xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
              Featured Collection
            </h2>
            <p className="mt-2 max-w-xl text-xs sm:text-sm text-zinc-400 leading-relaxed">
              A dynamic rotating selection across Ratnas, Nepali Rudrakshas, Sacred Malas, Puja Kits, and Kashi Vishwanath Services.
            </p>
          </div>

          {/* Shuffle Button & Timer Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/80 px-3 py-2 text-xs font-mono text-zinc-400">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              <span>
                {isPaused ? (
                  <span className="text-amber-300 font-semibold">Paused on hover</span>
                ) : (
                  <>
                    Next rotation in <strong className="text-amber-300 font-bold">{timeLeft}s</strong>
                  </>
                )}
              </span>
            </div>

            <button
              type="button"
              onClick={handleManualShuffle}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-amber-600/10 px-4 py-2 font-mono text-xs font-semibold text-amber-200 hover:border-amber-400 hover:text-amber-100 transition-all cursor-pointer shadow-sm group"
              title="Shuffle all 5 slots immediately"
            >
              <Shuffle className={`h-3.5 w-3.5 text-amber-400 group-hover:rotate-180 transition-transform duration-500 ${isShuffling ? "animate-spin" : ""}`} />
              <span>Shuffle Now</span>
            </button>
          </div>
        </div>

        {/* Dynamic Rotation Progress Line */}
        <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-zinc-900 border border-zinc-800/60">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-400 transition-all duration-1000 ease-linear shadow-[0_0_10px_rgba(251,191,36,0.5)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* 5 Dynamic Rotating Cards Grid */}
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-3.5 lg:gap-4 sm:overflow-visible sm:pb-0">
          {/* Slot 1: Ratnas */}
          <div
            key={`ratna-${activeRatna.id || activeRatna.slug}`}
            className="w-[68vw] max-w-[240px] shrink-0 snap-start sm:w-auto transition-all duration-500 animate-in fade-in zoom-in-95"
          >
            <ProductCard product={activeRatna} />
          </div>

          {/* Slot 2: Rudraksha */}
          <div
            key={`rudraksha-${activeRudraksha.id || activeRudraksha.slug}`}
            className="w-[68vw] max-w-[240px] shrink-0 snap-start sm:w-auto transition-all duration-500 animate-in fade-in zoom-in-95"
          >
            <ProductCard product={activeRudraksha} />
          </div>

          {/* Slot 3: Mala */}
          <div
            key={`mala-${activeMala.id || activeMala.slug}`}
            className="w-[68vw] max-w-[240px] shrink-0 snap-start sm:w-auto transition-all duration-500 animate-in fade-in zoom-in-95"
          >
            <ProductCard product={activeMala} />
          </div>

          {/* Slot 4: Puja Kit */}
          <div
            key={`pujaKit-${activePujaKit.id || activePujaKit.slug}`}
            className="w-[68vw] max-w-[240px] shrink-0 snap-start sm:w-auto transition-all duration-500 animate-in fade-in zoom-in-95"
          >
            <ProductCard product={activePujaKit} />
          </div>

          {/* Slot 5: Puja Service Dynamic Card */}
          <div
            key={`service-${activeService.id || activeService.slug}`}
            className="w-[68vw] max-w-[240px] shrink-0 snap-start sm:w-auto transition-all duration-500 animate-in fade-in zoom-in-95"
          >
            <Link href="/puja-services" className="block h-full select-none">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-2.5 sm:p-3 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-amber-500/50 hover:bg-zinc-900/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(223,171,82,0.22)] cursor-pointer select-none">
                {/* Image */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-950">
                  <span className="absolute left-2 top-2 z-10 rounded-md border border-amber-500/30 bg-zinc-950/80 px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-medium uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-sm">
                    {activeService.badge || "Temple Seva"}
                  </span>
                  <Image
                    src="/assets/puja-services/kashi-vishwanath-pooja-services.jpg"
                    alt={activeService.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl border border-amber-400/0 transition-all duration-500 group-hover:border-amber-400/40" />
                </div>

                {/* Service Details */}
                <div className="mt-2.5 flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-amber-400/90 truncate">
                      Kashi Puja Seva
                    </p>
                    <h3 className="mt-1 font-serif text-xs sm:text-sm font-medium text-zinc-100 leading-snug line-clamp-2 min-h-[2.4rem] group-hover:text-amber-200 transition-colors duration-300">
                      {activeService.name}
                    </h3>
                    <p className="mt-1 text-[11px] text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                      {activeService.tagline || activeService.description}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-zinc-800/60 flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400">
                        Dakshina
                      </span>
                      <span className="font-serif text-sm sm:text-base font-bold text-amber-300">
                        {formatPrice(activeService.price || 1450)}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-amber-400 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all flex items-center gap-1">
                      Book Seva <span className="text-xs">→</span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

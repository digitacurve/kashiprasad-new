"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Menu,
  X,
  Flame,
  ShieldCheck,
  Truck,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { useAuth } from "@/components/AuthProvider";
import { useWishlist } from "@/components/WishlistProvider";
import { storeCategories } from "@/data/storefront";
import CurrencySwitcher from "@/components/CurrencySwitcher";
import CategoryNavigation from "@/components/CategoryNavigation";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart, openSearch } = useCart();
  const { user, isLoggedIn, openAuthModal } = useAuth();
  const { totalWishlistItems, setIsWishlistOpen } = useWishlist();
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const heroBannerRef = useRef<HTMLImageElement | null>(null);
  const elementsOverlayRef = useRef<HTMLDivElement | null>(null);

  // Remaining exploded Rudraksha ecosystem refs (Crescent & Tilak completely removed)
  const malaRef = useRef<HTMLDivElement | null>(null);
  const guruRef = useRef<HTMLDivElement | null>(null);
  const beadRightRef = useRef<HTMLDivElement | null>(null);
  const beadLeftRef = useRef<HTMLDivElement | null>(null);

  // Text & annotation overlay refs
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const explodedTitleRef = useRef<HTMLDivElement | null>(null);
  const tagMalaRef = useRef<HTMLDivElement | null>(null);
  const tagBeadRef = useRef<HTMLDivElement | null>(null);

  // Cloud lightning refs (independent of scroll)
  const flashLeftRef = useRef<HTMLDivElement | null>(null);
  const flashRightRef = useRef<HTMLDivElement | null>(null);
  const boltLeftRef = useRef<SVGSVGElement | null>(null);
  const boltRightRef = useRef<SVGSVGElement | null>(null);

  // Ensure scroll resets to top on initial page mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  // Independent Atmospheric Cloud Lightning Animation Loop
  useEffect(() => {
    let lightningTimer: NodeJS.Timeout;

    const fireDistantLightning = () => {
      const isRight = Math.random() > 0.4;
      const flash = isRight ? flashRightRef.current : flashLeftRef.current;
      const bolt = isRight ? boltRightRef.current : boltLeftRef.current;

      if (flash && bolt) {
        const tl = gsap.timeline();
        // Realistic atmospheric double-pulse flash
        tl.to([flash, bolt], { opacity: 0.65, duration: 0.04, ease: "power1.in" })
          .to([flash, bolt], { opacity: 0.1, duration: 0.03 })
          .to([flash, bolt], { opacity: 0.85, duration: 0.06 })
          .to(flash, { opacity: 0, duration: 0.45, ease: "power2.out" })
          .to(bolt, { opacity: 0, duration: 0.15, ease: "power2.out" }, "<");
      }

      // Random delay between 4.5s and 8.5s for natural atmospheric irregularity
      const nextDelay = 4500 + Math.random() * 4000;
      lightningTimer = setTimeout(fireDistantLightning, nextDelay);
    };

    // First lightning strike occurs shortly after load
    lightningTimer = setTimeout(fireDistantLightning, 2800);

    return () => {
      clearTimeout(lightningTimer);
    };
  }, []);

  // GSAP ScrollTrigger Dismantling Choreography
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP RESPONSIVE EXPLODED COMPOSITION (min-width: 768px)
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          headlineRef.current,
          { opacity: 0, y: "-3vh", duration: 0.18, ease: "power1.out" },
          0
        );

        tl.to(
          heroBannerRef.current,
          {
            opacity: 0.08,
            scale: 1.03,
            filter: "brightness(0.7) blur(2px)",
            duration: 0.28,
            ease: "power1.inOut",
          },
          0.04
        );

        gsap.set([malaRef.current, guruRef.current, beadRightRef.current, beadLeftRef.current], {
          xPercent: -50,
          yPercent: -50,
        });

        tl.fromTo(
          [malaRef.current, guruRef.current, beadRightRef.current, beadLeftRef.current],
          { opacity: 0 },
          { opacity: 1, duration: 0.18, ease: "power1.in" },
          0.04
        );

        // Responsive Proportional Scaling using VW / VH
        tl.to(
          malaRef.current,
          { x: "-2vw", y: "-3vh", rotation: -4, scale: 1.6, duration: 0.55, ease: "power2.out" },
          0.16
        );

        tl.to(
          guruRef.current,
          { x: "4vw", y: "15vh", rotation: 12, scale: 3.2, duration: 0.55, ease: "power2.out" },
          0.19
        );

        tl.to(
          beadRightRef.current,
          { x: "18vw", y: "0vh", rotation: 15, scale: 2.8, duration: 0.55, ease: "power2.out" },
          0.2
        );

        tl.to(
          beadLeftRef.current,
          { x: "-15vw", y: "10vh", rotation: -18, scale: 2.5, duration: 0.55, ease: "power2.out" },
          0.2
        );

        tl.fromTo(
          explodedTitleRef.current,
          { opacity: 0, y: "-2vh" },
          { opacity: 1, y: 0, duration: 0.25, ease: "power1.out" },
          0.38
        );

        tl.fromTo(
          [tagMalaRef.current, tagBeadRef.current],
          { opacity: 0, y: "2vh" },
          { opacity: 1, y: 0, duration: 0.25, stagger: 0.05, ease: "power2.out" },
          0.44
        );

        tl.to(malaRef.current, { x: "-=1vw", duration: 0.25, ease: "sine.inOut" }, 0.75);
        tl.to(
          guruRef.current,
          { y: "+=2vh", rotation: "+=1.5", duration: 0.25, ease: "sine.inOut" },
          0.75
        );
        tl.to(
          beadRightRef.current,
          { y: "-=2vh", rotation: "+=2", duration: 0.25, ease: "sine.inOut" },
          0.75
        );
        tl.to(
          beadLeftRef.current,
          { y: "-=1.5vh", rotation: "-=2", duration: 0.25, ease: "sine.inOut" },
          0.75
        );
      });

      // MOBILE EXPERIENCE (max-width: 767px) - UNTOUCHED
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        tl.to(headlineRef.current, { opacity: 0, y: -20, duration: 0.18, ease: "power1.out" }, 0);

        tl.to(
          heroBannerRef.current,
          { opacity: 0.08, scale: 1.02, duration: 0.24, ease: "power1.inOut" },
          0.04
        );

        gsap.set([malaRef.current, guruRef.current, beadRightRef.current, beadLeftRef.current], {
          xPercent: -50,
          yPercent: -50,
        });

        tl.fromTo(
          [malaRef.current, guruRef.current, beadRightRef.current, beadLeftRef.current],
          { opacity: 0 },
          { opacity: 1, duration: 0.16 },
          0.04
        );

        tl.to(
          malaRef.current,
          {
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: -22,
            rotation: -4,
            scale: 0.98,
            duration: 0.55,
            ease: "power2.out",
          },
          0.16
        );

        tl.to(
          guruRef.current,
          {
            xPercent: -50,
            yPercent: -50,
            x: 48,
            y: 42,
            rotation: 12,
            scale: 1.88,
            duration: 0.55,
            ease: "power2.out",
          },
          0.19
        );

        tl.to(
          beadRightRef.current,
          {
            xPercent: -50,
            yPercent: -50,
            x: 42,
            y: -18,
            rotation: 15,
            scale: 1.88,
            duration: 0.55,
            ease: "power2.out",
          },
          0.2
        );

        tl.to(
          beadLeftRef.current,
          {
            xPercent: -50,
            yPercent: -50,
            x: -44,
            y: 36,
            rotation: -18,
            scale: 1.65,
            duration: 0.55,
            ease: "power2.out",
          },
          0.2
        );

        tl.fromTo(
          explodedTitleRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.24 },
          0.38
        );

        tl.fromTo(
          tagMalaRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: "power2.out" },
          0.3
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.heroWrapper} id="hero-section">
      <div ref={stickyRef} className={styles.stickyContainer}>
        {/* Background ambient lighting */}
        <div className={styles.ambientBackdrop} aria-hidden="true" />
        <div className={styles.divineAura} aria-hidden="true" />

        {/* Top Navigation */}
        <header className={styles.navbar}>
          <div className={styles.navbarTopRow}>
            <Link href="/" className={styles.brandLink}>
              <div className="relative h-6 w-6 sm:h-7 sm:w-7 overflow-hidden rounded-full border border-amber-500/40 shadow-[0_0_10px_rgba(223,171,82,0.35)] flex-shrink-0">
                <Image
                  src="/kashi-prasad-logo.png"
                  alt="Kashi Prasad Logo"
                  fill
                  className="object-cover"
                  sizes="28px"
                  priority
                />
              </div>
              <span className={styles.brandName}>KASHI PRASAD</span>
            </Link>

            {/* Desktop Visual Category Navigation (Top Center Zone) */}
            <div className={styles.desktopNavWrapper}>
              <CategoryNavigation />
            </div>

            <div className={styles.utilityLinks}>
              <button
                type="button"
                onClick={openSearch}
                aria-label="Search"
                className={styles.utilityButton}
              >
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 transition-colors" />
              </button>

              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                aria-label="Wishlist"
                className={`relative ${styles.utilityButton}`}
              >
                <Heart
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                    totalWishlistItems > 0 ? "fill-amber-400 text-amber-400" : "text-zinc-300 hover:text-amber-300"
                  }`}
                />
                {totalWishlistItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-amber-400 px-0.5 text-[8px] font-bold text-zinc-950 font-mono shadow-sm">
                    {totalWishlistItems}
                  </span>
                )}
              </button>

              {isLoggedIn ? (
                <Link href="/account" aria-label="Account" className={`hidden sm:grid ${styles.utilityButton}`}>
                  <User className="w-4 h-4 text-amber-300" />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => openAuthModal()}
                  aria-label="Login"
                  className={`hidden sm:grid ${styles.utilityButton}`}
                >
                  <User className="w-4 h-4 text-zinc-300 hover:text-amber-300" />
                </button>
              )}

              <button
                type="button"
                onClick={openCart}
                className={styles.navCta}
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-zinc-950 inline mr-0.5 sm:mr-1" />
                <span className="hidden sm:inline">Bag</span>
                {totalItems > 0 && (
                  <span className="ml-1 sm:ml-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-zinc-950 px-1 text-[9px] sm:text-[10px] font-bold text-amber-400">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                type="button"
                aria-label="Toggle Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden ${styles.utilityButton}`}
              >
                {mobileMenuOpen ? <X className="w-4 h-4 text-amber-400" /> : <Menu className="w-4 h-4 text-zinc-200" />}
              </button>
            </div>
          </div>

          {/* Mobile Visual 5-Category Matrix (100% visible, zero cutoff) */}
          <div className="w-full mt-2 lg:hidden">
            <CategoryNavigation isMobile />
          </div>

          {/* Luxury Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="fixed inset-x-0 top-[52px] max-h-[calc(100vh-65px)] overflow-y-auto border-t border-amber-500/20 bg-[#06080c]/98 backdrop-blur-2xl px-4 py-5 lg:hidden animate-fadeIn space-y-4 shadow-2xl z-50 text-left">
              {/* User Profile / Login Card */}
              <div className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-amber-950/20 to-transparent p-3">
                {isLoggedIn ? (
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/20 border border-amber-400 text-amber-200 font-serif font-bold">
                      {user?.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-amber-200">Pranam, {user?.name}</p>
                      <p className="text-[11px] text-zinc-400 truncate max-w-[180px]">{user?.email || user?.phone}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-serif font-bold text-amber-200">Kashi Prasad Devotee</p>
                      <p className="text-[10px] text-zinc-400">Sign in for orders & certificates</p>
                    </div>
                  </div>
                )}

                {isLoggedIn ? (
                  <Link
                    href="/account"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg border border-amber-500/40 bg-amber-500/20 px-3 py-1.5 text-xs font-semibold text-amber-200 hover:border-amber-400"
                  >
                    Profile
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openAuthModal();
                    }}
                    className="rounded-lg border border-amber-400 bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-1.5 text-xs font-bold text-zinc-950 shadow-[0_0_12px_rgba(223,171,82,0.4)]"
                  >
                    Login
                  </button>
                )}
              </div>

              {/* Mobile Currency Switcher */}
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3">
                <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 mb-2">Select Currency</p>
                <CurrencySwitcher variant="mobile" />
              </div>

              {/* Store Categories Grid */}
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-amber-400/80 mb-2 px-1">
                  ✦ Sacred Categories
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {storeCategories.map((category) => (
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      key={category.id}
                      href={category.href}
                      className="flex items-center gap-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-2.5 hover:border-amber-500/40 hover:bg-zinc-900/90 transition"
                    >
                      <div className="h-7 w-7 rounded-lg bg-zinc-950 border border-amber-500/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {category.image ? (
                          <img src={category.image} alt={category.name} className="h-full w-full object-contain p-0.5" />
                        ) : (
                          <span className="text-[10px] text-amber-400">✦</span>
                        )}
                      </div>
                      <span className="font-serif text-xs font-bold text-zinc-200 truncate">{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sacred Portals */}
              <div className="space-y-2 pt-1">
                <p className="text-[10px] uppercase font-mono tracking-widest text-amber-400/80 mb-2 px-1">
                  ✦ Devotional Portals
                </p>

                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/live-darshan"
                  className="flex items-center justify-between rounded-xl border border-red-500/40 bg-gradient-to-r from-red-950/30 to-zinc-900/50 p-3 text-red-200 hover:border-red-400 transition"
                >
                  <span className="flex items-center gap-2.5 font-serif text-sm font-semibold">
                    <Flame className="h-4 w-4 text-red-400 animate-pulse flex-shrink-0" />
                    Live Kashi Darshan & Aarti
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-red-500/20 border border-red-500/40 px-2 py-0.5 text-[9px] font-mono uppercase font-bold text-red-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                    Live
                  </span>
                </Link>

                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/verify-certificate"
                  className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-3 font-serif text-sm text-zinc-200 hover:border-amber-500/40 hover:text-amber-200 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-amber-400 flex-shrink-0" />
                    Verify Pran Pratishtha Certificate
                  </span>
                  <ChevronRight className="h-4 w-4 text-zinc-500" />
                </Link>

                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/track-order"
                  className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 font-serif text-sm text-amber-200 hover:border-amber-400 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <Truck className="h-4 w-4 text-amber-400 flex-shrink-0" />
                    Track My Sacred Order
                  </span>
                  <ChevronRight className="h-4 w-4 text-amber-400" />
                </Link>

                <a
                  href="https://wa.me/918604971503?text=Pranam%20Pandit%20Ji%2C%20I%20need%20guidance%20on%20Kashi%20Prasad%20sacred%20items."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 font-serif text-sm text-emerald-200 hover:border-emerald-400 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <MessageCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    24x7 Shastri Ji Consultation
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">WhatsApp ↗</span>
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Phase 1 Initial Hero Headline & CTA (Scrolls away) */}
        <div ref={headlineRef} className={styles.headlineOverlay}>
          {/* Subtle localized atmospheric gradient behind text */}
          <div className={styles.editorialBackdrop} aria-hidden="true" />

          <div className={styles.sacredBadge}>
            <span className={styles.sacredBadgeDot}>✦</span>
            <span>DIVINE CONSECRATION · KASHI VISHWANATH</span>
          </div>

          <h1 className={styles.mainHeading}>
            {/* Desktop and Mobile H1: ROOTED IN SANATAN */}
            <span className={styles.mobileHeading}>
              <span className={styles.mobileHeadingPart1}>ROOTED IN</span>{" "}
              <span className={styles.mobileHeadingPart2}>SANATAN</span>
            </span>
          </h1>

          <p className={styles.subHeading}>
            Authentic 5-Mukhi Rudraksha malas and consecrated celestial emblems, sanctified along
            the eternal ghats of Varanasi.
          </p>

          <div className={styles.ctaRow}>
            <a href="#collection" className={styles.primaryBtn}>
              Explore Consecrated Malas
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#craftsmanship" className={styles.secondaryBtn}>
              The Sacred Origin
            </a>
          </div>
        </div>

        {/* Phase 3 Exploded Product Storytelling Header (Revealed on scroll) */}
        <div ref={explodedTitleRef} className={styles.explodedStateTitle}>
          <span className={styles.explodedBadge}>SACRED CRAFTSMANSHIP</span>
          <h2 className={styles.explodedHeading}>THE CRAFT BEHIND THE MALA</h2>
          <p className={styles.explodedSubheading}>
            Consecrated elements of Vedic devotion, hand-threaded in Varanasi
          </p>
        </div>

        {/* Central Full-Bleed Animation Stage */}
        <div className={styles.stageContainer}>
          <div className={styles.innerCanvas}>
            {/* Distant Cloud Lightning Layer (Upper storm cloud region behind Shiva) */}
            <div className={styles.cloudLightningContainer} aria-hidden="true">
              {/* Left sky cloud flash & SVG bolt */}
              <div ref={flashLeftRef} className={styles.cloudFlashLeft} />
              <svg
                ref={boltLeftRef}
                viewBox="0 0 100 160"
                className={`${styles.lightningSvg} ${styles.lightningSvgLeft}`}
                fill="none"
              >
                <path
                  d="M50 0 L32 55 L58 60 L18 120 L45 118 L25 160"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M32 55 L15 80" stroke="#fed88b" strokeWidth="1.5" strokeLinecap="round" />
              </svg>

              {/* Right sky cloud flash & SVG bolt */}
              <div ref={flashRightRef} className={styles.cloudFlashRight} />
              <svg
                ref={boltRightRef}
                viewBox="0 0 100 160"
                className={`${styles.lightningSvg} ${styles.lightningSvgRight}`}
                fill="none"
              >
                <path
                  d="M45 0 L65 50 L40 58 L75 110 L52 114 L70 155"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M65 50 L85 75" stroke="#fed88b" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Master Assembled Hero Banner (Full-bleed source of truth for Phase 1) */}
            <img
              ref={heroBannerRef}
              src="/hero/assets/hero%20banner.png"
              alt="Assembled Sacred Adiyogi Statue with Consecrated Rudraksha Mala and Celestial Emblems"
              className={styles.heroBanner}
              id="hero-banner-master"
            />

            {/* Subtle Animated Water Motion Overlay (Across the lower sacred waters) */}
            <div className={styles.waterOverlay} aria-hidden="true">
              <div className={styles.waterShimmerBand1} />
              <div className={styles.waterShimmerBand2} />
            </div>

            {/* Subtle Floating Golden Dust Particles */}
            <div className={styles.particleLayer} aria-hidden="true">
              <div
                className={styles.particle}
                style={{ top: "35%", left: "28%", animationDelay: "0s" }}
              />
              <div
                className={styles.particle}
                style={{ top: "45%", left: "72%", animationDelay: "2.5s" }}
              />
              <div
                className={styles.particle}
                style={{ top: "60%", left: "34%", animationDelay: "5s" }}
              />
              <div
                className={styles.particle}
                style={{ top: "25%", left: "62%", animationDelay: "1.2s" }}
              />
              <div
                className={styles.particle}
                style={{ top: "70%", left: "55%", animationDelay: "7s" }}
              />
              <div
                className={styles.particle}
                style={{ top: "52%", left: "80%", animationDelay: "3.8s" }}
              />
              <div
                className={styles.particle}
                style={{ top: "38%", left: "18%", animationDelay: "6.2s" }}
              />
              <div
                className={styles.particle}
                style={{ top: "65%", left: "42%", animationDelay: "4.1s" }}
              />
            </div>

            {/* Individual Exploded Rudraksha Elements Layer (Crescent & Tilak completely removed) */}
            <div ref={elementsOverlayRef} className={styles.elementsOverlay}>
              {/* 1. Full Rudraksha Mala (The Hero Centerpiece) */}
              <div
                ref={malaRef}
                className={`${styles.explodedItem} ${styles.itemMala}`}
                id="element-full-mala"
              >
                <img
                  src="/hero/assets/full-rudraksha-mala.png"
                  alt="108-Bead Consecrated Rudraksha Mala"
                  loading="eager"
                />
              </div>

              {/* 2. Sumeru Guru Bead */}
              <div
                ref={guruRef}
                className={`${styles.explodedItem} ${styles.itemGuru}`}
                id="element-guru-bead"
              >
                <img
                  src="/hero/assets/guru-bead.png"
                  alt="Sumeru Guru Bead Central Piece"
                  loading="eager"
                />
              </div>

              {/* 3. 5-Mukhi Rudraksha Bead (Main / Right side in exploded composition) */}
              <div
                ref={beadRightRef}
                className={`${styles.explodedItem} ${styles.itemBeadRight}`}
                id="element-rudraksha-bead-right"
              >
                <img
                  src="/hero/assets/rudraksha-bead.png"
                  alt="Natural 5-Mukhi Rudraksha Bead"
                  loading="eager"
                />
              </div>

              {/* 4. Rudraksha Bead (Accent / Left side for balanced editorial framing) */}
              <div
                ref={beadLeftRef}
                className={`${styles.explodedItem} ${styles.itemBeadLeft}`}
                id="element-rudraksha-bead-left"
              >
                <img
                  src="/hero/assets/rudraksha-bead.png"
                  alt="5-Mukhi Rudraksha Accent"
                  loading="eager"
                />
              </div>
            </div>

            {/* Dedicated Product Callout Annotations Layer */}
            <div className={styles.annotationsLayer}>
              {/* Callout 1: 108-Bead Rudraksha Mala (Main Product Annotation) */}
              <div ref={tagMalaRef} className={`${styles.annotationTag} ${styles.tagMala}`}>
                <span className={styles.annotationTagTitle}>108-BEAD RUDRAKSHA MALA</span>
                <span className={styles.annotationTagSub}>Traditional 5-Mukhi Rudraksha</span>
              </div>

              {/* Callout 2: 5-Mukhi Rudraksha (Single representative loose bead annotation) */}
              <div ref={tagBeadRef} className={`${styles.annotationTag} ${styles.tagBead}`}>
                <span className={styles.annotationTagTitle}>5-MUKHI RUDRAKSHA</span>
                <span className={styles.annotationTagSub}>Natural organic formation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Heritage origin badge & interactive scroll prompt */}
        <footer className={styles.footerBar}>
          <div className={styles.originBadge}>
            <span className={styles.originDot} />
            <span>Kashi Vishwanath Consecration • 100% Authentic</span>
          </div>

          <div className={styles.scrollPrompt}>
            <span>Scroll to Dismantle</span>
            <div className={styles.scrollMouse}>
              <div className={styles.scrollWheel} />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

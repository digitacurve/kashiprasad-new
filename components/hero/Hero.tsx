"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
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
  const tagGuruRef = useRef<HTMLDivElement | null>(null);
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

        gsap.set(
          [malaRef.current, guruRef.current, beadRightRef.current, beadLeftRef.current],
          { xPercent: -50, yPercent: -50 }
        );

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
        tl.to(guruRef.current, { y: "+=2vh", rotation: "+=1.5", duration: 0.25, ease: "sine.inOut" }, 0.75);
        tl.to(beadRightRef.current, { y: "-=2vh", rotation: "+=2", duration: 0.25, ease: "sine.inOut" }, 0.75);
        tl.to(beadLeftRef.current, { y: "-=1.5vh", rotation: "-=2", duration: 0.25, ease: "sine.inOut" }, 0.75);
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

        tl.to(
          headlineRef.current,
          { opacity: 0, y: -20, duration: 0.18, ease: "power1.out" },
          0
        );

        tl.to(
          heroBannerRef.current,
          { opacity: 0.08, scale: 1.02, duration: 0.24, ease: "power1.inOut" },
          0.04
        );

        gsap.set(
          [
            malaRef.current,
            guruRef.current,
            beadRightRef.current,
            beadLeftRef.current,
          ],
          { xPercent: -50, yPercent: -50 }
        );

        tl.fromTo(
          [
            malaRef.current,
            guruRef.current,
            beadRightRef.current,
            beadLeftRef.current,
          ],
          { opacity: 0 },
          { opacity: 1, duration: 0.16 },
          0.04
        );

        tl.to(
          malaRef.current,
          { xPercent: -50, yPercent: -50, x: 0, y: -22, rotation: -4, scale: 0.65, duration: 0.55, ease: "power2.out" },
          0.16
        );

        tl.to(
          guruRef.current,
          { xPercent: -50, yPercent: -50, x: 48, y: 42, rotation: 12, scale: 1.25, duration: 0.55, ease: "power2.out" },
          0.19
        );

        tl.to(
          beadRightRef.current,
          { xPercent: -50, yPercent: -50, x: 42, y: -18, rotation: 15, scale: 1.25, duration: 0.55, ease: "power2.out" },
          0.2
        );

        tl.to(
          beadLeftRef.current,
          { xPercent: -50, yPercent: -50, x: -44, y: 36, rotation: -18, scale: 1.10, duration: 0.55, ease: "power2.out" },
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
          0.30
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
          <a href="#hero-section" className={styles.brandLink}>
            <span className={styles.brandName}>KASHI PRASAD</span>
            <span className={styles.brandSub}>VARANASI • ESTD. CONSECRATED</span>
          </a>

          <nav className={styles.navLinks} aria-label="Main navigation">
            <a href="#collection" className={styles.navLink}>
              Sacred Malas
            </a>
            <a href="#craftsmanship" className={styles.navLink}>
              Temple Craft
            </a>
            <a href="#consecration" className={styles.navLink}>
              Vedic Consecration
            </a>
          </nav>

          <a href="#collection" className={styles.navCta}>
            Acquire Relic
          </a>
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
            Authentic 5-Mukhi Rudraksha malas and consecrated celestial emblems,
            sanctified along the eternal ghats of Varanasi.
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
                <path
                  d="M32 55 L15 80"
                  stroke="#fed88b"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
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
                <path
                  d="M65 50 L85 75"
                  stroke="#fed88b"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
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
              <div className={styles.particle} style={{ top: "35%", left: "28%", animationDelay: "0s" }} />
              <div className={styles.particle} style={{ top: "45%", left: "72%", animationDelay: "2.5s" }} />
              <div className={styles.particle} style={{ top: "60%", left: "34%", animationDelay: "5s" }} />
              <div className={styles.particle} style={{ top: "25%", left: "62%", animationDelay: "1.2s" }} />
              <div className={styles.particle} style={{ top: "70%", left: "55%", animationDelay: "7s" }} />
              <div className={styles.particle} style={{ top: "52%", left: "80%", animationDelay: "3.8s" }} />
              <div className={styles.particle} style={{ top: "38%", left: "18%", animationDelay: "6.2s" }} />
              <div className={styles.particle} style={{ top: "65%", left: "42%", animationDelay: "4.1s" }} />
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
              <div
                ref={tagMalaRef}
                className={`${styles.annotationTag} ${styles.tagMala}`}
              >
                <span className={styles.annotationTagTitle}>
                  108-BEAD RUDRAKSHA MALA
                </span>
                <span className={styles.annotationTagSub}>
                  Traditional 5-Mukhi Rudraksha
                </span>
              </div>

              {/* Callout 2: Sumeru Guru Bead (Desktop only - completely hidden on mobile) */}
              <div
                ref={tagGuruRef}
                className={`${styles.annotationTag} ${styles.tagGuru}`}
              >
                <span className={styles.annotationTagTitle}>
                  SUMERU GURU BEAD
                </span>
                <span className={styles.annotationTagSub}>
                  Carved centerpiece
                </span>
              </div>

              {/* Callout 3: 5-Mukhi Rudraksha (Single representative loose bead annotation) */}
              <div
                ref={tagBeadRef}
                className={`${styles.annotationTag} ${styles.tagBead}`}
              >
                <span className={styles.annotationTagTitle}>
                  5-MUKHI RUDRAKSHA
                </span>
                <span className={styles.annotationTagSub}>
                  Natural organic formation
                </span>
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

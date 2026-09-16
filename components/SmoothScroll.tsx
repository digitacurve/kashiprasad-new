"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if user is on a mobile device or touch screen
    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 1024 ||
        window.matchMedia("(pointer: coarse)").matches ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    // For mobile/touch screens, let native hardware compositor handle 120Hz/60Hz smooth scroll
    if (isMobile) {
      return;
    }

    // Instantiate Lenis instance for smooth desktop mousewheel
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.0,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis scroll event with ScrollTrigger update
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis tick via GSAP ticker
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}

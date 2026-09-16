"use client";

import React, { useState, useEffect } from "react";
import { User, Sparkles, X, Lock } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { playLuxuryHaptic } from "@/lib/audio";

const PROMPT_SESSION_KEY = "kashi_login_prompt_dismissed_v1";

export default function AutoLoginPrompt() {
  const { isLoggedIn, isAuthModalOpen, openAuthModal } = useAuth();
  const [showFloatingPill, setShowFloatingPill] = useState(false);

  useEffect(() => {
    // If user is already logged in, do not prompt or show floating button
    if (isLoggedIn) {
      setShowFloatingPill(false);
      return;
    }

    try {
      const dismissed = sessionStorage.getItem(PROMPT_SESSION_KEY);
      if (!dismissed) {
        // Automatically prompt user after 3.5 seconds on first visit
        const timer = setTimeout(() => {
          if (!isLoggedIn) {
            openAuthModal();
            sessionStorage.setItem(PROMPT_SESSION_KEY, "true");
            setShowFloatingPill(true);
          }
        }, 3500);

        return () => clearTimeout(timer);
      } else {
        // If already prompted before in session, show the gentle floating button
        setShowFloatingPill(true);
      }
    } catch {
      // safe fallback
      setShowFloatingPill(true);
    }
  }, [isLoggedIn, openAuthModal]);

  // If user is logged in or modal is currently open, don't show the floating chip
  if (isLoggedIn || isAuthModalOpen || !showFloatingPill) {
    return null;
  }

  return (
    <div className="fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        type="button"
        onClick={() => {
          playLuxuryHaptic();
          openAuthModal();
        }}
        className="group relative flex items-center gap-2 rounded-full border border-amber-400/50 bg-[#090c12]/95 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs font-serif font-bold text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.3)] backdrop-blur-xl hover:scale-105 hover:border-amber-300 hover:text-amber-100 transition-all cursor-pointer"
        aria-label="Login Now"
      >
        {/* Ambient Gold Glow */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-300/30 blur-sm opacity-60 group-hover:opacity-100 transition" />

        <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
          <User className="h-3.5 w-3.5" />
        </span>

        <span className="relative font-mono text-[11px] sm:text-xs tracking-wider uppercase">
          Login Now
        </span>

        <span className="relative flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
      </button>
    </div>
  );
}

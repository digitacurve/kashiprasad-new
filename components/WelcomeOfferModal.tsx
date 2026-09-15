"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, X, Check, Gift, ArrowRight } from "lucide-react";
import { playLuxuryHaptic } from "@/lib/audio";
import { useCurrency } from "./CurrencyProvider";

const STORAGE_KEY = "kashi_welcome_blessing_seen_v1";
const COUPON_CODE = "MAHADEV500";

export default function WelcomeOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { formatPrice } = useCurrency();

  useEffect(() => {
    try {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        // Show after 3.5 seconds on first visit
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 3500);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
  };

  const handleCopyCode = () => {
    try {
      navigator.clipboard.writeText(COUPON_CODE);
      setCopied(true);
      playLuxuryHaptic();
      setTimeout(() => {
        setCopied(false);
        handleClose();
      }, 1500);
    } catch {
      setCopied(true);
      setTimeout(handleClose, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
      />

      {/* Luxury Golden Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-amber-500/40 bg-gradient-to-b from-[#14100b] via-[#090b10] to-[#05070a] p-6 sm:p-8 text-center shadow-[0_0_50px_rgba(251,191,36,0.25)] animate-in zoom-in-95 duration-300">
        {/* Glow ambient background */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-100 transition cursor-pointer"
          aria-label="Close Blessing Modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Sacred Badge */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 text-[11px] font-mono tracking-widest text-amber-300 uppercase">
          <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
          First Sacred Order Blessing
        </div>

        {/* Heading */}
        <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100">
          Har Har Mahadev!
        </h3>

        <p className="mt-2 text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
          Receive a divine welcoming grace of{" "}
          <strong className="text-amber-300 font-serif">{formatPrice(500)} Off</strong> on your first consecrated Ratna, Rudraksha, or Puja booking.
        </p>

        {/* Golden Coupon Box */}
        <div className="mt-6 rounded-2xl border border-dashed border-amber-500/50 bg-amber-500/5 p-4 sm:p-5 relative">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
            Sacred Consecration Coupon Code
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="font-mono text-2xl sm:text-3xl font-black tracking-widest text-amber-300">
              {COUPON_CODE}
            </span>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={handleCopyCode}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-lg shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 stroke-[3]" />
                  Blessing Code Copied!
                </>
              ) : (
                <>
                  <Gift className="h-4 w-4" />
                  Copy Sacred Code & Shop
                </>
              )}
            </button>
          </div>
        </div>

        {/* Sub-text */}
        <div className="mt-5 flex items-center justify-center gap-4 text-[11px] font-mono text-zinc-400">
          <span>✓ 100% Pran Pratishtha</span>
          <span>•</span>
          <span>✓ Direct Varanasi Delivery</span>
        </div>
      </div>
    </div>
  );
}

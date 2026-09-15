"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCurrency, SUPPORTED_CURRENCIES, CurrencyCode } from "./CurrencyProvider";
import { Globe, ChevronDown, Check } from "lucide-react";

export default function CurrencySwitcher({
  variant = "header",
}: {
  variant?: "header" | "footer" | "mobile";
}) {
  const { currency, setCurrency, currentConfig } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currencies = Object.values(SUPPORTED_CURRENCIES);

  if (variant === "mobile") {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3">
        <label className="text-[11px] font-mono uppercase text-zinc-400 block mb-2 flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5 text-amber-400" />
          Select Display Currency
        </label>
        <div className="grid grid-cols-3 gap-2">
          {currencies.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => setCurrency(c.code)}
              className={`flex items-center justify-center gap-1.5 rounded-lg border py-2 px-2 text-xs font-mono transition ${
                currency === c.code
                  ? "border-amber-400 bg-amber-500/20 text-amber-200 font-bold shadow-[0_0_10px_rgba(251,191,36,0.2)]"
                  : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
              <span>{c.flag}</span>
              <span>{c.code}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-full border border-zinc-800/90 bg-zinc-900/80 px-2.5 py-1.5 text-xs font-mono text-zinc-300 hover:border-amber-500/40 hover:text-amber-200 transition cursor-pointer"
        aria-label="Change Currency"
      >
        <span>{currentConfig.flag}</span>
        <span className="font-semibold text-[11px]">{currentConfig.code}</span>
        <ChevronDown className={`h-3 w-3 text-zinc-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl border border-amber-500/20 bg-zinc-950/95 p-1.5 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-2.5 py-1.5 text-[10px] font-mono uppercase text-zinc-400 border-b border-zinc-800/80 mb-1">
            Display Currency
          </div>
          {currencies.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => {
                setCurrency(c.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between rounded-lg px-2.5 py-2 text-xs transition cursor-pointer ${
                currency === c.code
                  ? "bg-amber-500/15 text-amber-300 font-semibold"
                  : "text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{c.flag}</span>
                <span>{c.label}</span>
              </div>
              {currency === c.code && <Check className="h-3.5 w-3.5 text-amber-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function FloatingQuizButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClick = () => {
    const el = document.getElementById("kundali-quiz");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#kundali-quiz";
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Find my perfect sacred match"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden sm:flex items-center gap-2 rounded-l-2xl border-l-2 border-t-2 border-b-2 border-amber-400/60 bg-gradient-to-b from-[#181206] via-[#241a08] to-[#120e05] px-3 py-4 text-amber-200 shadow-[-5px_0_20px_rgba(223,171,82,0.3)] hover:brightness-125 transition-all group cursor-pointer [writing-mode:vertical-rl] rotate-180"
    >
      <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-amber-300">
        <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-spin-slow rotate-90" />
        <span>Help Me Choose / Kundali Match</span>
      </div>
    </button>
  );
}

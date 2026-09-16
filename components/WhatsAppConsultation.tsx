"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles, Send, ShieldCheck, PhoneCall } from "lucide-react";

const WHATSAPP_NUMBER = "918604971503"; // +91 86049 71503
const DISPLAY_PHONE = "+91 86049 71503";

const QUICK_INQUIRIES = [
  {
    id: "kundali",
    icon: "🔮",
    title: "Free Kundali & Gemstone Advisory",
    desc: "Find which Rudraksha or Ratna suits your birth chart",
    message: "Hari Om Acharyaji, Mujhe apni Kundali aur Rashi ke anusaar sahi Rudraksha / Ratna recommendation chahiye.",
  },
  {
    id: "pratishtha",
    icon: "🕉️",
    title: "Praan Pratishtha & Muhurat Inquiry",
    desc: "Know how your Mala is energized at Assi Ghat",
    message: "Hari Om, Mujhe Mala ki Assi Ghat Praan Pratishtha vidhi aur shubh dharan Muhurat ke baare me poochna hai.",
  },
  {
    id: "sankalp",
    icon: "🪔",
    title: "Special Kashi Vishwanath Sankalp",
    desc: "Book personalized gotra sankalp & prasad dispatch",
    message: "Har Har Mahadev, Mujhe Kashi Vishwanath ji me vishesh parivar Gotra Sankalp karwana hai.",
  },
  {
    id: "order",
    icon: "📦",
    title: "Track / Inquire about an Order",
    desc: "Check your dispatched parcel status or certificate",
    message: "Namaste Kashi Prasad team, Mujhe apne order aur consecration certificate ke bare me poochna hai.",
  },
];

export default function WhatsAppConsultation() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");
  const [hasPrompted, setHasPrompted] = useState(false);

  // Subtle nudge after 12s on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    setIsOpen(false);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    openWhatsApp(customMsg);
    setCustomMsg("");
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-8 z-50">
      {/* Floating Trigger Button & Tooltip */}
      {!isOpen && (
        <div className="relative flex items-center">
          {/* Subtle popover teaser */}
          {hasPrompted && (
            <div
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-1.5 rounded-full bg-[#0a0d14] border border-amber-500/30 text-xs text-amber-200 shadow-[0_4px_20px_rgba(0,0,0,0.7)] cursor-pointer hover:border-amber-400 transition animate-bounce"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Talk to Acharya Vikas</span>
            </div>
          )}

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Talk to Acharya Vikas on WhatsApp"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-[0_8px_25px_rgba(16,185,129,0.35)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-emerald-300/40 cursor-pointer"
          >
            {/* Pulsing ring */}
            <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-sm animate-pulse" />

            {/* Online indicator dot */}
            <span className="absolute top-1 right-1 flex h-3.5 w-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 border-2 border-emerald-950" />
            </span>

            <MessageCircle className="h-7 w-7 text-white fill-white/10 group-hover:scale-110 transition-transform relative z-10" />
          </button>
        </div>
      )}

      {/* Consultation Popup Dialog */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] rounded-2xl bg-gradient-to-b from-[#0e121a] to-[#07090e] border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl text-zinc-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-amber-500/20 via-emerald-950/40 to-amber-500/10 border-b border-amber-500/20 p-4 sm:p-5">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp Consultation"
              className="absolute top-3.5 right-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-400/50 bg-amber-500/10 text-2xl shadow-[0_0_15px_rgba(223,171,82,0.3)]">
                🕉️
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-[#0e121a]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-amber-200">
                    Acharya Vikas
                  </h3>
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                </div>
                <p className="text-[11px] font-sans text-zinc-400">
                  Senior Vedic Astrologer & Purohit · Kashi Prasad
                </p>
                <div className="flex items-center gap-1.5 mt-0.5 text-[10px] font-mono text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available on WhatsApp · Instant Reply</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Consultation Options */}
          <div className="p-4 space-y-2.5 max-h-[340px] overflow-y-auto custom-scrollbar">
            <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-amber-400/80 mb-2">
              Select inquiry or ask custom question:
            </p>

            {QUICK_INQUIRIES.map((item) => (
              <button
                key={item.id}
                onClick={() => openWhatsApp(item.message)}
                className="w-full text-left p-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-amber-500/10 hover:border-amber-500/40 transition group cursor-pointer"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-lg group-hover:scale-125 transition-transform">
                    {item.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-zinc-200 group-hover:text-amber-200 transition">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-xs text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Custom Message Input Bar */}
          <form
            onSubmit={handleCustomSubmit}
            className="p-3 bg-[#080b10] border-t border-zinc-800/80 flex items-center gap-2"
          >
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Type your question for Acharya Vikas..."
              className="flex-1 bg-zinc-900/90 border border-zinc-700/60 rounded-xl px-3.5 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition"
            />
            <button
              type="submit"
              aria-label="Send message to WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:brightness-110 shadow-md shadow-emerald-600/30 transition cursor-pointer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Footer Direct Call Link */}
          <div className="px-4 py-2 bg-black/40 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="font-mono flex items-center gap-1 text-zinc-400">
              <PhoneCall className="h-3 w-3 text-amber-400" /> Helpline: {DISPLAY_PHONE}
            </span>
            <span className="text-emerald-400 font-mono">100% Free Consultation</span>
          </div>
        </div>
      )}
    </div>
  );
}

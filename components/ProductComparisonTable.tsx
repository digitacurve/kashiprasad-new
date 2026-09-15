"use client";

import React from "react";
import { Check, X, Sparkles, ShieldCheck } from "lucide-react";

interface ComparisonRow {
  feature: string;
  kashiPrasad: string;
  market: string;
  highlight?: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Authenticity & Certification",
    kashiPrasad: "100% Genuine, X-Ray Tested with Individual Lab Certificate & QR",
    market: "Often synthetic, dyed, or plastic resin duplicates with fake stamps",
    highlight: true,
  },
  {
    feature: "Sacred Praan Pratishtha",
    kashiPrasad: "Energized at Assi Ghat & Kashi Vishwanath with Vedic Mantras",
    market: "Stored in commercial warehouses without any religious consecration",
  },
  {
    feature: "Individual Gotra Sankalp",
    kashiPrasad: "Personalized prayer performed under devotee's name & gotra",
    market: "Anonymous bulk shipment with zero devotee connection",
    highlight: true,
  },
  {
    feature: "Silver Capping Purity",
    kashiPrasad: "Pure 92.5 Sterling Silver with anti-tarnish protective sealing",
    market: "Cheap base alloy or toxic nickel coating that tarnishes in days",
  },
  {
    feature: "Temple Prasadam Inclusions",
    kashiPrasad: "Complimentary Sanctified Holy Gangajal Vial & Sacred Kashi Bhasma",
    market: "None included",
  },
  {
    feature: "Vedic Guidance & Support",
    kashiPrasad: "Lifetime access to Temple Shastri on WhatsApp for wearing rules",
    market: "No spiritual guidance or after-sales ritual support",
  },
];

export default function ProductComparisonTable() {
  return (
    <section className="my-12 rounded-2xl border border-amber-500/30 bg-gradient-to-b from-[#0c0f17] to-[#07090e] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300 mb-3">
          <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
          <span>The Sanctity Guarantee</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
          Why Devotees Choose Kashi Prasad
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400">
          How our consecrated adornments differ from commercial marketplace sellers.
        </p>
      </div>

      {/* Comparison Grid Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[550px]">
          <thead>
            <tr className="border-b border-zinc-800 text-xs font-mono uppercase tracking-wider">
              <th className="py-3 px-4 text-zinc-400 font-medium w-1/3">Key Dimension</th>
              <th className="py-3 px-4 text-amber-300 bg-amber-500/10 rounded-t-xl font-bold text-sm w-1/3 border-t border-x border-amber-500/30">
                ✦ Kashi Prasad Sanctum
              </th>
              <th className="py-3 px-4 text-zinc-500 font-medium w-1/3">
                Ordinary Market Sellers
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60 text-xs sm:text-sm">
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-zinc-900/30 transition">
                <td className="py-3.5 px-4 font-semibold text-zinc-200">
                  {row.feature}
                </td>
                <td className="py-3.5 px-4 bg-amber-500/[0.06] border-x border-amber-500/20 text-amber-100">
                  <div className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-snug">{row.kashiPrasad}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-zinc-400">
                  <div className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/20 text-rose-400 shrink-0 mt-0.5">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-snug">{row.market}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

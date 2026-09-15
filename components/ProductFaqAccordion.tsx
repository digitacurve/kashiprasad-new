"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle, ShieldCheck } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

const FAQS_DATA: FaqItem[] = [
  {
    question: "Can women wear Karungali / Rudraksha malas?",
    answer:
      "Yes, absolutely. According to the Shiva Purana and ancient Agamic texts, sacred Rudraksha and Karungali have no gender restrictions. Both men and women can wear them with pure intention and devotion. During menstrual cycles, some traditional practices suggest taking it off for 3-4 days and keeping it in the velvet temple box before re-wearing with a simple Gangajal touch.",
    category: "Purity & Rituals",
  },
  {
    question: "How do I care for and maintain my consecrated beads?",
    answer:
      "Every 2-3 months, gently apply a few drops of pure sandalwood oil or mustard oil on the beads using a soft cotton cloth to preserve their natural moisture and aroma. Keep away from harsh chemical shampoos or detergents.",
    category: "Maintenance",
  },
  {
    question: "Can I wear the sacred mala while bathing or sleeping?",
    answer:
      "While natural tap water will not harm authentic ebony or rudraksha, chemical soaps, sulphates, and shampoos may strip natural oils over time. It is advised to place your mala on your home altar before bathing or intense exercise, and wear it right after.",
    category: "Daily Wear",
  },
  {
    question: "How do I verify the authenticity lab certificate?",
    answer:
      "Each Kashi Prasad delivery includes an official physical Laboratory Gemological Certificate with an anti-counterfeit QR code. Simply scan the QR code with your mobile camera to view the live X-Ray density test and authenticity certificate record on the testing council portal.",
    category: "Verification",
  },
  {
    question: "Are there any strict dietary restrictions (non-veg / alcohol)?",
    answer:
      "While a Sattvic lifestyle amplifies the spiritual vibration of the mala, wearing Rudraksha/Karungali itself is meant to transform and calm the mind. If consuming non-vegetarian food or alcohol, devotees traditionally remove the mala and keep it in the sacred velvet box.",
    category: "Lifestyle",
  },
];

export default function ProductFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section className="my-12 rounded-2xl border border-zinc-800 bg-[#080b10] p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-5 mb-6">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">
            Sacred Knowledge & Guidelines
          </span>
          <h3 className="font-serif text-2xl font-bold text-amber-100 mt-1">
            Frequently Asked Questions
          </h3>
        </div>
        <HelpCircle className="h-8 w-8 text-amber-400/40 hidden sm:block" />
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-zinc-800/80">
        {FAQS_DATA.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-4">
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
              >
                <span
                  className={`font-serif text-sm sm:text-base font-bold transition ${
                    isOpen ? "text-amber-300" : "text-zinc-200 group-hover:text-amber-200"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 group-hover:border-amber-500/40 group-hover:text-amber-300 transition-transform ${
                    isOpen ? "rotate-180 text-amber-300 border-amber-400/50" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              {isOpen && (
                <div className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed pl-1 pr-4 animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

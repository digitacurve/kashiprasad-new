"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface SeoFaqSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
}

export default function SeoFaqSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about authenticity, consecration, and Vedic practices.",
  faqs,
}: SeoFaqSectionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 px-4 md:px-8 border-t border-amber-500/10 bg-gradient-to-b from-neutral-950 via-neutral-900/40 to-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Spiritual Guidance & FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-amber-100 tracking-wide font-normal mb-2">
            {title}
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-light">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-neutral-900/80 border-amber-500/30 shadow-lg shadow-amber-950/20"
                    : "bg-neutral-900/30 border-white/5 hover:border-white/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base md:text-lg text-neutral-200 pr-4 font-normal">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-amber-300" : "text-neutral-500"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm md:text-base text-neutral-300/90 font-light leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

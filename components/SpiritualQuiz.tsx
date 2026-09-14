"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  ShieldCheck,
  ShoppingBag,
  Zap,
  ChevronRight,
  Flame,
  Star,
  Info,
} from "lucide-react";
import { allProducts } from "@/data/products";
import { useCart } from "@/components/CartProvider";
import { playLuxuryHaptic } from "@/lib/audio";

interface QuizAnswers {
  intent?: string;
  painPoint?: string;
  rashi?: string;
  form?: string;
  experience?: string;
}

const INTENT_OPTIONS = [
  {
    id: "wealth",
    emoji: "💰",
    title: "Wealth & Prosperity",
    subtitle: "Career growth, business flow, financial abundance & Kuber grace",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    id: "protection",
    emoji: "🛡️",
    title: "Protection & Peace",
    subtitle: "Shield against evil eye (Nazar), negative energies & Rahu/Ketu",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    id: "peace",
    emoji: "🧘",
    title: "Mental Calm & Focus",
    subtitle: "Overcoming anxiety, overthinking, stress relief & deep meditation",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    id: "vitality",
    emoji: "☀️",
    title: "Health, Energy & Power",
    subtitle: "Physical recovery, solar vitality, confidence & leadership",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    id: "relationships",
    emoji: "❤️",
    title: "Love & Harmony",
    subtitle: "Emotional balance, soulmate connection & family harmony",
    color: "from-rose-500/20 to-rose-600/5",
  },
  {
    id: "spiritual",
    emoji: "🕉️",
    title: "Spiritual Sadhana",
    subtitle: "Mantra japa, divine Shiva connection & consciousness awakening",
    color: "from-purple-500/20 to-purple-600/5",
  },
];

const PAIN_POINT_OPTIONS = [
  {
    id: "blocked_finances",
    emoji: "📈",
    title: "Blocked money flow & business hurdles",
    subtitle: "Stagnant income or unpredictable losses needing divine turnaround",
  },
  {
    id: "negative_energy",
    emoji: "🌑",
    title: "Heavy negative aura, anxiety or evil eye",
    subtitle: "Feeling drained, unseen fear or sudden setbacks in life",
  },
  {
    id: "restless_mind",
    emoji: "🧠",
    title: "Overthinking, restlessness & lack of sleep",
    subtitle: "Mind won't settle, constant mental clutter and stress",
  },
  {
    id: "planetary_dosha",
    emoji: "🪐",
    title: "Planetary doshas (Shani, Rahu, Ketu, Mangal)",
    subtitle: "Astrological phase causing delays in work or health",
  },
  {
    id: "deep_devotion",
    emoji: "🪔",
    title: "Seeking holy blessings from Kashi Vishwanath",
    subtitle: "Want sacred consecrated mala for daily chanting and peace",
  },
];

const RASHI_OPTIONS = [
  { id: "mesh", name: "Mesh (Aries)", planet: "Mangal • Mars" },
  { id: "vrishabh", name: "Vrishabh (Taurus)", planet: "Shukra • Venus" },
  { id: "mithun", name: "Mithun (Gemini)", planet: "Budha • Mercury" },
  { id: "kark", name: "Kark (Cancer)", planet: "Chandra • Moon" },
  { id: "simha", name: "Simha (Leo)", planet: "Surya • Sun" },
  { id: "kanya", name: "Kanya (Virgo)", planet: "Budha • Mercury" },
  { id: "tula", name: "Tula (Libra)", planet: "Shukra • Venus" },
  { id: "vrishchik", name: "Vrishchik (Scorpio)", planet: "Mangal • Mars" },
  { id: "dhanu", name: "Dhanu (Sagittarius)", planet: "Guru • Jupiter" },
  { id: "makar", name: "Makar (Capricorn)", planet: "Shani • Saturn" },
  { id: "kumbh", name: "Kumbh (Aquarius)", planet: "Shani • Saturn" },
  { id: "meen", name: "Meen (Pisces)", planet: "Guru • Jupiter" },
  { id: "unknown", name: "I don't know my Rashi", planet: "Match by Divine Intent" },
];

const FORM_OPTIONS = [
  {
    id: "mala",
    emoji: "📿",
    title: "Sacred Consecrated Mala",
    subtitle: "108 beads garland for neck wear and daily mantra japa",
  },
  {
    id: "gemstone",
    emoji: "💎",
    title: "Vedic Astrological Gemstone",
    subtitle: "Earth-mined certified planetary ratna for ring or pendant",
  },
  {
    id: "rudraksha",
    emoji: "🕉️",
    title: "Consecrated Nepali Rudraksha",
    subtitle: "High-vibration natural mukhi bead blessed along Ganga",
  },
  {
    id: "any",
    emoji: "✨",
    title: "Recommend Best Holy Combination",
    subtitle: "Show whatever suits my planetary and intent alignment best",
  },
];

export default function SpiritualQuiz() {
  const { addItem, openCart } = useCart();
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleSelectOption = (key: keyof QuizAnswers, value: string) => {
    playLuxuryHaptic();
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    playLuxuryHaptic();
    setStep((s) => Math.max(1, s - 1));
  };

  const handleReset = () => {
    playLuxuryHaptic();
    setAnswers({});
    setStep(1);
    setAddedItems({});
  };

  // RECOMMENDATION CALCULATION ENGINE
  const recommendations = useMemo(() => {
    if (step < 5) return [];

    const { intent, painPoint, rashi, form } = answers;

    // Filter candidate products from live catalogue
    let matchedSlugs: { slug: string; reason: string; compatibility: number }[] = [];

    // Protection / Negative Energy
    if (intent === "protection" || painPoint === "negative_energy") {
      matchedSlugs.push({
        slug: "original-karungali-mala-108-beads",
        reason: "Natural Black Ebony Wood acts as a potent shield against evil eye (Drishti / Nazar) and absorbs negative atmospheric vibrations.",
        compatibility: 99,
      });
      matchedSlugs.push({
        slug: "cats-eye-lahsunia",
        reason: "Chrysoberyl gemstone neutralizes sudden malefic effects of Ketu and wards off psychic blockages.",
        compatibility: 95,
      });
      matchedSlugs.push({
        slug: "blue-sapphire-neelam",
        reason: "Pacifies severe Shani dosha and provides instant energetic grounding.",
        compatibility: 91,
      });
    }

    // Wealth & Prosperity
    else if (intent === "wealth" || painPoint === "blocked_finances") {
      matchedSlugs.push({
        slug: "emerald-panna",
        reason: "Ruled by Budha (Mercury), awakens sharp intellect, rapid business decisions, and commercial prosperity.",
        compatibility: 98,
      });
      matchedSlugs.push({
        slug: "yellow-sapphire-pukhraj",
        reason: "Ruled by Guru (Jupiter), expands wealth horizons, divine luck, and ancestral abundance.",
        compatibility: 96,
      });
      matchedSlugs.push({
        slug: "original-karungali-mala-108-beads",
        reason: "Karungali attracts Mahalakshmi's stable grace and removes obstacles in new financial ventures.",
        compatibility: 92,
      });
    }

    // Mental Calm & Peace
    else if (intent === "peace" || painPoint === "restless_mind") {
      matchedSlugs.push({
        slug: "pearl-moti",
        reason: "Moon gemstone with soothing oceanic resonance to cool fiery anxiety, balance hormones, and induce tranquil sleep.",
        compatibility: 98,
      });
      matchedSlugs.push({
        slug: "original-karungali-mala-108-beads",
        reason: "Grounds erratic thought patterns and promotes deep centered alpha-state concentration.",
        compatibility: 94,
      });
      matchedSlugs.push({
        slug: "emerald-panna",
        reason: "Clears nervous tension and sharpens articulate speech.",
        compatibility: 90,
      });
    }

    // Health, Energy & Vitality
    else if (intent === "vitality") {
      matchedSlugs.push({
        slug: "ruby-manikya",
        reason: "Surya ratna elevates royal vitality, boosts bone/blood prana, and infuses unstoppable leadership aura.",
        compatibility: 99,
      });
      matchedSlugs.push({
        slug: "red-coral-moonga",
        reason: "Mars organic gemstone enhances muscular strength, courage, and removes physical lethargy.",
        compatibility: 95,
      });
    }

    // Default / Spiritual Sadhana fallback
    else {
      matchedSlugs.push({
        slug: "original-karungali-mala-108-beads",
        reason: "Consecrated along Varanasi Ganga ghats, amplifies mantra vibrations 100-fold during daily spiritual japa.",
        compatibility: 99,
      });
      matchedSlugs.push({
        slug: "ruby-manikya",
        reason: "Brings solar illumination to your spiritual path and opens the manipura solar plexus chakra.",
        compatibility: 94,
      });
      matchedSlugs.push({
        slug: "emerald-panna",
        reason: "Connects heart chakra prana with cosmic higher consciousness.",
        compatibility: 91,
      });
    }

    // Map to actual full product objects from catalog
    const results = matchedSlugs
      .map(({ slug, reason, compatibility }) => {
        const prod = allProducts.find((p) => p.slug === slug);
        if (!prod) return null;
        const minPrice = prod.variants?.length
          ? Math.min(...prod.variants.map((v) => v.price))
          : prod.price || 0;
        return {
          product: prod,
          reason,
          compatibility,
          price: minPrice,
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    return results.slice(0, 3);
  }, [step, answers]);

  const handleAddRec = (prod: any) => {
    playLuxuryHaptic();
    const primaryVariant = prod.variants?.[0];
    addItem({
      productId: prod.id,
      slug: prod.slug,
      name: prod.name,
      category: prod.category,
      image: prod.image,
      variantId: primaryVariant?.id || "default",
      variantName: primaryVariant?.name || "Consecrated Selection",
      price: primaryVariant?.price || prod.price || 0,
      mrp: primaryVariant?.mrp || prod.mrp,
      divineOffering: false,
    });

    setAddedItems((prev) => ({ ...prev, [prod.id]: true }));
    openCart();
  };

  return (
    <section id="kundali-quiz" className="relative border-t border-amber-500/20 bg-[#06080c] px-4 py-16 sm:px-8 sm:py-24 overflow-hidden">
      {/* Background Sacred Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent px-4 py-1.5 text-xs font-mono uppercase tracking-[0.25em] text-amber-300 shadow-[0_0_20px_rgba(223,171,82,0.12)] mb-3">
            <Sparkles className="h-3.5 w-3.5 animate-spin-slow" />
            <span>Vedic Kundali & Intent Matcher</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-[#fff8eb] via-amber-200 to-zinc-200">
            Not Sure What&apos;s Right for You?
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Take a quick 1-minute sacred alignment quiz. We&apos;ll calculate the perfect consecrated mala, rudraksha, or gemstone for your specific intention, lifestyle, and Kundali.
          </p>

          {/* Progress Bar (Visible during steps 1-4) */}
          {step <= 4 && (
            <div className="mt-6 max-w-md mx-auto">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
                <span>STEP {step} OF 4</span>
                <span className="text-amber-400">{step * 25}% ALIGNED</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-500"
                  style={{ width: `${step * 25}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* QUIZ CONTAINER */}
        <div className="rounded-3xl border border-amber-500/25 bg-[#090c12]/90 p-5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          {/* STEP 1: INTENT */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                  ✦ Question 1 of 4: Your Sacred Intention
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-100">
                  What is pulling at your <em>mann</em> (mind & heart) right now?
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Select the primary energy or transformation you are seeking in your life.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {INTENT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption("intent", opt.id)}
                    className="group relative flex items-start gap-3.5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-5 text-left transition-all hover:border-amber-500/50 hover:bg-zinc-900/90 hover:shadow-[0_0_20px_rgba(223,171,82,0.12)] cursor-pointer"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-700/80 text-xl group-hover:scale-110 transition-transform">
                      {opt.emoji}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-serif text-base font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors">
                        {opt.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {opt.subtitle}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: PAIN POINT */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                    ✦ Question 2 of 4: The Core Obstacle
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-100">
                    If you could dissolve one hindrance today, what would it be?
                  </h3>
                </div>
                <button
                  onClick={handleBack}
                  className="text-xs font-mono text-zinc-400 hover:text-amber-300"
                >
                  ← Back
                </button>
              </div>

              <div className="space-y-3">
                {PAIN_POINT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption("painPoint", opt.id)}
                    className="group w-full flex items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-5 text-left transition-all hover:border-amber-500/50 hover:bg-zinc-900/90 hover:shadow-[0_0_20px_rgba(223,171,82,0.1)] cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                        {opt.emoji}
                      </span>
                      <div>
                        <h4 className="font-serif text-sm sm:text-base font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors">
                          {opt.title}
                        </h4>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          {opt.subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: RASHI / ZODIAC */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                    ✦ Question 3 of 4: Planetary Alignment
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-100">
                    What is your Rashi (Moon Sign) or Zodiac?
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Planetary frequencies tune the sacred wood and gemstone resonance with your birth chart.
                  </p>
                </div>
                <button
                  onClick={handleBack}
                  className="text-xs font-mono text-zinc-400 hover:text-amber-300"
                >
                  ← Back
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {RASHI_OPTIONS.map((rashi) => (
                  <button
                    key={rashi.id}
                    onClick={() => handleSelectOption("rashi", rashi.id)}
                    className="group rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-left transition-all hover:border-amber-500/40 hover:bg-zinc-900/90 cursor-pointer"
                  >
                    <span className="font-serif text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-amber-300 block">
                      {rashi.name}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 block mt-0.5">
                      {rashi.planet}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: WEAR / USAGE FORM */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                    ✦ Question 4 of 4: Preferred Sacred Form
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-100">
                    How would you like to wear or experience this sacred blessing?
                  </h3>
                </div>
                <button
                  onClick={handleBack}
                  className="text-xs font-mono text-zinc-400 hover:text-amber-300"
                >
                  ← Back
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {FORM_OPTIONS.map((form) => (
                  <button
                    key={form.id}
                    onClick={() => handleSelectOption("form", form.id)}
                    className="group flex items-start gap-3.5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-5 text-left transition-all hover:border-amber-500/50 hover:bg-zinc-900/90 cursor-pointer"
                  >
                    <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                      {form.emoji}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-serif text-base font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors">
                        {form.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {form.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: SACRED RECOMMENDATIONS REVEAL */}
          {step >= 5 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-500/20 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                      ✓
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                      Calculated Divine Harmony
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100 mt-1">
                    Your Personalized Sacred Matches
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Consecrated at holy Varanasi ghats specifically tuned for your selected intention.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2 text-xs font-mono text-zinc-400 hover:text-amber-300 transition cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              {/* Recommended Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {recommendations.map((rec) => {
                  const p = rec.product;
                  const isAdded = addedItems[p.id];

                  return (
                    <div
                      key={p.id}
                      className="group relative flex flex-col justify-between rounded-2xl border border-amber-500/25 bg-zinc-950 p-5 shadow-xl transition-all hover:border-amber-400 hover:shadow-[0_0_25px_rgba(223,171,82,0.18)]"
                    >
                      {/* Top Badge & Match Percent */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full">
                            ✦ {p.category}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            {rec.compatibility}% Match
                          </span>
                        </div>

                        {/* Thumbnail */}
                        <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 mb-4">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <h4 className="font-serif text-base font-bold text-zinc-100 line-clamp-1">
                          {p.name}
                        </h4>

                        <div className="flex items-center gap-1 text-amber-400 text-xs mt-1">
                          <Star className="h-3 w-3 fill-current" />
                          <span className="font-semibold text-zinc-200">{p.rating || 4.9}</span>
                          <span className="text-zinc-500 text-[11px]">({p.reviewCount || 120}+ reviews)</span>
                        </div>

                        {/* Divine Reason */}
                        <div className="mt-3 rounded-xl border border-amber-500/15 bg-amber-500/5 p-3 text-[11px] text-zinc-300 leading-relaxed">
                          <span className="font-semibold text-amber-300 block mb-0.5 font-mono text-[10px] uppercase">
                            Why this is blessed for you:
                          </span>
                          {rec.reason}
                        </div>
                      </div>

                      {/* Bottom Price & Action */}
                      <div className="mt-5 pt-4 border-t border-zinc-800 space-y-3">
                        <div className="flex items-baseline justify-between">
                          <span className="text-xs text-zinc-500">Starting from</span>
                          <span className="font-serif text-lg font-bold text-amber-300 font-mono">
                            ₹{rec.price.toLocaleString("en-IN")}
                          </span>
                        </div>

                        <div className="grid gap-2">
                          <button
                            onClick={() => handleAddRec(p)}
                            className={`w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold uppercase tracking-wider transition-all font-mono cursor-pointer ${
                              isAdded
                                ? "bg-emerald-500/20 border border-emerald-400 text-emerald-300"
                                : "bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-zinc-950 shadow-md hover:brightness-110"
                            }`}
                          >
                            <ShoppingBag className="h-3.5 w-3.5" />
                            <span>{isAdded ? "✓ Added to Bag" : "Add to Sacred Bag"}</span>
                          </button>

                          <Link
                            href={`/products/${p.slug}`}
                            className="text-center text-[11px] text-zinc-400 hover:text-amber-300 underline underline-offset-4 transition"
                          >
                            View Full Consecration Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

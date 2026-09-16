"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  RotateCcw,
  ShoppingBag,
  ChevronRight,
  Star,
  CheckCircle2,
  Flame,
  ShieldCheck,
  Compass,
  Zap,
} from "lucide-react";
import { allProducts } from "@/data/products";
import { useCart } from "@/components/CartProvider";
import { playLuxuryHaptic } from "@/lib/audio";

// ==========================================
// 1. PRIMARY INTENTS (STEP 1)
// ==========================================
export interface IntentOption {
  id: "wealth" | "protection" | "peace" | "vitality" | "relationships" | "spiritual";
  emoji: string;
  title: string;
  subtitle: string;
  tagline: string;
  chakra: string;
  deity: string;
}

export const PRIMARY_INTENTS: IntentOption[] = [
  {
    id: "wealth",
    emoji: "💰",
    title: "Wealth & Prosperity",
    subtitle: "Business flow, career elevation, financial stability & Kuber grace",
    tagline: "Awaken Dhan & Lakshmi Energy",
    chakra: "Manipura & Anahata",
    deity: "Mahalakshmi & Lord Kuber",
  },
  {
    id: "protection",
    emoji: "🛡️",
    title: "Protection & Peace",
    subtitle: "Shield against evil eye (Nazar), psychic heaviness & Rahu/Ketu",
    tagline: "Impenetrable Energetic Shield",
    chakra: "Muladhara (Root Chakra)",
    deity: "Lord Bhairav & Goddess Durga",
  },
  {
    id: "peace",
    emoji: "🧘",
    title: "Mental Calm & Focus",
    subtitle: "Overcoming insomnia, anxiety, racing thoughts & deepening concentration",
    tagline: "Tranquil Mind & Emotional Balance",
    chakra: "Ajna (Third Eye) & Sahasrara",
    deity: "Lord Shiva & Chandra Deva",
  },
  {
    id: "vitality",
    emoji: "☀️",
    title: "Health, Energy & Power",
    subtitle: "Overcoming fatigue, building fearless confidence & solar leadership",
    tagline: "Radiant Pranic Fire & Stamina",
    chakra: "Manipura (Solar Plexus)",
    deity: "Surya Deva & Lord Hanuman",
  },
  {
    id: "relationships",
    emoji: "❤️",
    title: "Love & Harmony",
    subtitle: "Resolving marital friction, finding soulmate & creating family warmth",
    tagline: "Sacred Union & Heart Expansion",
    chakra: "Anahata (Heart Chakra)",
    deity: "Ardhanarishwara & Radha-Krishna",
  },
  {
    id: "spiritual",
    emoji: "🕉️",
    title: "Spiritual Sadhana",
    subtitle: "Mantra japa, Kashi Vishwanath blessing & higher consciousness",
    tagline: "Direct Connection to Supreme Consciousness",
    chakra: "Sahasrara (Crown Chakra)",
    deity: "Kashi Vishwanath & Mahadev",
  },
];

// ==========================================
// 2. DYNAMIC INTENTION-SPECIFIC CORE QUESTIONS (STEP 2)
// ==========================================
interface SubIntentOption {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  primarySlugs: string[];
  rationaleSnippet: string;
}

interface DynamicQuestionConfig {
  title: string;
  subtitle: string;
  options: SubIntentOption[];
}

export const DYNAMIC_INTENT_QUESTIONS: Record<string, DynamicQuestionConfig> = {
  wealth: {
    title: "Where in your financial life do you seek a divine turnaround?",
    subtitle: "Select the specific blockage or breakthrough you wish to address.",
    options: [
      {
        id: "business_cashflow",
        emoji: "📈",
        title: "Stagnant business cashflow & slow client conversion",
        subtitle: "Seeking rapid commercial flow, sharper business decisions, and continuous revenue.",
        primarySlugs: ["emerald-panna", "7-mukhi-rudraksha", "kamal-gatta-lotus-seed-mala-108-beads"],
        rationaleSnippet: "activates Budha (Mercury) for mercantile brilliance and Mahalakshmi's steady flow",
      },
      {
        id: "career_promotion",
        emoji: "👑",
        title: "Career promotion delays & lack of executive recognition",
        subtitle: "Hard work not translating into leadership roles, appraisals, or respect from seniors.",
        primarySlugs: ["ruby-manikya", "yellow-sapphire-pukhraj", "1-mukhi-rudraksha"],
        rationaleSnippet: "amplifies Surya & Guru prana to command authority and divine mentorship",
      },
      {
        id: "financial_leakage",
        emoji: "🏺",
        title: "Unpredictable losses & unable to retain accumulated savings",
        subtitle: "Money comes in but drains through sudden unexpected expenses and bad luck.",
        primarySlugs: ["kamal-gatta-lotus-seed-mala-108-beads", "7-mukhi-rudraksha", "original-karungali-mala-108-beads"],
        rationaleSnippet: "locks the Dhan-sthana (wealth house) against erratic drainage and attracts Kuber grace",
      },
      {
        id: "new_venture",
        emoji: "🚀",
        title: "Commencing a new business venture or high-stakes investment",
        subtitle: "Desiring auspicious timing, elimination of unforeseen hurdles, and immense growth.",
        primarySlugs: ["8-mukhi-rudraksha", "emerald-panna", "ganesh-pooja-kit"],
        rationaleSnippet: "invokes Lord Ganesha to annihilate all inaugural obstacles and ensure sustained victory",
      },
    ],
  },
  protection: {
    title: "What is the nature of the disturbance or negative influence?",
    subtitle: "Select the specific energy you need protection and shielding from.",
    options: [
      {
        id: "evil_eye",
        emoji: "🌑",
        title: "Severe evil eye (Buri Nazar), heavy aura & sudden setbacks",
        subtitle: "Feeling energetically drained, unexplainable heaviness, or sudden streak of bad luck.",
        primarySlugs: ["original-karungali-mala-108-beads", "9-mukhi-rudraksha", "hakik-mala-agate"],
        rationaleSnippet: "absorbs malefic environmental vibrations and creates an impenetrable protective kavach",
      },
      {
        id: "planetary_dosha",
        emoji: "🪐",
        title: "Rahu / Ketu turbulence or Shani Sade Sati phase",
        subtitle: "Astrological transit causing mental distress, fear of the unknown, and delayed outcomes.",
        primarySlugs: ["cats-eye-lahsunia", "hessonite-gomed", "blue-sapphire-neelam"],
        rationaleSnippet: "pacifies volatile shadow planets (Chhaya Grahas) and establishes karmic stability",
      },
      {
        id: "workplace_enemies",
        emoji: "⚔️",
        title: "Hidden jealousy, toxic workplace politics or legal hurdles",
        subtitle: "Dealing with hostile competition, malicious gossip, or unfair opposition.",
        primarySlugs: ["divine-vaijayanti-jaap-mala-108-beads", "9-mukhi-rudraksha", "durga-pooja-kit"],
        rationaleSnippet: "grants Vijay (victory) over deceitful adversaries through Goddess Durga's fierce grace",
      },
      {
        id: "home_unease",
        emoji: "🏠",
        title: "Restless home atmosphere, disturbed sleep & night fears",
        subtitle: "Negative energy lingering in living spaces or recurring uneasy nightmares.",
        primarySlugs: ["original-karungali-mala-108-beads", "mahamrityunjaya-jaap-kit", "sphatik-mala-108-beads"],
        rationaleSnippet: "purifies the Vastu and auric field with sanctified vibrational purity",
      },
    ],
  },
  peace: {
    title: "What is causing the greatest turbulence in your mind?",
    subtitle: "Pinpoint the mental or emotional pattern you wish to soothe.",
    options: [
      {
        id: "insomnia_overthinking",
        emoji: "🌙",
        title: "Racing bedtime thoughts, insomnia & fragmented sleep",
        subtitle: "Mind remains overly active at night, waking up unrefreshed and restless.",
        primarySlugs: ["pearl-moti", "sphatik-mala-108-beads", "natural-white-pearl-moti-mala-108-beads"],
        rationaleSnippet: "infuses cool lunar (Chandra) prana to pacify mental heat and trigger deep restorative sleep",
      },
      {
        id: "stress_burnout",
        emoji: "🌊",
        title: "Chronic work stress, anxiety spikes & nervous exhaustion",
        subtitle: "Feeling overwhelmed by life demands, tension in the chest, and mental exhaustion.",
        primarySlugs: ["pure-sandalwood-chandan-mala-108-beads", "5-mukhi-rudraksha-mala-7mm", "pearl-moti"],
        rationaleSnippet: "activates the parasympathetic nervous system with natural cooling botanical frequencies",
      },
      {
        id: "brain_fog",
        emoji: "🧠",
        title: "Lack of focus, memory scatter & mental fatigue",
        subtitle: "Inability to sustain deep concentration during complex work, studies, or decisions.",
        primarySlugs: ["4-mukhi-rudraksha", "emerald-panna", "sphatik-mala-108-beads"],
        rationaleSnippet: "awakens Lord Brahma's cognitive power and sharpens the intellect (Buddhi)",
      },
      {
        id: "emotional_grief",
        emoji: "🕊️",
        title: "Emotional volatility, lingering heartbreak & sorrow",
        subtitle: "Carrying past emotional baggage or feeling easily triggered and overwhelmed.",
        primarySlugs: ["2-mukhi-rudraksha", "tulsi-japa-mala-108-beads", "pearl-moti"],
        rationaleSnippet: "harmonizes the left and right hemispheres for profound emotional serenity",
      },
    ],
  },
  vitality: {
    title: "Where is your vital energy feeling restricted or depleted?",
    subtitle: "Identify the physical or pranic renewal you need most.",
    options: [
      {
        id: "chronic_fatigue",
        emoji: "⚡",
        title: "Low physical stamina, morning lethargy & dull prana",
        subtitle: "Struggling with physical endurance, sluggish metabolism, and low vital fire.",
        primarySlugs: ["red-coral-moonga", "3-mukhi-rudraksha", "natural-red-coral-moonga-mala-108-beads"],
        rationaleSnippet: "ignites Agni (metabolic fire) and vital blood circulation via Mangal resonance",
      },
      {
        id: "confidence_fear",
        emoji: "🦁",
        title: "Self-doubt, imposter syndrome & hesitation in speaking",
        subtitle: "Desiring commanding presence, fearlessness in public, and unshakable self-worth.",
        primarySlugs: ["ruby-manikya", "1-mukhi-rudraksha", "rosewood-mala-lal-chandan"],
        rationaleSnippet: "empowers the Solar Plexus (Manipura Chakra) with royal Surya radiance and self-mastery",
      },
      {
        id: "health_recovery",
        emoji: "🌿",
        title: "Recovery from illness & seeking long-term bodily wellness",
        subtitle: "Rebuilding immunity, revitalizing organs, and seeking longevity blessings.",
        primarySlugs: ["mahamrityunjaya-jaap-kit", "5-mukhi-rudraksha", "parad-mala"],
        rationaleSnippet: "invokes Lord Shiva's Mahamrityunjaya longevity nectar for physical restoration",
      },
      {
        id: "mangal_dosha",
        emoji: "🔥",
        title: "Excessive anger, high blood pressure & Manglik tension",
        subtitle: "Fiery temperament or astrological Manglik dosha causing tension in personal life.",
        primarySlugs: ["red-coral-moonga", "3-mukhi-rudraksha", "sphatik-mala-108-beads"],
        rationaleSnippet: "channels raw Martian intensity into constructive courage and balanced vitality",
      },
    ],
  },
  relationships: {
    title: "What relationship dynamic are you looking to heal or elevate?",
    subtitle: "Select the sacred bond you wish to nourish.",
    options: [
      {
        id: "marriage_delay",
        emoji: "💍",
        title: "Delays or obstacles in finding an aligned marriage partner",
        subtitle: "Seeking a spiritually and emotionally compatible life partner without delays.",
        primarySlugs: ["2-mukhi-rudraksha", "yellow-sapphire-pukhraj", "divine-vaijayanti-jaap-mala-108-beads"],
        rationaleSnippet: "activates Guru & Shukra auspiciousness to attract an honorable, harmonious union",
      },
      {
        id: "marital_harmony",
        emoji: "🕊️",
        title: "Marital misunderstandings, cold distance & frequent conflicts",
        subtitle: "Restoring intimacy, mutual respect, and emotional warmth between spouses.",
        primarySlugs: ["2-mukhi-rudraksha", "diamond-heera", "sphatik-mala-108-beads"],
        rationaleSnippet: "invokes Ardhanarishwara energy to fuse masculine and feminine polarities into unison",
      },
      {
        id: "magnetic_charm",
        emoji: "✨",
        title: "Magnetic personal attraction, graceful charm & social warmth",
        subtitle: "Desiring a pleasing personality, natural charisma, and positive rapport with others.",
        primarySlugs: ["divine-vaijayanti-jaap-mala-108-beads", "6-mukhi-rudraksha", "diamond-heera"],
        rationaleSnippet: "embodies Lord Krishna's divine charm (Aakarshan) and Shukra aesthetic grace",
      },
      {
        id: "family_peace",
        emoji: "🏡",
        title: "Resolving household discord & restoring family unity",
        subtitle: "Seeking collective peace, mutual respect among generations, and auspicious home aura.",
        primarySlugs: ["tulsi-japa-mala-108-beads", "2-mukhi-rudraksha", "satyanarayan-katha"],
        rationaleSnippet: "spreads Satvik calmness throughout the household and dissolves persistent strife",
      },
    ],
  },
  spiritual: {
    title: "What is your primary spiritual aspiration at this stage?",
    subtitle: "Select the path of consciousness you feel called towards.",
    options: [
      {
        id: "daily_japa",
        emoji: "📿",
        title: "Authentic energized mala for focused daily mantra chanting",
        subtitle: "Seeking high-vibration beads for Om Namah Shivaya, Gayatri, or Hare Krishna japa.",
        primarySlugs: ["5-mukhi-rudraksha-mala-7mm", "tulsi-japa-mala-108-beads", "big-size-rudraksha-jap-mala-12mm"],
        rationaleSnippet: "acts as a consecrated spiritual antenna that amplifies mantra resonance 100-fold",
      },
      {
        id: "third_eye",
        emoji: "👁️",
        title: "Deepening meditation & opening the Third Eye (Ajna Chakra)",
        subtitle: "Desiring thoughtless silence, intuitive downloads, and detachment from worldly stress.",
        primarySlugs: ["1-mukhi-rudraksha", "pure-sandalwood-chandan-mala-108-beads", "parad-mala"],
        rationaleSnippet: "channels the highest cosmic prana straight into the Sahasrara and Ajna chakras",
      },
      {
        id: "kashi_grace",
        emoji: "🔱",
        title: "Seeking direct holy blessings of Kashi Vishwanath & Ganga",
        subtitle: "Desiring a sacred token consecrated along holy Manikarnika and Dashashwamedh ghats.",
        primarySlugs: ["rudrabhishek-pooja-kit", "5-mukhi-rudraksha", "rudrabhishek-1-shastri"],
        rationaleSnippet: "infused with live Vedic vibrations directly from Kashi Vishwanath Sanctum Sanctorum",
      },
      {
        id: "karmic_cleansing",
        emoji: "🔥",
        title: "Dissolving heavy past karmic debts & spiritual liberation",
        subtitle: "Seeking inner rebirth, cleansing past negative samskaras, and divine surrender.",
        primarySlugs: ["parad-mala", "3-mukhi-rudraksha", "navratna-mala"],
        rationaleSnippet: "burns past karmic impurities in the sacred fire of Vedic consecration",
      },
    ],
  },
};

// ==========================================
// 3. RASHI (ZODIAC) WITH GRAHA & ELEMENT (STEP 3)
// ==========================================
export const RASHI_PROFILES = [
  { id: "mesh", name: "Mesh (Aries)", planet: "Mangal • Mars", element: "Agni (Fire)", ratnaSlug: "red-coral-moonga" },
  { id: "vrishabh", name: "Vrishabh (Taurus)", planet: "Shukra • Venus", element: "Prithvi (Earth)", ratnaSlug: "diamond-heera" },
  { id: "mithun", name: "Mithun (Gemini)", planet: "Budha • Mercury", element: "Vayu (Air)", ratnaSlug: "emerald-panna" },
  { id: "kark", name: "Kark (Cancer)", planet: "Chandra • Moon", element: "Jal (Water)", ratnaSlug: "pearl-moti" },
  { id: "simha", name: "Simha (Leo)", planet: "Surya • Sun", element: "Agni (Fire)", ratnaSlug: "ruby-manikya" },
  { id: "kanya", name: "Kanya (Virgo)", planet: "Budha • Mercury", element: "Prithvi (Earth)", ratnaSlug: "emerald-panna" },
  { id: "tula", name: "Tula (Libra)", planet: "Shukra • Venus", element: "Vayu (Air)", ratnaSlug: "diamond-heera" },
  { id: "vrishchik", name: "Vrishchik (Scorpio)", planet: "Mangal • Mars", element: "Jal (Water)", ratnaSlug: "red-coral-moonga" },
  { id: "dhanu", name: "Dhanu (Sagittarius)", planet: "Guru • Jupiter", element: "Agni (Fire)", ratnaSlug: "yellow-sapphire-pukhraj" },
  { id: "makar", name: "Makar (Capricorn)", planet: "Shani • Saturn", element: "Prithvi (Earth)", ratnaSlug: "blue-sapphire-neelam" },
  { id: "kumbh", name: "Kumbh (Aquarius)", planet: "Shani • Saturn", element: "Vayu (Air)", ratnaSlug: "blue-sapphire-neelam" },
  { id: "meen", name: "Meen (Pisces)", planet: "Guru • Jupiter", element: "Jal (Water)", ratnaSlug: "yellow-sapphire-pukhraj" },
  { id: "universal", name: "I don't know my Rashi", planet: "Universal Alignment", element: "Akash (Ether)", ratnaSlug: "emerald-panna" },
];

// ==========================================
// 4. SACRED FORM PREFERENCES (STEP 4)
// ==========================================
export const SACRED_FORMS = [
  {
    id: "mala",
    emoji: "📿",
    title: "Sacred 108-Bead Mala",
    subtitle: "Consecrated bead garland for wearing around neck and daily mantra japa",
  },
  {
    id: "rudraksha",
    emoji: "🕉️",
    title: "High-Vibration Nepalese Rudraksha",
    subtitle: "Authentic certified Mukhi bead with natural energized vibrations",
  },
  {
    id: "ratna",
    emoji: "💎",
    title: "Certified Astrological Gemstone",
    subtitle: "Earth-mined certified Jyotish Ratna for energized ring or pendant",
  },
  {
    id: "puja_kit",
    emoji: "🪔",
    title: "Complete Vedic Hawan / Puja Kit",
    subtitle: "Complete authentic samagri set for home sanctification and sacred rituals",
  },
  {
    id: "synergy",
    emoji: "✨",
    title: "Best Holistic Combination",
    subtitle: "Calculate the ideal pairing of sacred items based on my exact alignment",
  },
];

interface QuizAnswers {
  intent?: IntentOption["id"];
  subIntent?: string;
  rashi?: string;
  form?: string;
}

export default function SpiritualQuiz() {
  const { addItem, openCart } = useCart();
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleSelectOption = (key: keyof QuizAnswers, value: string) => {
    playLuxuryHaptic();
    setAnswers((prev) => ({ ...prev, [key]: value }));
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

  // Active Dynamic Question for Step 2
  const activeDynamicQuestion = useMemo(() => {
    if (!answers.intent) return DYNAMIC_INTENT_QUESTIONS.wealth;
    return DYNAMIC_INTENT_QUESTIONS[answers.intent] || DYNAMIC_INTENT_QUESTIONS.wealth;
  }, [answers.intent]);

  // Selected Intent Profile
  const selectedIntentObj = useMemo(() => {
    return PRIMARY_INTENTS.find((i) => i.id === answers.intent) || PRIMARY_INTENTS[0];
  }, [answers.intent]);

  // ==========================================
  // HIGH-PRECISION DYNAMIC RECOMMENDATION ENGINE
  // ==========================================
  const recommendations = useMemo(() => {
    if (step < 5) return [];

    const { intent, subIntent, rashi, form } = answers;
    const currentIntentConfig = DYNAMIC_INTENT_QUESTIONS[intent || "wealth"];
    const chosenSubIntent = currentIntentConfig?.options.find((o) => o.id === subIntent);

    const rashiProfile = RASHI_PROFILES.find((r) => r.id === rashi);
    const candidateSlugs: { slug: string; reason: string; compatibility: number }[] = [];

    // 1. PRIMARY SLUGS from the user's specific sub-intent
    if (chosenSubIntent) {
      chosenSubIntent.primarySlugs.forEach((slug, idx) => {
        const baseScore = idx === 0 ? 99 : idx === 1 ? 97 : 95;
        candidateSlugs.push({
          slug,
          reason: `Consecrated specifically for your focus on "${chosenSubIntent.title}". It ${chosenSubIntent.rationaleSnippet}, blessed with Kashi Vishwanath Vedic sankalp.`,
          compatibility: baseScore,
        });
      });
    }

    // 2. RASHI RATNA INCLUSION (If user selected a specific rashi and form matches)
    if (rashiProfile && rashiProfile.ratnaSlug && (form === "ratna" || form === "synergy")) {
      const existing = candidateSlugs.find((c) => c.slug === rashiProfile.ratnaSlug);
      if (!existing) {
        candidateSlugs.push({
          slug: rashiProfile.ratnaSlug,
          reason: `Directly aligned with your Rashi (${rashiProfile.name}) ruled by ${rashiProfile.planet}. Channels celestial ${rashiProfile.element} harmony into your aura.`,
          compatibility: 96,
        });
      }
    }

    // 3. SACRED FALLBACKS IF ANY SLUG IS MISSING
    if (candidateSlugs.length < 3) {
      const genericFallbacks = [
        {
          slug: "5-mukhi-rudraksha-mala-7mm",
          reason: "Universal sanctified japa mala from Kashi Vishwanath ghats, grounding mental tranquility and dissolving negative karma.",
          compatibility: 94,
        },
        {
          slug: "original-karungali-mala-108-beads",
          reason: "Potent black ebony wood blessed along Varanasi ghats to shield against evil eye and attract auspicious life flow.",
          compatibility: 93,
        },
      ];

      for (const fallback of genericFallbacks) {
        if (!candidateSlugs.some((c) => c.slug === fallback.slug)) {
          candidateSlugs.push(fallback);
          if (candidateSlugs.length >= 3) break;
        }
      }
    }

    // Map candidate slugs to actual products in catalog
    const results = candidateSlugs
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
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent px-4 py-1.5 text-xs font-mono uppercase tracking-[0.25em] text-amber-300 shadow-[0_0_20px_rgba(223,171,82,0.12)] mb-3">
            <Sparkles className="h-3.5 w-3.5 animate-spin-slow" />
            <span>Vedic Kundali & Intent Matcher</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-[#fff8eb] via-amber-200 to-zinc-200">
            Not Sure What&apos;s Right for You?
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Take a 1-minute sacred alignment quiz. Our intelligent Vedic engine branches specifically into your selected focus area and calculates the perfect consecrated match from holy Varanasi ghats.
          </p>

          {/* Progress Bar (Steps 1-4) */}
          {step <= 4 && (
            <div className="mt-6 max-w-md mx-auto">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
                <span>STEP {step} OF 4</span>
                <span className="text-amber-400 font-bold">{step * 25}% ALIGNED</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 transition-all duration-500"
                  style={{ width: `${step * 25}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* QUIZ MAIN CARD */}
        <div className="rounded-3xl border border-amber-500/25 bg-[#090c12]/95 p-5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          {/* ========================================== */}
          {/* STEP 1: PRIMARY INTENTION */}
          {/* ========================================== */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                  ✦ Step 1 of 4: Primary Sacred Intention
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-100">
                  What is pulling at your <em>mann</em> (mind & heart) right now?
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Select the primary energy or transformation you are seeking in your life.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {PRIMARY_INTENTS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption("intent", opt.id)}
                    className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-[#0d1017] via-[#080b10] to-[#05070a] p-4 sm:p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:bg-zinc-900/90 hover:shadow-[0_12px_28px_rgba(0,0,0,0.8),0_0_24px_rgba(223,171,82,0.18)] active:scale-[0.98] active:border-amber-400/60 touch-luxury-card cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/25 text-xl shadow-[0_0_12px_rgba(251,191,36,0.15)] group-hover:scale-110 group-hover:border-amber-400 transition-transform">
                          {opt.emoji}
                        </span>
                        <span className="text-[10px] font-mono text-amber-400/80 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                          {opt.deity}
                        </span>
                      </div>
                      <h4 className="font-serif text-base font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors leading-snug">
                        {opt.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                        {opt.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-zinc-800/80 pt-3 text-[11px] font-mono text-zinc-500 group-hover:text-amber-300">
                      <span>{opt.tagline}</span>
                      <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* STEP 2: DYNAMIC INTENTION-SPECIFIC CORE QUESTION */}
          {/* ========================================== */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">
                      ✦ Step 2 of 4: The Core Obstacle in {selectedIntentObj.title}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-100">
                    {activeDynamicQuestion.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {activeDynamicQuestion.subtitle}
                  </p>
                </div>
                <button
                  onClick={handleBack}
                  className="text-xs font-mono text-zinc-400 hover:text-amber-300 transition flex-shrink-0 ml-2"
                >
                  ← Back
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {activeDynamicQuestion.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption("subIntent", opt.id)}
                    className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-[#0d1017] via-[#080b10] to-[#05070a] p-4 sm:p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:bg-zinc-900/90 hover:shadow-[0_12px_28px_rgba(0,0,0,0.8),0_0_24px_rgba(223,171,82,0.18)] active:scale-[0.98] active:border-amber-400/60 touch-luxury-card cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/25 text-xl shadow-[0_0_12px_rgba(251,191,36,0.15)] group-hover:scale-110 group-hover:border-amber-400 transition-transform">
                          {opt.emoji}
                        </span>
                        <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h4 className="font-serif text-base font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors leading-snug">
                        {opt.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                        {opt.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* STEP 3: RASHI & PLANETARY RESONANCE */}
          {/* ========================================== */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                    ✦ Step 3 of 4: Astrological Rashi & Planetary Frequency
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-100">
                    What is your Rashi (Moon Sign) or Zodiac?
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Planetary frequencies tune the sacred wood, mukhi bead, and ratna resonance with your birth chart.
                  </p>
                </div>
                <button
                  onClick={handleBack}
                  className="text-xs font-mono text-zinc-400 hover:text-amber-300 transition flex-shrink-0 ml-2"
                >
                  ← Back
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
                {RASHI_PROFILES.map((rashi) => (
                  <button
                    key={rashi.id}
                    onClick={() => handleSelectOption("rashi", rashi.id)}
                    className="group rounded-xl border border-zinc-800/80 bg-gradient-to-b from-[#0d1017] to-[#05070a] p-3 text-left transition-all hover:border-amber-500/40 hover:bg-zinc-900/90 hover:shadow-[0_0_15px_rgba(223,171,82,0.15)] active:scale-[0.98] active:border-amber-400/60 touch-luxury-card cursor-pointer"
                  >
                    <span className="font-serif text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-amber-300 block leading-tight">
                      {rashi.name}
                    </span>
                    <span className="text-[10px] font-mono text-amber-400/90 block mt-1">
                      {rashi.planet}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 block mt-0.5">
                      {rashi.element}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* STEP 4: PREFERRED SACRED FORM */}
          {/* ========================================== */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                    ✦ Step 4 of 4: Preferred Sacred Form
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-100">
                    How would you like to receive or wear this sacred blessing?
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Choose the sacred medium that naturally fits your daily lifestyle.
                  </p>
                </div>
                <button
                  onClick={handleBack}
                  className="text-xs font-mono text-zinc-400 hover:text-amber-300 transition flex-shrink-0 ml-2"
                >
                  ← Back
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {SACRED_FORMS.map((form) => (
                  <button
                    key={form.id}
                    onClick={() => handleSelectOption("form", form.id)}
                    className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-[#0d1017] via-[#080b10] to-[#05070a] p-4 sm:p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:bg-zinc-900/90 hover:shadow-[0_12px_28px_rgba(0,0,0,0.8),0_0_24px_rgba(223,171,82,0.18)] active:scale-[0.98] active:border-amber-400/60 touch-luxury-card cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/25 text-xl shadow-[0_0_12px_rgba(251,191,36,0.15)] group-hover:scale-110 group-hover:border-amber-400 transition-transform">
                          {form.emoji}
                        </span>
                        <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h4 className="font-serif text-base font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors leading-snug">
                        {form.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                        {form.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* STEP 5: SACRED RECOMMENDATIONS REVEAL */}
          {/* ========================================== */}
          {step >= 5 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-500/20 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                      ✓
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                      Vedic Resonance Calculated
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100 mt-1">
                    Your Personalized Sacred Matches
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Specifically consecrated at Varanasi ghats for your focus on{" "}
                    <strong className="text-amber-300 font-serif">
                      {selectedIntentObj.title}
                    </strong>
                    .
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
                          <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-bold">
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

                        {/* Deep Research-Based Divine Rationale */}
                        <div className="mt-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-[11px] text-zinc-300 leading-relaxed">
                          <span className="font-semibold text-amber-300 block mb-1 font-mono text-[10px] uppercase tracking-wider">
                            ✦ Why this is blessed for you:
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

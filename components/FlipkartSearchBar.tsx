"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, Sparkles, Flame, Tag, ArrowRight } from "lucide-react";
import { allProducts, kashiPoojaServices } from "@/data/products";
import { useCurrency } from "@/components/CurrencyProvider";
import { playLuxuryHaptic } from "@/lib/audio";

const TRENDING_SEARCHES = [
  "5 Mukhi Rudraksha",
  "Karungali Mala",
  "Ruby Manikya",
  "Panna Emerald",
  "Sphatik Mala",
  "1 Mukhi Rudraksha",
  "Satyanarayan Puja Kit",
  "Rudrabhishek Puja",
];

const SEARCH_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "mala", label: "Malas" },
  { id: "rudraksha", label: "Rudraksha" },
  { id: "ratnas", label: "Ratnas" },
  { id: "puja-kits", label: "Puja Kits" },
  { id: "services", label: "Services" },
];

const SYNONYMS: Record<string, string[]> = {
  ruby: ["manikya", "manik", "surya", "sun", "rubi", "rubby", "rooby", "red gemstone"],
  manikya: ["ruby", "manik", "surya", "sun", "manikya", "manikyam"],
  emerald: ["panna", "budh", "mercury", "emrald", "emraled", "green gemstone"],
  panna: ["emerald", "panna", "budh", "mercury", "green"],
  pearl: ["moti", "chandra", "moon", "perl", "motiya", "safed"],
  moti: ["pearl", "moti", "chandra", "moon"],
  sapphire: ["neelam", "pukhraj", "shani", "guru", "safire", "blue sapphire", "yellow sapphire"],
  neelam: ["blue sapphire", "shani", "saturn", "nelam", "nilam", "sapphire"],
  pukhraj: ["yellow sapphire", "guru", "jupiter", "pukraj", "peela", "sapphire"],
  diamond: ["heera", "shukra", "venus", "dimond", "hira"],
  heera: ["diamond", "heera", "hira", "shukra"],
  coral: ["moonga", "mangal", "mars", "koral", "munga"],
  moonga: ["red coral", "coral", "mangal", "mars", "munga"],
  hessonite: ["gomed", "rahu", "gomedh", "gomedak"],
  gomed: ["hessonite", "rahu", "gomedh", "gomedak"],
  catseye: ["lahsunia", "ketu", "lehsuniya", "lasunia", "cats eye", "cat eye"],
  lahsunia: ["cats eye", "cat eye", "ketu", "lehsuniya", "lasunia"],
  rudraksha: ["rudraksh", "rudraksa", "rudraksham", "rudraskha", "shiva", "shiv", "bholenath", "adiyogi", "mahadev", "mukhi", "bead", "beads"],
  rudraksh: ["rudraksha", "rudraksham", "shiva", "mukhi", "bead"],
  karungali: ["karungali", "ebony", "black wood", "karungali mala", "karunkali", "karungli", "murugan"],
  sphatik: ["spatik", "sfatik", "quartz", "crystal", "sphatik mala", "shiva"],
  tulsi: ["tulsi mala", "radha", "krishna", "iskcon", "tulasi"],
  sandalwood: ["chandan", "sandlewood", "white sandalwood", "red sandalwood", "rakt chandan"],
  chandan: ["sandalwood", "chandan mala", "red sandalwood", "white sandalwood"],
  puja: ["pooja", "kit", "samagri", "hawan", "havan", "yagya", "shanti"],
  pooja: ["puja", "kit", "samagri", "hawan", "havan"],
  rudrabhishek: ["rudra abhishek", "abhishek", "shiva puja", "kashi vishwanath", "rudrabhisheka"],
  aarti: ["arti", "ganga aarti", "mangala", "sandhya"],
};

function levenshteinDistance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function matchesFuzzyOrTypo(queryWord: string, targetText: string): boolean {
  if (!queryWord || !targetText) return false;
  const targetLower = targetText.toLowerCase();

  if (targetLower.includes(queryWord)) return true;

  for (const [key, synonyms] of Object.entries(SYNONYMS)) {
    if (queryWord.includes(key) || key.includes(queryWord) || synonyms.some((s) => s.includes(queryWord) || queryWord.includes(s))) {
      if (targetLower.includes(key) || synonyms.some((s) => targetLower.includes(s))) {
        return true;
      }
    }
  }

  const targetTokens = targetLower.split(/[\s\-•,/()]+/);
  for (const token of targetTokens) {
    if (token.length < 3) continue;
    if (token.includes(queryWord) || queryWord.includes(token)) return true;
    const maxDist = queryWord.length <= 4 ? 1 : 2;
    if (Math.abs(token.length - queryWord.length) <= maxDist) {
      if (levenshteinDistance(queryWord, token) <= maxDist) {
        return true;
      }
    }
  }

  return false;
}

export default function FlipkartSearchBar({
  placeholder = "Search Malas, Nepali Rudraksha, Ratnas, Puja Kits...",
  className = "",
}: {
  placeholder?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { formatPrice } = useCurrency();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();

    // Map service items
    const serviceItems = kashiPoojaServices.map((svc) => ({
      id: svc.id,
      name: svc.name,
      subtitle: svc.tagline || svc.category,
      category: "services",
      slug: `services/${svc.slug}`,
      image: "/assets/puja-services/rudrabhishek.png",
      price: svc.price,
      isService: true,
      searchCorpus: `${svc.name} ${svc.tagline || ""} ${svc.category} ${svc.description || ""} ${svc.includes?.join(" ") || ""}`.toLowerCase(),
    }));

    // Map products
    const productItems = allProducts.map((p) => {
      const minPrice = p.variants?.length
        ? Math.min(...p.variants.map((v) => v.price))
        : p.price || 0;
      const catKey = p.category.toLowerCase().includes("mala")
        ? "mala"
        : p.category.toLowerCase().includes("rudraksha")
        ? "rudraksha"
        : p.category.toLowerCase().includes("ratna") || p.category.toLowerCase().includes("gemstone")
        ? "ratnas"
        : "puja-kits";

      return {
        id: p.id,
        name: p.name,
        subtitle: p.tagline || p.shortDescription || p.category,
        category: catKey,
        slug: `products/${p.slug}`,
        image: p.image,
        price: minPrice,
        isService: false,
        searchCorpus: `${p.name} ${p.tagline || ""} ${p.shortDescription || ""} ${p.category} ${p.subCategory || ""} ${p.tags?.join(" ") || ""} ${p.slug}`.toLowerCase(),
      };
    });

    const combined = [...productItems, ...serviceItems];

    if (!q) {
      if (selectedCategory === "all") return [];
      return combined.filter((item) => item.category === selectedCategory);
    }

    const queryWords = q.split(/\s+/).filter(Boolean);

    const scored = combined
      .map((item) => {
        let score = 0;
        if (item.name.toLowerCase().includes(q)) score += 100;
        if (item.searchCorpus.includes(q)) score += 50;

        let allWordsMatched = true;
        for (const word of queryWords) {
          if (matchesFuzzyOrTypo(word, item.searchCorpus)) {
            score += 30;
          } else {
            allWordsMatched = false;
          }
        }

        if (allWordsMatched && queryWords.length > 1) {
          score += 40;
        }

        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        if (matchesCategory) {
          score += 15;
        }

        return { item, score, matchesCategory };
      })
      .filter((res) => res.score > 0);

    if (selectedCategory !== "all") {
      const inCategory = scored.filter((res) => res.matchesCategory);
      if (inCategory.length > 0) {
        return inCategory.sort((a, b) => b.score - a.score).map((r) => r.item);
      }
    }

    return scored.sort((a, b) => b.score - a.score).map((r) => r.item);
  }, [query, selectedCategory]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Flipkart-Style Search Input Bar */}
      <div
        className={`relative flex items-center w-full rounded-xl border transition-all duration-300 ${
          isOpen
            ? "border-amber-400 bg-[#080c14] shadow-[0_0_20px_rgba(223,171,82,0.3)] ring-1 ring-amber-400/40"
            : "border-amber-500/30 bg-[#0a0d14]/90 hover:border-amber-500/50 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-center pl-3 pr-2 text-amber-400 shrink-0">
          <Search className="h-4 w-4" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => {
            setIsOpen(true);
            playLuxuryHaptic();
          }}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          placeholder={placeholder}
          className="w-full bg-transparent py-2 sm:py-2.5 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none font-sans"
        />

        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="p-2 text-zinc-400 hover:text-zinc-200"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        ) : (
          <div className="pr-3 hidden sm:flex items-center">
            <kbd className="rounded border border-zinc-700 bg-zinc-800/80 px-1.5 py-0.5 text-[9px] font-mono text-zinc-400">
              ⌘K
            </kbd>
          </div>
        )}
      </div>

      {/* Floating Suggestions Flyout (Hover / Dropdown Style, Not Full Screen) */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-2xl border border-amber-500/30 bg-[#070a10]/98 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(223,171,82,0.15)] overflow-hidden max-h-[70vh] sm:max-h-[420px] overflow-y-auto animate-fadeIn">
          {/* Quick Category Filters */}
          <div className="flex items-center gap-1.5 border-b border-zinc-800/80 bg-zinc-950/80 px-3 py-2 overflow-x-auto [scrollbar-width:none]">
            {SEARCH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 rounded-lg px-2.5 py-1 text-[11px] font-medium transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-amber-400 text-zinc-950 font-bold shadow-[0_0_8px_rgba(223,171,82,0.5)]"
                    : "border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:text-amber-200 hover:border-amber-500/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="p-3 sm:p-4 space-y-3">
            {/* Empty State: Trending Suggestions */}
            {!query && (
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-amber-400/90 mb-2.5">
                  <Flame className="h-3.5 w-3.5 text-amber-400" />
                  <span>Trending Sacred Searches</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {TRENDING_SEARCHES.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => {
                        setQuery(term);
                        setSelectedCategory("all");
                        inputRef.current?.focus();
                      }}
                      className="inline-flex items-center gap-1 rounded-lg border border-amber-500/20 bg-zinc-900/70 px-2.5 py-1 text-xs text-zinc-300 hover:border-amber-400 hover:text-amber-200 hover:bg-zinc-800/90 transition cursor-pointer"
                    >
                      <Sparkles className="h-3 w-3 text-amber-400" />
                      <span>{term}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results State */}
            {query && (
              <div>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2 font-mono">
                  <span>Results for &ldquo;{query}&rdquo;</span>
                  <span className="text-amber-400 font-bold">{searchResults.length} found</span>
                </div>

                {searchResults.length === 0 ? (
                  <div className="py-6 text-center">
                    <p className="font-serif text-sm text-zinc-300">No matching sacred items found</p>
                    <p className="text-[11px] text-zinc-500 mt-1">
                      Try &ldquo;Mala&rdquo;, &ldquo;Rudraksha&rdquo;, &ldquo;Ruby&rdquo;, &ldquo;Puja&rdquo;
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    {searchResults.slice(0, 8).map((item) => (
                      <Link
                        key={item.id}
                        href={`/${item.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between gap-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-2 hover:border-amber-500/50 hover:bg-zinc-900/90 transition"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-amber-500/20 bg-zinc-950">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="40px"
                              className="object-contain p-0.5 group-hover:scale-110 transition-transform"
                            />
                          </div>

                          <div className="min-w-0">
                            <h4 className="font-serif text-xs font-bold text-zinc-100 group-hover:text-amber-200 truncate">
                              {item.name}
                            </h4>
                            <p className="text-[10px] text-zinc-400 truncate">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {item.price > 0 && (
                            <span className="text-xs font-bold text-amber-300 font-mono">
                              {formatPrice(item.price)}
                            </span>
                          )}
                          <ArrowRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

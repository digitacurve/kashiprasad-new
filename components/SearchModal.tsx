"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, Sparkles, Flame, Tag } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { allProducts, kashiPoojaServices } from "@/data/products";

const TRENDING_SEARCHES = [
  "Karungali Mala",
  "1 Mukhi Rudraksha",
  "Ruby Manikya",
  "Panna Emerald",
  "Sphatik Mala",
  "5 Mukhi Rudraksha",
  "Satyanarayan Puja Kit",
  "Rudrabhishek",
];

const CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "mala", label: "Malas" },
  { id: "rudraksha", label: "Rudraksha" },
  { id: "ratnas", label: "Ratnas" },
  { id: "puja-kits", label: "Puja Kits" },
  { id: "services", label: "Puja Services" },
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
  
  // Exact substring
  if (targetLower.includes(queryWord)) return true;

  // Synonyms check
  for (const [key, synonyms] of Object.entries(SYNONYMS)) {
    if (queryWord.includes(key) || key.includes(queryWord) || synonyms.some(s => s.includes(queryWord) || queryWord.includes(s))) {
      if (targetLower.includes(key) || synonyms.some(s => targetLower.includes(s))) {
        return true;
      }
    }
  }

  // Token fuzzy check (Levenshtein)
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

export default function SearchModal() {
  const { isSearchOpen, openSearch, closeSearch } = useCart();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setSelectedCategory("all");
    }
  }, [isSearchOpen]);

  // Global Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isSearchOpen) {
          closeSearch();
        } else {
          openSearch();
        }
      }
      if (e.key === "Escape" && isSearchOpen) {
        closeSearch();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, openSearch, closeSearch]);

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

    // Score and filter each item
    const scored = combined
      .map((item) => {
        let score = 0;

        // 1. Direct whole-query match
        if (item.name.toLowerCase().includes(q)) score += 100;
        if (item.searchCorpus.includes(q)) score += 50;

        // 2. Word-by-word fuzzy match
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

        // Category matching bonus
        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        if (matchesCategory) {
          score += 15;
        }

        return { item, score, matchesCategory };
      })
      .filter((res) => res.score > 0);

    // If user selected a category, first check if we have results in that category
    if (selectedCategory !== "all") {
      const inCategory = scored.filter((res) => res.matchesCategory);
      if (inCategory.length > 0) {
        return inCategory.sort((a, b) => b.score - a.score).map((r) => r.item);
      }
      // Auto-fallback: if 0 results in selected category, show all matches so user never gets stuck!
    }

    return scored.sort((a, b) => b.score - a.score).map((r) => r.item);
  }, [query, selectedCategory]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeSearch}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      <div className="relative min-h-screen px-4 pt-16 pb-20 sm:px-6 md:px-8 flex justify-center items-start">
        <div className="relative w-full max-w-2xl transform rounded-2xl border border-amber-500/25 bg-[#090c12] shadow-2xl transition-all overflow-hidden">
          {/* Top Search Input Bar */}
          <div className="relative flex items-center border-b border-amber-500/20 bg-[#0c0f17] px-4 py-3 sm:px-5">
            <Search className="h-5 w-5 text-amber-400 shrink-0 mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Malas, Rudrakshas, Gemstones, Puja Kits..."
              className="w-full bg-transparent text-sm sm:text-base text-zinc-100 placeholder-zinc-500 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="mr-2 text-zinc-500 hover:text-zinc-300"
                aria-label="Clear query"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={closeSearch}
              className="rounded-lg border border-zinc-800 bg-zinc-900 px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-zinc-400 hover:text-zinc-200"
            >
              ESC
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto border-b border-zinc-800/80 bg-zinc-950/60 px-4 py-2.5 [scrollbar-width:none]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-amber-400 text-zinc-950 font-semibold shadow-[0_0_10px_rgba(223,171,82,0.4)]"
                    : "border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Body Content */}
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
            {/* When Query is Empty -> Show Trending Suggestions */}
            {!query && (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-3">
                  <Flame className="h-3.5 w-3.5 text-amber-400" />
                  <span>Popular Sacred Searches</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {TRENDING_SEARCHES.map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setQuery(term);
                        setSelectedCategory("all");
                      }}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-amber-500/15 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-300 hover:border-amber-500/40 hover:text-amber-200 transition cursor-pointer"
                    >
                      <Sparkles className="h-3 w-3 text-amber-400/80" />
                      <span>{term}</span>
                    </button>
                  ))}
                </div>

                <div className="rounded-xl border border-amber-500/15 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-4">
                  <p className="font-serif text-sm text-amber-200 font-medium">
                    Kashi Vishwanath Sacred Authenticity
                  </p>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    All Rudrakshas, Gemstones, and Puja items are directly sourced, certified with lab test reports, and energized along the sacred banks of Mother Ganga in Kashi.
                  </p>
                </div>
              </div>
            )}

            {/* When Searching -> Results */}
            {query && (
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3 font-mono">
                  <span>
                    Results for &ldquo;{query}&rdquo;
                    {selectedCategory !== "all" && (
                      <button
                        onClick={() => setSelectedCategory("all")}
                        className="ml-2 text-amber-400 hover:underline inline-block cursor-pointer font-sans"
                      >
                        (Show all categories)
                      </button>
                    )}
                  </span>
                  <span>{searchResults.length} found</span>
                </div>

                {searchResults.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="font-serif text-base text-zinc-300">
                      No matching sacred items found
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      Try searching with broader terms like &ldquo;Mala&rdquo;, &ldquo;Rudraksha&rdquo;, &ldquo;Ruby&rdquo;, or &ldquo;Puja&rdquo;.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {searchResults.map((item) => (
                      <Link
                        key={item.id}
                        href={`/${item.slug}`}
                        onClick={closeSearch}
                        className="group flex items-center justify-between gap-3.5 rounded-xl border border-amber-500/15 bg-zinc-900/50 p-3 transition hover:border-amber-500/40 hover:bg-zinc-900/90"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-amber-500/20 bg-zinc-950">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="56px"
                              className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-serif text-sm font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors truncate">
                              {item.name}
                            </h4>
                            <p className="text-xs text-zinc-400 truncate mt-0.5">
                              {item.subtitle}
                            </p>
                            <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-mono uppercase tracking-wider text-amber-400/80 bg-amber-500/10 px-1.5 py-0.5 rounded">
                              <Tag className="h-2.5 w-2.5" />
                              {item.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          {item.price > 0 && (
                            <div className="text-right">
                              <span className="text-xs text-zinc-500 block">From</span>
                              <span className="text-sm font-bold text-amber-300 font-mono">
                                ₹{item.price.toLocaleString("en-IN")}
                              </span>
                            </div>
                          )}
                          <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

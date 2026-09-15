"use client";

import React, { useState, useMemo } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import ProductCard from "./ProductCard";
import { Product } from "@/data/types";
import { Filter, SlidersHorizontal, ArrowUpDown, X, Search, Sparkles, Check } from "lucide-react";

export type CollectionProduct = Product;

interface CollectionPageProps {
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
  emptyMessage?: string;
  subcategories?: string[];
}

type PriceFilter = "all" | "under-2000" | "2000-5000" | "5000-10000" | "above-10000";
type PurposeFilter = "all" | "shiva" | "wealth" | "protection" | "health";
type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

export default function CollectionPage({
  eyebrow,
  title,
  description,
  products,
  emptyMessage,
  subcategories,
}: CollectionPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [purposeFilter, setPurposeFilter] = useState<PurposeFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedSubcategory !== "all") count++;
    if (priceFilter !== "all") count++;
    if (purposeFilter !== "all") count++;
    if (searchQuery.trim()) count++;
    return count;
  }, [selectedSubcategory, priceFilter, purposeFilter, searchQuery]);

  const handleResetFilters = () => {
    setSelectedSubcategory("all");
    setPriceFilter("all");
    setPurposeFilter("all");
    setSearchQuery("");
    setSortBy("featured");
  };

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const productPrice = product.price ?? product.variants[0]?.price ?? 0;
        const descriptionText = [
          product.shortDescription || "",
          product.tagline || "",
          ...(product.detailedOverview || []),
          ...(product.tags || []),
        ].join(" ");

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesName = product.name.toLowerCase().includes(q);
          const matchesDesc = descriptionText.toLowerCase().includes(q);
          const matchesCat = (product.category || "").toLowerCase().includes(q);
          if (!matchesName && !matchesDesc && !matchesCat) return false;
        }

        // Subcategory filter
        if (selectedSubcategory !== "all") {
          const inName = product.name.toLowerCase().includes(selectedSubcategory.toLowerCase());
          const inDesc = descriptionText.toLowerCase().includes(selectedSubcategory.toLowerCase());
          if (!inName && !inDesc) return false;
        }

        // Price filter
        if (priceFilter === "under-2000" && productPrice >= 2000) return false;
        if (priceFilter === "2000-5000" && (productPrice < 2000 || productPrice > 5000)) return false;
        if (priceFilter === "5000-10000" && (productPrice < 5000 || productPrice > 10000)) return false;
        if (priceFilter === "above-10000" && productPrice <= 10000) return false;

        // Spiritual purpose filter
        if (purposeFilter !== "all") {
          const text = `${product.name} ${descriptionText}`.toLowerCase();
          if (purposeFilter === "shiva" && !text.includes("shiva") && !text.includes("rudra") && !text.includes("mahadev") && !text.includes("japa")) return false;
          if (purposeFilter === "wealth" && !text.includes("lakshmi") && !text.includes("wealth") && !text.includes("prosperity") && !text.includes("kuber") && !text.includes("gold")) return false;
          if (purposeFilter === "protection" && !text.includes("protect") && !text.includes("evil") && !text.includes("graha") && !text.includes("karungali") && !text.includes("shani") && !text.includes("rahu")) return false;
          if (purposeFilter === "health" && !text.includes("health") && !text.includes("heal") && !text.includes("energy") && !text.includes("peace") && !text.includes("sphatik") && !text.includes("tulsi")) return false;
        }

        return true;
      })
      .sort((a, b) => {
        const priceA = a.price ?? a.variants[0]?.price ?? 0;
        const priceB = b.price ?? b.variants[0]?.price ?? 0;
        if (sortBy === "price-asc") return priceA - priceB;
        if (sortBy === "price-desc") return priceB - priceA;
        if (sortBy === "rating") return (b.rating || 4.9) - (a.rating || 4.9);
        return 0; // default featured
      });
  }, [products, searchQuery, selectedSubcategory, priceFilter, purposeFilter, sortBy]);

  return (
    <div className="min-h-screen bg-[#06080c] text-zinc-100">
      <SiteHeader />
      <main>
        {/* Collection Header */}
        <section className="relative overflow-hidden border-b border-amber-500/10 px-4 py-12 text-center sm:px-8 sm:py-16 bg-gradient-to-b from-amber-500/[0.04] to-transparent">
          <p className="text-xs font-mono uppercase tracking-[.22em] text-amber-400">{eyebrow}</p>
          <h1 className="mt-3 font-serif text-3xl font-bold uppercase sm:text-5xl lg:text-6xl text-amber-100 drop-shadow-[0_4px_20px_rgba(223,171,82,0.15)]">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-400">
            {description}
          </p>

          {/* Subcategory Pills */}
          {subcategories && subcategories.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedSubcategory("all")}
                className={`rounded-full px-3.5 py-1 text-xs font-mono uppercase transition cursor-pointer ${
                  selectedSubcategory === "all"
                    ? "border border-amber-400 bg-amber-400 text-zinc-950 font-bold shadow-[0_0_12px_rgba(223,171,82,0.4)]"
                    : "border border-amber-500/20 bg-amber-500/5 text-amber-300 hover:border-amber-400/60"
                }`}
              >
                All {title}
              </button>
              {subcategories.map((item) => {
                const isSelected = selectedSubcategory === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedSubcategory(isSelected ? "all" : item)}
                    className={`rounded-full px-3.5 py-1 text-xs font-mono uppercase transition cursor-pointer ${
                      isSelected
                        ? "border border-amber-400 bg-amber-400 text-zinc-950 font-bold shadow-[0_0_12px_rgba(223,171,82,0.4)]"
                        : "border border-amber-500/20 bg-amber-500/5 text-amber-300 hover:border-amber-400/60"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          )}
        </section>

        {/* Filter & Sorting Controls Bar */}
        <section className="sticky top-[57px] z-30 border-b border-zinc-800 bg-[#06080c]/90 backdrop-blur-md px-4 py-3 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
            {/* Left: Quick In-category Search & Count */}
            <div className="flex flex-1 items-center gap-3 min-w-[200px] max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search within ${title}...`}
                  className="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-full pl-9 pr-8 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Middle & Right: Filter Pills & Sorting */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Spiritual Purpose Filter (Desktop) */}
              <select
                aria-label="Filter by spiritual purpose"
                value={purposeFilter}
                onChange={(e) => setPurposeFilter(e.target.value as PurposeFilter)}
                className="hidden md:block bg-zinc-900 border border-zinc-700 rounded-full px-3.5 py-1.5 text-xs text-zinc-200 focus:border-amber-400 focus:outline-none cursor-pointer"
              >
                <option value="all">✦ All Divine Purposes</option>
                <option value="shiva">🕉️ Shiva Bhakti & Japa</option>
                <option value="wealth">💰 Wealth & Lakshmi</option>
                <option value="protection">🛡️ Protection & Graha Shanti</option>
                <option value="health">🌿 Health & Peace</option>
              </select>

              {/* Price Filter (Desktop) */}
              <select
                aria-label="Filter by price range"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as PriceFilter)}
                className="hidden sm:block bg-zinc-900 border border-zinc-700 rounded-full px-3.5 py-1.5 text-xs text-zinc-200 focus:border-amber-400 focus:outline-none cursor-pointer"
              >
                <option value="all">All Prices</option>
                <option value="under-2000">Under ₹2,000</option>
                <option value="2000-5000">₹2,000 – ₹5,000</option>
                <option value="5000-10000">₹5,000 – ₹10,000</option>
                <option value="above-10000">Above ₹10,000</option>
              </select>

              {/* Sort By Dropdown */}
              <select
                aria-label="Sort products"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-zinc-900 border border-amber-500/30 rounded-full px-3.5 py-1.5 text-xs text-amber-200 font-semibold focus:border-amber-400 focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Customer Rated</option>
              </select>

              {/* Reset Filter Button */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  type="button"
                  className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-mono underline underline-offset-2 transition cursor-pointer px-2"
                >
                  <X className="h-3 w-3" />
                  <span>Reset ({activeFiltersCount})</span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Product Count Status */}
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-8 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span>Showing {filteredProducts.length} Sacred Items</span>
          {activeFiltersCount > 0 && (
            <span className="text-amber-300/80">
              Filters Applied: {activeFiltersCount}
            </span>
          )}
        </div>

        {/* Product Catalogue Grid (5-column desktop, 3-4 tablet, 2 mobile) */}
        <section className="mx-auto max-w-7xl px-3.5 py-6 sm:px-6 lg:px-8 sm:py-10">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/40 p-12 text-center">
              <Sparkles className="mx-auto h-8 w-8 text-amber-400/60 animate-pulse mb-3" />
              <h3 className="font-serif text-lg font-bold text-amber-200">No items match your filter</h3>
              <p className="mt-2 text-sm text-zinc-400 max-w-md mx-auto">
                {emptyMessage ?? "Try adjusting your price range or search terms to view all consecrated adornments."}
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-5 py-2 text-xs font-bold uppercase text-zinc-950 hover:bg-amber-300 transition cursor-pointer font-mono"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

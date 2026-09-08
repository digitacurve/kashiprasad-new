"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/components/CartProvider";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addItem } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    product.variants[0]?.id || ""
  );

  const imagesList =
    (product as { images?: string[] }).images &&
    (product as { images?: string[] }).images!.length > 0
      ? (product as { images?: string[] }).images!
      : product.image
      ? [product.image]
      : [];

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const activeImage = imagesList[activeImageIndex] || product.image;

  const isMala = product.category === "Mala";
  const defaultTab = isMala ? "specs" : "samagri";
  const [activeTab, setActiveTab] = useState<"overview" | "samagri" | "specs" | "highlights" | "faqs">(defaultTab);

  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  const addSelectedItem = () => {
    if (!selectedVariant) return;
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image,
      variantId: selectedVariant.id,
      variantName: selectedVariant.name,
      price: selectedVariant.price,
      divineOffering: Boolean((selectedVariant as { divineOfferingOption?: string }).divineOfferingOption?.toLowerCase().includes("with divine")),
    });
  };

  const totalSamagriItems =
    selectedVariant?.samagriChecklist?.reduce(
      (acc, cat) => acc + cat.items.length,
      0
    ) || 0;

  const categoryHref = isMala ? "/#mala" : "/#puja-kits";
  const categoryLabel = isMala ? "Mala" : "Puja Kits";

  return (
    <div className="min-h-screen bg-[#06080c] text-[#f5f5f7]">
      {/* Top Breadcrumb & Navbar */}
      <header className="sticky top-0 z-50 bg-[#06080c]/90 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-10 lg:px-16 py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-zinc-400">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={categoryHref} className="hover:text-amber-300 transition-colors">
              {categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-zinc-200 font-medium truncate max-w-[150px] sm:max-w-none">
              {product.name}
            </span>
          </div>

          <Link
            href={categoryHref}
            className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5"
          >
            <span>←</span>
            <span>Back to {categoryLabel}</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Product Visuals Gallery & Trust Highlights (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="sticky top-24 space-y-4 sm:space-y-6">
              {/* Main Product Visual Box */}
              <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 sm:p-6 border border-zinc-800/90 shadow-2xl flex items-center justify-center overflow-hidden">
                <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full z-10 shadow-md">
                  {selectedVariant?.badge || product.badge}
                </span>

                {activeImage ? (
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-xl transition-all duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-amber-500/20 bg-amber-500/5 flex items-center justify-center text-center mb-4">
                      <span className="text-3xl sm:text-4xl text-amber-400/60 font-serif">
                        🕉️
                      </span>
                    </div>
                    <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                      Sacred Offering
                    </span>
                    <span className="text-[11px] font-mono text-amber-400/60 mt-1">
                      Varanasi Consecrated
                    </span>
                  </div>
                )}
              </div>

              {/* Multiple Images Thumbnail Strip */}
              {imagesList.length > 1 && (
                <div className="flex items-center gap-3">
                  {imagesList.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl p-1.5 bg-zinc-950 border transition-all overflow-hidden ${
                        activeImageIndex === idx
                          ? "border-amber-400 shadow-[0_0_12px_rgba(223,171,82,0.4)] scale-105"
                          : "border-zinc-800 hover:border-zinc-600 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Callout Cards */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 sm:p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                  <span className="text-amber-400 text-base block mb-1">🕉️</span>
                  <span className="font-serif font-semibold text-zinc-200 block">
                    Varanasi Consecrated
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-zinc-400 leading-snug block mt-0.5">
                    Sanctified with holy Ganga jal & Vedic mantras.
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                  <span className="text-amber-400 text-base block mb-1">✨</span>
                  <span className="font-serif font-semibold text-zinc-200 block">
                    100% Genuine Origin
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-zinc-400 leading-snug block mt-0.5">
                    Untreated natural materials, authentic stringing.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info, Variant Selector & Content Tabs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Header / Eyebrow */}
            <div className="border-b border-zinc-800/80 pb-6 mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-3">
                ✦ {product.tagline}
              </span>

              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 uppercase leading-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews Bar */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 sm:mt-4 text-xs">
                <div className="flex items-center text-amber-400">
                  <span>★</span>
                  <span className="font-bold text-zinc-200 ml-1">{product.rating}</span>
                </div>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400 font-mono text-[11px] sm:text-xs">
                  {product.reviewCount} Verified Devotee Reviews
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-amber-400/90 font-mono text-[11px] sm:text-xs">Vedic Purity Assured</span>
              </div>

              {/* Short Description */}
              <p className="text-zinc-300 font-subheading italic text-base sm:text-xl mt-4 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Variant / Divine Offering Selector */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400">
                  {isMala ? "Select Offering & Blessing Option" : "Select Kit Variant"}
                </span>
                {selectedVariant?.suitableFor && (
                  <span className="text-[11px] sm:text-xs font-mono text-amber-400/80">
                    {selectedVariant.suitableFor}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.variants.map((v) => {
                  const isSelected = v.id === selectedVariantId;
                  const hasKashiPrasad =
                    v.name.toLowerCase().includes("kashi prasad") ||
                    v.badge?.toLowerCase().includes("consecrated") ||
                    (v as { divineOfferingOption?: string }).divineOfferingOption?.includes("Kashi Prasad");

                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariantId(v.id)}
                      className={`relative text-left p-3.5 sm:p-4 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-zinc-900 border-amber-500 shadow-[0_0_20px_rgba(223,171,82,0.15)] ring-1 ring-amber-500/50"
                          : "bg-zinc-950/60 border-zinc-800 hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          {v.badge}
                        </span>
                        {hasKashiPrasad && (
                          <span className="text-[9px] font-mono text-amber-300 font-semibold uppercase">
                            ✦ Kashi Consecrated
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-sm sm:text-base font-bold text-zinc-100 mt-2">
                        {v.name}
                      </h3>

                      <div className="flex items-baseline gap-2 mt-1.5">
                        <span className="font-serif text-lg sm:text-xl font-bold text-zinc-100">
                          ₹{v.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-zinc-500 line-through">
                          ₹{v.mrp.toLocaleString("en-IN")}
                        </span>
                      </div>

                      {v.suitableFor && (
                        <span className="text-[10px] sm:text-[11px] text-zinc-400 block mt-1">
                          {v.suitableFor}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Variant Description */}
            <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-amber-400 block mb-1">
                {selectedVariant?.name} Details
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedVariant?.description}
              </p>
            </div>

            {/* Content Tabs */}
            <div className="mb-8">
              <div className="flex border-b border-zinc-800 mb-6 overflow-x-auto [scrollbar-width:none]">
                {/* Specifications Tab (for Malas) */}
                {product.specifications && product.specifications.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveTab("specs")}
                    className={`pb-3 px-3 sm:px-4 text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                      activeTab === "specs"
                        ? "border-amber-400 text-amber-300 font-semibold"
                        : "border-transparent text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    Specifications
                  </button>
                )}

                {/* Samagri Checklist Tab (for Puja Kits or package items) */}
                {totalSamagriItems > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveTab("samagri")}
                    className={`pb-3 px-3 sm:px-4 text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                      activeTab === "samagri"
                        ? "border-amber-400 text-amber-300 font-semibold"
                        : "border-transparent text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {isMala ? `Includes (${totalSamagriItems})` : `Samagri (${totalSamagriItems})`}
                  </button>
                )}

                {/* Key Highlights Tab */}
                {selectedVariant?.keyHighlights && selectedVariant.keyHighlights.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveTab("highlights")}
                    className={`pb-3 px-3 sm:px-4 text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                      activeTab === "highlights"
                        ? "border-amber-400 text-amber-300 font-semibold"
                        : "border-transparent text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    Highlights
                  </button>
                )}

                {/* Vedic Overview Tab */}
                <button
                  type="button"
                  onClick={() => setActiveTab("overview")}
                  className={`pb-3 px-3 sm:px-4 text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                    activeTab === "overview"
                      ? "border-amber-400 text-amber-300 font-semibold"
                      : "border-transparent text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Vedic Overview
                </button>

                {/* Sacred FAQs Tab */}
                {product.faqs && product.faqs.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveTab("faqs")}
                    className={`pb-3 px-3 sm:px-4 text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                      activeTab === "faqs"
                        ? "border-amber-400 text-amber-300 font-semibold"
                        : "border-transparent text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    Divine FAQs ({product.faqs.length})
                  </button>
                )}
              </div>

              {/* Tab: Specifications */}
              {activeTab === "specs" && product.specifications && (
                <div className="space-y-4">
                  {product.specifications.map((group, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-5"
                    >
                      <h4 className="font-serif text-sm font-semibold text-amber-300/90 uppercase tracking-wider mb-3">
                        {group.groupName}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {group.specs.map((item, specIdx) => (
                          <div
                            key={specIdx}
                            className="flex items-center justify-between py-2 px-3 rounded bg-zinc-900/40 border border-zinc-800/40"
                          >
                            <span className="text-zinc-400">{item.label}</span>
                            <span className="font-mono text-zinc-200 font-medium text-right max-w-[55%]">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab: Samagri Checklist / Included Items */}
              {activeTab === "samagri" && selectedVariant?.samagriChecklist && (
                <div className="space-y-4">
                  {selectedVariant.samagriChecklist.map((categoryGroup, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-5"
                    >
                      <h4 className="font-serif text-sm font-semibold text-amber-300/90 uppercase tracking-wider mb-3">
                        {categoryGroup.category}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {categoryGroup.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-center justify-between py-2 px-3 rounded bg-zinc-900/40 border border-zinc-800/40"
                          >
                            <span className="text-zinc-300">{item.name}</span>
                            <span className="font-mono text-amber-400/90 font-medium">
                              {item.quantity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab: Key Highlights */}
              {activeTab === "highlights" && selectedVariant?.keyHighlights && (
                <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-5 sm:p-6">
                  <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                    {selectedVariant.keyHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-amber-400 font-bold">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tab: Vedic Overview */}
              {activeTab === "overview" && (
                <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-5 sm:p-6 space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {product.detailedOverview.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              )}

              {/* Tab: FAQs */}
              {activeTab === "faqs" && product.faqs && (
                <div className="space-y-3">
                  {product.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4 sm:p-5"
                    >
                      <h4 className="font-serif text-sm sm:text-base font-semibold text-amber-300 mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                  Total Sacred Offering Price
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-bold text-zinc-100">
                    ₹{selectedVariant?.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-zinc-500 line-through">
                    ₹{selectedVariant?.mrp.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Save 50%
                  </span>
                </div>
              </div>

              <div className="w-full sm:w-auto flex items-center gap-3">
                <button
                  type="button"
                  onClick={addSelectedItem}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#dfab52] via-[#fed88b] to-[#b88628] hover:from-[#fed88b] hover:to-[#dfab52] text-zinc-950 text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-amber-500/20"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

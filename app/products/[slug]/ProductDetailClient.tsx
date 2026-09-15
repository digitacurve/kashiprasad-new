"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Product } from "@/data/products";
import { useCart } from "@/components/CartProvider";
import PincodeEstimator from "@/components/PincodeEstimator";
import SimilarProducts from "@/components/SimilarProducts";
import StickyMobileBar from "@/components/StickyMobileBar";
import ProductComparisonTable from "@/components/ProductComparisonTable";
import ProductFaqAccordion from "@/components/ProductFaqAccordion";
import { ChevronDown, ChevronUp, Plus, Minus, ShoppingBag, Zap, Sparkles } from "lucide-react";
import { playLuxuryHaptic } from "@/lib/audio";
import {
  gemstoneWeightOptions,
  getGemstoneWeightOptions,
  gemstoneSettingOptions,
  getGemstoneSettingOptions,
  DIVINE_OFFERING_PRICE,
} from "@/data/ratnas";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useCurrency } from "@/components/CurrencyProvider";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter();
  const { addItem, openCart } = useCart();
  const { formatPrice } = useCurrency();
  const [selectedVariantId, setSelectedVariantId] = useState<string>(product.variants[0]?.id || "");
  const [quantity, setQuantity] = useState<number>(1);
  const [addedState, setAddedState] = useState<boolean>(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false);
  const [isTransparencyExpanded, setIsTransparencyExpanded] = useState<boolean>(false);

  const isRatna = product.category === "Ratnas";
  const weightOptions = isRatna ? getGemstoneWeightOptions(product.slug) : gemstoneWeightOptions;
  const settingOptions = isRatna ? getGemstoneSettingOptions(product.slug) : gemstoneSettingOptions;

  // Gemstone-specific customization states
  const [selectedWeightId, setSelectedWeightId] = useState<string>(weightOptions[1]?.id || "4-ratti");
  const [selectedSettingId, setSelectedSettingId] = useState<string>("gemstone-only");
  const [withDivineOffering, setWithDivineOffering] = useState<boolean>(false);

  const imagesList =
    product.images && product.images.length > 0
      ? product.images
      : product.image
        ? [product.image]
        : [];

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const activeImage = imagesList[activeImageIndex] || product.image;

  const isMala = product.category === "Mala";
  const defaultTab = isRatna || isMala ? "specs" : "samagri";
  const [activeTab, setActiveTab] = useState<
    "overview" | "samagri" | "specs" | "highlights" | "faqs"
  >(defaultTab);

  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  const selectedSetting =
    settingOptions.find((s) => s.id === selectedSettingId) || settingOptions[0];

  const selectedWeight =
    weightOptions.find((w) => w.id === selectedWeightId) || weightOptions[0];

  // Dynamic price calculation
  const settingPriceAdd = isRatna ? selectedSetting.priceAdd : 0;
  const divineOfferingAdd = isRatna && withDivineOffering ? DIVINE_OFFERING_PRICE : 0;
  const dynamicPrice = (selectedVariant?.price || 0) + settingPriceAdd + divineOfferingAdd;
  const dynamicMrp = (selectedVariant?.mrp || 0) + settingPriceAdd + divineOfferingAdd;
  const discountPercent = dynamicMrp > dynamicPrice ? Math.round(((dynamicMrp - dynamicPrice) / dynamicMrp) * 100) : 0;

  const buildCartItem = () => {
    if (!selectedVariant) return null;

    let variantTitle = selectedVariant.name;
    if (isRatna) {
      variantTitle = `${selectedVariant.name} • ${selectedWeight.name} • ${selectedSetting.name}`;
      if (withDivineOffering) {
        variantTitle += " • With Divine Offering";
      }
    }

    return {
      productId: product.id,
      slug: product.slug,
      name: product.name,
      category: product.category,
      image: product.image,
      variantId: `${selectedVariant.id}-${selectedWeightId}-${selectedSettingId}${withDivineOffering ? "-divine" : ""}`,
      variantName: variantTitle,
      price: dynamicPrice,
      mrp: dynamicMrp,
      divineOffering: isRatna ? withDivineOffering : Boolean(
        selectedVariant.divineOfferingOption?.toLowerCase().includes("with divine")
      ),
    };
  };

  const addSelectedItem = () => {
    const item = buildCartItem();
    if (!item) return;

    addItem(item, quantity);
    playLuxuryHaptic();
    setAddedState(true);
    openCart();
    setTimeout(() => setAddedState(false), 2500);
  };

  const handleBuyNow = () => {
    const item = buildCartItem();
    if (!item) return;

    addItem(item, quantity);
    playLuxuryHaptic();
    router.push("/checkout");
  };

  const totalSamagriItems =
    selectedVariant?.samagriChecklist?.reduce((acc, cat) => acc + cat.items.length, 0) || 0;

  const categoryHref = isRatna ? "/ratnas" : isMala ? "/#mala" : "/#puja-kits";
  const categoryLabel = isRatna ? "Ratnas" : isMala ? "Mala" : "Puja Kits";

  return (
    <div className="min-h-screen bg-[#06080c] text-[#f5f5f7]">
      {/* Global Site Navigation Header */}
      <SiteHeader />

      {/* Top Breadcrumb & Back Strip */}
      <div className="border-b border-zinc-800/60 bg-[#080b10]/80 px-4 sm:px-10 lg:px-16 py-2.5">
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
      </div>

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
                      <span className="text-3xl sm:text-4xl text-amber-400/60 font-serif">🕉️</span>
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
                    {product.slug === "cats-eye-lahsunia"
                      ? "Sanctified with holy Ganga jal & Ketu Vedic mantras."
                      : product.slug === "hessonite-gomed"
                      ? "Sanctified with holy Ganga jal & Rahu Vedic mantras."
                      : product.slug === "blue-sapphire-neelam"
                      ? "Sanctified with holy Ganga jal & Shani Vedic mantras."
                      : product.slug === "diamond-heera"
                      ? "Sanctified with holy Ganga jal & Shukra Vedic mantras."
                      : product.slug === "yellow-sapphire-pukhraj"
                      ? "Sanctified with holy Ganga jal & Guru Brihaspati mantras."
                      : product.slug === "emerald-panna"
                      ? "Sanctified with holy Ganga jal & Budha Vedic mantras."
                      : product.slug === "red-coral-moonga"
                      ? "Sanctified with holy Ganga jal & Mangal Vedic mantras."
                      : product.slug === "pearl-moti"
                      ? "Sanctified with holy Ganga jal & Chandra Vedic mantras."
                      : product.slug === "ruby-manikya"
                      ? "Sanctified with holy Ganga jal & Surya Vedic mantras."
                      : "Sanctified along the sacred Ganga ghats of Varanasi."}
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                  <span className="text-amber-400 text-base block mb-1">💎</span>
                  <span className="font-serif font-semibold text-zinc-200 block">
                    {product.slug === "diamond-heera"
                      ? "4Cs & Origin Verified"
                      : product.slug === "pearl-moti"
                      ? "Quality & Origin Verified"
                      : product.slug === "red-coral-moonga"
                      ? "Organic Gemstone Certified"
                      : "100% Earth-Mined"}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-zinc-400 leading-snug block mt-0.5">
                    {product.slug === "cats-eye-lahsunia"
                      ? "Natural chatoyant chrysoberyl with certified authenticity."
                      : product.slug === "hessonite-gomed"
                      ? "Natural grossular garnet with certified astrological authenticity."
                      : product.slug === "blue-sapphire-neelam"
                      ? "Earth-mined blue corundum with certified astrological purity."
                      : product.slug === "diamond-heera"
                      ? "Graded for Carat, Cut, Color, Clarity with certified disclosure."
                      : product.slug === "pearl-moti"
                      ? "Graded for luster, surface purity & laboratory certification."
                      : product.slug === "red-coral-moonga"
                      ? "Graded for deep carnation red color & organic authenticity."
                      : "Untreated astrological grade with certified authenticity."}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info, Customization & Content Tabs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Header / Eyebrow */}
            <div className="border-b border-zinc-800/80 pb-6 mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-3">
                ✦ {product.tagline || "Vedic Sacred Offering"}
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
                  {product.reviewCount} Verified Astrological Reviews
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-amber-400/90 font-mono text-[11px] sm:text-xs">
                  Vedic Purity Assured
                </span>
              </div>

              {/* Short Description */}
              <p className="text-zinc-300 font-subheading italic text-base sm:text-xl mt-4 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Quality Tier Selector */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400">
                  {isRatna ? "1. Select Quality Tier" : isMala ? "Select Offering & Blessing Option" : "Select Kit Variant"}
                </span>
                {selectedVariant?.suitableFor && (
                  <span className="text-[11px] sm:text-xs font-mono text-amber-400/80">
                    {selectedVariant.suitableFor}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {product.variants.map((v) => {
                  const isSelected = v.id === selectedVariantId;

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
                      </div>

                      <h3 className="font-serif text-sm sm:text-base font-bold text-zinc-100 mt-2">
                        {v.name}
                      </h3>

                      <div className="flex items-baseline gap-2 mt-1.5">
                        <span className="font-serif text-base sm:text-lg font-bold text-zinc-100">
                          Starting {formatPrice(v.price)}
                        </span>
                        <span className="text-xs text-zinc-500 line-through">
                          {formatPrice(v.mrp)}
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

            {/* Ratnas-Specific Customizations: Weight, Setting, and Divine Offering */}
            {isRatna && (
              <div className="space-y-6 mb-6 sm:mb-8 p-5 sm:p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80">
                {/* 2. Weight (Carat / Ratti / mm) Selector */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400">
                      {product.slug === "diamond-heera" ? "2. Select Carat Weight" : "2. Select Weight & Size"}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-amber-400/80">
                      {product.slug === "diamond-heera" ? "Carats • Specifications" : "Ratti • Carat • Dimensions"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {weightOptions.map((w) => {
                      const isSelected = w.id === selectedWeightId;
                      return (
                        <button
                          key={w.id}
                          type="button"
                          onClick={() => setSelectedWeightId(w.id)}
                          className={`p-2.5 sm:p-3 rounded-xl text-left transition-all border ${
                            isSelected
                              ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-md shadow-amber-500/10"
                              : "bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                          }`}
                        >
                          <span className="block font-semibold text-xs text-zinc-100">{w.name}</span>
                          <span className="block text-[10px] font-mono text-zinc-400 mt-0.5">
                            {w.carat ? w.carat : w.ratti}
                            {w.mmSize ? ` • ${w.mmSize}` : ""}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Setting Selector */}
                <div>
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
                    3. Select Setting / Mounting
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {settingOptions.map((s) => {
                      const isSelected = s.id === selectedSettingId;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedSettingId(s.id)}
                          className={`p-3 rounded-xl text-left text-xs transition-all border flex flex-col justify-between ${
                            isSelected
                              ? "bg-amber-500/15 border-amber-400 text-amber-200 shadow-md shadow-amber-500/10"
                              : "bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                          }`}
                        >
                          <span className="font-medium text-zinc-100">{s.name}</span>
                          <span className="text-[11px] font-mono text-amber-400/90 mt-1">
                            {s.priceAdd > 0
                              ? `+${formatPrice(s.priceAdd)}`
                              : s.isCustomPricing
                              ? "Custom Pricing"
                              : "Included"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {selectedSetting.isCustomPricing && (
                    <p className="text-[11px] text-zinc-400 mt-2 font-mono">
                      * Setting prices vary based on precious metal weight, purity (Gold / Platinum / Silver), and custom design specifications.
                    </p>
                  )}
                </div>

                {/* 4. Divine Offering Option (Optional) */}
                <div className="pt-4 border-t border-zinc-800/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-serif font-bold text-zinc-100">
                          4. Sacred Varanasi Divine Offering
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          Optional
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        Personalized Archana and Vedic priest consecration at the sacred ghats of Varanasi before dispatch. Divine Offering is optional and not required to purchase the gemstone.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setWithDivineOffering(false)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all border ${
                          !withDivineOffering
                            ? "bg-zinc-800 border-zinc-600 text-zinc-100 font-semibold"
                            : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                        }`}
                      >
                        Without Offering ({formatPrice(0)})
                      </button>
                      <button
                        type="button"
                        onClick={() => setWithDivineOffering(true)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all border ${
                          withDivineOffering
                            ? "bg-amber-500 text-zinc-950 border-amber-400 font-bold shadow-md shadow-amber-500/20"
                            : "bg-zinc-950/60 border-zinc-800 text-amber-300/90 hover:border-amber-500/50"
                        }`}
                      >
                        + With Divine Offering (+{formatPrice(DIVINE_OFFERING_PRICE)})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Selected Variant Description */}
            <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-amber-400 block mb-1">
                {selectedVariant?.name} Details
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedVariant?.description}
              </p>
            </div>

            {/* Diamond Transparency Notice Box */}
            {product.slug === "diamond-heera" && (
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-base">✦</span>
                  <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
                    Diamond Transparency & Disclosure
                  </h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                  Diamond prices vary significantly based on:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono text-zinc-300 mb-3">
                  <div className="flex items-center gap-1.5 bg-zinc-900/60 p-2 rounded border border-zinc-800/60">
                    <span className="text-amber-400">✦</span> Carat weight
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/60 p-2 rounded border border-zinc-800/60">
                    <span className="text-amber-400">✦</span> Cut grade
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/60 p-2 rounded border border-zinc-800/60">
                    <span className="text-amber-400">✦</span> Color grade
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/60 p-2 rounded border border-zinc-800/60">
                    <span className="text-amber-400">✦</span> Clarity grade
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/60 p-2 rounded border border-zinc-800/60">
                    <span className="text-amber-400">✦</span> Certification
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/60 p-2 rounded border border-zinc-800/60">
                    <span className="text-amber-400">✦</span> Natural vs Lab-Grown
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/60 p-2 rounded border border-zinc-800/60">
                    <span className="text-amber-400">✦</span> Shape & symmetry
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/60 p-2 rounded border border-zinc-800/60">
                    <span className="text-amber-400">✦</span> Fluorescence
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/60 p-2 rounded border border-zinc-800/60">
                    <span className="text-amber-400">✦</span> Setting metal weight
                  </div>
                </div>
                <p className="text-xs text-amber-300/90 leading-relaxed font-mono">
                  The final price depends on the exact Diamond selected and verified specifications.
                </p>
              </div>
            )}

            {/* Pearl Transparency Notice Box */}
            {product.slug === "pearl-moti" && (
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-base">✦</span>
                  <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
                    Pearl Transparency & Disclosure
                  </h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Pearls naturally vary in luster, surface characteristics, shape, size, color, origin, cultivation status, and treatment. The exact appearance and final valuation depend on the individual pearl selected. In accordance with ethical Vedic gemology standards, we do not use the term &ldquo;natural pearl&rdquo; unless the actual inventory is verified as natural earth/ocean formed.
                </p>
              </div>
            )}

            {/* Red Coral Transparency Notice Box */}
            {product.slug === "red-coral-moonga" && (
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-base">✦</span>
                  <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
                    Red Coral Transparency & Disclosure
                  </h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Red Coral is an organic gemstone material that naturally varies in color, surface characteristics, shape, size, texture, origin, and treatment. The exact appearance and valuation depend on the selected specimen. In accordance with honest disclosure standards, we only describe the coral as natural or untreated when that status has been verified for that specific inventory.
                </p>
              </div>
            )}

            {/* Emerald Transparency Notice Box */}
            {product.slug === "emerald-panna" && (
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-base">✦</span>
                  <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
                    Emerald Transparency & Disclosure
                  </h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Emeralds can naturally vary in color, clarity, inclusions (known as jardin), transparency, cut, origin, treatment, size, and overall appearance. The exact price depends on the selected gemstone. In accordance with ethical Vedic gemology standards, we only display verified origin, treatment, and certification information for the actual inventory item.
                </p>
              </div>
            )}

            {/* Cat's Eye Transparency Notice Box */}
            {product.slug === "cats-eye-lahsunia" && (
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-base">✦</span>
                  <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
                    Cat’s Eye Transparency & Disclosure
                  </h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Cat’s Eye gemstones naturally vary in the sharpness and alignment of their chatoyant eye-band, body color (honey-green to golden olive), clarity, transparency, cut dome symmetry, origin, treatment status, and carat weight. In accordance with honest Vedic gemological standards, we strictly disclose verified information regarding natural chatoyancy, origin, and laboratory certification.
                </p>
              </div>
            )}

            {/* Hessonite Transparency Notice Box */}
            {product.slug === "hessonite-gomed" && (
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-base">✦</span>
                  <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
                    Hessonite Transparency & Disclosure
                  </h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Hessonite Garnets naturally vary in color (cinnamon orange to deep honey amber), clarity, transparency, natural internal swirls (the characteristic treacle effect), cut, origin, treatment status, and carat weight. The exact price depends on the selected gemstone. In accordance with ethical Vedic gemology standards, we only display verified origin, treatment, certification, and natural status for the actual inventory item.
                </p>
              </div>
            )}

            {/* Blue Sapphire Transparency Notice Box */}
            {product.slug === "blue-sapphire-neelam" && (
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-base">✦</span>
                  <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
                    Blue Sapphire Transparency & Disclosure
                  </h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Blue Sapphires naturally vary in color saturation (cornflower to deep royal blue), clarity, transparency, inclusions (silk/color zoning), cut, origin, treatment status, and carat weight. The exact price depends on the selected gemstone. In accordance with ethical Vedic gemology standards, we only display verified origin, treatment, certification, and natural status for the actual inventory item.
                </p>
              </div>
            )}

            {/* Yellow Sapphire Transparency Notice Box */}
            {product.slug === "yellow-sapphire-pukhraj" && (
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-base">✦</span>
                  <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
                    Yellow Sapphire Transparency & Disclosure
                  </h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Yellow Sapphires can naturally vary in color, clarity, transparency, inclusions, cut, origin, treatment, size, and overall appearance. The exact price depends on the selected gemstone. In accordance with ethical Vedic gemology standards, we only show verified origin, treatment, certification, and quality information for the actual inventory item.
                </p>
              </div>
            )}

            {/* Content Tabs */}
            <div className="mb-8">
              <div className="flex border-b border-zinc-800 mb-6 overflow-x-auto [scrollbar-width:none]">
                {/* Specifications Tab */}
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

                {/* Samagri Checklist Tab (if available) */}
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
                  {product.slug === "cats-eye-lahsunia"
                    ? "Cat’s Eye & Ketu"
                    : product.slug === "hessonite-gomed"
                    ? "Hessonite & Rahu"
                    : product.slug === "blue-sapphire-neelam"
                    ? "Blue Sapphire & Shani"
                    : product.slug === "diamond-heera"
                    ? "Diamond & Shukra"
                    : product.slug === "pearl-moti"
                    ? "Pearl & Chandra"
                    : product.slug === "red-coral-moonga"
                    ? "Red Coral & Mangal"
                    : product.slug === "emerald-panna"
                    ? "Emerald & Budha"
                    : product.slug === "yellow-sapphire-pukhraj"
                    ? "Yellow Sapphire & Guru"
                    : "Vedic Overview"}
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
              {activeTab === "overview" && product.detailedOverview && (
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
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions Bar with Dynamic Price Breakdown */}
            <div className="pt-6 border-t border-zinc-800 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                    {isRatna
                      ? `${selectedVariant.name} • ${selectedWeight.name} ${
                          selectedSetting.priceAdd > 0
                            ? `+ ${selectedSetting.name}`
                            : selectedSetting.isCustomPricing
                            ? `+ ${selectedSetting.name}`
                            : ""
                        } ${withDivineOffering ? "+ Divine Offering" : ""}`
                      : "Total Sacred Offering Price"}
                  </span>
                  <div className="flex items-baseline gap-2">
                    {selectedSetting.isCustomPricing ? (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100">
                            {formatPrice((selectedVariant?.price || 0) + (withDivineOffering ? DIVINE_OFFERING_PRICE : 0))}
                          </span>
                          <span className="text-amber-300 font-serif text-base sm:text-lg font-bold">
                            + {selectedSetting.name}
                          </span>
                        </div>
                        <span className="block text-[11px] font-mono text-zinc-400 mt-1">
                          Final price will be calculated based on the selected setting.
                        </span>
                      </div>
                    ) : (
                      <>
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100">
                          {formatPrice(dynamicPrice * quantity)}
                        </span>
                        <span className="text-xs text-zinc-500 line-through">
                          {formatPrice(dynamicMrp * quantity)}
                        </span>
                        {discountPercent > 0 && (
                          <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            Save {discountPercent}%
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-950 px-2 py-1.5 shadow-inner">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1 text-zinc-400 hover:text-white transition cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-semibold text-zinc-100 font-mono">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1 text-zinc-400 hover:text-white transition cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Add to Bag Button */}
                  <button
                    type="button"
                    onClick={addSelectedItem}
                    className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer ${
                      addedState
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)]"
                        : "border-amber-500/40 bg-zinc-900/90 hover:bg-zinc-800 text-amber-200 hover:border-amber-400 shadow-amber-500/10"
                    }`}
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>
                      {addedState
                        ? "✓ Added to Bag"
                        : selectedSetting.isCustomPricing
                        ? "Add Custom Order"
                        : "Add to Bag"}
                    </span>
                  </button>

                  {/* Buy Now Direct Button */}
                  {!selectedSetting.isCustomPricing && (
                    <button
                      type="button"
                      onClick={handleBuyNow}
                      className="flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 text-zinc-950 text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 active:scale-95 cursor-pointer font-mono"
                    >
                      <Zap className="h-4 w-4 fill-current" />
                      <span>Buy Now</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Delivery Pincode Estimator */}
              <div className="pt-2">
                <PincodeEstimator />
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Luxury Trust Comparison Table */}
        <div className="mt-12">
          <ProductComparisonTable />
        </div>

        {/* Full-Width Sacred FAQs Accordion */}
        <div className="mt-8">
          <ProductFaqAccordion />
        </div>

        {/* Similar Products Recommendation Grid */}
        <SimilarProducts currentProduct={product} />
      </main>

      {/* Global Site Footer */}
      <SiteFooter />

      {/* Sticky Mobile Purchase Bar */}
      <StickyMobileBar
        image={activeImage || product.image}
        name={product.name}
        variantName={selectedVariant?.name || ""}
        price={dynamicPrice}
        mrp={dynamicMrp}
        onAddToCart={addSelectedItem}
        onBuyNow={handleBuyNow}
        addedState={addedState}
      />
    </div>
  );
}



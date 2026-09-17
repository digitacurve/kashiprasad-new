"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ShoppingBag,
  User,
  Heart,
  Menu,
  X,
  Sparkles,
  Truck,
  Flame,
  ShieldCheck,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { storeCategories } from "@/data/storefront";
import { useCart } from "@/components/CartProvider";
import { useAuth } from "@/components/AuthProvider";
import { useWishlist } from "@/components/WishlistProvider";
import PanchangBanner from "@/components/PanchangBanner";
import CurrencySwitcher from "@/components/CurrencySwitcher";
import CategoryNavigation from "@/components/CategoryNavigation";
import FlipkartSearchBar from "@/components/FlipkartSearchBar";

export default function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const { user, isLoggedIn, openAuthModal } = useAuth();
  const { totalWishlistItems, setIsWishlistOpen } = useWishlist();

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        transparent
          ? "border-b border-amber-500/15 bg-[#06080c]/85 backdrop-blur-xl"
          : "border-b border-amber-500/20 bg-[#06080c]/95 backdrop-blur-xl"
      }`}
    >
      <PanchangBanner />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3 py-2 sm:px-6 sm:py-2.5">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 sm:gap-2.5 font-serif text-xs sm:text-base lg:text-lg font-bold tracking-[0.1em] sm:tracking-[0.2em] text-amber-100 transition flex-shrink-0"
        >
          <div className="relative h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 overflow-hidden rounded-full border border-amber-500/40 shadow-[0_0_12px_rgba(223,171,82,0.35)] group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300 flex-shrink-0">
            <Image
              src="/kashi-prasad-logo.png"
              alt="Kashi Prasad Logo"
              fill
              className="object-cover"
              sizes="36px"
              priority
            />
          </div>
          <span className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent whitespace-nowrap">
            KASHI PRASAD
          </span>
        </Link>

        {/* Desktop Flipkart-Style Search Bar */}
        <div className="hidden lg:block flex-1 max-w-md mx-3 xl:mx-6">
          <FlipkartSearchBar />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-4 lg:flex xl:gap-5" aria-label="Main navigation">
          {/* Sacred Live Darshan Link */}
          <Link
            href="/live-darshan"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-amber-300 hover:text-amber-200 transition-colors py-1 relative group"
          >
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span>Live Darshan</span>
          </Link>

          {/* Certificate Verification Link */}
          <Link
            href="/verify-certificate"
            className="text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-amber-300 transition-colors py-1 relative group hidden xl:inline-flex items-center gap-1"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-amber-400/80" />
            <span>Verify</span>
          </Link>

          {/* Acharya WhatsApp Help */}
          <a
            href="https://wa.me/918604971503?text=Hari%20Om%20Acharyaji%2C%20Mujhe%20Kashi%20Prasad%20sacred%20items%20aur%20puja%20services%20ke%20bare%20me%20guidance%20chahiye."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors py-1"
          >
            <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
            <span>Ask Acharya</span>
          </a>
        </nav>

        {/* Action Controls - Scaled for Mobile with Zero Overflow */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 text-zinc-300 flex-shrink-0">
          {/* Desktop Currency Switcher */}
          <div className="hidden md:block">
            <CurrencySwitcher variant="header" />
          </div>

          {/* Interactive Wishlist Button */}
          <button
            type="button"
            aria-label="Open Wishlist"
            onClick={() => setIsWishlistOpen(true)}
            className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:border-amber-500/40 hover:text-amber-300 transition cursor-pointer"
          >
            <Heart className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${totalWishlistItems > 0 ? "fill-amber-400 text-amber-400" : ""}`} />
            {totalWishlistItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[9px] font-bold text-zinc-950 font-mono shadow-[0_0_8px_rgba(245,158,11,0.6)]">
                {totalWishlistItems}
              </span>
            )}
          </button>

          {/* Desktop User Account Trigger */}
          {isLoggedIn ? (
            <Link
              aria-label="Account Profile"
              href="/account"
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-amber-600/10 px-3 py-1.5 text-xs font-semibold text-amber-200 hover:border-amber-400 transition"
            >
              <User className="h-3.5 w-3.5 text-amber-400" />
              <span className="font-sans text-xs max-w-[70px] truncate">
                {user?.name.split(" ")[0]}
              </span>
            </Link>
          ) : (
            <button
              onClick={() => openAuthModal()}
              type="button"
              aria-label="Login to account"
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300 hover:border-amber-500/40 hover:text-amber-200 transition cursor-pointer"
            >
              <User className="h-3.5 w-3.5 text-amber-400" />
              <span className="font-sans text-xs">Login</span>
            </button>
          )}

          {/* Sacred Bag / Cart Trigger */}
          <button
            onClick={openCart}
            aria-label="Open Shopping Bag"
            className="relative flex h-8 w-8 sm:h-9 sm:w-auto items-center justify-center sm:px-3 sm:py-1.5 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent text-xs font-semibold text-amber-200 hover:border-amber-400 shadow-[0_0_15px_rgba(223,171,82,0.15)] transition cursor-pointer"
          >
            <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-300 flex-shrink-0" />
            <span className="font-mono text-xs hidden sm:inline ml-1">Bag</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 sm:static sm:ml-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-bold text-zinc-950 shadow-[0_0_8px_rgba(223,171,82,0.8)] animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-300 hover:text-white lg:hidden transition cursor-pointer"
          >
            {open ? <X className="h-4 w-4 text-amber-400" /> : <Menu className="h-4 w-4 text-zinc-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Flipkart-Style Search Bar */}
      <div className="w-full px-3 py-1.5 lg:hidden bg-[#070a10]/90 border-t border-amber-500/10">
        <FlipkartSearchBar />
      </div>

      {/* Mobile Visual 5-Category Matrix (100% visible, zero cutoff) */}
      <div className="w-full px-2 pb-2 pt-1 lg:hidden border-t border-amber-500/10 bg-[#06080c]/60">
        <CategoryNavigation isMobile />
      </div>

      {/* Luxury Mobile Navigation Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-[calc(100%+1px)] max-h-[calc(100vh-80px)] overflow-y-auto border-t border-amber-500/20 bg-[#06080c]/98 backdrop-blur-2xl px-4 py-5 lg:hidden animate-fadeIn space-y-4 shadow-2xl z-50">
          {/* Mobile User Profile Header */}
          <div className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-amber-950/20 to-transparent p-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/20 border border-amber-400 text-amber-200 font-serif font-bold">
                  {user?.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-medium text-amber-200">Pranam, {user?.name}</p>
                  <p className="text-[11px] text-zinc-400 truncate max-w-[180px]">{user?.email || user?.phone}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-serif font-bold text-amber-200">Kashi Prasad Devotee</p>
                  <p className="text-[10px] text-zinc-400">Sign in for orders & certificates</p>
                </div>
              </div>
            )}

            {isLoggedIn ? (
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-amber-500/40 bg-amber-500/20 px-3 py-1.5 text-xs font-semibold text-amber-200 hover:border-amber-400"
              >
                Profile
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openAuthModal();
                }}
                className="rounded-lg border border-amber-400 bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-1.5 text-xs font-bold text-zinc-950 shadow-[0_0_12px_rgba(223,171,82,0.4)]"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Currency Switcher */}
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3">
            <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 mb-2">Select Currency</p>
            <CurrencySwitcher variant="mobile" />
          </div>

          {/* Store Categories Grid */}
          <div>
            <p className="text-[10px] uppercase font-mono tracking-widest text-amber-400/80 mb-2 px-1">
              ✦ Sacred Categories
            </p>
            <div className="grid grid-cols-2 gap-2">
              {storeCategories.map((category) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={category.id}
                  href={category.href}
                  className="flex items-center gap-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-2.5 hover:border-amber-500/40 hover:bg-zinc-900/90 transition"
                >
                  <div className="h-7 w-7 rounded-lg bg-zinc-950 border border-amber-500/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {category.image ? (
                      <img src={category.image} alt={category.name} className="h-full w-full object-contain p-0.5" />
                    ) : (
                      <span className="text-[10px] text-amber-400">✦</span>
                    )}
                  </div>
                  <span className="font-serif text-xs font-bold text-zinc-200 truncate">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sacred Services Links */}
          <div className="space-y-2 pt-1">
            <p className="text-[10px] uppercase font-mono tracking-widest text-amber-400/80 mb-2 px-1">
              ✦ Devotional Portals
            </p>

            {/* Mobile Live Darshan */}
            <Link
              onClick={() => setOpen(false)}
              href="/live-darshan"
              className="flex items-center justify-between rounded-xl border border-red-500/40 bg-gradient-to-r from-red-950/30 to-zinc-900/50 p-3 text-red-200 hover:border-red-400 transition"
            >
              <span className="flex items-center gap-2.5 font-serif text-sm font-semibold">
                <Flame className="h-4 w-4 text-red-400 animate-pulse flex-shrink-0" />
                Live Kashi Darshan & Aarti
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-red-500/20 border border-red-500/40 px-2 py-0.5 text-[9px] font-mono uppercase font-bold text-red-300">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                Live
              </span>
            </Link>

            {/* Mobile Verify Certificate */}
            <Link
              onClick={() => setOpen(false)}
              href="/verify-certificate"
              className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-3 font-serif text-sm text-zinc-200 hover:border-amber-500/40 hover:text-amber-200 transition"
            >
              <span className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-amber-400 flex-shrink-0" />
                Verify Pran Pratishtha Certificate
              </span>
              <ChevronRight className="h-4 w-4 text-zinc-500" />
            </Link>

            {/* Mobile Track Order */}
            <Link
              onClick={() => setOpen(false)}
              href="/track-order"
              className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 font-serif text-sm text-amber-200 hover:border-amber-400 transition"
            >
              <span className="flex items-center gap-2.5">
                <Truck className="h-4 w-4 text-amber-400 flex-shrink-0" />
                Track My Sacred Order
              </span>
              <ChevronRight className="h-4 w-4 text-amber-400" />
            </Link>

            {/* WhatsApp Consultation */}
            <a
              href="https://wa.me/918604971503?text=Pranam%20Pandit%20Ji%2C%20I%20need%20guidance%20on%20Kashi%20Prasad%20sacred%20items."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 font-serif text-sm text-emerald-200 hover:border-emerald-400 transition"
            >
              <span className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                24x7 Shastri Ji Consultation
              </span>
              <span className="text-[10px] font-mono text-emerald-400">WhatsApp ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


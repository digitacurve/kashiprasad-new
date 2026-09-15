"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, User, Heart, Menu, X, Sparkles, Truck, Flame, ShieldCheck } from "lucide-react";
import { storeCategories } from "@/data/storefront";
import { useCart } from "@/components/CartProvider";
import { useAuth } from "@/components/AuthProvider";
import { useWishlist } from "@/components/WishlistProvider";
import PanchangBanner from "@/components/PanchangBanner";
import CurrencySwitcher from "@/components/CurrencySwitcher";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { totalItems, openCart, openSearch } = useCart();
  const { user, isLoggedIn, openAuthModal } = useAuth();
  const { totalWishlistItems, setIsWishlistOpen } = useWishlist();

  return (
    <header className="sticky top-0 z-40 border-b border-amber-500/20 bg-[#06080c]/95 backdrop-blur-xl transition-all">
      <PanchangBanner />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-serif text-base sm:text-lg font-bold tracking-[0.2em] text-amber-100 transition"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(223,171,82,0.4)] transition">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          </span>
          <span className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">
            KASHI PRASAD
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Main navigation">
          {storeCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="text-xs font-medium uppercase tracking-wider text-zinc-300 hover:text-amber-300 transition-colors py-1 relative group"
            >
              <span>{category.name}</span>
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

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
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 text-zinc-300">
          {/* Currency Switcher */}
          <div className="hidden sm:block">
            <CurrencySwitcher variant="header" />
          </div>

          {/* Quick Search Bar / Trigger */}
          <button
            onClick={openSearch}
            type="button"
            aria-label="Search catalogue"
            className="flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-400 hover:border-amber-500/50 hover:text-zinc-200 hover:bg-zinc-800/90 shadow-sm transition-all cursor-pointer group"
          >
            <Search className="h-4 w-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="hidden xl:inline font-sans text-xs text-zinc-400 group-hover:text-zinc-300">
              Search Malas, Ratnas...
            </span>
            <kbd className="hidden sm:inline-flex items-center rounded-md border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 group-hover:border-amber-500/30 group-hover:text-amber-300">
              ⌘K
            </kbd>
          </button>

          {/* Interactive Wishlist Button */}
          <button
            type="button"
            aria-label="Open Wishlist"
            onClick={() => setIsWishlistOpen(true)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:border-amber-500/40 hover:text-amber-300 transition cursor-pointer"
          >
            <Heart className={`h-4 w-4 ${totalWishlistItems > 0 ? "fill-amber-400 text-amber-400" : ""}`} />
            {totalWishlistItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[9px] font-bold text-zinc-950 font-mono shadow-[0_0_8px_rgba(245,158,11,0.6)]">
                {totalWishlistItems}
              </span>
            )}
          </button>

          {/* User Account / Login Trigger */}
          {isLoggedIn ? (
            <Link
              aria-label="Account Profile"
              href="/account"
              className="flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-amber-600/10 px-3 py-1.5 text-xs font-semibold text-amber-200 hover:border-amber-400 transition"
            >
              <User className="h-3.5 w-3.5 text-amber-400" />
              <span className="hidden sm:inline font-sans text-xs max-w-[80px] truncate">
                {user?.name.split(" ")[0]}
              </span>
            </Link>
          ) : (
            <button
              onClick={() => openAuthModal()}
              type="button"
              aria-label="Login to account"
              className="flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300 hover:border-amber-500/40 hover:text-amber-200 transition cursor-pointer"
            >
              <User className="h-3.5 w-3.5 text-amber-400" />
              <span className="hidden sm:inline font-sans text-xs">Login</span>
            </button>
          )}

          {/* Sacred Bag / Cart Trigger */}
          <button
            onClick={openCart}
            aria-label="Open Shopping Bag"
            className="relative flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent px-3 py-1.5 text-xs font-semibold text-amber-200 hover:border-amber-400 shadow-[0_0_15px_rgba(223,171,82,0.15)] transition cursor-pointer"
          >
            <ShoppingBag className="h-4 w-4 text-amber-300" />
            <span className="font-mono text-xs hidden sm:inline">Bag</span>
            {totalItems > 0 && (
              <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-bold text-zinc-950 shadow-[0_0_8px_rgba(223,171,82,0.8)] animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white lg:hidden transition cursor-pointer"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {open && (
        <nav
          className="border-t border-amber-500/15 bg-[#080b10] px-5 py-5 lg:hidden animate-fadeIn space-y-3"
          aria-label="Mobile navigation"
        >
          {/* Mobile Currency Switcher */}
          <CurrencySwitcher variant="mobile" />

          <div className="grid gap-2.5">
            {storeCategories.map((category) => (
              <Link
                onClick={() => setOpen(false)}
                key={category.id}
                href={category.href}
                className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/50 px-4 py-3 font-serif text-base text-zinc-200 hover:border-amber-500/30 hover:text-amber-200 transition"
              >
                <span>{category.name}</span>
                <span className="text-xs text-amber-400 font-mono">✦</span>
              </Link>
            ))}

            {/* Mobile Live Darshan */}
            <Link
              onClick={() => setOpen(false)}
              href="/live-darshan"
              className="flex items-center justify-between rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 font-serif text-base text-red-200 hover:border-red-400 transition"
            >
              <span className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-red-400 animate-pulse" />
                Live Kashi Darshan & Aarti
              </span>
              <span className="text-xs text-red-400 font-mono uppercase font-bold">Live</span>
            </Link>

            {/* Mobile Verify Certificate */}
            <Link
              onClick={() => setOpen(false)}
              href="/verify-certificate"
              className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/50 px-4 py-3 font-serif text-base text-zinc-200 hover:border-amber-500/30 hover:text-amber-200 transition"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                Verify Pran Pratishtha Certificate
              </span>
              <span className="text-xs text-amber-400 font-mono">→</span>
            </Link>

            {/* Mobile Track Order */}
            <Link
              onClick={() => setOpen(false)}
              href="/track-order"
              className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 font-serif text-base text-amber-200 hover:border-amber-400 transition"
            >
              <span className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-amber-400" />
                Track My Sacred Order
              </span>
              <span className="text-xs text-amber-400 font-mono">→</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

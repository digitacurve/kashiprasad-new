"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, User, Heart, Menu, X, Sparkles, Truck } from "lucide-react";
import { storeCategories } from "@/data/storefront";
import { useCart } from "@/components/CartProvider";
import { useAuth } from "@/components/AuthProvider";
import PanchangBanner from "@/components/PanchangBanner";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { totalItems, openCart, openSearch } = useCart();
  const { user, isLoggedIn, openAuthModal } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-amber-500/20 bg-[#06080c]/95 backdrop-blur-xl transition-all">
      <PanchangBanner />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-8">
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
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
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
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 text-zinc-300">
          {/* Quick Search Bar / Trigger */}
          <button
            onClick={openSearch}
            type="button"
            aria-label="Search catalogue"
            className="flex items-center gap-2.5 rounded-full border border-zinc-700/80 bg-zinc-900/90 px-3.5 py-1.5 sm:py-2 text-xs text-zinc-400 hover:border-amber-500/50 hover:text-zinc-200 hover:bg-zinc-800/90 shadow-sm transition-all cursor-pointer group"
          >
            <Search className="h-4 w-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="hidden md:inline font-sans text-xs text-zinc-400 group-hover:text-zinc-300">
              Search Malas, Rudraksha, Ratnas...
            </span>
            <span className="md:hidden hidden sm:inline font-sans text-xs text-zinc-400">
              Search...
            </span>
            <kbd className="hidden sm:inline-flex items-center rounded-md border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 group-hover:border-amber-500/30 group-hover:text-amber-300">
              ⌘K
            </kbd>
          </button>

          {/* Wishlist */}
          <Link
            aria-label="Wishlist"
            href="/account#wishlist"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:border-amber-500/30 hover:text-amber-300 transition"
          >
            <Heart className="h-4 w-4" />
          </Link>

          {/* User Account / Login Trigger */}
          {isLoggedIn ? (
            <Link
              aria-label="Account Profile"
              href="/account"
              className="flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-amber-600/10 px-3 py-1.5 text-xs font-semibold text-amber-200 hover:border-amber-400 transition"
            >
              <User className="h-3.5 w-3.5 text-amber-400" />
              <span className="hidden sm:inline font-sans text-xs max-w-[90px] truncate">
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
            <span className="font-mono text-xs">Bag</span>
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
          className="border-t border-amber-500/15 bg-[#080b10] px-5 py-5 lg:hidden animate-fadeIn"
          aria-label="Mobile navigation"
        >
          <div className="grid gap-3">
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


"use client";

import Link from "next/link";
import { useState } from "react";
import { storeCategories } from "@/data/storefront";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-500/15 bg-[#06080c]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Link
          href="/"
          className="font-serif text-base font-bold tracking-[0.18em] text-amber-100 sm:text-lg"
        >
          KASHI PRASAD
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {storeCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="text-xs uppercase tracking-wider text-zinc-400 transition hover:text-amber-300"
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-zinc-300">
          <button aria-label="Search" className="hidden text-sm sm:block">
            ⌕
          </button>
          <Link aria-label="Wishlist" href="/account#wishlist" className="hidden text-sm sm:block">
            ♡
          </Link>
          <Link aria-label="Account" href="/account" className="text-sm">
            ◯
          </Link>
          <Link aria-label="Cart" href="/cart" className="text-sm">
            Bag
          </Link>
          <button
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-lg"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="border-t border-zinc-800 px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-3">
            {storeCategories.map((category) => (
              <Link
                onClick={() => setOpen(false)}
                key={category.id}
                href={category.href}
                className="font-serif text-lg text-zinc-200"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

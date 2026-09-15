"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "./WishlistProvider";
import { useCart } from "./CartProvider";
import { useCurrency } from "./CurrencyProvider";
import { X, Heart, ShoppingBag, Trash2, Sparkles, ArrowRight } from "lucide-react";
import { playLuxuryHaptic } from "@/lib/audio";

export default function WishlistDrawer() {
  const { wishlist, removeFromWishlist, isWishlistOpen, setIsWishlistOpen, clearWishlist } =
    useWishlist();
  const { addItem, openCart } = useCart();
  const { formatPrice } = useCurrency();

  if (!isWishlistOpen) return null;

  const handleMoveToCart = (item: (typeof wishlist)[0]) => {
    addItem({
      productId: item.slug,
      slug: item.slug,
      name: item.name,
      image: item.image,
      category: item.category as any,
      variantId: "default",
      variantName: "Consecrated Selection",
      price: item.price,
      divineOffering: false,
    }, 1);
    removeFromWishlist(item.slug);
    playLuxuryHaptic();
    setIsWishlistOpen(false);
    openCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md border-l border-amber-500/20 bg-[#080b11] text-[#f5f5f7] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 px-6 py-4 bg-zinc-950/60">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Heart className="h-4 w-4 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <h2 className="font-serif text-base font-bold text-zinc-100">
                  Sacred Wishlist
                </h2>
                <p className="text-[11px] font-mono text-amber-400/80">
                  {wishlist.length} {wishlist.length === 1 ? "adornment" : "adornments"} saved
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsWishlistOpen(false)}
              className="rounded-full p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition cursor-pointer"
              aria-label="Close Wishlist"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {wishlist.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-600 mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-zinc-200">
                  Your Sacred Wishlist is Empty
                </h3>
                <p className="mt-2 text-xs text-zinc-400 max-w-xs leading-relaxed">
                  Save your favorite consecrated Ratnas, Rudrakshas and Malas by clicking the heart icon while exploring.
                </p>
                <button
                  type="button"
                  onClick={() => setIsWishlistOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-950 hover:bg-amber-400 transition cursor-pointer"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Explore Sacred Adornments
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlist.map((item) => (
                  <div
                    key={item.slug}
                    className="flex gap-3.5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3 hover:border-amber-500/30 transition group"
                  >
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={() => setIsWishlistOpen(false)}
                      className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-950 border border-zinc-800/60"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    <div className="flex flex-1 flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <Link
                            href={`/products/${item.slug}`}
                            onClick={() => setIsWishlistOpen(false)}
                            className="font-serif text-xs font-semibold text-zinc-100 hover:text-amber-300 line-clamp-2"
                          >
                            {item.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => removeFromWishlist(item.slug)}
                            className="text-zinc-500 hover:text-red-400 p-1 transition cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 capitalize">
                          {item.category}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-800/40">
                        <span className="font-serif text-sm font-bold text-amber-300">
                          {formatPrice(item.price)}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleMoveToCart(item)}
                          className="flex items-center gap-1.5 rounded-lg bg-amber-500/15 border border-amber-500/40 px-2.5 py-1 text-[11px] font-mono font-semibold text-amber-300 hover:bg-amber-500 hover:text-zinc-950 transition cursor-pointer"
                        >
                          <ShoppingBag className="h-3 w-3" />
                          Move to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="border-t border-zinc-800/80 bg-zinc-950/80 px-6 py-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Total Saved: {wishlist.length} Items</span>
                <button
                  type="button"
                  onClick={clearWishlist}
                  className="text-red-400 hover:underline text-[11px] cursor-pointer"
                >
                  Clear Wishlist
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

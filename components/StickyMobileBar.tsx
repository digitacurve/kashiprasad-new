"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingBag, Zap } from "lucide-react";

interface StickyMobileBarProps {
  image: string;
  name: string;
  variantName: string;
  price: number;
  mrp?: number;
  onAddToCart: () => void;
  onBuyNow: () => void;
  addedState?: boolean;
}

export default function StickyMobileBar({
  image,
  name,
  variantName,
  price,
  mrp,
  onAddToCart,
  onBuyNow,
  addedState = false,
}: StickyMobileBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 400px
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-amber-500/25 bg-[#07090d]/95 backdrop-blur-xl px-4 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.8)] animate-slideUp">
      <div className="flex items-center justify-between gap-3">
        {/* Product Info */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-amber-500/30 bg-zinc-950">
            <Image
              src={image}
              alt={name}
              fill
              sizes="44px"
              className="object-contain p-1"
            />
          </div>
          <div className="min-w-0">
            <p className="font-serif text-xs font-semibold text-zinc-100 truncate">
              {name}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="font-mono text-sm font-bold text-amber-300">
                ₹{price.toLocaleString("en-IN")}
              </span>
              {mrp && mrp > price && (
                <span className="text-[10px] text-zinc-500 line-through">
                  ₹{mrp.toLocaleString("en-IN")}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onAddToCart}
            className="flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-zinc-900/90 px-3 py-2 text-xs font-bold text-amber-200 active:scale-95 transition cursor-pointer"
            aria-label="Add to Bag"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span>{addedState ? "✓ Added" : "Bag"}</span>
          </button>
          <button
            onClick={onBuyNow}
            className="flex items-center gap-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_15px_rgba(223,171,82,0.4)] active:scale-95 transition cursor-pointer"
            aria-label="Buy Now"
          >
            <Zap className="h-3.5 w-3.5 fill-current" />
            <span>Buy</span>
          </button>
        </div>
      </div>
    </div>
  );
}

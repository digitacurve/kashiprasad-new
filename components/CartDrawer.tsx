"use client";

import { useEffect, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { useCurrency } from "@/components/CurrencyProvider";

const FREE_SHIPPING_THRESHOLD = 2000;

export default function CartDrawer() {
  const { items, totalItems, isCartOpen, closeCart, updateQuantity, removeItem } = useCart();
  const { formatPrice } = useCurrency();
  const router = useRouter();
  const [, startTransition] = useTransition();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const freeShippingLeft = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleCheckout = () => {
    closeCart();
    startTransition(() => {
      router.push("/checkout");
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-6 sm:pl-10">
        <aside
          aria-label="Shopping Cart Drawer"
          className="w-screen max-w-md transform border-l border-amber-500/20 bg-[#080a0e] shadow-2xl transition-transform duration-300 flex flex-col"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-amber-500/15 px-5 py-4 bg-[#0a0d13]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300">
                <ShoppingBag className="h-4 w-4" />
              </div>
              <div>
                <h2 className="font-serif text-base font-bold tracking-wide text-amber-100">
                  Sacred Bag
                </h2>
                <p className="text-[11px] text-zinc-400">
                  {totalItems} {totalItems === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="border-b border-amber-500/10 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-5 py-3">
            {freeShippingLeft > 0 ? (
              <div>
                <p className="text-xs text-amber-200/90 font-medium">
                  Add <span className="font-bold text-amber-300">{formatPrice(freeShippingLeft)}</span> more for <span className="text-emerald-400 font-semibold">FREE Express Shipping</span>
                </p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <Sparkles className="h-4 w-4 shrink-0 animate-spin-slow" />
                <span>🎉 You unlocked FREE Express Delivery from Varanasi!</span>
              </div>
            )}
          </div>

          {/* Drawer Body / Items List */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-16">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 mb-4">
                  <ShoppingBag className="h-10 w-10 stroke-[1.5]" />
                </div>
                <p className="font-serif text-lg font-medium text-zinc-200">
                  Your Sacred Bag is Empty
                </p>
                <p className="mt-1.5 text-xs text-zinc-400 max-w-xs leading-relaxed">
                  Discover authentic Malas, Nepali Rudrakshas, Vedic Ratnas, and Kashi Puja Services.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-amber-600/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-amber-200 hover:border-amber-400 transition"
                >
                  <span>Explore Collections</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.lineId}
                  className="group relative flex gap-3.5 rounded-xl border border-amber-500/15 bg-zinc-900/60 p-3.5 transition hover:border-amber-500/30"
                >
                  {/* Thumbnail */}
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-amber-500/20 bg-zinc-950">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-sm font-semibold text-zinc-100 line-clamp-1">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.lineId)}
                          className="text-zinc-500 hover:text-red-400 transition-colors p-0.5"
                          title="Remove item"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                        {item.variantName}
                      </p>
                      {item.divineOffering && (
                        <span className="inline-block mt-1 text-[10px] text-amber-400/90 font-mono tracking-wider bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                          ✦ Divine Offering Included
                        </span>
                      )}
                    </div>

                    <div className="mt-2.5 flex items-center justify-between">
                      {/* Price */}
                      <div className="text-sm font-bold text-amber-300">
                        {formatPrice(item.price * item.quantity)}
                        {item.quantity > 1 && (
                          <span className="text-[10px] font-normal text-zinc-500 ml-1.5">
                            ({formatPrice(item.price)} ea)
                          </span>
                        )}
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center rounded-lg border border-zinc-700 bg-zinc-950/90 px-1 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="p-1 text-zinc-400 hover:text-white transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-zinc-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="p-1 text-zinc-400 hover:text-white transition"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="border-t border-amber-500/20 bg-[#0a0d13] p-5 space-y-3.5">
              {/* Trust Tag */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>100% Certified Original • Ganga Purified • Safe Transit</span>
              </div>

              {/* Subtotal */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-300 font-medium">Subtotal</span>
                <span className="font-serif text-lg font-bold text-amber-300">
                  {formatPrice(subtotal)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid gap-2">
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] transition font-mono cursor-pointer"
                >
                  <span>Proceed to Sacred Checkout</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <div className="flex items-center justify-between px-1">
                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="text-xs text-zinc-400 hover:text-amber-300 underline underline-offset-4 transition"
                  >
                    View Detailed Cart Page
                  </Link>
                  <button
                    onClick={closeCart}
                    className="text-xs text-zinc-500 hover:text-zinc-300 transition cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import CommerceShell, { EmptyState } from "@/components/CommerceShell";

const FREE_SHIPPING_THRESHOLD = 2000;

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCart();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const freeShippingLeft = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <CommerceShell
      title="Sacred Offering Bag"
      copy="Review your consecrated malas, gemstones, and sacred puja items before checkout."
    >
      {items.length === 0 ? (
        <EmptyState
          message="Your sacred bag is waiting for its first holy offering."
          action={{ label: "Explore Collections", href: "/" }}
        />
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {/* Free Shipping Progress Indicator */}
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-4">
              {freeShippingLeft > 0 ? (
                <div>
                  <p className="text-xs sm:text-sm text-amber-200/90 font-medium">
                    Add <span className="font-bold text-amber-300">₹{freeShippingLeft.toLocaleString("en-IN")}</span> more to qualify for <span className="text-emerald-400 font-semibold">FREE Express Delivery</span>
                  </p>
                  <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400">
                  <Sparkles className="h-4 w-4 shrink-0 animate-spin-slow" />
                  <span>🎉 Your order qualifies for FREE Express Shipping from Varanasi!</span>
                </div>
              )}
            </div>

            {/* Items List */}
            {items.map((item) => (
              <article
                key={item.lineId}
                className="flex gap-4 rounded-2xl border border-amber-500/15 bg-zinc-950/70 p-4 sm:p-5 transition hover:border-amber-500/30"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-amber-500/20 bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                    sizes="96px"
                  />
                </div>
                <div className="min-w-0 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="font-serif text-base sm:text-lg font-bold text-zinc-100">
                        {item.name}
                      </h2>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                        title="Remove item"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      {item.variantName}
                    </p>
                    {item.divineOffering && (
                      <span className="inline-block mt-1 text-[10px] text-amber-400/90 font-mono tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        ✦ Sacred Varanasi Divine Offering
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-base font-bold text-amber-300">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      {item.quantity > 1 && (
                        <span className="text-[11px] font-normal text-zinc-500 ml-1.5 font-sans">
                          (₹{item.price.toLocaleString("en-IN")} ea)
                        </span>
                      )}
                    </p>
                    <div className="flex items-center rounded-lg border border-zinc-700 bg-zinc-900 px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                        className="p-1 text-zinc-400 hover:text-white transition cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-semibold text-zinc-100 font-mono">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                        className="p-1 text-zinc-400 hover:text-white transition cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar Summary */}
          <aside className="h-fit rounded-2xl border border-amber-500/20 bg-zinc-950/90 p-6 space-y-5">
            <p className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Order Summary
            </p>

            <div className="space-y-2.5 text-sm border-b border-zinc-800 pb-4">
              <div className="flex justify-between text-zinc-300">
                <span>Subtotal</span>
                <span className="font-mono font-semibold text-zinc-100">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-zinc-400 text-xs">
                <span>Estimated Shipping</span>
                <span className={freeShippingLeft === 0 ? "text-emerald-400 font-semibold" : "text-zinc-300"}>
                  {freeShippingLeft === 0 ? "FREE" : "Calculated at checkout"}
                </span>
              </div>
            </div>

            <div className="flex items-baseline justify-between text-base">
              <span className="font-semibold text-zinc-100">Estimated Total</span>
              <span className="font-serif text-xl font-bold text-amber-300 font-mono">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <Link
              href="/checkout"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] transition font-mono"
            >
              <span>Proceed to Sacred Checkout</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Sacred Guarantees */}
            <div className="space-y-2 border-t border-zinc-800/80 pt-4 text-[11px] text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>100% Certified Astrological Purity</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Express Dispatch direct from Kashi Ghats</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </CommerceShell>
  );
}


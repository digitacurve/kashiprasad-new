"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import CommerceShell, { EmptyState } from "@/components/CommerceShell";

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCart();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <CommerceShell
      title="Your cart"
      copy="Review the products and offering options you have selected."
    >
      {items.length === 0 ? (
        <EmptyState
          message="Your cart is waiting for its first sacred offering."
          action={{ label: "Explore products", href: "/" }}
        />
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-3">
            {items.map((item) => (
              <article
                key={item.lineId}
                className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4"
              >
                <div className="relative h-24 w-20 shrink-0 rounded-lg bg-zinc-900">
                  <Image src={item.image} alt="" fill className="object-contain p-2" sizes="80px" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-lg">{item.name}</h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    {item.variantName}
                    {item.divineOffering ? " · Divine Offering" : ""}
                  </p>
                  <p className="mt-2 text-sm text-amber-300">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                      className="text-zinc-400"
                    >
                      −
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                      className="text-zinc-400"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.lineId)}
                      className="ml-auto text-xs uppercase tracking-wider text-zinc-500 hover:text-red-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-amber-500/20 bg-zinc-950 p-6">
            <p className="text-xs uppercase tracking-widest text-amber-400">Order summary</p>
            <div className="mt-6 flex justify-between text-zinc-300">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Shipping and any coupon adjustment are calculated at checkout.
            </p>
            <Link
              href="/checkout"
              className="mt-6 block rounded-full bg-amber-400 px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-zinc-950"
            >
              Continue to checkout
            </Link>
          </aside>
        </div>
      )}
    </CommerceShell>
  );
}

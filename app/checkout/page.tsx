"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, ShieldCheck, Truck, Sparkles, ArrowRight, Plus, CreditCard, Banknote, User } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { useAuth, Address, PlacedOrder } from "@/components/AuthProvider";
import CommerceShell, { EmptyState } from "@/components/CommerceShell";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const { user, isLoggedIn, openAuthModal, placeOrder } = useAuth();

  const [selectedAddressId, setSelectedAddressId] = useState<string>(
    user?.addresses.find((a) => a.isDefault)?.id || user?.addresses[0]?.id || ""
  );

  // Guest Address State (if user prefers not logging in)
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestAddress, setGuestAddress] = useState("");
  const [guestCity, setGuestCity] = useState("Varanasi");
  const [guestState, setGuestState] = useState("Uttar Pradesh");
  const [guestPincode, setGuestPincode] = useState("221001");

  const [paymentMethod, setPaymentMethod] = useState<"COD" | "UPI">("COD");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<PlacedOrder | null>(null);

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = subtotal >= 2000 ? 0 : 99;
  const totalAmount = subtotal + shippingFee;

  // Selected address object
  const activeAddress: Address | null = isLoggedIn && user
    ? user.addresses.find((a) => a.id === selectedAddressId) || user.addresses[0] || null
    : guestName && guestPhone && guestAddress
    ? {
        id: "guest",
        fullName: guestName,
        phone: guestPhone,
        addressLine: guestAddress,
        city: guestCity,
        state: guestState,
        pincode: guestPincode,
      }
    : null;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!activeAddress) {
      if (!isLoggedIn) {
        alert("Please enter delivery address details or log in.");
      } else {
        alert("Please select or add a delivery address.");
      }
      return;
    }

    setIsPlacingOrder(true);
    setTimeout(() => {
      const order = placeOrder({
        total: totalAmount,
        items: items.map((i) => ({
          name: i.name,
          variantName: i.variantName,
          price: i.price,
          quantity: i.quantity,
          image: i.image,
        })),
        shippingAddress: activeAddress,
        paymentMethod,
      });

      setConfirmedOrder(order);
      clearCart();
      setIsPlacingOrder(false);
    }, 800);
  };

  // If Order is Confirmed -> Show Success State
  if (confirmedOrder) {
    return (
      <CommerceShell
        title="Sacred Order Confirmed"
        copy="Har Har Mahadev! Your consecrated offering order has been successfully placed."
      >
        <div className="mt-8 max-w-2xl mx-auto rounded-3xl border border-amber-500/30 bg-zinc-950/90 p-6 sm:p-10 shadow-2xl text-center space-y-6">
          <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Order ID: {confirmedOrder.orderNumber}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-100 mt-3">
              Blessed Offering Confirmed
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
              Your sacred items will be purified with holy Ganga Jal and consecrated before express dispatch from Varanasi.
            </p>
          </div>

          {/* Delivery & Address Summary Card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-5 text-left text-xs space-y-2.5">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Delivering to:</span>
              <span className="font-semibold text-zinc-200">
                {confirmedOrder.shippingAddress.fullName} (+91 {confirmedOrder.shippingAddress.phone})
              </span>
            </div>
            <p className="text-zinc-300">
              {confirmedOrder.shippingAddress.addressLine}, {confirmedOrder.shippingAddress.city} -{" "}
              {confirmedOrder.shippingAddress.pincode}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-amber-300 font-mono">
              <span>Payment Mode: {confirmedOrder.paymentMethod}</span>
              <span className="text-sm font-bold">Total: ₹{confirmedOrder.total.toLocaleString("en-IN")}</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/account"
              className="rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-md font-mono hover:brightness-110 transition"
            >
              View in My Orders
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:border-zinc-500 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </CommerceShell>
    );
  }

  // If Cart is Empty
  if (items.length === 0) {
    return (
      <CommerceShell
        title="Checkout"
        copy="Review delivery address and payment for your sacred offerings."
      >
        <EmptyState
          message="Your cart is currently empty. Please add offerings to proceed to checkout."
          action={{ label: "Explore Store", href: "/" }}
        />
      </CommerceShell>
    );
  }

  return (
    <CommerceShell
      title="Sacred Checkout"
      copy="Complete your consecrated offering order with 1-click address selection & secure checkout."
    >
      <form onSubmit={handleCompleteOrder} className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Left Column: Delivery Address & Payment */}
        <div className="space-y-6">
          {/* 1. Login Banner for Flipkart Style Pre-Fill */}
          {!isLoggedIn ? (
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-amber-400" />
                  <h3 className="font-serif text-sm sm:text-base font-bold text-amber-200">
                    Already have an account?
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Sign in with Mobile OTP to auto-fill your saved addresses and track sacred orders.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openAuthModal()}
                className="shrink-0 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-950 font-mono shadow-md hover:brightness-110 transition cursor-pointer"
              >
                Login with OTP
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-3.5 px-4 flex items-center justify-between text-xs text-emerald-300 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Logged in as <strong>{user?.name}</strong> (+91 {user?.phone})</span>
              </div>
              <Link href="/account" className="text-amber-400 hover:underline">
                Manage Profile
              </Link>
            </div>
          )}

          {/* 2. Delivery Address Selection */}
          <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                <h3 className="font-serif text-base font-bold text-zinc-100">
                  1. Delivery Address
                </h3>
              </div>
              {isLoggedIn && (
                <Link
                  href="/account"
                  className="text-xs font-mono text-amber-400 hover:underline"
                >
                  + Add New Address
                </Link>
              )}
            </div>

            {isLoggedIn && user && user.addresses.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {user.addresses.map((addr) => {
                  const isSelected = (selectedAddressId || user.addresses[0]?.id) === addr.id;
                  return (
                    <div
                      key={addr.id}
                      onClick={() => setSelectedAddressId(addr.id)}
                      className={`cursor-pointer rounded-xl border p-4 transition ${
                        isSelected
                          ? "border-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(223,171,82,0.15)] ring-1 ring-amber-400"
                          : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-serif text-sm font-bold text-zinc-100">
                          {addr.fullName}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-mono text-amber-300 font-bold">
                            ✓ SELECTED
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-300 line-clamp-2">
                        {addr.addressLine}
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">
                        {addr.city}, {addr.state} — {addr.pincode}
                      </p>
                      <p className="text-[11px] font-mono text-zinc-400 mt-2">
                        Phone: +91 {addr.phone}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              // Guest Address Inputs
              <div className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Receiver's name"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value.replace(/\D/g, ""))}
                      placeholder="10-digit phone"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    Complete Address *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={guestAddress}
                    onChange={(e) => setGuestAddress(e.target.value)}
                    placeholder="House/Flat No., Street, Area"
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={guestCity}
                      onChange={(e) => setGuestCity(e.target.value)}
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">State *</label>
                    <input
                      type="text"
                      required
                      value={guestState}
                      onChange={(e) => setGuestState(e.target.value)}
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">Pincode *</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={guestPincode}
                      onChange={(e) => setGuestPincode(e.target.value.replace(/\D/g, ""))}
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Payment Method */}
          <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Banknote className="h-4 w-4 text-amber-400" />
              <h3 className="font-serif text-base font-bold text-zinc-100">
                2. Select Payment Option
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label
                className={`cursor-pointer flex items-center justify-between p-4 rounded-xl border transition ${
                  paymentMethod === "COD"
                    ? "border-amber-400 bg-amber-500/10 shadow-md"
                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                    className="text-amber-400 focus:ring-0"
                  />
                  <div>
                    <span className="font-serif text-sm font-semibold text-zinc-100 block">
                      Cash on Delivery (COD)
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      Pay safely upon consecrated delivery
                    </span>
                  </div>
                </div>
                <Banknote className="h-5 w-5 text-amber-300 shrink-0" />
              </label>

              <label
                className={`cursor-pointer flex items-center justify-between p-4 rounded-xl border transition ${
                  paymentMethod === "UPI"
                    ? "border-amber-400 bg-amber-500/10 shadow-md"
                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    checked={paymentMethod === "UPI"}
                    onChange={() => setPaymentMethod("UPI")}
                    className="text-amber-400 focus:ring-0"
                  />
                  <div>
                    <span className="font-serif text-sm font-semibold text-zinc-100 block">
                      Online UPI / Cards / NetBanking
                    </span>
                    <span className="text-[11px] text-emerald-400 font-medium">
                      Instant verification & Priority dispatch
                    </span>
                  </div>
                </div>
                <CreditCard className="h-5 w-5 text-amber-300 shrink-0" />
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Action */}
        <aside className="h-fit rounded-2xl border border-amber-500/20 bg-zinc-950/90 p-6 space-y-5">
          <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400">
            Order Items ({items.length})
          </h3>

          {/* Items Preview */}
          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {items.map((item) => (
              <div key={item.lineId} className="flex gap-3 text-xs">
                <div className="relative h-12 w-12 shrink-0 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-1" sizes="48px" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-serif font-semibold text-zinc-100 truncate">{item.name}</p>
                  <p className="text-[11px] text-zinc-400">Qty: {item.quantity}</p>
                  <p className="font-mono text-amber-300 font-bold mt-0.5">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 border-t border-zinc-800 pt-4 text-xs">
            <div className="flex justify-between text-zinc-300">
              <span>Items Subtotal</span>
              <span className="font-mono">₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span>Shipping Fee</span>
              <span className={shippingFee === 0 ? "text-emerald-400 font-semibold" : "font-mono"}>
                {shippingFee === 0 ? "FREE" : `₹${shippingFee}`}
              </span>
            </div>
            <div className="flex items-baseline justify-between pt-2 border-t border-zinc-800 text-sm">
              <span className="font-bold text-zinc-100">Total Payable</span>
              <span className="font-serif text-xl font-bold text-amber-300 font-mono">
                ₹{totalAmount.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPlacingOrder}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] transition font-mono cursor-pointer disabled:opacity-50"
          >
            {isPlacingOrder ? (
              <span>Placing Sacred Order...</span>
            ) : (
              <>
                <span>Place Sacred Order</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>

          <div className="space-y-2 border-t border-zinc-800/80 pt-4 text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>100% Consecrated Authenticity Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>Dispatched with Sacred Vedic Packaging</span>
            </div>
          </div>
        </aside>
      </form>
    </CommerceShell>
  );
}

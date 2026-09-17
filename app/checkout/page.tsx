"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  Plus,
  CreditCard,
  Banknote,
  User,
  AlertCircle,
  Loader2,
  MessageCircle,
} from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { useAuth, Address, PlacedOrder } from "@/components/AuthProvider";
import CommerceShell, { EmptyState } from "@/components/CommerceShell";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const { user, isLoggedIn, openAuthModal, placeOrder, saveAddress } = useAuth();

  const [selectedAddressId, setSelectedAddressId] = useState<string>(
    user?.addresses.find((a) => a.isDefault)?.id || user?.addresses[0]?.id || ""
  );

  // Inline Add Address for Logged-In User
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
  const [newAddrName, setNewAddrName] = useState(user?.name || "");
  const [newAddrPhone, setNewAddrPhone] = useState(user?.phone || "");
  const [newAddrAltPhone, setNewAddrAltPhone] = useState("");
  const [newAddrLine, setNewAddrLine] = useState("");
  const [newAddrLandmark, setNewAddrLandmark] = useState("");
  const [newAddrCity, setNewAddrCity] = useState("Varanasi");
  const [newAddrState, setNewAddrState] = useState("Uttar Pradesh");
  const [newAddrPincode, setNewAddrPincode] = useState("221001");

  // Guest Address State (if user prefers not logging in)
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestAltPhone, setGuestAltPhone] = useState("");
  const [guestAddress, setGuestAddress] = useState("");
  const [guestLandmark, setGuestLandmark] = useState("");
  const [guestCity, setGuestCity] = useState("Varanasi");
  const [guestState, setGuestState] = useState("Uttar Pradesh");
  const [guestPincode, setGuestPincode] = useState("221001");

  // Puja Sankalp & Delivery Instructions Note
  const [sankalpNotes, setSankalpNotes] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<"COD" | "UPI">("COD");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<PlacedOrder | null>(null);

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = subtotal >= 2000 ? 0 : 99;
  const totalAmount = subtotal + shippingFee;

  // 20% Advance for Cash on Delivery (COD)
  const codAdvanceAmount = Math.max(1, Math.round(totalAmount * 0.2));
  const codBalanceAmount = totalAmount - codAdvanceAmount;

  // Handle saving new inline address for logged in user
  const handleSaveInlineAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAddrName.trim() || newAddrPhone.length !== 10 || !newAddrLine.trim() || !newAddrCity.trim() || newAddrPincode.length !== 6) {
      alert("Please fill all required delivery details with valid 10-digit phone and 6-digit pincode.");
      return;
    }

    const addrId = `addr_${Date.now()}`;
    saveAddress({
      fullName: newAddrName.trim(),
      phone: newAddrPhone.trim(),
      alternatePhone: newAddrAltPhone.trim() || undefined,
      addressLine: newAddrLine.trim(),
      landmark: newAddrLandmark.trim() || undefined,
      city: newAddrCity.trim(),
      state: newAddrState.trim(),
      pincode: newAddrPincode.trim(),
      isDefault: true,
    }, addrId);

    setSelectedAddressId(addrId);
    setIsAddingNewAddress(false);
  };

  // Selected address object
  const activeAddress: Address | null =
    isLoggedIn && user
      ? user.addresses.find((a) => a.id === selectedAddressId) || user.addresses[0] || (isAddingNewAddress && newAddrLine && newAddrPhone.length === 10 ? {
          id: "temp",
          fullName: newAddrName,
          phone: newAddrPhone,
          alternatePhone: newAddrAltPhone || undefined,
          addressLine: newAddrLine,
          landmark: newAddrLandmark || undefined,
          city: newAddrCity,
          state: newAddrState,
          pincode: newAddrPincode,
        } : null)
      : guestName && guestPhone && guestAddress
        ? {
            id: "guest",
            fullName: guestName,
            phone: guestPhone,
            alternatePhone: guestAltPhone || undefined,
            addressLine: guestAddress,
            landmark: guestLandmark || undefined,
            city: guestCity,
            state: guestState,
            pincode: guestPincode,
          }
        : null;

  const handleCompleteOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentError(null);

    if (!activeAddress) {
      if (!isLoggedIn) {
        setPaymentError("Please provide all required delivery details (Name, 10-digit mobile, address & 6-digit pincode).");
      } else {
        setPaymentError("Please select or add a valid delivery address with 10-digit phone.");
      }
      return;
    }

    if (activeAddress.phone.replace(/\D/g, "").length !== 10) {
      setPaymentError("Receiver's primary mobile number must be exactly 10 digits for courier delivery.");
      return;
    }

    if (activeAddress.pincode.replace(/\D/g, "").length !== 6) {
      setPaymentError("Please enter a valid 6-digit postal pincode.");
      return;
    }

    // Both COD (20% Advance) and Full Online (100%) go through Razorpay secure gateway
    try {
      setIsPlacingOrder(true);
      const amountToCharge = paymentMethod === "COD" ? codAdvanceAmount : totalAmount;
      const amountInPaise = Math.round(amountToCharge * 100);

      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: "INR",
          receipt: (paymentMethod === "COD" ? "rcpt_codadv_" : "rcpt_prepaid_") + Date.now(),
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to create payment order");
      }

      const { order_id } = await res.json();

      if (typeof window === "undefined" || !(window as any).Razorpay) {
        throw new Error("Razorpay SDK could not be loaded. Please refresh or check connection.");
      }

      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      const options = {
        key: keyId,
        amount: amountInPaise,
        currency: "INR",
        name: "Kashi Prasad",
        description:
          paymentMethod === "COD"
            ? `20% Advance Booking (₹${codBalanceAmount.toLocaleString("en-IN")} due on delivery)`
            : items.map((i) => i.name).join(", "),
        order_id: order_id,
        handler: async function (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) {
          try {
            setIsPlacingOrder(true);
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            if (!verifyRes.ok) {
              const verifyErr = await verifyRes.json();
              throw new Error(verifyErr.error || "Payment signature verification failed");
            }

            const notesText = [
              paymentMethod === "COD"
                ? `20% Advance of ₹${amountToCharge} received via Razorpay (Txn ID: ${response.razorpay_payment_id}). Cash on delivery balance: ₹${codBalanceAmount}.`
                : `100% Prepaid via Razorpay (Txn ID: ${response.razorpay_payment_id}).`,
              sankalpNotes ? `Devotee Sankalp / Delivery Notes: ${sankalpNotes}` : "",
              activeAddress.alternatePhone ? `Alt / WhatsApp Contact: +91 ${activeAddress.alternatePhone}` : "",
              activeAddress.landmark ? `Landmark: ${activeAddress.landmark}` : "",
            ].filter(Boolean).join(" | ");

            const order = placeOrder({
              total: totalAmount,
              advancePaid: amountToCharge,
              balanceDue: paymentMethod === "COD" ? codBalanceAmount : 0,
              notes: notesText,
              items: items.map((i) => ({
                name: i.name,
                variantName: i.variantName,
                price: i.price,
                quantity: i.quantity,
                image: i.image,
              })),
              shippingAddress: activeAddress,
              paymentMethod: paymentMethod === "COD" ? "COD (20% Advance Paid)" : "UPI",
            });

            setConfirmedOrder(order);
            clearCart();
            setIsPlacingOrder(false);
          } catch (vErr: any) {
            setPaymentError(vErr.message || "Payment verification failed");
            setIsPlacingOrder(false);
          }
        },
        prefill: {
          name: activeAddress.fullName,
          contact: activeAddress.phone,
        },
        notes: {
          address: activeAddress.addressLine,
          landmark: activeAddress.landmark || "",
          city: activeAddress.city,
          pincode: activeAddress.pincode,
          alternate_phone: activeAddress.alternatePhone || "",
          sankalp_notes: sankalpNotes || "",
          payment_type: paymentMethod === "COD" ? "COD_20_PERCENT_ADVANCE" : "FULL_PREPAID",
        },
        theme: {
          color: "#D97706",
        },
        modal: {
          ondismiss: function () {
            setIsPlacingOrder(false);
            setPaymentError("Payment process cancelled by user.");
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (response: any) {
        setIsPlacingOrder(false);
        setPaymentError(
          "Payment failed: " + (response.error?.description || "Transaction declined")
        );
      });
      rzp.open();
    } catch (payErr: any) {
      setPaymentError(payErr.message || "Could not initialize online payment gateway");
      setIsPlacingOrder(false);
    }
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
              Your sacred items will be purified with holy Ganga Jal and consecrated before express
              dispatch from Varanasi.
            </p>
          </div>

          {/* Delivery & Address Summary Card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-5 text-left text-xs space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Delivering to:</span>
              <span className="font-semibold text-zinc-200">
                {confirmedOrder.shippingAddress.fullName} (+91{" "}
                {confirmedOrder.shippingAddress.phone})
              </span>
            </div>
            <p className="text-zinc-300">
              {confirmedOrder.shippingAddress.addressLine}, {confirmedOrder.shippingAddress.city} -{" "}
              {confirmedOrder.shippingAddress.pincode}
            </p>

            <div className="pt-2 border-t border-zinc-800 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-zinc-400">
                <span>Payment Mode:</span>
                <span className="text-zinc-200 font-semibold">{confirmedOrder.paymentMethod}</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>Total Order Value:</span>
                <span className="text-zinc-200 font-semibold">
                  ₹{confirmedOrder.total.toLocaleString("en-IN")}
                </span>
              </div>
              {confirmedOrder.advancePaid !== undefined &&
              confirmedOrder.balanceDue !== undefined &&
              confirmedOrder.balanceDue > 0 ? (
                <>
                  <div className="flex items-center justify-between text-emerald-400 font-medium">
                    <span>✓ Advance Paid (20% Online):</span>
                    <span>₹{confirmedOrder.advancePaid.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex items-center justify-between text-amber-300 font-bold bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/25">
                    <span>💵 Cash Payable on Delivery (80%):</span>
                    <span className="text-sm">
                      ₹{confirmedOrder.balanceDue.toLocaleString("en-IN")}
                    </span>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-between text-emerald-400 font-semibold">
                  <span>Payment Status:</span>
                  <span>100% Paid Online (Prepaid)</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href={`/track-order?id=${confirmedOrder.orderNumber}`}
              className="rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-md font-mono hover:brightness-110 transition flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Track Consecration
            </Link>
            <a
              href={`https://wa.me/918604971503?text=${encodeURIComponent(
                `Har Har Mahadev! 🙏\n\nI have placed an order on Kashi Prasad.\nOrder ID: ${confirmedOrder.orderNumber}\nName: ${confirmedOrder.shippingAddress.fullName}\nTotal: ₹${confirmedOrder.total.toLocaleString("en-IN")}\nPayment Mode: ${confirmedOrder.paymentMethod}${confirmedOrder.balanceDue && confirmedOrder.balanceDue > 0 ? `\nAdvance Paid: ₹${confirmedOrder.advancePaid}\nDue on Delivery: ₹${confirmedOrder.balanceDue}` : "\nStatus: 100% Prepaid"}\n\nPlease share sanctification & dispatch updates.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-xs font-mono uppercase tracking-wider text-emerald-300 hover:bg-emerald-500/20 transition flex items-center gap-1.5"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
              WhatsApp Updates
            </a>
            <Link
              href="/account"
              className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:border-zinc-500 transition"
            >
              View in My Orders
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-3 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-zinc-200 transition"
            >
              Back to Store
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
      title="Secure Checkout"
      copy="Complete your address and payment details to receive consecrated spiritual offerings from Varanasi."
    >
      <form onSubmit={handleCompleteOrder} className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Left Columns: Address & Payment */}
        <div className="space-y-6 lg:col-span-2">
          {/* 1. Account / Guest Status Banner */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-amber-400" />
                <h3 className="font-serif text-base font-bold text-zinc-100">Account Status</h3>
              </div>
              {!isLoggedIn ? (
                <button
                  type="button"
                  onClick={() => openAuthModal()}
                  className="rounded-lg border border-amber-400/40 bg-amber-500/10 px-3 py-1.5 text-xs font-mono font-medium text-amber-300 hover:bg-amber-500/20 transition cursor-pointer"
                >
                  Log In for Saved Addresses
                </button>
              ) : (
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  Logged in as {user?.name || "Devotee"}
                </span>
              )}
            </div>

            {!isLoggedIn && (
              <p className="text-xs text-zinc-400 leading-relaxed">
                You can proceed as a guest below. Logging in saves your consecrated orders and
                addresses automatically to your personal account.
              </p>
            )}
          </div>

          {/* 2. Delivery Address Selection */}
          <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                <h3 className="font-serif text-base font-bold text-zinc-100">
                  1. Delivery Address
                </h3>
              </div>
              {isLoggedIn && user && user.addresses.length > 0 && (
                <button
                  type="button"
                  onClick={() => setIsAddingNewAddress(!isAddingNewAddress)}
                  className="text-xs font-mono text-amber-400 hover:underline cursor-pointer"
                >
                  {isAddingNewAddress ? "← Select Saved Address" : "+ Add New Address"}
                </button>
              )}
            </div>

            {/* Logged in User with Saved Addresses */}
            {isLoggedIn && user && user.addresses.length > 0 && !isAddingNewAddress ? (
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
                      <p className="text-xs text-zinc-300 line-clamp-2">{addr.addressLine}</p>
                      {addr.landmark && (
                        <p className="text-[11px] text-zinc-400 mt-0.5">Landmark: {addr.landmark}</p>
                      )}
                      <p className="text-xs text-zinc-400 mt-1">
                        {addr.city}, {addr.state} —{" "}
                        <span className="font-mono text-amber-200 font-semibold">{addr.pincode}</span>
                      </p>
                      <div className="text-[11px] font-mono text-zinc-400 mt-2 space-y-0.5">
                        <p>Phone: +91 {addr.phone}</p>
                        {addr.alternatePhone && (
                          <p className="text-zinc-500">Alt: +91 {addr.alternatePhone}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : isLoggedIn && isAddingNewAddress ? (
              /* Inline Address Form for Logged In User */
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-mono text-amber-300">Enter New Delivery Details:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newAddrName}
                      onChange={(e) => setNewAddrName(e.target.value)}
                      placeholder="Receiver's name"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Mobile Number (10-Digit) *
                    </label>
                    <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-900 focus-within:border-amber-400 overflow-hidden">
                      <span className="px-2.5 text-xs font-mono text-amber-300 border-r border-zinc-700 bg-zinc-900/90">+91</span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={newAddrPhone}
                        onChange={(e) => setNewAddrPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="10-digit number"
                        className="w-full bg-transparent px-2.5 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Alternate Mobile / WhatsApp (Optional)
                    </label>
                    <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-900 focus-within:border-amber-400 overflow-hidden">
                      <span className="px-2.5 text-xs font-mono text-zinc-400 border-r border-zinc-700 bg-zinc-900/90">+91</span>
                      <input
                        type="tel"
                        maxLength={10}
                        value={newAddrAltPhone}
                        onChange={(e) => setNewAddrAltPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="Optional secondary phone"
                        className="w-full bg-transparent px-2.5 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Famous Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      value={newAddrLandmark}
                      onChange={(e) => setNewAddrLandmark(e.target.value)}
                      placeholder="Near temple, school, or metro"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    House / Flat No., Building Name, Street & Area *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={newAddrLine}
                    onChange={(e) => setNewAddrLine(e.target.value)}
                    placeholder="e.g. Flat 402, Ganga Heights, Dashashwamedh Ghat Road"
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">City / District *</label>
                    <input
                      type="text"
                      required
                      value={newAddrCity}
                      onChange={(e) => setNewAddrCity(e.target.value)}
                      placeholder="City"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">State *</label>
                    <input
                      type="text"
                      required
                      value={newAddrState}
                      onChange={(e) => setNewAddrState(e.target.value)}
                      placeholder="State"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">Pincode (6-Digit) *</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={newAddrPincode}
                      onChange={(e) => setNewAddrPincode(e.target.value.replace(/\D/g, ""))}
                      placeholder="e.g. 221001"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-amber-400 focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleSaveInlineAddress}
                    className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-950 font-mono hover:brightness-110 transition cursor-pointer"
                  >
                    Save Address to Profile
                  </button>
                  {user && user.addresses.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setIsAddingNewAddress(false)}
                      className="text-xs font-mono text-zinc-400 hover:text-zinc-200"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Guest Address Form */
              <div className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Receiver Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Primary Mobile Number *
                    </label>
                    <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-900 focus-within:border-amber-400 overflow-hidden">
                      <span className="px-2.5 text-xs font-mono text-amber-300 border-r border-zinc-700 bg-zinc-900/90">+91</span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="10-digit mobile"
                        className="w-full bg-transparent px-2.5 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Alternate Mobile / WhatsApp (Optional)
                    </label>
                    <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-900 focus-within:border-amber-400 overflow-hidden">
                      <span className="px-2.5 text-xs font-mono text-zinc-400 border-r border-zinc-700 bg-zinc-900/90">+91</span>
                      <input
                        type="tel"
                        maxLength={10}
                        value={guestAltPhone}
                        onChange={(e) => setGuestAltPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="Secondary contact"
                        className="w-full bg-transparent px-2.5 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Famous Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      value={guestLandmark}
                      onChange={(e) => setGuestLandmark(e.target.value)}
                      placeholder="Near temple, school, hospital"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    Complete Street Address / House No. / Building *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={guestAddress}
                    onChange={(e) => setGuestAddress(e.target.value)}
                    placeholder="House/Flat No., Building Name, Street, Area"
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">City / District *</label>
                    <input
                      type="text"
                      required
                      value={guestCity}
                      onChange={(e) => setGuestCity(e.target.value)}
                      placeholder="City"
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
                      placeholder="State"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">Pincode (6-Digit) *</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={guestPincode}
                      onChange={(e) => setGuestPincode(e.target.value.replace(/\D/g, ""))}
                      placeholder="e.g. 221001"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-amber-400 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Special Puja Sankalp & Delivery Instructions Note */}
            <div className="pt-2 border-t border-zinc-800/80">
              <label className="text-xs font-mono text-amber-300 block mb-1">
                ✦ Puja Sankalp / Delivery Instructions (Optional)
              </label>
              <input
                type="text"
                value={sankalpNotes}
                onChange={(e) => setSankalpNotes(e.target.value)}
                placeholder="e.g. Sankalp in the name of Sharma family (Kashyap Gotra) or Call before delivery"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          {/* 3. Payment Method */}
          <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Banknote className="h-4 w-4 text-amber-400" />
              <h3 className="font-serif text-base font-bold text-zinc-100">
                2. Select Payment Option
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* COD with 20% Advance */}
              <label
                className={`cursor-pointer relative flex flex-col justify-between p-4 rounded-xl border transition ${
                  paymentMethod === "COD"
                    ? "border-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(223,171,82,0.15)] ring-1 ring-amber-400"
                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="COD"
                      checked={paymentMethod === "COD"}
                      onChange={() => setPaymentMethod("COD")}
                      className="text-amber-400 focus:ring-0 mt-0.5"
                    />
                    <div>
                      <span className="font-serif text-sm font-bold text-zinc-100 block">
                        COD (20% Advance Booking)
                      </span>
                      <span className="text-[11px] text-amber-300 font-medium block mt-0.5 font-mono">
                        Pay ₹{codAdvanceAmount.toLocaleString("en-IN")} now • ₹
                        {codBalanceAmount.toLocaleString("en-IN")} on delivery
                      </span>
                      <span className="text-[10px] text-zinc-400 block mt-1 leading-snug">
                        20% advance confirms consecrated preparation & express courier. Remaining
                        80% payable in cash at your doorstep.
                      </span>
                    </div>
                  </div>
                  <Banknote className="h-5 w-5 text-amber-300 shrink-0 mt-0.5" />
                </div>
                {paymentMethod === "COD" && (
                  <div className="mt-3 pt-2.5 border-t border-amber-500/20 text-[10px] text-amber-200/90 flex items-center gap-1.5 font-mono">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span>
                      Pay ₹{codAdvanceAmount.toLocaleString("en-IN")} online via Razorpay to
                      confirm.
                    </span>
                  </div>
                )}
              </label>

              {/* 100% Online Payment */}
              <label
                className={`cursor-pointer relative flex flex-col justify-between p-4 rounded-xl border transition ${
                  paymentMethod === "UPI"
                    ? "border-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(223,171,82,0.15)] ring-1 ring-amber-400"
                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="UPI"
                      checked={paymentMethod === "UPI"}
                      onChange={() => setPaymentMethod("UPI")}
                      className="text-amber-400 focus:ring-0 mt-0.5"
                    />
                    <div>
                      <span className="font-serif text-sm font-bold text-zinc-100 block">
                        100% Online Payment
                      </span>
                      <span className="text-[11px] text-emerald-400 font-medium block mt-0.5">
                        Instant Razorpay UPI / Cards / NetBanking
                      </span>
                      <span className="text-[10px] text-zinc-400 block mt-1 leading-snug">
                        Full prepaid offering with zero doorstep payment hassle. Priority temple
                        sanctification.
                      </span>
                    </div>
                  </div>
                  <CreditCard className="h-5 w-5 text-amber-300 shrink-0 mt-0.5" />
                </div>
                {paymentMethod === "UPI" && (
                  <div className="mt-3 pt-2.5 border-t border-emerald-500/20 text-[10px] text-emerald-300/90 flex items-center gap-1.5 font-mono">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Instant 100% verification & priority dispatch.</span>
                  </div>
                )}
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
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-1"
                    sizes="48px"
                  />
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
              <span className="font-bold text-zinc-100">Total Order Value</span>
              <span className="font-serif text-lg font-bold text-zinc-100 font-mono">
                ₹{totalAmount.toLocaleString("en-IN")}
              </span>
            </div>

            {paymentMethod === "COD" ? (
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 space-y-2 mt-2">
                <div className="flex items-center justify-between text-amber-300 font-bold">
                  <span className="text-xs">Payable Now (20% Advance):</span>
                  <span className="font-mono text-base">
                    ₹{codAdvanceAmount.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex items-center justify-between text-zinc-400 text-[11px] border-t border-amber-500/20 pt-1.5">
                  <span>Cash Due at Delivery (80%):</span>
                  <span className="font-mono text-zinc-300 font-medium">
                    ₹{codBalanceAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 flex items-center justify-between text-emerald-300 text-xs font-bold mt-2">
                <span>Payable Now (100% Online):</span>
                <span className="font-mono text-base">₹{totalAmount.toLocaleString("en-IN")}</span>
              </div>
            )}
          </div>

          {paymentError && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300 flex items-start gap-2.5">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
              <span>{paymentError}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isPlacingOrder}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] transition font-mono cursor-pointer disabled:opacity-50"
          >
            {isPlacingOrder ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                {paymentMethod === "COD"
                  ? `Opening Razorpay for ₹${codAdvanceAmount.toLocaleString("en-IN")} Advance...`
                  : `Opening Razorpay for ₹${totalAmount.toLocaleString("en-IN")}...`}
              </span>
            ) : (
              <>
                <span>
                  {paymentMethod === "COD"
                    ? `Pay ₹${codAdvanceAmount.toLocaleString("en-IN")} Advance & Confirm COD`
                    : `Pay ₹${totalAmount.toLocaleString("en-IN")} Online (Full)`}
                </span>
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
            <p className="text-[10px] text-zinc-600 leading-tight text-center pt-2 border-t border-zinc-800/40">
              By placing order, you agree to our{" "}
              <Link href="/refund-policy" className="underline hover:text-zinc-400">
                Terms of Supply & Sacred Policy
              </Link>
              . (Images are illustrative; items non-returnable; transit damages 100% replaced).
            </p>
          </div>
        </aside>
      </form>
    </CommerceShell>
  );
}

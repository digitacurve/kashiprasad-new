"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Phone,
  MapPin,
  Package,
  ShieldCheck,
  Plus,
  Trash2,
  CheckCircle2,
  LogOut,
  Sparkles,
  ArrowRight,
  Edit3,
} from "lucide-react";
import { useAuth, Address } from "@/components/AuthProvider";
import CommerceShell, { EmptyState } from "@/components/CommerceShell";

export default function AccountPage() {
  const {
    user,
    isLoggedIn,
    openAuthModal,
    logout,
    orders,
    saveAddress,
    deleteAddress,
    setDefaultAddress,
    updateProfile,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<"orders" | "addresses" | "profile">("orders");
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);

  // Address form states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Uttar Pradesh");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");
  const [isDefault, setIsDefault] = useState(false);

  // Profile form states
  const [profileName, setProfileName] = useState(user?.name || "");
  const [profileSaved, setProfileSaved] = useState(false);

  if (!isLoggedIn || !user) {
    return (
      <CommerceShell
        title="Devotee Account"
        copy="Sign in to view your sacred consecrated orders, saved delivery addresses, and profile details."
      >
        <div className="mt-10 max-w-md mx-auto text-center rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-8 shadow-2xl">
          <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 mb-4">
            <User className="h-8 w-8" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-zinc-100">Welcome to Kashi Prasad</h2>
          <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
            Please log in with your mobile number to view past orders, track sacred deliveries, and
            manage your delivery addresses.
          </p>
          <button
            onClick={() => openAuthModal()}
            className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] transition font-mono cursor-pointer"
          >
            <span>Login with Mobile & OTP</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </CommerceShell>
    );
  }

  const handleSaveAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !addressLine || !city || !pincode) return;

    saveAddress(
      {
        fullName,
        phone,
        addressLine,
        city,
        state,
        pincode,
        landmark,
        isDefault,
      },
      editingAddressId || undefined
    );

    setIsAddingAddress(false);
    setEditingAddressId(null);
    // Reset form
    setFullName("");
    setPhone("");
    setAddressLine("");
    setCity("");
    setPincode("");
    setLandmark("");
    setIsDefault(false);
  };

  const handleEditAddress = (addr: Address) => {
    setEditingAddressId(addr.id);
    setFullName(addr.fullName);
    setPhone(addr.phone);
    setAddressLine(addr.addressLine);
    setCity(addr.city);
    setState(addr.state);
    setPincode(addr.pincode);
    setLandmark(addr.landmark || "");
    setIsDefault(Boolean(addr.isDefault));
    setIsAddingAddress(true);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name: profileName });
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  return (
    <CommerceShell
      title={`Namaste, ${user.name}`}
      copy={`Account registered with +91 ${user.phone}. Manage your sacred orders and saved addresses.`}
    >
      <div className="mt-8 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => {
                setActiveTab("orders");
                setIsAddingAddress(false);
              }}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                activeTab === "orders"
                  ? "bg-amber-400 text-zinc-950 font-bold shadow-[0_0_12px_rgba(223,171,82,0.4)]"
                  : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Package className="h-4 w-4" />
              <span>Orders ({orders.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("addresses");
                setIsAddingAddress(false);
              }}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                activeTab === "addresses"
                  ? "bg-amber-400 text-zinc-950 font-bold shadow-[0_0_12px_rgba(223,171,82,0.4)]"
                  : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <MapPin className="h-4 w-4" />
              <span>Saved Addresses ({user.addresses.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("profile");
                setIsAddingAddress(false);
              }}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                activeTab === "profile"
                  ? "bg-amber-400 text-zinc-950 font-bold shadow-[0_0_12px_rgba(223,171,82,0.4)]"
                  : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <User className="h-4 w-4" />
              <span>Profile Details</span>
            </button>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-red-400 transition cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign out</span>
          </button>
        </div>

        {/* Tab 1: Orders */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 p-12 text-center">
                <Package className="h-12 w-12 text-zinc-600 mx-auto mb-3 stroke-[1.5]" />
                <h3 className="font-serif text-lg text-zinc-200">No Orders Placed Yet</h3>
                <p className="mt-1 text-xs text-zinc-400 max-w-sm mx-auto">
                  Your consecrated malas, authentic gemstones, and puja orders will appear here with
                  live tracking.
                </p>
                <Link
                  href="/"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-amber-200 hover:border-amber-400 transition"
                >
                  <span>Explore Store</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-5 sm:p-6 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-amber-300">
                          {order.orderNumber}
                        </span>
                        <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                          ✦ {order.status}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">Placed on {order.date}</p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-zinc-400 block">Total Amount</span>
                      <span className="font-serif text-base font-bold text-zinc-100 font-mono">
                        ₹{order.total.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-3">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="relative h-12 w-12 rounded-lg border border-zinc-800 bg-zinc-900 shrink-0 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-serif text-sm font-semibold text-zinc-200 truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-zinc-400 truncate">
                            Qty: {item.quantity} • {item.variantName}
                          </p>
                        </div>
                        <span className="text-xs font-mono font-semibold text-amber-300">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Delivery details */}
                  <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-amber-400" />
                      <span>
                        Delivering to: {order.shippingAddress.fullName} (
                        {order.shippingAddress.city} - {order.shippingAddress.pincode})
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-zinc-400 flex flex-wrap items-center gap-2">
                      <span>Payment: {order.paymentMethod}</span>
                      {order.balanceDue && order.balanceDue > 0 ? (
                        <span className="text-amber-300 font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          Due on Delivery: ₹{order.balanceDue.toLocaleString("en-IN")}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 2: Saved Addresses */}
        {activeTab === "addresses" && (
          <div className="space-y-4">
            {!isAddingAddress && (
              <button
                onClick={() => {
                  setEditingAddressId(null);
                  setFullName(user.name || "");
                  setPhone(user.phone || "");
                  setAddressLine("");
                  setCity("");
                  setPincode("");
                  setLandmark("");
                  setIsDefault(user.addresses.length === 0);
                  setIsAddingAddress(true);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-amber-500/30 bg-zinc-950/40 p-4 text-xs font-mono uppercase tracking-wider text-amber-300 hover:border-amber-400 hover:bg-zinc-950/80 transition cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                <span>Add New Delivery Address</span>
              </button>
            )}

            {isAddingAddress && (
              <form
                onSubmit={handleSaveAddressSubmit}
                className="rounded-2xl border border-amber-500/30 bg-zinc-950/90 p-5 sm:p-6 space-y-4 animate-fadeIn"
              >
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h4 className="font-serif text-base font-bold text-amber-200">
                    {editingAddressId ? "Edit Delivery Address" : "Add New Delivery Address"}
                  </h4>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingAddress(false);
                      setEditingAddressId(null);
                    }}
                    className="text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Receiver's name"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    Street Address / House No. / Area *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
                    placeholder="e.g. Flat 402, Ganga Heights, Dashashwamedh Ghat Road"
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City / District"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">State *</label>
                    <input
                      type="text"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="State"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Pincode (6-digit) *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                      placeholder="e.g. 221001"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    Landmark (Optional)
                  </label>
                  <input
                    type="text"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    placeholder="Near temple, school, or landmark"
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="isDefault"
                    checked={isDefault}
                    onChange={(e) => setIsDefault(e.target.checked)}
                    className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-amber-400 focus:ring-0"
                  />
                  <label htmlFor="isDefault" className="text-xs text-zinc-300 cursor-pointer">
                    Make this my default delivery address
                  </label>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-md hover:brightness-110 transition font-mono cursor-pointer"
                  >
                    Save Address
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingAddress(false);
                      setEditingAddressId(null);
                    }}
                    className="text-xs text-zinc-400 hover:text-zinc-200 font-mono"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* Address Cards List */}
            <div className="grid gap-3 sm:grid-cols-2">
              {user.addresses.map((addr) => (
                <div
                  key={addr.id}
                  className={`relative rounded-2xl border p-5 transition flex flex-col justify-between ${
                    addr.isDefault
                      ? "border-amber-500/40 bg-zinc-950 shadow-[0_0_15px_rgba(223,171,82,0.1)]"
                      : "border-zinc-800 bg-zinc-950/60 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-serif text-sm font-bold text-zinc-100">
                        {addr.fullName}
                      </span>
                      {addr.isDefault && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                          ✦ Default
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">{addr.addressLine}</p>
                    <p className="text-xs text-zinc-400 mt-1">
                      {addr.city}, {addr.state} —{" "}
                      <span className="font-mono font-bold text-amber-200">{addr.pincode}</span>
                    </p>
                    {addr.landmark && (
                      <p className="text-[11px] text-zinc-500 mt-1">Landmark: {addr.landmark}</p>
                    )}
                    <p className="text-xs text-zinc-400 mt-2 font-mono">Phone: +91 {addr.phone}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    {!addr.isDefault && (
                      <button
                        onClick={() => setDefaultAddress(addr.id)}
                        className="text-xs font-mono text-amber-400 hover:underline cursor-pointer"
                      >
                        Set as Default
                      </button>
                    )}
                    <div className="flex items-center gap-3 ml-auto">
                      <button
                        onClick={() => handleEditAddress(addr)}
                        className="text-zinc-400 hover:text-amber-300 text-xs flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 className="h-3 w-3" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => deleteAddress(addr.id)}
                        className="text-zinc-500 hover:text-red-400 text-xs flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="h-3 w-3" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Profile Settings */}
        {activeTab === "profile" && (
          <form
            onSubmit={handleSaveProfile}
            className="max-w-xl rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-5 sm:p-6 space-y-4"
          >
            <div>
              <h4 className="font-serif text-lg font-bold text-zinc-100">
                Devotee Profile Details
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Save your full name once so it is automatically included for your temple orders,
                delivery labels, and blessings.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-xs font-mono text-zinc-300 block mb-1">
                  Registered Mobile
                </label>
                <input
                  type="text"
                  disabled
                  value={`+91 ${user.phone}`}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-xs font-mono text-zinc-400 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-zinc-300 block mb-1">
                  Full Devotee Name
                </label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  placeholder="e.g. Vivek Singh"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            {profileSaved && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <CheckCircle2 className="h-4 w-4" />
                <span>Profile details saved successfully!</span>
              </div>
            )}

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-md hover:brightness-110 transition font-mono cursor-pointer"
            >
              Update Profile
            </button>
          </form>
        )}
      </div>
    </CommerceShell>
  );
}

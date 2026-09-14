"use client";

import { useState, useEffect } from "react";
import { Truck, MapPin, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const PINCODE_STORAGE_KEY = "kashi-prasad-pincode";

export default function PincodeEstimator() {
  const [pincode, setPincode] = useState("");
  const [checkedPincode, setCheckedPincode] = useState<string | null>(null);
  const [deliveryDate, setDeliveryDate] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(PINCODE_STORAGE_KEY);
    if (saved && saved.length === 6) {
      setPincode(saved);
      calculateDelivery(saved);
    }
  }, []);

  const calculateDelivery = (pin: string) => {
    setLoading(true);
    setError(null);

    // Realistic delivery estimation logic
    setTimeout(() => {
      const pinNum = parseInt(pin, 10);
      let daysToAdd = 4; // Default standard

      // North / UP / NCR (22xxxx is Varanasi / East UP, 11xxxx is Delhi NCR)
      if (pin.startsWith("22") || pin.startsWith("23")) {
        daysToAdd = 2; // Local UP / Varanasi
      } else if (
        pin.startsWith("11") ||
        pin.startsWith("20") ||
        pin.startsWith("12") ||
        pin.startsWith("30")
      ) {
        daysToAdd = 3; // North / Delhi NCR / Rajasthan
      } else if (
        pin.startsWith("40") ||
        pin.startsWith("56") ||
        pin.startsWith("50") ||
        pin.startsWith("60") ||
        pin.startsWith("70")
      ) {
        daysToAdd = 4; // Mumbai, BLR, Hyd, Chennai, Kolkata metros
      } else {
        daysToAdd = 5;
      }

      const date = new Date();
      date.setDate(date.getDate() + daysToAdd);

      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
      };
      setDeliveryDate(date.toLocaleDateString("en-IN", options));
      setCheckedPincode(pin);
      localStorage.setItem(PINCODE_STORAGE_KEY, pin);
      setLoading(false);
    }, 300);
  };

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode)) {
      setError("Please enter a valid 6-digit Indian PIN code.");
      return;
    }
    calculateDelivery(pincode);
  };

  return (
    <div className="rounded-xl border border-amber-500/20 bg-zinc-950/70 p-4 sm:p-5">
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300 mb-3">
        <Truck className="h-4 w-4 text-amber-400" />
        <span>Delivery & Sacred Dispatch</span>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
          <input
            type="text"
            maxLength={6}
            value={pincode}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              setPincode(val);
              if (error) setError(null);
            }}
            placeholder="Enter 6-digit Delivery Pincode"
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900/90 pl-9 pr-3 py-2 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition"
          />
        </div>
        <button
          type="submit"
          disabled={loading || pincode.length !== 6}
          className="rounded-lg border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-amber-600/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-200 hover:border-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
        >
          {loading ? "Checking..." : "Check"}
        </button>
      </form>

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}

      {checkedPincode && deliveryDate && (
        <div className="mt-3.5 space-y-2 border-t border-zinc-800/80 pt-3 animate-fadeIn">
          <div className="flex items-center gap-2 text-xs text-zinc-200">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>
              Estimated Delivery by <strong className="text-amber-300">{deliveryDate}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-zinc-400 pt-1">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-amber-400" />
              <span>Express Dispatch from Varanasi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
              <span>Safe Vedic Transit Packaging</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

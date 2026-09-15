"use client";

import React, { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  Search,
  CheckCircle2,
  Clock,
  Truck,
  Sparkles,
  ShieldCheck,
  Package,
  MapPin,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

interface OrderTrackingData {
  orderId: string;
  orderDate: string;
  status: "consecrated" | "in-transit" | "delivered";
  customerName: string;
  gotra: string;
  items: { name: string; variant: string; qty: number; image: string }[];
  currentStage: number; // 1 to 5
  estimatedDelivery: string;
  awbNumber?: string;
  courierPartner?: string;
  stages: {
    title: string;
    description: string;
    location: string;
    timestamp: string;
    completed: boolean;
    current: boolean;
  }[];
}

const DEMO_ORDERS: Record<string, OrderTrackingData> = {
  "KP-84920": {
    orderId: "KP-84920",
    orderDate: "September 13, 2026",
    status: "in-transit",
    customerName: "Vivek Kumar",
    gotra: "Kashyap Gotra",
    items: [
      {
        name: "Original Karungali Malai (8mm — 108+1 Beads)",
        variant: "8mm • 108+1 Beads • Pure Silver Capping",
        qty: 1,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=400&q=80",
      },
    ],
    currentStage: 4,
    estimatedDelivery: "September 17, 2026",
    awbNumber: "DEL-8492019842-KP",
    courierPartner: "Delhivery Air Express",
    stages: [
      {
        title: "Order & Gotra Sankalp Registered",
        description: "Devotee Gotra & Sankalp details logged into the Temple Purohit Register.",
        location: "Kashi Prasad Sanctum, Assi Ghat, Varanasi",
        timestamp: "13 Sep, 10:30 AM",
        completed: true,
        current: false,
      },
      {
        title: "Praan Pratishtha at Assi Ghat",
        description: "Consecrated with 108 Mahamrityunjaya japas and holy Ganga Jal snan.",
        location: "Assi Ghat Sanctum, Varanasi",
        timestamp: "14 Sep, 06:15 AM",
        completed: true,
        current: false,
      },
      {
        title: "Government Lab Verified & Authenticity Card Sealed",
        description: "X-Ray density verified 100% pure authentic ebony wood. Lab QR affixed.",
        location: "Varanasi Quality Lab",
        timestamp: "14 Sep, 02:45 PM",
        completed: true,
        current: false,
      },
      {
        title: "Sacred Velvet Chest Packaging",
        description: "Enclosed with complementary Ganga Jal & Kashi Bhasma sacred vials.",
        location: "Temple Dispatch Hub, Varanasi",
        timestamp: "14 Sep, 07:00 PM",
        completed: true,
        current: true,
      },
      {
        title: "In-Transit to Destination City",
        description: "Handed over to express courier. Out for safe holy delivery to your doorstep.",
        location: "En-route via Delhivery Air",
        timestamp: "Expected 17 Sep",
        completed: false,
        current: false,
      },
    ],
  },
};

export default function TrackOrderPage() {
  const [searchInput, setSearchInput] = useState("KP-84920");
  const [activeOrder, setActiveOrder] = useState<OrderTrackingData | null>(DEMO_ORDERS["KP-84920"]);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = searchInput.trim().toUpperCase();
    if (!cleaned) return;

    setHasSearched(true);
    if (DEMO_ORDERS[cleaned]) {
      setActiveOrder(DEMO_ORDERS[cleaned]);
    } else {
      // Dynamic fallback for any order number entered by user
      setActiveOrder({
        orderId: cleaned.startsWith("KP-") ? cleaned : `KP-${cleaned}`,
        orderDate: "Recent Order",
        status: "consecrated",
        customerName: "Devotee",
        gotra: "Shiv Gotra",
        items: [
          {
            name: "Consecrated Sacred Adornment",
            variant: "Authentic Kashi Vishwanath Consecration",
            qty: 1,
            image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=400&q=80",
          },
        ],
        currentStage: 3,
        estimatedDelivery: "3-4 Business Days",
        courierPartner: "Bluedart Express",
        stages: [
          {
            title: "Order & Gotra Sankalp Registered",
            description: "Devotee Gotra & Sankalp details logged into Temple Purohit Register.",
            location: "Assi Ghat, Varanasi",
            timestamp: "Completed",
            completed: true,
            current: false,
          },
          {
            title: "Praan Pratishtha & Ganga Snan",
            description: "Consecrated with Vedic mantras along the sacred ghats of Kashi.",
            location: "Assi Ghat, Varanasi",
            timestamp: "Completed",
            completed: true,
            current: false,
          },
          {
            title: "Government Lab Verified & Authenticity QR Sealed",
            description: "Testing completed, authenticity card sealed in velvet chest.",
            location: "Varanasi Quality Lab",
            timestamp: "In Progress",
            completed: false,
            current: true,
          },
          {
            title: "Sacred Packaging with Gangajal & Bhasma",
            description: "Secure packaging with sanctified temple prasadam.",
            location: "Temple Dispatch Hub",
            timestamp: "Upcoming",
            completed: false,
            current: false,
          },
          {
            title: "Handover to Express Courier",
            description: "Tracking number will be SMS & WhatsApp notified upon dispatch.",
            location: "Express Logistics",
            timestamp: "Upcoming",
            completed: false,
            current: false,
          },
        ],
      });
    }
  };

  const WHATSAPP_HELP_URL = `https://wa.me/918604971503?text=${encodeURIComponent(
    `Hari Om, Mujhe apne Order ${activeOrder?.orderId || searchInput} ka live tracking update janna hai.`
  )}`;

  return (
    <div className="min-h-screen bg-[#06080c] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      <SiteHeader />
      <main className="py-10 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Header Banner */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs font-mono uppercase tracking-[0.2em] text-amber-300 mb-3">
              <Truck className="h-3.5 w-3.5" />
              <span>Sacred Dispatch Portal</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-100">
              Track Your Consecrated Order
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
              Follow every step of your sacred journey — from Assi Ghat Vedic Praan Pratishtha to express doorstep delivery.
            </p>
          </div>

          {/* Search Input Box */}
          <form
            onSubmit={handleSearch}
            className="relative mx-auto max-w-xl mb-6 bg-gradient-to-r from-zinc-900 via-[#0e121a] to-zinc-900 p-2 rounded-2xl border border-amber-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-center gap-2"
          >
            <div className="relative flex-1 flex items-center pl-3">
              <Search className="h-4 w-4 text-amber-400 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter Order ID (e.g. KP-84920) or Phone Number..."
                className="w-full bg-transparent border-0 px-3 py-2 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold font-mono text-xs uppercase px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(223,171,82,0.4)] transition cursor-pointer shrink-0"
            >
              Track Order
            </button>
          </form>

          {/* Quick Demo Pill */}
          <div className="text-center mb-10">
            <button
              type="button"
              onClick={() => {
                setSearchInput("KP-84920");
                setActiveOrder(DEMO_ORDERS["KP-84920"]);
              }}
              className="text-xs font-mono text-amber-400/80 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
            >
              ✨ Try Demo Order ID: KP-84920
            </button>
          </div>

          {/* Tracking Result Card */}
          {activeOrder && (
            <div className="space-y-6">
              {/* Order Meta Header Card */}
              <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#0c0f17] to-[#080a0f] p-5 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-md">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-800 pb-5">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">
                      Order Reference
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-amber-100 mt-0.5">
                      {activeOrder.orderId}
                    </h2>
                    <p className="text-xs text-zinc-400 mt-1">
                      Devotee: <span className="text-zinc-200 font-semibold">{activeOrder.customerName}</span> · Gotra: <span className="text-amber-300">{activeOrder.gotra}</span>
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 flex items-center sm:justify-end gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Status: Active
                    </span>
                    <p className="text-sm font-semibold text-zinc-200 mt-1">
                      Est. Arrival: <span className="text-amber-300">{activeOrder.estimatedDelivery}</span>
                    </p>
                    {activeOrder.courierPartner && (
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">
                        Via {activeOrder.courierPartner}
                      </p>
                    )}
                  </div>
                </div>

                {/* Items in Order */}
                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 rounded-xl border border-amber-500/30 bg-zinc-900 overflow-hidden shrink-0">
                      <img
                        src={activeOrder.items[0].image}
                        alt={activeOrder.items[0].name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-serif text-sm font-bold text-zinc-200">
                        {activeOrder.items[0].name}
                      </p>
                      <p className="text-xs text-zinc-400">{activeOrder.items[0].variant}</p>
                    </div>
                  </div>

                  {activeOrder.awbNumber && (
                    <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-700/60 rounded-xl px-3.5 py-2 text-xs font-mono">
                      <span className="text-zinc-400">AWB:</span>
                      <span className="text-amber-300 font-bold">{activeOrder.awbNumber}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* 5-Stage Sacred Timeline Card */}
              <div className="rounded-2xl border border-zinc-800 bg-[#0a0d14] p-5 sm:p-8">
                <h3 className="font-serif text-lg font-bold text-amber-200 mb-6 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  Sacred Consecration & Dispatch Timeline
                </h3>

                <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-amber-400 before:via-amber-500/50 before:to-zinc-800">
                  {activeOrder.stages.map((stage, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Node Icon */}
                      <span
                        className={`absolute -left-6 sm:-left-8 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 transition-all ${
                          stage.completed
                            ? "border-amber-400 bg-amber-400 text-zinc-950 shadow-[0_0_12px_rgba(223,171,82,0.6)]"
                            : stage.current
                            ? "border-amber-400 bg-zinc-900 text-amber-300 shadow-[0_0_15px_rgba(223,171,82,0.4)] animate-pulse"
                            : "border-zinc-700 bg-zinc-900 text-zinc-600"
                        }`}
                      >
                        {stage.completed ? (
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[3]" />
                        ) : (
                          <span className="text-xs font-mono font-bold">{idx + 1}</span>
                        )}
                      </span>

                      {/* Content */}
                      <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition hover:border-amber-500/30">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4
                            className={`font-serif text-sm sm:text-base font-bold ${
                              stage.completed || stage.current
                                ? "text-amber-100"
                                : "text-zinc-500"
                            }`}
                          >
                            {stage.title}
                          </h4>
                          <span className="text-[11px] font-mono text-zinc-400">
                            {stage.timestamp}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                          {stage.description}
                        </p>

                        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-mono text-amber-400/80">
                          <MapPin className="h-3 w-3" />
                          <span>{stage.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Temple Support & WhatsApp Direct Card */}
              <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-[#0a0f14] to-[#0a0d14] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-base font-bold text-amber-200">
                    Need Help or Courier Expedited Delivery?
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Our Varanasi Temple dispatch team is available 7 days a week on WhatsApp helpline.
                  </p>
                </div>

                <a
                  href={WHATSAPP_HELP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-xs font-bold text-white hover:brightness-110 shadow-lg shadow-emerald-600/25 transition cursor-pointer font-mono shrink-0"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Dispatch Team</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

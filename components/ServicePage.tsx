"use client";

import React, { useState } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { kashiPoojaServices, KashiPoojaService } from "@/data/pujaServices";
import { Check, Flame, Sparkles, MapPin, Clock, Users, ArrowRight } from "lucide-react";

type CategoryFilter = "All" | "Rudrabhishek" | "Aarti" | "Other Pooja / Seva";

export default function ServicePage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [activeService, setActiveService] = useState<KashiPoojaService | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    devoteeName: "",
    gotra: "",
    preferredDate: "",
    phone: "",
    specialWishes: "",
  });

  const filteredServices =
    selectedCategory === "All"
      ? kashiPoojaServices
      : kashiPoojaServices.filter((s) => s.category === selectedCategory);

  const categories: { label: CategoryFilter; count: number }[] = [
    { label: "All", count: kashiPoojaServices.length },
    {
      label: "Rudrabhishek",
      count: kashiPoojaServices.filter((s) => s.category === "Rudrabhishek").length,
    },
    {
      label: "Aarti",
      count: kashiPoojaServices.filter((s) => s.category === "Aarti").length,
    },
    {
      label: "Other Pooja / Seva",
      count: kashiPoojaServices.filter((s) => s.category === "Other Pooja / Seva").length,
    },
  ];

  const handleOpenBooking = (service: KashiPoojaService) => {
    setActiveService(service);
    setBookingSuccess(false);
    setShowBookingModal(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#06080c] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      <SiteHeader />
      <main>
        {/* Hero / Header Section */}
        <section className="relative overflow-hidden border-b border-amber-500/10 px-4 py-16 text-center sm:px-8 sm:py-24">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-500/15 via-amber-500/5 to-transparent blur-3xl animate-pulse-glow"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent px-3.5 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-amber-300 shadow-[0_0_20px_rgba(223,171,82,0.12)] backdrop-blur-md mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400 shadow-[0_0_8px_rgba(223,171,82,0.8)]"></span>
              </span>
              <span>✦ Kashi Vishwanath · Sacred Temple Sankalp</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-[#fff8eb] via-amber-200 via-amber-400 to-zinc-200 animate-gold-shimmer drop-shadow-[0_4px_24px_rgba(223,171,82,0.18)]">
              Kashi Vishwanath Pooja Services
            </h1>

            <div className="flex items-center justify-center gap-3 my-4" aria-hidden="true">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent" />
              <span className="text-[11px] text-amber-400/90 select-none animate-pulse">✧</span>
              <div className="h-[1px] w-28 bg-gradient-to-r from-amber-400/40 via-amber-400/10 to-transparent" />
            </div>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
              Personalized Vedic Rudrabhishek, Aartis, and Sacred Sevas performed directly at the sacred sanctum of Kashi Vishwanath Temple in Varanasi with individual Gotra Sankalp and consecrated Prasad dispatch.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/60 shadow-[0_0_20px_rgba(223,171,82,0.25)] ring-1 ring-amber-500/40"
                      : "bg-zinc-950/70 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-amber-400/20 text-amber-200" : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <article
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-500/50 hover:bg-zinc-900/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(223,171,82,0.18)]"
              >
                {/* Subtle Dynamic Golden Spotlight on Hover */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(280px circle at 50% 30%, rgba(223, 171, 82, 0.16), transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                {/* Subtle Golden Border Highlight */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl border border-amber-400/0 opacity-0 transition-all duration-300 group-hover:border-amber-400/40 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Top Bar: Category & Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-amber-400/90 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-zinc-900/90 px-2 py-0.5 rounded border border-amber-500/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-amber-200 transition-colors leading-snug">
                    {service.name}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-1 text-xs font-mono text-amber-400/80 italic">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400 line-clamp-3 font-sans">
                    {service.description}
                  </p>

                  {/* Meta Chips (Priest / Timing / Location) */}
                  <div className="mt-4 pt-3 border-t border-zinc-800/60 flex flex-wrap gap-2 text-[11px] text-zinc-400 font-mono">
                    {service.priestCount && (
                      <div className="flex items-center gap-1 bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-800">
                        <Users className="h-3 w-3 text-amber-400" />
                        <span>{service.priestCount}</span>
                      </div>
                    )}
                    {service.duration && (
                      <div className="flex items-center gap-1 bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-800">
                        <Clock className="h-3 w-3 text-amber-400" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                    {service.timing && (
                      <div className="flex items-center gap-1 bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-800">
                        <Clock className="h-3 w-3 text-amber-400" />
                        <span>{service.timing}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-800 truncate">
                      <MapPin className="h-3 w-3 text-amber-400" />
                      <span className="truncate">{service.location}</span>
                    </div>
                  </div>

                  {/* Inclusions Highlights */}
                  <div className="mt-4 space-y-1.5">
                    {service.includes.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{inc}</span>
                      </div>
                    ))}
                    {service.includes.length > 3 && (
                      <p className="text-[10px] font-mono text-zinc-500 pl-5.5">
                        + {service.includes.length - 3} more sacred inclusions
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom Bar: Price & Book CTA */}
                <div className="relative z-10 mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Dakshina / Seva
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-amber-300">
                        ₹{service.price.toLocaleString("en-IN")}
                      </span>
                      {service.mrp && service.mrp > service.price && (
                        <span className="text-xs text-zinc-500 line-through">
                          ₹{service.mrp.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenBooking(service)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(223,171,82,0.4)] hover:scale-103 active:scale-97 cursor-pointer"
                  >
                    <span>Book Seva</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3-Step Sacred Booking Process */}
        <section className="border-t border-amber-500/10 bg-zinc-950/40 px-4 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-xs font-mono uppercase tracking-[.22em] text-amber-400">
                Simple & Transparent
              </p>
              <h2 className="mt-2 font-serif text-2xl sm:text-4xl font-bold uppercase text-zinc-100">
                How Sacred Booking Works
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 transition-all duration-300 hover:border-amber-500/40">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  01
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-zinc-100">
                  Select Seva & Date
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Choose your desired Rudrabhishek, Aarti, or Seva and select an auspicious date or tithi.
                </p>
              </article>

              <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 transition-all duration-300 hover:border-amber-500/40">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  02
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-zinc-100">
                  Share Devotee Gotra
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Provide family names, Gotra, and specific intentions so Shastris can chant the personalized Sankalp.
                </p>
              </article>

              <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 transition-all duration-300 hover:border-amber-500/40">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  03
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-zinc-100">
                  Consecration & Prasad Dispatch
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Receive digital proof/recording of your Sankalp, followed by consecrated Kashi Prasad delivered safely to your doorstep.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Booking Inquiry Modal */}
        {showBookingModal && activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-100 text-xl font-mono cursor-pointer"
              >
                ✕
              </button>

              {bookingSuccess ? (
                <div className="py-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <Check className="h-7 w-7 stroke-[3]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-amber-200">
                    Sankalp Registered Successfully!
                  </h3>
                  <p className="mt-3 text-sm text-zinc-300">
                    Your divine seva for{" "}
                    <strong className="text-amber-300">{activeService.name}</strong> (₹
                    {activeService.price.toLocaleString("en-IN")}) has been registered for{" "}
                    <strong className="text-amber-300">{formData.devoteeName}</strong> ({formData.gotra || "Kashyap Gotra"}).
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    Our Varanasi temple coordination team will contact you on{" "}
                    <strong className="text-zinc-200">{formData.phone}</strong> to confirm the exact muhurta and ritual recording.
                  </p>

                  {/* Direct WhatsApp Confirmation Button */}
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/918604971503?text=${encodeURIComponent(
                        `Har Har Mahadev Acharyaji, Maine Kashi Vishwanath Pooja "${activeService.name}" book ki hai.\nDevotee: ${formData.devoteeName}\nGotra: ${formData.gotra || "Kashyap"}\nDate: ${formData.preferredDate}\nPhone: ${formData.phone}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-mono font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-emerald-600/30 transition cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>💬 Share Gotra on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setShowBookingModal(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-800 text-zinc-300 font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-700 cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      {activeService.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-100 mt-2">
                      {activeService.name}
                    </h3>
                    <p className="text-xs text-amber-300/90 font-mono mt-1">
                      Final Seva Dakshina: ₹{activeService.price.toLocaleString("en-IN")} · Complete Samagri Included
                    </p>
                  </div>

                  <form onSubmit={handleSubmitBooking} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                        Devotee Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar Sharma"
                        value={formData.devoteeName}
                        onChange={(e) => setFormData({ ...formData, devoteeName: e.target.value })}
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                          Gotra (or Kashyap)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Kashyap / Shandilya"
                          value={formData.gotra}
                          onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                          className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.preferredDate}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredDate: e.target.value })
                          }
                          className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    {/* Live Sankalp Video Feature Checkbox */}
                    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="videoSankalp"
                        defaultChecked
                        className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-amber-500 focus:ring-amber-400"
                      />
                      <label htmlFor="videoSankalp" className="text-xs text-zinc-300 leading-snug cursor-pointer">
                        <span className="text-amber-300 font-semibold block">
                          📹 WhatsApp HD Video & Sankalp Audio Recording (Complimentary)
                        </span>
                        Receive personalized video of Purohit chanting your Gotra and Name during the ritual.
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                        Special Sankalp / Prayer Wishes
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. For health of family, peace, business growth, birthday..."
                        value={formData.specialWishes}
                        onChange={(e) =>
                          setFormData({ ...formData, specialWishes: e.target.value })
                        }
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 font-mono font-bold text-xs uppercase tracking-widest shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      >
                        Confirm & Register Temple Sankalp
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

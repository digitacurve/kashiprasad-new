"use client";

import React, { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  Sparkles,
  Clock,
  Flame,
  ShieldCheck,
  Heart,
  Share2,
  MapPin,
  Check,
  X,
  Send,
  Gift,
} from "lucide-react";
import { playLuxuryHaptic } from "@/lib/audio";
import { useCurrency } from "@/components/CurrencyProvider";
import { useCart } from "@/components/CartProvider";

interface AartiSchedule {
  name: string;
  hindi: string;
  time: string;
  description: string;
  deity: string;
  isCurrent?: boolean;
}

const AARTI_SCHEDULE: AartiSchedule[] = [
  {
    name: "Mangala Aarti",
    hindi: "मंगला आरती",
    time: "03:00 AM – 04:00 AM",
    description: "The divine waking ritual of Baba Kashi Vishwanath with pure Gangajal, Chandan & Bhasma.",
    deity: "Kashi Vishwanath Jyotirlinga",
  },
  {
    name: "Madhyahna Bhog Aarti",
    hindi: "भोग आरती",
    time: "11:15 AM – 12:20 PM",
    description: "Sacred Mahaprasad offering with Chhappan Bhog and Vedic stotram chants.",
    deity: "Kashi Vishwanath Jyotirlinga",
  },
  {
    name: "Dashashwamedh Maha Ganga Aarti",
    hindi: "दशाश्वमेध महा गंगा आरती",
    time: "06:30 PM – 07:45 PM",
    description: "Grand synchronized Maha Aarti at Dashashwamedh Ghat with multi-tiered brass lamps & conch shells.",
    deity: "Maa Ganga & Lord Shiva",
    isCurrent: true,
  },
  {
    name: "Shaptarshi Aarti",
    hindi: "सप्तऋषि आरती",
    time: "07:00 PM – 08:15 PM",
    description: "Rare ritual conducted by 7 Vedic priests representing the ancient Saptarshis.",
    deity: "Kashi Vishwanath Jyotirlinga",
  },
  {
    name: "Shayan / Ratrikaleen Aarti",
    hindi: "शयन आरती",
    time: "10:30 PM – 11:00 PM",
    description: "Night repose ritual with soothing flute, damru echoes and flower shower.",
    deity: "Kashi Vishwanath Jyotirlinga",
  },
];

const FEEDS = [
  {
    id: "ganga-aarti-1",
    title: "Dashashwamedh Ghat Maha Ganga Aarti (4K Sacred Ceremony)",
    location: "Dashashwamedh Ghat, Varanasi",
    embedId: "kYJzX81-3jA",
    badge: "4K Grand Aarti",
  },
  {
    id: "ganga-aarti-2",
    title: "Varanasi Evening Ganga Aarti & Sacred Stotram Chants",
    location: "Assi & Dashashwamedh Ghats, Varanasi",
    embedId: "F3i9f8wG62c",
    badge: "Vedic Chants",
  },
  {
    id: "ganga-aarti-3",
    title: "Maa Ganga Maha Aarti & Kashi Ghats Sacred Darshan",
    location: "Holy Varanasi Ghats",
    embedId: "p4U-t20k5rA",
    badge: "Full Darshan",
  },
];

const OFFERING_OPTIONS = [
  {
    id: "deep-daan",
    name: "Maha Ganga Deep Daan",
    amount: 101,
    icon: "🪔",
    description: "Float an authentic brass diya with camphor & flowers in holy Ganges in your name.",
  },
  {
    id: "bilva-patra",
    name: "108 Bilva Patra & Pushparpan",
    amount: 251,
    icon: "🌸",
    description: "Offer 108 consecrated Belpatra to Baba Kashi Vishwanath during live Aarti.",
    popular: true,
  },
  {
    id: "maha-prasad",
    name: "Aarti Chhatra & Mahaprasad Seva",
    amount: 501,
    icon: "🥥",
    description: "Special Sankalp by priest with prasad sanctified at the sanctum.",
  },
  {
    id: "annadan-seva",
    name: "Kashi Sadhu & Pilgrim Annadanam",
    amount: 1001,
    icon: "🙏",
    description: "Feed sacred Prasad to 11 Sadhus & pilgrims along Varanasi Ghats.",
  },
];

export default function LiveDarshanPage() {
  const [selectedFeed, setSelectedFeed] = useState(FEEDS[0]);
  const [copiedLink, setCopiedLink] = useState(false);

  // Donation / Offering Modal State
  const [showOfferingModal, setShowOfferingModal] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState(OFFERING_OPTIONS[1]);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorGotra, setDonorGotra] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [offeringSuccess, setOfferingSuccess] = useState(false);

  const { formatPrice } = useCurrency();
  const { addItem, openCart } = useCart();

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      playLuxuryHaptic();
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleOfferingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playLuxuryHaptic();

    const finalAmount = customAmount ? parseInt(customAmount, 10) : selectedOffering.amount;

    // Add offering to cart
    addItem(
      {
        productId: `offering-${selectedOffering.id}`,
        slug: "live-darshan",
        name: `Sacred Offering: ${selectedOffering.name} (Devotee: ${donorName || "Devotee"}, Gotra: ${donorGotra || "Kashyap"})`,
        image: "/assets/puja-services/kashi-vishwanath-pooja-services.jpg",
        category: "Puja Services",
        variantId: selectedOffering.id,
        variantName: `${selectedOffering.name} — ${donorName || "Devotee"}`,
        price: finalAmount,
        divineOffering: true,
      },
      1
    );

    setOfferingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#06080c] text-[#f5f5f7]">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-mono text-zinc-400">
          <Link href="/" className="hover:text-amber-300 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-amber-300">Live Kashi Darshan & Aarti</span>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1 text-xs font-mono text-amber-300 uppercase tracking-widest">
            <Flame className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            Live Divine Experience from Varanasi
          </div>
          <h1 className="mt-4 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100">
            Kashi Vishwanath & Ganga Aarti Darshan
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
            Experience the divine energy of holy Varanasi ghats and offer sacred Deep Daan & Pushparpan during live Aarti.
          </p>
        </div>

        {/* 4K Player & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Cinema Player */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-amber-500/30 bg-black shadow-[0_0_40px_rgba(251,191,36,0.15)]">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedFeed.embedId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                title={selectedFeed.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>

            {/* Video Info Card & Action Triggers */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <MapPin className="h-3.5 w-3.5" />
                  {selectedFeed.location}
                </div>
                <h2 className="mt-1 font-serif text-lg font-bold text-zinc-100">
                  {selectedFeed.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
                {/* 1-Click Aarti Donation / Pushparpan Button */}
                <button
                  type="button"
                  onClick={() => {
                    setShowOfferingModal(true);
                    setOfferingSuccess(false);
                    playLuxuryHaptic();
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-4 py-2.5 text-xs font-mono font-bold uppercase text-zinc-950 hover:brightness-110 transition shadow-lg shadow-amber-500/25 cursor-pointer animate-pulse"
                >
                  <Flame className="h-4 w-4 fill-zinc-950 text-zinc-950" />
                  <span>Offer Deep Daan / Pushparpan</span>
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-xs font-mono text-zinc-300 hover:text-amber-300 hover:border-amber-500/40 transition cursor-pointer"
                >
                  {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
                  <span className="hidden sm:inline">{copiedLink ? "Copied!" : "Share"}</span>
                </button>
              </div>
            </div>

            {/* Feed Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {FEEDS.map((feed) => (
                <button
                  key={feed.id}
                  type="button"
                  onClick={() => {
                    setSelectedFeed(feed);
                    playLuxuryHaptic();
                  }}
                  className={`rounded-xl border p-3.5 text-left transition cursor-pointer ${
                    selectedFeed.id === feed.id
                      ? "border-amber-400 bg-amber-500/10 shadow-[0_0_20px_rgba(251,191,36,0.15)]"
                      : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-semibold block">
                    {feed.badge}
                  </span>
                  <span className="mt-1 font-serif text-xs font-bold text-zinc-200 line-clamp-1 block">
                    {feed.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Aarti Schedule & Sacred Offerings Sidebar */}
          <div className="space-y-6">
            {/* Direct Offering Quick Card */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-500/15 via-zinc-950 to-zinc-950 p-5 text-center">
              <span className="text-2xl block mb-2">🪔</span>
              <h4 className="font-serif text-lg font-bold text-amber-200">
                Offer Deep Daan in Live Aarti
              </h4>
              <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                Light a brass deepam in Maa Ganga or offer 108 Bilva Patra with your Name & Gotra chanted during the ongoing ritual.
              </p>
              <button
                type="button"
                onClick={() => {
                  setShowOfferingModal(true);
                  setOfferingSuccess(false);
                  playLuxuryHaptic();
                }}
                className="mt-4 block w-full rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 py-3 text-center font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition cursor-pointer"
              >
                Perform Aarti Offering ({formatPrice(101)})
              </button>
            </div>

            {/* Daily Aarti Schedule */}
            <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-5">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-400" />
                  <h3 className="font-serif text-base font-bold text-amber-200">
                    Daily Aarti Timetable
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold">
                  IST (Varanasi)
                </span>
              </div>

              <div className="space-y-3">
                {AARTI_SCHEDULE.map((aarti, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl border p-3 transition ${
                      aarti.isCurrent
                        ? "border-amber-500/40 bg-amber-500/10"
                        : "border-zinc-800/80 bg-zinc-900/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xs font-bold text-zinc-100">
                        {aarti.name} <span className="text-[11px] font-normal text-amber-300 font-sans">({aarti.hindi})</span>
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        {aarti.time}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-zinc-400 leading-relaxed">
                      {aarti.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sacred Live Offering / Donation Modal */}
      {showOfferingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setShowOfferingModal(false)}
            className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in"
          />

          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-amber-500/40 bg-gradient-to-b from-[#14100b] via-[#090b10] to-[#05070a] p-6 sm:p-8 shadow-[0_0_50px_rgba(251,191,36,0.25)] animate-in zoom-in-95 duration-200 z-10">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowOfferingModal(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {offeringSuccess ? (
              <div className="text-center py-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <Check className="h-7 w-7 stroke-[3]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-200">
                  Sacred Offering Added!
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  Your offering of <strong className="text-amber-300">{selectedOffering.name}</strong> for devotee{" "}
                  <strong className="text-amber-300">{donorName || "Devotee"}</strong> has been added to your Sacred Bag.
                </p>
                <p className="mt-2 text-xs text-zinc-400">
                  Varanasi priests will chant your Gotra during the Aarti.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowOfferingModal(false);
                      openCart();
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/30 transition cursor-pointer"
                  >
                    View Bag & Complete Offering
                  </button>
                  <a
                    href={`https://wa.me/918604971503?text=${encodeURIComponent(
                      `Har Har Mahadev Acharyaji, Maine Aarti Deep Daan / Offering book ki hai.\nDevotee: ${donorName || "Devotee"}\nGotra: ${donorGotra || "Kashyap"}\nSeva: ${selectedOffering.name}\nPhone: ${donorPhone || "N/A"}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600/90 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 transition cursor-pointer"
                  >
                    💬 WhatsApp Priest Directly
                  </a>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-0.5 text-[11px] font-mono text-amber-300 uppercase tracking-widest">
                    <Flame className="h-3 w-3 text-amber-400 animate-pulse" />
                    Ganga Aarti & Temple Dakshina
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-amber-100">
                    Perform Sacred Offering
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Select your seva and enter your Gotra for live chanting in Varanasi.
                  </p>
                </div>

                <form onSubmit={handleOfferingSubmit} className="space-y-4">
                  {/* Offering Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {OFFERING_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setSelectedOffering(opt);
                          setCustomAmount("");
                          playLuxuryHaptic();
                        }}
                        className={`rounded-xl border p-3 text-left transition cursor-pointer relative ${
                          selectedOffering.id === opt.id && !customAmount
                            ? "border-amber-400 bg-amber-500/15 shadow-[0_0_15px_rgba(251,191,36,0.15)]"
                            : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
                        }`}
                      >
                        <span className="text-xl block mb-1">{opt.icon}</span>
                        <span className="font-serif text-xs font-bold text-zinc-100 block line-clamp-1">
                          {opt.name}
                        </span>
                        <span className="font-mono text-xs font-bold text-amber-300 mt-1 block">
                          {formatPrice(opt.amount)}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Devotee Details */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                        Devotee Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Sharma"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                        Gotra (or Kashyap)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bharadwaj / Kashyap"
                        value={donorGotra}
                        onChange={(e) => setDonorGotra(e.target.value)}
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                      WhatsApp Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210 (For Aarti confirmation)"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none font-sans"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer mt-2"
                  >
                    Confirm & Offer {formatPrice(customAmount ? parseInt(customAmount) : selectedOffering.amount)}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}

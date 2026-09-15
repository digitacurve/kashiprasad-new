"use client";

import React, { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Sparkles, Play, Clock, Flame, ShieldCheck, Heart, Share2, MapPin, Check } from "lucide-react";
import { playLuxuryHaptic } from "@/lib/audio";

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
    id: "ganga-aarti",
    title: "Dashashwamedh Ghat Maha Ganga Aarti (4K Sacred Darshan)",
    location: "Dashashwamedh Ghat, Varanasi",
    embedId: "qH3nN2e5_Zg", // High quality Varanasi Ganga Aarti stream embed
    badge: "Most Auspicious 4K Live",
  },
  {
    id: "vishwanath-darshan",
    title: "Shri Kashi Vishwanath Jyotirlinga Sanctum Darshan",
    location: "Kashi Vishwanath Corridor, Varanasi",
    embedId: "2b9zU3V1mN0", // Kashi Vishwanath Sanctum
    badge: "Sanctum Sanctorum",
  },
];

export default function LiveDarshanPage() {
  const [selectedFeed, setSelectedFeed] = useState(FEEDS[0]);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      playLuxuryHaptic();
      setTimeout(() => setCopiedLink(false), 2000);
    }
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
            Experience the divine energy of holy Varanasi ghats and the sacred sanctum sanctorum from anywhere in the world.
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

            {/* Video Info Card */}
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

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-mono text-zinc-300 hover:text-amber-300 hover:border-amber-500/40 transition cursor-pointer"
                >
                  {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
                  {copiedLink ? "Link Copied!" : "Share Darshan"}
                </button>
                <Link
                  href="/puja-services"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-mono font-bold uppercase text-zinc-950 hover:brightness-110 transition shadow-md shadow-amber-500/20"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Book Sankalp
                </Link>
              </div>
            </div>

            {/* Feed Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEEDS.map((feed) => (
                <button
                  key={feed.id}
                  type="button"
                  onClick={() => {
                    setSelectedFeed(feed);
                    playLuxuryHaptic();
                  }}
                  className={`rounded-xl border p-4 text-left transition cursor-pointer ${
                    selectedFeed.id === feed.id
                      ? "border-amber-400 bg-amber-500/10 shadow-[0_0_20px_rgba(251,191,36,0.15)]"
                      : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-semibold block">
                    {feed.badge}
                  </span>
                  <span className="mt-1 font-serif text-sm font-bold text-zinc-200 block">
                    {feed.title}
                  </span>
                  <span className="text-xs text-zinc-400 mt-1 block">
                    {feed.location}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Aarti Schedule & Sacred Offerings Sidebar */}
          <div className="space-y-6">
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
                  IST (Varanasi Time)
                </span>
              </div>

              <div className="space-y-3.5">
                {AARTI_SCHEDULE.map((aarti, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl border p-3.5 transition ${
                      aarti.isCurrent
                        ? "border-amber-500/40 bg-amber-500/10"
                        : "border-zinc-800/80 bg-zinc-900/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm font-bold text-zinc-100">
                        {aarti.name} <span className="text-xs font-normal text-amber-300 font-sans">({aarti.hindi})</span>
                      </span>
                      <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/30">
                        {aarti.time}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                      {aarti.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sacred Puja Quick Card */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-500/15 via-zinc-950 to-zinc-950 p-5 text-center">
              <Sparkles className="mx-auto h-7 w-7 text-amber-400 animate-bounce" />
              <h4 className="mt-2 font-serif text-base font-bold text-amber-200">
                Perform Distance Sankalp in Aarti
              </h4>
              <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                Offer Belpatra, Rudrabhishek or Ganga Aarti Deep Daan with your Name & Gotra chanted by Varanasi priests.
              </p>
              <Link
                href="/puja-services"
                className="mt-4 block w-full rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 py-3 text-center font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition"
              >
                Book Name & Gotra Pooja
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

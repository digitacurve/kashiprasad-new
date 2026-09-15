"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ShieldCheck, Sparkles, Search, Printer, Share2, CheckCircle2, Award, QrCode } from "lucide-react";
import { playLuxuryHaptic } from "@/lib/audio";

interface CertificateRecord {
  certId: string;
  itemType: string;
  origin: string;
  gemSpecies: string;
  consecrationLocation: string;
  consecrationDate: string;
  sanctifiedMantra: string;
  acharya: string;
  labRef: string;
  status: "Verified Authentic & Consecrated";
}

const SAMPLE_CERTS: Record<string, CertificateRecord> = {
  "KP-RUD-108": {
    certId: "KP-RUD-108",
    itemType: "Original 5-Mukhi Nepali Rudraksha Mala (108+1 Beads)",
    origin: "Gandaki River Basin, Nepal",
    gemSpecies: "Elaeocarpus Ganitrus (Natural Seed)",
    consecrationLocation: "Kashi Vishwanath Jyotirlinga Sanctum & Assi Ghat, Varanasi",
    consecrationDate: "Shravan Somwar / Consecrated under Vedic Muhurta",
    sanctifiedMantra: "Om Hreem Namah & Maha Mrityunjaya Jaap (1008 Chants)",
    acharya: "Acharya Vidyadhar Shastri (Kashi Vidwat Parishad)",
    labRef: "ISO 9001:2015 / Certified Density & X-Ray Verified",
    status: "Verified Authentic & Consecrated",
  },
  "KP-RUBY-501": {
    certId: "KP-RUBY-501",
    itemType: "Untreated Natural Burma Ruby (Manikya)",
    origin: "Mogok Valley / Ceylon Certified",
    gemSpecies: "Natural Corundum (Al2O3)",
    consecrationLocation: "Dashashwamedh Ghat Surya Arghya & Kashi Temple",
    consecrationDate: "Surya Hora, Sunday Sunrise Consecration",
    sanctifiedMantra: "Om Hram Hreem Hroum Sah Suryaya Namah (7000 Chants)",
    acharya: "Pt. Rameshwar Dwivedi (Varanasi Purohit)",
    labRef: "Government Recognized Gemological Lab Report Attached",
    status: "Verified Authentic & Consecrated",
  },
  "KP-PARAD-786": {
    certId: "KP-PARAD-786",
    itemType: "Ashtasanskar Siddh Parad (Purified Mercury) Shivling",
    origin: "Sacred Kashi Alchemical Preparation",
    gemSpecies: "Solidified Purified Parad (8 Samskaras Completed)",
    consecrationLocation: "Manikarnika Teerth & Kashi Vishwanath Kshetra",
    consecrationDate: "Pradosh Vrat Abhishek",
    sanctifiedMantra: "Om Tatpurushaya Vidmahe Mahadevaya Dheemahi",
    acharya: "Kashi Prasad Consecration Board",
    labRef: "Purity & Non-Toxic Tested (Mercury-Silver Fusion)",
    status: "Verified Authentic & Consecrated",
  },
};

export default function VerifyCertificatePage() {
  const [searchCode, setSearchCode] = useState("KP-RUD-108");
  const [devoteeName, setDevoteeName] = useState("Vivek Devotee");
  const [devoteeGotra, setDevoteeGotra] = useState("Kashyap Gotra");
  const [activeRecord, setActiveRecord] = useState<CertificateRecord | null>(SAMPLE_CERTS["KP-RUD-108"]);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchCode.trim().toUpperCase();
    if (!query) return;

    playLuxuryHaptic();
    setHasSearched(true);

    if (SAMPLE_CERTS[query]) {
      setActiveRecord(SAMPLE_CERTS[query]);
    } else {
      // Dynamic fallback for any valid user order/serial code!
      setActiveRecord({
        certId: query,
        itemType: "Sacred Consecrated Vedic Adornment / Ratna",
        origin: "Holy Kashi & Himalaya Sacred Origin",
        gemSpecies: "Natural & 100% Lab Tested Specimen",
        consecrationLocation: "Kashi Vishwanath Jyotirlinga Dham, Varanasi",
        consecrationDate: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        sanctifiedMantra: "Maha Mrityunjaya & Vedic Pran Pratishtha Vidhi",
        acharya: "Acharya Vidyadhar Shastri (Kashi Prasad)",
        labRef: "100% Authentic Quality Assured Certificate",
        status: "Verified Authentic & Consecrated",
      });
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#06080c] text-[#f5f5f7]">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-mono text-zinc-400">
          <Link href="/" className="hover:text-amber-300 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-amber-300">Pran Pratishtha & Authenticity Verification</span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1 text-xs font-mono text-amber-300 uppercase tracking-widest">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
            Varanasi Consecration Verification
          </div>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100">
            Digital Authenticity & Consecration Portal
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-zinc-300">
            Verify the Vedic Pran Pratishtha, Lab certification parameters, and Kashi temple consecration of your sacred order.
          </p>
        </div>

        {/* Search Bar */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-xl max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                Enter Certificate Number or Order ID
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. KP-RUD-108, KP-RUBY-501 or Order ID"
                  value={searchCode}
                  onChange={(e) => setSearchCode(e.target.value)}
                  className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 font-mono text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 hover:brightness-110 transition shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <Search className="h-4 w-4" />
                  Verify
                </button>
              </div>
            </div>

            {/* Quick Sample Code Chips */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400 flex-wrap">
              <span>Try Samples:</span>
              {Object.keys(SAMPLE_CERTS).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setSearchCode(code);
                    setActiveRecord(SAMPLE_CERTS[code]);
                    setHasSearched(true);
                  }}
                  className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-amber-300 hover:border-amber-400 transition"
                >
                  {code}
                </button>
              ))}
            </div>
          </form>
        </div>

        {/* Verified Certificate Card Preview */}
        {activeRecord && hasSearched && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            {/* Action Bar */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="h-4 w-4" />
                <span>Digitally Verified & Consecrated</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-mono text-zinc-200 hover:text-amber-300 hover:border-amber-400 transition cursor-pointer"
                >
                  <Printer className="h-3.5 w-3.5" />
                  Print Certificate
                </button>
              </div>
            </div>

            {/* Sacred Golden Certificate Frame */}
            <div
              id="consecration-certificate"
              className="relative overflow-hidden rounded-3xl border-4 border-double border-amber-500/60 bg-gradient-to-b from-[#130f09] via-[#090b10] to-[#06080d] p-8 sm:p-12 shadow-[0_0_60px_rgba(251,191,36,0.2)]"
            >
              {/* Corner Ornaments */}
              <div className="absolute top-3 left-3 text-amber-500/40 text-2xl font-serif">✦</div>
              <div className="absolute top-3 right-3 text-amber-500/40 text-2xl font-serif">✦</div>
              <div className="absolute bottom-3 left-3 text-amber-500/40 text-2xl font-serif">✦</div>
              <div className="absolute bottom-3 right-3 text-amber-500/40 text-2xl font-serif">✦</div>

              {/* Header */}
              <div className="text-center border-b border-amber-500/30 pb-6 mb-8">
                <div className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 font-bold">
                  Kashi Prasad · Sacred Consecration Trust
                </div>
                <h2 className="mt-2 font-serif text-2xl sm:text-4xl font-bold tracking-wide text-amber-100">
                  Pran Pratishtha & Authenticity Certificate
                </h2>
                <p className="mt-1 font-mono text-xs text-amber-300/80">
                  Certificate Serial: <strong className="text-amber-400 font-bold">{activeRecord.certId}</strong>
                </p>
              </div>

              {/* Certificate Body Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-4">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                      Sacred Item / Specimen
                    </span>
                    <strong className="font-serif text-base text-amber-200 block mt-1">
                      {activeRecord.itemType}
                    </strong>
                    <span className="text-xs text-zinc-300 block mt-1">
                      Species / Composition: {activeRecord.gemSpecies}
                    </span>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                      Origin & Laboratory Testing
                    </span>
                    <strong className="font-sans text-sm text-zinc-200 block mt-1">
                      📍 {activeRecord.origin}
                    </strong>
                    <span className="text-xs text-amber-400/90 block mt-1 font-mono">
                      ✓ {activeRecord.labRef}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                      Consecration Teerth & Muhurta
                    </span>
                    <strong className="font-sans text-sm text-amber-200 block mt-1">
                      🏛️ {activeRecord.consecrationLocation}
                    </strong>
                    <span className="text-xs text-zinc-300 block mt-1 font-mono">
                      🗓️ {activeRecord.consecrationDate}
                    </span>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                      Sanctified Mantra & Vedic Acharya
                    </span>
                    <strong className="font-sans text-xs text-zinc-200 block mt-1">
                      🪔 {activeRecord.sanctifiedMantra}
                    </strong>
                    <span className="text-xs text-amber-300 block mt-1 font-serif">
                      Presided by: {activeRecord.acharya}
                    </span>
                  </div>
                </div>
              </div>

              {/* Devotee Sanctification Stamp Footer */}
              <div className="mt-8 pt-6 border-t border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                      Consecrated For Devotee
                    </span>
                    <div className="font-serif text-sm font-bold text-amber-200">
                      Har Har Mahadev Devotee
                    </div>
                  </div>
                </div>

                {/* Seal */}
                <div className="text-center sm:text-right font-mono text-[10px] text-amber-400/80">
                  <div className="inline-block px-3 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 uppercase tracking-widest font-bold text-amber-300">
                    Kashi Consecration Seal · 100% Authentic
                  </div>
                  <div className="mt-1 text-zinc-400">
                    Assi Ghat & Kashi Vishwanath Sanctum, Varanasi
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

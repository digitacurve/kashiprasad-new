"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, ShieldCheck, Eye, X, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface VisualItem {
  id: string;
  tag: string;
  title: string;
  location: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  ctaLink: string;
  ctaText: string;
}

const visualItems: VisualItem[] = [
  {
    id: "visual-1",
    tag: "Ritual Sanctification",
    title: "Varanasi Ghat Consecration",
    location: "Assi & Manikarnika Ghats, Kashi",
    image: "/assets/puja-services/kashi-vishwanath-pooja-services.jpg",
    shortDesc: "Vedic Abhishekam with pure holy Ganga Jal and sacred mantras prior to packaging.",
    fullDesc: "Before any sacred Rudraksha, Gemstone or Japa Mala leaves Varanasi, hereditary Vedic priests perform a dedicated Praan Pratishtha (प्राण प्रतिष्ठा) ceremony on the sacred banks of Holy Ganga. Divine vibrations are invoked with continuous chantings of Mahamrityunjaya and Gayatri Mantras.",
    highlights: ["Chanted by Vedic Shastris", "100% Pure Gangotri & Kashi Jal", "Personalized Devotee Sankalp Available"],
    ctaLink: "/puja-services",
    ctaText: "Explore Pooja Sevas",
  },
  {
    id: "visual-2",
    tag: "Sacred Unboxing",
    title: "Velvet & Brass Temple Chest",
    location: "Kashi Prasad Packing Sanctum",
    image: "/assets/puja-kits/03-rudrabhishek-pooja-kit.jpg",
    shortDesc: "Silk-lined wooden chest with fresh temple Bhasma, Gangajal vial, and certificate seal.",
    fullDesc: "Every order is packaged like a sacred offering. Enclosed inside a rich velvet-lined wooden sanctum box with an airtight vial of holy Ganga Jal, sanctified Bhasma (vibhuti) from the temple sanctum, brass incenses, and an embossed authenticity seal.",
    highlights: ["Silk-Lined Collector's Chest", "Temple Bhasma & Gangajal Vial", "Sacred Unboxing Experience"],
    ctaLink: "/puja-kits",
    ctaText: "View Sacred Puja Kits",
  },
  {
    id: "visual-3",
    tag: "Devotee Daily Sadhana",
    title: "108 Beads & Artisan Knots",
    location: "Hereditary Varanasi Guild",
    image: "/assets/mala/01_mala_regenerated_01.png",
    shortDesc: "Traditional Sumeru beads, pure 92.5 silver caps, and hand-strung silk knots.",
    fullDesc: "Each Mala is handcrafted following strict scriptural guidelines. With 108 auspicious beads and one dedicated Sumeru (Guru) bead, hand-knotted by traditional temple artisans with reinforced silk thread to endure lifelong daily Japa and meditation.",
    highlights: ["108 + 1 Sacred Sumeru Bead", "Traditional Hand-Knotted Silk", "Original Density & Deep Luster"],
    ctaLink: "/malas",
    ctaText: "Explore Sacred Malas",
  },
  {
    id: "visual-4",
    tag: "Lab Tested Purity",
    title: "Certified Natural Gemstones",
    location: "Gemmological & X-Ray Lab",
    image: "/assets/ratnas/emerald-panna.png",
    shortDesc: "100% natural, unheated earth-mined gems with verifiable QR laboratory reports.",
    fullDesc: "We maintain zero tolerance for synthetic or heat-treated stones. Every Navratna gemstone and Collector's Rudraksha bead is scientifically tested via X-Ray radiography and refractive index spectroscopy with an independent laboratory report.",
    highlights: ["100% Natural & Untreated", "Verifiable QR Test Certificate", "Jyotish-Grade Astrological Quality"],
    ctaLink: "/ratnas",
    ctaText: "View Certified Ratnas",
  },
];

function ArchivePhotoCard({
  item,
  onOpenModal,
}: {
  item: VisualItem;
  onOpenModal: (item: VisualItem) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 6;

    setMousePos({ x: percentX, y: percentY, rotateX, rotateY });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(item)}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-3.5 sm:p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-amber-500/50 hover:bg-zinc-900/90 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_30px_rgba(223,171,82,0.2)] cursor-pointer select-none [perspective:1000px]"
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 235, 180, 0.22), rgba(223, 171, 82, 0.12) 45%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Top Media Display */}
      <div
        className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900 to-zinc-950 transition-transform duration-500"
        style={{
          transform: isHovered
            ? `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-all duration-700 group-hover:scale-108 group-hover:brightness-105"
        />

        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

        {/* Top Tag Pill */}
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-black/70 px-2.5 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-[0_0_12px_rgba(223,171,82,0.2)]">
            <Sparkles className="h-2.5 w-2.5 text-amber-400" />
            {item.tag}
          </span>
        </div>

        {/* Hover View Button Icon */}
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
          <Eye className="h-4 w-4 text-amber-300" />
        </div>

        {/* Bottom Location Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-[11px] font-mono text-zinc-300">
          <MapPin className="h-3 w-3 text-amber-400 shrink-0" />
          <span className="truncate">{item.location}</span>
        </div>
      </div>

      {/* Card Info */}
      <div className="relative z-10 mt-3.5 space-y-1.5">
        <h4 className="font-serif text-base font-bold text-zinc-100 group-hover:text-amber-200 transition-colors">
          {item.title}
        </h4>
        <p className="text-xs leading-relaxed text-zinc-400 font-sans line-clamp-2">
          {item.shortDesc}
        </p>

        <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-amber-400/90 group-hover:text-amber-300">
          <span>View Archive Details</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
}

export default function VisualArchive() {
  const [activeItem, setActiveItem] = useState<VisualItem | null>(null);

  return (
    <div className="space-y-6">
      {/* 4 Rich Archive Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visualItems.map((item) => (
          <ArchivePhotoCard
            key={item.id}
            item={item}
            onOpenModal={(selected) => setActiveItem(selected)}
          />
        ))}
      </div>

      {/* Lightbox / Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-amber-500/40 bg-[#0c0d12] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(223,171,82,0.2)]">
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-zinc-300 backdrop-blur-md transition-all hover:bg-zinc-800 hover:text-white hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full bg-zinc-950">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/40 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-black/70 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-amber-300 backdrop-blur-md mb-2">
                  <Sparkles className="h-3 w-3 text-amber-400" />
                  {activeItem.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {activeItem.title}
                </h3>
                <p className="flex items-center gap-1.5 font-mono text-xs text-amber-200/90 mt-1">
                  <MapPin className="h-3.5 w-3.5 text-amber-400" />
                  {activeItem.location}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-sans">
                {activeItem.fullDesc}
              </p>

              {/* Highlights */}
              <div className="space-y-2 rounded-2xl border border-amber-500/15 bg-amber-500/5 p-4 sm:p-5">
                <h4 className="font-mono text-xs uppercase tracking-widest text-amber-300">
                  ✦ Sacred Standard & Guarantee
                </h4>
                <div className="grid gap-2 sm:grid-cols-3 pt-1">
                  {activeItem.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck className="h-4 w-4 text-amber-400" />
                  Authenticity Sealed by Kashi Prasad
                </div>

                <Link
                  href={activeItem.ctaLink}
                  onClick={() => setActiveItem(null)}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-amber-400/50 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(223,171,82,0.3)] transition-all hover:brightness-110 active:scale-95"
                >
                  <span>{activeItem.ctaText}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

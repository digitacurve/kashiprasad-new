"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, ShieldCheck, Sparkles, MapPin, Heart, MessageSquarePlus, X } from "lucide-react";
import Link from "next/link";
import { playLuxuryHaptic } from "@/lib/audio";

interface Review {
  id: string;
  name: string;
  city: string;
  avatarText: string;
  rating: number;
  date: string;
  category: "all" | "malas" | "rudraksha" | "ratnas" | "puja-kits";
  productName: string;
  productSlug: string;
  consecrationDetails: string;
  reviewTitle: string;
  reviewText: string;
  helpfulCount: number;
}

const devoteeReviews: Review[] = [
  {
    id: "rev-1",
    name: "Pandit Rajeshwar Sharma",
    city: "Varanasi / Lucknow",
    avatarText: "RS",
    rating: 5,
    date: "3 days ago",
    category: "malas",
    productName: "Original Karungali Malai (108 Beads)",
    productSlug: "/malas/original-karungali-malai-8mm",
    consecrationDetails: "Consecrated with Vedic Sankalp at Assi Ghat",
    reviewTitle: "Authentic dense ebony wood with divine energy",
    reviewText: "When I opened the sacred velvet box, the natural sandalwood aroma and energized presence was immediately felt. The beads have the authentic weight and deep obsidian luster that only genuine Karungali possesses. Pure bliss during morning Shiva Japa.",
    helpfulCount: 42,
  },
  {
    id: "rev-2",
    name: "Dr. Arvind Swaminathan",
    city: "Bengaluru",
    avatarText: "AS",
    rating: 5,
    date: "5 days ago",
    category: "rudraksha",
    productName: "Collector's 1 Mukhi Kaju Rudraksha",
    productSlug: "/rudraksha/1-mukhi-rudraksha",
    consecrationDetails: "Kashi Vishwanath Abhishekam Consecrated",
    reviewTitle: "X-Ray certified authenticity & flawless silver cap",
    reviewText: "I verified the laboratory QR certificate upon arrival — 100% natural Mukhi lineation with internal seed compartment intact. The 92.5 pure silver capping and Kashi Prasad authenticity seal give complete peace of mind. Om Namah Shivaya!",
    helpfulCount: 38,
  },
  {
    id: "rev-3",
    name: "Ananya Deshmukh",
    city: "South Mumbai",
    avatarText: "AD",
    rating: 5,
    date: "1 week ago",
    category: "ratnas",
    productName: "Natural Zambian Emerald (Panna)",
    productSlug: "/ratnas/natural-zambian-emerald-panna",
    consecrationDetails: "Budh Graha Vedic Shanti Consecration",
    reviewTitle: "Mesmerizing forest green luster & prompt support",
    reviewText: "The clarity and vivid green fire of this Panna are breathtaking. What truly touched me was their team consulting an astrologer to provide the exact auspicious Nakshatra and Muhurat to wear it. Truly a spiritually devoted brand.",
    helpfulCount: 29,
  },
  {
    id: "rev-4",
    name: "Meenakshi & Alok Agarwal",
    city: "New Delhi",
    avatarText: "MA",
    rating: 5,
    date: "2 weeks ago",
    category: "puja-kits",
    productName: "Complete Maha Rudrabhishek Kit",
    productSlug: "/puja-kits/complete-maha-rudrabhishek-kit",
    consecrationDetails: "Packed with Fresh Kashi Bhasma & Gangajal",
    reviewTitle: "Brought the sanctum of Varanasi into our home",
    reviewText: "Every single item in the wooden box was pure and thoughtfully curated: brass dhoop dani, pure Gangotri water, sacred vibhuti, and bilva patra. Our Maha Shivaratri puja felt as sacred as performing Abhishekam in Kashi itself.",
    helpfulCount: 54,
  },
  {
    id: "rev-5",
    name: "Siddharth Rao",
    city: "Hyderabad",
    avatarText: "SR",
    rating: 5,
    date: "2 weeks ago",
    category: "malas",
    productName: "Natural Sphatik Quartz Japa Mala",
    productSlug: "/malas/natural-sphatik-quartz-japa-mala",
    consecrationDetails: "Dashashwamedh Ganga Aarti Energized",
    reviewTitle: "Cold to the touch & immaculate quartz clarity",
    reviewText: "I tested the beads with the cold-touch and natural refraction test — 100% natural, unheated Himalayan quartz crystal. It instantly calms the nervous system during meditation. Truly blessed to have found Kashi Prasad.",
    helpfulCount: 21,
  },
  {
    id: "rev-6",
    name: "Kavita Singhal",
    city: "Jaipur",
    avatarText: "KS",
    rating: 5,
    date: "3 weeks ago",
    category: "rudraksha",
    productName: "5 Mukhi Nepali Rudraksha Kantha",
    productSlug: "/rudraksha/5-mukhi-rudraksha",
    consecrationDetails: "Personalized Gotra Sankalp Included",
    reviewTitle: "The personalized Gotra video brought tears of devotion",
    reviewText: "Receiving the WhatsApp video of the priest taking my family's Gotra and names during the morning Ganga Puja was an unforgettable touch. The large Nepali beads are deeply grooved and potent. Highly recommended.",
    helpfulCount: 33,
  },
];

const categoryTabs = [
  { id: "all", label: "All Devotee Reviews" },
  { id: "malas", label: "Sacred Malas" },
  { id: "rudraksha", label: "Rudraksha" },
  { id: "ratnas", label: "Ratnas & Gems" },
  { id: "puja-kits", label: "Puja Kits" },
];

export default function DevoteeStories() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [helpfulLiked, setHelpfulLiked] = useState<Record<string, boolean>>({});
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [submittedStory, setSubmittedStory] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    product: "Karungali Mala",
    rating: "5",
    experience: "",
  });

  const filteredReviews = devoteeReviews.filter((r) =>
    selectedCategory === "all" ? true : r.category === selectedCategory
  );

  const toggleHelpful = (id: string) => {
    playLuxuryHaptic();
    setHelpfulLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playLuxuryHaptic();
    setSubmittedStory(true);
    setTimeout(() => {
      setIsWriteModalOpen(false);
      setSubmittedStory(false);
      setFormData({ name: "", city: "", product: "Karungali Mala", rating: "5", experience: "" });
    }, 2200);
  };

  return (
    <div className="space-y-8">
      {/* Top Trust Summary Banner */}
      <div className="grid grid-cols-1 gap-4 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-950/30 via-zinc-900/60 to-zinc-950/80 p-4 sm:p-6 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.6)] md:grid-cols-3 md:items-center">
        {/* Rating Score */}
        <div className="flex items-center gap-3 sm:gap-4 border-b border-amber-500/10 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-400/20 to-amber-600/10 shadow-[0_0_20px_rgba(223,171,82,0.2)]">
            <span className="font-serif text-xl sm:text-2xl font-bold text-amber-300">4.95</span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(223,171,82,0.8)]" />
              ))}
            </div>
            <p className="mt-1 text-[11px] sm:text-xs font-medium text-zinc-300">
              Based on <span className="font-semibold text-amber-300">2,840+ verified</span> devotee experiences
            </p>
          </div>
        </div>

        {/* Spiritual Guarantees */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300 border-b border-amber-500/10 pb-4 md:border-b-0 md:border-r md:pb-0 md:px-4">
          <div className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[10px] sm:text-[11px] text-amber-300">
            <Sparkles className="h-3 w-3 text-amber-400" />
            100% Ganga Consecrated
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800/60 px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[10px] sm:text-[11px] text-zinc-300">
            <ShieldCheck className="h-3 w-3 text-emerald-400" />
            Govt Lab Tested
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800/60 px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[10px] sm:text-[11px] text-zinc-300">
            <MapPin className="h-3 w-3 text-amber-400" />
            Varanasi Direct
          </div>
        </div>

        {/* CTA Button to write story */}
        <div className="flex justify-start md:justify-end">
          <button
            onClick={() => {
              playLuxuryHaptic();
              setIsWriteModalOpen(true);
            }}
            className="group inline-flex items-center gap-2 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-amber-400/20 to-amber-500/15 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-amber-200 shadow-[0_0_15px_rgba(223,171,82,0.15)] transition-all duration-300 hover:border-amber-400 hover:bg-amber-400/30 hover:text-white hover:shadow-[0_0_25px_rgba(223,171,82,0.3)] active:scale-95 cursor-pointer"
          >
            <MessageSquarePlus className="h-4 w-4 text-amber-400 transition-transform group-hover:scale-110" />
            Share Your Experience
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
        {categoryTabs.map((tab) => {
          const isActive = selectedCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playLuxuryHaptic();
                setSelectedCategory(tab.id);
              }}
              className={`shrink-0 rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? "border border-amber-400 bg-amber-400/20 text-amber-200 shadow-[0_0_15px_rgba(223,171,82,0.25)]"
                  : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Reviews Grid (2 columns on mobile) */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
        {filteredReviews.map((review) => {
          const isLiked = helpfulLiked[review.id];
          return (
            <article
              key={review.id}
              className="group relative flex flex-col justify-between rounded-xl sm:rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/70 via-zinc-950/80 to-[#090a0d] p-3 sm:p-5 lg:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-[0_16px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(223,171,82,0.1)] active:scale-[0.98] active:border-amber-400/60 touch-luxury-card select-none"
            >
              {/* Subtle gold top border glow */}
              <div className="pointer-events-none absolute -top-px left-4 right-4 sm:left-8 sm:right-8 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="space-y-2.5 sm:space-y-4">
                {/* Header with Avatar, Name, and Verified Badge */}
                <div className="flex items-start justify-between gap-1.5 sm:gap-3">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-gradient-to-br from-amber-500/20 via-zinc-800 to-zinc-900 font-mono text-[10px] sm:text-xs font-bold text-amber-300 shadow-[0_0_10px_rgba(223,171,82,0.15)]">
                      {review.avatarText}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-serif text-xs sm:text-sm font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors truncate">
                        {review.name}
                      </h4>
                      <p className="flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[11px] text-zinc-400 truncate">
                        <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400/80 shrink-0" />
                        <span className="truncate">{review.city}</span>
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 sm:px-2 sm:py-0.5 text-[8px] sm:text-[10px] font-mono text-emerald-400 shrink-0">
                    <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    <span className="hidden sm:inline">Verified</span>
                  </span>
                </div>

                {/* Rating & Consecration Pill */}
                <div className="space-y-1 sm:space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(223,171,82,0.6)]"
                        />
                      ))}
                    </div>
                    <span className="text-[9px] sm:text-[11px] font-mono text-zinc-500">{review.date}</span>
                  </div>

                  <div className="inline-flex items-center gap-1 sm:gap-1.5 rounded-md sm:rounded-lg border border-amber-500/15 bg-amber-500/5 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[8.5px] sm:text-[10.5px] font-mono text-amber-300/90 max-w-full">
                    <Sparkles className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-amber-400 shrink-0" />
                    <span className="truncate">{review.consecrationDetails}</span>
                  </div>
                </div>

                {/* Review Content */}
                <div className="space-y-1 sm:space-y-2">
                  <h5 className="font-medium text-[11px] sm:text-sm text-zinc-200 leading-snug line-clamp-2">
                    &ldquo;{review.reviewTitle}&rdquo;
                  </h5>
                  <p className="text-[10px] sm:text-xs leading-relaxed text-zinc-400 font-sans line-clamp-3 sm:line-clamp-none">
                    {review.reviewText}
                  </p>
                </div>
              </div>

              {/* Bottom Footer with Product Link & Helpful Button */}
              <div className="mt-3 sm:mt-5 pt-2 sm:pt-3.5 border-t border-zinc-800/80 flex items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-xs">
                <Link
                  href={review.productSlug}
                  className="truncate text-[9px] sm:text-[11px] font-medium text-amber-400/90 hover:text-amber-300 hover:underline"
                >
                  ✦ {review.productName}
                </Link>

                <button
                  onClick={() => toggleHelpful(review.id)}
                  className={`flex items-center gap-1 rounded-md px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[11px] font-mono transition-all shrink-0 cursor-pointer ${
                    isLiked
                      ? "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                      : "text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"
                  }`}
                  title="Mark as helpful"
                >
                  <Heart className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${isLiked ? "fill-rose-400" : ""}`} />
                  <span>{review.helpfulCount + (isLiked ? 1 : 0)}</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Share Story Modal */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl border border-amber-500/30 bg-[#0c0d12] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_40px_rgba(223,171,82,0.15)]">
            <button
              onClick={() => setIsWriteModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {submittedStory ? (
              <div className="py-10 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 shadow-[0_0_25px_rgba(223,171,82,0.3)] animate-pulse">
                  <CheckCircle2 className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-200">Dhanyawaad for Sharing!</h3>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Your devotee experience has been submitted for temple verification and will be published shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1">
                  <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-amber-400">
                    ✦ Devotee Experience
                  </span>
                  <h3 className="font-serif text-xl font-bold text-zinc-100">Share Your Sacred Journey</h3>
                  <p className="text-xs text-zinc-400">
                    How was the energy, packaging, and consecration of your sacred item?
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900/90 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">City / State</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. New Delhi"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900/90 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">Sacred Item Received</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900/90 px-3 py-2 text-xs text-zinc-100 focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Karungali Mala">Original Karungali Malai (108 Beads)</option>
                    <option value="5 Mukhi Rudraksha">Nepali 5 Mukhi Rudraksha Kantha</option>
                    <option value="1 Mukhi Rudraksha">Collector's 1 Mukhi Rudraksha</option>
                    <option value="Natural Emerald (Panna)">Natural Zambian Emerald (Panna)</option>
                    <option value="Maha Rudrabhishek Kit">Complete Maha Rudrabhishek Kit</option>
                    <option value="Sphatik Mala">Sphatik Crystal Quartz Mala</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">Your Rating</label>
                  <div className="flex items-center gap-2">
                    {[5, 4, 3, 2, 1].map((num) => (
                      <label key={num} className="flex items-center gap-1 text-xs text-zinc-300 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          value={num}
                          checked={formData.rating === String(num)}
                          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                          className="accent-amber-400"
                        />
                        <span>{num} ★</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">Your Experience & Feedback</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="Describe the unboxing, fragrance, energy and your feelings..."
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900/90 p-3 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl border border-amber-400/50 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(223,171,82,0.3)] transition-all hover:brightness-110 active:scale-95"
                >
                  Submit For Verification
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

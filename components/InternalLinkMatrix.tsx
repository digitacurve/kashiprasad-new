import React from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, Gem, Compass } from "lucide-react";

export default function InternalLinkMatrix() {
  const clusters = [
    {
      title: "Nepali Rudraksha Collection",
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      links: [
        { name: "5 Mukhi Consecrated Nepali Rudraksha", href: "/products/5-mukhi-rudraksha" },
        { name: "1 Mukhi Round & Half-Moon Rudraksha", href: "/products/1-mukhi-rudraksha" },
        { name: "7 Mukhi Mahalaxmi Rudraksha (Wealth)", href: "/products/7-mukhi-rudraksha" },
        { name: "Gauri Shankar Consecrated Bead", href: "/products/gauri-shankar-rudraksha" },
        { name: "14 Mukhi Rare Dev Mani Rudraksha", href: "/products/14-mukhi-rudraksha" },
        { name: "All Certified Nepali Rudraksha (1-14 Mukhi)", href: "/rudraksha" },
      ],
    },
    {
      title: "Certified Vedic Gemstones (Ratnas)",
      icon: <Gem className="w-4 h-4 text-amber-400" />,
      links: [
        { name: "Natural Manikya (Ruby) — Surya Graha", href: "/products/ruby-manikya" },
        { name: "Untreated Panna (Emerald) — Budh Graha", href: "/products/emerald-panna" },
        { name: "Vedic Pukhraj (Yellow Sapphire) — Guru", href: "/products/yellow-sapphire-pukhraj" },
        { name: "Natural Basra Moti (Pearl) — Chandra Graha", href: "/products/pearl-moti" },
        { name: "Italian Red Coral (Moonga) — Mangal", href: "/products/red-coral-moonga" },
        { name: "Astrological Gemstones & Lab Reports", href: "/ratnas" },
      ],
    },
    {
      title: "Sacred Japa Malas (108 Beads)",
      icon: <Compass className="w-4 h-4 text-amber-400" />,
      links: [
        { name: "Consecrated Tulsi Japa Mala (108 Beads)", href: "/products/tulsi-japa-mala-108-beads" },
        { name: "Natural Sphatik (Quartz Crystal) Mala", href: "/products/sphatik-mala-108-beads" },
        { name: "Pure Sandalwood (Chandan) Prayer Mala", href: "/products/pure-sandalwood-chandan-mala-108-beads" },
        { name: "Kamal Gatta (Lotus Seed) Laxmi Mala", href: "/products/kamal-gatta-lotus-seed-mala-108-beads" },
        { name: "Divine Vaijayanti Mala (Lord Krishna)", href: "/products/divine-vaijayanti-jaap-mala-108-beads" },
        { name: "Explore All Consecrated Japa Malas", href: "/malas" },
      ],
    },
    {
      title: "Vedic Puja Services & Hawan Kits",
      icon: <ShieldCheck className="w-4 h-4 text-amber-400" />,
      links: [
        { name: "Kashi Vishwanath Rudrabhishek Puja", href: "/puja-services" },
        { name: "Mahamrityunjaya Jaap & Hawan Kit", href: "/products/mahamrityunjaya-jaap-kit" },
        { name: "Complete Griha Pravesh Vastu Pooja Kit", href: "/products/griha-pravesh-pooja-kit" },
        { name: "Navgraha Shanti & Dosh Nivaran Kit", href: "/products/navgraha-pooja-kit" },
        { name: "Watch 24x7 Live Varanasi Ganga Darshan", href: "/live-darshan" },
        { name: "Verify Digital Consecration Certificate", href: "/verify-certificate" },
      ],
    },
  ];

  return (
    <section className="border-t border-amber-500/10 bg-neutral-950/80 text-neutral-300 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Vedic Directory & Cross References
          </span>
          <h3 className="text-xl md:text-2xl font-serif text-neutral-100 font-normal mt-1">
            Explore Sacred Consecrated Collections & Jyotish Remedies
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clusters.map((cluster, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                {cluster.icon}
                <h4 className="text-sm font-semibold text-amber-200 tracking-wide">
                  {cluster.title}
                </h4>
              </div>
              <ul className="space-y-2">
                {cluster.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="text-xs text-neutral-400 hover:text-amber-300 transition-colors inline-block leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

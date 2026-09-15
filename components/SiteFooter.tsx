import Link from "next/link";

const groups = [
  [
    "Sacred Collections",
    [
      ["Puja Kits", "/puja-kits"],
      ["Rudraksha Malas", "/malas"],
      ["Nepali Rudraksha", "/rudraksha"],
      ["Vedic Jyotish Ratnas", "/ratnas"],
      ["Kashi Temple Services", "/puja-services"],
    ],
  ],
  [
    "Devotee Services",
    [
      ["📹 Live Kashi Darshan & Aarti", "/live-darshan"],
      ["🛡️ Verify Certificate", "/verify-certificate"],
      ["📦 Track My Sacred Order", "/track-order"],
      ["📿 Astrologer Consultation", "https://wa.me/918604971503"],
    ],
  ],
  [
    "My Account",
    [
      ["Devotee Profile", "/account"],
      ["My Sacred Orders", "/account#orders"],
      ["Saved Addresses", "/account#addresses"],
      ["Admin Access", "/admin"],
    ],
  ],
  [
    "Sacred Trust",
    [
      ["Varanasi Consecration Vidhi", "/verify-certificate"],
      ["100% Authenticity Guarantee", "/verify-certificate"],
      ["Ganga Purified Packaging", "/track-order"],
      ["Kashi Vidwat Consecration", "/puja-services"],
    ],
  ],
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-amber-500/15 bg-[#050609] px-4 py-12 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="font-serif text-xl font-bold tracking-[.18em] text-amber-100">
            KASHI PRASAD
          </p>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-zinc-400">
            Consecrated Vedic adornments, Nepali Rudrakshas, and authentic Jyotish gems sanctified on the sacred ghats of Kashi, Varanasi.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-mono text-amber-300">
            <span>✦ 100% Pran Pratishtha Verified</span>
          </div>
        </div>
        {groups.map(([title, links]) => (
          <div key={title as string}>
            <h2 className="text-xs font-semibold uppercase tracking-[.2em] text-amber-400 font-mono">
              {title as string}
            </h2>
            <ul className="mt-4 space-y-2">
              {(links as string[][]).map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-xs text-zinc-400 hover:text-amber-200 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-zinc-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
        <p>© {new Date().getFullYear()} Kashi Prasad. All rights sanctified under Baba Kashi Vishwanath grace.</p>
        <p className="text-zinc-400">Varanasi, Uttar Pradesh, Bharat</p>
      </div>
    </footer>
  );
}

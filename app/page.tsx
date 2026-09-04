import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#06080c] text-[#f5f5f7] selection:bg-amber-500/20 selection:text-amber-200">
        {/* Scroll-Driven Hero Section */}
        <Hero />

        {/* Sacred Collection Showcase Section */}
        <section
          id="collection"
          className="relative z-30 bg-[#080a0f] border-t border-amber-500/15 py-28 px-6 sm:px-12 lg:px-20"
        >
          {/* Subtle gold ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 mb-4">
                Sacred Offerings
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
                Consecrated Temple Relics
              </h2>
              <p className="text-zinc-400 font-subheading italic text-lg sm:text-xl mt-4 leading-relaxed">
                Hand-threaded by hereditary temple artisans and sanctified with
                Vedic rituals on the sacred banks of the Ganges.
              </p>
            </div>

            {/* Artifact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Consecrated Mala */}
              <div className="group relative bg-zinc-900/40 rounded-2xl border border-zinc-800/80 hover:border-amber-500/40 p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-square w-full rounded-xl bg-gradient-to-b from-zinc-900 to-black p-6 flex items-center justify-center overflow-hidden mb-6 border border-zinc-800/50 group-hover:border-amber-500/30 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/hero/assets/full-rudraksha-mala.png"
                      alt="108-Bead Consecrated Rudraksha Mala"
                      className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 text-[11px] font-mono uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                      Consecrated
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-widest text-amber-500/80 font-medium">
                    108 Sacred Beads
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-zinc-100 mt-1 group-hover:text-amber-300 transition-colors">
                    Kashi Vishwanath 5-Mukhi Mala
                  </h3>
                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                    Sourced from high-altitude trees in Nepal, calibrated for
                    uniformity, and consecrated with Bilva patra and Ganga jal.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-500 block">Offerings</span>
                    <span className="font-serif text-lg font-bold text-zinc-100">
                      ₹ 4,999
                    </span>
                  </div>
                  <button className="px-4 py-2 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 hover:border-amber-500/50 text-amber-200 text-xs font-semibold tracking-wider uppercase transition-all">
                    Acquire
                  </button>
                </div>
              </div>

              {/* Card 2: Collector 5-Mukhi Rudraksha */}
              <div className="group relative bg-zinc-900/40 rounded-2xl border border-zinc-800/80 hover:border-amber-500/40 p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-square w-full rounded-xl bg-gradient-to-b from-zinc-900 to-black p-6 flex items-center justify-center overflow-hidden mb-6 border border-zinc-800/50 group-hover:border-amber-500/30 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/hero/assets/rudraksha-bead.png"
                      alt="Single Consecrated 5-Mukhi Rudraksha Bead"
                      className="max-h-[85%] max-w-[85%] object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 text-[11px] font-mono uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                      5-Mukhi
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-widest text-amber-500/80 font-medium">
                    Sacred Seed
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-zinc-100 mt-1 group-hover:text-amber-300 transition-colors">
                    Collector 5-Mukhi Bead
                  </h3>
                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                    Symmetrically divided with 5 natural facets (mukhis).
                    Selected for meditation, protection, and inner clarity.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-500 block">Offerings</span>
                    <span className="font-serif text-lg font-bold text-zinc-100">
                      ₹ 1,499
                    </span>
                  </div>
                  <button className="px-4 py-2 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 hover:border-amber-500/50 text-amber-200 text-xs font-semibold tracking-wider uppercase transition-all">
                    Acquire
                  </button>
                </div>
              </div>

              {/* Card 3: Sumeru Guru Bead */}
              <div className="group relative bg-zinc-900/40 rounded-2xl border border-zinc-800/80 hover:border-amber-500/40 p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-square w-full rounded-xl bg-gradient-to-b from-zinc-900 to-black p-6 flex items-center justify-center overflow-hidden mb-6 border border-zinc-800/50 group-hover:border-amber-500/30 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/hero/assets/guru-bead.png"
                      alt="Hand-Carved Sumeru Guru Bead"
                      className="max-h-[85%] max-w-[85%] object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 text-[11px] font-mono uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                      Rare 5-Lobe
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-widest text-amber-500/80 font-medium">
                    Central Talisman
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-zinc-100 mt-1 group-hover:text-amber-300 transition-colors">
                    Sumeru Master Guru Bead
                  </h3>
                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                    The supreme bead anchoring spiritual energy. Deeply
                    pronounced mukhis with brass tassel binding ring.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-500 block">Offerings</span>
                    <span className="font-serif text-lg font-bold text-zinc-100">
                      ₹ 1,899
                    </span>
                  </div>
                  <button className="px-4 py-2 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 hover:border-amber-500/50 text-amber-200 text-xs font-semibold tracking-wider uppercase transition-all">
                    Acquire
                  </button>
                </div>
              </div>
            </div>

            {/* Heritage / Trust Badges */}
            <div className="mt-20 py-12 px-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/60 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="text-2xl block mb-2">🕉️</span>
                <h4 className="font-serif text-sm font-semibold tracking-wide text-zinc-200">
                  Vedic Consecration
                </h4>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                  Energized with continuous Rudrabhishekam chants at Manikarnika
                  and Vishwanath shrines.
                </p>
              </div>
              <div>
                <span className="text-2xl block mb-2">💎</span>
                <h4 className="font-serif text-sm font-semibold tracking-wide text-zinc-200">
                  Authenticity Guaranteed
                </h4>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                  100% natural, untreated Elaeocarpus ganitrus seeds with lab
                  verification certificate.
                </p>
              </div>
              <div>
                <span className="text-2xl block mb-2">🪷</span>
                <h4 className="font-serif text-sm font-semibold tracking-wide text-zinc-200">
                  Sacred Delivery
                </h4>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                  Encased in temple silk pouches with blessed vibhuti and sacred
                  Ganga jal vials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spiritual Footer */}
        <footer className="bg-[#050609] border-t border-zinc-900 py-12 px-6 text-center text-xs text-zinc-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-serif text-sm text-zinc-400 tracking-wider">
              KASHI PRASAD • VARANASI
            </span>
            <span>
              &copy; {new Date().getFullYear()} Kashi Prasad Heritage. All Rights
              Reserved.
            </span>
            <span className="text-amber-500/80 font-serif">
              ॐ नमः शिवाय • Har Har Mahadev
            </span>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}

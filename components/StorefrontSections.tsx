import {
  featuredProducts,
  storeCategories,
  trustPillars,
} from "@/data/storefront";

import ProductCard from "./ProductCard";
import FeaturedRubyCard from "./FeaturedRubyCard";
import FeaturedServiceCard from "./FeaturedServiceCard";
import CategoryCard from "./CategoryCard";
import TrustPillarCard from "./TrustPillarCard";
import DevoteeStories from "./DevoteeStories";
import VisualArchive from "./VisualArchive";

const sectionClass = "border-t border-amber-500/10 px-4 py-16 sm:px-8 sm:py-24";

function Title({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="relative mb-10 sm:mb-14 max-w-3xl">
      {/* Sacred Golden Ambient Aura Bloom */}
      <div
        className="pointer-events-none absolute -left-12 -top-12 -z-10 h-48 w-80 rounded-full bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-transparent blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Eyebrow Pill with Pulsing Sacred Beacon */}
      <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent px-3.5 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-amber-300 shadow-[0_0_20px_rgba(223,171,82,0.12)] backdrop-blur-md mb-3.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400 shadow-[0_0_8px_rgba(223,171,82,0.8)]"></span>
        </span>
        <span>✦ {eyebrow}</span>
      </div>

      {/* Headline with Dynamic Liquid Gold Shimmer */}
      <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-[#fff8eb] via-amber-200 via-amber-400 to-zinc-200 animate-gold-shimmer drop-shadow-[0_4px_24px_rgba(223,171,82,0.18)]">
        {title}
      </h2>

      {/* Refined Sacred Gold Hairline Divider */}
      <div className="flex items-center gap-3 my-3 sm:my-4" aria-hidden="true">
        <div className="h-[1px] w-12 bg-gradient-to-r from-amber-400/80 to-transparent" />
        <span className="text-[11px] text-amber-400/90 select-none animate-pulse">✧</span>
        <div className="h-[1px] w-28 bg-gradient-to-r from-amber-400/40 via-amber-400/10 to-transparent" />
      </div>

      {/* Crisp Luxury Copy */}
      <p className="text-sm sm:text-base leading-relaxed text-zinc-400/90 sm:text-lg max-w-2xl font-sans">
        {copy}
      </p>
    </div>
  );
}

import DynamicFeaturedCollection from "./DynamicFeaturedCollection";

export function FeaturedCollection() {
  return <DynamicFeaturedCollection />;
}

export function ShopByCategory() {
  return (
    <section className={sectionClass}>
      <div className="mx-auto max-w-7xl">
        <Title
          eyebrow="Explore the store"
          title="Shop by Category"
          copy="Five carefully organised paths into the Kashi Prasad experience."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {storeCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CustomerExperience() {
  return (
    <section className={sectionClass}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300 mb-3">
            <span>✦ The Sacred Promise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
            Pavitra Kashi Sankalp
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Four eternal pillars of authentic Varanasi consecration, lab-tested purity guarantee, complimentary Gangajal gifts, and lifetime priestly guidance.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((pillar, index) => (
            <TrustPillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsAndPhotos() {
  return (
    <>
      {/* Devotee Stories & Verified Testimonials */}
      <section className={sectionClass}>
        <div className="mx-auto max-w-7xl">
          <Title
            eyebrow="Blessed Experiences"
            title="Devotee Stories"
            copy="Real voices of devotees across India and abroad who received authentic, consecrated sacred items direct from Kashi."
          />
          <DevoteeStories />
        </div>
      </section>

      {/* Visual Archive & Social Proof Gallery */}
      <section className={sectionClass}>
        <div className="mx-auto max-w-7xl">
          <Title
            eyebrow="Sacred Heritage"
            title="Photos & Social Proof"
            copy="An authentic glimpse into Varanasi Ganga Ghat consecrations, premium velvet packaging, artisan beadwork, and certified laboratory testing."
          />
          <VisualArchive />
        </div>
      </section>
    </>
  );
}

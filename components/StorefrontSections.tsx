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
import ArchiveCard from "./ArchiveCard";

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

export function FeaturedCollection() {
  return (
    <section id="collection" className={sectionClass}>
      <div className="mx-auto max-w-7xl">
        <Title
          eyebrow="Curated selection"
          title="Featured Collection"
          copy="A rotating selection across the physical collections. Puja services remain separate from the product catalogue."
        />
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-3.5 lg:gap-4 sm:overflow-visible sm:pb-0">
          {/* 1st Slot: Ruby Gemstone with Interactive Holographic Parallax */}
          <div className="w-[68vw] max-w-[240px] shrink-0 snap-start sm:w-auto">
            <FeaturedRubyCard />
          </div>

          {/* 2nd, 3rd, 4th Slots: Featured Products */}
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="w-[68vw] max-w-[240px] shrink-0 snap-start sm:w-auto"
            >
              <ProductCard product={product} />
            </div>
          ))}

          {/* 5th Slot: Kashi Vishwanath Pooja Services */}
          <div className="w-[68vw] max-w-[240px] shrink-0 snap-start sm:w-auto">
            <FeaturedServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
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
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <Title
          eyebrow="My Kashi Prasad"
          title="A considered experience"
          copy="The store is designed to make every part of discovery, purchase and future ritual booking clear and dependable."
        />
        <div className="grid gap-3 sm:grid-cols-3">
          {trustPillars.map(([title, copy], index) => (
            <TrustPillarCard key={title} title={title} copy={copy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsAndPhotos() {
  return (
    <>
      <section className={sectionClass}>
        <div className="mx-auto max-w-7xl">
          <Title
            eyebrow="Reviews"
            title="Devotee stories"
            copy="Verified customer reviews will appear here once they are collected and approved. No testimonials are shown until real review data is available."
          />
          <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/40 p-8 text-center text-sm text-zinc-500 transition-all duration-300 hover:border-amber-500/40 hover:text-zinc-400 hover:shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(223,171,82,0.12)]">
            Review collection is being prepared.
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mx-auto max-w-7xl">
          <Title
            eyebrow="Visual archive"
            title="Photos & social proof"
            copy="Customer photographs, packaging moments and ritual imagery can be added here when the brand has approved assets."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Customer product photos",
              "Ritual experiences",
              "Packaging moments",
              "Brand imagery",
            ].map((label) => (
              <ArchiveCard key={label} label={label} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

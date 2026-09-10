import Image from "next/image";
import Link from "next/link";
import {
  comingSoonProductSlots,
  featuredProducts,
  storeCategories,
  trustPillars,
} from "@/data/storefront";

import { Gem, Flame, ArrowRight } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import ProductCard from "./ProductCard";

const sectionClass = "border-t border-amber-500/10 px-4 py-16 sm:px-8 sm:py-24";

function Title({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="mb-9 max-w-2xl">
      <p className="text-xs uppercase tracking-[.22em] text-amber-400">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-bold uppercase text-zinc-100 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-zinc-400 sm:text-lg">{copy}</p>
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-square items-center justify-center rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900 to-[#090a0d] p-4 text-center text-[10px] sm:text-[11px] uppercase tracking-[.16em] text-zinc-500">
      {label}
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
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="w-[68vw] max-w-[240px] shrink-0 snap-start sm:w-auto"
            >
              <ProductCard product={product} />
            </div>
          ))}
          {comingSoonProductSlots.map((slot) => (
            <article
              key={slot.id}
              className="w-[68vw] max-w-[240px] shrink-0 snap-start sm:w-auto flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-2.5 sm:p-3"
            >
              <Placeholder label={slot.label} />
              <div className="mt-2.5 flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-amber-400/90 truncate">
                    {slot.category}
                  </p>
                  <h3 className="mt-1 font-serif text-xs sm:text-sm font-medium text-zinc-400 leading-snug">
                    Collection in Preparation
                  </h3>
                </div>
              </div>
            </article>
          ))}
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
            <CardContainer
              key={category.id}
              containerClassName="w-full py-0 block"
              className="w-full h-full"
            >
              <CardBody className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-4 sm:p-5 transition-all duration-300 hover:border-amber-500/50 hover:bg-zinc-900/70 hover:shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(223,171,82,0.15)] [transform-style:preserve-3d]">
                {/* Subtle Dynamic Cursor-Follow Golden Spotlight */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(223, 171, 82, 0.18), transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                {/* Subtle Golden Border Highlight */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl border border-amber-400/0 opacity-0 transition-all duration-300 group-hover:border-amber-400/40 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <Link href={category.href} className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    {/* Visual Box (Layer 1 - Highest Lift & Deep Shadow) */}
                    <CardItem
                      translateZ={45}
                      className="relative mb-4 sm:mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800/80 flex items-center justify-center shadow-lg transition-shadow duration-300 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(223,171,82,0.12)] group-hover:border-amber-500/30"
                    >
                      {category.image ? (
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-contain p-3.5 transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(min-width: 1024px) 20vw, 50vw"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-2 text-amber-400/85">
                          {category.id === "ratnas" ? (
                            <Gem className="h-10 w-10 stroke-[1.5] text-amber-400 drop-shadow-[0_4px_12px_rgba(223,171,82,0.3)] transition-transform duration-300 group-hover:scale-115" />
                          ) : (
                            <Flame className="h-10 w-10 stroke-[1.5] text-amber-400 drop-shadow-[0_4px_12px_rgba(223,171,82,0.3)] transition-transform duration-300 group-hover:scale-115" />
                          )}
                        </div>
                      )}
                    </CardItem>

                    {/* Content (Layer 2 - Floating Title) */}
                    <CardItem translateZ={30} className="w-full">
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-zinc-100 group-hover:text-amber-200 transition-colors drop-shadow-sm">
                        {category.name}
                      </h3>
                    </CardItem>

                    {/* Description (Layer 3 - Mid Depth) */}
                    <CardItem translateZ={18} className="w-full mt-1.5">
                      <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 line-clamp-2">
                        {category.description}
                      </p>
                    </CardItem>
                  </div>

                  {/* Explore Link (Layer 4 - Front Action) */}
                  <CardItem translateZ={35} className="mt-4 pt-3 border-t border-zinc-800/60 w-full">
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-400 group-hover:text-amber-300 transition-colors font-mono font-medium">
                      <span>Explore</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </CardItem>
                </Link>
              </CardBody>
            </CardContainer>
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
            <article key={title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <span className="text-xs text-amber-400">0{index + 1}</span>
              <h3 className="mt-8 font-serif text-xl text-zinc-100">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{copy}</p>
            </article>
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
          <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/40 p-8 text-sm text-zinc-500">
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
              <Placeholder key={label} label={label} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

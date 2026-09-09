"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

import { Product } from "@/data/types";

export type CollectionProduct = Product;

interface CollectionPageProps {
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
  emptyMessage?: string;
  subcategories?: string[];
}

function RudrakshaProductCard({ product }: { product: CollectionProduct }) {
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const touchTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    return () => {
      if (imgWrapperRef.current) {
        gsap.killTweensOf(imgWrapperRef.current);
      }
      if (touchTimelineRef.current) {
        touchTimelineRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (!imgWrapperRef.current) return;
    if (touchTimelineRef.current) {
      touchTimelineRef.current.kill();
    }
    gsap.killTweensOf(imgWrapperRef.current);
    gsap.to(imgWrapperRef.current, {
      scale: 1.06,
      rotation: 2.5,
      y: -4,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (!imgWrapperRef.current) return;
    if (touchTimelineRef.current) {
      touchTimelineRef.current.kill();
    }
    gsap.killTweensOf(imgWrapperRef.current);
    gsap.to(imgWrapperRef.current, {
      scale: 1,
      rotation: 0,
      y: 0,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleTouch = () => {
    if (!imgWrapperRef.current) return;
    gsap.killTweensOf(imgWrapperRef.current);
    if (touchTimelineRef.current) {
      touchTimelineRef.current.kill();
    }

    const tl = gsap.timeline();
    touchTimelineRef.current = tl;

    tl.to(imgWrapperRef.current, {
      scale: 1.06,
      rotation: 2.5,
      y: -4,
      duration: 0.4,
      ease: "power2.out",
    }).to(imgWrapperRef.current, {
      scale: 1,
      rotation: 0,
      y: 0,
      duration: 0.45,
      ease: "power2.out",
      delay: 0.2,
    });
  };

  const cardContent = (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouch}
      className="group h-full flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 transition-colors duration-300 hover:border-amber-500/45 select-none"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900">
        <div
          ref={imgWrapperRef}
          className="relative w-full h-full will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 select-none pointer-events-none"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
      </div>
      {product.badge && (
        <p className="mt-4 text-xs uppercase tracking-widest text-amber-400">{product.badge}</p>
      )}
      <h2 className={`font-serif text-xl text-zinc-100 ${product.badge ? "mt-2" : "mt-4"}`}>
        {product.name}
      </h2>
      {product.price !== undefined && (
        <p className="mt-2 text-sm text-zinc-400">₹{product.price.toLocaleString("en-IN")}</p>
      )}
    </div>
  );

  return product.slug ? (
    <Link href={`/products/${product.slug}`} key={product.id}>
      {cardContent}
    </Link>
  ) : (
    <div key={product.id}>
      {cardContent}
    </div>
  );
}

function StandardProductCard({ product }: { product: CollectionProduct }) {
  const cardContent = (
    <div className="group h-full flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 transition hover:-translate-y-1 hover:border-amber-500/45">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      {product.badge && (
        <p className="mt-4 text-xs uppercase tracking-widest text-amber-400">{product.badge}</p>
      )}
      <h2 className={`font-serif text-xl text-zinc-100 ${product.badge ? "mt-2" : "mt-4"}`}>
        {product.name}
      </h2>
      {product.price !== undefined && (
        <p className="mt-2 text-sm text-zinc-400">₹{product.price.toLocaleString("en-IN")}</p>
      )}
    </div>
  );

  return product.slug ? (
    <Link href={`/products/${product.slug}`} key={product.id}>
      {cardContent}
    </Link>
  ) : (
    <div key={product.id}>
      {cardContent}
    </div>
  );
}

export default function CollectionPage({ eyebrow, title, description, products, emptyMessage, subcategories }: CollectionPageProps) {
  const isRudraksha = eyebrow.toLowerCase() === "rudraksha";

  return (
    <div className="min-h-screen bg-[#06080c] text-zinc-100">
      <SiteHeader />
      <main>
        <section className="border-b border-amber-500/10 px-4 py-16 text-center sm:px-8 sm:py-24">
          <p className="text-xs uppercase tracking-[.22em] text-amber-400">{eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl font-bold uppercase sm:text-6xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">{description}</p>
          {subcategories && (
            <div className="mt-7 flex justify-center gap-2">
              {subcategories.map((item) => (
                <span key={item} className="rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-xs text-amber-300">
                  {item}
                </span>
              ))}
            </div>
          )}
        </section>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
          {products.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) =>
                isRudraksha ? (
                  <RudrakshaProductCard key={product.id} product={product} />
                ) : (
                  <StandardProductCard key={product.id} product={product} />
                )
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/40 p-10 text-center text-zinc-500">
              {emptyMessage ?? "This collection is being prepared. Product details and imagery will appear here once approved."}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}



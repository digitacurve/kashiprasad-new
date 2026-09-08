import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export interface CollectionProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  price: number;
  badge: string;
}

interface CollectionPageProps {
  eyebrow: string;
  title: string;
  description: string;
  products: CollectionProduct[];
  emptyMessage?: string;
  subcategories?: string[];
}

export default function CollectionPage({ eyebrow, title, description, products, emptyMessage, subcategories }: CollectionPageProps) {
  return <div className="min-h-screen bg-[#06080c] text-zinc-100"><SiteHeader /><main><section className="border-b border-amber-500/10 px-4 py-16 text-center sm:px-8 sm:py-24"><p className="text-xs uppercase tracking-[.22em] text-amber-400">{eyebrow}</p><h1 className="mt-3 font-serif text-4xl font-bold uppercase sm:text-6xl">{title}</h1><p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">{description}</p>{subcategories && <div className="mt-7 flex justify-center gap-2">{subcategories.map((item) => <span key={item} className="rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-xs text-amber-300">{item}</span>)}</div>}</section><section className="mx-auto max-w-7xl px-4 py-14 sm:px-8">{products.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <Link href={`/products/${product.slug}`} key={product.id} className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 transition hover:-translate-y-1 hover:border-amber-500/45"><div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900"><Image src={product.image} alt={product.name} fill className="object-contain p-4 transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" /></div><p className="mt-4 text-xs uppercase tracking-widest text-amber-400">{product.badge}</p><h2 className="mt-2 font-serif text-xl text-zinc-100">{product.name}</h2><p className="mt-2 text-sm text-zinc-400">₹{product.price.toLocaleString("en-IN")}</p></Link>)}</div> : <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/40 p-10 text-center text-zinc-500">{emptyMessage ?? "This collection is being prepared. Product details and imagery will appear here once approved."}</div>}</section></main><SiteFooter /></div>;
}

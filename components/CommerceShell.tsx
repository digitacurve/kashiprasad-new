import Link from "next/link";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function CommerceShell({
  title,
  copy,
  children,
}: {
  title: string;
  copy: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#06080c] text-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-8">
        <p className="text-xs uppercase tracking-[.22em] text-amber-400">Kashi Prasad</p>
        <h1 className="mt-3 font-serif text-4xl font-bold uppercase sm:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">{copy}</p>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function EmptyState({
  message,
  action,
}: {
  message: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="mt-10 rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/50 p-8 text-center">
      <p className="text-zinc-500">{message}</p>
      {action && (
        <Link
          href={action.href}
          className="mt-5 inline-block rounded-full border border-amber-500/40 px-5 py-2 text-xs uppercase tracking-wider text-amber-300"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}

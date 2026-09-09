import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-[#06080c] text-zinc-100">
      <SiteHeader />
      <main>
        <section className="border-b border-amber-500/10 px-4 py-16 text-center sm:px-8 sm:py-24">
          <p className="text-xs uppercase tracking-[.22em] text-amber-400">Puja services</p>
          <h1 className="mt-3 font-serif text-4xl font-bold uppercase sm:text-6xl">
            Book a sacred service
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            A dedicated service experience for ritual information, devotee details, scheduling and
            booking history.
          </p>
        </section>
        <section className="mx-auto grid max-w-5xl gap-4 px-4 py-14 sm:grid-cols-3 sm:px-8">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
            <p className="text-xs uppercase tracking-widest text-amber-400">01</p>
            <h2 className="mt-5 font-serif text-xl">Choose a service</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Approved ritual listings will appear here.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
            <p className="text-xs uppercase tracking-widest text-amber-400">02</p>
            <h2 className="mt-5 font-serif text-xl">Share your details</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Devotee information, dates and preferences will be captured securely.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
            <p className="text-xs uppercase tracking-widest text-amber-400">03</p>
            <h2 className="mt-5 font-serif text-xl">Confirm your booking</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Booking confirmation and history are prepared for future integration.
            </p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

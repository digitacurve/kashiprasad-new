import Link from "next/link";

const groups = [
  [
    "Shop",
    [
      ["Puja Kits", "/puja-kits"],
      ["Mala", "/malas"],
      ["Rudraksha", "/rudraksha"],
      ["Ratnas", "/ratnas"],
    ],
  ],
  ["Services", [["Puja Services", "/puja-services"]]],
  [
    "Customer",
    [
      ["My Account", "/account"],
      ["Orders", "/account#orders"],
      ["Wishlist", "/account#wishlist"],
      ["Support", "/account#support"],
    ],
  ],
  [
    "Information",
    [
      ["About", "/about"],
      ["Shipping", "/shipping"],
      ["Returns", "/returns"],
      ["Privacy Policy", "/privacy"],
      ["Terms & Conditions", "/terms"],
      ["Contact", "/contact"],
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
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
            A considered home for sacred products and future ritual experiences.
          </p>
        </div>
        {groups.map(([title, links]) => (
          <div key={title as string}>
            <h2 className="text-xs font-semibold uppercase tracking-[.2em] text-amber-400">
              {title as string}
            </h2>
            <ul className="mt-4 space-y-2">
              {(links as string[][]).map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-zinc-500 hover:text-amber-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

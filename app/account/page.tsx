import CommerceShell, { EmptyState } from "@/components/CommerceShell";
export default function AccountPage() {
  return (
    <CommerceShell
      title="Your account"
      copy="An account area prepared for secure sign-in, profile, orders, saved addresses, wishlist and puja booking history."
    >
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {["Profile", "Orders", "Saved addresses", "Wishlist", "Puja bookings", "Support"].map(
          (item) => (
            <div
              key={item}
              className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 font-serif text-xl"
            >
              {item}
            </div>
          )
        )}
      </div>
      <EmptyState message="Authentication and customer data are not connected yet, so no account information is shown." />
    </CommerceShell>
  );
}

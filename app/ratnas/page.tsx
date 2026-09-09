import CollectionPage from "@/components/CollectionPage";

export const metadata = { title: "Ratnas | Kashi Prasad" };
export default function RatnasPage() {
  return (
    <CollectionPage
      eyebrow="Ratnas"
      title="Gemstones & Stones"
      description="Ratnas is the single top-level collection for future gemstone and stone catalogues."
      products={[]}
      subcategories={["Gemstones", "Stones"]}
      emptyMessage="Approved Ratnas products and imagery will appear here. Gemstones and Stones remain filters within Ratnas, not top-level collections."
    />
  );
}

import CollectionPage from "@/components/CollectionPage";
import { ratnaProducts } from "@/data/ratnas";

export const metadata = { title: "Ratnas | Kashi Prasad" };
export default function RatnasPage() {
  return (
    <CollectionPage
      eyebrow="Ratnas"
      title="Sacred Vedic Ratnas"
      description="Natural, astrologically certified gemstones consecrated along the sacred ghats of Varanasi."
      products={ratnaProducts}
      emptyMessage="Approved Ratnas products and imagery will appear here."
    />
  );
}

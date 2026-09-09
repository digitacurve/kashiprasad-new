import CollectionPage from "@/components/CollectionPage";
import { pujaKitProducts } from "@/data/pujaKits";

export const metadata = { title: "Puja Kits | Kashi Prasad" };
export default function PujaKitsPage() {
  return (
    <CollectionPage
      eyebrow="Puja Kits"
      title="Ritual essentials"
      description="Existing product information is preserved here for browsing and future filtering."
      products={pujaKitProducts.filter((product) => !product.isPlaceholder)}
    />
  );
}

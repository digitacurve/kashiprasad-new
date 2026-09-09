import CollectionPage from "@/components/CollectionPage";
import { malaProducts } from "@/data/malas";

export const metadata = { title: "Mala | Kashi Prasad" };
export default function MalasPage() {
  return (
    <CollectionPage
      eyebrow="Mala"
      title="Prayer malas"
      description="Browse the existing mala catalogue. Variants and Divine Offering remain product-level choices."
      products={malaProducts.filter((product) => !product.isPlaceholder)}
    />
  );
}

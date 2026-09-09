import CollectionPage from "@/components/CollectionPage";
import { malaProducts } from "@/data/malas";
import { getProductsByCategory } from "@/lib/data/catalog";

export const metadata = { title: "Mala | Kashi Prasad" };

export default async function MalasPage() {
  let products = await getProductsByCategory("malas");
  if (!products || products.length === 0) {
    products = malaProducts.filter((product) => !product.isPlaceholder);
  }

  return (
    <CollectionPage
      eyebrow="Mala"
      title="Prayer malas"
      description="Browse the existing mala catalogue. Variants and Divine Offering remain product-level choices."
      products={products}
    />
  );
}

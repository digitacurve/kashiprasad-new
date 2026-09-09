import CollectionPage from "@/components/CollectionPage";
import { pujaKitProducts } from "@/data/pujaKits";
import { getProductsByCategory } from "@/lib/data/catalog";

export const metadata = { title: "Puja Kits | Kashi Prasad" };

export default async function PujaKitsPage() {
  let products = await getProductsByCategory("puja-kits");
  if (!products || products.length === 0) {
    products = pujaKitProducts.filter((product) => !product.isPlaceholder);
  }

  return (
    <CollectionPage
      eyebrow="Puja Kits"
      title="Ritual essentials"
      description="Existing product information is preserved here for browsing and future filtering."
      products={products}
    />
  );
}

import CollectionPage from "@/components/CollectionPage";
import { rudrakshaProducts } from "@/data/rudraksha";
import { getProductsByCategory } from "@/lib/data/catalog";

export const metadata = { title: "Rudraksha | Kashi Prasad" };

export default async function RudrakshaPage() {
  let products = await getProductsByCategory("rudraksha");
  if (!products || products.length === 0) {
    products = rudrakshaProducts;
  }

  return (
    <CollectionPage
      eyebrow="Rudraksha"
      title="Sacred Rudraksha"
      description="A dedicated catalogue prepared for Mukhi types, sizes, variants and future certification details."
      products={products}
    />
  );
}

import CollectionPage from "@/components/CollectionPage";
import { rudrakshaProducts } from "@/data/rudraksha";

export const metadata = { title: "Rudraksha | Kashi Prasad" };

export default function RudrakshaPage() {
  return (
    <CollectionPage
      eyebrow="Rudraksha"
      title="Sacred Rudraksha"
      description="A dedicated catalogue prepared for Mukhi types, sizes, variants and future certification details."
      products={rudrakshaProducts}
    />
  );
}

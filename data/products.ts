import { pujaKitProducts, PujaKitProduct } from "./pujaKits";
import { malaProducts, MalaProduct } from "./malas";

export type Product = PujaKitProduct | MalaProduct;

export const allProducts: Product[] = [...pujaKitProducts, ...malaProducts];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getAllActiveProducts(): Product[] {
  return allProducts.filter((p) => !p.isPlaceholder);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export { pujaKitProducts, malaProducts };

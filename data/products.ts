import { Product } from "./types";
import { pujaKitProducts } from "./pujaKits";
import { malaProducts } from "./malas";
import { rudrakshaProducts } from "./rudraksha";

export * from "./types";
export { pujaKitProducts, malaProducts, rudrakshaProducts };

export const allProducts: Product[] = [...pujaKitProducts, ...malaProducts, ...rudrakshaProducts];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getAllActiveProducts(): Product[] {
  return allProducts.filter((p) => !p.isPlaceholder);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

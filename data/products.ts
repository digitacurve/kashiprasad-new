import { Product } from "./types";
import { ratnaProducts, rubyProduct, pearlProduct, redCoralProduct, emeraldProduct, yellowSapphireProduct, diamondProduct, blueSapphireProduct, hessoniteProduct, catsEyeProduct } from "./ratnas";
import { pujaKitProducts } from "./pujaKits";
import { malaProducts } from "./malas";
import { rudrakshaProducts } from "./rudraksha";
import { kashiPoojaServices } from "./pujaServices";

export * from "./types";
export { ratnaProducts, rubyProduct, pearlProduct, redCoralProduct, emeraldProduct, yellowSapphireProduct, diamondProduct, blueSapphireProduct, hessoniteProduct, catsEyeProduct, pujaKitProducts, malaProducts, rudrakshaProducts, kashiPoojaServices };




export const allProducts: Product[] = [
  ...ratnaProducts,
  ...pujaKitProducts,
  ...malaProducts,
  ...rudrakshaProducts,
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getAllActiveProducts(): Product[] {
  return allProducts.filter((p) => !p.isPlaceholder);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

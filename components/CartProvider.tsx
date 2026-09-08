"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface StoredCartItem {
  lineId: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  variantId: string;
  variantName: string;
  price: number;
  quantity: number;
  divineOffering: boolean;
}

interface CartContextValue {
  items: StoredCartItem[];
  addItem: (item: Omit<StoredCartItem, "lineId" | "quantity">) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "kashi-prasad-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<StoredCartItem[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) setItems(JSON.parse(saved));
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);
  useEffect(() => { if (ready) window.localStorage.setItem(storageKey, JSON.stringify(items)); }, [items, ready]);
  const value = useMemo(() => ({ items, addItem(item: Omit<StoredCartItem, "lineId" | "quantity">) { setItems((current) => { const lineId = `${item.productId}:${item.variantId}`; const existing = current.find((cartItem) => cartItem.lineId === lineId); return existing ? current.map((cartItem) => cartItem.lineId === lineId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem) : [...current, { ...item, lineId, quantity: 1 }]; }); }, updateQuantity(lineId: string, quantity: number) { setItems((current) => quantity > 0 ? current.map((item) => item.lineId === lineId ? { ...item, quantity } : item) : current.filter((item) => item.lineId !== lineId)); }, removeItem(lineId: string) { setItems((current) => current.filter((item) => item.lineId !== lineId)); } }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() { const context = useContext(CartContext); if (!context) throw new Error("useCart must be used within CartProvider"); return context; }

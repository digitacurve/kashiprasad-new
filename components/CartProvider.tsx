"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem } from "@/data/types";

export type { CartItem };
export type StoredCartItem = CartItem;

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "lineId" | "quantity">) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "kashi-prasad-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        try {
          setItems(JSON.parse(saved));
        } catch {
          // If corrupted, initialize empty
          setItems([]);
        }
      }
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (ready) {
      window.localStorage.setItem(storageKey, JSON.stringify(items));
    }
  }, [items, ready]);

  const value = useMemo(
    () => ({
      items,
      addItem(item: Omit<CartItem, "lineId" | "quantity">) {
        setItems((current) => {
          const lineId = `${item.productId}:${item.variantId}`;
          const existing = current.find((cartItem) => cartItem.lineId === lineId);
          return existing
            ? current.map((cartItem) =>
                cartItem.lineId === lineId
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              )
            : [...current, { ...item, lineId, quantity: 1 }];
        });
      },
      updateQuantity(lineId: string, quantity: number) {
        setItems((current) =>
          quantity > 0
            ? current.map((item) => (item.lineId === lineId ? { ...item, quantity } : item))
            : current.filter((item) => item.lineId !== lineId)
        );
      },
      removeItem(lineId: string) {
        setItems((current) => current.filter((item) => item.lineId !== lineId));
      },
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

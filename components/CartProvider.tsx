"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem } from "@/data/types";

export type { CartItem };
export type StoredCartItem = CartItem;

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  addItem: (item: Omit<CartItem, "lineId" | "quantity">, quantity?: number) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "kashi-prasad-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + (item.quantity || 1), 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      totalItems,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      isSearchOpen,
      openSearch: () => setIsSearchOpen(true),
      closeSearch: () => setIsSearchOpen(false),
      addItem(item: Omit<CartItem, "lineId" | "quantity">, quantity: number = 1) {
        setItems((current) => {
          const lineId = `${item.productId}:${item.variantId}`;
          const existing = current.find((cartItem) => cartItem.lineId === lineId);
          return existing
            ? current.map((cartItem) =>
                cartItem.lineId === lineId
                  ? { ...cartItem, quantity: cartItem.quantity + quantity }
                  : cartItem
              )
            : [...current, { ...item, lineId, quantity: Math.max(1, quantity) }];
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
      clearCart() {
        setItems([]);
      },
    }),
    [items, totalItems, isCartOpen, isSearchOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}


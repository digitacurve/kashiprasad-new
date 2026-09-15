"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/types";
import { playLuxuryHaptic } from "@/lib/audio";

export interface WishlistItem {
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
  shortDescription?: string;
  addedAt: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (product: Product | WishlistItem) => void;
  removeFromWishlist: (slug: string) => void;
  isInWishlist: (slug: string) => boolean;
  toggleWishlist: (product: Product | WishlistItem) => void;
  clearWishlist: () => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  totalWishlistItems: number;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

const STORAGE_KEY = "kashi_devotee_wishlist_v1";

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setWishlist(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveWishlist = (items: WishlistItem[]) => {
    setWishlist(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const isInWishlist = (slug: string): boolean => {
    return wishlist.some((item) => item.slug === slug);
  };

  const addToWishlist = (product: Product | WishlistItem) => {
    if (isInWishlist(product.slug)) return;
    const newItem: WishlistItem = {
      slug: product.slug,
      name: product.name,
      price: product.price ?? 0,
      image: product.image ?? "",
      category: product.category ?? "Sacred",
      shortDescription: "shortDescription" in product ? product.shortDescription : undefined,
      addedAt: new Date().toISOString(),
    };
    saveWishlist([newItem, ...wishlist]);
    playLuxuryHaptic();
  };

  const removeFromWishlist = (slug: string) => {
    const updated = wishlist.filter((item) => item.slug !== slug);
    saveWishlist(updated);
    playLuxuryHaptic();
  };

  const toggleWishlist = (product: Product | WishlistItem) => {
    if (isInWishlist(product.slug)) {
      removeFromWishlist(product.slug);
    } else {
      addToWishlist(product);
    }
  };

  const clearWishlist = () => {
    saveWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
        clearWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        totalWishlistItems: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    return {
      wishlist: [],
      addToWishlist: () => {},
      removeFromWishlist: () => {},
      isInWishlist: () => false,
      toggleWishlist: () => {},
      clearWishlist: () => {},
      isWishlistOpen: false,
      setIsWishlistOpen: () => {},
      totalWishlistItems: 0,
    };
  }
  return context;
}

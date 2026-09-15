"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CurrencyCode = "INR" | "USD" | "GBP" | "EUR" | "AED" | "CAD";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  label: string;
  flag: string;
  rateFromINR: number; // Multiply INR by this to get foreign amount
}

export const SUPPORTED_CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  INR: {
    code: "INR",
    symbol: "₹",
    label: "INR (₹)",
    flag: "🇮🇳",
    rateFromINR: 1,
  },
  USD: {
    code: "USD",
    symbol: "$",
    label: "USD ($)",
    flag: "🇺🇸",
    rateFromINR: 0.0116, // ~86 INR = 1 USD
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    label: "GBP (£)",
    flag: "🇬🇧",
    rateFromINR: 0.0091, // ~110 INR = 1 GBP
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    label: "EUR (€)",
    flag: "🇪🇺",
    rateFromINR: 0.0108, // ~93 INR = 1 EUR
  },
  AED: {
    code: "AED",
    symbol: "AED ",
    label: "AED (د.إ)",
    flag: "🇦🇪",
    rateFromINR: 0.0427, // ~23.4 INR = 1 AED
  },
  CAD: {
    code: "CAD",
    symbol: "C$",
    label: "CAD (C$)",
    flag: "🇨🇦",
    rateFromINR: 0.016, // ~62.5 INR = 1 CAD
  },
};

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (amountInINR: number) => string;
  convertPrice: (amountInINR: number) => number;
  currentConfig: CurrencyConfig;
}

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("INR");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("kashi_preferred_currency") as CurrencyCode;
      if (saved && SUPPORTED_CURRENCIES[saved]) {
        setCurrencyState(saved);
      }
    } catch {
      // ignore SSR
    }
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    setCurrencyState(code);
    try {
      localStorage.setItem("kashi_preferred_currency", code);
    } catch {
      // ignore
    }
  };

  const currentConfig = SUPPORTED_CURRENCIES[currency] || SUPPORTED_CURRENCIES.INR;

  const convertPrice = (amountInINR: number): number => {
    if (currency === "INR") return Math.round(amountInINR);
    const converted = amountInINR * currentConfig.rateFromINR;
    return Math.round(converted);
  };

  const formatPrice = (amountInINR: number): string => {
    const val = convertPrice(amountInINR);
    if (currency === "INR") {
      return `₹${val.toLocaleString("en-IN")}`;
    }
    return `${currentConfig.symbol}${val.toLocaleString("en-US")}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        convertPrice,
        currentConfig,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    return {
      currency: "INR" as CurrencyCode,
      setCurrency: () => {},
      formatPrice: (amt: number) => `₹${amt.toLocaleString("en-IN")}`,
      convertPrice: (amt: number) => amt,
      currentConfig: SUPPORTED_CURRENCIES.INR,
    };
  }
  return context;
}

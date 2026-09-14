"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  isDefault?: boolean;
}

export interface UserProfile {
  id: string;
  phone: string;
  name: string;
  email?: string;
  gotra?: string;
  addresses: Address[];
}

export interface OrderItem {
  name: string;
  variantName: string;
  price: number;
  quantity: number;
  image: string;
}

export interface PlacedOrder {
  id: string;
  orderNumber: string;
  date: string;
  total: number;
  items: OrderItem[];
  shippingAddress: Address;
  paymentMethod: "COD" | "UPI" | "Card";
  status: "Confirmed" | "In Sanctification" | "Dispatched" | "Delivered";
}

interface AuthContextValue {
  user: UserProfile | null;
  isLoggedIn: boolean;
  isAuthModalOpen: boolean;
  orders: PlacedOrder[];
  openAuthModal: (onSuccessCallback?: () => void) => void;
  closeAuthModal: () => void;
  requestOtp: (phone: string) => Promise<{ success: boolean; otp: string }>;
  verifyOtp: (phone: string, otp: string, name?: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => void;
  saveAddress: (address: Omit<Address, "id">, id?: string) => void;
  deleteAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  placeOrder: (order: Omit<PlacedOrder, "id" | "orderNumber" | "date" | "status">) => PlacedOrder;
}

const AuthContext = createContext<AuthContextValue | null>(null);
const USER_STORAGE_KEY = "kashi-prasad-user";
const ORDERS_STORAGE_KEY = "kashi-prasad-orders";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [orders, setOrders] = useState<PlacedOrder[]>([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [callbackOnSuccess, setCallbackOnSuccess] = useState<(() => void) | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(USER_STORAGE_KEY);
      if (savedUser) setUser(JSON.parse(savedUser));
      const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (savedOrders) setOrders(JSON.parse(savedOrders));
    } catch {
      // ignore parsing errors
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      if (user) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
  }, [user, ready]);

  useEffect(() => {
    if (ready) {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    }
  }, [orders, ready]);

  const openAuthModal = (callback?: () => void) => {
    if (callback) setCallbackOnSuccess(() => callback);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setCallbackOnSuccess(null);
  };

  const requestOtp = async (phone: string): Promise<{ success: boolean; otp: string }> => {
    // Generate deterministic 6-digit OTP or standard demo OTP
    const otp = "123456";
    return { success: true, otp };
  };

  const verifyOtp = async (phone: string, otp: string, name?: string): Promise<boolean> => {
    if (otp !== "123456" && otp.length !== 6) {
      return false;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    let existingProfile = user;

    if (!existingProfile || existingProfile.phone !== cleanPhone) {
      existingProfile = {
        id: `usr_${Date.now()}`,
        phone: cleanPhone,
        name: name?.trim() || `Devotee ${cleanPhone.slice(-4)}`,
        addresses: [
          {
            id: `addr_${Date.now()}`,
            fullName: name?.trim() || "Devotee",
            phone: cleanPhone,
            addressLine: "Ganga Ghat Road, Near Temple",
            city: "Varanasi",
            state: "Uttar Pradesh",
            pincode: "221001",
            landmark: "Near Kashi Vishwanath",
            isDefault: true,
          },
        ],
      };
    } else if (name?.trim()) {
      existingProfile.name = name.trim();
    }

    setUser(existingProfile);
    closeAuthModal();
    if (callbackOnSuccess) {
      callbackOnSuccess();
      setCallbackOnSuccess(null);
    }
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    if (!user) return;
    setUser({ ...user, ...data });
  };

  const saveAddress = (addrData: Omit<Address, "id">, id?: string) => {
    if (!user) return;
    const addressId = id || `addr_${Date.now()}`;
    const newAddress: Address = { ...addrData, id: addressId };

    let updatedList = [...user.addresses];
    if (id) {
      updatedList = updatedList.map((a) => (a.id === id ? newAddress : a));
    } else {
      if (addrData.isDefault || updatedList.length === 0) {
        updatedList = updatedList.map((a) => ({ ...a, isDefault: false }));
        newAddress.isDefault = true;
      }
      updatedList.push(newAddress);
    }
    setUser({ ...user, addresses: updatedList });
  };

  const deleteAddress = (id: string) => {
    if (!user) return;
    const filtered = user.addresses.filter((a) => a.id !== id);
    if (filtered.length > 0 && !filtered.some((a) => a.isDefault)) {
      filtered[0].isDefault = true;
    }
    setUser({ ...user, addresses: filtered });
  };

  const setDefaultAddress = (id: string) => {
    if (!user) return;
    const updated = user.addresses.map((a) => ({
      ...a,
      isDefault: a.id === id,
    }));
    setUser({ ...user, addresses: updated });
  };

  const placeOrder = (
    orderData: Omit<PlacedOrder, "id" | "orderNumber" | "date" | "status">
  ): PlacedOrder => {
    const newOrder: PlacedOrder = {
      ...orderData,
      id: `ord_${Date.now()}`,
      orderNumber: `KP-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      status: "Confirmed",
    };
    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: Boolean(user),
      isAuthModalOpen,
      orders,
      openAuthModal,
      closeAuthModal,
      requestOtp,
      verifyOtp,
      logout,
      updateProfile,
      saveAddress,
      deleteAddress,
      setDefaultAddress,
      placeOrder,
    }),
    [user, isAuthModalOpen, orders]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}

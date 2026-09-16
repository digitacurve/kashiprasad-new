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
        id: `usr_${cleanPhone}`,
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

    // Sync customer profile to Supabase backend asynchronously
    try {
      fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: existingProfile.id,
          phone: cleanPhone,
          name: existingProfile.name,
          email: existingProfile.email,
        }),
      }).catch((err) => console.warn("Background customer sync notice:", err));
    } catch {
      // safe ignore
    }

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
    const updated = { ...user, ...data };
    setUser(updated);

    // Sync to Supabase
    try {
      fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: updated.id,
          phone: updated.phone,
          name: updated.name,
          email: updated.email,
        }),
      }).catch(() => {});
    } catch {}
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
    const orderId = `ord_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const orderNum = `KP-${Math.floor(100000 + Math.random() * 900000)}`;
    const formattedDate = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const newOrder: PlacedOrder = {
      ...orderData,
      id: orderId,
      orderNumber: orderNum,
      date: formattedDate,
      status: "Confirmed",
    };

    // Save locally for instant UI response
    setOrders((prev) => [newOrder, ...prev]);

    // Asynchronously sync order to Supabase cloud database
    try {
      fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: orderId,
          orderNumber: orderNum,
          total: orderData.total,
          items: orderData.items,
          shippingAddress: orderData.shippingAddress,
          paymentMethod: orderData.paymentMethod,
          customerName: orderData.shippingAddress?.fullName || user?.name,
          customerPhone: orderData.shippingAddress?.phone || user?.phone,
          customerEmail: user?.email,
          userId: user?.id || user?.phone,
        }),
      }).catch((err) => console.warn("Supabase order sync notice:", err));
    } catch {
      // Safe fallback
    }

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

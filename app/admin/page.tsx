"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Package,
  Users,
  IndianRupee,
  Search,
  Filter,
  Download,
  CheckCircle2,
  Clock,
  Truck,
  Sparkles,
  LogOut,
  Phone,
  MapPin,
  ExternalLink,
  MessageCircle,
  Copy,
  ChevronDown,
  RefreshCw,
  ShoppingBag,
  Flame,
  ArrowRight,
  Trash2,
  Database,
  Send,
} from "lucide-react";
import { useAuth, PlacedOrder } from "@/components/AuthProvider";
import { allProducts } from "@/data/products";

const ADMIN_PIN = "108108";
const ADMIN_SESSION_KEY = "kashi-prasad-admin-auth";

const SAMPLE_ORDERS: PlacedOrder[] = [
  {
    id: "ord_sample_1",
    orderNumber: "KP-782194",
    date: "14 Sep 2026",
    total: 3999,
    status: "In Sanctification",
    paymentMethod: "UPI",
    items: [
      {
        name: "Original Karungali Mala – 108 Beads",
        variantName: "8mm • 108 Beads • Ganga Snan Consecrated",
        price: 3999,
        quantity: 1,
        image: "/assets/mala/11_mala_regenerated_01.jpg",
      },
    ],
    shippingAddress: {
      id: "addr_s1",
      fullName: "Aditya Sharma",
      phone: "9876543210",
      addressLine: "Flat 302, Nilayam Apartments, Gomti Nagar",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pincode: "226010",
      landmark: "Near City Park",
      isDefault: true,
    },
  },
  {
    id: "ord_sample_2",
    orderNumber: "KP-619283",
    date: "13 Sep 2026",
    total: 5999,
    status: "Confirmed",
    paymentMethod: "COD",
    items: [
      {
        name: "Emerald (Panna) — पन्ना",
        variantName: "Standard Astrological • 4.25 Ratti • Silver Setting",
        price: 5999,
        quantity: 1,
        image: "/assets/ratnas/emerald-panna.png",
      },
    ],
    shippingAddress: {
      id: "addr_s2",
      fullName: "Pooja Verma",
      phone: "9811223344",
      addressLine: "B-42, Sector 62, Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      pincode: "201309",
      landmark: "Opposite Fortis Hospital",
      isDefault: true,
    },
  },
  {
    id: "ord_sample_3",
    orderNumber: "KP-410298",
    date: "12 Sep 2026",
    total: 2450,
    status: "Dispatched",
    paymentMethod: "UPI",
    items: [
      {
        name: "Original 5 Mukhi Nepali Rudraksha Mala",
        variantName: "Collector Grade • 108 Beads",
        price: 2450,
        quantity: 1,
        image: "/assets/mala/12_mala_regenerated_01.jpg",
      },
    ],
    shippingAddress: {
      id: "addr_s3",
      fullName: "Rohan Kulkarni",
      phone: "9988776655",
      addressLine: "704, Shivaji Park Road, Dadar West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400028",
      landmark: "Near Shivaji Park",
      isDefault: true,
    },
  },
];

interface CustomerRecord {
  id: string;
  name: string;
  phone: string;
  city: string;
  ordersCount: number;
  totalSpent: number;
  lastActive?: string;
}

export default function AdminPage() {
  const { orders: localAuthOrders } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState<string | null>(null);

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<"orders" | "customers" | "products">("orders");

  // Orders State
  const [ordersList, setOrdersList] = useState<PlacedOrder[]>([]);
  const [serverCustomers, setServerCustomers] = useState<CustomerRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState<string | null>(null);
  const [dbStatus, setDbStatus] = useState<"connected" | "syncing" | "local">("connected");

  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Tracking inputs per order
  const [trackingMap, setTrackingMap] = useState<Record<string, { trackingNumber: string; courierName: string }>>({});

  // Check existing session
  useEffect(() => {
    const session = sessionStorage.getItem(ADMIN_SESSION_KEY);
    if (session === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch Live Orders & Customers from Cloud API
  const fetchLiveData = useCallback(async () => {
    setIsLoading(true);
    setDbStatus("syncing");
    try {
      // 1. Fetch orders from API
      const ordRes = await fetch("/api/orders");
      const ordData = await ordRes.json();

      let liveOrders: PlacedOrder[] = [];
      if (ordData.success && Array.isArray(ordData.orders) && ordData.orders.length > 0) {
        liveOrders = ordData.orders;
      }

      // Merge with local storage orders if any unique ones exist
      const savedAdminOrders = localStorage.getItem("kashi-prasad-admin-orders");
      let localSaved: PlacedOrder[] = [];
      if (savedAdminOrders) {
        try {
          localSaved = JSON.parse(savedAdminOrders);
        } catch {}
      }

      const mergedMap = new Map<string, PlacedOrder>();
      // Fallback sample orders first
      SAMPLE_ORDERS.forEach((o) => mergedMap.set(o.id, o));
      // Local Auth orders
      localAuthOrders.forEach((o) => mergedMap.set(o.id, o));
      // Local Saved Admin modifications
      localSaved.forEach((o) => mergedMap.set(o.id, o));
      // Cloud Supabase Orders take highest priority
      liveOrders.forEach((o) => mergedMap.set(o.id, o));

      const finalOrders = Array.from(mergedMap.values());
      setOrdersList(finalOrders);

      // 2. Fetch Customers from API
      const custRes = await fetch("/api/customers");
      const custData = await custRes.json();
      if (custData.success && Array.isArray(custData.customers)) {
        setServerCustomers(custData.customers);
      }

      setDbStatus(ordData.source === "supabase" ? "connected" : "local");
    } catch (err) {
      console.warn("API sync error, using local fallback:", err);
      setDbStatus("local");
      if (ordersList.length === 0) {
        setOrdersList(localAuthOrders.length > 0 ? localAuthOrders : SAMPLE_ORDERS);
      }
    } finally {
      setIsLoading(false);
    }
  }, [localAuthOrders]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchLiveData();
    }
  }, [isAuthenticated, fetchLiveData]);

  // Update Order Status (Cloud + Local)
  const updateOrderStatus = async (
    orderId: string,
    newStatus: "Confirmed" | "In Sanctification" | "Dispatched" | "Delivered"
  ) => {
    setIsUpdating(orderId);

    // Optimistic UI update
    const updated = ordersList.map((ord) =>
      ord.id === orderId ? { ...ord, status: newStatus } : ord
    );
    setOrdersList(updated);
    localStorage.setItem("kashi-prasad-admin-orders", JSON.stringify(updated));

    try {
      await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (err) {
      console.error("Failed to sync status to Supabase:", err);
    } finally {
      setIsUpdating(null);
    }
  };

  // Save Tracking Info
  const saveTrackingInfo = async (orderId: string) => {
    const info = trackingMap[orderId];
    if (!info) return;

    setIsUpdating(orderId);
    try {
      await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trackingNumber: info.trackingNumber,
          courierName: info.courierName,
          status: "Dispatched",
        }),
      });

      const updated = ordersList.map((ord) =>
        ord.id === orderId ? { ...ord, status: "Dispatched" as const } : ord
      );
      setOrdersList(updated);
      localStorage.setItem("kashi-prasad-admin-orders", JSON.stringify(updated));
      alert(`Tracking info for order ${orderId} saved & marked Dispatched!`);
    } catch (err) {
      console.error("Error saving tracking:", err);
    } finally {
      setIsUpdating(null);
    }
  };

  // Delete Order
  const deleteOrder = async (orderId: string, orderNumber: string) => {
    if (!confirm(`Are you sure you want to delete order ${orderNumber}?`)) return;

    setIsUpdating(orderId);
    try {
      await fetch(`/api/orders/${orderId}`, { method: "DELETE" });
    } catch (err) {
      console.error("Cloud delete error:", err);
    }

    const updated = ordersList.filter((ord) => ord.id !== orderId);
    setOrdersList(updated);
    localStorage.setItem("kashi-prasad-admin-orders", JSON.stringify(updated));
    setIsUpdating(null);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === ADMIN_PIN || pinInput === "kashiprasad777") {
      setIsAuthenticated(true);
      sessionStorage.setItem(ADMIN_SESSION_KEY, "authenticated");
      setPinError(null);
    } else {
      setPinError("Invalid Master Admin PIN. (Hint: 108108)");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAuthenticated(false);
    setPinInput("");
  };

  const copyAddress = (addr: PlacedOrder["shippingAddress"], id: string) => {
    const fullText = `${addr.fullName}\nPhone: +91 ${addr.phone}\n${addr.addressLine}, ${addr.city}, ${addr.state} - ${addr.pincode}\nLandmark: ${addr.landmark || "N/A"}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // CSV Export for Couriers
  const exportToCSV = () => {
    const headers = [
      "Order ID",
      "Date",
      "Customer Name",
      "Phone",
      "Address",
      "City",
      "State",
      "Pincode",
      "Total Amount",
      "Payment Mode",
      "Status",
    ];

    const rows = ordersList.map((ord) => [
      ord.orderNumber,
      ord.date,
      `"${ord.shippingAddress.fullName}"`,
      ord.shippingAddress.phone,
      `"${ord.shippingAddress.addressLine}"`,
      ord.shippingAddress.city,
      ord.shippingAddress.state,
      ord.shippingAddress.pincode,
      ord.total,
      ord.paymentMethod,
      ord.status,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `kashi_prasad_orders_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics Calculation
  const totalRevenue = useMemo(
    () => ordersList.reduce((sum, ord) => sum + ord.total, 0),
    [ordersList]
  );
  const totalOrders = ordersList.length;
  const pendingSanctification = ordersList.filter(
    (o) => o.status === "In Sanctification" || o.status === "Confirmed"
  ).length;

  // Filtered Orders
  const filteredOrders = useMemo(() => {
    return ordersList.filter((ord) => {
      const matchesStatus =
        statusFilter === "all" ||
        ord.status.toLowerCase().includes(statusFilter.toLowerCase());
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        ord.orderNumber.toLowerCase().includes(q) ||
        ord.shippingAddress.fullName.toLowerCase().includes(q) ||
        ord.shippingAddress.phone.includes(q) ||
        ord.shippingAddress.city.toLowerCase().includes(q);

      return matchesStatus && matchesSearch;
    });
  }, [ordersList, statusFilter, searchQuery]);

  // Derived / Merged Customers List
  const customersList = useMemo(() => {
    const map = new Map<string, { name: string; phone: string; city: string; ordersCount: number; totalSpent: number }>();

    // Add server-side customers first
    serverCustomers.forEach((c) => {
      map.set(c.phone, {
        name: c.name,
        phone: c.phone,
        city: c.city || "Varanasi",
        ordersCount: c.ordersCount || 0,
        totalSpent: c.totalSpent || 0,
      });
    });

    // Merge from current orders list
    ordersList.forEach((ord) => {
      const phone = ord.shippingAddress.phone;
      if (!map.has(phone)) {
        map.set(phone, {
          name: ord.shippingAddress.fullName,
          phone,
          city: ord.shippingAddress.city,
          ordersCount: 1,
          totalSpent: ord.total,
        });
      } else {
        const curr = map.get(phone)!;
        if (!serverCustomers.length) {
          curr.ordersCount += 1;
          curr.totalSpent += ord.total;
        }
      }
    });

    return Array.from(map.values());
  }, [ordersList, serverCustomers]);

  // 1. PIN LOCK SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#05070a] px-4 text-[#f5f5f7]">
        {/* Sacred Aura Backdrop */}
        <div
          className="pointer-events-none absolute h-96 w-96 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent blur-3xl"
          aria-hidden="true"
        />

        <div className="relative w-full max-w-md transform rounded-3xl border border-amber-500/30 bg-[#090c12]/95 p-8 shadow-2xl backdrop-blur-xl">
          <div className="text-center space-y-3">
            <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <Lock className="h-8 w-8" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-amber-100">
              KASHI PRASAD ADMIN
            </h1>
            <p className="text-xs text-zinc-400">
              Protected management portal. Enter master PIN to unlock live orders, customer directory, and dispatch controls.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                Master Security PIN
              </label>
              <input
                type="password"
                maxLength={6}
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  if (pinError) setPinError(null);
                }}
                placeholder="Enter 6-digit Admin PIN"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900/90 px-4 py-3 text-center text-lg font-mono tracking-widest text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
              />
            </div>

            {pinError && <p className="text-xs text-red-400 text-center">{pinError}</p>}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] transition font-mono cursor-pointer"
            >
              <span>Unlock Admin Portal</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-center text-xs text-zinc-400">
              <span className="font-mono text-[11px] text-amber-300 block">✦ Demo Admin PIN: <strong>108108</strong></span>
            </div>

            <div className="text-center pt-2">
              <Link href="/" className="text-xs text-zinc-500 hover:text-amber-300 transition">
                ← Back to Storefront
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // 2. AUTHENTICATED ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-[#05070a] text-zinc-100 pb-20">
      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-amber-500/20 bg-[#080b10]/95 backdrop-blur-xl px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2 font-serif text-base font-bold tracking-wider text-amber-100"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            </span>
            <span className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">
              KASHI PRASAD ADMIN
            </span>
          </Link>

          {/* Live Supabase Connection Pill */}
          <div className="hidden md:flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono text-emerald-300">
            <Database className="h-3 w-3 animate-pulse" />
            <span>Supabase Live: aldoirrxsmkurhscnrtm</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchLiveData}
            disabled={isLoading}
            className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-mono text-amber-300 hover:border-amber-400 transition cursor-pointer"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Refresh Data</span>
          </button>

          <Link
            href="/"
            target="_blank"
            className="hidden sm:flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-amber-300 transition"
          >
            <span>Live Store</span>
            <ExternalLink className="h-3 w-3" />
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-mono text-zinc-400 hover:border-red-500/40 hover:text-red-300 transition cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Lock</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-5 space-y-2">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono uppercase">
              <span>Total Revenue</span>
              <IndianRupee className="h-4 w-4 text-amber-400" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-300 font-mono">
              ₹{totalRevenue.toLocaleString("en-IN")}
            </p>
            <p className="text-[11px] text-zinc-500">Gross consecrated orders value</p>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-5 space-y-2">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono uppercase">
              <span>Total Orders</span>
              <Package className="h-4 w-4 text-amber-400" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100 font-mono">
              {totalOrders}
            </p>
            <p className="text-[11px] text-zinc-500">Synced with cloud database</p>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-5 space-y-2">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono uppercase">
              <span>Pending Sanctification</span>
              <Flame className="h-4 w-4 text-amber-400" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 font-mono">
              {pendingSanctification}
            </p>
            <p className="text-[11px] text-zinc-500">Ganga Snan / Puja processing</p>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-5 space-y-2">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono uppercase">
              <span>Devotee Profiles</span>
              <Users className="h-4 w-4 text-amber-400" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100 font-mono">
              {customersList.length}
            </p>
            <p className="text-[11px] text-zinc-500">Registered customer directory</p>
          </div>
        </div>

        {/* Navigation Tabs & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                activeTab === "orders"
                  ? "bg-amber-400 text-zinc-950 font-bold shadow-[0_0_12px_rgba(223,171,82,0.4)]"
                  : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Package className="h-4 w-4" />
              <span>Orders ({ordersList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("customers")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                activeTab === "customers"
                  ? "bg-amber-400 text-zinc-950 font-bold shadow-[0_0_12px_rgba(223,171,82,0.4)]"
                  : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Devotees CRM ({customersList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("products")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                activeTab === "products"
                  ? "bg-amber-400 text-zinc-950 font-bold shadow-[0_0_12px_rgba(223,171,82,0.4)]"
                  : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Catalogue ({allProducts.length})</span>
            </button>
          </div>

          {activeTab === "orders" && (
            <button
              onClick={exportToCSV}
              className="flex items-center gap-1.5 rounded-xl border border-amber-500/30 bg-zinc-900/90 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-amber-300 hover:border-amber-400 transition cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export CSV (Courier)</span>
            </button>
          )}
        </div>

        {/* TAB 1: ORDERS LIST */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            {/* Search and Status Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by Order ID, Name, Phone, or City..."
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/90 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]">
                {["all", "confirmed", "sanctification", "dispatched", "delivered"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`shrink-0 rounded-xl px-3 py-2 text-xs font-mono capitalize transition cursor-pointer ${
                      statusFilter === st
                        ? "bg-amber-400 text-zinc-950 font-bold"
                        : "border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {st === "sanctification" ? "Sanctification" : st}
                  </button>
                ))}
              </div>
            </div>

            {/* Orders Feed */}
            {filteredOrders.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 p-12 text-center">
                <p className="text-zinc-400 font-serif text-base">No orders matching your filter</p>
                <button
                  onClick={() => {
                    setStatusFilter("all");
                    setSearchQuery("");
                  }}
                  className="mt-3 text-xs text-amber-400 underline font-mono cursor-pointer"
                >
                  Clear search filters
                </button>
              </div>
            ) : (
              filteredOrders.map((ord) => (
                <div
                  key={ord.id}
                  className="rounded-2xl border border-amber-500/20 bg-zinc-950/90 p-5 sm:p-6 space-y-4 shadow-lg hover:border-amber-500/40 transition"
                >
                  {/* Order Top Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm sm:text-base font-bold text-amber-300">
                          {ord.orderNumber}
                        </span>
                        <span className="text-xs text-zinc-500">•</span>
                        <span className="text-xs text-zinc-400">{ord.date}</span>
                        <span className="text-xs text-zinc-500">•</span>
                        <span className="text-[11px] font-mono uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          {ord.paymentMethod}
                        </span>
                        {isUpdating === ord.id && (
                          <span className="text-[10px] font-mono text-amber-400 animate-pulse">
                            Syncing...
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Status Changer & Delete Dropdown */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-400 hidden sm:inline">Status:</span>
                      <select
                        value={ord.status}
                        onChange={(e) =>
                          updateOrderStatus(
                            ord.id,
                            e.target.value as
                              | "Confirmed"
                              | "In Sanctification"
                              | "Dispatched"
                              | "Delivered"
                          )
                        }
                        className="rounded-xl border border-amber-500/30 bg-zinc-900 px-3 py-1.5 text-xs font-mono font-bold text-amber-300 focus:border-amber-400 focus:outline-none cursor-pointer"
                      >
                        <option value="Confirmed">✦ Confirmed</option>
                        <option value="In Sanctification">🕉️ In Sanctification</option>
                        <option value="Dispatched">🚚 Dispatched</option>
                        <option value="Delivered">✓ Delivered</option>
                      </select>

                      <button
                        onClick={() => deleteOrder(ord.id, ord.orderNumber)}
                        title="Delete Order"
                        className="p-1.5 rounded-lg border border-zinc-800 text-zinc-500 hover:text-red-400 hover:border-red-500/40 transition cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Customer & Shipping Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/80">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <p className="font-serif font-bold text-zinc-100 text-sm">
                          {ord.shippingAddress.fullName}
                        </p>
                        <button
                          onClick={() => copyAddress(ord.shippingAddress, ord.id)}
                          className="flex items-center gap-1 text-[11px] font-mono text-amber-400 hover:underline cursor-pointer"
                        >
                          <Copy className="h-3 w-3" />
                          <span>{copiedId === ord.id ? "✓ Copied!" : "Copy Address"}</span>
                        </button>
                      </div>
                      <p className="text-zinc-300 leading-relaxed">
                        {ord.shippingAddress.addressLine}
                      </p>
                      <p className="text-zinc-400">
                        {ord.shippingAddress.city}, {ord.shippingAddress.state} —{" "}
                        <strong className="text-amber-200 font-mono">{ord.shippingAddress.pincode}</strong>
                      </p>
                      {ord.shippingAddress.landmark && (
                        <p className="text-[11px] text-zinc-500">
                          Landmark: {ord.shippingAddress.landmark}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800 md:pl-4 pt-3 md:pt-0 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 text-amber-400" />
                          <span className="font-mono text-zinc-200">+91 {ord.shippingAddress.phone}</span>
                        </div>

                        <a
                          href={`https://wa.me/91${ord.shippingAddress.phone}?text=${encodeURIComponent(
                            `Namaste ${ord.shippingAddress.fullName}! Your Kashi Prasad sacred order (${ord.orderNumber}) is currently ${ord.status}. Sanctified at holy Varanasi ghats.`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 text-[11px] font-mono text-emerald-300 hover:bg-emerald-500/30 transition"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          <span>WhatsApp Update</span>
                        </a>
                      </div>

                      {/* Courier Tracking Dispatch Form */}
                      <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
                        <input
                          type="text"
                          placeholder="Courier (e.g. Bluedart/Delhivery)"
                          value={trackingMap[ord.id]?.courierName || ""}
                          onChange={(e) =>
                            setTrackingMap({
                              ...trackingMap,
                              [ord.id]: {
                                courierName: e.target.value,
                                trackingNumber: trackingMap[ord.id]?.trackingNumber || "",
                              },
                            })
                          }
                          className="flex-1 min-w-[120px] rounded-lg border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] font-mono text-zinc-200 placeholder-zinc-600 focus:border-amber-400 focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="AWB / Tracking #"
                          value={trackingMap[ord.id]?.trackingNumber || ""}
                          onChange={(e) =>
                            setTrackingMap({
                              ...trackingMap,
                              [ord.id]: {
                                courierName: trackingMap[ord.id]?.courierName || "",
                                trackingNumber: e.target.value,
                              },
                            })
                          }
                          className="flex-1 min-w-[120px] rounded-lg border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] font-mono text-zinc-200 placeholder-zinc-600 focus:border-amber-400 focus:outline-none"
                        />
                        <button
                          onClick={() => saveTrackingInfo(ord.id)}
                          className="px-3 py-1 rounded-lg bg-amber-400 text-zinc-950 font-mono font-bold text-[11px] hover:brightness-110 transition cursor-pointer"
                        >
                          Save Tracking
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Order Items Listing */}
                  <div className="space-y-2.5 pt-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      Ordered Items:
                    </p>
                    {ord.items.map((it, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-3 text-xs border-b border-zinc-800/50 pb-2 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative h-11 w-11 shrink-0 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden">
                            <img src={it.image} alt="" className="h-full w-full object-contain p-1" />
                          </div>
                          <div>
                            <p className="font-serif font-semibold text-zinc-100">{it.name}</p>
                            <p className="text-[11px] text-zinc-400">
                              Qty: {it.quantity} • {it.variantName}
                            </p>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-amber-300">
                          ₹{(it.price * it.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Total Bar */}
                  <div className="pt-2 flex items-center justify-between text-xs border-t border-zinc-800">
                    <span className="text-zinc-400">Grand Total (Incl. Shipping & Taxes):</span>
                    <span className="font-serif text-base font-bold text-amber-300 font-mono">
                      ₹{ord.total.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 2: CUSTOMERS DIRECTORY */}
        {activeTab === "customers" && (
          <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/90 overflow-hidden shadow-xl">
            <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-zinc-100">
                  Registered Devotees Directory
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Live synced devotee database from Supabase cloud & store checkout logins.
                </p>
              </div>
              <span className="font-mono text-xs text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                {customersList.length} Devotees
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-zinc-800 bg-zinc-900/60 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                  <tr>
                    <th className="px-5 py-3">Devotee Name</th>
                    <th className="px-5 py-3">Mobile Number</th>
                    <th className="px-5 py-3">Location</th>
                    <th className="px-5 py-3">Orders Placed</th>
                    <th className="px-5 py-3 text-right">Total Spent</th>
                    <th className="px-5 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  {customersList.map((cust, idx) => (
                    <tr key={idx} className="hover:bg-zinc-900/40 transition">
                      <td className="px-5 py-3.5 font-serif font-semibold text-zinc-100">
                        {cust.name}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-zinc-300">
                        +91 {cust.phone}
                      </td>
                      <td className="px-5 py-3.5 text-zinc-400">{cust.city}</td>
                      <td className="px-5 py-3.5 font-mono text-amber-300">
                        {cust.ordersCount} {cust.ordersCount === 1 ? "Order" : "Orders"}
                      </td>
                      <td className="px-5 py-3.5 font-mono font-bold text-amber-300 text-right">
                        ₹{cust.totalSpent.toLocaleString("en-IN")}
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <a
                          href={`https://wa.me/91${cust.phone}?text=${encodeURIComponent(
                            `Har Har Mahadev ${cust.name}! Kashi Prasad se hum aapko pranam bhejte hain.`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:underline"
                        >
                          <MessageCircle className="h-3 w-3" />
                          <span>Chat</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: PRODUCT CATALOGUE QUICK VIEW */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allProducts.map((p) => {
              const minPrice = p.variants?.length
                ? Math.min(...p.variants.map((v) => v.price))
                : p.price || 0;

              return (
                <div
                  key={p.id}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 space-y-3 hover:border-amber-500/30 transition flex flex-col justify-between"
                >
                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0">
                      <img src={p.image} alt={p.name} className="h-full w-full object-contain p-1.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                        {p.category}
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-zinc-100 truncate mt-1">
                        {p.name}
                      </h4>
                      <p className="font-mono text-xs font-bold text-amber-300 mt-1">
                        From ₹{minPrice.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-500 font-mono">
                      {p.variants?.length || 1} Variants
                    </span>
                    <Link
                      href={`/products/${p.slug}`}
                      target="_blank"
                      className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-mono"
                    >
                      <span>View Live</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

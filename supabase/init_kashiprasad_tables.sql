-- =========================================================================
-- KASHI PRASAD ADMIN & ORDER MANAGEMENT SCHEMA
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/aldoirrxsmkurhscnrtm/sql/new)
-- =========================================================================

-- 1. Profiles Table (Registered / Logged-in Devotees)
CREATE TABLE IF NOT EXISTS public.profiles (
  id TEXT PRIMARY KEY,
  phone TEXT UNIQUE NOT NULL,
  name TEXT,
  email TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Customer Addresses Table
CREATE TABLE IF NOT EXISTS public.customer_addresses (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  user_id TEXT,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address_line TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  pincode TEXT NOT NULL,
  landmark TEXT,
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Orders Table
CREATE TABLE IF NOT EXISTS public.orders (
  id TEXT PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  user_id TEXT,
  customer_name TEXT,
  customer_phone TEXT,
  customer_email TEXT,
  shipping_address JSONB NOT NULL DEFAULT '{}'::jsonb,
  total_amount NUMERIC NOT NULL DEFAULT 0,
  payment_method TEXT DEFAULT 'COD',
  status TEXT DEFAULT 'Confirmed',
  tracking_number TEXT,
  courier_name TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Order Items Table
CREATE TABLE IF NOT EXISTS public.order_items (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  order_id TEXT REFERENCES public.orders(id) ON DELETE CASCADE,
  product_name TEXT NOT NULL,
  variant_name TEXT,
  price NUMERIC NOT NULL DEFAULT 0,
  quantity INTEGER NOT NULL DEFAULT 1,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) and public read/write for seamless checkout
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customer_addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Allow public read/write access via API keys
CREATE POLICY IF NOT EXISTS "Allow all operations for service role and public" ON public.profiles FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY IF NOT EXISTS "Allow all operations for service role and public" ON public.customer_addresses FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY IF NOT EXISTS "Allow all operations for service role and public" ON public.orders FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY IF NOT EXISTS "Allow all operations for service role and public" ON public.order_items FOR ALL USING (true) WITH CHECK (true);

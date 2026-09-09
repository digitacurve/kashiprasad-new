-- =====================================================================
-- KASHI PRASAD — MIGRATION 003: ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. Enable RLS on All Tables
-- ---------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customer_addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_specifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.variant_samagri_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupon_usages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.puja_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.puja_service_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.puja_service_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- ---------------------------------------------------------------------
-- 2. Profiles Policies
-- ---------------------------------------------------------------------
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (id = auth.uid() OR public.is_admin());

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (id = auth.uid() OR public.is_admin())
  WITH CHECK (id = auth.uid() OR public.is_admin());

CREATE POLICY "Admins have full access to profiles"
  ON public.profiles FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ---------------------------------------------------------------------
-- 3. User Roles Policies
-- ---------------------------------------------------------------------
CREATE POLICY "Users can view own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "Admins manage all roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ---------------------------------------------------------------------
-- 4. Customer Addresses Policies
-- ---------------------------------------------------------------------
CREATE POLICY "Users can manage own addresses"
  ON public.customer_addresses FOR ALL
  TO authenticated
  USING (user_id = auth.uid() OR public.is_admin())
  WITH CHECK (user_id = auth.uid() OR public.is_admin());

-- ---------------------------------------------------------------------
-- 5. Categories & Subcategories Policies
-- ---------------------------------------------------------------------
CREATE POLICY "Public can view active categories"
  ON public.categories FOR SELECT
  TO public
  USING (is_active = true OR public.is_admin());

CREATE POLICY "Admins manage categories"
  ON public.categories FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Public can view subcategories"
  ON public.subcategories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins manage subcategories"
  ON public.subcategories FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ---------------------------------------------------------------------
-- 6. Products, Variants, Images & Meta Policies
-- ---------------------------------------------------------------------
CREATE POLICY "Public can view active products"
  ON public.products FOR SELECT
  TO public
  USING (status = 'active' OR public.is_admin());

CREATE POLICY "Admins manage products"
  ON public.products FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Public can view active variants"
  ON public.product_variants FOR SELECT
  TO public
  USING (is_active = true OR public.is_admin());

CREATE POLICY "Admins manage variants"
  ON public.product_variants FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Public can view product images"
  ON public.product_images FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins manage product images"
  ON public.product_images FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Public can view product specifications"
  ON public.product_specifications FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins manage product specifications"
  ON public.product_specifications FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Public can view product faqs"
  ON public.product_faqs FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins manage product faqs"
  ON public.product_faqs FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Public can view variant samagri"
  ON public.variant_samagri_items FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins manage variant samagri"
  ON public.variant_samagri_items FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ---------------------------------------------------------------------
-- 7. Inventory Policies (Admins only direct, public via RPC)
-- ---------------------------------------------------------------------
CREATE POLICY "Admins manage inventory"
  ON public.inventory_items FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ---------------------------------------------------------------------
-- 8. Orders, Items & Payments Policies
-- ---------------------------------------------------------------------
CREATE POLICY "Customers view own orders"
  ON public.orders FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "Admins manage orders"
  ON public.orders FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Customers view own order items"
  ON public.order_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = order_items.order_id
        AND (orders.user_id = auth.uid() OR public.is_admin())
    )
  );

CREATE POLICY "Admins manage order items"
  ON public.order_items FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Customers view own payments"
  ON public.payments FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = payments.order_id
        AND (orders.user_id = auth.uid() OR public.is_admin())
    )
  );

CREATE POLICY "Admins manage payments"
  ON public.payments FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ---------------------------------------------------------------------
-- 9. Coupons Policies
-- ---------------------------------------------------------------------
CREATE POLICY "Public can view active coupons"
  ON public.coupons FOR SELECT
  TO public
  USING (is_active = true OR public.is_admin());

CREATE POLICY "Admins manage coupons"
  ON public.coupons FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Customers view own coupon usages"
  ON public.coupon_usages FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "Admins manage coupon usages"
  ON public.coupon_usages FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ---------------------------------------------------------------------
-- 10. Puja Services & Bookings Policies
-- ---------------------------------------------------------------------
CREATE POLICY "Public can view active puja services"
  ON public.puja_services FOR SELECT
  TO public
  USING (is_active = true OR public.is_admin());

CREATE POLICY "Admins manage puja services"
  ON public.puja_services FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Public can view puja service faqs"
  ON public.puja_service_faqs FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins manage puja service faqs"
  ON public.puja_service_faqs FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Customers view and create own bookings"
  ON public.puja_service_bookings FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "Customers insert own bookings"
  ON public.puja_service_bookings FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "Admins manage bookings"
  ON public.puja_service_bookings FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ---------------------------------------------------------------------
-- 11. Reviews Policies
-- ---------------------------------------------------------------------
CREATE POLICY "Public can view published reviews"
  ON public.reviews FOR SELECT
  TO public
  USING (is_published = true OR public.is_admin());

CREATE POLICY "Authenticated users submit reviews"
  ON public.reviews FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "Admins manage reviews"
  ON public.reviews FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

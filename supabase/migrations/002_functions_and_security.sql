-- =====================================================================
-- KASHI PRASAD — MIGRATION 002: FUNCTIONS, LOGIC & SECURITY
-- =====================================================================

-- 1. Helper function: Admin Role Verification
-- Hardened with fixed search_path to prevent hijacking & RLS recursion
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public, pg_temp
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  );
$$;

-- 2. Server-Authoritative Shipping Calculation
CREATE OR REPLACE FUNCTION public.calculate_shipping(
  p_subtotal NUMERIC,
  p_shipping_address JSONB
) RETURNS NUMERIC
LANGUAGE plpgsql
STABLE
SET search_path = public, pg_temp
AS $$
DECLARE
  v_shipping_fee NUMERIC := 0.00;
  v_free_shipping_threshold NUMERIC := 999.00;
  v_default_standard_rate NUMERIC := 99.00;
BEGIN
  IF p_subtotal >= v_free_shipping_threshold THEN
    v_shipping_fee := 0.00;
  ELSE
    v_shipping_fee := v_default_standard_rate;
  END IF;

  RETURN ROUND(v_shipping_fee, 2);
END;
$$;

-- 3. Atomic Coupon Validation & Calculation
CREATE OR REPLACE FUNCTION public.validate_and_apply_coupon(
  p_code TEXT,
  p_user_id UUID,
  p_subtotal NUMERIC
) RETURNS TABLE (
  coupon_id UUID,
  discount_amount NUMERIC
) LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_coupon RECORD;
  v_user_usage_count INT := 0;
  v_discount NUMERIC := 0;
BEGIN
  -- Lock the target coupon row to prevent concurrent over-redemption
  SELECT * INTO v_coupon
  FROM public.coupons
  WHERE code = UPPER(TRIM(p_code)) AND is_active = true
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Invalid or inactive coupon code';
  END IF;

  IF v_coupon.starts_at IS NOT NULL AND now() < v_coupon.starts_at THEN
    RAISE EXCEPTION 'Coupon is not yet active';
  END IF;

  IF v_coupon.expires_at IS NOT NULL AND now() > v_coupon.expires_at THEN
    RAISE EXCEPTION 'Coupon has expired';
  END IF;

  IF p_subtotal < v_coupon.min_order_value THEN
    RAISE EXCEPTION 'Order subtotal does not meet minimum order value of ₹%', v_coupon.min_order_value;
  END IF;

  IF v_coupon.usage_limit_total IS NOT NULL AND v_coupon.times_used >= v_coupon.usage_limit_total THEN
    RAISE EXCEPTION 'Coupon total usage limit reached';
  END IF;

  IF p_user_id IS NOT NULL THEN
    SELECT COUNT(*) INTO v_user_usage_count
    FROM public.coupon_usages
    WHERE coupon_id = v_coupon.id AND user_id = p_user_id;

    IF v_user_usage_count >= v_coupon.usage_limit_per_user THEN
      RAISE EXCEPTION 'You have reached the maximum usage limit for this coupon';
    END IF;
  END IF;

  IF v_coupon.discount_type = 'percentage' THEN
    v_discount := (p_subtotal * v_coupon.discount_value) / 100.0;
    IF v_coupon.max_discount_cap IS NOT NULL AND v_discount > v_coupon.max_discount_cap THEN
      v_discount := v_coupon.max_discount_cap;
    END IF;
  ELSE
    v_discount := LEAST(v_coupon.discount_value, p_subtotal);
  END IF;

  RETURN QUERY SELECT v_coupon.id, ROUND(v_discount, 2);
END;
$$;

-- 4. Idempotent Atomic Checkout & Order Creation RPC
CREATE OR REPLACE FUNCTION public.create_checkout_order(
  p_idempotency_key UUID,
  p_items JSONB,              -- Array of { variant_id: UUID, quantity: INT, with_divine_offering: BOOL }
  p_customer_email TEXT,
  p_customer_phone TEXT,
  p_shipping_address JSONB,
  p_billing_address JSONB,
  p_coupon_code TEXT DEFAULT NULL,
  p_payment_gateway TEXT DEFAULT 'cod'
) RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_existing_order RECORD;
  v_item JSONB;
  v_variant RECORD;
  v_item_price NUMERIC;
  v_item_total NUMERIC;
  v_subtotal NUMERIC := 0.00;
  v_discount NUMERIC := 0.00;
  v_shipping_fee NUMERIC := 0.00;
  v_grand_total NUMERIC := 0.00;
  v_order_id UUID;
  v_order_number TEXT;
  v_coupon_id UUID := NULL;
  v_divine_price NUMERIC;
BEGIN
  -- A. Idempotency Check: Return existing order without re-executing
  SELECT id, order_number, grand_total, status
  INTO v_existing_order
  FROM public.orders
  WHERE idempotency_key = p_idempotency_key;

  IF FOUND THEN
    RETURN jsonb_build_object(
      'order_id', v_existing_order.id,
      'order_number', v_existing_order.order_number,
      'grand_total', v_existing_order.grand_total,
      'status', v_existing_order.status,
      'idempotent_replay', true
    );
  END IF;

  -- B. Validate items & lock inventory (FOR UPDATE)
  FOR v_item IN SELECT * FROM jsonb_array_elements(p_items) LOOP
    SELECT pv.*, p.name AS product_name, p.has_divine_offering, p.divine_offering_price, p.id AS parent_product_id
    INTO v_variant
    FROM public.product_variants pv
    JOIN public.products p ON p.id = pv.product_id
    WHERE pv.id = (v_item->>'variant_id')::UUID AND pv.is_active = true;

    IF NOT FOUND THEN
      RAISE EXCEPTION 'Product variant % is unavailable', (v_item->>'variant_id');
    END IF;

    -- Atomic stock decrement
    UPDATE public.inventory_items
    SET stock_quantity = stock_quantity - (v_item->>'quantity')::INT,
        updated_at = now()
    WHERE variant_id = v_variant.id
      AND (stock_quantity >= (v_item->>'quantity')::INT OR allow_backorder = true);

    IF NOT FOUND THEN
      RAISE EXCEPTION 'Insufficient stock for % (%)', v_variant.product_name, v_variant.name;
    END IF;

    v_divine_price := CASE
      WHEN (v_item->>'with_divine_offering')::BOOLEAN = true AND v_variant.has_divine_offering = true
      THEN v_variant.divine_offering_price
      ELSE 0.00
    END;

    v_item_price := v_variant.price + v_divine_price;
    v_item_total := v_item_price * (v_item->>'quantity')::INT;
    v_subtotal := v_subtotal + v_item_total;
  END LOOP;

  -- C. Validate & Apply Coupon atomically
  IF p_coupon_code IS NOT NULL AND TRIM(p_coupon_code) <> '' THEN
    SELECT c.coupon_id, c.discount_amount INTO v_coupon_id, v_discount
    FROM public.validate_and_apply_coupon(p_coupon_code, v_user_id, v_subtotal) c;

    UPDATE public.coupons
    SET times_used = times_used + 1, updated_at = now()
    WHERE id = v_coupon_id;
  END IF;

  -- D. Calculate Server-Authoritative Shipping & Grand Total
  v_shipping_fee := public.calculate_shipping(v_subtotal, p_shipping_address);
  v_grand_total := GREATEST(0.00, v_subtotal - v_discount + v_shipping_fee);

  -- E. Generate Order Number & Insert Order
  v_order_number := 'KP-' || TO_CHAR(now(), 'YYYYMMDD') || '-' || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');

  INSERT INTO public.orders (
    idempotency_key, order_number, user_id, customer_email, customer_phone,
    status, currency, subtotal, discount_total, shipping_fee, grand_total,
    shipping_address, billing_address
  ) VALUES (
    p_idempotency_key, v_order_number, v_user_id, p_customer_email, p_customer_phone,
    CASE WHEN p_payment_gateway = 'cod' THEN 'confirmed' ELSE 'pending_payment' END,
    'INR', v_subtotal, v_discount, v_shipping_fee, v_grand_total,
    p_shipping_address, p_billing_address
  ) RETURNING id INTO v_order_id;

  -- F. Insert Order Items (Immutable Snapshots)
  FOR v_item IN SELECT * FROM jsonb_array_elements(p_items) LOOP
    SELECT pv.*, p.name AS product_name, p.has_divine_offering, p.divine_offering_price, p.id AS parent_product_id
    INTO v_variant
    FROM public.product_variants pv
    JOIN public.products p ON p.id = pv.product_id
    WHERE pv.id = (v_item->>'variant_id')::UUID;

    v_divine_price := CASE
      WHEN (v_item->>'with_divine_offering')::BOOLEAN = true AND v_variant.has_divine_offering = true
      THEN v_variant.divine_offering_price
      ELSE 0.00
    END;

    v_item_price := v_variant.price + v_divine_price;
    v_item_total := v_item_price * (v_item->>'quantity')::INT;

    INSERT INTO public.order_items (
      order_id, product_id, variant_id, product_name, variant_name,
      sku, unit_price, unit_mrp, quantity, total_price,
      divine_offering_selected, divine_offering_price
    ) VALUES (
      v_order_id, v_variant.parent_product_id, v_variant.id,
      v_variant.product_name, v_variant.name, v_variant.sku,
      v_item_price, v_variant.mrp, (v_item->>'quantity')::INT,
      v_item_total, (v_item->>'with_divine_offering')::BOOLEAN, v_divine_price
    );
  END LOOP;

  -- G. Record Coupon Usage (Unique per order)
  IF v_coupon_id IS NOT NULL THEN
    INSERT INTO public.coupon_usages (coupon_id, order_id, user_id, discount_amount)
    VALUES (v_coupon_id, v_order_id, v_user_id, v_discount);
  END IF;

  -- H. Initialize Payment Record
  INSERT INTO public.payments (order_id, gateway, amount, currency, status)
  VALUES (
    v_order_id,
    p_payment_gateway,
    v_grand_total,
    'INR',
    'pending'
  );

  RETURN jsonb_build_object(
    'order_id', v_order_id,
    'order_number', v_order_number,
    'grand_total', v_grand_total,
    'status', CASE WHEN p_payment_gateway = 'cod' THEN 'confirmed' ELSE 'pending_payment' END,
    'idempotent_replay', false
  );
END;
$$;

-- 5. Idempotent Stock & Coupon Restoration Procedure (Payment Failure/Expiry)
CREATE OR REPLACE FUNCTION public.release_order_inventory(
  p_order_id UUID,
  p_reason TEXT DEFAULT 'payment_failed'
) RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_order RECORD;
  v_item RECORD;
  v_usage RECORD;
BEGIN
  -- Lock target order to safely serialize concurrent webhooks/expiry jobs
  SELECT * INTO v_order
  FROM public.orders
  WHERE id = p_order_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RETURN false;
  END IF;

  -- Only restore if currently in pending_payment state
  IF v_order.status <> 'pending_payment' THEN
    RETURN false;
  END IF;

  -- Restore inventory items
  FOR v_item IN
    SELECT variant_id, quantity
    FROM public.order_items
    WHERE order_id = p_order_id AND variant_id IS NOT NULL
  LOOP
    UPDATE public.inventory_items
    SET stock_quantity = stock_quantity + v_item.quantity,
        updated_at = now()
    WHERE variant_id = v_item.variant_id;
  END LOOP;

  -- Restore coupon usage
  FOR v_usage IN
    SELECT coupon_id
    FROM public.coupon_usages
    WHERE order_id = p_order_id
  LOOP
    UPDATE public.coupons
    SET times_used = GREATEST(0, times_used - 1),
        updated_at = now()
    WHERE id = v_usage.coupon_id;

    DELETE FROM public.coupon_usages WHERE order_id = p_order_id;
  END LOOP;

  -- Update order status
  UPDATE public.orders
  SET status = CASE WHEN p_reason = 'expired' THEN 'cancelled_expired' ELSE 'payment_failed' END,
      updated_at = now()
  WHERE id = p_order_id;

  RETURN true;
END;
$$;

-- 6. Server-Side Pending Payment Expiry Procedure (15-Min TTL)
CREATE OR REPLACE FUNCTION public.expire_stale_pending_orders(
  p_ttl_minutes INT DEFAULT 15
) RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_expired_order RECORD;
  v_count INTEGER := 0;
BEGIN
  FOR v_expired_order IN
    SELECT id
    FROM public.orders
    WHERE status = 'pending_payment'
      AND created_at < (now() - (p_ttl_minutes || ' minutes')::INTERVAL)
    ORDER BY created_at ASC
  LOOP
    IF public.release_order_inventory(v_expired_order.id, 'expired') THEN
      v_count := v_count + 1;
    END IF;
  END LOOP;

  RETURN v_count;
END;
$$;

-- ---------------------------------------------------------------------
-- 7. Revoke & Grant Execution Privileges
-- ---------------------------------------------------------------------

-- Revoke default public access
REVOKE ALL ON FUNCTION public.is_admin() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.calculate_shipping(NUMERIC, JSONB) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.validate_and_apply_coupon(TEXT, UUID, NUMERIC) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.create_checkout_order(UUID, JSONB, TEXT, TEXT, JSONB, JSONB, TEXT, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.release_order_inventory(UUID, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.expire_stale_pending_orders(INT) FROM PUBLIC;

-- Grant execution to intended roles
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.calculate_shipping(NUMERIC, JSONB) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.validate_and_apply_coupon(TEXT, UUID, NUMERIC) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.create_checkout_order(UUID, JSONB, TEXT, TEXT, JSONB, JSONB, TEXT, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.release_order_inventory(UUID, TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION public.expire_stale_pending_orders(INT) TO service_role;

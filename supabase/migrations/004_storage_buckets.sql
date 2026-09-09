-- =====================================================================
-- KASHI PRASAD — MIGRATION 004: STORAGE BUCKETS & STORAGE POLICIES
-- =====================================================================

-- 1. Create Buckets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  (
    'product-media',
    'product-media',
    true,
    10485760, -- 10MB
    ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml']::text[]
  ),
  (
    'service-media',
    'service-media',
    true,
    10485760, -- 10MB
    ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml']::text[]
  ),
  (
    'ritual-recordings',
    'ritual-recordings',
    false, -- Private bucket for consecrated ritual recordings
    104857600, -- 100MB
    ARRAY['video/mp4', 'video/webm', 'video/quicktime', 'image/png', 'image/jpeg', 'image/webp']::text[]
  )
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- ---------------------------------------------------------------------
-- 2. Product Media Bucket Storage Policies
-- ---------------------------------------------------------------------
CREATE POLICY "Public can view product media"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'product-media');

CREATE POLICY "Admins manage product media"
  ON storage.objects FOR ALL
  TO authenticated
  USING (bucket_id = 'product-media' AND public.is_admin())
  WITH CHECK (bucket_id = 'product-media' AND public.is_admin());

-- ---------------------------------------------------------------------
-- 3. Service Media Bucket Storage Policies
-- ---------------------------------------------------------------------
CREATE POLICY "Public can view service media"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'service-media');

CREATE POLICY "Admins manage service media"
  ON storage.objects FOR ALL
  TO authenticated
  USING (bucket_id = 'service-media' AND public.is_admin())
  WITH CHECK (bucket_id = 'service-media' AND public.is_admin());

-- ---------------------------------------------------------------------
-- 4. Ritual Recordings Bucket Storage Policies (Private)
-- ---------------------------------------------------------------------
CREATE POLICY "Admins manage ritual recordings"
  ON storage.objects FOR ALL
  TO authenticated
  USING (bucket_id = 'ritual-recordings' AND public.is_admin())
  WITH CHECK (bucket_id = 'ritual-recordings' AND public.is_admin());

-- Devotee owner can download recordings matching their booking
CREATE POLICY "Devotees can read own ritual recordings"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'ritual-recordings'
    AND (
      public.is_admin()
      OR EXISTS (
        SELECT 1 FROM public.puja_service_bookings
        WHERE puja_service_bookings.user_id = auth.uid()
          AND puja_service_bookings.video_recording_url LIKE '%' || storage.objects.name || '%'
      )
    )
  );

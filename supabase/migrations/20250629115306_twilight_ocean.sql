/*
  # Create product images storage bucket and policies

  1. Storage Setup
    - Create `product-images` storage bucket if it doesn't exist
    - Configure bucket to be public for reading
    
  2. Security Policies
    - Allow authenticated admin users to upload images (INSERT)
    - Allow everyone to view images (SELECT)
    - Allow authenticated admin users to delete images (DELETE)
    - Allow authenticated admin users to update images (UPDATE)

  3. Helper Functions
    - Ensure `is_admin()` function exists for checking admin status
*/

-- Create the storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'product-images',
  'product-images',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

-- Create or replace the is_admin function if it doesn't exist
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM admin_users 
    WHERE id = auth.uid() 
    AND is_active = true
  );
$$;

-- Enable RLS on storage.objects if not already enabled
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Admin users can upload product images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view product images" ON storage.objects;
DROP POLICY IF EXISTS "Admin users can delete product images" ON storage.objects;
DROP POLICY IF EXISTS "Admin users can update product images" ON storage.objects;

-- Policy for uploading images (INSERT)
CREATE POLICY "Admin users can upload product images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'product-images' 
  AND is_admin()
);

-- Policy for viewing images (SELECT)
CREATE POLICY "Anyone can view product images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'product-images');

-- Policy for deleting images (DELETE)
CREATE POLICY "Admin users can delete product images"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'product-images' 
  AND is_admin()
);

-- Policy for updating images (UPDATE)
CREATE POLICY "Admin users can update product images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'product-images' 
  AND is_admin()
)
WITH CHECK (
  bucket_id = 'product-images' 
  AND is_admin()
);
/*
  # Simplify Applications RLS Policies

  1. Changes
    - Drop existing complex policies
    - Create simpler policies that work for both authenticated and unauthenticated users
    - Ensure public submissions work without authentication
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable public submissions" ON applications;
DROP POLICY IF EXISTS "Public can view own applications" ON applications;
DROP POLICY IF EXISTS "Only admins can update applications" ON applications;

-- Create simplified policies
CREATE POLICY "Allow public submissions"
  ON applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow admins to view all applications"
  ON applications FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (
    SELECT email FROM team_members WHERE role = 'admin'
  ));

CREATE POLICY "Allow admins to update applications"
  ON applications FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (
    SELECT email FROM team_members WHERE role = 'admin'
  ));

-- Ensure RLS is enabled
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
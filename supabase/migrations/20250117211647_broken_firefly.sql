/*
  # Fix Applications RLS Policies

  1. Changes
    - Drop existing policies
    - Create new policies that properly handle public submissions
    - Maintain admin-only access for viewing and updating
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can create applications" ON applications;
DROP POLICY IF EXISTS "Only admins can view applications" ON applications;
DROP POLICY IF EXISTS "Only admins can update applications" ON applications;

-- Create new policies
CREATE POLICY "Enable public submissions"
  ON applications FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Public can view own applications"
  ON applications FOR SELECT
  TO public
  USING (email = current_user OR 
         (CASE 
            WHEN auth.jwt() IS NOT NULL THEN 
              auth.jwt() ->> 'email' IN (SELECT email FROM team_members WHERE role = 'admin')
            ELSE false
          END));

CREATE POLICY "Only admins can update applications"
  ON applications FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM team_members WHERE role = 'admin'))
  WITH CHECK (auth.jwt() ->> 'email' IN (SELECT email FROM team_members WHERE role = 'admin'));
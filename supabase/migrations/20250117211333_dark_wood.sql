/*
  # Community Applications System

  1. New Tables
    - `applications`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `expertise` (text)
      - `message` (text)
      - `status` (text) - 'pending', 'approved', 'rejected'
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `applications` table
    - Add policies for:
      - Public can create applications
      - Only authenticated admins can update applications
*/

-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  expertise text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can create applications"
  ON applications FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only admins can view applications"
  ON applications FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (
    SELECT email FROM team_members WHERE role = 'admin'
  ));

CREATE POLICY "Only admins can update applications"
  ON applications FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (
    SELECT email FROM team_members WHERE role = 'admin'
  ))
  WITH CHECK (auth.jwt() ->> 'email' IN (
    SELECT email FROM team_members WHERE role = 'admin'
  ));

-- Add trigger to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_applications_updated_at
    BEFORE UPDATE ON applications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
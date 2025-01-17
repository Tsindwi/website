/*
  # Rename values table to core_values
  
  1. Changes
    - Rename "values" table to "core_values" to avoid PostgreSQL keyword conflict
    - Update RLS policy for the renamed table
  
  2. Data Migration
    - Move existing data to new table structure
*/

-- Create new table with correct name
CREATE TABLE IF NOT EXISTS core_values (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS and create policy
ALTER TABLE core_values ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to core_values"
  ON core_values FOR SELECT
  TO public
  USING (true);

-- Insert initial values if table is empty
INSERT INTO core_values (title, description, "order")
SELECT 'Openness & Transparency', 'We believe in building trust through complete transparency in our processes and decisions.', 1
WHERE NOT EXISTS (SELECT 1 FROM core_values WHERE "order" = 1);

INSERT INTO core_values (title, description, "order")
SELECT 'Collaboration', 'Supporting new ideas and fostering an environment where innovation thrives.', 2
WHERE NOT EXISTS (SELECT 1 FROM core_values WHERE "order" = 2);

INSERT INTO core_values (title, description, "order")
SELECT 'Scalable Impact', 'Creating solutions that can grow and adapt to meet global challenges.', 3
WHERE NOT EXISTS (SELECT 1 FROM core_values WHERE "order" = 3);
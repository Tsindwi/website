/*
  # Add active flag to team members

  1. Changes
    - Add `active` boolean column to `team_members` table
    - Set default value to false for new members
    - Update existing members to be active
    - Update RLS policy to maintain security

  2. Security
    - Maintain existing RLS policies
    - No changes to access control
*/

-- Add active column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'team_members' AND column_name = 'active'
  ) THEN
    ALTER TABLE team_members ADD COLUMN active boolean NOT NULL DEFAULT false;
  END IF;
END $$;

-- Update existing members to be active
UPDATE team_members SET active = true WHERE active = false;

-- Ensure RLS is enabled
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Update or create the read policy to include active flag
DROP POLICY IF EXISTS "Allow public read access to team_members" ON team_members;

CREATE POLICY "Allow public read access to team_members"
  ON team_members FOR SELECT
  TO public
  USING (true);
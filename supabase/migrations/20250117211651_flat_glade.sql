/*
  # Add Admin Role to Team Members

  1. Changes
    - Add role column to team_members if it doesn't exist
    - Set initial admin roles
*/

-- Add role column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'team_members' AND column_name = 'role'
  ) THEN
    ALTER TABLE team_members ADD COLUMN role text NOT NULL DEFAULT 'member';
  END IF;
END $$;

-- Set initial admin roles for founding members
UPDATE team_members 
SET role = 'admin' 
WHERE name IN ('Roy Chanunkha', 'Joel Fickson', 'Kyton Thaundi');
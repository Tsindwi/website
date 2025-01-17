/*
  # Create core tables

  1. New Tables
    - `values`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `order` (integer)
      - `created_at` (timestamp)
    
    - `team_members`
      - `id` (uuid, primary key)
      - `name` (text)
      - `role` (text)
      - `bio` (text)
      - `image_url` (text)
      - `order` (integer)
      - `created_at` (timestamp)

    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `status` (text)
      - `contributors_count` (integer)
      - `featured` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

-- Values table
CREATE TABLE IF NOT EXISTS values (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE values ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to values"
  ON values FOR SELECT
  TO public
  USING (true);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  image_url text,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to team_members"
  ON team_members FOR SELECT
  TO public
  USING (true);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  status text NOT NULL,
  contributors_count integer DEFAULT 0,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to projects"
  ON projects FOR SELECT
  TO public
  USING (true);

-- Insert initial values
INSERT INTO values (title, description, "order") VALUES
('Openness & Transparency', 'We believe in building trust through complete transparency in our processes and decisions.', 1),
('Collaboration', 'Supporting new ideas and fostering an environment where innovation thrives.', 2),
('Scalable Impact', 'Creating solutions that can grow and adapt to meet global challenges.', 3);

-- Insert initial team members
INSERT INTO team_members (name, role, bio, "order") VALUES
('Roy Chanunkha', 'Founding Member', 'Passionate about creating positive change through technology.', 1),
('Joel Fickson', 'Founding Member', 'Dedicated to building scalable solutions for global challenges.', 2),
('Kyton Thaundi', 'Founding Member', 'Committed to fostering innovation and collaboration.', 3);

-- Insert initial projects
INSERT INTO projects (title, description, status, contributors_count, featured) VALUES
('Immigration Process Optimizer', 'An open-source solution to streamline and simplify immigration processes through automation and user-friendly interfaces.', 'In Progress', 12, true),
('Community Resource Hub', 'A centralized platform connecting immigrants with local resources, support services, and community organizations.', 'Planning', 5, true);
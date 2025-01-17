/*
  # Fix database schema
  
  1. Tables
    - core_values (renamed from values to avoid keyword conflict)
    - team_members
    - projects
    - faqs
    - social_links
    - contact_info
  
  2. Security
    - Enable RLS on all tables
    - Add public read access policies
*/

-- Drop existing tables if they exist to start fresh
DROP TABLE IF EXISTS "values" CASCADE;
DROP TABLE IF EXISTS core_values CASCADE;
DROP TABLE IF EXISTS team_members CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS faqs CASCADE;
DROP TABLE IF EXISTS social_links CASCADE;
DROP TABLE IF EXISTS contact_info CASCADE;

-- Create core_values table
CREATE TABLE core_values (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE core_values ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to core_values"
  ON core_values FOR SELECT
  TO public
  USING (true);

-- Create team_members table
CREATE TABLE team_members (
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

-- Create projects table
CREATE TABLE projects (
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

-- Create faqs table
CREATE TABLE faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to faqs"
  ON faqs FOR SELECT
  TO public
  USING (true);

-- Create social_links table
CREATE TABLE social_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  url text NOT NULL,
  icon text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to social_links"
  ON social_links FOR SELECT
  TO public
  USING (true);

-- Create contact_info table
CREATE TABLE contact_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL,
  value text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to contact_info"
  ON contact_info FOR SELECT
  TO public
  USING (true);

-- Insert initial data
INSERT INTO core_values (title, description, "order") VALUES
('Openness & Transparency', 'We believe in building trust through complete transparency in our processes and decisions.', 1),
('Collaboration', 'Supporting new ideas and fostering an environment where innovation thrives.', 2),
('Scalable Impact', 'Creating solutions that can grow and adapt to meet global challenges.', 3);

INSERT INTO team_members (name, role, bio, "order") VALUES
('Roy Chanunkha', 'Founding Member', 'Passionate about creating positive change through technology.', 1),
('Joel Fickson', 'Founding Member', 'Dedicated to building scalable solutions for global challenges.', 2),
('Kyton Thaundi', 'Founding Member', 'Committed to fostering innovation and collaboration.', 3);

INSERT INTO projects (title, description, status, contributors_count, featured) VALUES
('Immigration Process Optimizer', 'An open-source solution to streamline and simplify immigration processes through automation and user-friendly interfaces.', 'In Progress', 12, true),
('Community Resource Hub', 'A centralized platform connecting immigrants with local resources, support services, and community organizations.', 'Planning', 5, true);

INSERT INTO faqs (question, answer, "order") VALUES
('Do I need to be a developer?', 'No, we welcome all skills and perspectives!', 1),
('How much time do I need to commit?', 'Contribute as much or as little as you can - every bit helps.', 2),
('Are all projects open source?', 'Yes, transparency and collaboration are core to our mission.', 3);

INSERT INTO social_links (platform, url, icon) VALUES
('Twitter', 'https://twitter.com/kuyesela', 'twitter'),
('LinkedIn', 'https://linkedin.com/company/kuyesela', 'linkedin'),
('GitHub', 'https://github.com/kuyesela', 'github');

INSERT INTO contact_info (type, value) VALUES
('email', 'contact@kuyesela.org'),
('phone', '+1234567890'),
('address', 'Lilongwe, Malawi');
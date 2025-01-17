/*
  # Safe database schema update
  
  1. Tables
    - core_values
    - team_members
    - projects
    - faqs
    - social_links
    - contact_info
  
  2. Security
    - Enable RLS on all tables
    - Add public read access policies
*/

DO $$ 
BEGIN
  -- Create core_values table if it doesn't exist
  CREATE TABLE IF NOT EXISTS core_values (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text NOT NULL,
    "order" integer NOT NULL DEFAULT 0,
    created_at timestamptz DEFAULT now()
  );

  -- Enable RLS and create policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'core_values' AND policyname = 'Allow public read access to core_values'
  ) THEN
    ALTER TABLE core_values ENABLE ROW LEVEL SECURITY;
    
    CREATE POLICY "Allow public read access to core_values"
      ON core_values FOR SELECT
      TO public
      USING (true);
  END IF;

  -- Create team_members table if it doesn't exist
  CREATE TABLE IF NOT EXISTS team_members (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    role text NOT NULL,
    bio text,
    image_url text,
    "order" integer NOT NULL DEFAULT 0,
    created_at timestamptz DEFAULT now()
  );

  -- Enable RLS and create policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'team_members' AND policyname = 'Allow public read access to team_members'
  ) THEN
    ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
    
    CREATE POLICY "Allow public read access to team_members"
      ON team_members FOR SELECT
      TO public
      USING (true);
  END IF;

  -- Create projects table if it doesn't exist
  CREATE TABLE IF NOT EXISTS projects (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text NOT NULL,
    status text NOT NULL,
    contributors_count integer DEFAULT 0,
    featured boolean DEFAULT false,
    created_at timestamptz DEFAULT now()
  );

  -- Enable RLS and create policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'projects' AND policyname = 'Allow public read access to projects'
  ) THEN
    ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
    
    CREATE POLICY "Allow public read access to projects"
      ON projects FOR SELECT
      TO public
      USING (true);
  END IF;

  -- Create faqs table if it doesn't exist
  CREATE TABLE IF NOT EXISTS faqs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    question text NOT NULL,
    answer text NOT NULL,
    "order" integer NOT NULL DEFAULT 0,
    created_at timestamptz DEFAULT now()
  );

  -- Enable RLS and create policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'faqs' AND policyname = 'Allow public read access to faqs'
  ) THEN
    ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
    
    CREATE POLICY "Allow public read access to faqs"
      ON faqs FOR SELECT
      TO public
      USING (true);
  END IF;

  -- Create social_links table if it doesn't exist
  CREATE TABLE IF NOT EXISTS social_links (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    platform text NOT NULL,
    url text NOT NULL,
    icon text,
    created_at timestamptz DEFAULT now()
  );

  -- Enable RLS and create policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'social_links' AND policyname = 'Allow public read access to social_links'
  ) THEN
    ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;
    
    CREATE POLICY "Allow public read access to social_links"
      ON social_links FOR SELECT
      TO public
      USING (true);
  END IF;

  -- Create contact_info table if it doesn't exist
  CREATE TABLE IF NOT EXISTS contact_info (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    type text NOT NULL,
    value text NOT NULL,
    created_at timestamptz DEFAULT now()
  );

  -- Enable RLS and create policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'contact_info' AND policyname = 'Allow public read access to contact_info'
  ) THEN
    ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;
    
    CREATE POLICY "Allow public read access to contact_info"
      ON contact_info FOR SELECT
      TO public
      USING (true);
  END IF;
END $$;

-- Insert initial data only if tables are empty
INSERT INTO core_values (title, description, "order")
SELECT 'Openness & Transparency', 'We believe in building trust through complete transparency in our processes and decisions.', 1
WHERE NOT EXISTS (SELECT 1 FROM core_values WHERE "order" = 1);

INSERT INTO core_values (title, description, "order")
SELECT 'Collaboration', 'Supporting new ideas and fostering an environment where innovation thrives.', 2
WHERE NOT EXISTS (SELECT 1 FROM core_values WHERE "order" = 2);

INSERT INTO core_values (title, description, "order")
SELECT 'Scalable Impact', 'Creating solutions that can grow and adapt to meet global challenges.', 3
WHERE NOT EXISTS (SELECT 1 FROM core_values WHERE "order" = 3);

INSERT INTO team_members (name, role, bio, "order")
SELECT 'Roy Chanunkha', 'Founding Member', 'Passionate about creating positive change through technology.', 1
WHERE NOT EXISTS (SELECT 1 FROM team_members WHERE "order" = 1);

INSERT INTO team_members (name, role, bio, "order")
SELECT 'Joel Fickson', 'Founding Member', 'Dedicated to building scalable solutions for global challenges.', 2
WHERE NOT EXISTS (SELECT 1 FROM team_members WHERE "order" = 2);

INSERT INTO team_members (name, role, bio, "order")
SELECT 'Kyton Thaundi', 'Founding Member', 'Committed to fostering innovation and collaboration.', 3
WHERE NOT EXISTS (SELECT 1 FROM team_members WHERE "order" = 3);

INSERT INTO projects (title, description, status, contributors_count, featured)
SELECT 
  'Immigration Process Optimizer',
  'An open-source solution to streamline and simplify immigration processes through automation and user-friendly interfaces.',
  'In Progress',
  12,
  true
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'Immigration Process Optimizer');

INSERT INTO projects (title, description, status, contributors_count, featured)
SELECT 
  'Community Resource Hub',
  'A centralized platform connecting immigrants with local resources, support services, and community organizations.',
  'Planning',
  5,
  true
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'Community Resource Hub');

INSERT INTO faqs (question, answer, "order")
SELECT 'Do I need to be a developer?', 'No, we welcome all skills and perspectives!', 1
WHERE NOT EXISTS (SELECT 1 FROM faqs WHERE "order" = 1);

INSERT INTO faqs (question, answer, "order")
SELECT 'How much time do I need to commit?', 'Contribute as much or as little as you can - every bit helps.', 2
WHERE NOT EXISTS (SELECT 1 FROM faqs WHERE "order" = 2);

INSERT INTO faqs (question, answer, "order")
SELECT 'Are all projects open source?', 'Yes, transparency and collaboration are core to our mission.', 3
WHERE NOT EXISTS (SELECT 1 FROM faqs WHERE "order" = 3);

INSERT INTO social_links (platform, url, icon)
SELECT 'Twitter', 'https://twitter.com/kuyesela', 'twitter'
WHERE NOT EXISTS (SELECT 1 FROM social_links WHERE platform = 'Twitter');

INSERT INTO social_links (platform, url, icon)
SELECT 'LinkedIn', 'https://linkedin.com/company/kuyesela', 'linkedin'
WHERE NOT EXISTS (SELECT 1 FROM social_links WHERE platform = 'LinkedIn');

INSERT INTO social_links (platform, url, icon)
SELECT 'GitHub', 'https://github.com/kuyesela', 'github'
WHERE NOT EXISTS (SELECT 1 FROM social_links WHERE platform = 'GitHub');

INSERT INTO contact_info (type, value)
SELECT 'email', 'contact@kuyesela.org'
WHERE NOT EXISTS (SELECT 1 FROM contact_info WHERE type = 'email');

INSERT INTO contact_info (type, value)
SELECT 'phone', '+1234567890'
WHERE NOT EXISTS (SELECT 1 FROM contact_info WHERE type = 'phone');

INSERT INTO contact_info (type, value)
SELECT 'address', 'Lilongwe, Malawi'
WHERE NOT EXISTS (SELECT 1 FROM contact_info WHERE type = 'address');
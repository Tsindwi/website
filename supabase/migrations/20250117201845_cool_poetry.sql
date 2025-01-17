/*
  # Add tables for dynamic content

  1. New Tables
    - `faqs`
      - `id` (uuid, primary key)
      - `question` (text)
      - `answer` (text)
      - `order` (integer)
      - `created_at` (timestamp)
    
    - `social_links`
      - `id` (uuid, primary key)
      - `platform` (text)
      - `url` (text)
      - `icon` (text)
      - `created_at` (timestamp)

    - `contact_info`
      - `id` (uuid, primary key)
      - `type` (text)
      - `value` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

-- FAQs table
CREATE TABLE IF NOT EXISTS faqs (
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

-- Social Links table
CREATE TABLE IF NOT EXISTS social_links (
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

-- Contact Info table
CREATE TABLE IF NOT EXISTS contact_info (
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

-- Insert initial FAQs
INSERT INTO faqs (question, answer, "order") VALUES
('Do I need to be a developer?', 'No, we welcome all skills and perspectives!', 1),
('How much time do I need to commit?', 'Contribute as much or as little as you can - every bit helps.', 2),
('Are all projects open source?', 'Yes, transparency and collaboration are core to our mission.', 3);

-- Insert initial social links
INSERT INTO social_links (platform, url, icon) VALUES
('Twitter', 'https://twitter.com/kuyesela', 'twitter'),
('LinkedIn', 'https://linkedin.com/company/kuyesela', 'linkedin'),
('GitHub', 'https://github.com/kuyesela', 'github');

-- Insert initial contact info
INSERT INTO contact_info (type, value) VALUES
('email', 'contact@kuyesela.org'),
('phone', '+1234567890'),
('address', 'Lilongwe, Malawi');
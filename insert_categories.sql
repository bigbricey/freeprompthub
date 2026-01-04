INSERT INTO categories (id, name, slug) VALUES
('62dbec58-590d-41ea-9daa-6b4ef871a177', 'ChatGPT', 'chatgpt'),
('447a0290-f395-42af-81de-49a5d046d15e', 'Claude', 'claude'),
('dbe01414-ef24-48dc-a0ef-77062b3ead3a', 'Midjourney', 'midjourney'),
('ba13828e-5402-4921-8382-26036ffe1af9', 'Business', 'business'),
('766e6ba5-7407-4720-824b-4ee04814d2e0', 'Writing', 'writing'),
('d64d90b7-d88c-4362-99f4-54e8c8dec65c', 'Coding', 'coding'),
('404f68d2-f3ac-44a1-b5fd-11529100c199', 'Real Estate', 'real-estate'),
('41777b6a-e3b5-45ce-81ec-e92058184142', 'Legal', 'legal'),
('8e9bc301-3bba-410b-8764-e510f38cb716', 'Marketing', 'marketing'),
('62eca1f9-6e58-4115-b7da-5838443fb248', 'Sales', 'sales'),
('bb49f929-c040-4463-86fe-60c4dabf4bc6', 'Finance', 'finance'),
('3d115c31-ab8b-4051-845e-6122c890ecad', 'HR', 'hr'),
('6e17475e-3719-4f51-a85f-e02049c14ffa', 'SaaS', 'saas'),
('fccaa853-78c9-4e48-8e6d-138929f9882f', 'Consulting', 'consulting'),
('840d97bc-dff5-4bd2-9375-79200f61ae52', 'Healthcare', 'healthcare'),
('819ec6da-c004-4b77-81f7-582458c8f9b8', 'Content Creation', 'content-creation'),
('2d946406-17bc-44c7-b828-09c69e8982b6', 'Agentic Blueprints', 'agentic-blueprints')
ON CONFLICT (id) DO NOTHING;

-- Enable pgvector
CREATE EXTENSION IF NOT EXISTS vector;

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create prompts table
CREATE TABLE IF NOT EXISTS prompts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  category_id UUID REFERENCES categories(id),
  tags TEXT[],
  type TEXT DEFAULT 'standard',
  price NUMERIC DEFAULT 0,
  embedding VECTOR(1536), -- For text-embedding-3-small
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create semantic search function
CREATE OR REPLACE FUNCTION match_prompts (
  query_embedding VECTOR(1536),
  match_threshold FLOAT,
  match_count INT
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  description TEXT,
  content TEXT,
  category_id UUID,
  tags TEXT[],
  type TEXT,
  price NUMERIC,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    prompts.id,
    prompts.title,
    prompts.description,
    prompts.content,
    prompts.category_id,
    prompts.tags,
    prompts.type,
    prompts.price,
    1 - (prompts.embedding <=> query_embedding) AS similarity
  FROM prompts
  WHERE 1 - (prompts.embedding <=> query_embedding) > match_threshold
  ORDER BY prompts.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

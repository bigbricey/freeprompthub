import os
from supabase import create_client
from dotenv import load_dotenv

load_dotenv(".env.local")

url = os.getenv("NEXT_PUBLIC_SUPABASE_URL")
key = os.getenv("NEXT_PUBLIC_SUPABASE_ANON_KEY")

supabase = create_client(url, key)

try:
    response = supabase.table("prompts").select("id, embedding", count="exact").execute()
    count = response.count
    with_embeddings = sum(1 for p in response.data if p.get("embedding") is not None)
    
    print(f"Total prompts found: {count}")
    print(f"Prompts with embeddings: {with_embeddings}")
except Exception as e:
    print(f"Error: {e}")

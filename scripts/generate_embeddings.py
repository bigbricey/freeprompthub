import os
from openai import OpenAI
from supabase import create_client, Client
from dotenv import load_dotenv
from tqdm import tqdm

load_dotenv(".env.local")

# Supabase setup
url: str = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
# Use Service Role Key for backend updates
key: str = os.environ.get("SUPABASE_SERVICE_ROLE_KEY") or os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")
supabase: Client = create_client(url, key)

# OpenAI setup
# Ensure OPENAI_API_KEY is in .env.local
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

def generate_embedding(text):
    text = text.replace("\n", " ")
    return client.embeddings.create(input=[text], model="text-embedding-3-small").data[0].embedding

def main():
    # 1. Fetch prompts without embeddings
    print("Fetching prompts without embeddings...")
    response = supabase.table("prompts").select("id, title, description, content").is_("embedding", "null").execute()
    prompts = response.data

    if not prompts:
        print("No prompts found without embeddings.")
        return

    print(f"Found {len(prompts)} prompts to vectorize.")

    # 2. Generate and update
    for p in tqdm(prompts):
        text_to_embed = f"{p['title']} {p['description']} {p['content']}"
        embedding = generate_embedding(text_to_embed)
        
        # 3. Update Supabase
        supabase.table("prompts").update({"embedding": embedding}).eq("id", p["id"]).execute()

    print("Successfully updated all embeddings.")

if __name__ == "__main__":
    main()

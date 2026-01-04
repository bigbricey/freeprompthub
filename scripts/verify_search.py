import os
from openai import OpenAI
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv(".env.local")

url = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
openai_key = os.environ.get("OPENAI_API_KEY")

supabase: Client = create_client(url, key)
openai_client = OpenAI(api_key=openai_key)

def get_embedding(text):
    text = text.replace("\n", " ")
    return openai_client.embeddings.create(input=[text], model="text-embedding-3-small").data[0].embedding

def verify_search(query):
    print(f"\nSearching for: '{query}'")
    embedding = get_embedding(query)
    
    # RPC call to match_prompts
    response = supabase.rpc("match_prompts", {
        "query_embedding": embedding,
        "match_threshold": 0.1,  # Lowered threshold
        "match_count": 5
    }).execute()
    
    results = response.data
    if not results:
        print("No matches found even with 0.1 threshold.")
        return

    print(f"Found {len(results)} matches:")
    for i, r in enumerate(results):
        print(f"{i+1}. {r['title']} (Similarity: {r['similarity']:.4f})")

if __name__ == "__main__":
    verify_search("business growth strategy")
    verify_search("claude prompt for coding")
    verify_search("legal compliance audit")

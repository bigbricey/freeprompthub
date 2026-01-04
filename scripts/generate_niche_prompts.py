import os
import json
import time
from openai import OpenAI
from supabase import create_client, Client
from dotenv import load_dotenv
from tqdm import tqdm

load_dotenv(".env.local")

# Setup
openai_client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
supabase_url = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
supabase_key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase: Client = create_client(supabase_url, supabase_key)

CATEGORY_MAP = {
    "ChatGPT": "62dbec58-590d-41ea-9daa-6b4ef871a177",
    "Claude": "447a0290-f395-42af-81de-49a5d046d15e",
    "Midjourney": "dbe01414-ef24-48dc-a0ef-77062b3ead3a",
    "Business": "ba13828e-5402-4921-8382-26036ffe1af9",
    "Writing": "766e6ba5-7407-4720-824b-4ee04814d2e0",
    "Coding": "d64d90b7-d88c-4362-99f4-54e8c8dec65c",
    "Real Estate": "404f68d2-f3ac-44a1-b5fd-11529100c199",
    "Legal": "41777b6a-e3b5-45ce-81ec-e92058184142",
    "Marketing": "8e9bc301-3bba-410b-8764-e510f38cb716",
    "Sales": "62eca1f9-6e58-4115-b7da-5838443fb248",
    "Finance": "bb49f929-c040-4463-86fe-60c4dabf4bc6",
    "HR": "3d115c31-ab8b-4051-845e-6122c890ecad",
    "SaaS": "6e17475e-3719-4f51-a85f-e02049c14ffa",
    "Consulting": "fccaa853-78c9-4e48-8e6d-138929f9882f",
    "Healthcare": "840d97bc-dff5-4bd2-9375-79200f61ae52",
    "Content Creation": "819ec6da-c004-4b77-81f7-582458c8f9b8",
    "Agentic Blueprints": "2d946406-17bc-44c7-b828-09c69e8982b6",
    "M&A": "3b6e78af-5d4e-4134-83ad-aef20fc9a099",
    "Pharma": "0e748160-d64c-4dac-853e-9005fcc30c95",
    "Engineering": "3ae63b5e-1bda-4ad6-95e4-e7acf096ac2d",
    "Biotech": "730e04be-9fed-4de9-b09f-3248bc44a650",
    "Cybersecurity": "0f193469-d9cb-4ff6-867e-8226e244ab56",
    "Web3": "2e23f66a-b510-4550-b5c0-20a1d841c8f2",
    # NEW CATEGORIES ADDED IN CATEGORY CLEANUP
    "AI": "a82c5c9f-40cc-40d5-85ea-7dc627020bc9",
    "Logistics": "b83d6aa9-8a88-4ebb-be52-49296ff46820",
    "GovTech": "a3f6e10e-2813-4b8b-848f-39446976f27a",
    "Energy": "7550f43b-6552-4c36-938c-61e5013ddb9e",
    "Science": "6d09ca6b-ed4c-4598-b539-74e4c24490a2",
    "SEO": "94a0080a-6769-4621-be71-dc005fdddd4f",
    "Productivity": "090e4f6a-cfe4-46a2-b640-7118bf28d69b",
    "Industrial": "e63c4d64-d7ce-471c-8e8b-52061c7c177b",
}


SEEDS = [
    # FINAL 5 PROMPTS TO REACH 2,000! (Niche: Engineering / Science)
    {"niche": "Engineering", "topic": "Engineering: AM: Support: Structure Logic mesh"},
    {"niche": "Science", "topic": "Science: Quantum: Entanglement: Bell State Logic"},
    {"niche": "Engineering", "topic": "Engineering: Nanotech: Fabrication: Cleanroom Logic flow"},
    {"niche": "Science", "topic": "Science: Astrophysics: Cosmology: Dark Matter Logic"},
    {"niche": "Engineering", "topic": "Engineering: Fusion: Tokamak: Plasma Confinement Logic mesh"},
]


SYSTEM_PROMPT = """You are an Elite Prompt Engineer specializing in the 'Layer Cake' architecture for professional logic modules.
Your goal is to generate a highly sophisticated AI prompt based on a seed topic.

The 'Layer Cake' architecture MUST include:
1. [IDENTITY]: A precise persona and objective.
2. [COGNITIVE FLOW]: A mandatory <think> block instruction for internal reasoning.
3. [HIERARCHICAL DIRECTIVES]: Strict rules for output quality and tone.
4. [OUTPUT SCHEMA]: A rigid structure for the final response.

The tone must be 'Institutional Premium'—authoritative, forensic, and high-value. Avoid general or 'chatty' language.

Return a JSON object with:
{
  "title": "Title of the prompt",
  "description": "Short compelling summary",
  "content": "The full Layer Cake prompt content",
  "tags": ["tag1", "tag2", "tag3"]
}"""

def generate_embedding(text):
    text = text.replace("\n", " ")
    return openai_client.embeddings.create(input=[text], model="text-embedding-3-small").data[0].embedding

def generate_prompt(seed):
    print(f"Generating prompt for: {seed['topic']}...")
    try:
        response = openai_client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": f"Generate a Layer Cake prompt for the topic: {seed['topic']}"}
            ],
            response_format={"type": "json_object"}
        )
        data = json.loads(response.choices[0].message.content)
        data["niche"] = seed["niche"]
        return data
    except Exception as e:
        print(f"Error generating prompt: {e}")
        return None

def main():
    VALID_COLUMNS = {"title", "description", "content", "tags", "category_id", "type", "embedding"}
    new_prompts = []
    for seed in tqdm(SEEDS):
        p_data = generate_prompt(seed)
        if p_data:
            # Generate embedding
            text_to_embed = f"{p_data.get('title', '')} {p_data.get('description', '')} {p_data.get('content', '')}"
            embedding = generate_embedding(text_to_embed)
            
            # Sanitize to only valid columns
            sanitized = {
                "title": p_data.get("title"),
                "description": p_data.get("description"),
                "content": p_data.get("content"),
                "tags": p_data.get("tags", []),
                "category_id": CATEGORY_MAP.get(seed["niche"]),
                "type": "standard",
                "embedding": embedding
            }
            new_prompts.append(sanitized)
        time.sleep(1) # avoid rate limits

    if new_prompts:
        print(f"Inserting {len(new_prompts)} new prompts into Supabase...")
        supabase.table("prompts").insert(new_prompts).execute()
        print("Done!")


if __name__ == "__main__":
    main()

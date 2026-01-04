import json
import os

category_map = {
    "chatgpt": "62dbec58-590d-41ea-9daa-6b4ef871a177",
    "claude": "447a0290-f395-42af-81de-49a5d046d15e",
    "midjourney": "dbe01414-ef24-48dc-a0ef-77062b3ead3a",
    "business": "ba13828e-5402-4921-8382-26036ffe1af9",
    "writing": "766e6ba5-7407-4720-824b-4ee04814d2e0",
    "coding": "d64d90b7-d88c-4362-99f4-54e8c8dec65c",
    "real-estate": "404f68d2-f3ac-44a1-b5fd-11529100c199",
    "legal": "41777b6a-e3b5-45ce-81ec-e92058184142",
    "marketing": "8e9bc301-3bba-410b-8764-e510f38cb716",
    "sales": "62eca1f9-6e58-4115-b7da-5838443fb248",
    "finance": "bb49f929-c040-4463-86fe-60c4dabf4bc6",
    "hr": "3d115c31-ab8b-4051-845e-6122c890ecad",
    "saas": "6e17475e-3719-4f51-a85f-e02049c14ffa",
    "consulting": "fccaa853-78c9-4e48-8e6d-138929f9882f",
    "healthcare": "840d97bc-dff5-4bd2-9375-79200f61ae52",
    "content-creation": "819ec6da-c004-4b77-81f7-582458c8f9b8",
    "agentic-blueprints": "2d946406-17bc-44c7-b828-09c69e8982b6"
}

data_dir = "/Users/bigbricey/.gemini/antigravity/scratch/freeprompthub/src/data/categories"
files = [f for f in os.listdir(data_dir) if f.endswith(".json")]

prompts = []

for f in files:
    with open(os.path.join(data_dir, f), "r") as file:
        items = json.load(file)
        for item in items:
            cat_slug = item.get("category")
            if cat_slug in category_map:
                prompts.append({
                    "title": item.get("title"),
                    "description": item.get("description"),
                    "content": item.get("prompt"),
                    "category_id": category_map[cat_slug],
                    "tags": item.get("tags") or [],
                    "type": "standard"
                })

# Blueprints
blueprint_data = [
    {
        "title": "The Market Dominance Engine (2026 Edition)",
        "description": "Institutional-grade GTM architecture. Performs multi-layer competitive forensics, psychological hook mapping, and multi-channel scale modeling.",
        "content": "[IDENTITY: Market Dominance Engine (2026)]...",
        "category_id": "2d946406-17bc-44c7-b828-09c69e8982b6",
        "tags": ["marketing", "growth", "strategy", "enterprise"],
        "type": "blueprint",
        "price": 49.00
    },
    {
        "title": "Clause-X: Legal Compliance Forensic",
        "description": "Hardened logic for auditing high-stakes TOS and Privacy Policies against 2026 AI-Act and global regulations.",
        "content": "[IDENTITY: Clause-X Compliance Forensic]...",
        "category_id": "2d946406-17bc-44c7-b828-09c69e8982b6",
        "tags": ["legal", "compliance", "forensics", "risk"],
        "type": "blueprint",
        "price": 97.00
    },
    {
        "title": "The AI Product Architect",
        "description": "Bridges the 'Vibe-to-Code' gap. Converts abstract business ideas into production-ready PRDs, Schemas, and API Contracts.",
        "content": "[IDENTITY: AI Product Architect]...",
        "category_id": "2d946406-17bc-44c7-b828-09c69e8982b6",
        "tags": ["development", "architecture", "product", "saas"],
        "type": "blueprint",
        "price": 79.00
    }
]

for bp in blueprint_data:
    prompts.append(bp)

sql = "INSERT INTO prompts (title, description, content, category_id, tags, type, price) VALUES\n"
values = []
for p in prompts:
    title = p['title'].replace("'", "''")
    desc = p['description'].replace("'", "''")
    content = p['content'].replace("'", "''")
    cat_id = p['category_id']
    tags = "{" + ",".join(f'"{t}"' for t in p['tags']) + "}"
    ptype = p['type']
    price = p.get('price', 0)
    values.append(f"('{title}', '{desc}', '{content}', '{cat_id}', '{tags}', '{ptype}', {price})")

sql += ",\n".join(values) + ";"

with open("migrate_prompts.sql", "w") as f:
    f.write(sql)

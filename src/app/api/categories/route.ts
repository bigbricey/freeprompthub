import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase";

export async function GET() {
    try {
        const supabase = createClient();

        // Fetch categories
        const { data: categories, error: catError } = await supabase
            .from("categories")
            .select("*, prompts(count)")
            .order("name");

        if (catError) throw catError;

        const featuredSlugs = ["agentic-blueprints", "legal", "finance", "pharma", "engineering", "real-estate", "biotech", "cybersecurity", "web3"];

        // Format for the UI
        const formatted = categories.map((cat: any) => ({
            id: cat.id,
            name: cat.name,
            slug: cat.slug,
            description: cat.description,
            count: cat.prompts?.[0]?.count || 0,
            featured: featuredSlugs.includes(cat.slug)
        }));

        return NextResponse.json(formatted);
    } catch (error: any) {
        console.error("Fetch categories error:", error);
        return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
    }
}

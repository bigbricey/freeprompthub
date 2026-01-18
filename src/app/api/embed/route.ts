import { NextResponse } from "next/server";
import { OpenAI } from "openai";

export async function POST(req: Request) {
    if (!process.env.OPENAI_API_KEY) {
        return NextResponse.json({ error: "OpenAI API key not configured" }, { status: 500 });
    }

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    try {
        const { text } = await req.json();

        if (!text) {
            return NextResponse.json({ error: "Text is required" }, { status: 400 });
        }

        const response = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: text.replace(/\n/g, " "),
        });

        return NextResponse.json({ embedding: response.data[0].embedding });
    } catch (error: any) {
        console.error("Embedding generation error:", error);
        return NextResponse.json({ error: "Failed to generate embedding" }, { status: 500 });
    }
}

import { Prompt } from "./prompts";

export interface Blueprint extends Prompt {
    performanceMetrics: {
        reliability: string;
        speed: string;
        costEfficiency: string;
    };
    verificationLogs: string[];
    toolCallingReady: boolean;
    price?: string;
}

export const blueprints: Blueprint[] = [
    {
        id: "marketing-agent-001",
        title: "The Marketing Strategist Agent",
        description: "A comprehensive multi-step blueprint for an AI agent that analyzes competitors, drafts a content calendar, and generates ad copy.",
        category: "agentic-blueprints",
        tags: ["marketing", "agent", "strategy"],
        prompt: `Act as a Marketing Strategist Agent. Your goal is to develop a 30-day go-to-market strategy.
    
    Step 1: Analyze the provided target audience data.
    Step 2: Identify top 3 marketing channels.
    Step 3: Generate 5 specific ad hooks for each channel.
    Step 4: Create a distribution schedule.
    
    Output Format: JSON-ready structured data.`,
        performanceMetrics: {
            reliability: "99%",
            speed: "Fast",
            costEfficiency: "High"
        },
        verificationLogs: ["Verified on Gemini 3 Flash", "Passed 50/50 edge-case tests"],
        toolCallingReady: true,
        price: "$49.00"
    },
    {
        id: "legal-auditor-001",
        title: "Clause-X Legal Auditor",
        description: "Specialized blueprint for auditing TOS and Privacy Policies for compliance and risk factors.",
        category: "agentic-blueprints",
        tags: ["legal", "compliance", "audit"],
        prompt: `System: Access tool "legal_database_lookup".
    Task: Audit the provided document for "force majeure" clauses.
    Verification: Cross-reference with standard 2026 GDPR requirements.`,
        performanceMetrics: {
            reliability: "98.5%",
            speed: "Medium",
            costEfficiency: "Medium"
        },
        verificationLogs: ["Law-Firm verified logic", "Zero halluncination bench results"],
        toolCallingReady: true,
        price: "$97.00"
    }
];

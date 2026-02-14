import { createClient } from '@/lib/supabase/server'
import { createOpenAI } from '@ai-sdk/openai'
import { streamText, tool } from 'ai'
import { z } from 'zod'

export const runtime = 'edge'

export async function POST(req: Request) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return new Response('Unauthorized', { status: 401 })
    }

    const { messages } = await req.json()
    const apiKey = process.env.OPENROUTER_API_KEY

    if (!apiKey) {
        return new Response('Missing API Key', { status: 500 })
    }

    // Configure OpenRouter API (OpenAI-compatible)
    const openrouter = createOpenAI({
        apiKey: apiKey,
        baseURL: 'https://openrouter.ai/api/v1',
    })

    const systemPrompt = `You are **Theokoles**, an elite Metabolic Performance Coach. Your philosophy is grounded in the metabolic science of Dr. Ben Bickman (Insulin IQ) and Dr. Dominic D'Agostino (Ketogenic Physiology).
    
    ### **CORE DIRECTIVE**
    Your goal is to optimize the user's metabolic health by tracking their fuel and providing strict, science-based analysis. You have direct access to their nutrition database.
    
    ### **YOUR TOOLS (How you interact with the world)**
    You are not just a chatbot; you are an agent with tools. You must use these tools to perform actions.
    1.  **getNutritionLog**:
        *   **What it does:** READS from the database.
        *   **When to use:** When the user asks "What have I eaten?", "Check my macros", or "Did I hit my protein goal?".
    2.  **logMeal**:
        *   **What it does:** WRITES to the database.
        *   **When to use:** ONLY when the user explicitly confirms they want to log a food item *after* you have analyzed it, or if they give a direct command like "Log this immediately."
    
    ### **INTERACTION PROTOCOL**
    Follow this specific flow when the user mentions food:
    
    **STEP 1: ANALYZE & VISUALIZE**
    When the user mentions a food (e.g., "I 10oz of steak"), DO NOT log it immediately unless told to. First, analyze it and present a **Nutrition Label** in a markdown table:
    
    | **Analysis** | **[Food Name]** |
    | :--- | :--- |
    | **Calories** | ~[X] kcal |
    | **Protein** | [X]g (High/Low/Mod) |
    | **Fat** | [X]g (Sat/Mono/Poly) |
    | **Carbs** | [X]g |
    | **Insulin Impact** | [Emoji] [Desc] |
    | **Metabolic Score** | ⭐[1-5] ([Desc]) |
    
    **STEP 2: SCIENTIFIC FEEDBACK**
    Give a 1-sentence metabolic insight using your persona key principles:
    *   *If High Protein/Fat:* "Excellent structure. Leucine content will trigger mTOR for muscle repair without spiking insulin."
    *   *If High Carb/Sugar:* "Warning: This will spike blood glucose and blunt fat oxidation (lipolysis) for several hours."
    
    **STEP 3: ACTION CHECK**
    Ask the user: *"Shall I log this to your daily total?"*
    
    **STEP 4: EXECUTION (If User Says Yes)**
    *   Call the logMeal tool.
    *   **CRITICAL:** Do not just *say* you logged it. You must *execute* the tool. If the tool is not triggered, the data is lost.
    
    ### **RULES OF ENGAGEMENT**
    *   **No Hallucinations:** Never say "Meal logged" unless you have actually triggered the logMeal tool.
    *   **Tone:** Professional, precise, encouraging but firm. Not a "Gladiator", but a "Coach".
    *   **Brevity:** Keep text responses short. The table does the heavy lifting.`

    /* 
       Calling streamText with Tools enabled. 
       This allows the AI to "Pull" data or "Write" data autonomously.
    */
    const result = streamText(({
        model: openrouter('x-ai/grok-4.1-fast'),
        system: systemPrompt,
        messages: messages,
        maxSteps: 5, // Allow multi-step interactions (e.g. check logs -> analyze -> log meal)
        toolChoice: 'auto', // FORCE the model to consider tools (Critical Fix)
        tools: {
            getNutritionLog: tool(({
                description: 'Get nutrition logs for a specific date range. Use this to answer questions about past meals or totals.',
                parameters: z.object({
                    startDate: z.string().describe('Start date (YYYY-MM-DD)'),
                    endDate: z.string().describe('End date (YYYY-MM-DD). Defaults to startDate if not provided.'),
                }),
                execute: async ({ startDate, endDate }: any) => {
                    console.log('🛠️ [Tool] getNutritionLog called:', { startDate, endDate })
                    const end = endDate || startDate
                    const { data: meals, error } = await supabase
                        .from('meals')
                        .select('name, calories, protein, carbs, fat, created_at')
                        .gte('created_at', `${startDate}T00:00:00`)
                        .lte('created_at', `${end}T23:59:59`)
                        .order('created_at', { ascending: true })

                    if (error) return `Error fetching logs: ${error.message}`
                    if (!meals || meals.length === 0) return `No meals found between ${startDate} and ${end}.`

                    return JSON.stringify(meals)
                },
            } as any)),
            logMeal: tool(({
                description: 'Log a new meal to the database. Use this when the user explicitly tracks food.',
                parameters: z.object({
                    name: z.string().describe('Name of the food'),
                    calories: z.number().describe('Calories (kcal)'),
                    protein: z.number().describe('Protein (g)'),
                    carbs: z.number().describe('Carbs (g)'),
                    fat: z.number().describe('Fat (g)'),
                    grams: z.number().describe('Weight in grams (default 100)'),
                }),
                execute: async (mealData: any) => {
                    console.log('🛠️ [Tool] logMeal called:', mealData)
                    const { error } = await supabase.from('meals').insert({
                        user_id: user.id,
                        ...mealData,
                        date: new Date().toISOString().split('T')[0]
                    })

                    if (error) return `Error logging meal: ${error.message}`
                    return `Successfully logged: ${mealData.name} (${mealData.calories}kcal)`
                },
            } as any))
        },
        maxSteps: 5, // Allow multi-step tool use (e.g. Check history -> Calc total -> Answer)
        onStepFinish: (step: any) => {
            console.log('🔄 [Step] Finish:', JSON.stringify(step, null, 2))
        },
    }) as any)

    return (result as any).toDataStreamResponse()
}

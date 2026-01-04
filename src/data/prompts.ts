import chatgptPrompts from "./categories/chatgpt.json";
import claudePrompts from "./categories/claude.json";
import midjourneyPrompts from "./categories/midjourney.json";
import businessPrompts from "./categories/business.json";
import writingPrompts from "./categories/writing.json";
import codingPrompts from "./categories/coding.json";
import realestatePrompts from "./categories/real-estate.json";
import legalPrompts from "./categories/legal.json";
import marketingPrompts from "./categories/marketing.json";
import salesPrompts from "./categories/sales.json";
import financePrompts from "./categories/finance.json";
import hrPrompts from "./categories/hr.json";
import saasPrompts from "./categories/saas.json";
import consultingPrompts from "./categories/consulting.json";
import healthcarePrompts from "./categories/healthcare.json";
import contentcreationPrompts from "./categories/content-creation.json";
import { blueprints } from "./blueprints";

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt?: string;
  content?: string;
  category?: string;
  category_id?: string;
  tags: string[];
  type?: string;
}

export const prompts: Record<string, Prompt[]> = {
  chatgpt: chatgptPrompts,
  claude: claudePrompts,
  midjourney: midjourneyPrompts,
  "business-startups": businessPrompts,
  copywriting: writingPrompts,
  coding: codingPrompts,
  "real-estate": realestatePrompts,
  legal: legalPrompts,
  marketing: marketingPrompts,
  sales: salesPrompts,
  finance: financePrompts,
  hr: hrPrompts,
  saas: saasPrompts,
  consulting: consultingPrompts,
  healthcare: healthcarePrompts,
  "content-creation": contentcreationPrompts,
  "agentic-blueprints": blueprints,
};

export function getPromptsByCategory(category: string): Prompt[] {
  return prompts[category] || [];
}

export function getAllPrompts(): Prompt[] {
  return Object.values(prompts).flat();
}

export function getRandomPrompt(category?: string, purpose?: string): Prompt | null {
  let pool: Prompt[];

  if (category && prompts[category]) {
    pool = prompts[category];
  } else {
    pool = getAllPrompts();
  }

  if (purpose) {
    const filtered = pool.filter(p =>
      p.tags.some(tag => tag.toLowerCase().includes(purpose.toLowerCase())) ||
      p.description.toLowerCase().includes(purpose.toLowerCase())
    );
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  if (pool.length === 0) return null;

  return pool[Math.floor(Math.random() * pool.length)];
}

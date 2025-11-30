import chatgptPrompts from "./categories/chatgpt.json";
import claudePrompts from "./categories/claude.json";
import midjourneyPrompts from "./categories/midjourney.json";
import businessPrompts from "./categories/business.json";
import writingPrompts from "./categories/writing.json";
import codingPrompts from "./categories/coding.json";

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  tags: string[];
}

export const prompts: Record<string, Prompt[]> = {
  chatgpt: chatgptPrompts,
  claude: claudePrompts,
  midjourney: midjourneyPrompts,
  business: businessPrompts,
  writing: writingPrompts,
  coding: codingPrompts,
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

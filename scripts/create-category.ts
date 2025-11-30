import fs from 'fs';
import path from 'path';

const categoryName = process.argv[2];

if (!categoryName) {
    console.error('Please provide a category name (e.g., "real-estate")');
    process.exit(1);
}

const sanitizedName = categoryName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
const categoriesDir = path.join(process.cwd(), 'src', 'data', 'categories');
const promptsFile = path.join(process.cwd(), 'src', 'data', 'prompts.ts');
const newJsonFile = path.join(categoriesDir, `${sanitizedName}.json`);

// 1. Create the JSON file
if (fs.existsSync(newJsonFile)) {
    console.log(`Category "${sanitizedName}" already exists.`);
} else {
    const initialContent = [
        {
            id: `${sanitizedName}-1`,
            title: `Example ${categoryName} Prompt`,
            description: `A placeholder description for ${categoryName}`,
            prompt: `Write a prompt for ${categoryName}...`,
            category: sanitizedName,
            tags: [sanitizedName, "example"]
        }
    ];
    fs.writeFileSync(newJsonFile, JSON.stringify(initialContent, null, 2));
    console.log(`Created ${newJsonFile}`);
}

// 2. Update prompts.ts
let promptsContent = fs.readFileSync(promptsFile, 'utf-8');

// Check if import already exists
if (!promptsContent.includes(`categories/${sanitizedName}.json`)) {
    // Add import
    const importStatement = `import ${sanitizedName.replace(/-/g, '')}Prompts from "./categories/${sanitizedName}.json";`;
    const lastImportIndex = promptsContent.lastIndexOf('import ');
    const endOfLastImport = promptsContent.indexOf(';', lastImportIndex) + 1;

    promptsContent =
        promptsContent.slice(0, endOfLastImport) + '\n' + importStatement +
        promptsContent.slice(endOfLastImport);

    // Add to prompts object
    const promptsObjectRegex = /export const prompts: Record<string, Prompt\[\]> = {([\s\S]*?)};/;
    const match = promptsContent.match(promptsObjectRegex);

    if (match) {
        const currentBody = match[1];
        if (!currentBody.includes(`${sanitizedName}:`)) {
            // Find the last comma or the end of the list
            const lastComma = currentBody.lastIndexOf(',');
            const newEntry = `\n  ${sanitizedName}: ${sanitizedName.replace(/-/g, '')}Prompts,`;

            // Insert before the closing brace of the object
            const closingBraceIndex = promptsContent.indexOf('};', endOfLastImport);
            // We need to insert it into the object body. 
            // Let's just replace the whole object body to be safe or append to the end of the match.
            // Simpler: Replace the last element's comma (if missing) and add new line.

            // Robust approach: Split by `};` and insert before it.
            const parts = promptsContent.split('export const prompts: Record<string, Prompt[]> = {');
            const afterExport = parts[1];
            const endOfObject = afterExport.indexOf('};');

            const objectBody = afterExport.slice(0, endOfObject);
            const newObjectBody = objectBody.trimEnd() + newEntry + '\n';

            promptsContent = parts[0] + 'export const prompts: Record<string, Prompt[]> = {' + newObjectBody + afterExport.slice(endOfObject);

            fs.writeFileSync(promptsFile, promptsContent);
            console.log(`Updated prompts.ts with ${sanitizedName}`);
        }
    }
} else {
    console.log(`prompts.ts already imports ${sanitizedName}`);
}

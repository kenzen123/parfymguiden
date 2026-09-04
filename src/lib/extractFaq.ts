export interface FaqEntry {
  question: string;
  answer: string;
}

/**
 * Pulls Q&A pairs out of a "## Vanliga frågor" section in raw markdown,
 * so FAQPage schema stays in sync with the visible content automatically.
 */
export function extractFaq(markdown: string): FaqEntry[] {
  const section = markdown.split(/^##\s+Vanliga frågor\s*$/m)[1];
  if (!section) return [];

  const stopped = section.split(/^##\s+/m)[0];
  const blocks = stopped.split(/^###\s+/m).slice(1);

  return blocks.map((block) => {
    const [question, ...rest] = block.trim().split("\n");
    const answer = rest
      .join(" ")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return { question: question.trim(), answer };
  });
}

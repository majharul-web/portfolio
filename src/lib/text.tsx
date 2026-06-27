import type { ReactNode } from "react";

/**
 * Renders a string with **bold** segments converted to <strong> tags.
 * Keeps content data plain-text-friendly while allowing emphasis.
 */
export function renderEmphasis(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink-bright">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

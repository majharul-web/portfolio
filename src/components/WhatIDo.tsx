import { whatIDo } from "@/data/content";
import { LayoutIcon, ServerIcon, DatabaseIcon, PuzzleIcon } from "@/components/icons";

const whatIDoIconMap = {
  layout: LayoutIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  puzzle: PuzzleIcon,
} as const;

export function WhatIDo() {
  return (
    <div className="mb-14">
      <p className="font-mono text-xs tracking-[0.15em] text-accent">
        <span className="text-ink-muted">~/</span>
        what-i-do
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {whatIDo.map((entry) => {
          const Icon = whatIDoIconMap[entry.icon];
          return (
            <li key={entry.title} className="rounded-xl border border-hairline bg-panel p-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-canvas text-accent ring-1 ring-hairline">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-medium text-ink-bright">{entry.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{entry.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

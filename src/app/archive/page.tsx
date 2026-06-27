import type { Metadata } from "next";
import Link from "next/link";
import { archiveProjects, profile } from "@/data/content";
import { ArrowLeftIcon, ExternalLinkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: `All Projects — ${profile.name}`,
  description: `Every project ${profile.name} has shipped, in one place.`,
};

export default function ArchivePage() {
  return (
    <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:px-12 lg:px-0 lg:py-24">
      <Link
        href="/"
        className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-accent-dim"
      >
        <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
        {profile.name}
      </Link>

      <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink-bright sm:text-5xl">
        All Projects
      </h1>

      {/* Table header — hidden on mobile, where each row becomes a card */}
      <div className="mt-12 hidden border-b border-hairline pb-3 text-xs font-medium uppercase tracking-[0.1em] text-ink-muted sm:grid sm:grid-cols-[64px_1fr_140px_1fr_140px]">
        <span>Year</span>
        <span>Project</span>
        <span>Made at</span>
        <span>Built with</span>
        <span>Link</span>
      </div>

      <ul>
        {archiveProjects.map((entry) => (
          <li
            key={`${entry.name}-${entry.year}`}
            className="grid gap-2 border-b border-hairline py-5 sm:grid-cols-[64px_1fr_140px_1fr_140px] sm:items-start sm:gap-4"
          >
            <span className="font-mono text-sm text-ink-muted">
              {entry.year}
            </span>
            <span className="font-medium text-ink-bright">{entry.name}</span>
            <span className="text-sm text-ink-muted">{entry.madeAt}</span>
            <span className="flex flex-wrap gap-2">
              {entry.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-panel px-2.5 py-0.5 font-mono text-[11px] text-ink-muted ring-1 ring-hairline"
                >
                  {tech}
                </span>
              ))}
            </span>
            <span>
              {entry.href && entry.href !== "#" ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-dim"
                >
                  {entry.linkLabel ?? "Visit"}
                  <ExternalLinkIcon className="h-3 w-3 transition-colors group-hover:text-accent-dim" />
                </a>
              ) : (
                <span className="text-sm text-ink-muted">—</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}

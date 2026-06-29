"use client";

import { useState } from "react";
import { experience } from "@/data/content";
import { Section } from "@/components/Section";
import { ExternalLinkIcon, ArrowRightIcon } from "@/components/icons";

const PREVIEW_BULLET_COUNT = 2;

type ExperienceProps = {
  /** Show the full bullet list for every expanded role. Off by
   * default — the homepage caps an expanded role to its top 2
   * highlights; /about shows everything. Every role is independently
   * expandable/collapsible on both, with the first one open by
   * default. */
  full?: boolean;
};

export function Experience({ full = false }: ExperienceProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    () => new Set([0])
  );

  const toggle = (index: number) => {
    setOpenIndices((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <Section id="experience" label="experience">
      <ol className="max-w-xl space-y-10">
        {experience.map((job, index) => {
          const isOpen = openIndices.has(index);
          const bullets = full
            ? job.bullets
            : job.bullets.slice(0, PREVIEW_BULLET_COUNT);

          const company = job.href ? (
            <a
              href={job.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-dim"
            >
              {job.company}
              <ExternalLinkIcon className="h-3 w-3" />
            </a>
          ) : (
            <span className="text-accent">{job.company}</span>
          );

          return (
            <li
              key={`${job.company}-${job.title}-${job.range}`}
              className="group relative grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4"
            >
              <p className="font-mono text-xs text-ink-muted sm:pt-1">
                {job.range}
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="text-left"
                >
                  <h3 className="text-base font-medium text-ink-bright">
                    {job.title}
                    <ArrowRightIcon
                      className={`ml-2 inline-block h-3.5 w-3.5 text-ink-muted transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </h3>
                </button>
                <p className="mt-0.5 text-sm text-ink-muted">
                  {company}
                  {job.location && (
                    <span className="ml-2 text-xs">· {job.location}</span>
                  )}
                </p>

                {isOpen && (
                  <>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-muted">
                      {bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full bg-panel px-3 py-1 font-mono text-[11px] text-ink-muted ring-1 ring-hairline"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {!full && (
        <a
          href="/about#experience"
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-bright transition-colors hover:text-accent"
        >
          Full work history on /about →
        </a>
      )}
    </Section>
  );
}

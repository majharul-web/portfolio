"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/content";
import { Section } from "@/components/Section";
import { ExternalLinkIcon, ArrowRightIcon } from "@/components/icons";
import { GradientButton } from "@/components/GradientButton";

const PREVIEW_BULLET_COUNT = 2;

type ExperienceProps = {
  /** Show the full bullet list for every expanded role. Off by
   * default — the homepage caps an expanded role to its top 2
   * highlights; /about shows everything. */
  full?: boolean;
  /** Whether the first experience item should be expanded on initial render. */
  defaultOpenFirst?: boolean;
};

export function Experience({ full = false, defaultOpenFirst = false }: ExperienceProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(() =>
    defaultOpenFirst ? new Set([0]) : new Set(),
  );
  const prefersReducedMotion = useReducedMotion();

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

  const invitingIndex = experience.findIndex((_, index) => !openIndices.has(index));

  return (
    <Section id="experience" label="experience">
      <ol className="max-w-4xl space-y-6">
        {experience.map((job, index) => {
          const isOpen = openIndices.has(index);
          // Gently hint toward the next unopened role so the interaction
          // feels progressive: first item first, then the next, and so on.
          const isInviting = index === invitingIndex && !prefersReducedMotion;
          const bullets = full ? job.bullets : job.bullets.slice(0, PREVIEW_BULLET_COUNT);

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
              <p className="font-mono text-xs text-ink-muted sm:pt-1">{job.range}</p>
              <div>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="text-left"
                >
                  <h3 className="flex items-center gap-2 text-base font-medium text-ink-bright">
                    {job.title}
                    <motion.span
                      animate={
                        prefersReducedMotion
                          ? { rotate: isOpen ? 90 : 0, x: 0, y: 0 }
                          : isOpen
                            ? { rotate: 90, y: [0, 4, 0] }
                            : isInviting
                              ? { rotate: 0, x: [0, 4, 0], y: 0 }
                              : { rotate: 0, x: 0, y: 0 }
                      }
                      transition={
                        isOpen
                          ? {
                              rotate: { type: "spring", stiffness: 300, damping: 20 },
                              y: {
                                duration: 1.1,
                                repeat: Infinity,
                                repeatDelay: 0.6,
                                ease: "easeInOut",
                              },
                            }
                          : isInviting
                            ? {
                                x: {
                                  duration: 1.1,
                                  repeat: Infinity,
                                  repeatDelay: 0.6,
                                  ease: "easeInOut",
                                },
                              }
                            : { type: "spring", stiffness: 300, damping: 20 }
                      }
                      className={`inline-flex text-ink-muted ${isInviting ? "text-accent" : ""}`}
                    >
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </motion.span>
                  </h3>
                </button>
                <p className="mt-0.5 text-sm text-ink-muted">
                  {company}
                  {job.location && <span className="ml-2 text-xs">· {job.location}</span>}
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
        <div className="mt-6">
          <GradientButton href="/about#experience" icon={<ArrowRightIcon className="h-3.5 w-3.5" />}>
            Full work history on /about
          </GradientButton>
        </div>
      )}
    </Section>
  );
}

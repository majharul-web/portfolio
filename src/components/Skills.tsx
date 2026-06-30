"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skillCategories, type SkillCategory } from "@/data/content";
import { Section } from "@/components/Section";
import { ArrowRightIcon } from "@/components/icons";

const PREVIEW_ITEMS_PER_CATEGORY = 5;

type SkillsProps = {
  /** Show every skill in every category. Off by default — the
   * homepage shows a trimmed quick-scan version; /about shows
   * everything. */
  full?: boolean;
  /** Override which categories to display. Defaults to all skillCategories. */
  categories?: SkillCategory[];
};

export function Skills({ full = false, categories = skillCategories }: SkillsProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    () => new Set(full ? categories.slice(0, 3).map((_, index) => index) : []),
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

  const invitingIndex = categories.findIndex((_, index) => !openIndices.has(index));

  return (
    <Section id="skills" label="skills">
      <div className="max-w-4xl space-y-6">
        {categories.map((category, index) => {
          const items = full ? category.items : category.items.slice(0, PREVIEW_ITEMS_PER_CATEGORY);
          const hiddenCount = category.items.length - items.length;
          const isOpen = !full || openIndices.has(index);
          const isInviting = full && index === invitingIndex && !prefersReducedMotion;

          return (
            <div key={category.category}>
              {full ? (
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 text-left sm:pointer-events-none"
                >
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                    {category.category}
                  </h3>
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
                    className={`inline-flex text-ink-muted sm:hidden ${isInviting ? "text-accent" : ""}`}
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </motion.span>
                </button>
              ) : (
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                  {category.category}
                </h3>
              )}
              <ul className={`mt-3 flex flex-wrap gap-2.5 ${isOpen ? "" : "hidden sm:flex"}`}>
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-hairline bg-panel px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-ink-bright"
                  >
                    {item}
                  </li>
                ))}
                {hiddenCount > 0 && (
                  <li>
                    <a
                      href="/about#skills"
                      className="rounded-full border border-hairline px-4 py-2 text-sm text-ink-muted transition-colors hover:border-accent hover:text-ink-bright"
                    >
                      +{hiddenCount} more
                    </a>
                  </li>
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

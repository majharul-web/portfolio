import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

/**
 * Section heading uses a file-path-style label (e.g. "~/about") rather
 * than a generic all-caps heading, tying the structure to the developer
 * subject matter.
 */
export function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 pb-14 first:pt-0 lg:scroll-mt-24">
      <div className="sticky top-0 -mx-6 mb-6 bg-canvas/95 px-6 py-3 backdrop-blur-sm sm:-mx-12 sm:px-12 lg:static lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <p className="font-mono text-xs tracking-[0.15em] text-accent">
          <span className="text-ink-muted">~/</span>
          {label}
        </p>
      </div>
      {children}
    </section>
  );
}

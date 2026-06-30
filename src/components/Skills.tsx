import { skillCategories, type SkillCategory } from "@/data/content";
import { Section } from "@/components/Section";

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
  return (
    <Section id="skills" label="skills">
      <div className="max-w-xl space-y-6">
        {categories.map((category) => {
          const items = full ? category.items : category.items.slice(0, PREVIEW_ITEMS_PER_CATEGORY);
          const hiddenCount = category.items.length - items.length;

          return (
            <div key={category.category}>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                {category.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2.5">
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

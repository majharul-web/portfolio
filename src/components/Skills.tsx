import { skillCategories } from "@/data/content";
import { Section } from "@/components/Section";

export function Skills() {
  return (
    <Section id="skills" label="skills">
      <div className="max-w-xl space-y-6">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
              {category.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-hairline bg-panel px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-ink-bright"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

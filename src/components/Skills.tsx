import { skills } from "@/data/content";
import { Section } from "@/components/Section";

export function Skills() {
  return (
    <Section id="skills" label="skills">
      <ul className="flex max-w-xl flex-wrap gap-2.5">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="rounded-full border border-hairline bg-panel px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-ink-bright"
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}

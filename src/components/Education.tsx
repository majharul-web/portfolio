import { education } from "@/data/content";
import { Section } from "@/components/Section";

export function Education() {
  return (
    <Section id="education" label="education">
      <ol className="max-w-4xl space-y-6">
        {education.map((entry) => (
          <li
            key={`${entry.institution}-${entry.degree}`}
            className="relative grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4"
          >
            <p className="font-mono text-xs text-ink-muted sm:pt-1">{entry.range}</p>
            <div>
              <h3 className="text-base font-medium text-ink-bright">{entry.degree}</h3>
              <p className="mt-0.5 text-sm text-ink-muted">
                <span className="text-accent">{entry.institution}</span>
                {entry.cgpa && (
                  <span className="ml-2 text-xs">· CGPA: {entry.cgpa}</span>
                )}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

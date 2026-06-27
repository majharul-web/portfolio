import { experience } from "@/data/content";
import { Section } from "@/components/Section";
import { ExternalLinkIcon } from "@/components/icons";

export function Experience() {
  return (
    <Section id="experience" label="experience">
      <ol className="max-w-xl space-y-10">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.range}`}
            className="group relative grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4"
          >
            <p className="font-mono text-xs text-ink-muted sm:pt-1">
              {job.range}
            </p>
            <div>
              <h3 className="text-base font-medium text-ink-bright">
                {job.title}{" "}
                <span className="text-ink-muted">·</span>{" "}
                {job.href ? (
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
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {job.description}
              </p>
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
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

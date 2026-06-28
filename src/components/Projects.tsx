import Link from "next/link";
import { projects, projectsArchiveHref } from "@/data/content";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRightIcon } from "@/components/icons";

export function Projects() {
  return (
    <Section id="projects" label="projects">
      <ul className="max-w-xl space-y-6">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      <Link
        href={projectsArchiveHref}
        className="group mt-8 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-bright transition-colors hover:text-accent"
      >
        View full project archive
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </Section>
  );
}

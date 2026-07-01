import { projects, projectsArchiveHref } from "@/data/content";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRightIcon } from "@/components/icons";
import { GradientButton } from "@/components/GradientButton";

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

      <div className="mt-8">
        <GradientButton href={projectsArchiveHref} icon={<ArrowRightIcon className="h-3.5 w-3.5" />}>
          View all projects
        </GradientButton>
      </div>
    </Section>
  );
}

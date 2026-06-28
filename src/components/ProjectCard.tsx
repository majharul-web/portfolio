import type { ProjectEntry } from "@/data/content";
import { ExternalLinkIcon, StarIcon, DownloadIcon } from "@/components/icons";

type ProjectCardProps = {
  project: ProjectEntry;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group flex gap-4 rounded-lg p-2 -m-2 transition-colors hover:bg-panel sm:gap-5"
    >
      <span
        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md ring-1 ring-hairline sm:h-24 sm:w-24"
        style={
          project.thumbnailGradient
            ? {
                background: `linear-gradient(135deg, ${project.thumbnailGradient[0]}, ${project.thumbnailGradient[1]})`,
              }
            : undefined
        }
      >
        {project.thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.thumbnail}
            alt=""
            className="h-full w-full object-cover"
          />
        )}
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="flex items-center gap-1.5 font-medium text-ink-bright">
          {project.name}
          <ExternalLinkIcon className="h-3.5 w-3.5 text-ink-muted transition-colors group-hover:text-accent" />
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          {project.stat && (
            <span className="inline-flex items-center gap-1 font-mono text-[11px] text-ink-muted">
              {project.stat.icon === "star" ? (
                <StarIcon className="h-3 w-3" />
              ) : (
                <DownloadIcon className="h-3 w-3" />
              )}
              {project.stat.value}
            </span>
          )}
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-panel px-2.5 py-0.5 font-mono text-[11px] text-ink-muted ring-1 ring-hairline"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}

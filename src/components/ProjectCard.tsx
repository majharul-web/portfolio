import Link from "next/link";
import Image from "next/image";
import type { ProjectEntry } from "@/data/content";
import {
  ExternalLinkIcon,
  ArrowUpRightIcon,
  StarIcon,
  DownloadIcon,
} from "@/components/icons";

type ProjectCardProps = {
  project: ProjectEntry;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveLink = Boolean(project.href && project.href !== "#");

  return (
    <div className="relative flex gap-4 rounded-lg p-2 -m-2 transition-colors hover:bg-panel sm:gap-5">
      {/* Stretched-link overlay: makes the whole card clickable to the
          details page. Sits behind the explicit buttons (z-0 vs their
          implicit higher stacking via relative + the browser's normal
          hit-testing of foreground content), so "Live site" and
          "Details" still work as their own independent targets. */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.name} details`}
        className="absolute inset-0 z-0"
      />

      <span
        className="relative z-10 h-20 w-20 shrink-0 overflow-hidden rounded-md ring-1 ring-hairline sm:h-24 sm:w-24"
        style={
          project.thumbnailGradient
            ? {
                background: `linear-gradient(135deg, ${project.thumbnailGradient[0]}, ${project.thumbnailGradient[1]})`,
              }
            : undefined
        }
      >
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            className="object-cover"
            sizes="96px"
          />
        )}
      </span>

      <div className="relative z-10 min-w-0 flex-1">
        <h3 className="pointer-events-none font-medium text-ink-bright">
          {project.name}
        </h3>
        <p className="pointer-events-none mt-1.5 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="relative z-10 mt-3 flex flex-wrap items-center gap-2">
          {hasLiveLink && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-panel px-3 py-1.5 text-xs text-ink transition-colors hover:border-accent hover:text-ink-bright"
            >
              <ExternalLinkIcon className="h-3.5 w-3.5" />
              Live site
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-panel px-3 py-1.5 text-xs text-ink transition-colors hover:border-accent hover:text-ink-bright"
          >
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
            Details
          </Link>
        </div>

        <div className="pointer-events-none mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
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
    </div>
  );
}

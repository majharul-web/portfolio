import type { Metadata } from "next";
import Link from "next/link";

import { notFound } from "next/navigation";
import { allProjects } from "@/data/content";
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, GithubIcon } from "@/components/icons";
import { GradientButton } from "@/components/GradientButton";
import { FeatureSlideshow } from "@/components/FeatureSlideshow";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = allProjects.findIndex((p) => p.slug === slug);
  const project = allProjects[projectIndex];

  if (!project) {
    notFound();
  }

  const previousProject = projectIndex > 0 ? allProjects[projectIndex - 1] : undefined;
  const nextProject = projectIndex < allProjects.length - 1 ? allProjects[projectIndex + 1] : undefined;

  return (
    <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:px-12 lg:px-0 lg:py-24">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-accent-dim"
      >
        <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
        All projects
      </Link>

      <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink-bright sm:text-5xl">
        {project.name}
      </h1>
      <p className="mt-2 text-lg text-ink-muted">{project.projectType}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-panel px-3 py-1 font-mono text-xs text-ink-muted ring-1 ring-hairline"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.href && project.href !== "#" && (
          <GradientButton href={project.href} external>
            View live site
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </GradientButton>
        )}
        {project.clientCode && (
          <a
            href={project.clientCode}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-ink-bright"
          >
            <GithubIcon className="h-4 w-4" />
            Client code
          </a>
        )}
        {project.serverCode && (
          <a
            href={project.serverCode}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-ink-bright"
          >
            <GithubIcon className="h-4 w-4" />
            Server code
          </a>
        )}
      </div>

      <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-ink">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">Overview</h2>
          <p className="mt-3">{project.overview}</p>
        </section>

        {project.thumbnail && (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">Feature walkthrough</h2>
            <div className="mt-4">
              <FeatureSlideshow
                features={project.features}
                image={project.thumbnail}
                images={project.images}
                projectName={project.name}
              />
            </div>
          </section>
        )}

        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">Outcome</h2>
          <p className="mt-3">{project.outcome}</p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">Challenges</h2>
          <p className="mt-3">{project.challenges}</p>
        </section>
      </div>

      {(previousProject || nextProject) && (
        <nav
          aria-label="More projects"
          className="mt-16 flex items-center justify-between gap-4 border-t border-hairline pt-8"
        >
          {previousProject ? (
            <Link
              href={`/projects/${previousProject.slug}`}
              className="group flex min-w-0 flex-col items-start gap-1"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors group-hover:text-accent">
                <ArrowLeftIcon className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                Previous
              </span>
              <span className="truncate text-sm font-medium text-ink-bright">{previousProject.name}</span>
            </Link>
          ) : (
            <span />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex min-w-0 flex-col items-end gap-1 text-right"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors group-hover:text-accent">
                Next
                <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="truncate text-sm font-medium text-ink-bright">{nextProject.name}</span>
            </Link>
          )}
        </nav>
      )}

      <Footer />
    </main>
  );
}

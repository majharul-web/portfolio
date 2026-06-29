import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allProjects, profile } from "@/data/content";
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "@/components/icons";
import { GradientButton } from "@/components/GradientButton";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: `Project not found — ${profile.name}` };
  }

  return {
    title: `${project.name} — ${profile.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:px-12 lg:px-0 lg:py-24">
      <Link
        href="/archive"
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

      {project.thumbnail && (
        <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-xl ring-1 ring-hairline">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 800px, 100vw"
          />
        </div>
      )}

      <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-ink">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            Overview
          </h2>
          <p className="mt-3">{project.overview}</p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            Features
          </h2>
          <ul className="mt-3 space-y-2.5">
            {project.features.map((feature, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            Outcome
          </h2>
          <p className="mt-3">{project.outcome}</p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            Challenges
          </h2>
          <p className="mt-3">{project.challenges}</p>
        </section>
      </div>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { archiveProjects, profile } from "@/data/content";
import { ArrowLeftIcon } from "@/components/icons";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: `All Projects — ${profile.name}`,
  description: `Every project ${profile.name} has shipped, in one place.`,
};

export default function ArchivePage() {
  return (
    <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:px-12 lg:px-0 lg:py-24">
      <Link
        href="/"
        className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-accent-dim"
      >
        <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
        {profile.name}
      </Link>

      <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink-bright sm:text-5xl">
        All Projects
      </h1>

      <ul className="mt-12 max-w-xl space-y-6">
        {archiveProjects.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      <Footer />
    </main>
  );
}

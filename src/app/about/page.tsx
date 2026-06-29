import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/content";
import { ArrowLeftIcon, ExternalLinkIcon } from "@/components/icons";
import { About } from "@/components/About";
import { WhatIDo } from "@/components/WhatIDo";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { ResumeButton } from "@/components/ResumeButton";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: `${profile.role} — background and work history.`,
};

export default function AboutPage() {
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
        About
      </h1>

      <div className="mt-12 space-y-16">
        <About showPhoto />

        <ResumeButton
          href={profile.resumeHref}
          icon={<ExternalLinkIcon className="h-4 w-4" />}
        >
          View full résumé
        </ResumeButton>

        <Skills full />
        <Experience full />
        <WhatIDo />
      </div>

      <Footer />
    </main>
  );
}

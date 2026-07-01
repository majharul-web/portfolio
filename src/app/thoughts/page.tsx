import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, profile } from "@/data/content";
import { ArrowLeftIcon } from "@/components/icons";
import { BlogThumbnail } from "@/components/BlogThumbnail";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thoughts",
  description: `Writing from ${profile.name} on software and building things.`,
};

export default function ThoughtsPage() {
  return (
    <main className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:px-12 lg:px-0 lg:py-24">
      <Link
        href="/"
        className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-accent-dim"
      >
        <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
        {profile.name}
      </Link>

      <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink-bright sm:text-5xl">
        Thoughts
      </h1>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <li key={post.title}>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-xl border border-hairline bg-panel transition-colors hover:border-accent"
            >
              <BlogThumbnail
                post={post}
                showTitleOverlay
                sizes="(min-width: 640px) 400px, 100vw"
                className="h-40 w-full items-end p-5"
              />
              <div className="p-5">
                <p className="font-mono text-xs text-ink-muted">
                  {[post.category ?? "Thought", post.date].filter(Boolean).join(" · ")}
                </p>
                <h3 className="mt-2 font-medium text-ink-bright transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {post.description}
                  </p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, profile } from "@/data/content";
import { ArrowLeftIcon } from "@/components/icons";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
  description: `Writing from ${profile.name} on software and building things.`,
};

export default function BlogPage() {
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
        Blog
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
              <div
                className="relative flex h-40 items-end p-5"
                style={
                  !post.thumbnail && post.thumbnailGradient
                    ? {
                        background: `linear-gradient(135deg, ${post.thumbnailGradient[0]}, ${post.thumbnailGradient[1]})`,
                      }
                    : undefined
                }
              >
                {post.thumbnail ? (
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 400px, 100vw"
                  />
                ) : (
                  <span className="font-display text-xl font-semibold leading-tight text-canvas drop-shadow-sm">
                    {post.title}
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="font-mono text-xs text-ink-muted">
                  {[post.category ?? "Blog", post.date].filter(Boolean).join(" · ")}
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

import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="mt-8 max-w-xl pb-16 font-mono text-xs text-ink-muted">
      <p>
        Built with Next.js &amp; Tailwind CSS.{" "}
        <a
          href={`mailto:${profile.email}`}
          className="underline decoration-hairline underline-offset-4 transition-colors hover:text-accent"
        >
          {profile.email}
        </a>
      </p>
    </footer>
  );
}

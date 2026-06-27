import { blogPosts } from "@/data/content";
import { Section } from "@/components/Section";
import { ExternalLinkIcon } from "@/components/icons";

export function Blog() {
  return (
    <Section id="blog" label="blog">
      <ul className="max-w-xl space-y-4">
        {blogPosts.map((post) => (
          <li key={post.title}>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-lg p-2 -m-2 transition-colors hover:bg-panel"
            >
              <span
                className="h-14 w-14 shrink-0 overflow-hidden rounded-md ring-1 ring-hairline sm:h-16 sm:w-16"
                style={
                  post.thumbnailGradient
                    ? {
                        background: `linear-gradient(135deg, ${post.thumbnailGradient[0]}, ${post.thumbnailGradient[1]})`,
                      }
                    : undefined
                }
              />
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-ink-muted">
                  {post.date}
                </p>
                <h3 className="mt-1 flex items-center gap-1.5 font-medium text-ink-bright">
                  {post.title}
                  <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-ink-muted transition-colors group-hover:text-accent" />
                </h3>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

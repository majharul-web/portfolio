import { profile, socials } from "@/data/content";
import { iconMap, MailIcon, PhoneIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="mt-16 pb-16">
      <div className="footer-texture relative overflow-hidden rounded-2xl border border-hairline bg-panel px-6 py-12 text-center sm:px-12">
        <div className="relative">
          <span className="inline-flex rounded-full border border-hairline bg-canvas px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
            Contact
          </span>

          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink-bright sm:text-4xl">
            Get in Touch
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
            Want to chat? Reach out by email or phone and I&apos;ll respond
            as soon as I can — always happy to talk about new projects or
            opportunities.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas px-4 py-2 text-ink transition-colors hover:border-accent hover:text-ink-bright"
            >
              <MailIcon className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas px-4 py-2 text-ink transition-colors hover:border-accent hover:text-ink-bright"
            >
              <PhoneIcon className="h-4 w-4" />
              {profile.phone}
            </a>
          </div>

          <ul className="mt-8 flex items-center justify-center gap-5">
            {socials.map(({ label, href, icon }) => {
              const Icon = iconMap[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    className="text-ink-muted transition-colors hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-center font-mono text-xs text-ink-muted">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}

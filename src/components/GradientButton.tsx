import Link from "next/link";
import type { ReactNode } from "react";

type GradientButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
};

/**
 * A rounded CTA button with an animated, rotating gradient border —
 * the border itself is a conic-gradient on a slightly oversized
 * pseudo-element-like wrapper, masked down to a ring by an inset solid
 * background, with the rotation driven by a CSS animation (see
 * .gradient-button-ring in globals.css). Used sparingly for primary
 * calls to action (résumé, live project links).
 *
 * Pass the trailing arrow/icon via `icon` rather than as a trailing
 * child — that's what gets the hover nudge + idle attention animation
 * (see .gradient-button-icon in globals.css), so every usage picks it
 * up consistently instead of each call site animating its own icon.
 */
export function GradientButton({
  href,
  children,
  icon,
  external = false,
  className = "",
}: GradientButtonProps) {
  const content = (
    <span className="gradient-button-ring relative inline-flex items-center gap-1.5 rounded-full p-[1.5px]">
      <span className="relative inline-flex items-center gap-1.5 rounded-full bg-canvas px-5 py-2.5 text-sm font-medium text-ink-bright transition-colors group-hover:bg-panel">
        {children}
        {icon && (
          <span className="gradient-button-icon inline-flex transition-transform group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`group inline-flex ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`group inline-flex ${className}`}>
      {content}
    </Link>
  );
}

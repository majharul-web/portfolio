import Link from "next/link";
import type { ReactNode } from "react";

type ResumeButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

/**
 * A solid, accent-filled CTA — deliberately different from
 * GradientButton's rotating-border treatment so the résumé link reads
 * as a distinct, more confident action rather than just another link
 * in the same visual family. A light "shine" sweeps across on hover.
 *
 * Pass the trailing arrow/icon via `icon` rather than as a trailing
 * child — same .gradient-button-icon nudge animation as GradientButton,
 * so every CTA's icon feels consistent even though the buttons
 * themselves look different.
 */
export function ResumeButton({
  href,
  children,
  icon,
  className = "",
}: ResumeButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const content = (
    <span className="resume-button-shine relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-3 text-sm font-semibold text-canvas shadow-lg shadow-accent/20 transition-transform group-hover:-translate-y-0.5 group-active:translate-y-0">
      {children}
      {icon && (
        <span className="gradient-button-icon inline-flex transition-transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </span>
  );

  if (isExternal) {
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

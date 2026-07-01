"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { dockNav, profile, socials } from "@/data/content";
import {
  iconMap,
  SunIcon,
  MoonIcon,
  HomeIcon,
  UserIcon,
  FolderIcon,
  PenIcon,
  DownloadIcon,
} from "@/components/icons";

const navIconMap = {
  home: HomeIcon,
  about: UserIcon,
  projects: FolderIcon,
  thoughts: PenIcon,
} as const;

type DockItemProps = {
  label: string;
  isActive?: boolean;
  scale: number;
  onHover: () => void;
  onLeave: () => void;
  children: React.ReactNode;
} & ({ href: string; onClick?: never } | { href?: never; onClick: () => void });

/**
 * A single dock icon. Scale is computed by the parent based on distance
 * from the hovered index (macOS-dock style magnification) and applied
 * via inline transform so neighbours can react too, not just the
 * hovered item itself. Internal routes (starting with "/") use next/link
 * for client-side transitions; external links use a plain anchor that
 * opens in a new tab.
 */
function DockItem({ label, isActive, scale, onHover, onLeave, href, onClick, children }: DockItemProps) {
  const sharedProps = {
    "aria-label": label,
    onMouseEnter: onHover,
    onMouseLeave: onLeave,
    onFocus: onHover,
    onBlur: onLeave,
    style: { transform: `scale(${scale}) translateY(${(scale - 1) * -10}px)` },
    className: `group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-150 ease-out ${
      isActive ? "bg-accent text-canvas" : "text-ink-muted hover:text-ink-bright"
    }`,
  };

  const tooltip = (
    <span
      role="tooltip"
      className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink-bright px-2 py-1 font-mono text-[10px] text-canvas opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      {label}
    </span>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noreferrer" {...sharedProps}>
          {children}
          {tooltip}
        </a>
      );
    }

    return (
      <Link href={href} {...sharedProps}>
        {children}
        {tooltip}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} {...sharedProps}>
      {children}
      {tooltip}
    </button>
  );
}

export function Dock() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // `next-themes` only knows the real theme after mount (it reads
  // localStorage/the document class on the client); resolvedTheme is
  // undefined during SSR and on the very first client render. Rendering
  // a theme-dependent icon before that settles is what was causing the
  // sun/moon hydration mismatch, so we wait for `mounted` before picking
  // an icon and render a neutral placeholder until then. This is the
  // standard next-themes mount-detection pattern; there's no external
  // subscription to hook into here, just "has the client taken over
  // yet," so a one-time setState in an effect is the correct tool.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const items = [
    ...dockNav.map((item) => ({
      kind: "nav" as const,
      key: item.id,
      label: item.label,
      href: item.href,
      isActive:
        item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`),
    })),
    {
      kind: "divider" as const,
      key: "divider-1",
      className: "hidden lg:block",
    },
    ...socials.map((social) => ({
      kind: "social" as const,
      key: social.label,
      label: social.label,
      href: social.href,
      icon: social.icon,
      className: "hidden lg:block",
    })),
    {
      kind: "resume" as const,
      key: "resume",
      label: "Résumé",
      href: profile.resumeHref,
    },
    { kind: "divider" as const, key: "divider-2", className: "" },
    { kind: "theme" as const, key: "theme" },
  ];

  const interactiveIndices = items
    .map((item, index) => (item.kind === "divider" ? null : index))
    .filter((index): index is number => index !== null);

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(interactiveIndices.indexOf(index) - interactiveIndices.indexOf(hoveredIndex));
    if (distance === 0) return 1.35;
    if (distance === 1) return 1.15;
    return 1;
  };

  return (
    <nav aria-label="Quick navigation" className="sticky top-0 z-30 flex justify-center px-4 py-4">
      <ul
        className="flex items-end gap-1 rounded-2xl border border-hairline bg-panel px-3 py-2 shadow-lg shadow-black/20 backdrop-blur-md"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {items.map((item, index) => {
          if (item.kind === "divider") {
            return (
              <li key={item.key} aria-hidden="true" className={`px-1 ${item.className}`}>
                <span className="block h-6 w-px bg-hairline" />
              </li>
            );
          }

          const scale = getScale(index);

          if (item.kind === "nav") {
            const NavIcon = navIconMap[item.key as keyof typeof navIconMap];
            return (
              <li key={item.key}>
                <DockItem
                  label={item.label}
                  isActive={item.isActive}
                  scale={scale}
                  href={item.href}
                  onHover={() => setHoveredIndex(index)}
                  onLeave={() => {}}
                >
                  <NavIcon className="h-4.5 w-4.5" />
                </DockItem>
              </li>
            );
          }

          if (item.kind === "social") {
            const Icon = iconMap[item.icon];
            return (
              <li key={item.key} className={item.className}>
                <DockItem
                  label={item.label}
                  scale={scale}
                  href={item.href}
                  onHover={() => setHoveredIndex(index)}
                  onLeave={() => {}}
                >
                  <Icon className="h-4.5 w-4.5" />
                </DockItem>
              </li>
            );
          }

          if (item.kind === "resume") {
            return (
              <li key={item.key}>
                <DockItem
                  label={item.label}
                  scale={scale}
                  href={item.href}
                  onHover={() => setHoveredIndex(index)}
                  onLeave={() => {}}
                >
                  <DownloadIcon className="h-4.5 w-4.5" />
                </DockItem>
              </li>
            );
          }

          return (
            <li key={item.key}>
              <DockItem
                label="Toggle theme"
                scale={scale}
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => {}}
              >
                {!mounted ? (
                  <span className="block h-4.5 w-4.5" aria-hidden="true" />
                ) : resolvedTheme === "dark" ? (
                  <SunIcon className="h-4.5 w-4.5" />
                ) : (
                  <MoonIcon className="h-4.5 w-4.5" />
                )}
              </DockItem>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { nav, profile, socials } from "@/data/content";
import { useActiveSection } from "@/lib/useActiveSection";
import { iconMap, ExternalLinkIcon } from "@/components/icons";
import { GradientButton } from "@/components/GradientButton";

const sectionIds = nav.map((item) => item.id);

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export function Sidebar() {
  const activeId = useActiveSection(sectionIds);
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion: render the same markup with no animated state, so
  // there's no opacity:0 flash and no motion at all.
  const variants = prefersReducedMotion ? undefined : item;
  const containerVariants = prefersReducedMotion ? undefined : container;
  const initial = prefersReducedMotion ? undefined : "hidden";
  const animate = prefersReducedMotion ? undefined : "visible";

  return (
    <header className="relative z-10 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[40%] lg:max-w-[480px] lg:flex-col lg:justify-between lg:py-24 px-6 sm:px-12 lg:px-0 lg:pl-12 xl:pl-24 pt-16 pb-10">
      <motion.div
        initial={initial}
        animate={animate}
        variants={containerVariants}
      >
        <div className="flex items-start gap-5">
          <div>
            <motion.p
              variants={variants}
              className="font-mono text-xs text-accent"
            >
              {"// hello, I'm"}
            </motion.p>
            <motion.h1
              variants={variants}
              className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink-bright"
            >
              {profile.name}
            </motion.h1>
          </div>
          <motion.div
            variants={variants}
            className="mt-1 shrink-0 overflow-hidden rounded-full ring-2 ring-hairline"
          >
            <Image
              src={profile.avatarSrc}
              alt={profile.name}
              width={72}
              height={72}
              priority
              className="h-16 w-16 object-cover sm:h-[72px] sm:w-[72px]"
            />
          </motion.div>
        </div>
        <motion.h2
          variants={variants}
          className="mt-2 text-lg sm:text-xl font-medium text-ink"
        >
          {profile.role}
        </motion.h2>
        <motion.p
          variants={variants}
          className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={variants} className="mt-6">
          <GradientButton href={profile.resumeHref} external>
            View full résumé
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </GradientButton>
        </motion.div>

        <motion.nav
          variants={variants}
          aria-label="In-page"
          className="mt-12 hidden lg:block"
        >
          <ul className="space-y-1">
            {nav.map((navItem) => {
              const isActive = activeId === navItem.id;
              return (
                <li key={navItem.id}>
                  <a
                    href={`#${navItem.id}`}
                    className="group flex items-center gap-3 py-2"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-12 bg-accent"
                          : "w-4 bg-ink-muted group-hover:w-8 group-hover:bg-ink-bright"
                      }`}
                    />
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                        isActive
                          ? "text-ink-bright"
                          : "text-ink-muted group-hover:text-ink-bright"
                      }`}
                    >
                      {navItem.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </motion.div>

      <ul className="mt-10 flex items-center gap-5 lg:mt-0 lg:hidden">
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
    </header>
  );
}

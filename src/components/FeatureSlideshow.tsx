"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDE_DURATION = 3500;

/** Short label shown when a feature is inactive — text before the first comma, max 55 chars. */
function getTitle(feature: string): string {
  const beforeComma = feature.split(",")[0];
  return beforeComma.length > 55 ? beforeComma.slice(0, 55).trimEnd() + "…" : beforeComma;
}

type FeatureSlideshowProps = {
  features: string[];
  /** Fallback image used when `images` is not provided or shorter than `features`. */
  image: string;
  /** One demo image per feature slide. Wraps around if shorter than features array. */
  images?: string[];
  projectName: string;
};

export function FeatureSlideshow({ features, image, images, projectName }: FeatureSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, [features.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [advance, paused]);

  /** Resolve which image to show for a given slide index. */
  function slideImage(index: number): string {
    if (images && images.length > 0) {
      return images[index % images.length];
    }
    return image;
  }

  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_1.3fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Feature list ───────────────────────────────────────────── */}
      <div className="flex flex-col justify-center space-y-px">
        {features.map((feature, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`w-full border-l-2 px-4 py-3 text-left transition-all duration-300 ${
                isActive
                  ? "border-accent bg-panel"
                  : "border-hairline hover:border-accent/60 hover:bg-panel/50"
              }`}
            >
              {/* Inactive: show short title only */}
              <AnimatePresence initial={false}>
                {!isActive && (
                  <motion.span
                    key="title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block text-sm font-medium leading-snug text-ink-muted"
                  >
                    {getTitle(feature)}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Active: show full description only — no title above */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.p
                    key="desc"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden text-sm leading-relaxed text-ink-bright"
                  >
                    {feature}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* ── Image panel ────────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-xl ring-1 ring-hairline aspect-4/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slideImage(activeIndex)}
              alt={`${projectName} — feature ${activeIndex + 1}`}
              fill
              className="object-cover object-top"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-hairline">
          <motion.div
            key={`pb-${activeIndex}-${String(paused)}`}
            className="h-full bg-accent"
            initial={{ width: "0%" }}
            animate={paused ? { width: "0%" } : { width: "100%" }}
            transition={paused ? { duration: 0 } : { duration: SLIDE_DURATION / 1000, ease: "linear" }}
          />
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {features.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to feature ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-4 bg-accent" : "w-1.5 bg-ink-muted/40 hover:bg-ink-muted/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

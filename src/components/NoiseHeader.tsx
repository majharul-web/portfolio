"use client";

import { useEffect, useRef } from "react";

const FADE_HEIGHT = 100;
// The opaque backing only needs to cover the dock's own footprint
// (its py-4 padding + the pill), not the full fade height — past this
// point page content is expected to be visible again as the texture
// dissolves, which is also roughly where the dock visually ends.
const SOLID_HEIGHT = 88;
const PARTICLE_DENSITY = 0.0022; // particles per square pixel

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
};

function createParticle(width: number, randomY = true): Particle {
  return {
    x: Math.random() * width,
    y: randomY ? Math.random() * FADE_HEIGHT : -8,
    size: 2 + Math.random() * 4,
    speed: 0.3 + Math.random() * 0.9,
    opacity: 0.25 + Math.random() * 0.5,
  };
}

/**
 * An animated band of small falling squares spanning the top of the
 * page, like a slow digital-rain/waterfall texture. Two layers:
 *
 * 1. A solid, unmasked backing (`SOLID_HEIGHT` tall) that fully blocks
 *    scrolled page content from showing through wherever the sticky
 *    dock sits on top of it. This is what makes "no bleed-through"
 *    actually work — it doesn't depend on the dock having its own
 *    background, so the dock can sit on top of it with nothing but
 *    its own pill, letting the animation show everywhere around it.
 * 2. The animated particle canvas on top, masked to fade out toward
 *    the bottom (`FADE_HEIGHT` tall) for the visual taper.
 *
 * Fixed to the viewport so its width never depends on a width-
 * constrained ancestor.
 */
export function NoiseHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let particles: Particle[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let animationFrame = 0;

    const buildParticles = (w: number) => {
      const count = Math.max(
        40,
        Math.round(w * FADE_HEIGHT * PARTICLE_DENSITY)
      );
      particles = Array.from({ length: count }, () => createParticle(w));
    };

    const resize = () => {
      width = window.innerWidth;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = FADE_HEIGHT * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${FADE_HEIGHT}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles(width);
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, FADE_HEIGHT);
      for (const particle of particles) {
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);

        if (!prefersReducedMotion) {
          particle.y += particle.speed;
          if (particle.y > FADE_HEIGHT) {
            Object.assign(particle, createParticle(width, false));
          }
        }
      }
    };

    const tick = () => {
      drawFrame();
      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    resize();
    tick();

    let resizeTimeout: ReturnType<typeof setTimeout> | undefined;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-20"
      style={{ height: FADE_HEIGHT }}
    >
      {/* Opaque backing — the actual content-blocking layer. Unmasked,
          solid, and only as tall as the dock needs to be covered. */}
      <div
        className="absolute inset-x-0 top-0 bg-canvas"
        style={{ height: SOLID_HEIGHT }}
      />
      {/* Animated particles, masked to fade out over the full height. */}
      <div
        className="absolute inset-x-0 top-0 h-full w-full"
        style={{
          height: FADE_HEIGHT,
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      >
        <canvas ref={canvasRef} className="pointer-events-none" />
      </div>
    </div>
  );
}

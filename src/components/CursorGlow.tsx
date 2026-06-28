"use client";

import { useEffect, useRef } from "react";

/**
 * A soft radial-gradient blob that follows the pointer, sitting behind
 * all page content. Position is written straight to CSS custom
 * properties on a ref'd element (no React state/re-renders), and the
 * effect is skipped entirely for touch-only devices and anyone who
 * has asked for reduced motion.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchOnly = window.matchMedia("(hover: none)").matches;

    if (prefersReducedMotion || isTouchOnly) return;

    const el = glowRef.current;
    if (!el) return;

    let frame = 0;
    let pendingX = 0;
    let pendingY = 0;

    const applyPosition = () => {
      el.style.setProperty("--glow-x", `${pendingX}px`);
      el.style.setProperty("--glow-y", `${pendingY}px`);
      frame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pendingX = event.clientX;
      pendingY = event.clientY;
      if (!frame) {
        frame = requestAnimationFrame(applyPosition);
      }
    };

    const handlePointerEnter = () => {
      el.style.setProperty("--glow-opacity", "1");
    };

    const handlePointerLeave = () => {
      el.style.setProperty("--glow-opacity", "0");
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener(
      "pointerenter",
      handlePointerEnter
    );
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "pointerenter",
        handlePointerEnter
      );
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="cursor-glow pointer-events-none fixed inset-0 z-[25] hidden lg:block"
    />
  );
}

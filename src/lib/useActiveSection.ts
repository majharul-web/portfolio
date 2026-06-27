"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently most visible
 * in the viewport, for highlighting the active nav item. Returns ""
 * if none of the ids exist on the current page (e.g. on a page that
 * isn't the single-page scroller these ids belong to), rather than
 * defaulting to the first id and falsely marking it active.
 */
export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    // IntersectionObserver fires its callback once immediately after
    // observe() with each target's current intersection state, so this
    // also establishes the initial active section — no separate
    // synchronous setState call needed here.
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

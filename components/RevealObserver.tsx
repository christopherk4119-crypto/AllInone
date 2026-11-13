"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole page. Adds `.is-in` to any
 * `[data-reveal]` element as it scrolls into view. Content is visible by
 * default; hiding only happens once `html.js` is set (see layout.tsx), and
 * prefers-reduced-motion disables the motion entirely in CSS.
 */
export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

"use client";

import { SELECT_PROJECT_EVENT } from "@/lib/events";

/**
 * Link to the estimate form. If `project` is given, the form's
 * Project Type dropdown is pre-selected with it.
 */
export default function EstimateLink({
  project,
  className = "",
  children,
  ariaLabel,
}: {
  project?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href="#contact"
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        if (project) window.dispatchEvent(new CustomEvent(SELECT_PROJECT_EVENT, { detail: project }));
      }}
    >
      {children}
    </a>
  );
}

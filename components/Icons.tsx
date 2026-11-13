import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
  ...p,
});

export const PhoneIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
export const PinIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const MailIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const ClockIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const CheckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
export const XIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const MenuIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const ArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ChevronLeft = (p: P) => (
  <svg {...base(p)}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);
export const ChevronRight = (p: P) => (
  <svg {...base(p)}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);
export const StarIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
  </svg>
);
export const QuoteIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M9 7H5v6h4v-2a4 4 0 0 1-4 4M19 7h-4v6h4v-2a4 4 0 0 1-4 4" />
  </svg>
);
export const HammerIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m14 7-9.5 9.5a2 2 0 0 0 2.8 2.8L17 10" />
    <path d="m13 4 7 7-2.5 2.5-7-7z" />
    <path d="M13 4c1.5-1.5 3.5-1.5 5 0" />
  </svg>
);
export const ChatIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z" />
  </svg>
);
export const YelpIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M12.3 2.6c-.1-.5-.5-.8-1-.8-1 .1-3.6.9-4.4 1.3-.5.3-.7.8-.5 1.3l4 7c.6 1 2.1.6 2.1-.6zM10.4 14.3l-4.6 1.3c-.5.1-.8.6-.7 1.1.1.9 1 2.9 1.5 3.6.3.4.9.5 1.3.2l3.6-3.6c.8-.8.1-2.4-1.1-2.6zM11 12.4 6 10.6c-.5-.2-1 0-1.2.5-.4.8-.7 2.8-.6 3.7 0 .5.5.9 1 .8l4.9-1.4c1.1-.3 1.1-1.9-.1-1.8zM14.3 15.3c-.8-.8-2.3-.2-2.2 1v5c0 .5.4.9.9.9.9 0 2.9-.6 3.7-1.1.4-.3.5-.8.3-1.2zM19.6 10.2c-.5-.8-2-2.3-2.8-2.8-.4-.3-1-.2-1.3.2l-3 4.1c-.7.9.2 2.3 1.4 1.9l5.1-1.8c.5-.2.8-.8.6-1.6z" />
  </svg>
);

/* Service icons */
export const ServiceIcon = ({ name, ...p }: P & { name: string }) => {
  switch (name) {
    case "basement":
      return (
        <svg {...base(p)}>
          <path d="M3 10 12 3l9 7" />
          <path d="M5 9v12h14V9" />
          <path d="M5 15h14" />
          <path d="M9 21v-3h6v3" />
        </svg>
      );
    case "suite":
      return (
        <svg {...base(p)}>
          <path d="M2 11 8 6l6 5" />
          <path d="M4 10v10h8V10" />
          <path d="M14 20h7v-8l-4-3" />
          <path d="M7 20v-4h2v4M17 14h1" />
        </svg>
      );
    case "kitchen":
      return (
        <svg {...base(p)}>
          <rect x="3" y="11" width="18" height="10" rx="1" />
          <path d="M3 15h18M12 11v10M7 3v5M5 3v3a2 2 0 0 0 4 0V3M16 3c-1.5 1-2 2.5-2 4h4c0-1.5-.5-3-2-4zM16 7v1" />
        </svg>
      );
    case "bath":
      return (
        <svg {...base(p)}>
          <path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" />
          <path d="M6 12V5a2 2 0 0 1 3.5-1.3M7 20l-1 2M17 20l1 2" />
        </svg>
      );
    case "roller":
      return (
        <svg {...base(p)}>
          <rect x="3" y="3" width="15" height="6" rx="1.5" />
          <path d="M18 6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-8v3" />
          <rect x="10.5" y="14" width="3" height="7" rx="1" />
        </svg>
      );
    case "stairs":
      return (
        <svg {...base(p)}>
          <path d="M3 21h5v-5h4v-4h4V8h5" />
          <path d="M8 16V9M12 12V5M16 8V3" />
        </svg>
      );
    case "house":
      return (
        <svg {...base(p)}>
          <path d="M3 11 12 4l9 7" />
          <path d="M5 10v10h14V10" />
          <rect x="8" y="12" width="3.5" height="3.5" />
          <path d="M14 20v-6h3v6" />
        </svg>
      );
    case "camera":
      return (
        <svg {...base(p)}>
          <path d="M3 7h12l4 3-4 3H3z" />
          <path d="M9 13v3H4M4 13.5V19" />
          <circle cx="16.5" cy="10" r=".6" fill="currentColor" />
          <path d="M18 17h3M19.5 15.5v3" />
        </svg>
      );
    default:
      return <HammerIcon {...p} />;
  }
};

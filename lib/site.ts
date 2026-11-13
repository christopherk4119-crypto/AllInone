/**
 * SITE CONFIG — every client detail lives here so it can be updated in one place.
 *
 * Anything marked `// CONFIRM WITH CLIENT` is a placeholder or an unverified
 * detail. Do NOT publish the site until each one is confirmed or removed.
 */

export const site = {
  // CONFIRM WITH CLIENT: exact styling — "All In One Contracting & Design" vs "All in one contracting and design"
  name: "All In One Contracting & Design",
  shortName: "All In One",
  tagline: "Airdrie's All-in-One Renovation Contractor",
  secondaryLine: "From framing to final coat. One crew, the whole job.",

  // CONFIRM WITH CLIENT: owner's name. Leave null to keep generic wording ("the owner").
  ownerName: null as string | null,

  phone: {
    display: "403-714-9409",
    href: "tel:+14037149409",
    e164: "+14037149409",
  },

  // CONFIRM WITH CLIENT: email address. While null, the site shows a placeholder and hides mailto links.
  email: null as string | null,

  // CONFIRM WITH CLIENT: business hours. Do NOT claim 24/7.
  hours: null as string | null,

  // CONFIRM WITH CLIENT: years in business / founding year. Not shown anywhere until set.
  foundedYear: null as number | null,

  // CONFIRM WITH CLIENT: are estimates actually free? The brief uses "Free Estimate" throughout.
  // If not, change this label and it updates every button on the site.
  estimateLabel: "Get a Free Estimate",
  estimateShort: "Free Estimate",
  estimatesAreFree: true,

  // Set to false once every photo on the site is a real project photo.
  // While true, the gallery shows a small "representative photos" note so
  // stock images are never presented as this company's own work.
  photosAreStock: true,

  city: "Airdrie",
  region: "AB",
  country: "CA",
  areaSummary: "Airdrie, Calgary & surrounding towns",

  homeBase: "Airdrie",
  serviceAreas: [
    "Calgary",
    "Cochrane",
    "Crossfield",
    "Irricana",
    "Carstairs",
    "Didsbury",
    "Olds",
    "Strathmore",
    "Okotoks",
  ],

  links: {
    yelp: "https://www.yelp.ca/biz/all-in-one-contracting-and-design-calgary-2",
    // CONFIRM WITH CLIENT: Google Business Profile link. Not shown until set.
    google: null as string | null,
    // CONFIRM WITH CLIENT: which Facebook page is official. Do NOT add until confirmed.
    facebook: null as string | null,
  },

  /*
   * Other items to confirm before making ANY claim about them on the site
   * (nothing below is claimed anywhere right now):
   *  - Insurance / WCB coverage                          // CONFIRM WITH CLIENT
   *  - Permits & inspections for basements/legal suites  // CONFIRM WITH CLIENT
   *  - Electrical scope (kept to low-voltage only)        // CONFIRM WITH CLIENT
   *  - Warranty / workmanship guarantee                   // CONFIRM WITH CLIENT
   *  - Pricing or financing                               // CONFIRM WITH CLIENT
   *  - Real customer reviews                              // CONFIRM WITH CLIENT
   *  - Real project photos (all current photos are stock) // CONFIRM WITH CLIENT
   *  - Real logo (/public/logo.png)                       // CONFIRM WITH CLIENT
   */
} as const;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com").replace(/\/$/, "");

export const ownerLabel = site.ownerName ?? "the Owner";

/** Services shown as cards. `formValue` must match an entry in `projectTypes`. */
export const services = [
  {
    id: "basement",
    title: "Basement Development",
    description: "Full basement builds, from framing to final paint. Family rooms, bedrooms, theatres and more.",
    icon: "basement",
    formValue: "Basement Development",
    accent: "copper",
  },
  {
    id: "legal-suite",
    title: "Legal Suites & Additions",
    description: "Secondary suites and home additions that add space and value to your property.",
    icon: "suite",
    formValue: "Legal Suite",
    accent: "slate",
  },
  {
    id: "kitchen",
    title: "Kitchen Renovations",
    description: "Updated layouts, cabinets, counters and finishes for the room you use most.",
    icon: "kitchen",
    formValue: "Kitchen",
    accent: "copper",
  },
  {
    id: "bathroom",
    title: "Bathroom Remodels",
    description: "From a quick refresh to a full gut-and-rebuild.",
    icon: "bath",
    formValue: "Bathroom",
    accent: "slate",
  },
  {
    id: "drywall",
    title: "Drywall & Painting",
    description: "Installation, patching, repair, texturing, tape and mud, and a clean paint finish.",
    icon: "roller",
    formValue: "Drywall & Painting",
    accent: "copper",
  },
  {
    id: "carpentry",
    title: "Carpentry & Stairs",
    description: "Framing, trim, custom stairways and railings, built to last.",
    icon: "stairs",
    formValue: "Carpentry & Stairs",
    accent: "slate",
  },
  {
    id: "exterior",
    title: "Exterior Work",
    description: "Decks, doors and windows, siding, foundation crack repair and parging.",
    icon: "house",
    formValue: "Exterior",
    accent: "copper",
  },
  {
    id: "low-voltage",
    title: "Home Theatre & Security Cameras",
    // CONFIRM WITH CLIENT: electrical scope. Kept to low-voltage only until confirmed.
    description: "Low-voltage wiring for home theatre setups and video surveillance systems.",
    icon: "camera",
    formValue: "Home Theatre & Cameras",
    accent: "slate",
  },
] as const;

export const projectTypes = [
  "Basement Development",
  "Legal Suite",
  "Kitchen",
  "Bathroom",
  "Drywall & Painting",
  "Carpentry & Stairs",
  "Exterior",
  "Home Theatre & Cameras",
  "General Repairs",
  "Other",
] as const;

export const cities = [site.homeBase, ...site.serviceAreas, "Other"] as const;

export const timelines = ["As soon as possible", "1–3 months", "3–6 months", "Just planning"] as const;

export const footerServices = [
  "Basement Development",
  "Legal Suites",
  "Kitchens",
  "Bathrooms",
  "Drywall",
  "Painting",
  "Carpentry",
  "Stairs",
  "Flooring",
  "Decks",
  "Doors & Windows",
  "Siding",
  "Foundation Repair",
  "Home Theatre",
  "Security Cameras",
];

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Basements", href: "#basements" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

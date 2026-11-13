import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site, siteUrl } from "@/lib/site";

// Self-hosted via next/font (files copied from @fontsource) so builds never
// depend on reaching Google Fonts.
const display = localFont({
  src: [
    { path: "./fonts/barlow-condensed-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/barlow-condensed-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Arial Narrow", "sans-serif"],
});

const body = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

const title = "All In One Contracting & Design | Basement Development & Renovations Airdrie";
const description =
  "Airdrie renovation contractor for basement development, legal suites, kitchens, bathrooms, drywall, painting and home repairs. Serving Airdrie, Calgary and area. Call 403-714-9409.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "basement development Airdrie",
    "basement renovation Airdrie",
    "basement development Calgary",
    "legal suite Airdrie",
    "drywall repair Airdrie",
    "bathroom renovation Airdrie",
    "kitchen renovation Airdrie",
    "general contractor Airdrie",
  ],
  alternates: { canonical: "/" },
  applicationName: site.name,
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: site.name,
    title,
    description,
    // Image comes from app/opengraph-image.tsx (1200x630, hero photo + logo)
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1B1D1F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal hiding only when JS runs (no-JS users see everything). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

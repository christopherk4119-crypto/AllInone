import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/lib/site";

export const alt = "All In One Contracting & Design — Airdrie's All-in-One Renovation Contractor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** 1200x630 social card: hero photo + badge logo + tagline. Generated at build time. */
export default async function OgImage() {
  const root = process.cwd();
  const [hero, display, body] = await Promise.all([
    readFile(path.join(root, "public/images/hero-finished-basement.jpg")),
    readFile(path.join(root, "lib/og/barlow-condensed-latin-700-normal.woff")),
    readFile(path.join(root, "lib/og/inter-latin-500-normal.woff")),
  ]);
  const heroSrc = `data:image/jpeg;base64,${hero.toString("base64")}`;
  const copper = "#D9822B";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#1B1D1F" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={heroSrc} alt="" width={1200} height={633} style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 633, objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            backgroundImage: "linear-gradient(90deg, rgba(27,29,31,0.96) 0%, rgba(27,29,31,0.85) 45%, rgba(27,29,31,0.25) 100%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 72px", width: 820 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <svg width="96" height="96" viewBox="0 0 48 48">
              <rect x="2" y="2" width="44" height="44" rx="10" fill="none" stroke={copper} strokeWidth="3" />
              <path d="M9.5 27 24 11.5 38.5 27" fill="none" stroke={copper} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.5 21.5h11" stroke={copper} strokeWidth="3" strokeLinecap="round" />
              <path d="M14 27.5V37h20v-9.5" fill="none" stroke={copper} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.5 37v-5.5h5V37" fill="none" stroke={copper} strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: "Barlow", fontSize: 64, color: "#fff", lineHeight: 1, letterSpacing: -1 }}>ALL IN ONE</div>
              <div style={{ fontFamily: "Inter", fontSize: 18, color: "#C9C3BA", letterSpacing: 6, marginTop: 6 }}>CONTRACTING &amp; DESIGN</div>
            </div>
          </div>
          <div style={{ display: "flex", width: 220, height: 4, background: copper, marginTop: 40 }} />
          <div style={{ fontFamily: "Barlow", fontSize: 76, color: "#fff", lineHeight: 0.98, marginTop: 30, textTransform: "uppercase" }}>
            Basement Development &amp; Renovations
          </div>
          <div style={{ fontFamily: "Inter", fontSize: 30, color: "#C9C3BA", marginTop: 22 }}>
            {`Airdrie & Calgary · Call ${site.phone.display}`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Barlow", data: display, weight: 700, style: "normal" },
        { name: "Inter", data: body, weight: 500, style: "normal" },
      ],
    }
  );
}

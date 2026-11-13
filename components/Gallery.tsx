// STOCK PHOTOS — SWAP FOR REAL PROJECT PHOTOS LATER
// Replace the files in /public/images (keep the names, or update the imports
// below), update the alt text, then set `photosAreStock: false` in lib/site.ts.
"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import EstimateLink from "./EstimateLink";
import { ArrowRight, ChevronLeft, ChevronRight, XIcon } from "./Icons";
import { site } from "@/lib/site";

import familyRoom from "@/public/images/hero-finished-basement.jpg";
import builtins from "@/public/images/family-room-builtins.jpg";
import theatre from "@/public/images/home-theatre.jpg";
import kitchen from "@/public/images/kitchen-reno.jpg";
import bathroom from "@/public/images/bathroom-reno.jpg";
import staircase from "@/public/images/staircase-wood-metal.jpg";
import framing from "@/public/images/basement-framing.jpg";
import deck from "@/public/images/deck-exterior.jpg";
import windows from "@/public/images/windows-exterior.jpg";

type Cat = "Basements" | "Kitchens & Baths" | "Stairs & Carpentry" | "Exterior";
type Item = { src: StaticImageData; alt: string; label: string; cat: Cat };

const filters: ("All" | Cat)[] = ["All", "Basements", "Kitchens & Baths", "Stairs & Carpentry", "Exterior"];

const items: Item[] = [
  { src: familyRoom, alt: "Bright family room with sectional sofa and wood floors", label: "Basement Family Room", cat: "Basements" },
  { src: kitchen, alt: "White kitchen with dark backsplash, stainless appliances and island seating", label: "Kitchen Renovation", cat: "Kitchens & Baths" },
  { src: staircase, alt: "Open staircase with wood treads and a glass and metal railing", label: "Custom Staircase", cat: "Stairs & Carpentry" },
  { src: theatre, alt: "Wall-mounted TV glowing in a darkened media room", label: "Home Theatre", cat: "Basements" },
  { src: bathroom, alt: "Modern bathroom with glass walk-in shower and floating vanity", label: "Bathroom Remodel", cat: "Kitchens & Baths" },
  { src: deck, alt: "Backyard deck with outdoor lounge chairs, seen from above", label: "Backyard Deck", cat: "Exterior" },
  { src: builtins, alt: "Family room with built-in shelving around a wall-mounted TV", label: "Built-ins & Trim", cat: "Basements" },
  { src: framing, alt: "Carpenter working on wood stud wall framing", label: "Framing", cat: "Stairs & Carpentry" },
  { src: windows, alt: "Two-storey suburban home with new windows and a double garage", label: "Doors & Windows", cat: "Exterior" },
];

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const visible = filter === "All" ? items : items.filter((i) => i.cat === filter);

  const close = useCallback(() => {
    setOpenIdx(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setOpenIdx((i) => (i === null ? i : (i + d + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    if (openIdx === null) return;
    closeBtn.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        const f = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button"));
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIdx, close, step]);

  const current = openIdx !== null ? visible[openIdx] : null;

  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-concrete py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading id="projects-title" dark eyebrow="Projects" title="Recent Work" />

        {/* Filters: horizontal scroll on mobile */}
        <div className="-mx-5 mt-10 overflow-x-auto px-5 sm:mx-0 sm:px-0 no-scrollbar">
          <div role="group" aria-label="Filter projects" className="flex w-max gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`min-h-[44px] whitespace-nowrap rounded-full border-2 px-5 font-display text-lg font-semibold uppercase tracking-wider transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal ${
                  filter === f ? "border-copper bg-copper text-charcoal" : "border-white/20 text-warmgrey hover:border-copper hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {visible.map((item, i) => (
            <li key={item.label}>
              <button
                type="button"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget;
                  setOpenIdx(i);
                }}
                aria-label={`View larger: ${item.label}`}
                className="group relative block w-full overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-copper"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  placeholder="blur"
                  sizes="(min-width: 1216px) 380px, (min-width: 1024px) 31vw, 48vw"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent p-3 opacity-100 transition duration-300 sm:p-4 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                  <span className="font-display text-sm font-bold uppercase tracking-wider text-white sm:text-lg">
                    <span className="mb-1 block h-[3px] w-8 bg-copper" aria-hidden="true" />
                    {item.label}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {site.photosAreStock && (
          <p className="mt-4 text-sm text-warmgrey/80">Representative photos. Real project photos coming soon.</p>
        )}

        {/* Featured project — from the company's own Facebook post. Image is a stock placeholder. */}
        <article className="mt-14 grid overflow-hidden rounded-xl border-2 border-copper bg-charcoal-800 shadow-soft md:grid-cols-2" data-reveal>
          <div className="relative min-h-[260px]">
            {/* STOCK PLACEHOLDER — replace with the real staircase photo from the client's Facebook post */}
            <Image
              src={staircase}
              alt="Open staircase with wood treads and metal railing (representative photo)"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <p className="eyebrow text-copper">Featured project</p>
            <h3 className="mt-2 font-display text-3xl font-bold uppercase leading-tight text-white lg:text-4xl">Custom Staircase</h3>
            <p className="mt-4 text-lg text-warmgrey">
              Wood treads, metal spindles, 4x8 feature panels and red accent lighting.
            </p>
            <EstimateLink project="Carpentry & Stairs" className="btn-copper mt-6 self-start">
              Ask About Stairs <ArrowRight className="h-5 w-5" />
            </EstimateLink>
          </div>
        </article>

        <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <p className="font-display text-2xl font-semibold uppercase tracking-wide text-white">Like what you see?</p>
          <a href="#contact" className="btn-copper">
            {site.estimateLabel}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.label} photo`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <figure className="relative w-full max-w-5xl">
            <Image
              src={current.src}
              alt={current.alt}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="max-h-[78vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center font-display text-xl font-semibold uppercase tracking-wider text-white">
              {current.label}
              <span className="ml-3 text-base font-normal normal-case tracking-normal text-warmgrey">
                {openIdx! + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>
          <button
            ref={closeBtn}
            type="button"
            onClick={close}
            aria-label="Close photo"
            className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-copper hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
          >
            <XIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-copper hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper sm:left-4"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-copper hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper sm:right-4"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
}

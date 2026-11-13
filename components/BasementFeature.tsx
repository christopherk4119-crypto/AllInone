import Image from "next/image";
import SectionHeading from "./SectionHeading";
import EstimateLink from "./EstimateLink";
import { ArrowRight } from "./Icons";
import framing from "@/public/images/basement-framing.jpg";
import insulation from "@/public/images/wall-insulation.jpg";
import finished from "@/public/images/family-room-builtins.jpg";

/*
 * The process bar runs from bare grey to finished copper as the job moves
 * along. Numbers use darker shades so they pass WCAG AA on white.
 */
const steps = [
  { title: "Plan", text: "Walk-through, layout and estimate.", bar: "#8A8681", num: "#5E5B57" },
  { title: "Frame", text: "Walls built to suit how you'll use the space.", bar: "#A8865A", num: "#7A5C35" },
  { title: "Drywall", text: "Hung, taped and mudded smooth.", bar: "#C9C3BA", num: "#4A5560" },
  { title: "Finish", text: "Texture, prime and paint.", bar: "#D7B48A", num: "#80592B" },
  { title: "Floors & trim", text: "Flooring, doors, trim and stairs.", bar: "#D49A5C", num: "#9A5514" },
  { title: "Extras", text: "Home theatre wiring and security cameras.", bar: "#D9822B", num: "#9A5514" },
];

// STOCK PHOTOS — swap for real project photos later
const photos = [
  { src: framing, alt: "Wood stud wall framing going up", label: "Framing" },
  { src: insulation, alt: "Installer fitting insulation between wall studs before drywall", label: "Before drywall" },
  { src: finished, alt: "Finished family room with built-in shelving and a wall-mounted TV", label: "Move-in ready" },
];

export default function BasementFeature() {
  return (
    <section id="basements" aria-labelledby="basements-title" className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          id="basements-title"
          title="Unfinished basement? Let's finish it."
          intro={
            <p>
              Basements are our specialty. Whether you want a family room, a home theatre, a guest suite or a legal
              secondary suite, we take it from bare concrete to move-in ready.
            </p>
          }
        />

        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-5">
          {photos.map((p, i) => (
            <figure
              key={p.label}
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              className="relative overflow-hidden rounded-lg"
            >
              <Image
                src={p.src}
                alt={p.alt}
                placeholder="blur"
                sizes="(min-width: 1216px) 390px, 33vw"
                className={`aspect-[4/5] h-full w-full object-cover sm:aspect-[4/3] ${i < 2 ? "grayscale-[35%]" : ""}`}
              />
              <figcaption className="absolute bottom-2 left-2 rounded bg-bone px-2 py-1 text-xs font-semibold text-charcoal sm:bottom-3 sm:left-3 sm:px-3 sm:text-sm">
                {i + 1}. {p.label}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Process: bare grey → finished copper */}
        <h3 className="mt-20 font-display text-[2.25rem] font-bold leading-none tracking-tight text-charcoal">How it comes together</h3>
        <ol className="mt-10 grid gap-x-0 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal style={{ "--reveal-delay": `${i * 140}ms` } as React.CSSProperties} className="pr-5">
              <span aria-hidden="true" className="mb-5 block h-1.5" style={{ background: s.bar }} />
              <span className="block font-display text-5xl font-bold leading-none" style={{ color: s.num }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg font-semibold text-charcoal">{s.title}</p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-slate">{s.text}</p>
            </li>
          ))}
        </ol>

        {/* Legal suites: a full dark band, not a left-border card */}
        <div data-reveal className="bg-concrete mt-20 grid gap-8 rounded-xl px-7 py-10 text-white sm:px-10 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:py-14">
          <div>
            <h3 className="font-display text-[2.6rem] font-bold leading-[0.98] tracking-tight sm:text-5xl">
              Thinking about a legal suite? <span className="text-copper">We build those too.</span>
            </h3>
            <p className="mt-4 max-w-xl text-lg text-warmgrey">
              Start with a walk-through of your space. We&rsquo;ll talk layout, timing and cost.
            </p>
            {/* CONFIRM WITH CLIENT: whether they pull permits and handle inspections. Add a line here once confirmed. */}
          </div>
          <div className="flex flex-col gap-3">
            <EstimateLink project="Legal Suite" className="btn-copper">
              Ask About Legal Suites
            </EstimateLink>
            <EstimateLink project="Basement Development" className="btn-outline-light">
              Book a Basement Walk-Through <ArrowRight className="h-5 w-5" />
            </EstimateLink>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import EstimateLink from "./EstimateLink";
import { ArrowRight } from "./Icons";
import framing from "@/public/images/basement-framing.jpg";
import insulation from "@/public/images/wall-insulation.jpg";
import finished from "@/public/images/family-room-builtins.jpg";

const steps = [
  { title: "Plan", text: "Walk-through, layout and estimate." },
  { title: "Frame", text: "Walls built to suit how you'll use the space." },
  { title: "Drywall", text: "Hung, taped and mudded smooth." },
  { title: "Finish", text: "Texture, prime and paint." },
  { title: "Floors & Trim", text: "Flooring, doors, trim and stairs." },
  { title: "Extras", text: "Home theatre wiring and security cameras." },
];

// STOCK PHOTOS — swap for real project photos later
const photos = [
  { src: framing, alt: "Wood stud wall framing going up", label: "Framing" },
  { src: insulation, alt: "Installer fitting insulation between wall studs before drywall", label: "Before drywall" },
  { src: finished, alt: "Finished family room with built-in shelving and a wall-mounted TV", label: "Move-in ready" },
];

export default function BasementFeature() {
  return (
    <section id="basements" aria-labelledby="basements-title" className="bg-bone py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          id="basements-title"
          eyebrow="Basement Development"
          title="Unfinished Basement? Let's Finish It."
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
              className="relative overflow-hidden rounded-xl shadow-soft"
            >
              <Image
                src={p.src}
                alt={p.alt}
                placeholder="blur"
                sizes="(min-width: 1216px) 390px, 33vw"
                className="aspect-[4/5] h-full w-full object-cover sm:aspect-[4/3]"
              />
              <figcaption className="absolute bottom-2 left-2 rounded-md bg-charcoal/85 px-2 py-1 font-display text-xs font-semibold uppercase tracking-wider text-white sm:bottom-3 sm:left-3 sm:px-3 sm:text-sm">
                {i + 1 === 3 ? "→ " : ""}
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Process timeline */}
        <h3 className="mt-16 font-display text-3xl font-bold uppercase tracking-tight text-charcoal">
          How a basement comes together
        </h3>
        <ol className="relative mt-8 grid gap-0 lg:grid-cols-6 lg:gap-4">
          {/* connecting line */}
          <span aria-hidden="true" className="absolute left-[23px] top-2 h-[calc(100%-1rem)] w-[2px] bg-sand lg:left-0 lg:top-[23px] lg:h-[2px] lg:w-full" />
          {steps.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 140}ms` } as React.CSSProperties}
              className="relative flex gap-5 pb-8 lg:flex-col lg:gap-4 lg:pb-0"
            >
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-copper bg-charcoal font-display text-xl font-bold text-copper">
                {i + 1}
              </span>
              <div>
                <p className="font-display text-2xl font-bold uppercase leading-none tracking-wide text-charcoal">{s.title}</p>
                <p className="mt-2 text-slate">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
          <div data-reveal className="bg-concrete flex flex-col justify-between gap-6 rounded-xl border-l-4 border-copper p-8 text-white shadow-soft sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-3xl font-bold uppercase leading-tight">Thinking about a legal suite?</h3>
              <p className="mt-2 text-warmgrey">We build those too.</p>
              {/* CONFIRM WITH CLIENT: whether they pull permits and handle inspections. Add a line here once confirmed. */}
            </div>
            <EstimateLink project="Legal Suite" className="btn-copper shrink-0">
              Ask About Legal Suites
            </EstimateLink>
          </div>
          <div data-reveal className="flex flex-col justify-center gap-4 rounded-xl border-2 border-sand bg-white p-8 shadow-soft">
            <p className="text-lg text-slate">Start with a walk-through of your space. We&rsquo;ll talk layout, timing and cost.</p>
            <EstimateLink project="Basement Development" className="btn-copper">
              Book a Basement Walk-Through <ArrowRight className="h-5 w-5" />
            </EstimateLink>
          </div>
        </div>
      </div>
    </section>
  );
}

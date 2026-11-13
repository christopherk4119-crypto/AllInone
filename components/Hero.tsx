import Image from "next/image";
import { PhoneIcon } from "./Icons";
import TapeDivider from "./TapeDivider";
import { site } from "@/lib/site";
import heroImg from "@/public/images/hero-finished-basement.jpg";

const trust = ["Based in Airdrie", "Framing to final paint", "Basements, kitchens & baths", "One point of contact"];

/**
 * "Bare to finished" diptych: raw concrete on the left (the before),
 * the finished room on the right (the after). No gradient over the photo.
 */
export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="flex flex-col lg:min-h-[100svh] lg:flex-row">
      {/* BEFORE: concrete panel holds all the copy */}
      <div className="bg-raw-concrete flex flex-1 flex-col justify-end px-5 pb-14 pt-[calc(var(--header-h)+2.5rem)] text-white sm:px-10 lg:basis-1/2 lg:px-12 lg:pb-20 lg:pt-[calc(var(--header-h)+3rem)] xl:pl-[max(3rem,calc((100vw-76rem)/2+2rem))]">
        <p className="text-sm font-medium tracking-[0.06em] text-[#ECE7DF]">Before: bare concrete · Airdrie, AB</p>
        <h1
          id="hero-title"
          className="mt-4 max-w-[13ch] font-display text-[3.4rem] font-bold leading-[0.92] tracking-tight sm:text-7xl xl:text-[6rem]"
        >
          Your dream basement, built by one crew.
        </h1>
        <TapeDivider className="mt-7" />
        <p className="lead mt-6 max-w-[34rem] text-[#F1ECE4]">
          Basement development, legal suites, kitchens, bathrooms and home repairs across Airdrie and Calgary. Framing,
          drywall, paint, flooring and the finishing touches, all under one roof.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={site.phone.href} className="btn-copper" aria-label={`Call ${site.phone.display}`}>
            <PhoneIcon className="h-5 w-5" />
            Call {site.phone.display}
          </a>
          <a href="#contact" className="btn-outline-light">
            {site.estimateLabel}
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/20 pt-5 text-[0.95rem] text-[#F1ECE4]">
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 bg-copper" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* AFTER: the finished room, full colour */}
      <figure className="relative min-h-[56svh] flex-1 lg:min-h-0 lg:basis-1/2">
        {/* STOCK PHOTO — swap for a real finished basement when available */}
        <Image
          src={heroImg}
          alt="Bright finished basement family room with a sectional sofa, wood floors and daylight windows"
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[60%_center]"
        />
        {/* keeps the transparent header readable on the photo side only */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-charcoal/60 to-transparent" />
        <figcaption className="absolute bottom-5 left-5 rounded-md bg-bone px-3.5 py-2 text-[0.95rem] font-semibold text-charcoal">
          After: finished family room
        </figcaption>
      </figure>
    </section>
  );
}

import Image from "next/image";
import { CheckIcon, PhoneIcon } from "./Icons";
import TapeDivider from "./TapeDivider";
import { site } from "@/lib/site";
import heroImg from "@/public/images/hero-finished-basement.jpg";

const trust = ["Based in Airdrie", "Framing to Final Paint", "Basements, Kitchens & Baths", "One Point of Contact"];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-charcoal">
      {/* STOCK PHOTO — swap for a real finished basement when available */}
      <Image
        src={heroImg}
        alt="Bright finished basement family room with a sectional sofa, wood floors and daylight windows"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[65%_center]"
      />
      {/* Charcoal gradient, stronger on the left for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(27,29,31,0.94)_0%,rgba(27,29,31,0.82)_38%,rgba(27,29,31,0.35)_75%,rgba(27,29,31,0.2)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(27,29,31,0.75)_0%,rgba(27,29,31,0.88)_55%,rgba(27,29,31,0.95)_100%)]"
      />

      <div className="container-site flex min-h-[92svh] flex-col justify-center pb-16 pt-[calc(var(--header-h)+3rem)] lg:min-h-[88vh] lg:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-copper">{site.tagline}</p>
          <h1
            id="hero-title"
            className="font-display text-[3rem] font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]"
          >
            Your Dream Basement, Built by One Crew.
          </h1>
          <TapeDivider className="mt-6" />
          <p className="lead mt-6 max-w-xl text-warmgrey">
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

          <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 text-[0.95rem] text-white sm:grid-cols-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-charcoal">
                  <CheckIcon className="h-4 w-4" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

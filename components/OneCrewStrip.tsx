import { PhoneIcon } from "./Icons";
import { site } from "@/lib/site";

export default function OneCrewStrip() {
  return (
    <a
      href={site.phone.href}
      aria-label={`Stop juggling five trades. Call ${site.phone.display}`}
      className="group block bg-copper text-charcoal transition hover:bg-copper-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-charcoal"
    >
      <div className="container-site flex flex-col items-center gap-3 py-6 text-center md:flex-row md:justify-between md:text-left">
        <p className="font-display text-[1.75rem] font-bold leading-tight tracking-tight md:text-[2rem]">
          Stop juggling five trades.{" "}
          <span className="font-semibold">
            One call handles framing, drywall, paint, flooring and more.
          </span>
        </p>
        <span className="flex shrink-0 items-center gap-2 rounded-lg bg-charcoal px-5 py-3 font-display text-2xl font-bold tracking-wide text-white transition group-hover:shadow-glow">
          <PhoneIcon className="h-5 w-5 text-copper" />
          {site.phone.display}
        </span>
      </div>
    </a>
  );
}

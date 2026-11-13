import SectionHeading from "./SectionHeading";
import { CheckIcon, PhoneIcon, XIcon } from "./Icons";
import { site } from "@/lib/site";

const usual = ["Five schedules to coordinate", "Trades blaming each other", "Gaps between jobs", "Five invoices"];
const ours = ["One schedule", "One crew accountable for the result", "Work flows from one stage to the next", "One point of contact"];

export default function Comparison() {
  return (
    <section aria-labelledby="compare-title" className="bg-bone py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading id="compare-title" center eyebrow="One crew vs. five trades" title="Why One Contractor Beats Five" />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <div data-reveal className="rounded-xl border-2 border-sand bg-sand/60 p-8">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-slate">The usual way</h3>
            <ul className="mt-6 space-y-4">
              {usual.map((t) => (
                <li key={t} className="flex items-start gap-3 text-lg text-slate">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate/15 text-slate">
                    <XIcon className="h-4 w-4" strokeWidth={2.6} />
                    <span className="sr-only">Downside:</span>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            className="bg-concrete rounded-xl border-2 border-copper p-8 shadow-soft"
          >
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-copper">The All In One way</h3>
            <ul className="mt-6 space-y-4">
              {ours.map((t) => (
                <li key={t} className="flex items-start gap-3 text-lg text-white">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-copper text-charcoal">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                    <span className="sr-only">Benefit:</span>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a href={site.phone.href} className="btn-copper" aria-label={`Start with one call: ${site.phone.display}`}>
            <PhoneIcon className="h-5 w-5" />
            Start With One Call
          </a>
        </div>
      </div>
    </section>
  );
}

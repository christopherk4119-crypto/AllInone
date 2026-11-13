import SectionHeading from "./SectionHeading";
import { QuoteIcon, YelpIcon } from "./Icons";
import { site } from "@/lib/site";

/**
 * NOTE FOR DEVELOPER: The business has no collected public reviews yet.
 * Do NOT invent reviews or star ratings.
 * CONFIRM WITH CLIENT: when real reviews exist (with the customer's permission),
 * add them below as { quote, name, location } and the placeholders disappear.
 */
const reviews: { quote: string; name: string; location?: string }[] = [];

const SLOTS = 3;

export default function Testimonials() {
  const cards =
    reviews.length > 0
      ? reviews
      : Array.from({ length: SLOTS }, () => ({ quote: "[Customer review coming soon]", name: "", location: "" }));

  return (
    <section aria-labelledby="reviews-title" className="bg-concrete py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading id="reviews-title" dark eyebrow="Reviews" title="What Our Customers Say" />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((r, i) => (
            <li key={i} data-reveal className="flex flex-col rounded-xl border-2 border-dashed border-white/15 bg-charcoal-800/70 p-7">
              <QuoteIcon className="h-8 w-8 text-copper" />
              <blockquote className={`mt-4 flex-1 text-lg ${reviews.length ? "text-white" : "italic text-warmgrey"}`}>
                <p>{r.quote}</p>
              </blockquote>
              <p className="mt-6 min-h-[1.5rem] font-display text-lg font-semibold uppercase tracking-wider text-white">
                {r.name}
                {r.location ? <span className="ml-2 font-normal normal-case tracking-normal text-warmgrey">{r.location}</span> : null}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <a href={site.links.yelp} target="_blank" rel="noopener noreferrer" className="btn-copper">
            <YelpIcon className="h-5 w-5" />
            Worked with us? Leave a review
            <span className="sr-only">(opens Yelp in a new tab)</span>
          </a>
          <a href="#contact" className="btn-outline-light">
            {site.estimateLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

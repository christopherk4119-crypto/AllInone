import SectionHeading from "./SectionHeading";
import EstimateLink from "./EstimateLink";
import { ArrowRight } from "./Icons";
import { services, site } from "@/lib/site";

/**
 * Services laid out on a "stud wall": white bays framed by 14px wood studs
 * (the grid gap shows the wood background through). No icon-in-a-square cards.
 */
export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-bone py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          id="services-title"
          title="Everything your home needs. One contractor."
          intro={<p>Basements are the specialty. The same crew handles the rest of the house.</p>}
        />

        <ul className="mt-12 grid gap-[14px] bg-wood p-[14px] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li
              key={s.id}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 80}ms` } as React.CSSProperties}
              className="flex flex-col bg-white px-6 pb-7 pt-6 transition-colors duration-300 hover:bg-[#FFFCF7]"
            >
              <h3 className="font-display text-[1.75rem] font-bold leading-[1.05] tracking-tight text-charcoal">{s.title}</h3>
              <p className="mt-2 flex-1 text-slate">{s.description}</p>
              <EstimateLink
                project={s.formValue}
                ariaLabel={`Get an estimate for ${s.title}`}
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 self-start rounded font-semibold text-charcoal underline decoration-copper decoration-2 underline-offset-[6px] transition-all hover:gap-3 hover:text-copper-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              >
                Get an estimate <ArrowRight className="h-4 w-4" />
              </EstimateLink>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a href="#contact" className="btn-copper">
            {site.estimateLabel}
          </a>
          <p className="text-slate">
            Not sure what you need?{" "}
            <a href={site.phone.href} className="font-semibold text-charcoal underline decoration-copper underline-offset-4 hover:text-copper-ink">
              Call {site.phone.display}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";
import EstimateLink from "./EstimateLink";
import { ArrowRight, ServiceIcon } from "./Icons";
import { services, site } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-concrete py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          id="services-title"
          dark
          eyebrow="Services"
          title="Everything Your Home Needs. One Contractor."
          intro={<p>Pick the job, or pick a few. It&rsquo;s the same crew either way.</p>}
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li
              key={s.id}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 90}ms` } as React.CSSProperties}
              className="group flex flex-col rounded-xl border-2 border-white/10 bg-charcoal-800/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-copper hover:shadow-[0_18px_40px_-20px_rgba(217,130,43,0.45)] focus-within:border-copper"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                  s.accent === "copper" ? "bg-copper text-charcoal" : "bg-slate text-white"
                }`}
              >
                <ServiceIcon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold uppercase leading-tight tracking-wide text-white">{s.title}</h3>
              <p className="mt-2 flex-1 text-warmgrey">{s.description}</p>
              <EstimateLink
                project={s.formValue}
                ariaLabel={`Get an estimate for ${s.title}`}
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 self-start rounded font-display text-lg font-bold uppercase tracking-wider text-copper transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              >
                Get Estimate <ArrowRight className="h-5 w-5" />
              </EstimateLink>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a href="#contact" className="btn-copper">
            {site.estimateLabel}
          </a>
          <p className="text-warmgrey">
            Not sure what you need?{" "}
            <a href={site.phone.href} className="font-semibold text-white underline decoration-copper underline-offset-4 hover:text-copper">
              Call {site.phone.display}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";
import { ChatIcon, HammerIcon, PhoneIcon, PinIcon, ServiceIcon } from "./Icons";
import { ownerLabel, site } from "@/lib/site";

const blocks = [
  {
    icon: <HammerIcon className="h-7 w-7" />,
    title: "Framing to Final Paint",
    text: "One crew handles every stage, so nothing falls through the cracks.",
  },
  {
    icon: <ServiceIcon name="basement" className="h-7 w-7" />,
    title: "Basement Specialists",
    text: "Basement development and drywall restoration are what we do best.",
  },
  {
    icon: <PinIcon className="h-7 w-7" />,
    title: "Local to Airdrie",
    text: "Based here, working across Airdrie, Calgary and surrounding towns.",
  },
  {
    icon: <ChatIcon className="h-7 w-7" />,
    // CONFIRM WITH CLIENT: owner's name. Set `ownerName` in lib/site.ts and this reads "Talk Directly to [Name]".
    title: `Talk Directly to ${ownerLabel}`,
    text: "No call centre, no sales rep. You deal with the person doing the work.",
  },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="bg-bone py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading id="why-title" eyebrow="Why All In One" title="Why Airdrie Homeowners Call All In One" />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b, i) => (
            <li
              key={b.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className="rounded-xl border-2 border-sand bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-copper"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate text-white">{b.icon}</span>
              <h3 className="mt-5 font-display text-2xl font-bold uppercase leading-tight tracking-wide text-charcoal">{b.title}</h3>
              <p className="mt-2 text-slate">{b.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a href={site.phone.href} className="btn-copper" aria-label={`Call ${site.phone.display}`}>
            <PhoneIcon className="h-5 w-5" /> Call {site.phone.display}
          </a>
          <a href="#contact" className="btn-outline-dark">
            {site.estimateLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

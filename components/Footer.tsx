import Logo from "./Logo";
import TapeDivider from "./TapeDivider";
import { YelpIcon } from "./Icons";
import { footerServices, navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#141618] pb-28 pt-16 text-warmgrey lg:pb-10">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1.4fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-4 font-display text-xl font-semibold uppercase tracking-wide text-white">{site.tagline}</p>
            <ul className="mt-5 space-y-2">
              <li>
                <a href={site.phone.href} className="font-display text-2xl font-bold tracking-wide text-white hover:text-copper">
                  {site.phone.display}
                </a>
              </li>
              {/* CONFIRM WITH CLIENT: email + hours (lib/site.ts) */}
              <li>{site.email ? <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a> : "[EMAIL — confirm with client]"}</li>
              <li>{site.hours ?? "[HOURS — confirm with client]"}</li>
            </ul>
            <a href="#contact" className="btn-copper mt-6">
              {site.estimateLabel}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="font-display text-lg font-bold uppercase tracking-[0.16em] text-white">Pages</p>
            <ul className="mt-4 space-y-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex min-h-[40px] items-center hover:text-copper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-lg font-bold uppercase tracking-[0.16em] text-white">Services</p>
            <p className="mt-4 leading-8">{footerServices.join(" · ")}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.links.yelp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="All In One Contracting & Design on Yelp (opens in a new tab)"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-copper hover:text-charcoal"
              >
                <YelpIcon className="h-6 w-6" />
              </a>
              {/* CONFIRM WITH CLIENT: Facebook + Google Business Profile links. Do not add until confirmed (lib/site.ts). */}
            </div>
          </div>
        </div>

        <TapeDivider tone="slate" wide className="mt-12 opacity-60" />
        <p className="mt-6 text-sm">© 2026 {site.name}, Airdrie, AB</p>
      </div>
    </footer>
  );
}

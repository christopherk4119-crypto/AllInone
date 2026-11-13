import SectionHeading from "./SectionHeading";
import { PhoneIcon, PinIcon } from "./Icons";
import { site } from "@/lib/site";

/*
 * Stylized (not to scale, roughly geographic) map of the service area.
 * Coordinates are approximate positions relative to Airdrie. No Google Maps embed.
 */
const towns: { name: string; x: number; y: number }[] = [
  { name: "Olds", x: 150, y: 40 },
  { name: "Didsbury", x: 170, y: 88 },
  { name: "Carstairs", x: 182, y: 130 },
  { name: "Crossfield", x: 195, y: 172 },
  { name: "Irricana", x: 300, y: 196 },
  { name: "Cochrane", x: 92, y: 258 },
  { name: "Calgary", x: 200, y: 290 },
  { name: "Strathmore", x: 318, y: 300 },
  { name: "Okotoks", x: 200, y: 372 },
];
const airdrie = { x: 212, y: 222 };

function AreaMap() {
  return (
    <svg viewBox="0 0 420 420" role="img" aria-labelledby="map-title map-desc" className="h-auto w-full">
      <title id="map-title">Service area map</title>
      <desc id="map-desc">
        Stylized map with Airdrie at the centre and Calgary, Cochrane, Crossfield, Irricana, Carstairs, Didsbury, Olds,
        Strathmore and Okotoks around it.
      </desc>
      <rect x="0" y="0" width="420" height="420" rx="16" fill="#EDE6DC" />
      {/* grid */}
      <g stroke="#4A5560" strokeOpacity="0.08">
        {Array.from({ length: 13 }, (_, i) => (
          <path key={`v${i}`} d={`M${i * 35} 0V420`} />
        ))}
        {Array.from({ length: 13 }, (_, i) => (
          <path key={`h${i}`} d={`M0 ${i * 35}H420`} />
        ))}
      </g>
      {/* Highway 2 corridor (stylized) */}
      <path d="M150 20 C 165 100, 190 160, 212 222 S 205 330, 200 400" fill="none" stroke="#4A5560" strokeOpacity="0.35" strokeWidth="5" strokeLinecap="round" />
      {/* Service radius */}
      <circle cx={airdrie.x} cy={airdrie.y} r="150" fill="#D9822B" fillOpacity="0.08" stroke="#D9822B" strokeOpacity="0.5" strokeDasharray="6 6" />
      {/* Spokes */}
      <g stroke="#4A5560" strokeOpacity="0.35" strokeWidth="1.5">
        {towns.map((t) => (
          <path key={t.name} d={`M${airdrie.x} ${airdrie.y}L${t.x} ${t.y}`} />
        ))}
      </g>
      {towns.map((t) => (
        <g key={t.name}>
          <circle cx={t.x} cy={t.y} r="6" fill="#4A5560" />
          <text x={t.x + 10} y={t.y + 5} fontSize="14" fontWeight="600" fill="#1B1D1F" fontFamily="var(--font-body), sans-serif">
            {t.name}
          </text>
        </g>
      ))}
      {/* Airdrie */}
      <circle cx={airdrie.x} cy={airdrie.y} r="20" fill="#D9822B" fillOpacity="0.25" />
      <circle cx={airdrie.x} cy={airdrie.y} r="10" fill="#D9822B" stroke="#1B1D1F" strokeWidth="2.5" />
      <rect x={airdrie.x - 96} y={airdrie.y - 15} width="78" height="28" rx="6" fill="#1B1D1F" />
      <text x={airdrie.x - 57} y={airdrie.y + 5} textAnchor="middle" fontSize="15" fontWeight="700" fill="#FFFFFF" fontFamily="var(--font-body), sans-serif">
        Airdrie
      </text>
      <text x="16" y="406" fontSize="11" fill="#4A5560" fontFamily="var(--font-body), sans-serif">
        Not to scale
      </text>
    </svg>
  );
}

export default function ServiceArea() {
  return (
    <section aria-labelledby="area-title" className="bg-bone py-20 lg:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading
            id="area-title"
            title="Serving Airdrie, Calgary & surrounding areas"
            intro={<p>Airdrie is home base. We also work across Calgary and the towns around it.</p>}
          />

          <div data-reveal className="mt-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-copper px-5 py-2.5 text-lg font-semibold text-charcoal">
              <PinIcon className="h-5 w-5" /> {site.homeBase} <span className="font-normal">· home base</span>
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5" aria-label="Other areas served">
              {site.serviceAreas.map((a) => (
                <li key={a} className="rounded-full border-2 border-slate/30 bg-white px-4 py-2 font-medium text-charcoal">
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-lg text-slate">Not sure if we cover you?</p>
          <a href={site.phone.href} className="btn-copper mt-3" aria-label={`Call ${site.phone.display}`}>
            <PhoneIcon className="h-5 w-5" /> Call {site.phone.display}
          </a>
        </div>

        <div data-reveal className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-soft">
          <AreaMap />
        </div>
      </div>
    </section>
  );
}

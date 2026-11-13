import { services, site, siteUrl } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": `${siteUrl}/#business`,
    name: site.name,
    slogan: site.tagline,
    url: siteUrl,
    telephone: site.phone.e164,
    image: `${siteUrl}/opengraph-image`,
    logo: `${siteUrl}/icon.svg`,
    // CONFIRM WITH CLIENT: email — add `email: site.email` once confirmed
    // ...(site.email ? { email: site.email } : {}),
    // CONFIRM WITH CLIENT: openingHours — e.g. "Mo-Fr 08:00-17:00" once confirmed. Do NOT claim 24/7.
    // openingHours: ["Mo-Fr 08:00-17:00"],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: [site.homeBase, ...site.serviceAreas].map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "AdministrativeArea", name: "Alberta" },
    })),
    sameAs: [site.links.yelp, site.links.google, site.links.facebook].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Renovation and contracting services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description, areaServed: site.areaSummary },
      })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

import { SITE } from "@/lib/site";
import { ADD_ONS, OFFERS } from "@/lib/offers";

/**
 * JSON-LD for the whole site. Names, URLs and prices come from lib/site.ts and
 * lib/offers.ts so the structured data never drifts from the pages.
 */

// public/logo.png is a 1132x348 wordmark (about 3.25:1), not the square logo
// Google asks for, so the generated Open Graph image stays the logo for now.
// Switch to a square file in public/ once one exists.
const LOGO_URL = `${SITE.url}/opengraph-image`;

const address = {
  "@type": "PostalAddress",
  addressCountry: "IN",
} as const;

const usdFrom = (minPrice: number) => ({
  "@type": "PriceSpecification",
  priceCurrency: "USD",
  minPrice,
});

/** Reads the amount out of an add-on price such as "From USD 1,500". */
function parseFromUsd(price: string): number | null {
  const match = /^From USD ([\d,]+)$/.exec(price.trim());
  return match ? Number(match[1].replace(/,/g, "")) : null;
}

const service = (name: string) => ({ "@type": "Service", name });

const offerItems = OFFERS.map((o) => ({
  "@type": "Offer",
  name: o.name,
  itemOffered: service(o.name),
  description: o.summary,
  url: `${SITE.url}${o.href}`,
  priceSpecification: usdFrom(o.fromUsd),
}));

// Add-ons have no page of their own; they are listed on /services.
// Items priced on request (e.g. the workshop) are left out.
const addOnItems = ADD_ONS.flatMap((a) => {
  const minPrice = parseFromUsd(a.price);
  if (minPrice === null) return [];
  return [
    {
      "@type": "Offer",
      name: a.name,
      itemOffered: service(a.name),
      description: a.description,
      url: `${SITE.url}/services`,
      priceSpecification: usdFrom(minPrice),
    },
  ];
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: LOGO_URL,
  description: SITE.description,
  email: SITE.email,
  address,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: SITE.email,
  },
  sameAs: [SITE.social.linkedin, SITE.social.twitter],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  logo: LOGO_URL,
  image: LOGO_URL,
  description: SITE.description,
  email: SITE.email,
  address,
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  priceRange: "$$",
  serviceType: [...OFFERS.map((o) => o.name), "Custom software development"],
  sameAs: [SITE.social.linkedin, SITE.social.twitter],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${SITE.name} offers and add-ons`,
    itemListElement: [...offerItems, ...addOnItems],
  },
};

/** Serialise for a <script> tag; escaping "<" keeps the JSON from closing the tag. */
const toJsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(professionalServiceSchema) }}
      />
    </>
  );
}

import { SITE } from "@/lib/site";

/**
 * Shared metadata for route layouts. Next replaces a parent's openGraph/twitter objects wholesale when a
 * route sets its own, so every layout spreads OG_BASE and lists the twitter images again
 * (app/opengraph-image.tsx and app/twitter-image.tsx render them; metadataBase in app/layout.tsx makes
 * the paths absolute).
 */
export const OG_IMAGES = [
  { url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` },
];

export const OG_BASE = {
  type: "website",
  siteName: SITE.name,
  locale: "en_US",
  images: OG_IMAGES,
} as const;

export const TWITTER_IMAGES = ["/twitter-image"];

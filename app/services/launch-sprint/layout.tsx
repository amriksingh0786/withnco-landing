import { Metadata } from "next";
import { OG_BASE, TWITTER_IMAGES } from "@/lib/metadata";
import { offerBySlug } from "@/lib/offers";
import { SITE } from "@/lib/site";

const offer = offerBySlug("launch-sprint");

export const metadata: Metadata = {
  title: { absolute: `${offer.seo.title} | ${SITE.name}` },
  description: offer.seo.description,
  alternates: { canonical: `${offer.href}` },
  openGraph: {
    ...OG_BASE,
    title: `${offer.seo.title} | ${SITE.name}`,
    description: offer.seo.description,
    url: `${SITE.url}${offer.href}`,
  },
  twitter: {
    card: "summary_large_image",
    images: TWITTER_IMAGES,
    title: `${offer.seo.title} | ${SITE.name}`,
    description: offer.seo.description,
  },
};

export default function LaunchSprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

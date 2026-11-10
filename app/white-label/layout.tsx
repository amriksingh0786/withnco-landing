import { Metadata } from "next";
import { OG_IMAGES, TWITTER_IMAGES } from "@/lib/metadata";
import { offerBySlug } from "@/lib/offers";
import { SITE } from "@/lib/site";

const offer = offerBySlug("white-label");

export const metadata: Metadata = {
  title: offer.seo.title,
  description: offer.seo.description,
  openGraph: {
    images: OG_IMAGES,
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

export default function WhiteLabelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

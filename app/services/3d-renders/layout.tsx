import { Metadata } from "next";
import { offerBySlug } from "@/lib/offers";
import { SITE } from "@/lib/site";

const offer = offerBySlug("3d-renders");

export const metadata: Metadata = {
  title: offer.seo.title,
  description: offer.seo.description,
  openGraph: {
    title: `${offer.seo.title} | ${SITE.name}`,
    description: offer.seo.description,
    url: `${SITE.url}${offer.href}`,
  },
  twitter: {
    title: `${offer.seo.title} | ${SITE.name}`,
    description: offer.seo.description,
  },
};

export default function ThreeDRendersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

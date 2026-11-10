import { Metadata } from "next";
import { OG_BASE, TWITTER_IMAGES } from "@/lib/metadata";
import { SITE } from "@/lib/site";

const description =
  "Four fixed-scope studio offers with prices up front: AI workflow builds with a care plan, launch sprints, 3D product renders, and white-label work and archviz. Plus add-ons, and custom engineering for bigger builds.";

const shareDescription =
  "Fixed-scope studio offers with USD prices up front, add-ons, and custom engineering for bigger builds.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    ...OG_BASE,
    title: `Services | ${SITE.name}`,
    description: shareDescription,
    url: `${SITE.url}/services`,
  },
  twitter: {
    card: "summary_large_image",
    images: TWITTER_IMAGES,
    title: `Services | ${SITE.name}`,
    description: shareDescription,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

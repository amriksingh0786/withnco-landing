import { Metadata } from "next";
import { SITE } from "@/lib/site";

const description =
  "Four fixed-scope studio offers with prices up front: AI workflow builds with a care plan, launch sprints, 3D product renders, and white-label work and archviz. Plus add-ons, and custom engineering for bigger builds.";

const shareDescription =
  "Fixed-scope studio offers with USD prices up front, add-ons, and custom engineering for bigger builds.";

export const metadata: Metadata = {
  title: "Services",
  description,
  openGraph: {
    title: `Services | ${SITE.name}`,
    description: shareDescription,
    url: `${SITE.url}/services`,
  },
  twitter: {
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

import { Metadata } from "next";
import { OG_IMAGES, TWITTER_IMAGES } from "@/lib/metadata";
import { SITE } from "@/lib/site";

const description =
  "Case studies from withnco: a production management platform for a US video production startup, and a real-time contact center system for an enterprise SaaS company. Work that shipped.";

const shareDescription =
  "Case studies: a production management platform for video shoots, and a WebRTC contact center system with a real-time agent dashboard.";

export const metadata: Metadata = {
  title: "Our Work",
  description,
  openGraph: {
    images: OG_IMAGES,
    title: `Our Work | ${SITE.name}`,
    description: shareDescription,
    url: `${SITE.url}/work`,
  },
  twitter: {
    card: "summary_large_image",
    images: TWITTER_IMAGES,
    title: `Our Work | ${SITE.name}`,
    description: shareDescription,
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

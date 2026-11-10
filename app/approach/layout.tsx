import { Metadata } from "next";
import { OG_IMAGES, TWITTER_IMAGES } from "@/lib/metadata";
import { SITE } from "@/lib/site";

const shareDescription =
  "Understand first, then build: fixed scope and price in writing, a weekly written status, senior review before anything reaches you, and care plans after launch.";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "We understand your business, systems and data before we build. Fixed scope and price agreed in writing, a weekly written status, senior review before anything reaches you, and care plans after launch.",
  openGraph: {
    images: OG_IMAGES,
    title: "Our Approach | withnco",
    description: shareDescription,
    url: `${SITE.url}/approach`,
  },
  twitter: {
    card: "summary_large_image",
    images: TWITTER_IMAGES,
    title: "Our Approach | withnco",
    description: shareDescription,
  },
};

export default function ApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

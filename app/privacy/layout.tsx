import { Metadata } from "next";
import { OG_BASE, TWITTER_IMAGES } from "@/lib/metadata";
import { SITE } from "@/lib/site";

const description = `How ${SITE.name} collects, uses, keeps and protects the details you send through the contact form, and how to exercise your data rights.`;

export const metadata: Metadata = {
  title: "Privacy policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    ...OG_BASE,
    title: `Privacy policy | ${SITE.name}`,
    description,
    url: `${SITE.url}/privacy`,
  },
  twitter: {
    card: "summary_large_image",
    images: TWITTER_IMAGES,
    title: `Privacy policy | ${SITE.name}`,
    description,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

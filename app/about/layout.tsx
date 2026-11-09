import { Metadata } from "next";
import { LEAD, SITE } from "@/lib/site";

const description = `${SITE.name} is a small, senior-led studio based in ${SITE.location.short} for AI workflows, launch pages, 3D product visuals and custom software, led by ${LEAD.name}.`;

const shareDescription = `A small, senior-led studio led by ${LEAD.name}, with designers, engineers, 3D artists and go-to-market people. Based in ${SITE.location.short}, working worldwide, async-first.`;

export const metadata: Metadata = {
  title: "About Us",
  description,
  openGraph: {
    title: `About Us | ${SITE.name}`,
    description: shareDescription,
    url: `${SITE.url}/about`,
  },
  twitter: {
    title: `About Us | ${SITE.name}`,
    description: shareDescription,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

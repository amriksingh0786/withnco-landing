import { Metadata } from "next";
import { SITE } from "@/lib/site";

const description = `Talk to withnco about an AI workflow build, a launch sprint, 3D product renders, white-label work or a custom build. We reply within 1 business day. Based in ${SITE.location.short}.`;

const shareDescription =
  "Tell us what you're working on: AI workflows, launch pages, 3D product renders, white-label work or a custom build. We reply within 1 business day.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  openGraph: {
    title: `Contact | ${SITE.name}`,
    description: shareDescription,
    url: `${SITE.url}/contact`,
  },
  twitter: {
    title: `Contact | ${SITE.name}`,
    description: shareDescription,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

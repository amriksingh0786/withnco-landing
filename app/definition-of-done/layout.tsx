import { Metadata } from "next";
import { SITE } from "@/lib/site";

const description =
  "The checklists every withnco deliverable passes before it reaches you: test sets and human approval for AI workflows, speed, accessibility and tracking checks for websites, and review checklists for 3D renders and design.";

const shareDescription =
  "The checklists every deliverable passes before it reaches you, for AI workflows and engineering, websites, 3D renders and design.";

export const metadata: Metadata = {
  title: "Definition of done",
  description,
  openGraph: {
    title: `Definition of done | ${SITE.name}`,
    description: shareDescription,
    url: `${SITE.url}/definition-of-done`,
  },
  twitter: {
    title: `Definition of done | ${SITE.name}`,
    description: shareDescription,
  },
};

export default function DefinitionOfDoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

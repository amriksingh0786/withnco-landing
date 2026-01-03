import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "We understand before we build. Learn how withnco works with startups - from discovery and context gathering to partnership-driven development. Context first, reuse over rebuild, honest counsel.",
  openGraph: {
    title: "Our Approach | withnco",
    description:
      "Engineering partners who take time to understand your context before writing code. Discover our principles and process.",
    url: "https://withnco.studio/approach",
  },
  twitter: {
    title: "Our Approach | withnco",
    description:
      "Engineering partners who take time to understand your context before writing code. Discover our principles and process.",
  },
};

export default function ApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

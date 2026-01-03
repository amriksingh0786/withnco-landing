import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Portfolio of successful projects built by withnco - production management platforms, fintech ESOP systems, contact center solutions, and more. Real work that shipped for startups and enterprises.",
  openGraph: {
    title: "Our Work | withnco",
    description:
      "Case studies of successful projects - from fintech platforms to video production management. See what we've built for startups.",
    url: "https://withnco.studio/work",
  },
  twitter: {
    title: "Our Work | withnco",
    description:
      "Case studies of successful projects - from fintech platforms to video production management. See what we've built for startups.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

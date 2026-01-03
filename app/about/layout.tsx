import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the withnco team - a small, senior engineering team that builds like founders. Based in India, working with startups globally. Remote, async-first, and partner-driven.",
  openGraph: {
    title: "About Us | withnco",
    description:
      "Small by design. Partners, not employees. Meet the engineering team behind withnco and learn how we work.",
    url: "https://withnco.studio/about",
  },
  twitter: {
    title: "About Us | withnco",
    description:
      "Small by design. Partners, not employees. Meet the engineering team behind withnco and learn how we work.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

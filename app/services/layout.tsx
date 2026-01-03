import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack product development for startups. MVP development, web applications, mobile apps, API & backend systems, legacy modernization, and tech strategy consulting. Built with React, Next.js, Node.js, and modern technologies.",
  openGraph: {
    title: "Services | withnco",
    description:
      "From MVP to Series B - comprehensive engineering services for startups. Web, mobile, backend, and legacy modernization.",
    url: "https://withnco.studio/services",
  },
  twitter: {
    title: "Services | withnco",
    description:
      "From MVP to Series B - comprehensive engineering services for startups. Web, mobile, backend, and legacy modernization.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

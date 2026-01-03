import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with withnco. Let's discuss your startup project - no pitch decks required. We respond within 24 hours. Start a conversation about MVP development, web apps, or tech strategy.",
  openGraph: {
    title: "Contact | withnco",
    description:
      "Ready to build something great? Get in touch with our engineering team. Fast response, honest conversation, no hard sell.",
    url: "https://withnco.studio/contact",
  },
  twitter: {
    title: "Contact | withnco",
    description:
      "Ready to build something great? Get in touch with our engineering team. Fast response, honest conversation, no hard sell.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

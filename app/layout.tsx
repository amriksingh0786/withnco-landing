import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/lib/theme-context";

// Use local Geist fonts as fallback - in production, you can swap these
// for Google Fonts (Inter, Space Grotesk, JetBrains Mono) when deploying to Vercel
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-inter",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-jetbrains-mono",
  weight: "100 900",
});

// Reuse geist for heading temporarily - swap with Space Grotesk in production
const geistHeading = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-space-grotesk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "withnco — Engineering Partners for Startups",
    template: "%s | withnco",
  },
  description:
    "Engineering partners who embed with your team, understand your context, and build like founders. Not vendors. Not contractors. Partners.",
  keywords: [
    "software development",
    "startup engineering",
    "MVP development",
    "web application",
    "mobile app",
    "tech partner",
  ],
  authors: [{ name: "withnco" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://withnco.studio",
    siteName: "withnco",
    title: "withnco — Engineering Partners for Startups",
    description:
      "Engineering partners who embed with your team, understand your context, and build like founders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "withnco — Engineering Partners for Startups",
    description:
      "Engineering partners who embed with your team, understand your context, and build like founders.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistHeading.variable} ${geistMono.variable} font-sans antialiased bg-warm-white dark:bg-dark-bg text-off-black dark:text-warm-white`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

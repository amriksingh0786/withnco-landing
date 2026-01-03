import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/lib/theme-context";
import { StructuredData } from "@/components/StructuredData";

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
  metadataBase: new URL("https://withnco.studio"),
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
    "engineering partner",
    "startup CTO",
    "product development",
    "fullstack development",
  ],
  authors: [{ name: "withnco", url: "https://withnco.studio" }],
  creator: "withnco",
  publisher: "withnco",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://withnco.studio",
    siteName: "withnco",
    title: "withnco — Engineering Partners for Startups",
    description:
      "Engineering partners who embed with your team, understand your context, and build like founders.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "withnco - Engineering Partners for Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "withnco — Engineering Partners for Startups",
    description:
      "Engineering partners who embed with your team, understand your context, and build like founders.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
        <StructuredData />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

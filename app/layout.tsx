import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/lib/theme-context";
import { StructuredData } from "@/components/StructuredData";
import { SITE } from "@/lib/site";

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

const defaultTitle = `${SITE.name} — ${SITE.tagline}`;

// Share images come from app/opengraph-image.tsx and app/twitter-image.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "AI workflow automation",
    "AI automation studio",
    "n8n",
    "n8n automation",
    "Make automation",
    "landing page design",
    "launch page",
    "Framer",
    "Framer website",
    "3D product renders",
    "product rendering",
    "e-commerce product images",
    "architectural visualization",
    "archviz",
    "white-label development",
    "white-label agency partner",
    "engineering overflow",
    "MVP development",
    "web application development",
    "mobile app development",
    "custom software development",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: defaultTitle,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE.description,
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
        <Analytics />
      </body>
    </html>
  );
}

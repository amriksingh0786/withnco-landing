/**
 * Site-wide facts for withnco.studio. Every page, the footer, metadata and
 * structured data read contact details and the legal line from here.
 */

export const SITE = {
  name: "withnco",
  url: "https://withnco.studio",
  tagline: "The small team behind your next launch",
  description:
    "A small, senior-led studio for AI workflow automation, launch pages, 3D product renders and custom software. Fixed scope, fixed prices, and a senior engineer reviews every engineering deliverable.",
  email: "hello@withnco.studio",
  whatsapp: {
    display: "+91 89650 37900",
    href: "https://wa.me/918965037900",
  },
  /**
   * Scheduling link (Cal.com, Calendly...). Empty hides every "Book a call" link.
   * Set NEXT_PUBLIC_BOOKING_URL in the hosting environment once it exists.
   */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  social: {
    linkedin: "https://linkedin.com/company/withnco",
    twitter: "https://twitter.com/withnco",
  },
  location: {
    short: "Bangalore and Indore",
    line: "Based in Bangalore and Indore. Working worldwide.",
  },
  legalEntity: "Amrik (OPC) Innovates Pvt Ltd",
  legalLine: "withnco. A brand of Amrik (OPC) Innovates Pvt Ltd.",
} as const;

/** The studio lead. Facts mirror amriksinghkhalsa.com (lib/content.ts there). */
export const LEAD = {
  name: "Amrik Singh Khalsa",
  initials: "AS",
  role: "Studio lead: architecture and review",
  site: "https://www.amriksinghkhalsa.com",
  linkedin: "https://www.linkedin.com/in/amriksinghkhalsa",
  github: "https://github.com/amriksingh0786",
} as const;

export const hasBookingUrl = () => SITE.bookingUrl.startsWith("https://");

/**
 * The studio's offer catalogue: fixed-scope offers, add-ons and custom engineering.
 *
 * Pricing rules (agreed 9 Nov 2026):
 * - Fixed-scope offers show public "from" prices in USD.
 * - Indian clients get INR pricing on request; INR-only items show "Price on request".
 * - Custom engineering is quoted after a scoping call (no public price).
 * Prices live only in this file.
 */

export type OfferSlug = "ai-workflows" | "launch-sprint" | "3d-renders" | "white-label";

export interface PriceLine {
  readonly item: string;
  /** e.g. "USD 3,500", "USD 450 / month", "Price on request". */
  readonly price: string;
  readonly note?: string;
}

export interface RoleLine {
  readonly role: string;
  readonly does: string;
}

export interface Faq {
  readonly q: string;
  readonly a: string;
}

export interface OfferSection {
  readonly heading: string;
  readonly intro?: string;
  readonly items: readonly string[];
}

export interface Offer {
  readonly slug: OfferSlug;
  readonly href: string;
  /** Short name for cards, nav and dropdowns. */
  readonly name: string;
  /** H1 on the offer page. */
  readonly title: string;
  /** One sentence under the card title and the H1. */
  readonly summary: string;
  /** Lowest public price in USD, shown as "from USD X". */
  readonly fromUsd: number;
  /** What the "from" price buys, shown next to it. */
  readonly fromWhat: string;
  readonly bestFor: string;
  readonly sections: readonly OfferSection[];
  readonly timeline: readonly string[];
  readonly team: readonly RoleLine[];
  readonly prices: readonly PriceLine[];
  /** Ordinary scope limits for this offer (what a SOW would list as out of scope). */
  readonly notIncluded: readonly string[];
  readonly faq: readonly Faq[];
  readonly seo: { readonly title: string; readonly description: string };
}

export const formatUsd = (n: number) => `USD ${n.toLocaleString("en-US")}`;
export const fromPrice = (o: Pick<Offer, "fromUsd">) => `From ${formatUsd(o.fromUsd)}`;

export const INR_NOTE = "Working with an Indian company? Ask for INR pricing.";
export const PRICE_ON_REQUEST = "Price on request";

export const OFFERS: readonly Offer[] = [
  {
    slug: "ai-workflows",
    href: "/services/ai-workflows",
    name: "AI workflow build + care plan",
    title: "One workflow, automated with AI and tested before it goes live",
    summary:
      "We automate one business workflow end to end, with a test set scored on your real data, a run log, and a senior engineer's sign-off. A monthly care plan keeps it working.",
    fromUsd: 3500,
    fromWhat: "Standard build, about 4 weeks",
    bestFor:
      "Startups and SMBs with 10 to 200 people and one manual process that eats hours every week.",
    sections: [
      {
        heading: "What we automate",
        intro:
          "One business workflow, end to end, across up to 3 connected systems, with one AI step that classifies, extracts or drafts. For example:",
        items: [
          "Inbound-lead triage with CRM enrichment",
          "Support-inbox triage with drafted replies",
          "Invoice or purchase-order extraction into your accounting tool",
          "WhatsApp order intake",
        ],
      },
      {
        heading: "What you get",
        items: [
          "A 50-case test set built from your real data, scored before go-live",
          "Human approval before anything is sent, paid or deleted",
          "Retries, alerts to email or Slack, and a run log",
          "A monthly cap on AI model costs",
          "Everything built on your own accounts: n8n, Make, or a small TypeScript or Python service",
          "A handover document and a 30-minute recorded walkthrough",
          "14 days of fixes after go-live",
        ],
      },
      {
        heading: "Plus",
        intro: "For bigger workflows:",
        items: [
          "4 to 6 connected systems, or a retrieval step over your own documents that uses your existing folder permissions as they are",
          "A 100-case test set",
        ],
      },
      {
        heading: "Care plan",
        intro: "After launch, the care plan keeps the workflow healthy:",
        items: [
          "Monitoring and alerts",
          "A monthly rerun of the test set",
          "Model updates and fixes",
          "Small changes: 2 hours a month on Basic, 5 on Plus",
        ],
      },
    ],
    timeline: [
      "Standard: about 4 weeks. 3 days of discovery, 2 weeks of build, 1 week of testing and handover.",
      "Plus: 6 to 7 weeks.",
    ],
    team: [
      { role: "Studio lead", does: "Designs the architecture, writes the AI step and the test design, and does the final review." },
      { role: "Engineers", does: "Build the integrations and the tests." },
      { role: "Design", does: "Handles any screen or report the workflow needs." },
      { role: "Go-to-market", does: "Keeps discovery notes and sends your weekly status." },
    ],
    prices: [
      { item: "Standard build", price: "USD 3,500", note: "Up to 3 systems, one AI step, 50-case test set" },
      { item: "Plus build", price: "USD 6,500", note: "4 to 6 systems or document retrieval, 100-case test set" },
      { item: "Care plan Basic", price: "USD 450 / month", note: "Includes 2 hours of small changes" },
      { item: "Care plan Plus", price: "USD 900 / month", note: "Includes 5 hours of small changes" },
    ],
    notIncluded: [
      "Work outside the agreed workflow (priced as a change request)",
      "Changes beyond the care plan's included hours (priced separately)",
    ],
    faq: [
      {
        q: "Which tools do you build on?",
        a: "n8n, Make, or a small TypeScript or Python service, always on your own accounts so you own everything we build.",
      },
      {
        q: "What is a test set, and why does it matter?",
        a: "A list of real examples from your data with the answer you expect for each. We score the workflow against it before go-live and again every month on a care plan, so you know it still works after models and tools change.",
      },
      {
        q: "What do you need from us?",
        a: "Access to the systems involved, a sample of real cases for the test set, and one person who can answer questions about the process.",
      },
      {
        q: "How do you handle our credentials?",
        a: "They go only into your platform's own credential store, exactly as you provide them.",
      },
    ],
    seo: {
      title: "AI workflow automation with tests and a care plan",
      description:
        "One business workflow automated end to end with AI: a 50-case test set scored before go-live, human approval, retries, alerts and a run log. From USD 3,500, about 4 weeks.",
    },
  },
  {
    slug: "launch-sprint",
    href: "/services/launch-sprint",
    name: "Launch sprint",
    title: "A launch page or small site, designed and built in 10 working days",
    summary:
      "One design direction, copy edited from your facts, forms wired to your CRM, analytics, on-page SEO and a speed pass. You own the hosting.",
    fromUsd: 1800,
    fromWhat: "Landing page in 10 working days",
    bestFor: "Startups launching a product, a raise or a waitlist, and teams who need a page live fast.",
    sections: [
      {
        heading: "What we build",
        items: [
          "One landing page of up to 7 sections, or a 5-page site",
          "Built in Framer by default, or Next.js on request",
          "One design direction with two revision rounds",
          "Copy edited by our go-to-market lead from the facts you supply",
        ],
      },
      {
        heading: "What you get",
        items: [
          "Forms wired to your CRM or email",
          "GA4 or Plausible analytics",
          "On-page SEO: titles, meta descriptions, schema and a sitemap",
          "A mobile Lighthouse performance score of 90 or more",
          "WCAG AA colour contrast and alt text",
          "A 30-minute handover. You own the hosting account.",
        ],
      },
    ],
    timeline: ["Landing page: 10 working days.", "5-page site: 3 weeks."],
    team: [
      { role: "Design", does: "Leads the sprint and the design direction." },
      { role: "Engineers", does: "Build the page and wire the forms." },
      { role: "Go-to-market", does: "Owns the copy and the analytics setup." },
      { role: "Studio lead", does: "Does the final technical check: speed, forms and tracking." },
    ],
    prices: [
      { item: "Landing page", price: "USD 1,800", note: "Up to 7 sections, 10 working days" },
      { item: "5-page site", price: "USD 3,800", note: "About 3 weeks" },
    ],
    notIncluded: ["Logins or member areas", "Checkout builds", "Regulated medical claims"],
    faq: [
      {
        q: "Why Framer?",
        a: "It is fast to build in, easy for your team to edit after handover, and quick to load. If your team works in Next.js, we build in Next.js instead.",
      },
      {
        q: "Do you write the copy?",
        a: "We edit and structure copy from the facts you give us. We don't invent claims, numbers or testimonials.",
      },
      {
        q: "Who owns the site?",
        a: "You do. It is built on your hosting account and handed over with a 30-minute walkthrough.",
      },
    ],
    seo: {
      title: "Launch sprint: landing page in 10 working days",
      description:
        "A landing page or 5-page site designed and built in Framer or Next.js, with CRM-wired forms, analytics, on-page SEO and a 90+ mobile Lighthouse score. From USD 1,800.",
    },
  },
  {
    slug: "3d-renders",
    href: "/services/3d-renders",
    name: "3D product renders",
    title: "3D product renders and loops, without a photo shoot",
    summary:
      "Marketplace-ready product images and short animations built in Blender from your photos, dimensions, dieline or CAD. New colourways and angles come from the same file.",
    fromUsd: 240,
    fromWhat: "One SKU, 4 images",
    bestFor: "D2C and e-commerce brands adding SKUs, colourways or marketplace listings.",
    sections: [
      {
        heading: "Per SKU",
        items: [
          "One white-background hero image, 3000 px square, marketplace-ready",
          "3 more angles",
          "Two revision rounds at clay stage and one on the final",
        ],
      },
      {
        heading: "Animation",
        items: [
          "A 15-second loop: turntable, exploded view or feature reveal",
          "Cut down to 1:1, 9:16 and 16:9",
        ],
      },
      {
        heading: "How it works",
        items: [
          "We build from your photos and dimensions, a dieline or CAD. No physical samples needed.",
          "We keep the master file so new colourways and angles are quick. A buyout of the master file costs 30% extra.",
        ],
      },
    ],
    timeline: ["First images in about 5 working days for a single SKU."],
    team: [
      { role: "3D artists", does: "Model, light and render in Blender." },
      { role: "Design", does: "Art-directs and peer-reviews every image against a checklist." },
      { role: "Studio lead", does: "Signs off the scope." },
    ],
    prices: [
      { item: "One SKU, 4 images", price: "USD 240" },
      { item: "SKU pack: 5 SKUs, 4 images each", price: "USD 1,200" },
      { item: "15-second loop with 3 cutdowns", price: "USD 1,000" },
      { item: "Extra colourway", price: "USD 40" },
      { item: "360 spin", price: "USD 150" },
    ],
    notIncluded: ["Lifestyle photo shoots", "Physical samples shipped to us"],
    faq: [
      {
        q: "What do you need from us?",
        a: "Clear photos from several angles and the product's dimensions. A dieline for packaging, or a CAD file if you have one, makes the result more accurate.",
      },
      {
        q: "Can you match our brand's look?",
        a: "Yes. Send references and we agree the lighting and backdrop at clay stage, before final renders.",
      },
      {
        q: "Who owns the images?",
        a: "You get full rights to the delivered images once the invoice is paid. The studio keeps the master file unless you buy it out for 30% extra.",
      },
    ],
    seo: {
      title: "3D product renders for e-commerce and D2C",
      description:
        "Marketplace-ready 3D product renders and 15-second loops built in Blender from your photos, dieline or CAD. From USD 240 per SKU (4 images); 5-SKU pack USD 1,200.",
    },
  },
  {
    slug: "white-label",
    href: "/white-label",
    name: "White-label and archviz",
    title: "Extra hands for agencies, architects and developers",
    summary:
      "Fixed-price AI add-ons, engineering overflow and architectural visualisation, delivered under your brand with an NDA and a non-solicit.",
    fromUsd: 240,
    fromWhat: "One interior archviz still",
    bestFor:
      "Shopify, HubSpot, Webflow and Framer agencies; architects and visualisation studios; real-estate developers.",
    sections: [
      {
        heading: "For agencies",
        intro: "When your clients ask for something with AI, or you need engineering capacity:",
        items: [
          "Resellable AI add-on: an inbox-triage agent at USD 2,500 to you. You set your own resale price.",
          "Engineering overflow in 40-hour blocks, each with 4 hours of senior review",
          "Per-SKU product renders for your e-commerce clients",
        ],
      },
      {
        heading: "For architects and visualisation studios",
        intro: "Renders under your name, from your SketchUp, Revit or CAD export:",
        items: [
          "Exterior and interior stills, and extra views of the same model",
          "Walkthroughs, priced per second",
          "Two clay rounds and one final round, 5 working days per set",
        ],
      },
      {
        heading: "For real-estate developers: Project Launch Kit",
        intro: "The full launch package for plotted and township projects, from one team:",
        items: [
          "4 exterior or aerial views and 2 interiors",
          "A 60-second walkthrough",
          "A project microsite",
          "Meta lead-ads setup, WhatsApp follow-up automation and 4 weeks of management (ad spend paid by you)",
          "Project lead and QA",
        ],
      },
      {
        heading: "How white-label works",
        items: [
          "No withnco branding anywhere in the work",
          "A mutual NDA, and we never contact your clients",
          "A non-solicit on your clients",
          "Fixed price per deliverable and a turnaround agreed up front",
        ],
      },
    ],
    timeline: [
      "Archviz: 5 working days per set of stills.",
      "Overflow and add-ons: agreed per job before work starts.",
    ],
    team: [
      { role: "Engineers", does: "Build AI add-ons and overflow work." },
      { role: "3D artists", does: "Model and render stills and walkthroughs." },
      { role: "Studio lead", does: "Reviews every engineering deliverable." },
      { role: "Go-to-market", does: "Keeps discovery notes and sends your weekly written status." },
    ],
    prices: [
      { item: "Inbox-triage AI add-on (to the agency)", price: "USD 2,500" },
      { item: "Engineering overflow, 40-hour block", price: "USD 2,000", note: "Includes 4 hours of senior review" },
      { item: "Exterior still", price: "USD 300" },
      { item: "Interior still", price: "USD 240" },
      { item: "Extra view of the same model", price: "USD 140" },
      { item: "Walkthrough", price: "USD 30 / second", note: "30-second minimum (USD 900)" },
      { item: "Project Launch Kit (India)", price: PRICE_ON_REQUEST },
    ],
    notIncluded: ["Contact with your clients", "withnco branding or credits in the work"],
    faq: [
      {
        q: "Will your name appear anywhere?",
        a: "No. The work is delivered under your brand, and the NDA and non-solicit cover both sides.",
      },
      {
        q: "Can we try you on one job first?",
        a: "Yes. Start with one add-on, one overflow block or one test view, and decide from there.",
      },
      {
        q: "What do you need for archviz?",
        a: "An export of the model from SketchUp, Revit or CAD, material and mood references, and the views you want.",
      },
    ],
    seo: {
      title: "White-label AI, engineering and archviz for agencies",
      description:
        "White-label AI add-ons, 40-hour engineering overflow blocks and architectural visualisation under your brand, with an NDA and non-solicit. Exterior stills from USD 300.",
    },
  },
];

export const offerBySlug = (slug: OfferSlug) => OFFERS.find((o) => o.slug === slug)!;

/* ---------- Add-ons ---------- */

export interface AddOn {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: string;
}

export const ADD_ONS: readonly AddOn[] = [
  {
    id: "brand-starter-kit",
    name: "Brand starter kit",
    description: "Wordmark, palette, type and a 12-page brand guide.",
    price: "From USD 1,500",
  },
  {
    id: "pitch-deck",
    name: "Pitch deck",
    description: "12 slides, story and design. No financial model.",
    price: "From USD 1,500",
  },
  {
    id: "launch-gtm-pack",
    name: "Launch GTM pack",
    description: "Ideal customer profile, a 100-account B2B list, a 3-email sequence and 4 LinkedIn posts.",
    price: "From USD 900",
  },
  {
    id: "ai-ops-workshop",
    name: "AI for ops teams workshop",
    description: "A half-day workshop for operations teams in Bangalore on where AI workflows help, and how to run them reliably.",
    price: PRICE_ON_REQUEST,
  },
];

/* ---------- Custom engineering (quoted after a scoping call) ---------- */

export interface EngineeringService {
  readonly title: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly timeline: string;
}

export const ENGINEERING_SERVICES: readonly EngineeringService[] = [
  {
    title: "MVP Development",
    description:
      "Validate before you invest. We build lean, functional products designed to test your hypothesis with real users. Fast to market, built to learn.",
    features: [
      "Landing pages with waitlists",
      "Functional prototypes",
      "V1 products ready for early adopters",
      "Built for iteration, not perfection",
    ],
    timeline: "4-8 weeks typical",
  },
  {
    title: "Web Applications",
    description:
      "Modern, scalable web apps built with proven technologies. Whether it's a customer dashboard, internal tool, or full SaaS platform — we've built it before.",
    features: [
      "React, Next.js, Vue frontends",
      "Node.js, Python, Go backends",
      "Database design and optimization",
      "Payments and integrations, working with the sign-in your team already uses",
    ],
    timeline: "8-16 weeks typical",
  },
  {
    title: "Mobile Apps",
    description:
      "iOS, Android, or both. We build cross-platform apps that feel native, or go fully native when performance demands it.",
    features: [
      "React Native for speed-to-market",
      "Flutter for complex UI",
      "Native Swift/Kotlin when it matters",
      "App Store optimization and launch support",
    ],
    timeline: "10-16 weeks typical",
  },
  {
    title: "API & Backend Systems",
    description:
      "The infrastructure nobody sees but everyone depends on. Robust APIs, clean data models, and cloud architecture that scales.",
    features: [
      "RESTful and GraphQL APIs",
      "Microservices and serverless",
      "AWS, GCP, DigitalOcean, Vercel",
      "CI/CD pipelines and DevOps",
    ],
    timeline: "Varies by complexity",
  },
  {
    title: "Legacy Modernization",
    description:
      "Inherited a mess? Previous team disappeared? We stabilize, refactor, and modernize existing systems — without burning it all down.",
    features: [
      "Codebase audits and documentation",
      "Incremental refactoring",
      "Performance optimization",
      "Technical debt reduction",
    ],
    timeline: "Ongoing engagement",
  },
  {
    title: "Tech Strategy & Consulting",
    description:
      "Not sure what to build first? Need a second opinion on architecture? We help you think through the hard decisions before committing resources. Identity, credentials and access-vendor choices are out of scope.",
    features: [
      "Product roadmap prioritization",
      "Build vs. buy analysis",
      "Architecture review: orchestration, failure handling, evaluation and cost",
      "Vendor and tool selection, excluding identity and access vendors",
    ],
    timeline: "1-2 week engagements",
  },
];

export const TECH_STACK: Readonly<Record<string, readonly string[]>> = {
  "AI & Automation": ["n8n", "Make", "TypeScript", "Python"],
  Frontend: ["React", "Next.js", "Vue", "Tailwind CSS", "TypeScript"],
  Backend: ["Node.js", "Python", "Go", "Encore.ts"],
  Mobile: ["React Native", "Flutter"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  "Cloud & Infra": ["AWS", "GCP", "DigitalOcean", "Vercel", "Railway"],
  DevOps: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
  "Design & 3D": ["Figma", "Framer", "Blender"],
};

/* ---------- Contact form options (derived, so they never drift from the offers) ---------- */

export const CONTACT_SERVICE_OPTIONS: readonly { value: string; label: string }[] = [
  ...OFFERS.map((o) => ({ value: o.slug, label: o.name })),
  ...ADD_ONS.map((a) => ({ value: a.id, label: a.name })),
  { value: "custom-build", label: "Custom build (MVP, web or mobile app, API)" },
  { value: "legacy", label: "Fixing or modernizing an existing codebase" },
  { value: "consulting", label: "Tech strategy / consulting" },
  { value: "other", label: "Something else" },
];

export const CONTACT_BUDGET_OPTIONS: readonly { value: string; label: string }[] = [
  { value: "under-2k", label: "Under USD 2,000" },
  { value: "2k-5k", label: "USD 2,000 - 5,000" },
  { value: "5k-10k", label: "USD 5,000 - 10,000" },
  { value: "10k-25k", label: "USD 10,000 - 25,000" },
  { value: "25k+", label: "Over USD 25,000" },
  { value: "unsure", label: "Not sure yet" },
];

/** Scope screen asked on every inquiry. Generic on purpose: no vendor names. */
export const SCOPE_SCREEN = {
  question: "Does this involve building login, access control or security features?",
  options: [
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
    { value: "unsure", label: "Not sure" },
  ],
} as const;

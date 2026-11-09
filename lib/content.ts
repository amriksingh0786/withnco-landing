/**
 * Page copy for withnco.studio. Offers and prices live in lib/offers.ts,
 * contact details and the legal line in lib/site.ts.
 */
import { LEAD, SITE } from "@/lib/site";

/* ---------- Home ---------- */

export const HOME = {
  hero: {
    title: "The small team behind your next launch",
    subtitle:
      "AI automations with tests and run logs, launch pages, 3D product renders and custom product builds. A senior engineer reviews every engineering deliverable before it reaches you.",
    cta: { label: "Let's Talk", href: "/contact" },
  },
  trustBar: "For startups, product teams, D2C brands and agencies who'd rather ship than manage vendors",
  offers: {
    heading: "Four things we do, at fixed prices",
    intro: "Fixed scope, fixed price, and acceptance criteria written down before work starts.",
    biggerBuilds: {
      text: "Need something bigger? We also build MVPs, web and mobile apps, and APIs.",
      linkLabel: "See custom builds",
      href: "/services#custom-builds",
    },
  },
  comparison: {
    heading: "Not another dev shop",
    intro:
      "You've probably worked with agencies before. You know the drill: a flashy proposal, a team you never meet, missed deadlines, and a codebase you can't maintain. We do things differently.",
    rows: [
      { agency: "Hourly or vague pricing", withnco: "Fixed scope and price, acceptance criteria in writing" },
      { agency: "A prompt wired into a zap", withnco: "Test sets scored before go-live, retries, alerts and a run log" },
      { agency: "Nobody checks the work", withnco: "A senior engineer reviews every engineering deliverable" },
      { agency: "One skill per vendor", withnco: "Design, 3D, web, AI and go-to-market under one brief and one invoice" },
      { agency: "Disappears after launch", withnco: "Care plans keep what we built monitored and tested" },
      { agency: "Treats you like a ticket", withnco: "Treats you like a partner" },
    ],
  },
  howWeWork: {
    heading: "Simple, transparent, human",
    linkLabel: "See our full approach",
    steps: [
      {
        step: "01",
        title: "Listen",
        description:
          "We start with your business, your users, your systems and your real data. No solutions until we know the problem.",
      },
      {
        step: "02",
        title: "Scope",
        description:
          "Fixed scope, fixed price, and acceptance criteria written down before work starts. Clear about what's out, too.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "A weekly written status from your project owner. A senior engineer reviews the work before you see it.",
      },
      {
        step: "04",
        title: "Care",
        description:
          "Launch isn't the finish line. Care plans keep automations monitored, tested every month and up to date.",
      },
    ],
  },
  testimonials: [
    {
      quote:
        "They understood our codebase faster than devs who'd been here for months. Felt like an extension of our own team.",
      author: "Founder, Fintech Startup",
    },
    { quote: "No hand-holding needed. They just got it and shipped.", author: "CTO, B2B SaaS" },
  ],
  cta: {
    title: "Let's build something together",
    subtitle:
      "Whether you're automating a workflow, launching a product, or fixing what's broken — tell us what you need and we'll scope it.",
    cta: { label: "Start a Conversation", href: "/contact" },
  },
} as const;

/* ---------- Approach ---------- */

export const APPROACH = {
  hero: {
    title: "We understand before we build",
    subtitle:
      "Most agencies rush to solutions. We start with questions. What exists? What's working? What did the last team get wrong? Only then do we write code.",
  },
  principlesHeading: "How we think",
  principles: [
    {
      title: "Context first",
      content: `Every codebase has history. Every product decision had a reason — even the bad ones.

Before we propose anything, we dig in. We read your existing code and processes, look at your real data, and understand the "why" behind what exists. This isn't just due diligence — it's respect for the work that came before us.`,
    },
    {
      title: "Reuse over rebuild",
      content: `We're not here to pad invoices or rewrite everything in our favorite framework.

If something works, we keep it. If it can be fixed, we fix it. We only build new when it genuinely makes sense. Your budget is finite. We treat it like our own.`,
    },
    {
      title: "Written down, not hand-waved",
      content: `Scope, price and acceptance criteria are agreed in writing before work starts. So is what's out of scope.

During the project you get a written status every week from one project owner. Calls are booked ahead when a conversation is faster than writing, and every decision ends up in writing.`,
    },
    {
      title: "Reviewed before you see it",
      content: `Every engineering deliverable passes a written definition-of-done checklist and a senior engineer's review before it reaches you. Design and 3D work is peer-reviewed against its own checklist.

AI workflows don't go live until they pass a test set built from your real data.`,
    },
    {
      title: "Honest counsel",
      content: `We'll tell you when an idea won't work. We'll push back on scope creep. We'll flag risks early.

We'd rather lose a project than build something we know will fail. Our reputation depends on your success, not on saying yes to everything.`,
    },
  ],
  phasesHeading: "What working with us looks like",
  phases: [
    {
      name: "Discovery",
      duration: "A few days",
      items: [
        "A call to understand your business, users and goals",
        "A look at your existing systems, data and past attempts",
        "Acceptance criteria drafted with you: what \"done\" means, in writing",
        "Quick wins and long-term priorities identified",
      ],
      outcome: "We know your world. You know if we're the right fit.",
    },
    {
      name: "Proposal",
      duration: "A few days after discovery",
      items: [
        "A scope document: what we'll build, what we won't",
        "Fixed price for studio offers; fixed or time-based for custom builds",
        "Two revision rounds included, with any change requests priced up front",
        "Options if budget is tight: a smaller first phase, then the rest",
      ],
      outcome: "No ambiguity. You know exactly what you're getting.",
    },
    {
      name: "Build",
      duration: "Weeks, depending on the offer",
      items: [
        "One project owner on our side",
        "A written status every week, async by default",
        "Calls scheduled in advance when they help",
        "A senior review before anything reaches you, with the review turnaround written into the scope",
      ],
      outcome: "You're never in the dark. Progress is visible and written down.",
    },
    {
      name: "Launch & Beyond",
      duration: "Ongoing",
      items: [
        "A handover document and a recorded walkthrough",
        "14 days of fixes after go-live on automation builds",
        "Care plans: monitoring, a monthly test-set rerun, model updates and small changes",
        "Scale the engagement up or down as your needs change",
      ],
      outcome: "A lasting partnership, not a transactional handoff.",
    },
  ],
  cta: {
    title: "Curious how we'd approach your project?",
    subtitle: "Let's talk through it. No commitment, no pitch deck required.",
    cta: { label: "Let's Talk", href: "/contact" },
  },
} as const;

/* ---------- About ---------- */

export const ABOUT = {
  hero: {
    title: "We're withnco",
    subtitle:
      "A small, senior-led studio for AI workflows, launch pages, 3D product visuals and custom software.",
  },
  story: {
    heading: "Why we started this",
    paragraphs: [
      "We've been on your side of the table.",
      "Shipping products under pressure. Working with limited runway. Making hard tradeoffs between speed and quality. Dealing with agencies that over-promised and under-delivered.",
      "So we built withnco to be the partner we wished we had.",
      "No bloated teams padding hours. No offshore roulette where you never know who's touching your code. No account managers who don't understand what an API is.",
      "Just builders who've shipped real products, who understand startup constraints, and who care about your outcome as much as you do.",
    ],
    closing:
      "We stay small intentionally. We choose clients carefully. We'd rather do fewer things well than scale for scale's sake.",
  },
  teamHeading: "Who you work with",
  lead: {
    name: LEAD.name,
    initials: LEAD.initials,
    role: LEAD.role,
    paragraphs: [
      "Amrik leads withnco. He designs the architecture of every AI and engineering project, builds the AI core himself, and reviews every engineering deliverable before it reaches a client.",
      "He has five years of building and leading full-stack platforms. As Founding Engineer and Tech Lead at Incentiv, he led the team behind the core platform of India's first equity secondary market: $5M+ in ESOP liquidity, with 30+ startups and 200+ investors onboarded in 6 months.",
      "He has 8 upstream pull requests merged at NVIDIA, Microsoft and Warp.",
    ],
    links: [
      { label: "amriksinghkhalsa.com", href: LEAD.site },
      { label: "LinkedIn", href: LEAD.linkedin },
      { label: "GitHub", href: LEAD.github },
    ],
  },
  teamLine:
    "Around him, a small team of designers, engineers, 3D artists and go-to-market people does the building.",
  cultureHeading: "How we work",
  culture: [
    {
      title: "Small by design",
      description:
        "We're not trying to be a 100-person agency. Small means we can be selective about clients, maintain quality, and actually know everyone on the team.",
    },
    {
      title: "Remote, async-first",
      description: `We're based in ${SITE.location.short} and work with clients worldwide. We default to written updates and book calls ahead, so time zones don't slow you down.`,
    },
    {
      title: "Partners, not employees",
      description:
        'Everyone at withnco has ownership in the work. We don\'t have "resources" — we have people who give a damn.',
    },
  ],
  cta: {
    title: "Enough about us",
    subtitle: "Tell us about what you're building. We're all ears.",
    cta: { label: "Start a Conversation", href: "/contact" },
  },
} as const;

/* ---------- Work ---------- */

export interface WorkItem {
  /** "case" is delivered client work. "concept" is studio-made sample work, always labelled. */
  readonly kind: "case" | "concept";
  readonly title: string;
  readonly client: string;
  readonly challenge: string;
  readonly solution: readonly string[];
  readonly tech: readonly string[];
  readonly outcome: string;
}

export const WORK = {
  hero: {
    title: "Work that shipped",
    subtitle: "A few projects we're proud of. Names anonymized where clients prefer it.",
  },
  conceptNote: "Pieces marked Concept are studio-made samples, not client work.",
  items: [
    {
      kind: "case",
      title: "Production Management Platform",
      client: "Video production startup (US)",
      challenge:
        "A growing content studio needed to manage complex video shoots — scheduling, asset management, team coordination, client approvals. They were drowning in spreadsheets and Slack threads.",
      solution: [
        "Custom web app for production workflow management",
        "Video upload and streaming with DigitalOcean Spaces",
        "Client portal for reviews and approvals",
        "Team scheduling and resource allocation",
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "DigitalOcean", "AWS"],
      outcome: "Reduced production coordination time by 40%. Now used across 50+ shoots per month.",
    },
    {
      kind: "case",
      title: "Contact Center System",
      client: "Enterprise SaaS (Confidential)",
      challenge:
        "Needed a modern contact center solution with real-time communication capabilities for their sales team.",
      solution: [
        "WebRTC-based calling system",
        "Real-time agent dashboard",
        "Call recording and analytics",
        "CRM integrations",
      ],
      tech: ["WebRTC", "React", "Node.js", "Redis"],
      outcome: "Replaced legacy system, reduced call setup time by 60%.",
    },
  ] as readonly WorkItem[],
  cta: {
    title: "Want the full story on any of these?",
    subtitle: "We're happy to walk through our process in detail. Let's chat.",
    cta: { label: "Let's Talk", href: "/contact" },
  },
} as const;

/* ---------- Contact ---------- */

export const CONTACT = {
  hero: {
    title: "Let's figure this out together",
    subtitle:
      "No pitch decks. No formalities. Just tell us what you're working on and we'll see if we can help.",
  },
  budgetNote: "Prefer to pay in INR? Say so in your message and we'll quote in rupees.",
  privacyNote: "We use your details only to reply to this inquiry.",
  success: {
    title: "Got it.",
    body: "We'll reply within 1 business day. Talk soon.",
  },
  error: "Something went wrong. Please try again or email us directly.",
  nextSteps: [
    "We reply within 1 business day",
    "If there's a fit, we book a 30-minute call at a time that works for both sides",
    "You get a written scope and a fixed price before any work starts",
  ],
  faqs: [
    { question: "How quickly can you start?", answer: "Usually within 1-2 weeks, depending on current projects." },
    {
      question: "Do you work with early-stage startups?",
      answer:
        "Yes — we love working with founders from idea stage. We'll help you scope something that fits your budget.",
    },
    {
      question: "What's your pricing model?",
      answer:
        "Our studio offers have fixed prices, listed in USD on each offer page. Custom builds are quoted after a short scoping call. Indian clients can ask for INR pricing.",
    },
    {
      question: "Do you work white-label?",
      answer: "Yes, for agencies and architects: under your brand, with an NDA and a non-solicit.",
    },
    {
      question: "Where are you located?",
      answer: `We're based in ${SITE.location.short} and work with clients worldwide, async-first.`,
    },
  ],
} as const;

/* ---------- Definition of done ---------- */

export const DEFINITION_OF_DONE = {
  hero: {
    title: "Definition of done",
    subtitle:
      "The checklists every deliverable passes before it reaches you. They're part of every scope we sign, so \"done\" means the same thing to both of us.",
  },
  everyProject: {
    heading: "On every project",
    items: [
      "Scope, price and acceptance criteria agreed in writing before work starts",
      "Two revision rounds included; change requests priced before they're done",
      "A weekly written status from your project owner",
      "Nothing reaches you without passing its checklist below",
    ],
  },
  disciplines: [
    {
      name: "AI workflows and engineering",
      reviewer: "Reviewed by our studio lead before any demo",
      items: [
        "A test set built from your real data (50 cases, or 100 on Plus) scored before go-live",
        "Human approval before anything is sent, paid or deleted",
        "Retries on failure, alerts to email or Slack, and a run log",
        "A monthly cap on AI model costs",
        "Built on your own accounts; credentials only in your platform's credential store",
        "A handover document and a 30-minute recorded walkthrough",
        "14 days of fixes after go-live",
      ],
    },
    {
      name: "Websites and launch pages",
      reviewer: "Final technical check by our studio lead",
      items: [
        "Mobile Lighthouse performance score of 90 or more",
        "WCAG AA colour contrast and alt text on every image",
        "Every form tested end to end into your CRM or inbox",
        "Analytics installed and verified",
        "Titles, meta descriptions, schema and a sitemap",
        "Hosted on your account, with a 30-minute handover",
      ],
    },
    {
      name: "3D renders and animation",
      reviewer: "Peer-reviewed and art-directed by design",
      items: [
        "Built to your photos and dimensions, dieline or CAD",
        "Two revision rounds at clay stage, one on the final",
        "Hero images at 3000 px square on white, marketplace-ready",
        "Loops cut down to 1:1, 9:16 and 16:9",
        "Files named and delivered in the formats agreed in the scope",
      ],
    },
    {
      name: "Design",
      reviewer: "Peer-reviewed against the brief",
      items: [
        "One design direction agreed before detailed work",
        "Two revision rounds",
        "Assets exported in the formats agreed in the scope",
        "Contrast and readability checked on mobile and desktop",
      ],
    },
  ],
  cta: {
    title: "Want this standard on your project?",
    subtitle: "Tell us what you need. We'll send a written scope with the checklist attached.",
    cta: { label: "Start a Conversation", href: "/contact" },
  },
} as const;

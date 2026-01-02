"use client";

import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";

const caseStudies = [
  {
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
    outcome:
      "Reduced production coordination time by 40%. Now used across 50+ shoots per month.",
  },
  {
    title: "Fintech ESOP Platform",
    client: "Financial services startup (India)",
    challenge:
      "Employees at startups couldn't access the value locked in their ESOPs. The platform needed to solve liquidity while navigating complex compliance requirements.",
    solution: [
      "Full-stack web platform for ESOP transactions",
      "KYC/AML integration",
      "Admin dashboard for operations",
      "Secure document management",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    outcome:
      "Successfully processed transactions worth multiple crores. Platform handles enterprise clients.",
  },
  {
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
];

export default function WorkPage() {
  return (
    <>
      <Hero
        title="Work that shipped"
        subtitle="A few projects we're proud of. Names anonymized where clients prefer it."
      />

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-site">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                {/* Placeholder for project image */}
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-soft-cream rounded-lg flex items-center justify-center border border-stone/10">
                    <span className="text-stone text-small">Project Preview</span>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <span className="text-small text-terracotta font-mono">
                    Case Study {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-heading-2 text-off-black mt-2 mb-2">
                    {study.title}
                  </h2>
                  <p className="text-body-sm text-stone mb-6">{study.client}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading text-heading-3 text-off-black mb-2">
                        The challenge
                      </h3>
                      <p className="text-body-sm text-stone">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-heading text-heading-3 text-off-black mb-2">
                        What we built
                      </h3>
                      <ul className="space-y-2">
                        {study.solution.map((item, i) => (
                          <li
                            key={i}
                            className="text-body-sm text-stone flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-heading text-heading-3 text-off-black mb-2">
                        Tech
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-soft-cream text-small text-stone rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-stone/10 pt-6">
                      <h3 className="font-heading text-heading-3 text-off-black mb-2">
                        The outcome
                      </h3>
                      <p className="text-body text-off-black font-medium">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want the full story on any of these?"
        subtitle="We're happy to walk through our process in detail. Let's chat."
        cta={{ label: "Let's Talk", href: "/contact" }}
      />
    </>
  );
}

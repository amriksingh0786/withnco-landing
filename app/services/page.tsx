"use client";

import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const services = [
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
      "Authentication, payments, integrations",
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
      "Not sure what to build first? Need a second opinion on architecture? We help you think through the hard decisions before committing resources.",
    features: [
      "Product roadmap prioritization",
      "Build vs. buy analysis",
      "Architecture review",
      "Vendor and tool selection",
    ],
    timeline: "1-2 week engagements",
  },
];

const techStack = {
  Frontend: ["React", "Next.js", "Vue", "Tailwind CSS", "TypeScript"],
  Backend: ["Node.js", "Python", "Go", "Encore.ts"],
  Mobile: ["React Native", "Flutter"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  "Cloud & Infra": ["AWS", "GCP", "DigitalOcean", "Vercel", "Railway"],
  DevOps: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="What we build"
        subtitle="Full-stack product development for startups and scaling teams. From first commit to Series B and beyond."
      />

      {/* Services */}
      <section className="section-padding">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white mb-12"
          >
            Our services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body-sm text-stone mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-small text-stone flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-small text-terracotta italic">
                    Timeline: {service.timeline}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-soft-cream dark:bg-dark-surface">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white mb-4">
              Technologies we love
            </h2>
            <p className="text-body text-stone max-w-2xl">
              We&apos;re pragmatic, not dogmatic. We choose tools that fit the
              problem, not the other way around. That said, here&apos;s what we
              reach for most often:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-warm-white dark:bg-dark-elevated text-small text-stone rounded border border-stone/10 dark:border-stone/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see what you need?"
        subtitle="We're flexible. Tell us what you're trying to build and we'll figure out if we can help."
        cta={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}

"use client";

import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Context first",
    content: `Every codebase has history. Every product decision had a reason — even the bad ones.

Before we propose anything, we dig in. We read your existing code. We talk to your team. We understand the "why" behind what exists. This isn't just due diligence — it's respect for the work that came before us.`,
  },
  {
    title: "Reuse over rebuild",
    content: `We're not here to pad invoices or rewrite everything in our favorite framework.

If something works, we keep it. If it can be fixed, we fix it. We only build new when it genuinely makes sense. Your budget is finite. We treat it like our own.`,
  },
  {
    title: "Partnership, not handoff",
    content: `We don't throw code over the wall and disappear.

We embed with your team. We're in your Slack. We join your standups if it helps. We communicate constantly — not because we have to, but because that's how good software gets built.`,
  },
  {
    title: "Speed without shortcuts",
    content: `Yes, we move fast. But not because we cut corners.

We're fast because we're experienced. We've seen these problems before. We make decisions quickly, avoid over-engineering, and ship working software every week. Speed and quality aren't tradeoffs — they're both the standard.`,
  },
  {
    title: "Honest counsel",
    content: `We'll tell you when an idea won't work. We'll push back on scope creep. We'll flag risks early.

We'd rather lose a project than build something we know will fail. Our reputation depends on your success, not on saying yes to everything.`,
  },
];

const phases = [
  {
    name: "Discovery",
    duration: "Usually 1 week",
    items: [
      "Kickoff call to understand your business, users, and goals",
      "Technical audit of existing systems (if applicable)",
      "Review of past decisions, constraints, and failed attempts",
      "Identification of quick wins and long-term priorities",
    ],
    outcome: "We know your world. You know if we're the right fit.",
  },
  {
    name: "Proposal",
    duration: "2-3 days after discovery",
    items: [
      "Clear scope document — what we'll build, what we won't",
      "Realistic timeline with milestones",
      "Transparent pricing — fixed or time-based, depending on scope",
      "Options if budget is tight: MVP vs. full build, phased approach",
    ],
    outcome: "No ambiguity. You know exactly what you're getting.",
  },
  {
    name: "Build",
    duration: "Ongoing — weeks to months",
    items: [
      "Weekly syncs (or daily, if you prefer)",
      "Async updates via Slack/Discord",
      "Access to our team — ask questions anytime",
      "Iterative delivery — working software every sprint, not a big reveal at the end",
    ],
    outcome: "You're never in the dark. Progress is visible and constant.",
  },
  {
    name: "Launch & Beyond",
    duration: "Ongoing",
    items: [
      "We don't disappear after deploy",
      "Production monitoring, bug fixes, performance tuning",
      "Roadmap planning for v2, v3, and beyond",
      "Scale the engagement up or down as your needs change",
    ],
    outcome: "A lasting partnership, not a transactional handoff.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <Hero
        title="We understand before we build"
        subtitle="Most agencies rush to solutions. We start with questions. What exists? What's working? What did the last team get wrong? Only then do we write code."
      />

      {/* Principles */}
      <section className="section-padding">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white mb-16"
          >
            How we think
          </motion.h2>

          <div className="space-y-16 md:space-y-24">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8"
              >
                <div className="md:col-span-4">
                  <span className="font-mono text-small text-terracotta">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mt-2">
                    {principle.title}
                  </h3>
                </div>
                <div className="md:col-span-8 prose-content">
                  {principle.content.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-body text-stone mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="section-padding bg-soft-cream dark:bg-dark-surface">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white mb-16"
          >
            What working with us looks like
          </motion.h2>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-warm-white dark:bg-dark-elevated rounded-lg p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <span className="font-mono text-small text-terracotta">
                      Phase {index + 1}
                    </span>
                    <h3 className="font-heading text-heading-2 text-off-black dark:text-warm-white">
                      {phase.name}
                    </h3>
                  </div>
                  <span className="text-small text-stone italic mt-2 md:mt-0">
                    {phase.duration}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {phase.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-body-sm text-stone flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-body font-medium text-off-black dark:text-warm-white border-t border-stone/10 dark:border-stone/20 pt-6">
                  <span className="text-terracotta">Outcome:</span>{" "}
                  {phase.outcome}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Curious how we'd approach your project?"
        subtitle="Let's talk through it. No commitment, no pitch deck required."
        cta={{ label: "Let's Talk", href: "/contact" }}
      />
    </>
  );
}

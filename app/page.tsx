"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Build",
    description:
      "From idea to launch. We take your vision and ship a product that works — lean, functional, ready for users. MVPs, web apps, mobile apps, APIs.",
  },
  {
    title: "Scale",
    description:
      "Already have something? We optimize, refactor, and grow it. Performance tuning, infrastructure, technical debt — we handle the unglamorous work that makes products last.",
  },
  {
    title: "Partner",
    description:
      "We don't just write code. We think alongside you, question assumptions, and treat your product like our own. Because for the time we're working together, it is.",
  },
];

const comparisonData = [
  {
    agency: "Builds what you ask for",
    withnco: "Questions first, then builds what you need",
  },
  {
    agency: "Hands off a deliverable",
    withnco: "Embeds with your team",
  },
  {
    agency: "Charges for every change request",
    withnco: "Adapts as your product evolves",
  },
  {
    agency: "Disappears after launch",
    withnco: "Stays to scale, optimize, iterate",
  },
  {
    agency: "Protects their process",
    withnco: "Fits into yours",
  },
  {
    agency: "Treats you like a ticket",
    withnco: "Treats you like a partner",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "Listen",
    description:
      "We start by understanding — your business, your users, your existing systems, your constraints. No solutions until we know the problem.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We propose what makes sense. Reuse what works. Build only what's needed. Clear scope, honest timelines, no surprises.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We ship iteratively. You see progress weekly, not monthly. Slack access, async updates, constant communication.",
  },
  {
    step: "04",
    title: "Grow",
    description:
      "Launch isn't the finish line. We stick around to optimize, scale, and evolve your product as your business grows.",
  },
];

const testimonials = [
  {
    quote:
      "They understood our codebase faster than devs who'd been here for months. Felt like an extension of our own team.",
    author: "Founder, Fintech Startup",
  },
  {
    quote: "No hand-holding needed. They just got it and shipped.",
    author: "CTO, B2B SaaS",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="We're the tech team behind yours"
        subtitle="Engineering partners who embed with your team, understand your context, and build like founders. Not vendors. Not contractors. Partners."
        cta={{ label: "Let's Talk", href: "/contact" }}
      />

      {/* Trust Bar */}
      <section className="py-8 border-y border-stone/10">
        <div className="container-site">
          <p className="text-center text-stone italic">
            For startups who&apos;d rather build than manage vendors
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-heading-2 md:text-heading-1 text-off-black mb-12 text-center"
          >
            Build. Scale. Partner.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="section-padding bg-soft-cream">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <h2 className="font-heading text-heading-2 md:text-heading-1 text-off-black mb-4">
              Not another dev shop
            </h2>
            <p className="text-body text-stone">
              You&apos;ve probably worked with agencies before. You know the
              drill: a flashy proposal, a team you never meet, missed deadlines,
              and a codebase you can&apos;t maintain. We do things differently.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-stone/20">
                  <th className="text-left py-4 pr-4 font-heading text-heading-3 text-stone">
                    The usual agency
                  </th>
                  <th className="text-left py-4 pl-4 font-heading text-heading-3 text-off-black">
                    withnco
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-stone/10"
                  >
                    <td className="py-4 pr-4 text-body-sm text-stone">
                      <div className="flex items-start gap-2">
                        <X className="w-5 h-5 text-stone/50 mt-0.5 flex-shrink-0" />
                        {row.agency}
                      </div>
                    </td>
                    <td className="py-4 pl-4 text-body-sm text-off-black font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        {row.withnco}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-heading-2 md:text-heading-1 text-off-black mb-4 text-center"
          >
            Simple, transparent, human
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <Link
              href="/approach"
              className="text-terracotta hover:underline underline-offset-4 inline-flex items-center gap-1"
            >
              See our full approach <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWork.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span className="font-mono text-6xl text-stone/20 font-bold">
                  {item.step}
                </span>
                <h3 className="font-heading text-heading-3 text-off-black mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-body-sm text-stone">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-off-black text-warm-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span className="text-6xl text-terracotta/30 absolute -top-4 -left-2">
                  &ldquo;
                </span>
                <p className="text-body md:text-lg italic mb-4 pl-6">
                  {testimonial.quote}
                </p>
                <footer className="text-stone pl-6">
                  — {testimonial.author}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let's build something together"
        subtitle="Whether you're validating an idea, scaling what works, or fixing what's broken — we're ready when you are."
        cta={{ label: "Start a Conversation", href: "/contact" }}
      />
    </>
  );
}

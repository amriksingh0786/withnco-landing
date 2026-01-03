"use client";

import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const culturePoints = [
  {
    title: "Small by design",
    description:
      "We're not trying to be a 100-person agency. Small means we can be selective about clients, maintain quality, and actually know everyone on the team.",
  },
  {
    title: "Remote, async-first",
    description:
      "We're based in India but work with clients globally. We overlap with US timezones and communicate async by default — no unnecessary meetings.",
  },
  {
    title: "Partners, not employees",
    description:
      "Everyone at withnco has ownership in the work. We don't have \"resources\" — we have people who give a damn.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="We're withnco"
        subtitle="A small, senior team that builds like founders. Because we've been founders."
      />

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-4">
              <h2 className="font-heading text-heading-2 text-off-black dark:text-warm-white">
                Why we started this
              </h2>
            </div>
            <div className="lg:col-span-8 prose-content space-y-6">
              <p className="text-body text-stone">
                We&apos;ve been on your side of the table.
              </p>
              <p className="text-body text-stone">
                Shipping products under pressure. Working with limited runway.
                Making hard tradeoffs between speed and quality. Dealing with
                agencies that over-promised and under-delivered.
              </p>
              <p className="text-body text-stone">
                So we built withnco to be the partner we wished we had.
              </p>
              <p className="text-body text-stone">
                No bloated teams padding hours. No offshore roulette where you
                never know who&apos;s touching your code. No account managers who
                don&apos;t understand what an API is.
              </p>
              <p className="text-body text-stone">
                Just experienced builders who&apos;ve shipped real products, who
                understand startup constraints, and who care about your outcome
                as much as you do.
              </p>
              <p className="text-body text-off-black dark:text-warm-white font-medium">
                We stay small intentionally. We choose clients carefully.
                We&apos;d rather do fewer things well than scale for scale&apos;s
                sake.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-soft-cream dark:bg-dark-surface">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white mb-12"
          >
            Meet the team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-warm-white dark:bg-dark-elevated rounded-lg p-8"
            >
              {/* Placeholder for photo */}
              <div className="w-24 h-24 bg-stone/20 rounded-full mb-6" />

              <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white">Ami</h3>
              <p className="text-terracotta text-body-sm mb-4">
                Founder & Lead Engineer
              </p>
              <p className="text-body-sm text-stone mb-4">
                4+ years building products in fintech, SaaS, and enterprise.
                Previously founding engineer at Incentiv, where I built systems
                handling complex financial transactions. Before that, led
                engineering across multiple early-stage startups.
              </p>
              <p className="text-body-sm text-stone mb-6">
                I care about code quality, clear communication, and building
                things that actually work. Not building things that look good in
                a demo but fall apart in production.
              </p>
              <p className="text-small text-stone italic mb-4">
                When I&apos;m not coding: exploring new places, writing, and geeking
                out on system design.
              </p>
              <a
                href="https://linkedin.com/in/amriksingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta hover:underline underline-offset-4 inline-flex items-center gap-1 text-small"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-warm-white dark:bg-dark-elevated rounded-lg p-8 flex flex-col justify-center items-center text-center"
            >
              <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-4">
                Open positions
              </h3>
              <p className="text-body-sm text-stone mb-6">
                We&apos;re always looking for senior engineers who think like
                owners. If that&apos;s you, say hi.
              </p>
              <Link
                href="/contact"
                className="text-terracotta hover:underline underline-offset-4"
              >
                Get in touch →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white mb-12"
          >
            How we work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-3">
                  {point.title}
                </h3>
                <p className="text-body-sm text-stone">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Enough about us"
        subtitle="Tell us about what you're building. We're all ears."
        cta={{ label: "Start a Conversation", href: "/contact" }}
      />
    </>
  );
}

"use client";

import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { APPROACH } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ApproachPage() {
  return (
    <>
      <Hero title={APPROACH.hero.title} subtitle={APPROACH.hero.subtitle} />

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
            {APPROACH.principlesHeading}
          </motion.h2>

          <div className="space-y-16 md:space-y-24">
            {APPROACH.principles.map((principle, index) => (
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
                    {String(index + 1).padStart(2, "0")}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8"
          >
            <div className="md:col-start-5 md:col-span-8">
              <Link
                href="/definition-of-done"
                className="text-terracotta hover:underline underline-offset-4 inline-flex items-center gap-1"
              >
                See our definition of done
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
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
            {APPROACH.phasesHeading}
          </motion.h2>

          <div className="space-y-12">
            {APPROACH.phases.map((phase, index) => (
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
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="text-body-sm text-stone flex items-start gap-3"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0"
                        aria-hidden="true"
                      />
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
        title={APPROACH.cta.title}
        subtitle={APPROACH.cta.subtitle}
        cta={APPROACH.cta.cta}
      />
    </>
  );
}

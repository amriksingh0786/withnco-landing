"use client";

import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ABOUT } from "@/lib/content";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Hero title={ABOUT.hero.title} subtitle={ABOUT.hero.subtitle} />

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
                {ABOUT.story.heading}
              </h2>
            </div>
            <div className="lg:col-span-8 prose-content space-y-6">
              {ABOUT.story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-stone">
                  {paragraph}
                </p>
              ))}
              <p className="text-body text-off-black dark:text-warm-white font-medium">
                {ABOUT.story.closing}
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
            {ABOUT.teamHeading}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-warm-white dark:bg-dark-elevated rounded-lg p-6 sm:p-8 border border-stone/10 dark:border-stone/20"
            >
              <div
                aria-hidden="true"
                className="w-24 h-24 rounded-full mb-6 flex items-center justify-center bg-terracotta/10 dark:bg-terracotta/20 border border-terracotta/30 dark:border-terracotta/40 font-heading text-heading-3 text-terracotta select-none"
              >
                {ABOUT.lead.initials}
              </div>

              <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white">
                {ABOUT.lead.name}
              </h3>
              <p className="text-terracotta text-body-sm mb-4">
                {ABOUT.lead.role}
              </p>

              <div className="space-y-4 mb-6">
                {ABOUT.lead.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body-sm text-stone">
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {ABOUT.lead.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terracotta hover:underline underline-offset-4 inline-flex items-center gap-1 text-small"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-warm-white dark:bg-dark-elevated rounded-lg p-6 sm:p-8 border border-stone/10 dark:border-stone/20 flex flex-col justify-center"
            >
              <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-4">
                The team
              </h3>
              <p className="text-body text-stone">{ABOUT.teamLine}</p>
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
            {ABOUT.cultureHeading}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT.culture.map((point, index) => (
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
        title={ABOUT.cta.title}
        subtitle={ABOUT.cta.subtitle}
        cta={ABOUT.cta.cta}
      />
    </>
  );
}

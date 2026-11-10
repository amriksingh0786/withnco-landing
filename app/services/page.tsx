"use client";

import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import {
  ADD_ONS,
  ENGINEERING_SERVICES,
  INR_NOTE,
  OFFERS,
  TECH_STACK,
  fromPrice,
} from "@/lib/offers";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const linkClass =
  "text-terracotta hover:underline underline-offset-4 inline-flex items-center gap-1";

const sectionHeading =
  "font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white";

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="What we do"
        subtitle="Four fixed-scope studio offers with prices up front, a few add-ons, and custom engineering for bigger builds."
      />

      {/* Studio offers */}
      <section className="section-padding">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${sectionHeading} mb-12`}
          >
            Studio offers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OFFERS.map((offer, index) => (
              <motion.div
                key={offer.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col">
                  <CardTitle>{offer.name}</CardTitle>
                  <CardDescription className="mb-4">
                    {offer.summary}
                  </CardDescription>
                  <p className="text-small text-stone mb-6">
                    <span className="font-medium text-off-black dark:text-warm-white">
                      Best for:
                    </span>{" "}
                    {offer.bestFor}
                  </p>
                  <div className="mt-auto pt-6 border-t border-stone/10 dark:border-stone/20">
                    <p className="font-heading text-heading-3 text-off-black dark:text-warm-white">
                      {fromPrice(offer)}
                    </p>
                    <p className="text-small text-stone mt-1">
                      {offer.fromWhat}
                    </p>
                    <Link href={offer.href} className={`${linkClass} mt-4`}>
                      See details
                      <span className="sr-only">: {offer.name}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-small text-stone"
          >
            {INR_NOTE}
          </motion.p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-soft-cream dark:bg-dark-surface">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${sectionHeading} mb-12`}
          >
            Add-ons
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADD_ONS.map((addOn, index) => (
              <motion.div
                key={addOn.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full bg-warm-white dark:bg-dark-elevated rounded-lg p-6 border border-stone/10 dark:border-stone/20 flex flex-col"
              >
                <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-3">
                  {addOn.name}
                </h3>
                <p className="text-body-sm text-stone mb-6">
                  {addOn.description}
                </p>
                <p className="mt-auto pt-4 border-t border-stone/10 dark:border-stone/20 font-heading text-body text-terracotta">
                  {addOn.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom builds */}
      <section id="custom-builds" className="section-padding">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className={`${sectionHeading} mb-4`}>Custom builds</h2>
            <p className="text-body text-stone max-w-2xl">
              Quoted after a short scoping call.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ENGINEERING_SERVICES.map((service, index) => (
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
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-small text-stone flex items-start gap-2"
                      >
                        <span
                          className="w-1 h-1 rounded-full bg-terracotta mt-2 flex-shrink-0"
                          aria-hidden="true"
                        />
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
            <h2 className={`${sectionHeading} mb-4`}>Technologies we love</h2>
            <p className="text-body text-stone max-w-2xl">
              We&apos;re pragmatic, not dogmatic. We choose tools that fit the
              problem, not the other way around. That said, here&apos;s what we
              reach for most often:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(TECH_STACK).map(([category, technologies], index) => (
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

      {/* Definition of done */}
      <section className="py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container-site text-center"
        >
          <p className="text-body text-stone text-balance">
            Every deliverable passes our definition of done before it reaches
            you.{" "}
            <Link href="/definition-of-done" className={linkClass}>
              See the checklists
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </p>
        </motion.div>
      </section>

      <CTASection
        title="Don't see what you need?"
        subtitle="We're flexible. Tell us what you're trying to build and we'll figure out if we can help."
        cta={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}

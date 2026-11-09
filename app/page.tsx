"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { HOME } from "@/lib/content";
import { OFFERS, INR_NOTE, fromPrice } from "@/lib/offers";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";

const linkClass =
  "text-terracotta hover:underline underline-offset-4 inline-flex items-center gap-1";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        title={HOME.hero.title}
        subtitle={HOME.hero.subtitle}
        cta={HOME.hero.cta}
      />

      {/* Trust Bar */}
      <section className="py-8 border-y border-stone/10 dark:border-stone/20">
        <div className="container-site">
          <p className="text-center text-stone italic text-balance">
            {HOME.trustBar}
          </p>
        </div>
      </section>

      {/* Offers */}
      <section className="section-padding">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-12 text-center"
          >
            <h2 className="font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white mb-4 text-balance">
              {HOME.offers.heading}
            </h2>
            <p className="text-body text-stone">{HOME.offers.intro}</p>
          </motion.div>

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
                  <CardDescription className="mb-6">
                    {offer.summary}
                  </CardDescription>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center space-y-3"
          >
            <p className="text-small text-stone">{INR_NOTE}</p>
            <p className="text-body-sm text-stone">
              {HOME.offers.biggerBuilds.text}{" "}
              <Link href={HOME.offers.biggerBuilds.href} className={linkClass}>
                {HOME.offers.biggerBuilds.linkLabel}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Difference */}
      <section className="section-padding bg-soft-cream dark:bg-dark-surface">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <h2 className="font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white mb-4">
              {HOME.comparison.heading}
            </h2>
            <p className="text-body text-stone">{HOME.comparison.intro}</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-stone/20">
                  <th className="text-left py-4 pr-4 font-heading text-heading-3 text-stone">
                    The usual agency
                  </th>
                  <th className="text-left py-4 pl-4 font-heading text-heading-3 text-off-black dark:text-warm-white">
                    withnco
                  </th>
                </tr>
              </thead>
              <tbody>
                {HOME.comparison.rows.map((row, index) => (
                  <motion.tr
                    key={row.agency}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-stone/10 dark:border-stone/20"
                  >
                    <td className="py-4 pr-4 text-body-sm text-stone">
                      <div className="flex items-start gap-2">
                        <X
                          className="w-5 h-5 text-stone/50 mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        {row.agency}
                      </div>
                    </td>
                    <td className="py-4 pl-4 text-body-sm text-off-black dark:text-warm-white font-medium">
                      <div className="flex items-start gap-2">
                        <Check
                          className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
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
            className="font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white mb-4 text-center"
          >
            {HOME.howWeWork.heading}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <Link href="/approach" className={linkClass}>
              {HOME.howWeWork.linkLabel}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOME.howWeWork.steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span
                  className="font-mono text-6xl text-stone/20 font-bold"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-body-sm text-stone">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-off-black dark:bg-dark-elevated text-warm-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {HOME.testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span
                  className="text-6xl text-terracotta/30 absolute -top-4 -left-2"
                  aria-hidden="true"
                >
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
        title={HOME.cta.title}
        subtitle={HOME.cta.subtitle}
        cta={HOME.cta.cta}
      />
    </>
  );
}

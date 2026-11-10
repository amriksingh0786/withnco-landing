"use client";

import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { CONTACT } from "@/lib/content";
import { INR_NOTE, fromPrice, offerBySlug, type OfferSlug } from "@/lib/offers";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Clock, X } from "lucide-react";
import Link from "next/link";

interface OfferPageProps {
  slug: OfferSlug;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
} as const;

const sectionHeading =
  "font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white";

const linkClass =
  "text-terracotta hover:underline underline-offset-4 inline-flex items-center gap-1";

function Bullet() {
  return (
    <span
      className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0"
      aria-hidden="true"
    />
  );
}

export function OfferPage({ slug }: OfferPageProps) {
  const offer = offerBySlug(slug);
  const quoteHref = `/contact?offer=${offer.slug}`;

  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-small text-terracotta mb-4"
          >
            {offer.name}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-heading-1 md:text-display text-off-black dark:text-warm-white mb-6 text-balance mx-auto max-w-4xl"
          >
            {offer.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-body md:text-lg text-stone max-w-2xl mx-auto"
          >
            {offer.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col items-center gap-8"
          >
            <p className="inline-flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 rounded-lg border border-stone/10 dark:border-stone/20 bg-soft-cream dark:bg-dark-surface px-5 py-3">
              <span className="font-heading text-heading-3 text-off-black dark:text-warm-white">
                {fromPrice(offer)}
              </span>
              <span className="text-small text-stone">{offer.fromWhat}</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href={quoteHref} size="lg">
                Get a quote
              </Button>
              <Button href="#pricing" variant="secondary" size="lg">
                See pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best for */}
      <section className="py-8 border-y border-stone/10 dark:border-stone/20">
        <div className="container-site">
          <p className="text-center text-body-sm text-stone text-balance max-w-3xl mx-auto">
            <span className="font-medium text-off-black dark:text-warm-white">
              Best for:
            </span>{" "}
            {offer.bestFor}
          </p>
        </div>
      </section>

      {/* Scope */}
      <section className="section-padding">
        <div className="container-site space-y-16 md:space-y-20">
          {offer.sections.map((section, index) => (
            <motion.article
              key={section.heading}
              {...fadeUp}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
            >
              <div className="md:col-span-4">
                <span className="font-mono text-small text-terracotta">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-heading text-heading-3 text-off-black dark:text-warm-white mt-2 text-balance">
                  {section.heading}
                </h2>
              </div>
              <div className="md:col-span-8 prose-content">
                {section.intro && (
                  <p className="text-body text-stone mb-4">{section.intro}</p>
                )}
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-body-sm text-stone flex items-start gap-3"
                    >
                      <Bullet />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="section-padding bg-soft-cream dark:bg-dark-surface scroll-mt-20"
      >
        <div className="container-site">
          <motion.h2 {...fadeUp} className={`${sectionHeading} mb-12`}>
            Pricing
          </motion.h2>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-warm-white dark:bg-dark-elevated rounded-lg border border-stone/10 dark:border-stone/20 px-6 md:px-8"
          >
            {/* Below sm the table stacks (display: block), which drops its implicit
                table semantics in some browsers, so the roles are explicit. The
                column headers are hidden there too, so each cell carries a
                screen-reader label that is removed again from sm up. */}
            <table role="table" className="w-full text-left block sm:table">
              <thead role="rowgroup" className="hidden sm:table-header-group">
                <tr
                  role="row"
                  className="border-b border-stone/10 dark:border-stone/20"
                >
                  <th
                    role="columnheader"
                    scope="col"
                    className="py-4 pr-4 text-small font-medium text-stone"
                  >
                    Item
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    className="py-4 px-4 text-small font-medium text-stone"
                  >
                    Price
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    className="py-4 pl-4 text-small font-medium text-stone"
                  >
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup" className="block sm:table-row-group">
                {offer.prices.map((line) => (
                  <tr
                    key={line.item}
                    role="row"
                    className="block sm:table-row py-4 sm:py-0 border-b last:border-b-0 border-stone/10 dark:border-stone/20"
                  >
                    <th
                      role="rowheader"
                      scope="row"
                      className="block sm:table-cell sm:py-5 sm:pr-4 text-body-sm font-medium text-off-black dark:text-warm-white align-top"
                    >
                      {line.item}
                    </th>
                    <td
                      role="cell"
                      className="block sm:table-cell mt-1 sm:mt-0 sm:py-5 sm:px-4 font-heading text-body text-terracotta sm:whitespace-nowrap align-top"
                    >
                      <span className="sr-only sm:hidden">Price: </span>
                      {line.price}
                    </td>
                    <td
                      role="cell"
                      className={`${
                        line.note ? "block" : "hidden"
                      } sm:table-cell mt-1 sm:mt-0 sm:py-5 sm:pl-4 text-small text-stone align-top`}
                    >
                      {line.note && (
                        <span className="sr-only sm:hidden">Notes: </span>
                      )}
                      {line.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-small text-stone"
          >
            {INR_NOTE}
          </motion.p>
        </div>
      </section>

      {/* Timeline and team */}
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div {...fadeUp}>
            <h2 className={`${sectionHeading} mb-8`}>Timeline</h2>
            <ul className="space-y-4">
              {offer.timeline.map((line) => (
                <li
                  key={line}
                  className="text-body-sm text-stone flex items-start gap-3"
                >
                  <Clock
                    className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
            <h2 className={`${sectionHeading} mb-8`}>Who does what</h2>
            <dl className="border-t border-stone/10 dark:border-stone/20">
              {offer.team.map((member) => (
                <div
                  key={member.role}
                  className="py-4 border-b border-stone/10 dark:border-stone/20 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4"
                >
                  <dt className="text-body-sm font-medium text-off-black dark:text-warm-white">
                    {member.role}
                  </dt>
                  <dd className="sm:col-span-2 text-body-sm text-stone">
                    {member.does}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Not included and definition of done */}
      <section className="section-padding bg-soft-cream dark:bg-dark-surface">
        <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div {...fadeUp}>
            <h2 className={`${sectionHeading} mb-8`}>Not included</h2>
            <ul className="space-y-4">
              {offer.notIncluded.map((item) => (
                <li
                  key={item}
                  className="text-body-sm text-stone flex items-start gap-3"
                >
                  <X
                    className="w-5 h-5 text-stone/50 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-warm-white dark:bg-dark-elevated rounded-lg border border-stone/10 dark:border-stone/20 p-8"
          >
            <ClipboardCheck
              className="w-8 h-8 text-terracotta mb-4"
              aria-hidden="true"
            />
            <p className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-4 text-balance">
              Every deliverable passes our definition of done before it reaches
              you.
            </p>
            <Link href="/definition-of-done" className={linkClass}>
              See the checklists
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.h2 {...fadeUp} className={`md:col-span-4 ${sectionHeading}`}>
            FAQ
          </motion.h2>
          <div className="md:col-span-8 space-y-8">
            {offer.faq.map((item, index) => (
              <motion.div
                key={item.q}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="pb-8 border-b last:border-b-0 last:pb-0 border-stone/10 dark:border-stone/20"
              >
                <h3 className="text-body font-medium text-off-black dark:text-warm-white mb-2">
                  {item.q}
                </h3>
                <p className="text-body-sm text-stone">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={CONTACT.offerCta.title}
        subtitle={CONTACT.offerCta.subtitle}
        cta={{ label: "Get a quote", href: quoteHref }}
      />
    </>
  );
}

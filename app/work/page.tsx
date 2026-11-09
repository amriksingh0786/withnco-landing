"use client";

import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { WORK } from "@/lib/content";
import { motion } from "framer-motion";

/** Case studies are numbered among themselves; concept pieces carry a badge instead. */
const entries = WORK.items.map((item, index) => ({
  item,
  caseNumber:
    item.kind === "case"
      ? WORK.items.slice(0, index + 1).filter((i) => i.kind === "case").length
      : null,
}));

const hasConcepts = WORK.items.some((item) => item.kind === "concept");

function ConceptBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-terracotta bg-terracotta/10 dark:bg-terracotta/20 px-3 py-1 font-mono text-small font-medium uppercase tracking-wider text-terracotta ${className}`}
    >
      Concept
    </span>
  );
}

export default function WorkPage() {
  return (
    <>
      <Hero title={WORK.hero.title} subtitle={WORK.hero.subtitle} />

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-site">
          {hasConcepts && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg border border-stone/10 dark:border-stone/20 bg-soft-cream dark:bg-dark-surface px-4 py-3 sm:px-6 sm:py-4"
            >
              <ConceptBadge className="self-start sm:self-auto shrink-0" />
              <p className="text-body-sm text-stone">{WORK.conceptNote}</p>
            </motion.div>
          )}

          <div className="space-y-16">
            {entries.map(({ item: study, caseNumber }) => {
              const isConcept = study.kind === "concept";

              return (
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
                    <div
                      className={`relative aspect-[4/3] bg-soft-cream dark:bg-dark-surface rounded-lg flex items-center justify-center border ${
                        isConcept
                          ? "border-terracotta/40 dark:border-terracotta/50"
                          : "border-stone/10 dark:border-stone/20"
                      }`}
                    >
                      {isConcept && (
                        <ConceptBadge className="absolute top-4 left-4" />
                      )}
                      <span className="text-stone text-small">
                        Project Preview
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    {isConcept ? (
                      <ConceptBadge />
                    ) : (
                      <span className="text-small text-terracotta font-mono">
                        Case Study {String(caseNumber).padStart(2, "0")}
                      </span>
                    )}
                    <h2 className="font-heading text-heading-2 text-off-black dark:text-warm-white mt-2 mb-2">
                      {study.title}
                    </h2>
                    <p className="text-body-sm text-stone mb-6">
                      {study.client}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-2">
                          The challenge
                        </h3>
                        <p className="text-body-sm text-stone">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-2">
                          What we built
                        </h3>
                        <ul className="space-y-2">
                          {study.solution.map((point) => (
                            <li
                              key={point}
                              className="text-body-sm text-stone flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-2">
                          Tech
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-soft-cream dark:bg-dark-surface text-small text-stone rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-stone/10 dark:border-stone/20 pt-6">
                        <h3 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-2">
                          The outcome
                        </h3>
                        <p className="text-body text-off-black dark:text-warm-white font-medium">
                          {study.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={WORK.cta.title}
        subtitle={WORK.cta.subtitle}
        cta={WORK.cta.cta}
      />
    </>
  );
}

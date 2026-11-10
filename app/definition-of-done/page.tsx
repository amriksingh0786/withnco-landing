"use client";

import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Card } from "@/components/ui/Card";
import { DEFINITION_OF_DONE } from "@/lib/content";
import { motion } from "framer-motion";
import { Check, UserCheck } from "lucide-react";

export default function DefinitionOfDonePage() {
  const { hero, everyProject, disciplines, cta } = DEFINITION_OF_DONE;

  return (
    <>
      <Hero title={hero.title} subtitle={hero.subtitle} />

      {/* On every project */}
      <section className="section-padding bg-soft-cream dark:bg-dark-surface">
        <div className="container-site grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 font-heading text-heading-2 md:text-heading-1 text-off-black dark:text-warm-white text-balance"
          >
            {everyProject.heading}
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-8 space-y-4"
          >
            {everyProject.items.map((item) => (
              <li
                key={item}
                className="text-body text-stone flex items-start gap-3"
              >
                <Check
                  className="w-5 h-5 text-terracotta mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Checklists by discipline */}
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-8">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={discipline.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <span className="font-mono text-small text-terracotta">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-heading text-heading-3 text-off-black dark:text-warm-white mt-2 mb-2">
                  {discipline.name}
                </h2>
                <p className="text-small text-stone italic flex items-center gap-2 mb-6">
                  <UserCheck
                    className="w-4 h-4 text-terracotta flex-shrink-0"
                    aria-hidden="true"
                  />
                  {discipline.reviewer}
                </p>
                <ul className="space-y-3 border-t border-stone/10 dark:border-stone/20 pt-6">
                  {discipline.items.map((item) => (
                    <li
                      key={item}
                      className="text-body-sm text-stone flex items-start gap-3"
                    >
                      <Check
                        className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection title={cta.title} subtitle={cta.subtitle} cta={cta.cta} />
    </>
  );
}

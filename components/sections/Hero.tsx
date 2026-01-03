"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    label: string;
    href: string;
  };
  centered?: boolean;
}

export function Hero({ title, subtitle, cta, centered = true }: HeroProps) {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className={`container-site ${centered ? "text-center" : ""}`}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`font-heading text-heading-1 md:text-display text-off-black dark:text-warm-white mb-6 text-balance ${
            centered ? "mx-auto max-w-4xl" : ""
          }`}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-body md:text-lg text-stone max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Button href={cta.href} size="lg">
              {cta.label}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

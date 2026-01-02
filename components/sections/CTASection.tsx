"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface CTASectionProps {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
  };
}

export function CTASection({ title, subtitle, cta }: CTASectionProps) {
  return (
    <section className="section-padding bg-soft-cream">
      <div className="container-site text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-heading-2 md:text-heading-1 text-off-black mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-body text-stone max-w-xl mx-auto mb-8"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button href={cta.href} size="lg">
            {cta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

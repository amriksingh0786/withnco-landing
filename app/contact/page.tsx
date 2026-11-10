"use client";

import { Hero } from "@/components/sections/Hero";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/content";
import {
  CONTACT_BUDGET_OPTIONS,
  CONTACT_SERVICE_OPTIONS,
  SCOPE_SCREEN,
} from "@/lib/offers";
import { SITE, hasBookingUrl } from "@/lib/site";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const serviceValues = new Set(CONTACT_SERVICE_OPTIONS.map((o) => o.value));

const sidebarCard = "bg-soft-cream dark:bg-dark-surface rounded-lg p-6";
const sidebarHeading =
  "font-heading text-heading-3 text-off-black dark:text-warm-white mb-4";
const externalLink =
  "text-terracotta hover:underline underline-offset-4 inline-flex items-center gap-1 break-all";

const field = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
};

export default function ContactPage() {
  const [service, setService] = useState("");
  const [scope, setScope] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const showBooking = hasBookingUrl();

  // Preselect the service from /contact?offer=<slug>. Read on the client so the
  // page stays statically rendered (useSearchParams would need a Suspense boundary).
  useEffect(() => {
    const offer = new URLSearchParams(window.location.search).get("offer");
    if (offer && serviceValues.has(offer)) {
      setService(offer);
    }
  }, []);

  // The form is replaced by the success message, so move focus to its heading.
  useEffect(() => {
    if (isSuccess) {
      successHeadingRef.current?.focus();
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: field(formData, "name"),
      email: field(formData, "email"),
      company: field(formData, "company"),
      service: field(formData, "service"),
      message: field(formData, "message"),
      budget: field(formData, "budget"),
      scope: field(formData, "scope"),
      source: field(formData, "source"),
      website: field(formData, "website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      window.scrollTo({ top: 0 });
    } catch {
      setError(CONTACT.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="section-padding pt-32 md:pt-40 min-h-[60vh] flex items-center">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            role="status"
          >
            <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-terracotta" aria-hidden="true" />
            </div>
            <h1
              ref={successHeadingRef}
              tabIndex={-1}
              className="font-heading text-heading-1 text-off-black dark:text-warm-white mb-4 outline-none"
            >
              {CONTACT.success.title}
            </h1>
            <p className="text-body text-stone max-w-md mx-auto">
              {CONTACT.success.body}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Hero title={CONTACT.hero.title} subtitle={CONTACT.hero.subtitle} />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7 min-w-0">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    id="name"
                    name="name"
                    label="Your name"
                    required
                    maxLength={200}
                    autoComplete="name"
                    placeholder="Jane Doe"
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    required
                    maxLength={320}
                    autoComplete="email"
                    placeholder="jane@company.com"
                  />
                </div>

                <Input
                  id="company"
                  name="company"
                  label="Company (optional)"
                  maxLength={200}
                  autoComplete="organization"
                  placeholder="Acme Inc."
                />

                <Select
                  id="service"
                  name="service"
                  label="What do you need help with?"
                  options={[...CONTACT_SERVICE_OPTIONS]}
                  required
                  placeholder="Select a service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />

                <Textarea
                  id="message"
                  name="message"
                  label="Tell us more"
                  required
                  maxLength={5000}
                  placeholder="What are you building? What's the challenge? Any context helps."
                  rows={5}
                />

                <div>
                  <Select
                    id="budget"
                    name="budget"
                    label="Budget range (optional)"
                    options={[...CONTACT_BUDGET_OPTIONS]}
                    placeholder="Select a range"
                    defaultValue=""
                    aria-describedby="budget-note"
                  />
                  <p id="budget-note" className="mt-2 text-small text-stone">
                    {CONTACT.budgetNote}
                  </p>
                </div>

                <RadioGroup
                  name="scope"
                  legend={SCOPE_SCREEN.question}
                  options={SCOPE_SCREEN.options}
                  value={scope}
                  onChange={setScope}
                  required
                />

                <Input
                  id="source"
                  name="source"
                  label="How did you find us? (optional)"
                  maxLength={300}
                  placeholder="Google, referral, Twitter..."
                />

                {/* Honeypot: off-screen and out of the tab order; people never fill it. */}
                <div
                  className="absolute -left-[9999px] w-px h-px overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-small" role="alert">
                    {error}
                  </p>
                )}

                <div>
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="mt-4 text-small text-stone">
                    {CONTACT.privacyNote}{" "}
                    <Link
                      href="/privacy"
                      className="text-terracotta hover:underline underline-offset-4"
                    >
                      Privacy policy
                    </Link>
                  </p>
                </div>
              </motion.form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-8"
              >
                {/* Email */}
                <div className={sidebarCard}>
                  <h2 className={sidebarHeading}>Prefer email?</h2>
                  <p className="text-body-sm text-stone mb-2">
                    Reach out directly:
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-terracotta hover:underline underline-offset-4 break-all"
                  >
                    {SITE.email}
                  </a>
                </div>

                {/* WhatsApp (India) */}
                <div className={sidebarCard}>
                  <h2 className={sidebarHeading}>
                    In India? Message us on WhatsApp
                  </h2>
                  <a
                    href={SITE.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLink}
                  >
                    {SITE.whatsapp.display}
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    <span className="sr-only">(opens WhatsApp in a new tab)</span>
                  </a>
                </div>

                {/* Booking link, shown only once a scheduling URL is configured */}
                {showBooking && (
                  <div className={sidebarCard}>
                    <h2 className={sidebarHeading}>Book a call</h2>
                    <a
                      href={SITE.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalLink}
                    >
                      Choose a time
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                )}

                {/* What happens next */}
                <div className={sidebarCard}>
                  <h2 className={sidebarHeading}>What happens next</h2>
                  <ol className="space-y-3">
                    {CONTACT.nextSteps.map((step, index) => (
                      <li key={step} className="text-body-sm text-stone flex gap-3">
                        <span className="font-mono text-terracotta">
                          {index + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-6">
                    FAQ
                  </h2>
                  <div className="space-y-6">
                    {CONTACT.faqs.map((faq) => (
                      <div key={faq.question}>
                        <h3 className="text-body-sm font-medium text-off-black dark:text-warm-white mb-1">
                          {faq.question}
                        </h3>
                        <p className="text-small text-stone">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

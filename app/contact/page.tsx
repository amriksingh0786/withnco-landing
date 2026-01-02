"use client";

import { Hero } from "@/components/sections/Hero";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

const serviceOptions = [
  { value: "mvp", label: "Building an MVP" },
  { value: "web", label: "Web application" },
  { value: "mobile", label: "Mobile app" },
  { value: "scaling", label: "Scaling / optimization" },
  { value: "legacy", label: "Fixing existing codebase" },
  { value: "consulting", label: "Tech strategy / consulting" },
  { value: "other", label: "Something else" },
];

const budgetOptions = [
  { value: "under-10k", label: "Less than $10k" },
  { value: "10k-25k", label: "$10k - $25k" },
  { value: "25k-50k", label: "$25k - $50k" },
  { value: "50k-100k", label: "$50k - $100k" },
  { value: "100k+", label: "$100k+" },
  { value: "unsure", label: "Not sure yet" },
];

const faqs = [
  {
    question: "How quickly can you start?",
    answer:
      "Usually within 1-2 weeks, depending on current engagements.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes — we love working with founders from idea stage. We'll help you scope something that fits your budget.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "Depends on the project. Fixed price for well-defined scopes, time-based for ongoing work. Always transparent, no surprises.",
  },
  {
    question: "Where are you located?",
    answer:
      "Based in India, but we work with clients globally. We're flexible with timezones.",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
      budget: formData.get("budget"),
      source: formData.get("source"),
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
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <section className="section-padding pt-32 md:pt-40 min-h-[60vh] flex items-center">
          <div className="container-site text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-terracotta" />
              </div>
              <h1 className="font-heading text-heading-1 text-off-black mb-4">
                Got it.
              </h1>
              <p className="text-body text-stone max-w-md mx-auto">
                We&apos;ll be in touch within 24 hours. Talk soon.
              </p>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Hero
        title="Let's figure this out together"
        subtitle="No pitch decks. No formalities. Just tell us what you're working on and we'll see if we can help."
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
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
                    placeholder="Jane Doe"
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    required
                    placeholder="jane@company.com"
                  />
                </div>

                <Input
                  id="company"
                  name="company"
                  label="Company (optional)"
                  placeholder="Acme Inc."
                />

                <Select
                  id="service"
                  name="service"
                  label="What do you need help with?"
                  options={serviceOptions}
                  required
                  placeholder="Select a service"
                  defaultValue=""
                />

                <Textarea
                  id="message"
                  name="message"
                  label="Tell us more"
                  required
                  placeholder="What are you building? What's the challenge? Any context helps."
                  rows={5}
                />

                <Select
                  id="budget"
                  name="budget"
                  label="Budget range (optional)"
                  options={budgetOptions}
                  placeholder="Select a range"
                  defaultValue=""
                />

                <Input
                  id="source"
                  name="source"
                  label="How did you find us? (optional)"
                  placeholder="Google, referral, Twitter..."
                />

                {error && (
                  <p className="text-red-500 text-small">{error}</p>
                )}

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-8"
              >
                {/* Alternative Contact */}
                <div className="bg-soft-cream rounded-lg p-6">
                  <h3 className="font-heading text-heading-3 text-off-black mb-4">
                    Prefer email?
                  </h3>
                  <p className="text-body-sm text-stone mb-2">
                    Reach out directly:
                  </p>
                  <a
                    href="mailto:hello@withnco.studio"
                    className="text-terracotta hover:underline underline-offset-4"
                  >
                    hello@withnco.studio
                  </a>
                </div>

                {/* What happens next */}
                <div className="bg-soft-cream rounded-lg p-6">
                  <h3 className="font-heading text-heading-3 text-off-black mb-4">
                    What happens next
                  </h3>
                  <ol className="space-y-3">
                    <li className="text-body-sm text-stone flex gap-3">
                      <span className="font-mono text-terracotta">1.</span>
                      We&apos;ll respond within 24 hours (usually faster)
                    </li>
                    <li className="text-body-sm text-stone flex gap-3">
                      <span className="font-mono text-terracotta">2.</span>
                      If there&apos;s a potential fit, we&apos;ll schedule a 30-minute
                      call
                    </li>
                    <li className="text-body-sm text-stone flex gap-3">
                      <span className="font-mono text-terracotta">3.</span>
                      No hard sell — just an honest conversation about whether
                      we can help
                    </li>
                  </ol>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="font-heading text-heading-3 text-off-black mb-6">
                    FAQ
                  </h3>
                  <div className="space-y-6">
                    {faqs.map((faq) => (
                      <div key={faq.question}>
                        <h4 className="text-body-sm font-medium text-off-black mb-1">
                          {faq.question}
                        </h4>
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

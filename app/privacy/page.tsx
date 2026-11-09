"use client";

import { Hero } from "@/components/sections/Hero";
import { SITE } from "@/lib/site";
import { motion } from "framer-motion";

const LAST_UPDATED = "9 November 2026";

const emailLink = (
  <a
    href={`mailto:${SITE.email}`}
    className="text-terracotta hover:underline underline-offset-4 break-all"
  >
    {SITE.email}
  </a>
);

interface PolicySection {
  heading: string;
  paragraphs?: readonly React.ReactNode[];
  list?: readonly React.ReactNode[];
  after?: readonly React.ReactNode[];
}

const SECTIONS: readonly PolicySection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      <>
        This site is run by {SITE.legalEntity}, trading as {SITE.name}. We are
        the controller of the personal data described on this page. For any
        question about it, email {emailLink}.
      </>,
    ],
  },
  {
    heading: "What we collect",
    paragraphs: ["When you send the contact form, we receive:"],
    list: [
      "Your name",
      "Your email address",
      "Your company (optional)",
      "The service you're interested in",
      "Your message",
      "Your budget range (optional)",
      "Your answer to the scope question",
      "How you found us (optional)",
    ],
  },
  {
    heading: "Why we use it",
    paragraphs: [
      "We use these details to reply to your inquiry, scope the work and send you a quote.",
    ],
  },
  {
    heading: "Legal basis",
    paragraphs: [
      "We rely on your consent, which you give when you submit the form, under India's Digital Personal Data Protection Act, 2023.",
      "If you are in the EU or UK, we rely on the steps you ask us to take before entering into a contract, and on our legitimate interest in replying to you.",
    ],
  },
  {
    heading: "How your data is handled",
    list: [
      "The form is emailed to our inbox through Google (Gmail / Google Workspace).",
      "The site is hosted on Vercel, which keeps standard server logs.",
      "We use Vercel Web Analytics, which counts page views without cookies and without tracking you across sites.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "This site sets no cookies. If you switch between the light and dark theme, that choice is stored only in your browser's local storage.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep inquiries for 24 months from our last contact with you, then delete them. We delete them sooner if you ask.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "Under India's Digital Personal Data Protection Act, 2023, you have the right to:",
    ],
    list: [
      "Access your data",
      "Have it corrected, completed or updated",
      "Have it erased",
      "Withdraw your consent",
      "Grievance redressal, if you have a complaint about how we handle your data",
    ],
    after: [
      "If you live in the EU or UK, you also have the right to restrict or object to how we process your data, the right to data portability, and the right to complain to your data protection authority.",
    ],
  },
  {
    heading: "How to exercise your rights",
    paragraphs: [
      <>
        Email {emailLink} with your request. We reply within 30 days.
      </>,
    ],
  },
  {
    heading: "International transfers",
    paragraphs: [
      "Our providers may process your data outside India or outside your country, under their standard safeguards.",
    ],
  },
  {
    heading: "Children",
    paragraphs: ["This site is not directed at children."],
  },
  {
    heading: "Selling data",
    paragraphs: ["We never sell your data."],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "When we change this policy, we update this page and the date at the top.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Hero
        title="Privacy policy"
        subtitle={`How ${SITE.name} handles the details you send us through this site.`}
      />

      <section className="pb-16 md:pb-24 lg:pb-32">
        <div className="container-site">
          <div className="prose-content mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-small text-stone border-b border-stone/10 dark:border-stone/20 pb-6 mb-12"
            >
              Last updated: {LAST_UPDATED}
            </motion.p>

            <div className="space-y-12">
              {SECTIONS.map((section) => (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-heading text-heading-3 text-off-black dark:text-warm-white mb-4">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph, i) => (
                    <p key={i} className="text-body text-stone mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}

                  {section.list && (
                    <ul
                      className={`space-y-2 ${
                        section.paragraphs ? "mt-4" : ""
                      } ${section.after ? "mb-4" : ""}`}
                    >
                      {section.list.map((item, i) => (
                        <li
                          key={i}
                          className="text-body text-stone flex items-start gap-3"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-terracotta mt-3 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.after?.map((paragraph, i) => (
                    <p key={i} className="text-body text-stone mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

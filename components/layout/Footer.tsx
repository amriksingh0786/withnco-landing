import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/site";
import { OFFERS } from "@/lib/offers";

const studioLinks = [
  { href: "/services", label: "Services" },
  { href: "/white-label", label: "White-label" },
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/definition-of-done", label: "Definition of done" },
  { href: "/contact", label: "Contact" },
];

const offerLinks = OFFERS.map((o) => ({ href: o.href, label: o.name }));

const connectLinks = [
  { href: SITE.social.linkedin, label: "LinkedIn" },
  { href: SITE.social.twitter, label: "Twitter / X" },
  { href: SITE.whatsapp.href, label: "WhatsApp" },
];

const linkClass = "text-stone hover:text-warm-white transition-colors";
const headingClass = "font-heading font-semibold mb-4 text-warm-white";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-off-black dark:bg-dark-surface text-warm-white dark:text-warm-white">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-block mb-4" aria-label="withnco home">
              <Logo className="h-12 w-auto [&_path:not([fill='#F35F09'])]:fill-warm-white" />
            </Link>
            <p className="text-stone max-w-sm mb-6">{SITE.location.line}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-warm-white hover:text-terracotta transition-colors break-words"
            >
              {SITE.email}
            </a>
          </div>

          {/* Studio */}
          <div>
            <h2 className={headingClass}>Studio</h2>
            <nav className="flex flex-col gap-3" aria-label="Studio">
              {studioLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Offers */}
          <div>
            <h2 className={headingClass}>Offers</h2>
            <nav className="flex flex-col gap-3" aria-label="Offers">
              {offerLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h2 className={headingClass}>Connect</h2>
            <nav className="flex flex-col gap-3" aria-label="Connect">
              {connectLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {link.label}{" "}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-small text-stone">
            &copy; {currentYear} {SITE.name}. A brand of {SITE.legalEntity}.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <Link href="/privacy" className={`text-small ${linkClass}`}>
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

const footerLinks = [
  { href: "/approach", label: "Approach" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-off-black dark:bg-dark-surface text-warm-white">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading text-2xl font-bold inline-block mb-4"
            >
              with<span className="text-terracotta">&amp;</span>co
            </Link>
            <p className="text-stone max-w-sm mb-6">
              Built with care in India. Shipped globally.
            </p>
            <a
              href="mailto:hello@withnco.studio"
              className="text-warm-white hover:text-terracotta transition-colors"
            >
              hello@withnco.studio
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-stone hover:text-warm-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="https://linkedin.com/company/withnco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-warm-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/withnco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-warm-white transition-colors"
              >
                Twitter / X
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-small text-stone">
            &copy; {currentYear} withnco. A brand of Amrik (OPC) Innovates Pvt
            Ltd.
          </p>
          <p className="text-small text-stone">Based in India. Building globally.</p>
        </div>
      </div>
    </footer>
  );
}

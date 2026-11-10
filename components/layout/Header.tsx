"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/white-label", label: "White-label" },
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
];

// Nav link classes are joined by hand, not with cn(): tailwind-merge reads the custom
// text-body-sm / text-heading-3 sizes as colours and would drop them.
// The active link keeps its text colour (terracotta text on warm-white is below AA for
// body-size text) and gets a terracotta underline instead.
const ACTIVE_LINK = "underline decoration-terracotta decoration-2 underline-offset-8";

/** "page" on the exact route, "true" inside its section (e.g. /services/launch-sprint). */
function activeState(pathname: string, href: string): "page" | "true" | undefined {
  if (pathname === href) return "page";
  if (pathname.startsWith(`${href}/`)) return "true";
  return undefined;
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // While the mobile menu is open: Escape closes it and returns focus to the toggle,
  // the page behind it does not scroll, and growing past the lg breakpoint (where
  // the panel is hidden) closes it so the scroll lock never outlives the panel.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleBreakpoint = () => {
      if (desktop.matches) setIsMobileMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleBreakpoint);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleBreakpoint);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-warm-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-sm dark:shadow-none dark:border-b dark:border-stone/10"
          : "bg-transparent"
      )}
    >
      <nav className="container-site" aria-label="Main">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative" aria-label="withnco home">
            <Logo className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const current = activeState(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current}
                  className={`text-body-sm text-off-black dark:text-warm-white transition-colors hover:text-terracotta ${
                    current ? ACTIVE_LINK : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <ThemeToggle />
            <Button href="/contact" size="sm">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              className="p-2 text-off-black dark:text-warm-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu: always mounted so aria-controls="mobile-menu" resolves; the
          hidden attribute removes it from view and from the accessibility tree. */}
      <div
        id="mobile-menu"
        hidden={!isMobileMenuOpen}
        className="lg:hidden fixed left-0 right-0 top-20 h-[calc(100dvh-5rem)] bg-warm-white dark:bg-dark-bg z-40 overflow-y-auto"
      >
        <nav className="container-site py-8 flex flex-col gap-6" aria-label="Mobile">
          {navLinks.map((link) => {
            const current = activeState(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current}
                className={`text-heading-3 font-heading text-off-black dark:text-warm-white transition-colors hover:text-terracotta ${
                  current ? ACTIVE_LINK : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Button renders a Link for href, so close the menu from a wrapper. */}
          <div className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            <Button href="/contact" className="w-full">
              Let&apos;s Talk
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

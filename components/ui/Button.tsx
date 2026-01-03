"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  href?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "default", href, children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-bg disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-terracotta text-warm-white hover:bg-terracotta/90 active:scale-[0.98]",
      secondary:
        "border border-off-black dark:border-warm-white text-off-black dark:text-warm-white bg-transparent hover:bg-off-black dark:hover:bg-warm-white hover:text-warm-white dark:hover:text-off-black",
      ghost:
        "text-off-black dark:text-warm-white hover:text-terracotta underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "px-6 py-3 text-body-sm rounded",
      sm: "px-4 py-2 text-small rounded",
      lg: "px-8 py-4 text-body rounded",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };

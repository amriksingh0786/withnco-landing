import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only knows Tailwind's default font sizes. Without this, it reads the custom sizes in
 * tailwind.config.ts (text-heading-3, text-body-sm...) as text colours and drops one of a size/colour pair.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "heading-1", "heading-2", "heading-3", "body", "body-sm", "small"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

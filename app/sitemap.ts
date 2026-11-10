import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { OFFERS } from "@/lib/offers";

type Entry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

// Offer pages come from lib/offers.ts so new offers are listed automatically.
const ENTRIES: Entry[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  ...OFFERS.map((o): Entry => ({ path: o.href, changeFrequency: "monthly", priority: 0.9 })),
  { path: "/contact", changeFrequency: "yearly", priority: 0.9 },
  { path: "/work", changeFrequency: "monthly", priority: 0.8 },
  { path: "/approach", changeFrequency: "monthly", priority: 0.8 },
  { path: "/definition-of-done", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

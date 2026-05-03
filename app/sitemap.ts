import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const home = base.replace(/\/$/, "");
  return [
    {
      url: home,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

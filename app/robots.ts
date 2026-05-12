import type { MetadataRoute } from "next";
import { LIVE_SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const origin = LIVE_SITE_URL.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}

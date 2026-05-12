import type { MetadataRoute } from "next";
import { LIVE_SITE_URL } from "@/lib/seo";

/**
 * URLs absolutas del sitemap (siempre el dominio público).
 * Así Google y otras herramientas leen entradas válidas aunque el build sea en preview.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = LIVE_SITE_URL.replace(/\/$/, "");
  return [
    {
      url: `${origin}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

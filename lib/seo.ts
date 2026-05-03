/** URLs y textos centralizados para SEO, Open Graph y JSON-LD. */

export const SITE_NAME = "Thompson Lorena | Consultora Psicológica";
export const SITE_SHORT_NAME = "Thompson Lorena";
export const SITE_DESCRIPTION =
  "Acompañamiento psicológico profesional con enfoque humano: counseling, desarrollo personal y bienestar. Sesiones virtuales y presenciales en Microcentro, CABA.";

export const INSTAGRAM_URL = "https://www.instagram.com/ticonsultorapsicologica/";
export const WHATSAPP_URL = "https://wa.me/5491123663477";

function withHttps(urlOrHost: string): string {
  const t = urlOrHost.trim().replace(/\/$/, "");
  if (/^https?:\/\//i.test(t)) return t;
  return `https://${t.replace(/^\/+/, "")}`;
}

/**
 * URL canónica del sitio (metadataBase, OG absolutas, JSON-LD, sitemap).
 *
 * - **Con dominio propio:** `NEXT_PUBLIC_SITE_URL=https://tudominio.com` (Vercel → Environment Variables).
 * - **Sin dominio (Vercel):** en producción suele existir `VERCEL_PROJECT_PRODUCTION_URL` (`*.vercel.app`).
 * - **Previews / branch:** `VERCEL_URL` (cada deploy tiene su URL).
 * - **Local:** `http://localhost:3000`
 */
export function getSiteUrl(): string {
  const custom = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (custom) return withHttps(custom);

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) return withHttps(productionHost);

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return withHttps(vercel);

  return "http://localhost:3000";
}

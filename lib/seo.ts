/** URLs y textos centralizados para SEO, Open Graph y JSON-LD. */

/** Dominio público definitivo (con www). */
export const LIVE_SITE_URL = "https://www.tlconsultorapsicologica.com";

export const SITE_NAME = "Thompson Lorena | TL Consultora Psicológica";
export const SITE_SHORT_NAME = "Thompson Lorena";
export const SITE_BRAND = "TL Consultora Psicológica";

export const SITE_DESCRIPTION =
  "Consultora psicológica Thompson Lorena: counseling y acompañamiento en español. Sesiones online para Argentina, España y Latinoamérica; presencial en Microcentro (CABA). Desarrollo personal y bienestar emocional.";

/** Palabras clave orientadas a búsquedas en español (AR / ES / hispanohablantes). */
export const SITE_KEYWORDS = [
  "tl consultora psicológica",
  "tlconsultorapsicologica",
  "Thompson Lorena",
  "consultora psicológica",
  "psicóloga",
  "counseling",
  "consultoría psicológica",
  "terapia online",
  "psicóloga online",
  "psicólogo online Argentina",
  "psicóloga online España",
  "sesiones virtuales",
  "terapia en español",
  "desarrollo personal",
  "bienestar emocional",
  "Buenos Aires",
  "CABA",
  "Microcentro",
  "Madrid",
  "Barcelona",
  "España",
  "Argentina",
  "Latinoamérica",
];

/** Google Search Console (`<meta name="google-site-verification">`). */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
  "JmrhmdhDKyw6WoNNMPbVGIMsYkHYDIlOnG1KD0RX1dM";

export const INSTAGRAM_URL = "https://www.instagram.com/tlconsultorapsicologica/";
export const WHATSAPP_URL = "https://wa.me/5491123663477";

function withHttps(urlOrHost: string): string {
  const t = urlOrHost.trim().replace(/\/$/, "");
  if (/^https?:\/\//i.test(t)) return t;
  return `https://${t.replace(/^\/+/, "")}`;
}

/** URL base con barra final (hreflang, canonical absolutos). */
export function getCanonicalRoot(): string {
  return `${LIVE_SITE_URL.replace(/\/$/, "")}/`;
}

/**
 * URL del sitio para `metadataBase`, OG y JSON-LD dinámicos.
 *
 * 1. `NEXT_PUBLIC_SITE_URL` — override manual (staging, otro host).
 * 2. Producción en Vercel — dominio real (`LIVE_SITE_URL`).
 * 3. Preview en Vercel — URL del deploy.
 * 4. Local — `http://localhost:3000`
 */
export function getSiteUrl(): string {
  const custom = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (custom) return withHttps(custom);

  if (process.env.VERCEL_ENV === "production") {
    return LIVE_SITE_URL;
  }

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) return withHttps(productionHost);

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return withHttps(vercel);

  return "http://localhost:3000";
}

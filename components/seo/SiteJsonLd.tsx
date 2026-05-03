import {
  INSTAGRAM_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SHORT_NAME,
  WHATSAPP_URL,
  getSiteUrl,
} from "@/lib/seo";

export function SiteJsonLd() {
  const base = getSiteUrl();

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "es-AR",
    },
    {
      "@type": "Psychologist",
      "@id": `${base}/#professional`,
      name: "Lorena Thompson",
      alternateName: SITE_SHORT_NAME,
      jobTitle: "Consultora Psicológica",
      description: SITE_DESCRIPTION,
      url: base,
      image: `${base}/icono-lorena.jpg`,
      sameAs: [INSTAGRAM_URL],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "reservations",
          availableLanguage: ["es-AR"],
          url: WHATSAPP_URL,
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ciudad Autónoma de Buenos Aires",
        addressRegion: "CABA",
        addressCountry: "AR",
      },
      areaServed: {
        "@type": "City",
        name: "Buenos Aires",
      },
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

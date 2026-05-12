import {
  INSTAGRAM_URL,
  SITE_BRAND,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SHORT_NAME,
  WHATSAPP_URL,
  getSiteUrl,
} from "@/lib/seo";

export function SiteJsonLd() {
  const base = getSiteUrl();
  const orgId = `${base}/#organization`;

  const graph = [
    {
      "@type": "ProfessionalService",
      "@id": orgId,
      name: SITE_BRAND,
      alternateName: [SITE_SHORT_NAME, "Thompson Lorena consultora psicológica"],
      description: SITE_DESCRIPTION,
      url: base,
      logo: `${base}/logo.PNG`,
      image: `${base}/icono-lorena.jpg`,
      sameAs: [INSTAGRAM_URL],
      areaServed: [
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "España" },
        { "@type": "AdministrativeArea", name: "Ciudad Autónoma de Buenos Aires" },
      ],
      availableLanguage: ["es", "es-AR", "es-ES"],
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
      worksFor: { "@id": orgId },
      knowsAbout: [
        "Counseling",
        "Consultoría psicológica",
        "Desarrollo personal",
        "Bienestar emocional",
        "Psicología online",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "reservations",
          availableLanguage: ["es", "es-AR", "es-ES"],
          areaServed: ["AR", "ES"],
          url: WHATSAPP_URL,
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ciudad Autónoma de Buenos Aires",
        addressRegion: "CABA",
        addressCountry: "AR",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: SITE_NAME,
      alternateName: SITE_BRAND,
      description: SITE_DESCRIPTION,
      inLanguage: ["es-AR", "es-ES", "es"],
      publisher: { "@id": orgId },
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

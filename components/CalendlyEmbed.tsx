"use client";

import { Box, Text } from "@mantine/core";
import { useEffect, useState } from "react";

/**
 * Inline embed según Calendly: embed_type=Inline + embed_domain del sitio actual.
 * @param url URL pública del evento (ej. https://calendly.com/usuario/consulta-30min)
 */
export function CalendlyEmbed({ url }: { url: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname === "calendly.com" || parsed.hostname.endsWith(".calendly.com")) {
        parsed.searchParams.set("embed_type", "Inline");
        parsed.searchParams.set("embed_domain", window.location.hostname);
      }
      setSrc(parsed.toString());
    } catch {
      setSrc(url);
    }
  }, [url]);

  if (!src) {
    return (
      <Box py={60} style={{ display: "grid", placeItems: "center" }}>
        <Text c="slate.5" size="sm">
          Cargando agenda…
        </Text>
      </Box>
    );
  }

  return (
    <iframe
      title="Agendar con Calendly"
      src={src}
      width="100%"
      height={630}
      style={{
        border: 0,
        display: "block",
        minHeight: 630,
        background: "#fff",
      }}
      loading="lazy"
    />
  );
}

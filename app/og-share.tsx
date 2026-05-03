import type { ReactElement } from "react";
import { SITE_SHORT_NAME } from "@/lib/seo";

/** JSX para `next/og` (solo estilos inline y HTML limitado). */
export function OgShareElement(): ReactElement {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "56px 64px",
        background: "linear-gradient(145deg, #1d1a2b 0%, #3d2a5c 38%, #5b4390 72%, #7c5fc2 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 14,
          maxWidth: 980,
        }}
      >
        <span
          style={{
            fontSize: 20,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.62)",
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          }}
        >
          Consultora psicológica
        </span>
        <div
          style={{
            height: 4,
            width: 112,
            borderRadius: 4,
            background: "linear-gradient(90deg, #e9d5ff, #a78bfa)",
          }}
        />
        <div
          style={{
            margin: 0,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            color: "#faf5ff",
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          {SITE_SHORT_NAME}
        </div>
        <p
          style={{
            margin: 0,
            marginTop: 4,
            fontSize: 30,
            lineHeight: 1.35,
            color: "rgba(250,245,255,0.9)",
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          }}
        >
          Acompañamiento con enfoque humano · counseling y bienestar
        </p>
        <p
          style={{
            margin: 0,
            marginTop: 28,
            fontSize: 22,
            color: "rgba(196,181,253,0.95)",
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          }}
        >
          Sesiones virtuales y presenciales · Microcentro, CABA
        </p>
      </div>
    </div>
  );
}

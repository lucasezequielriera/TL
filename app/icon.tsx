import { ImageResponse } from "next/og";

/** Favicon de la pestaña (multi‑resolución la genera Next a partir de esta base). */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #4f346d 0%, #734fa3 100%)",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: "#faf5ff",
            letterSpacing: "-0.07em",
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          }}
        >
          TL
        </span>
      </div>
    ),
    { ...size },
  );
}

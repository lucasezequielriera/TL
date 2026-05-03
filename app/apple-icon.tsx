import { ImageResponse } from "next/og";

/** Icono al guardar en inicio en iOS / iPadOS. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #4f346d 0%, #734fa3 55%, #8c63c8 100%)",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 78,
            fontWeight: 800,
            color: "#faf5ff",
            letterSpacing: "-0.06em",
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

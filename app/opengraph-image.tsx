import { ImageResponse } from "next/og";
import { OgShareElement } from "./og-share";

export const alt =
  "Thompson Lorena — Consultora psicológica. Sesiones virtuales y presenciales en CABA.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(<OgShareElement />, {
    ...size,
  });
}

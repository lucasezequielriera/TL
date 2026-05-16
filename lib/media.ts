/**
 * Video de presentación (La consultora).
 * - Por defecto: `/presentacion-web.mp4` (versión optimizada para web; ~8 MB / ~45 s).
 * - Opcional: `NEXT_PUBLIC_PRESENTACION_VIDEO_URL` apunta a CDN (Cloudflare R2, S3, Bunny, etc.)
 *   para no subir el binario al repo ni al bundle de Vercel.
 */
export const PRESENTACION_VIDEO_SRC =
  process.env.NEXT_PUBLIC_PRESENTACION_VIDEO_URL?.trim() || "/presentacion-web.mp4";

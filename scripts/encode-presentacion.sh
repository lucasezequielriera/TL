#!/usr/bin/env bash
# Regenera public/presentacion-web.mp4 desde public/presentacion.mp4 (si existe).
# Requiere ffmpeg instalado.

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/public/presentacion.mp4"
DST="$ROOT/public/presentacion-web.mp4"

if [[ ! -f "$SRC" ]]; then
  echo "No está $SRC — colocá ahí el video maestro y volvé a ejecutar."
  exit 1
fi

ffmpeg -y -i "$SRC" \
  -vf "scale=720:-2" \
  -c:v libx264 -crf 26 -preset medium \
  -movflags +faststart \
  -c:a aac -b:a 96k -ac 2 \
  "$DST"

ls -lh "$DST"

"use client";

import {
  MantineProvider,
  createTheme,
  rem,
  type MantineColorsTuple,
} from "@mantine/core";

const electric: MantineColorsTuple = [
  "#eef4ff",
  "#dae8ff",
  "#bfd8ff",
  "#98c0ff",
  "#6ea4f8",
  "#4989ee",
  "#3a73cb",
  "#315ba2",
  "#2a4a82",
  "#233d6b",
];

const neon: MantineColorsTuple = [
  "#f4f8f3",
  "#e7efe5",
  "#d1e1cc",
  "#b7d0b0",
  "#98bc8f",
  "#7ca371",
  "#64865c",
  "#506a4b",
  "#42563e",
  "#374a34",
];

const violetPop: MantineColorsTuple = [
  "#f9f5ff",
  "#f0e8ff",
  "#e3d4ff",
  "#d0b7fc",
  "#ba98f4",
  "#a47ce9",
  "#8c63c8",
  "#734fa3",
  "#603f85",
  "#4f346d",
];

const slate: MantineColorsTuple = [
  "#f8fafc",
  "#f1f5f9",
  "#e2e8f0",
  "#cbd5e1",
  "#94a3b8",
  "#64748b",
  "#475569",
  "#334155",
  "#1e293b",
  "#0f172a",
];

const theme = createTheme({
  colors: {
    electric,
    neon,
    violetPop,
    slate,
  },
  primaryColor: "violetPop",
  fontFamily: "var(--font-manrope), system-ui, sans-serif",
  headings: {
    fontFamily: "var(--font-cormorant), Georgia, serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: rem(50), lineHeight: "1.0" },
      h2: { fontSize: rem(36), lineHeight: "1.06" },
      h3: { fontSize: rem(26), lineHeight: "1.14" },
    },
  },
  defaultRadius: "md",
  components: {
    Button: {
      defaultProps: { radius: "xl" },
    },
    Paper: {
      defaultProps: {
        radius: "lg",
        shadow: "md",
        withBorder: true,
      },
    },
    Accordion: {
      defaultProps: {
        variant: "default",
        radius: "sm",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      {children}
    </MantineProvider>
  );
}

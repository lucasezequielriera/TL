"use client";

import {
  MantineProvider,
  createTheme,
  rem,
  type ButtonProps,
  type MantineColorsTuple,
  type MantineTheme,
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

function buttonStyles(theme: MantineTheme, props: ButtonProps) {
  const variant = props.variant ?? "filled";
  const color = props.color;
  const cn = props.className;
  const isWaFab =
    (typeof cn === "string" && cn.includes("wa-floating-btn")) ||
    (Array.isArray(cn) &&
      cn.some((c) => typeof c === "string" && c.includes("wa-floating-btn")));
  const isVioletFilled =
    variant === "filled" &&
    (color === "violetPop" || color === undefined) &&
    !isWaFab;
  const isWhiteFilled = variant === "filled" && color === "white";
  const isDefault = variant === "default";

  return {
    root: {
      fontWeight: 600,
      letterSpacing: "-0.015em",
      position: "relative" as const,
      overflow: "hidden" as const,
      transition:
        "transform 0.32s cubic-bezier(0.33, 1.3, 0.64, 1), box-shadow 0.35s ease, filter 0.25s ease, border-color 0.25s ease",
      "&:not(.wa-floating-btn):hover:not([data-disabled])": {
        transform: "translateY(-3px)",
      },
      "&:not(.wa-floating-btn):active:not([data-disabled])": {
        transform: "translateY(-1px) scale(0.985)",
        transitionDuration: "0.12s",
      },
      ...(isVioletFilled && {
        backgroundImage: `linear-gradient(142deg, ${theme.colors.violetPop[6]} 0%, ${theme.colors.violetPop[8]} 48%, ${theme.colors.violetPop[7]} 100%)`,
        boxShadow:
          "0 6px 22px rgba(103, 79, 163, 0.42), 0 1px 0 rgba(255, 255, 255, 0.22) inset, 0 0 0 1px rgba(255, 255, 255, 0.12)",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        "&:hover:not([data-disabled])": {
          boxShadow:
            "0 10px 32px rgba(103, 79, 163, 0.5), 0 1px 0 rgba(255, 255, 255, 0.28) inset, 0 0 0 1px rgba(255, 255, 255, 0.18)",
          filter: "brightness(1.04)",
        },
      }),
      ...(isWhiteFilled && {
        backgroundColor: "#ffffff",
        color: theme.colors.violetPop[8],
        boxShadow:
          "0 6px 24px rgba(29, 26, 43, 0.22), 0 1px 0 rgba(255, 255, 255, 0.95) inset",
        border: "1px solid rgba(255, 255, 255, 0.65)",
        "&:hover:not([data-disabled])": {
          backgroundColor: "#f6f4ff",
          color: theme.colors.violetPop[9],
          borderColor: "rgba(255, 255, 255, 0.9)",
          boxShadow:
            "0 10px 34px rgba(29, 26, 43, 0.26), 0 1px 0 rgba(255, 255, 255, 1) inset",
        },
      }),
      ...(isDefault && {
        borderWidth: rem(1.5),
        borderColor: "rgba(100, 116, 139, 0.35)",
        backgroundColor: "rgba(255, 255, 255, 0.72)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "0 2px 12px rgba(58, 115, 203, 0.08)",
        "&:hover:not([data-disabled])": {
          borderColor: "var(--mantine-color-violetPop-4)",
          backgroundColor: "rgba(255, 255, 255, 0.92)",
          boxShadow:
            "0 6px 20px rgba(103, 79, 163, 0.14), 0 0 0 1px rgba(164, 124, 233, 0.12)",
        },
      }),
    },
    label: {
      position: "relative" as const,
      zIndex: 1,
      ...(isWhiteFilled && { color: "inherit" }),
    },
    inner: { position: "relative" as const, zIndex: 1 },
    section: {
      position: "relative" as const,
      zIndex: 1,
      ...(isWhiteFilled && { color: "inherit" }),
    },
  };
}

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
    fontWeight: "900",
    sizes: {
      h1: { fontSize: rem(54), lineHeight: "1.0" },
      h2: { fontSize: rem(40), lineHeight: "1.06" },
      h3: { fontSize: rem(29), lineHeight: "1.14" },
    },
  },
  defaultRadius: "md",
  components: {
    Title: {
      defaultProps: { fw: 900 },
      styles: {
        root: {
          letterSpacing: "-0.03em",
          WebkitFontSmoothing: "antialiased",
          WebkitTextStroke: "0.36px currentColor",
        },
      },
    },
    Button: {
      defaultProps: {
        radius: "xl",
        size: "lg",
        classNames: { root: "tl-btn" },
      },
      styles: buttonStyles,
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

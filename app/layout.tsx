import type { Metadata, Viewport } from "next";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SHORT_NAME, getSiteUrl } from "@/lib/seo";
import { Providers } from "./providers";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_SHORT_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_SHORT_NAME,
  keywords: [
    "psicóloga",
    "consultora psicológica",
    "counseling",
    "Buenos Aires",
    "CABA",
    "Microcentro",
    "terapia",
    "sesiones virtuales",
    "desarrollo personal",
    "bienestar emocional",
    "Thompson Lorena",
  ],
  authors: [{ name: "Lorena Thompson", url: siteUrl }],
  creator: "Lorena Thompson",
  publisher: "Lorena Thompson",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: SITE_SHORT_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "health",
  referrer: "origin-when-cross-origin",
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9ff" },
    { media: "(prefers-color-scheme: dark)", color: "#1d1a2b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${manrope.variable} ${cormorant.variable}`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body>
        <SiteJsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

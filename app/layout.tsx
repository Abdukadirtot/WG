import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

/**
 * Poppins is the signature typeface. We load bold weights (600/700/800) for
 * headings & UI, plus 400/500 for body copy, and expose it as a CSS variable
 * that Tailwind's `font-sans` / `font-heading` reference.
 */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whitestarghc.com"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.shortName}`,
  },
  description:
    "Whitestar Global Health Connect links patients, hospitals, medical professionals, and institutions across Somalia and the Horn of Africa with world-class healthcare providers in India, Kenya, Egypt, and Türkiye.",
  keywords: [
    "global health",
    "medical partnerships",
    "Somalia healthcare",
    "Horn of Africa",
    "international patient services",
    "telemedicine",
    "medical education",
  ],
  openGraph: {
    title: `${siteConfig.name}`,
    description: siteConfig.tagline,
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-700 focus:px-4 focus:py-2 focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

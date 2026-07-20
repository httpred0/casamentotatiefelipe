import type { Metadata } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tatiane e Felipe — 26 de setembro de 2026",
  description:
    "Site do casamento de Tatiane e Felipe. Uma celebração íntima em Salvador — 26 de setembro de 2026.",
  openGraph: {
    title: "Tatiane e Felipe",
    description: "Convidam para o casamento · 26 de setembro de 2026",
    images: ["/photos/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-dvh bg-cream font-sans text-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

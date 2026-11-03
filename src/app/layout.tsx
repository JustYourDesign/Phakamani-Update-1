import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

// Manrope carries all body copy, labels and navigation.
const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Barlow Condensed at 800 is the display face — every h1/h2 and the big
// row headings on the approach list.
const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Phakamani — Be More.",
  description:
    "Human performance for individuals, workplaces and communities. Movement, Mind and Connect.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main"
          className="absolute top-[-100px] z-100 bg-white p-5 focus:top-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

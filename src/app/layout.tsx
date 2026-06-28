import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NoiseHeader } from "@/components/NoiseHeader";
import { Dock } from "@/components/Dock";
import { CursorGlow } from "@/components/CursorGlow";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Majharul Islam — Software Engineer",
  description:
    "Software engineer building accessible, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
    >
      <body
        className="min-h-full bg-canvas text-ink antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NoiseHeader />
          <Dock />
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

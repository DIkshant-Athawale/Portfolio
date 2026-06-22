import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dikshant Athawale | Full Stack Developer & CS Engineer",
  description:
    "Portfolio of Dikshant Athawale — Full Stack Developer specializing in React, Node.js, Express.js, and MySQL. Building end-to-end web applications from responsive interfaces to scalable APIs.",
  keywords: [
    "Dikshant Athawale",
    "Full Stack Developer",
    "Node.js Developer",
    "React Developer",
    "Portfolio",
    "Computer Science Engineer",
    "REST API",
    "Express.js",
    "MySQL",
  ],
  authors: [{ name: "Dikshant Athawale" }],
  creator: "Dikshant Athawale",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dikshant Athawale | Full Stack Developer",
    description:
      "Full Stack Developer building end-to-end web applications with React, Node.js, Express.js, and MySQL.",
    siteName: "Dikshant Athawale Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dikshant Athawale | Full Stack Developer",
    description:
      "Full Stack Developer building end-to-end web applications with React, Node.js, and MySQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dikshant Ramesh Athawale",
              jobTitle: "Full Stack Developer",
              url: "https://dikshant-athawale.dev",
              email: "dikshant.r.athawale@gmail.com",
              telephone: "+91-7719876877",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Amravati",
                addressCountry: "India",
              },
              sameAs: [
                "https://linkedin.com/in/dikshant-athawale-374763213",
                "https://github.com/DIkshant-Athawale",
              ],
              knowsAbout: [
                "Node.js",
                "Express.js",
                "React",
                "TypeScript",
                "MySQL",
                "REST API Design",
                "Docker",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Skip to main content — accessibility for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent-primary focus:text-white focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

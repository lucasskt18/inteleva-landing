import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Inteleva - Desenvolvimento de Software Personalizado",
  description: "Transforme suas ideias em realidade digital. Desenvolvimento de software personalizado, aplicações web e mobile, e soluções tecnológicas para impulsionar seu negócio.",
  keywords: "desenvolvimento de software, aplicações web, aplicativos mobile, sistemas personalizados, programação, tecnologia",
  authors: [{ name: "Inteleva" }],
  creator: "Inteleva",
  publisher: "Inteleva",
  robots: "index, follow",
  openGraph: {
    title: "Inteleva - Desenvolvimento de Software Personalizado",
    description: "Transforme suas ideias em realidade digital. Desenvolvimento de software personalizado, aplicações web e mobile.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inteleva - Desenvolvimento de Software Personalizado",
    description: "Transforme suas ideias em realidade digital. Desenvolvimento de software personalizado, aplicações web e mobile.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

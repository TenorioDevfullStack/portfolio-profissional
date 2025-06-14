import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leandro Tenório - Desenvolvedor Full Stack & IA",
  description:
    "Desenvolvedor especializado em soluções web e integração com IA. Chatbots inteligentes, dashboards interativos e automações personalizadas.",
  keywords:
    "desenvolvedor, full stack, IA, chatbot, dashboard, automação, React, Node.js, Gemini AI",
  authors: [{ name: "Leandro Tenório" }],
  creator: "Leandro Tenório",
  openGraph: {
    title: "Leandro Tenório - Desenvolvedor Full Stack & IA",
    description:
      "Desenvolvedor especializado em soluções web e integração com IA. Chatbots inteligentes, dashboards interativos e automações personalizadas.",
    url: "https://portfolio-beta-lovat-10.vercel.app",
    siteName: "Leandro Tenório Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leandro Tenório - Desenvolvedor Full Stack & IA",
    description:
      "Desenvolvedor especializado em soluções web e integração com IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatedBackground />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

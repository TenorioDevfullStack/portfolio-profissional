import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leandro Tenório - Desenvolvedor Full Stack & Especialista em IA",
  description:
    "Portfólio de Leandro Tenório - Desenvolvedor Full Stack, Gestor de Automação NoCode & IA. Especialista em React, Python, Next.js e soluções de inteligência artificial.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "inteligência artificial",
    "automação",
    "react",
    "python",
    "next.js",
  ],
  authors: [{ name: "Leandro Tenório" }],
  openGraph: {
    title: "Leandro Tenório - Desenvolvedor Full Stack & Especialista em IA",
    description: "Portfólio profissional de Leandro Tenório",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Google Analytics - apenas em produção */}
        {process.env.NODE_ENV === "production" &&
          process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          )}
      </body>
    </html>
  );
}

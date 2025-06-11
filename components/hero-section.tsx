"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Zap,
  TrendingUp,
  Code,
  Server,
  Workflow,
  Cloud,
  TerminalSquare,
  Send,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import SimpleParticlesBackground from "./SimpleParticlesBackground";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-background via-blue-50 to-purple-50 dark:from-background dark:via-blue-950 dark:to-purple-950"
    >
      <SimpleParticlesBackground />
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex justify-center relative">
          {/* Desfoque sutil e amplo atrás do texto, sem formato visível */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[28rem] rounded-3xl backdrop-blur-2xl bg-black/5 dark:bg-black/10 -z-10 pointer-events-none"></div>
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white !text-white drop-shadow-md">
              Olá, eu sou Leandro Tenório
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white !text-white drop-shadow-md">
              Desenvolvedor
            </h2>
            <p className="relative text-lg sm:text-xl md:text-2xl leading-relaxed px-6 py-4 mb-6 text-white !text-white drop-shadow-md">
              Desenvolvedor especializado em soluções web e integração com IA.
              Crio aplicações personalizadas que automatizam processos e
              otimizam resultados para negócios.
            </p>
            <div className="mt-8 flex justify-center gap-6">
              <a
                href="https://github.com/TenorioDevfullStack"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <FaGithub size={32} color="#181717" />
              </a>
              <a
                href="https://www.linkedin.com/in/leandro-ten%C3%B3rio-088378310/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={32} color="#0077B5" />
              </a>
              <a
                href="https://t.me/CaptaLead_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Telegram"
              >
                <FaTelegramPlane size={32} color="#229ED9" />
              </a>
              <a
                href="mailto:tenorioleandro22@gmail.com"
                className="hover:scale-110 transition-transform"
                aria-label="Gmail"
              >
                <SiGmail size={32} color="#EA4335" />
              </a>
              <a
                href="https://wa.me/551196637319"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={32} color="#25D366" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

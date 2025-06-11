"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  Mail,
  Linkedin,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function CTASection() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("cta-animated-icons");
    if (!alreadyVisited) {
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
        localStorage.setItem("cta-animated-icons", "true");
      }, 2500); // 2.5 segundos de animação
    }
  }, []);

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block w-full bg-white/80 dark:bg-slate-900/80 border border-blue-200 dark:border-slate-700 rounded-2xl shadow-lg backdrop-blur-md px-6 py-8 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-800 dark:text-white">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-blue-800 dark:text-white">
              Vamos conversar sobre como a IA e automação podem revolucionar
              seus processos e gerar resultados extraordinários.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <Card className="group bg-card border-2 border-gray-700 hover:border-purple-200 transition-all duration-300 relative overflow-hidden hover:shadow-2xl transform hover:scale-105 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <CardContent className="p-6 text-center relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg backdrop-blur-md ${
                      showAnimation ? "animate-float" : ""
                    } group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Calendar className="w-10 h-10 text-white drop-shadow" />
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Consulta Gratuita
                </h3>
                <p className="mb-4 opacity-90">
                  Inicie seu atendimento com nosso assistente inteligente e
                  descubra como podemos ajudar seu projeto.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <a
                    href="https://t.me/CaptaLead_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Consulta
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group bg-card border-2 border-gray-700 hover:border-blue-200 transition-all duration-300 relative overflow-hidden hover:shadow-2xl transform hover:scale-105 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <CardContent className="p-6 text-center relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg backdrop-blur-md ${
                      showAnimation ? "animate-float" : ""
                    } group-hover:scale-110 transition-transform duration-300`}
                  >
                    <MessageCircle className="w-10 h-10 text-white drop-shadow" />
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Contato Direto
                </h3>
                <p className="mb-4 opacity-90 text-muted-foreground">
                  Fale comigo diretamente via WhatsApp para tirar dúvidas e
                  iniciar seu projeto.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <a
                    href="https://wa.me/5511966373319"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chamar no WhatsApp
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Entre em Contato
            </h3>
            <div className="flex justify-center space-x-8">
              <a
                href="mailto:tenorioleandro22@gmail.com"
                className="flex flex-col items-center group transition-transform duration-300 hover:scale-110"
              >
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300 ${
                    showAnimation ? "animate-float" : ""
                  }`}
                >
                  <SiGmail size={28} color="#EA4335" />
                </span>
                <span className="text-sm text-foreground">Email</span>
              </a>
              <a
                href="https://wa.me/5511966373319"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group transition-transform duration-300 hover:scale-110"
              >
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300 ${
                    showAnimation ? "animate-float" : ""
                  }`}
                >
                  <FaWhatsapp size={28} color="#25D366" />
                </span>
                <span className="text-sm text-foreground">WhatsApp</span>
              </a>
              <a
                href="https://www.linkedin.com/in/leandro-ten%C3%B3rio-088378310/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group transition-transform duration-300 hover:scale-110"
              >
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300 ${
                    showAnimation ? "animate-float" : ""
                  }`}
                >
                  <FaLinkedin size={28} color="#0077B5" />
                </span>
                <span className="text-sm text-foreground">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

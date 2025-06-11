"use client";

import { Button } from "@/components/ui/button";
import { Bot, Github, BarChart3 } from "lucide-react";
import { ProjectCard } from "./project-card";

export const projects = [
  {
    title: "Chatbot com IA",
    description:
      "Um chatbot inteligente desenvolvido com Next.js 13, TypeScript e integração com a API da OpenAI. Oferece respostas contextuais e precisas para perguntas dos usuários.",
    image: null,
    video: "/demo-bot.mp4",
    status: "Em Produção",
    icon: Bot,
    features: [
      "Integração com OpenAI GPT-4",
      "Interface responsiva e moderna",
      "Respostas em tempo real",
      "Histórico de conversas",
    ],
    technologies: [
      "Next.js 13",
      "TypeScript",
      "OpenAI API",
      "TailwindCSS",
      "Shadcn UI",
    ],
    liveUrl: "https://t.me/CaptaLead_bot",
    githubUrl: "https://github.com/TenorioDevfullStack/chatbot",
  },
  {
    title: "Dashboard de Leads",
    description:
      "Dashboard interativo para análise de leads em tempo real. Desenvolvido com Next.js, TypeScript e Shadcn UI. Oferece visualizações dinâmicas e filtros interativos.",
    image: "/images/dashboard1.jpg",
    video: "",
    status: "Em Produção",
    icon: BarChart3,
    features: [
      "Análise em tempo real",
      "Filtros interativos",
      "Gráficos dinâmicos",
      "Exportação de dados",
    ],
    technologies: [
      "Next.js 13",
      "TypeScript",
      "MongoDB",
      "TailwindCSS",
      "Shadcn UI",
    ],
    liveUrl: "https://dashboard-leads-telegram.onrender.com",
    githubUrl: "https://github.com/TenorioDevfullStack/dashboard",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="py-20 bg-gradient-to-br from-background via-purple-50 to-blue-50 dark:from-background dark:via-purple-950 dark:to-blue-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Projetos em Produção
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Soluções reais desenvolvidas e implementadas, demonstrando expertise
            em IA e desenvolvimento full-stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interessado em ver mais projetos?
          </p>
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a
              href="https://github.com/TenorioDevfullStack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              Ver GitHub Completo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

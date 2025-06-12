"use client";

import { ProjectCard } from "./project-card";

// Mantendo os imports das imagens que já estão a funcionar
import projectImage1 from "@/assets/imagens/dashboard1.jpg";
import projectImage2 from "@/assets/imagens/dashboard2.jpg";

// Agora temos uma lista com dois projetos distintos, mas relacionados
const projects = [
  {
    title: "Bot de Captação de Leads com IA (Telegram)",
    description:
      "Desenvolvimento de um bot para Telegram que interage com usuários, captura informações essenciais e utiliza a API do Gemini para qualificar leads em quente, morno ou frio com base no interesse demonstrado.",
    technologies: ["Telegram API", "Gemini API", "Node.js", "TypeScript"],
    media: [
      { type: "video", src: "/demo-bot.mp4" }, // Mídia principal é o vídeo demo
    ],
    livePreviewUrl: "https://t.me/CaptaLead_bot", // Pode ser um link para o bot no Telegram
  },
  {
    title: "Dashboard de Análise e Gestão de Leads",
    description:
      "Plataforma analítica que recebe os dados do Bot do Telegram em tempo real. Permite a visualização, filtragem e gestão dos leads capturados, fornecendo insights para otimizar o processo de vendas.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Recharts",
      "Render",
    ],
    media: [
      { type: "image", src: projectImage1 }, // Mídia principal são as imagens
      { type: "image", src: projectImage2 },
    ],
    livePreviewUrl: "https://dashboard-leads-telegram.onrender.com",
  },
] as const;

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projetos em Destaque
        </h2>
        {/* Restaurando o layout de grid para exibir os cards lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

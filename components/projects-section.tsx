"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { SectionTransition } from "./section-transition";
import { Card3D } from "./3d-card";
import { AnimatedText } from "./animated-text";
import { ParallaxSection } from "./parallax-section";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com integração de pagamentos e gestão de estoque",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "MongoDB"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com colaboração em tempo real",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Firebase", "Tailwind"],
    link: "#",
  },
  {
    title: "AI Chat Assistant",
    description: "Assistente virtual com IA para atendimento ao cliente",
    image: "/projects/aichat.jpg",
    tags: ["Python", "TensorFlow", "FastAPI"],
    link: "#",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <section id="projetos" className="py-20 relative overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="relative mb-12">
          <SectionTransition>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                <AnimatedText text="Projetos" />
              </h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                <AnimatedText text="Conheça alguns dos projetos que desenvolvi para clientes e para estudo" />
              </p>
            </div>
          </SectionTransition>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card3D>
                <div className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-slate-700/40 shadow-xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:ring-2 hover:ring-primary/20 focus-within:ring-2 focus-within:ring-primary/40 transition-colors duration-300 overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-blue-100/10 dark:from-slate-800/30 dark:to-blue-900/10 opacity-60 z-0" />
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors duration-300"
                    >
                      Ver projeto
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, Database, Globe, LineChart, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const expertiseItems = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Inteligência Artificial",
    description:
      "Desenvolvimento de chatbots inteligentes e soluções de IA personalizadas para automação e análise de dados.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Desenvolvimento Full-Stack",
    description:
      "Criação de aplicações web completas com React, Next.js, Node.js e tecnologias modernas.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Integração de Sistemas",
    description:
      "Conectando diferentes sistemas e APIs para criar soluções integradas e eficientes.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Desenvolvimento Web",
    description:
      "Criação de sites e aplicações web responsivas, modernas e otimizadas para SEO.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Análise de Dados",
    description:
      "Transformando dados em insights valiosos com dashboards interativos e relatórios personalizados.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "DevOps & Infraestrutura",
    description:
      "Configuração e manutenção de ambientes de desenvolvimento, testes e produção.",
  },
];

export function ExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      id="expertise"
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Expertise
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Conhecimento técnico e experiência em diversas áreas da tecnologia
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover="hover"
            >
              <Card
                className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-slate-700/40 shadow-xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:ring-2 hover:ring-primary/20 focus-within:ring-2 focus-within:ring-primary/40 transition-colors duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Expertise: ${item.title}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-blue-100/10 dark:from-slate-800/30 dark:to-blue-900/10 opacity-60 z-0" />
                <motion.div
                  variants={iconVariants}
                  className="mb-4 text-purple-500 dark:text-purple-400"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

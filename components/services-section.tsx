"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  Code2,
  Layout,
  Smartphone,
  Database,
  LineChart,
  Shield,
} from "lucide-react";
import { SectionTransition } from "./section-transition";
import { Card3D } from "./3d-card";
import { AnimatedText } from "./animated-text";
import { ParallaxSection } from "./parallax-section";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web modernas e responsivas",
    icon: <Code2 className="w-8 h-8" />,
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "UI/UX Design",
    description: "Design de interfaces intuitivas e experiências memoráveis",
    icon: <Layout className="w-8 h-8" />,
    tags: ["Figma", "Adobe XD", "Prototipagem"],
  },
  {
    title: "Desenvolvimento Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android",
    icon: <Smartphone className="w-8 h-8" />,
    tags: ["React Native", "Flutter", "Swift"],
  },
  {
    title: "Backend & API",
    description: "APIs robustas e sistemas escaláveis",
    icon: <Database className="w-8 h-8" />,
    tags: ["Node.js", "Python", "GraphQL"],
  },
  {
    title: "Análise de Dados",
    description: "Visualização e análise de dados para insights valiosos",
    icon: <LineChart className="w-8 h-8" />,
    tags: ["Power BI", "Python", "SQL"],
  },
  {
    title: "Segurança Digital",
    description: "Proteção e segurança para suas aplicações",
    icon: <Shield className="w-8 h-8" />,
    tags: ["Pentest", "Auditoria", "Compliance"],
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

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <section id="servicos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="container relative z-10 mx-auto px-4">
        <SectionTransition>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              <AnimatedText text="Serviços" />
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              <AnimatedText text="Soluções personalizadas para impulsionar seu negócio com tecnologia de ponta" />
            </p>
          </div>
        </SectionTransition>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card3D>
                <Card
                  className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-slate-700/40 shadow-xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:ring-2 hover:ring-primary/20 focus-within:ring-2 focus-within:ring-primary/40 transition-colors duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Serviço: ${service.title}`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-blue-100/10 dark:from-slate-800/30 dark:to-blue-900/10 opacity-60 z-0" />
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={
                      isInView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0.8, opacity: 0 }
                    }
                    transition={{
                      delay: index * 0.1 + 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-4 text-purple-500 dark:text-purple-400"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20 transition-colors duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

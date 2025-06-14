"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { SectionTransition } from "./section-transition";
import { Card3D } from "./3d-card";
import { AnimatedText } from "./animated-text";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "contato@exemplo.com",
    link: "mailto:contato@exemplo.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Telefone",
    value: "+55 (11) 99999-9999",
    link: "tel:+5511999999999",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Localização",
    value: "São Paulo, SP - Brasil",
    link: "https://maps.google.com",
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

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="container relative z-10 mx-auto px-4">
        <SectionTransition>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              <AnimatedText text="Contato" />
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              <AnimatedText text="Entre em contato para discutirmos seu próximo projeto" />
            </p>
          </div>
        </SectionTransition>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <Card3D>
              <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-slate-700/40 shadow-xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:ring-2 hover:ring-primary/20 focus-within:ring-2 focus-within:ring-primary/40 transition-colors duration-300 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-blue-100/10 dark:from-slate-800/30 dark:to-blue-900/10 opacity-60 z-0" />
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Envie uma mensagem
                </h3>
                <form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Seu nome"
                      className="bg-background/50 border-border focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu email"
                      className="bg-background/50 border-border focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Sua mensagem"
                      className="bg-background/50 border-border focus:border-purple-500 min-h-[150px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label="Enviar mensagem de contato"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensagem
                  </Button>
                </form>
              </div>
            </Card3D>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card3D>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Informações de contato
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-foreground/80 hover:text-purple-500 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={info.title + " de contato"}
                    >
                      <div className="text-purple-500">{info.icon}</div>
                      <div>
                        <h4 className="font-medium text-foreground">
                          {info.title}
                        </h4>
                        <p>{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Card3D>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

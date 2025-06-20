"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronUp,
  Sun,
  Moon,
  Code,
  Database,
  Brain,
  Smartphone,
  Globe,
  Server,
  Zap,
  Cpu,
  Calendar,
  MapPin,
  Send,
  Phone,
  MessageCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Altura da navegação fixa
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Componente de efeito Matrix
  const MatrixRain = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const matrix =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
      const matrixArray = matrix.split("");

      const fontSize = 10;
      const columns = canvas.width / fontSize;

      const drops: number[] = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }

      const draw = () => {
        ctx.fillStyle = isDarkMode
          ? "rgba(10, 10, 26, 0.04)"
          : "rgba(240, 240, 240, 0.04)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = isDarkMode ? "#00FFFF" : "#1e40af";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
          const text =
            matrixArray[Math.floor(Math.random() * matrixArray.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      const interval = setInterval(draw, 35);

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);

      return () => {
        clearInterval(interval);
        window.removeEventListener("resize", handleResize);
      };
    }, [isDarkMode]);

    return (
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full ${
          isDarkMode ? "opacity-20" : "opacity-35"
        }`}
        style={{ pointerEvents: "none" }}
      />
    );
  };

  // Tela de carregamento
  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? "surprise-bg" : "surprise-bg-light"
        }`}
      >
        <div className="relative">
          <MatrixRain />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10 relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className={`w-16 h-16 border-4 border-t-transparent rounded-full mx-auto mb-6 ${
                isDarkMode ? "border-electric-blue" : "border-sky-blue"
              }`}
            />
            <h1
              className={`text-2xl font-bold ${
                isDarkMode ? "electric-text" : "text-dark-teal"
              }`}
            >
              Carregando...
            </h1>
          </motion.div>
        </div>
      </div>
    );
  }

  // Componente de navegação
  const Navigation = () => (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isDarkMode ? "surprise-card" : "surprise-card-light"
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div
              className={`w-10 h-10 rounded-lg ${
                isDarkMode ? "bg-electric-blue" : "bg-emerald-green"
              } flex items-center justify-center ${
                isDarkMode ? "electric-pulse" : "light-pulse"
              }`}
            >
              <span className="text-dark-blue font-bold text-lg">T</span>
            </div>
            <span
              className={`text-xl font-bold ${
                isDarkMode ? "electric-text" : "text-dark-teal"
              }`}
            >
              Leandro Tenório
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              "Início",
              "Sobre",
              "Habilidades",
              "Experiência",
              "Projetos",
              "Contato",
            ].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const sectionMap: { [key: string]: string } = {
                    início: "inicio",
                    sobre: "sobre",
                    habilidades: "habilidades",
                    experiência: "experiencia",
                    projetos: "projetos",
                    contato: "contato",
                  };
                  const sectionId =
                    sectionMap[item.toLowerCase()] || item.toLowerCase();
                  scrollToSection(sectionId);
                }}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "text-light-gray hover:text-electric-blue hover:bg-electric-blue/20"
                    : "text-warm-gray hover:text-emerald-green hover:bg-emerald-green/20"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-3 rounded-full ${
              isDarkMode
                ? "electric-glow bg-electric-blue/20"
                : "light-glow bg-emerald-green/20"
            }`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-electric-blue" />
            ) : (
              <Moon className="w-5 h-5 text-emerald-green" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );

  // Seção Hero com efeito Matrix
  const HeroSection = () => (
    <section
      id="inicio"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDarkMode ? "surprise-bg" : "surprise-bg-light"
      }`}
    >
      <MatrixRain />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto mb-8 rounded-full ${
              isDarkMode ? "electric-glow" : "light-glow"
            }`}
            style={{
              backgroundImage: "url(/images/anime_portrait.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#2a3f2b",
            }}
            role="img"
            aria-label="Leandro Tenório"
          >
            {/* Imagem de fundo para evitar cortes e preencher o círculo */}
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDarkMode ? "electric-text" : "light-gradient-text"
          }`}
        >
          Leandro Tenório
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={`text-xl md:text-2xl mb-8 ${
            isDarkMode ? "text-light-gray" : "text-dark-gray"
          }`}
        >
          Desenvolvedor Full Stack & Especialista em IA
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`text-lg mb-12 max-w-2xl mx-auto ${
            isDarkMode ? "text-light-gray" : "text-dark-gray"
          }`}
        >
          Criando soluções digitais inovadoras com foco em inteligência
          artificial, automação e experiências de usuário excepcionais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projetos")}
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
              isDarkMode
                ? "electric-glow bg-electric-blue text-dark-blue hover:bg-vibrant-cyan"
                : "light-glow bg-emerald-green text-white hover:bg-ocean-blue"
            }`}
          >
            Ver Projetos →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contato")}
            className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${
              isDarkMode
                ? "border-vibrant-cyan text-vibrant-cyan hover:bg-vibrant-cyan hover:text-dark-blue"
                : "border-golden-amber text-golden-amber hover:bg-golden-amber hover:text-white"
            }`}
          >
            Entre em Contato
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center space-x-6 mt-12"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/TenorioDevfullStack",
              color: "text-red-400",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/leandro-ten%C3%B3rio-088378310/",
              color: "text-blue-400",
            },
            {
              icon: Mail,
              href: "mailto:contato@intelligentdevsolutions.com",
              color: "text-green-400",
            },
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-full ${
                isDarkMode
                  ? "surprise-card neon-border"
                  : "surprise-card-light neon-border-light"
              } ${color} transition-all duration-300`}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // Seção Sobre
  const AboutSection = () => (
    <section
      id="sobre"
      className={`py-20 ${isDarkMode ? "surprise-bg" : "surprise-bg-light"}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.05,
            margin: "-100px 0px -100px 0px",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-8 ${
              isDarkMode ? "electric-text" : "text-dark-teal"
            }`}
          >
            Sobre Mim
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: false,
                amount: 0.05,
                margin: "-100px 0px -100px 0px",
              }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-left"
            >
              <p
                className={`text-lg mb-6 ${
                  isDarkMode ? "text-light-gray" : "text-dark-gray"
                }`}
              >
                Sou um desenvolvedor apaixonado por tecnologia e inovação, com
                formação em Eletrônica pela Etec Zona Sul e atualmente cursando
                Análise e Desenvolvimento de Sistemas na Universidade FAM.
              </p>

              <p
                className={`text-lg mb-6 ${
                  isDarkMode ? "text-light-gray" : "text-dark-gray"
                }`}
              >
                Como fundador da{" "}
                <span
                  className={
                    isDarkMode ? "text-electric-blue" : "text-dark-teal"
                  }
                >
                  Tenorio AI Solutions
                </span>
                , especializo-me em criar soluções digitais inovadoras que
                combinam inteligência artificial, automação e desenvolvimento
                full stack.
              </p>

              <p
                className={`text-lg ${
                  isDarkMode ? "text-light-gray" : "text-dark-gray"
                }`}
              >
                Minha missão é transformar ideias em realidade digital,
                otimizando processos através de tecnologias de ponta.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: false,
                amount: 0.05,
                margin: "-100px 0px -100px 0px",
              }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className={`${
                isDarkMode
                  ? "surprise-card neon-border"
                  : "surprise-card-light neon-border-light"
              } p-8 rounded-2xl`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-dark-gray"
                }`}
              >
                Formação & Certificações
              </h3>

              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg ${
                    isDarkMode ? "bg-deep-teal/20" : "bg-sky-blue/20"
                  }`}
                >
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-electric-blue" : "text-dark-teal"
                    }`}
                  >
                    Análise e Desenvolvimento de Sistemas
                  </h4>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-light-gray" : "text-dark-gray"
                    }`}
                  >
                    Universidade FAM - Em andamento
                  </p>
                </div>

                <div
                  className={`p-4 rounded-lg ${
                    isDarkMode ? "bg-deep-teal/20" : "bg-sky-blue/20"
                  }`}
                >
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-electric-blue" : "text-dark-teal"
                    }`}
                  >
                    Técnico em Eletrônica
                  </h4>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-light-gray" : "text-dark-gray"
                    }`}
                  >
                    Etec Zona Sul - 2019
                  </p>
                </div>

                <div
                  className={`p-4 rounded-lg ${
                    isDarkMode ? "bg-deep-teal/20" : "bg-sky-blue/20"
                  }`}
                >
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-electric-blue" : "text-dark-teal"
                    }`}
                  >
                    Desenvolvimento Web & Mobile
                  </h4>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-light-gray" : "text-dark-gray"
                    }`}
                  >
                    OneBitCode
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // Dados das habilidades
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "text-blue-400",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-green-400",
      skills: [
        "Python",
        "Node.js",
        "APIs RESTful",
        "Bancos de Dados",
        "Flask",
        "Express",
      ],
    },
    {
      title: "IA & Automação",
      icon: Brain,
      color: "text-cyan-400",
      skills: [
        "Chatbots",
        "Machine Learning",
        "Automação de Processos",
        "NoCode",
        "Integração de Sistemas",
      ],
    },
    {
      title: "Mobile & E-commerce",
      icon: Smartphone,
      color: "text-orange-400",
      skills: [
        "React Native",
        "Desenvolvimento Mobile",
        "E-commerce",
        "PWA",
        "App Development",
      ],
    },
  ];

  // Seção de Habilidades
  const SkillsSection = () => {
    return (
      <section
        id="habilidades"
        className={`py-20 ${isDarkMode ? "surprise-bg" : "surprise-bg-light"}`}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? "electric-text" : "text-dark-teal"
              }`}
            >
              Habilidades Técnicas
            </h2>
            <p
              className={`text-lg ${
                isDarkMode ? "text-light-gray" : "text-dark-gray"
              }`}
            >
              Tecnologias e ferramentas que domino para criar soluções
              inovadoras
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`${
                  isDarkMode
                    ? "surprise-card neon-border"
                    : "surprise-card-light neon-border-light"
                } p-6 rounded-2xl text-center`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    isDarkMode ? "bg-deep-teal/20" : "bg-sky-blue/20"
                  }`}
                >
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </motion.div>

                <h3
                  className={`text-xl font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-dark-gray"
                  }`}
                >
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-2 rounded-lg text-sm font-medium ${
                        isDarkMode
                          ? "bg-electric-blue/20 text-electric-blue border border-electric-blue/30"
                          : "bg-sky-blue/20 text-dark-teal border border-sky-blue/30"
                      }`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Dados da experiência
  const experiences = [
    {
      title: "Fundador & CEO",
      company: "Tenorio AI Solutions",
      period: "2025 - Presente",
      location: "São Paulo, SP",
      description:
        "Fundei a empresa especializada em soluções de IA e automação, desenvolvendo chatbots inteligentes e sistemas de automação.",
      technologies: ["Python", "IA", "Automação", "NoCode", "Chatbots"],
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Freelancer",
      period: "2023 - Presente",
      location: "Remoto",
      description:
        "Desenvolvimento de aplicações web e mobile, e-commerce e sistemas de gestão para diversos clientes.",
      technologies: ["React", "Next.js", "Node.js", "Python", "TypeScript"],
    },
    {
      title: "Estudante de Desenvolvimento & Gestor de Automação",
      company: "OneBitCode",
      period: "2023 - Presente",
      location: "Online",
      description:
        "Formação completa em desenvolvimento web e mobile, com foco em tecnologias modernas e práticas de mercado. Atualmente me formando como Gestor de Automação NoCode + IA.",
      technologies: [
        "JavaScript",
        "React",
        "React Native",
        "Ruby on Rails",
        "NoCode",
        "IA",
      ],
    },
  ];

  // Seção de Experiência
  const ExperienceSection = () => (
    <section
      id="experiencia"
      className={`py-20 ${isDarkMode ? "surprise-bg" : "surprise-bg-light"}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "electric-text" : "text-dark-teal"
            }`}
          >
            Experiência Profissional
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-light-gray" : "text-dark-gray"
            }`}
          >
            Minha jornada no desenvolvimento de soluções tecnológicas
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 ${
                isDarkMode
                  ? "surprise-card neon-border"
                  : "surprise-card-light neon-border-light"
              } p-8 rounded-2xl`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3
                    className={`text-2xl font-bold ${
                      isDarkMode ? "text-white" : "text-dark-gray"
                    }`}
                  >
                    {exp.title}
                  </h3>
                  <h4
                    className={`text-xl ${
                      isDarkMode ? "text-electric-blue" : "text-dark-teal"
                    }`}
                  >
                    {exp.company}
                  </h4>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div
                    className={`flex items-center ${
                      isDarkMode ? "text-light-gray" : "text-dark-gray"
                    }`}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div
                    className={`flex items-center ${
                      isDarkMode ? "text-light-gray" : "text-dark-gray"
                    }`}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <p
                className={`text-lg mb-6 ${
                  isDarkMode ? "text-light-gray" : "text-dark-gray"
                }`}
              >
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode
                        ? "bg-vibrant-cyan/20 text-vibrant-cyan border border-vibrant-cyan/30"
                        : "bg-golden-amber/20 text-golden-amber border border-golden-amber/30"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Dados dos projetos
  const projects = [
    {
      title: "Bot Captador de Leads Inteligente",
      description:
        "Chatbot avançado no Telegram integrado com IA Gemini que capta, qualifica leads em quente, morno e frio. Sistema completo com dashboard interativo para análise e visualização dos dados extraídos pela IA.",
      technologies: [
        "Python",
        "Telegram API",
        "Gemini AI",
        "Machine Learning",
        "Data Analytics",
      ],
      liveUrl: "https://t.me/CaptaLead_bot",
      dashboardUrl: "https://dashboard-leads-telegram.onrender.com",
      githubUrl: "https://github.com/TenorioDevfullStack/telegram-bot-ia.git",
      featured: true,
      category: "IA & Automação",
      media: {
        image1: "/images/projects/captalead-bot/screenshot1.jpg",
        image2: "/images/projects/captalead-bot/screenshot2.jpg",
        video: "/images/projects/captalead-bot/demo.mp4",
      },
    },
    {
      title: "FitLifePower - Site de Afiliados",
      description:
        "Plataforma completa de afiliados focada em produtos de fitness e bem-estar. Site otimizado para conversões com design responsivo, sistema de tracking de vendas e integração com programas de afiliados.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "SEO",
        "Analytics",
        "Responsive Design",
      ],
      liveUrl: "https://fitlifepower.com.br/",
      githubUrl:
        "https://github.com/TenorioDevfullStack/fitlifepower-site-hostgator.git",
      featured: true,
      category: "E-commerce & Marketing",
      media: {
        image1: "/images/projects/fitlifepower/screenshot1.jpg",
        image2: "/images/projects/fitlifepower/screenshot2.jpg",
        video: "/images/projects/fitlifepower/demo.mp4",
      },
    },
    {
      title: "Organizador Pessoal IA - Telegram",
      description:
        "Bot inteligente no Telegram para gerenciamento de tarefas e compromissos. Integrado com IA Gemini, conecta via API com Google Calendar e envia lembretes automatizados. Perfeito para produtividade pessoal.",
      technologies: [
        "Python",
        "Telegram API",
        "Gemini AI",
        "Google Calendar API",
        "Task Management",
      ],
      githubUrl:
        "https://github.com/TenorioDevfullStack/meu-bot-organizador-pessoal.git",
      featured: true,
      category: "Produtividade & IA",
      media: {
        image1: "/images/projects/organizador-telegram/screenshot1.jpg",
        image2: "/images/projects/organizador-telegram/screenshot2.jpg",
        video: "/images/projects/organizador-telegram/demo.mp4",
      },
    },
    {
      title: "Agente Pessoal WhatsApp GPT",
      description:
        "Assistente pessoal para WhatsApp integrado com a API da OpenAI (ChatGPT), oferecendo respostas inteligentes e personalizadas em tempo real.",
      repo: "https://github.com/TenorioDevfullStack/AgentPessoal3.5Turbo.git",
      technologies: ["Python", "WhatsApp API", "OpenAI API", "ChatGPT"],
      featured: true,
      status: "Em desenvolvimento",
      category: "IA & Assistentes",
      media: {
        image1: "/images/projects/whatsapp-assistant/screenshot1.jpg",
        image2: "/images/projects/whatsapp-assistant/screenshot2.jpg",
        video: "/images/projects/whatsapp-assistant/demo.mp4",
      },
    },
    {
      title: "Habit Tracker - App Android",
      description:
        "Aplicativo Android nativo para rastreamento e gerenciamento de hábitos. Interface intuitiva com gráficos de progresso, notificações inteligentes e sistema de gamificação para motivar o usuário. Atualmente em fase de debug.",
      technologies: [
        "Java",
        "Android SDK",
        "SQLite",
        "Material Design",
        "Notifications",
      ],
      githubUrl: "https://github.com/TenorioDevfullStack/Habit_Tracker_App.git",
      status: "Em desenvolvimento",
      category: "Mobile & Produtividade",
      media: {
        image1: "/images/projects/habit-tracker/screenshot1.jpg",
        image2: "/images/projects/habit-tracker/screenshot2.jpg",
        video: "/images/projects/habit-tracker/demo.mp4",
      },
    },
    {
      title: "Landing Page - Agência de IA",
      description:
        "Site institucional moderno para agência especializada em soluções de Inteligência Artificial. Design responsivo, otimizado para conversões e com foco na apresentação de serviços e cases de sucesso.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "SEO",
      ],
      liveUrl: "https://agencia.intelligentdevsolutions.com/",
      featured: true,
      category: "Web Design & Institucional",
      media: {
        image1: "/images/projects/agencia-ia/screenshot1.jpg",
        image2: "/images/projects/agencia-ia/screenshot2.jpg",
        video: "/images/projects/agencia-ia/demo.mp4",
      },
    },
  ];

  // Seção de Projetos
  const ProjectsSection = () => (
    <section
      id="projetos"
      className={`py-20 ${isDarkMode ? "surprise-bg" : "surprise-bg-light"}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "electric-text" : "text-dark-teal"
            }`}
          >
            Projetos em Destaque
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-light-gray" : "text-dark-gray"
            }`}
          >
            Soluções inovadoras em IA, automação e desenvolvimento full-stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${
                isDarkMode
                  ? "surprise-card neon-border"
                  : "surprise-card-light neon-border-light"
              } rounded-2xl overflow-hidden ${
                project.featured
                  ? isDarkMode
                    ? "border-2 border-vibrant-cyan"
                    : "border-2 border-golden-amber"
                  : ""
              }`}
            >
              {/* Header do Projeto */}
              <div
                className={`p-6 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-electric-blue/10 to-vibrant-cyan/10"
                    : "bg-gradient-to-r from-emerald-green/10 to-ocean-blue/10"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      {project.status && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            isDarkMode
                              ? "bg-vibrant-cyan/20 text-vibrant-cyan"
                              : "bg-golden-amber/20 text-golden-amber"
                          }`}
                        >
                          {project.status}
                        </span>
                      )}
                    </div>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode
                          ? "bg-vibrant-cyan/20 text-vibrant-cyan border border-vibrant-cyan/30"
                          : "bg-golden-amber/20 text-golden-amber border border-golden-amber/30"
                      }`}
                    >
                      {project.category}
                    </div>
                  </div>
                </div>

                <p
                  className={`text-base leading-relaxed ${
                    isDarkMode ? "text-light-gray" : "text-dark-gray"
                  }`}
                >
                  {project.description}
                </p>
              </div>

              {/* Media Section - Imagens e vídeo reais */}
              <div
                className={`p-6 ${
                  isDarkMode ? "bg-deep-teal/5" : "bg-sky-blue/5"
                }`}
              >
                {/* Título da seção de mídia */}
                <div className="mb-4">
                  <h4
                    className={`text-sm font-semibold mb-2 ${
                      isDarkMode ? "text-electric-blue" : "text-ocean-blue"
                    }`}
                  >
                    📸 Visualização do Projeto
                  </h4>
                </div>

                {/* Grid de imagens melhorado */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {/* Primeira imagem */}
                  <div className="relative group">
                    {project.media?.image1 ? (
                      <div className="relative overflow-hidden rounded-xl h-32 sm:h-36 md:h-40 shadow-lg">
                        <img
                          src={project.media.image1}
                          alt={`${project.title} - Screenshot 1`}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.nextElementSibling?.classList.remove(
                              "hidden"
                            );
                          }}
                        />
                        {/* Overlay com ícone de play */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-2">
                            <Brain
                              className={`w-5 h-5 ${
                                isDarkMode
                                  ? "text-electric-blue"
                                  : "text-ocean-blue"
                              }`}
                            />
                          </div>
                        </div>
                        {/* Placeholder fallback */}
                        <div
                          className={`absolute inset-0 ${
                            isDarkMode ? "bg-deep-teal/20" : "bg-ocean-blue/20"
                          } flex items-center justify-center border-2 border-dashed ${
                            isDarkMode
                              ? "border-electric-blue/30"
                              : "border-ocean-blue/30"
                          } hidden`}
                        >
                          <div className="text-center">
                            <Brain
                              className={`w-8 h-8 mx-auto mb-2 ${
                                isDarkMode
                                  ? "text-electric-blue"
                                  : "text-ocean-blue"
                              }`}
                            />
                            <span
                              className={`text-xs ${
                                isDarkMode
                                  ? "text-light-gray"
                                  : "text-warm-gray"
                              }`}
                            >
                              Screenshot 1
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`h-32 sm:h-36 md:h-40 rounded-xl ${
                          isDarkMode ? "bg-deep-teal/20" : "bg-ocean-blue/20"
                        } flex items-center justify-center border-2 border-dashed ${
                          isDarkMode
                            ? "border-electric-blue/30"
                            : "border-ocean-blue/30"
                        } shadow-lg`}
                      >
                        <div className="text-center">
                          <Brain
                            className={`w-8 h-8 mx-auto mb-2 ${
                              isDarkMode
                                ? "text-electric-blue"
                                : "text-ocean-blue"
                            }`}
                          />
                          <span
                            className={`text-xs ${
                              isDarkMode ? "text-light-gray" : "text-warm-gray"
                            }`}
                          >
                            Screenshot 1
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Segunda imagem */}
                  <div className="relative group">
                    {project.media?.image2 ? (
                      <div className="relative overflow-hidden rounded-xl h-32 sm:h-36 md:h-40 shadow-lg">
                        <img
                          src={project.media.image2}
                          alt={`${project.title} - Screenshot 2`}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.nextElementSibling?.classList.remove(
                              "hidden"
                            );
                          }}
                        />
                        {/* Overlay com ícone */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-2">
                            <Smartphone
                              className={`w-5 h-5 ${
                                isDarkMode
                                  ? "text-electric-blue"
                                  : "text-emerald-green"
                              }`}
                            />
                          </div>
                        </div>
                        {/* Placeholder fallback */}
                        <div
                          className={`absolute inset-0 ${
                            isDarkMode
                              ? "bg-deep-teal/20"
                              : "bg-emerald-green/20"
                          } flex items-center justify-center border-2 border-dashed ${
                            isDarkMode
                              ? "border-electric-blue/30"
                              : "border-emerald-green/30"
                          } hidden`}
                        >
                          <div className="text-center">
                            <Smartphone
                              className={`w-8 h-8 mx-auto mb-2 ${
                                isDarkMode
                                  ? "text-electric-blue"
                                  : "text-emerald-green"
                              }`}
                            />
                            <span
                              className={`text-xs ${
                                isDarkMode
                                  ? "text-light-gray"
                                  : "text-warm-gray"
                              }`}
                            >
                              Screenshot 2
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`h-32 sm:h-36 md:h-40 rounded-xl ${
                          isDarkMode ? "bg-deep-teal/20" : "bg-emerald-green/20"
                        } flex items-center justify-center border-2 border-dashed ${
                          isDarkMode
                            ? "border-electric-blue/30"
                            : "border-emerald-green/30"
                        } shadow-lg`}
                      >
                        <div className="text-center">
                          <Smartphone
                            className={`w-8 h-8 mx-auto mb-2 ${
                              isDarkMode
                                ? "text-electric-blue"
                                : "text-emerald-green"
                            }`}
                          />
                          <span
                            className={`text-xs ${
                              isDarkMode ? "text-light-gray" : "text-warm-gray"
                            }`}
                          >
                            Screenshot 2
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Vídeo melhorado */}
                <div className="relative group">
                  {project.media?.video ? (
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                      {/* Container responsivo para vídeo */}
                      <div className="relative w-full aspect-[4/3] md:aspect-video">
                        {" "}
                        {/* 4:3 no mobile, 16:9 no desktop */}
                        <video
                          src={project.media.video}
                          className="absolute inset-0 w-full h-full object-contain md:object-cover transition-all duration-500 group-hover:scale-105"
                          controls
                          preload="metadata"
                          poster={project.media.image1} // Usa a primeira imagem como poster
                          playsInline // Importante para iOS
                          webkit-playsinline="true" // Para compatibilidade iOS
                          onError={(e) => {
                            const target = e.target as HTMLVideoElement;
                            target.style.display = "none";
                            target.nextElementSibling?.classList.remove(
                              "hidden"
                            );
                          }}
                        />
                        {/* Overlay com ícone de play */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <div className="bg-white/90 rounded-full p-3">
                            <Zap
                              className={`w-6 h-6 ${
                                isDarkMode
                                  ? "text-vibrant-cyan"
                                  : "text-golden-amber"
                              }`}
                            />
                          </div>
                        </div>
                        {/* Placeholder fallback */}
                        <div
                          className={`absolute inset-0 ${
                            isDarkMode
                              ? "bg-vibrant-cyan/20"
                              : "bg-golden-amber/20"
                          } flex items-center justify-center border-2 border-dashed ${
                            isDarkMode
                              ? "border-vibrant-cyan/30"
                              : "border-golden-amber/30"
                          } hidden`}
                        >
                          <div className="text-center">
                            <Zap
                              className={`w-6 h-6 mx-auto mb-1 ${
                                isDarkMode
                                  ? "text-vibrant-cyan"
                                  : "text-golden-amber"
                              }`}
                            />
                            <span
                              className={`text-xs ${
                                isDarkMode
                                  ? "text-light-gray"
                                  : "text-warm-gray"
                              }`}
                            >
                              Vídeo Demo
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                      {/* Container responsivo para placeholder do vídeo */}
                      <div className="relative w-full aspect-[4/3] md:aspect-video">
                        {" "}
                        {/* 4:3 no mobile, 16:9 no desktop */}
                        <div
                          className={`absolute inset-0 ${
                            isDarkMode
                              ? "bg-vibrant-cyan/20"
                              : "bg-golden-amber/20"
                          } flex items-center justify-center border-2 border-dashed ${
                            isDarkMode
                              ? "border-vibrant-cyan/30"
                              : "border-golden-amber/30"
                          }`}
                        >
                          <div className="text-center">
                            <Zap
                              className={`w-8 h-8 mx-auto mb-2 ${
                                isDarkMode
                                  ? "text-vibrant-cyan"
                                  : "text-golden-amber"
                              }`}
                            />
                            <span
                              className={`text-sm font-medium ${
                                isDarkMode
                                  ? "text-light-gray"
                                  : "text-warm-gray"
                              }`}
                            >
                              Vídeo Demo
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Indicadores de mídia */}
                <div className="flex justify-center mt-3 space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isDarkMode ? "bg-electric-blue" : "bg-ocean-blue"
                    }`}
                  ></div>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isDarkMode ? "bg-electric-blue" : "bg-ocean-blue"
                    }`}
                  ></div>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isDarkMode ? "bg-vibrant-cyan" : "bg-golden-amber"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Technologies and Actions */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode
                          ? "bg-electric-blue/20 text-electric-blue border border-electric-blue/30"
                          : "bg-ocean-blue/20 text-ocean-blue border border-ocean-blue/30"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isDarkMode
                          ? "bg-electric-blue text-dark-blue hover:bg-vibrant-cyan"
                          : "bg-ocean-blue text-white hover:bg-emerald-green"
                      }`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </motion.a>
                  )}

                  {project.dashboardUrl && (
                    <motion.a
                      href={project.dashboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isDarkMode
                          ? "bg-vibrant-cyan/20 text-vibrant-cyan border border-vibrant-cyan/30 hover:bg-vibrant-cyan hover:text-dark-blue"
                          : "bg-golden-amber/20 text-golden-amber border border-golden-amber/30 hover:bg-golden-amber hover:text-white"
                      }`}
                    >
                      <Database className="w-4 h-4 mr-2" />
                      Dashboard
                    </motion.a>
                  )}

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                      isDarkMode
                        ? "border-light-gray text-light-gray hover:bg-light-gray hover:text-dark-blue"
                        : "border-warm-gray text-warm-gray hover:bg-warm-gray hover:text-white"
                    }`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Seção de Contato
  const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
      "success" | "error" | null
    >(null);

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section
        id="contato"
        className={`py-20 ${isDarkMode ? "surprise-bg" : "surprise-bg-light"}`}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? "electric-text" : "text-dark-teal"
              }`}
            >
              Entre em Contato
            </h2>
            <p
              className={`text-lg ${
                isDarkMode ? "text-light-gray" : "text-dark-gray"
              }`}
            >
              Vamos conversar sobre seu próximo projeto
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-dark-gray"
                }`}
              >
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center p-4 rounded-lg ${
                    isDarkMode ? "surprise-card" : "surprise-card-light"
                  }`}
                >
                  <Mail
                    className={`w-6 h-6 mr-4 ${
                      isDarkMode ? "text-electric-blue" : "text-dark-teal"
                    }`}
                  />
                  <div>
                    <h4
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : "text-dark-gray"
                      }`}
                    >
                      Email
                    </h4>
                    <p
                      className={`${
                        isDarkMode ? "text-light-gray" : "text-dark-gray"
                      }`}
                    >
                      contato@intelligentdevsolutions.com
                    </p>
                  </div>
                </motion.div>

                <motion.a
                  href="https://wa.me/5511989437498"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    isDarkMode
                      ? "surprise-card hover:bg-electric-blue/10"
                      : "surprise-card-light hover:bg-emerald-green/10"
                  }`}
                >
                  <MessageCircle
                    className={`w-6 h-6 mr-4 ${
                      isDarkMode ? "text-electric-blue" : "text-dark-teal"
                    }`}
                  />
                  <div>
                    <h4
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : "text-dark-gray"
                      }`}
                    >
                      WhatsApp
                    </h4>
                    <p
                      className={`${
                        isDarkMode ? "text-light-gray" : "text-dark-gray"
                      }`}
                    >
                      +55 (11) 98943-7498
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center p-4 rounded-lg ${
                    isDarkMode ? "surprise-card" : "surprise-card-light"
                  }`}
                >
                  <MapPin
                    className={`w-6 h-6 mr-4 ${
                      isDarkMode ? "text-electric-blue" : "text-dark-teal"
                    }`}
                  />
                  <div>
                    <h4
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : "text-dark-gray"
                      }`}
                    >
                      Localização
                    </h4>
                    <p
                      className={`${
                        isDarkMode ? "text-light-gray" : "text-dark-gray"
                      }`}
                    >
                      São Paulo, SP - Brasil
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`${
                isDarkMode
                  ? "surprise-card neon-border"
                  : "surprise-card-light neon-border-light"
              } p-8 rounded-2xl`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-dark-gray"
                }`}
              >
                Envie uma Mensagem
              </h3>

              {/* Status de envio */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 mb-6 rounded-lg flex items-center ${
                    isDarkMode
                      ? "bg-emerald-green/20 text-emerald-green"
                      : "bg-emerald-green/20 text-emerald-green"
                  }`}
                >
                  <CheckCircle className="w-5 h-5 mr-3" />
                  Mensagem enviada com sucesso! Obrigado pelo contato.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 mb-6 rounded-lg flex items-center ${
                    isDarkMode
                      ? "bg-red-500/20 text-red-500"
                      : "bg-red-500/20 text-red-500"
                  }`}
                >
                  <XCircle className="w-5 h-5 mr-3" />
                  Ocorreu um erro ao enviar a mensagem. Tente novamente.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-light-gray" : "text-dark-gray"
                    }`}
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-deep-teal/20 border-electric-blue/30 text-white focus:border-electric-blue"
                        : "bg-white border-sky-blue/30 text-dark-gray focus:border-sky-blue"
                    }`}
                    placeholder="Seu nome"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-light-gray" : "text-dark-gray"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-deep-teal/20 border-electric-blue/30 text-white focus:border-electric-blue"
                        : "bg-white border-sky-blue/30 text-dark-gray focus:border-sky-blue"
                    }`}
                    placeholder="seu@email.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-light-gray" : "text-dark-gray"
                    }`}
                  >
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-deep-teal/20 border-electric-blue/30 text-white focus:border-electric-blue"
                        : "bg-white border-sky-blue/30 text-dark-gray focus:border-sky-blue"
                    }`}
                    placeholder="Conte-me sobre seu projeto..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  } ${
                    isDarkMode
                      ? "electric-glow bg-electric-blue text-dark-blue hover:bg-vibrant-cyan"
                      : "light-glow bg-emerald-green text-white hover:bg-ocean-blue"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // Botão de voltar ao topo
  const ScrollToTopButton = () => (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-full z-50 ${
            isDarkMode
              ? "electric-glow bg-electric-blue"
              : "light-glow bg-emerald-green"
          } transition-all duration-300`}
        >
          <ChevronUp className="w-6 h-6 text-dark-blue" />
        </motion.button>
      )}
    </AnimatePresence>
  );

  return (
    <main className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer
        className={`py-12 ${
          isDarkMode ? "bg-slate-900" : "bg-white"
        } border-t ${isDarkMode ? "border-slate-700" : "border-slate-200"}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p
                className={`text-sm ${
                  isDarkMode ? "text-light-gray" : "text-dark-gray"
                }`}
              >
                © {new Date().getFullYear()} Leandro Tenório. Todos os direitos
                reservados.
              </p>
            </div>

            <div className="flex space-x-6">
              <motion.a
                href="https://www.linkedin.com/in/leandro-tenório-088378310/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className={`${
                  isDarkMode
                    ? "text-light-gray hover:text-electric-blue"
                    : "text-dark-gray hover:text-emerald-green"
                } transition-colors`}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://github.com/TenorioDevfullStack"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className={`${
                  isDarkMode
                    ? "text-light-gray hover:text-electric-blue"
                    : "text-dark-gray hover:text-emerald-green"
                } transition-colors`}
              >
                <Github className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="mailto:contato@intelligentdevsolutions.com"
                whileHover={{ scale: 1.1 }}
                className={`${
                  isDarkMode
                    ? "text-light-gray hover:text-electric-blue"
                    : "text-dark-gray hover:text-emerald-green"
                } transition-colors`}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </main>
  );
}

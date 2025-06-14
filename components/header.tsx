"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUp,
  Home,
  Briefcase,
  Code2,
  FolderGit2,
  GitBranch,
  Mail,
} from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const sectionIcons = {
  inicio: Home,
  servicos: Briefcase,
  expertise: Code2,
  projetos: FolderGit2,
  processo: GitBranch,
  contato: Mail,
};

const sectionDescriptions = {
  inicio: "Página inicial do portfólio",
  servicos: "Conheça os serviços oferecidos",
  expertise: "Áreas de especialização",
  projetos: "Projetos desenvolvidos",
  processo: "Metodologia de trabalho",
  contato: "Entre em contato",
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [showRipple, setShowRipple] = useState(false);
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar/esconder botão de voltar ao topo
      setShowScrollTop(window.scrollY > 500);

      // Calcular progresso do scroll
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Atualizar seção ativa
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleThemeChange = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipplePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 600);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleDragStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientY);
  };

  const handleDragMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - dragStart;
    if (diff > 100) {
      setIsMenuOpen(false);
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document
      .getElementById(href.substring(1))
      ?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const renderNavLinks = () =>
    navLinks.map((link, index) => {
      const isActive = activeSection === link.href.substring(1);
      const Icon =
        sectionIcons[link.href.substring(1) as keyof typeof sectionIcons];

      return (
        <motion.div
          key={link.href}
          className="relative group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href={link.href}
            className={`relative px-4 py-2 text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-background/80 dark:hover:bg-background/20 flex items-center gap-2 ${
              isActive ? "text-foreground font-medium" : ""
            }`}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            <span className="flex items-center gap-2">
              <span className="text-xs text-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon className="w-4 h-4" />
              {link.label}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeSection"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full dark:from-purple-600 dark:to-blue-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </a>
        </motion.div>
      );
    });

  return (
    <>
      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-background/20 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        >
          {activeSection && (
            <motion.div
              className="absolute right-0 top-0 w-2 h-2 rounded-full bg-white shadow-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </div>

      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/40 z-40 transition-colors duration-300">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only absolute left-2 top-2 z-[100] bg-primary text-primary-foreground px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Pular para conteúdo principal
        </a>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-slate-400 bg-clip-text text-transparent drop-shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Leandro Tenório
            </motion.div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-1"
              role="navigation"
              aria-label="Navegação principal"
            >
              {renderNavLinks()}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 dark:from-purple-500/5 dark:to-blue-500/5 dark:hover:from-purple-500/10 dark:hover:to-blue-500/10"
                asChild
              >
                <a
                  href="https://t.me/CaptaLead_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Agendar Consulta</span>
                  <motion.span
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <div className="relative">
                <motion.button
                  aria-label="Alternar tema"
                  className="flex items-center gap-2 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors mr-2 border border-border/40 dark:border-border/20 dark:hover:border-border/40 relative overflow-hidden"
                  onClick={handleThemeChange}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showRipple && (
                    <motion.div
                      className="absolute w-20 h-20 bg-white/20 rounded-full"
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        left: ripplePosition.x - 10,
                        top: ripplePosition.y - 10,
                      }}
                    />
                  )}
                  <motion.div
                    animate={{ rotate: theme === "dark" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <Moon className="w-5 h-5 text-blue-500" />
                    )}
                  </motion.div>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-background/80 dark:hover:bg-background/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Botão de tema no mobile */}
            <div className="relative md:hidden">
              <motion.button
                aria-label="Alternar tema"
                className="flex items-center gap-2 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors ml-2 border border-border/40 dark:border-border/20 dark:hover:border-border/40 relative overflow-hidden"
                onClick={handleThemeChange}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showRipple && (
                  <motion.div
                    className="absolute w-20 h-20 bg-white/20 rounded-full"
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      left: ripplePosition.x - 10,
                      top: ripplePosition.y - 10,
                    }}
                  />
                )}
                <motion.div
                  animate={{ rotate: theme === "dark" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-500" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 cursor-pointer"
                  aria-label="Fechar menu"
                  tabIndex={0}
                  onClick={() => setIsMenuOpen(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setIsMenuOpen(false);
                  }}
                />
                <motion.nav
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ type: "spring", damping: 20 }}
                  className="md:hidden fixed top-0 right-0 w-[90vw] max-w-xs h-full bg-background/95 backdrop-blur-md border-l border-border/40 dark:border-border/20 overflow-y-auto z-[60] focus:outline-none"
                  role="navigation"
                  aria-label="Menu principal"
                >
                  <div className="flex flex-col space-y-4 p-6 pt-8">
                    {renderNavLinks()}
                  </div>
                  <div className="p-6 pt-0">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full py-4 text-base bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 dark:from-purple-500/5 dark:to-blue-500/5 dark:hover:from-purple-500/10 dark:hover:to-blue-500/10"
                      asChild
                    >
                      <a
                        href="https://t.me/CaptaLead_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                        tabIndex={0}
                      >
                        <span>Agendar Consulta</span>
                        <motion.span
                          whileHover={{ x: 2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          →
                        </motion.span>
                      </a>
                    </Button>
                  </div>
                </motion.nav>
              </>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Botão Voltar ao Topo */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 dark:from-purple-600 dark:to-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

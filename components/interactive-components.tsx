"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Componente de partículas animadas para o fundo
export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-slate-400 via-blue-500 to-emerald-500 rounded-full opacity-20"
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, Math.random() * 1.5 + 0.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Componente de cursor personalizado
export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  );
};

// Componente de loading avançado
export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-16 h-16 border-4 border-transparent border-t-blue-500 border-r-emerald-500 rounded-full mx-auto mb-4"
        />
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xl font-bold text-white"
        >
          Carregando Portfólio...
        </motion.h2>
      </div>
    </motion.div>
  );
};

// Componente de scroll indicator
export const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-blue-600 to-emerald-600 z-50 origin-left"
      style={{ scaleX: scrollProgress }}
    />
  );
};

// Componente de botão flutuante de volta ao topo
export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-slate-600 via-blue-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        >
          <ChevronRight className="h-6 w-6 transform -rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Componente de estatísticas animadas
export const AnimatedStats = () => {
  const [inView, setInView] = useState(false);
  const stats = [
    { label: "Anos de Experiência", value: 5, suffix: "+" },
    { label: "Projetos Concluídos", value: 50, suffix: "+" },
    { label: "Clientes Satisfeitos", value: 30, suffix: "+" },
    { label: "Tecnologias Dominadas", value: 15, suffix: "+" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border hover:border-blue-500/50 transition-all duration-300 group"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
            className="text-3xl font-bold bg-gradient-to-r from-slate-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
          >
            {stat.value}{stat.suffix}
          </motion.div>
          <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Componente de texto com efeito de digitação
export const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, delay + currentIndex * 50);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
      />
    </span>
  );
};

// Componente de card com efeito 3D
export const Card3D = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const centerX = box.left + box.width / 2;
    const centerY = box.top + box.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    setRotateX(-mouseY / 10);
    setRotateY(mouseX / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};


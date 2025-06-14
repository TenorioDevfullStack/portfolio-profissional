"use client";
import { useEffect, useState, useRef } from "react";

interface Particle {
  left: string;
  top: string;
  animationDelay: string;
  opacity: number;
  boxShadow: string;
}

export default function AnimatedBackground({
  className = "",
}: {
  className?: string;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Garantir que o componente só renderize no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Gerar partículas apenas no cliente
  useEffect(() => {
    if (!isClient) return;

    const generated = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.2,
      boxShadow: `0 0 ${Math.random() * 20 + 10}px ${
        Math.random() * 10 + 5
      }px rgba(255, 255, 255, 0.5)`,
    }));
    setParticles(generated);
  }, [isClient]);

  // Evento de mouse apenas no cliente
  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient]);

  // Não renderizar nada no servidor
  if (!isClient) return null;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 -z-10 pointer-events-none ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-slate-900/20 animate-gradient-move" />
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={p}
          />
        ))}
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

interface Particle {
  left: string;
  top: string;
  animationDelay: string;
  opacity: number;
  boxShadow: string;
}

export default function ParticlesClientOnly() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-float"
          style={p}
        />
      ))}
    </div>
  );
}

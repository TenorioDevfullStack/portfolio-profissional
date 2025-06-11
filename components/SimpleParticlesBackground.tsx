"use client";
import { useEffect, useRef } from "react";

const CODE_SNIPPETS = [
  "console.log('Hello')",
  "function sum(a, b)",
  "return x * y;",
  "let i = 0;",
  "const data = []",
  "if (x > 0)",
  "for (let n of arr)",
  "setTimeout(() => {})",
  "export default",
  "useEffect(() => {})",
  "props.children",
  "Math.random()",
  "while (true)",
  "async function fetch()",
  "try { ... } catch(e) {}",
  "import React from 'react'",
  '<div className="..." />',
  "{ key: value }",
  "const [x, setX] = useState()",
  "=> { return ... }",
];

const COLORS = [
  "#10b981", // verde
  "#3b82f6", // azul
  "#f59e42", // laranja
  "#a21caf", // roxo
  "#eab308", // amarelo
  "#f472b6", // rosa
  "#818cf8", // azul claro
  "#f43f5e", // vermelho
];

function isDarkMode() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export default function SimpleParticlesBackground({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Partículas: trechos de código alinhados verticalmente (efeito Matrix)
    const particles = Array.from({ length: 32 }).map(() => {
      const text =
        CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      return {
        text,
        color,
        x: Math.random() * width,
        y: Math.random() * height,
        fontSize: Math.random() * 18 + 14, // 14px a 32px
        opacity: Math.random() * 0.5 + 0.5, // 0.5 a 1
        speed: Math.random() * 0.7 + 0.3, // velocidade vertical
      };
    });

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Fundo
      if (isDarkMode()) {
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "#181c2a");
        gradient.addColorStop(1, "#232946");
        ctx.fillStyle = gradient;
      } else {
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, "#f0e7ff");
        gradient.addColorStop(0.5, "#c7d2fe");
        gradient.addColorStop(1, "#f9fafb");
        ctx.fillStyle = gradient;
      }
      ctx.fillRect(0, 0, width, height);
      // Partículas
      for (const p of particles) {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.font = `bold ${p.fontSize}px 'Fira Mono', 'Consolas', monospace`;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillText(p.text, p.x, p.y);
        ctx.shadowBlur = 0;
        ctx.restore();
        // Movimento vertical (efeito Matrix)
        p.y += p.speed;
        if (p.y > height + 40) {
          p.y = -20;
          p.x = Math.random() * width;
          p.fontSize = Math.random() * 18 + 14;
          p.opacity = Math.random() * 0.5 + 0.5;
          p.speed = Math.random() * 0.7 + 0.3;
          p.text =
            CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
          p.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        }
      }
      requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full z-0 pointer-events-none ${className}`}
      style={{ display: "block" }}
    />
  );
}

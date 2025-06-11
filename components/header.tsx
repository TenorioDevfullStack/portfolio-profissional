"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-slate-400 bg-clip-text text-transparent drop-shadow-lg">
            Leandro Tenório
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-gray-300 hover:text-slate-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("inicio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-gray-300 hover:text-slate-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("servicos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Serviços
            </a>
            <a
              href="#expertise"
              className="text-gray-300 hover:text-slate-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("expertise")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Expertise
            </a>
            <a
              href="#projetos"
              className="text-gray-300 hover:text-slate-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projetos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projetos
            </a>
            <a
              href="#processo"
              className="text-gray-300 hover:text-slate-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("processo")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Processo
            </a>
            <a
              href="#contato"
              className="text-gray-300 hover:text-slate-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://t.me/CaptaLead_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </a>
            </Button>
            <div className="relative">
              <button
                aria-label="Alternar tema"
                className="flex items-center gap-2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors mr-2"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-500" />
                )}
              </button>
              {showTooltip && (
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-gray-900 text-white text-xs shadow-lg z-50 whitespace-nowrap">
                  {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Botão de tema no mobile */}
          <div className="relative md:hidden">
            <button
              aria-label="Alternar tema"
              className="flex items-center gap-2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors ml-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </button>
            {showTooltip && (
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-gray-900 text-white text-xs shadow-lg z-50 whitespace-nowrap">
                {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#inicio"
                className="text-gray-300 hover:text-slate-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("inicio")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-gray-300 hover:text-slate-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("servicos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Serviços
              </a>
              <a
                href="#expertise"
                className="text-gray-300 hover:text-slate-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("expertise")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Expertise
              </a>
              <a
                href="#projetos"
                className="text-gray-300 hover:text-slate-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projetos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projetos
              </a>
              <a
                href="#processo"
                className="text-gray-300 hover:text-slate-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("processo")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Processo
              </a>
              <a
                href="#contato"
                className="text-gray-300 hover:text-slate-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contato
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://t.me/CaptaLead_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Consulta
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

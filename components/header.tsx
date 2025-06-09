"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-slate-300 to-gray-400 bg-clip-text text-transparent">
            Leandro Tenório
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-gray-300 hover:text-slate-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-gray-300 hover:text-slate-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Serviços
            </a>
            <a
              href="#expertise"
              className="text-gray-300 hover:text-slate-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Expertise
            </a>
            <a
              href="#processo"
              className="text-gray-300 hover:text-slate-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("processo")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Processo
            </a>
            <a
              href="#contato"
              className="text-gray-300 hover:text-slate-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://wa.me/5511966373319" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <a href="mailto:tenorioleandro22@gmail.com">Começar Projeto</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#inicio"
                className="text-gray-300 hover:text-slate-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-gray-300 hover:text-slate-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Serviços
              </a>
              <a
                href="#expertise"
                className="text-gray-300 hover:text-slate-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Expertise
              </a>
              <a
                href="#processo"
                className="text-gray-300 hover:text-slate-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("processo")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Processo
              </a>
              <a
                href="#contato"
                className="text-gray-300 hover:text-slate-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contato
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wa.me/5511966373319" target="_blank" rel="noopener noreferrer">
                    Agendar Consulta
                  </a>
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600" asChild>
                  <a href="mailto:tenorioleandro22@gmail.com">Começar Projeto</a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

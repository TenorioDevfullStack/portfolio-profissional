import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Zap, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-200 via-gray-300 to-slate-400 bg-clip-text text-transparent leading-tight">
            Desenvolvedor
            <br />
            <span className="relative">
              Full Stack & IA
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full"></div>
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor especializado em <strong>soluções web</strong> e <strong>integração com IA</strong>. Crio
            aplicações personalizadas que automatizam processos e otimizam resultados para negócios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              Começar Meu Projeto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2">
              Ver Casos de Sucesso
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20 text-center sm:text-left">
              <Bot className="w-8 h-8 text-purple-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">IA Personalizada</div>
                <div className="text-sm text-gray-600">Chatbots e Assistentes</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20 text-center sm:text-left">
              <Zap className="w-8 h-8 text-blue-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Automação Total</div>
                <div className="text-sm text-gray-600">Processos Otimizados</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20 text-center sm:text-left">
              <TrendingUp className="w-8 h-8 text-indigo-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Resultados Reais</div>
                <div className="text-sm text-gray-600">ROI Comprovado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

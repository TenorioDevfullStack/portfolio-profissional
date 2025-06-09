import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Pronto para Transformar seu Negócio?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Vamos conversar sobre como a IA e automação podem revolucionar seus processos e gerar resultados
            extraordinários.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-3">Consulta Gratuita</h3>
                <p className="mb-4 opacity-90">
                  30 minutos para entender seu desafio e apresentar soluções personalizadas.
                </p>
                <Button variant="secondary" className="w-full">
                  Agendar Consulta
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-3">Contato Direto</h3>
                <p className="mb-4 opacity-90">
                  Fale comigo diretamente via WhatsApp para tirar dúvidas e iniciar seu projeto.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <a href="https://wa.me/5511966373319" target="_blank" rel="noopener noreferrer">
                    Chamar no WhatsApp
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Entre em Contato</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-semibold mb-1">Email</div>
                <div className="opacity-90">tenorioleandro22@gmail.com</div>
              </div>
              <div>
                <div className="font-semibold mb-1">WhatsApp</div>
                <div className="opacity-90">+55 (11) 96637-3319</div>
              </div>
              <div>
                <div className="font-semibold mb-1">LinkedIn</div>
                <div className="opacity-90">linkedin.com/in/leandro-tenório</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

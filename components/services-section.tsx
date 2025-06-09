import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, BarChart3, Globe } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Desenvolvimento de chatbots com IA para atendimento automatizado e classificação de leads.",
    features: ["Integração com IA", "Classificação automática", "Interface conversacional", "Análise de dados"],
    price: "Sob consulta",
  },
  {
    icon: BarChart3,
    title: "Dashboards Interativos",
    description: "Painéis de controle personalizados para visualização de dados e métricas em tempo real.",
    features: ["Gráficos interativos", "Dados em tempo real", "Interface responsiva", "Relatórios automáticos"],
    price: "Sob consulta",
  },
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Aplicações web completas com foco em performance, usabilidade e integração com APIs.",
    features: ["React/Next.js", "APIs RESTful", "Design responsivo", "Deploy otimizado"],
    price: "Sob consulta",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Serviços Especializados
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em IA e automação, desenvolvidas sob medida para transformar seu negócio e gerar
            resultados mensuráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 relative overflow-hidden bg-gray-800 text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-purple-600">{service.price}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="group-hover:bg-purple-600 group-hover:text-white transition-colors text-white border-gray-600 hover:bg-gray-700"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  )
}

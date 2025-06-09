import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "Análise do Projeto",
    description: "Conversa inicial para entender suas necessidades e definir o escopo do projeto.",
    details: ["Reunião de alinhamento", "Definição de requisitos", "Proposta técnica", "Cronograma"],
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Criação da solução usando as melhores práticas e tecnologias adequadas.",
    details: ["Arquitetura da aplicação", "Desenvolvimento iterativo", "Testes funcionais", "Documentação"],
  },
  {
    icon: Rocket,
    title: "Deploy e Entrega",
    description: "Publicação da aplicação e entrega com documentação completa.",
    details: ["Deploy em produção", "Testes finais", "Documentação de uso", "Transferência de acesso"],
  },
]

export function ProcessSection() {
  return (
    <section id="processo" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Processo de Trabalho
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Metodologia comprovada que garante entregas de qualidade, no prazo e dentro do orçamento, com total
            transparência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 bg-gray-900 border-gray-700"
            >
              <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-200">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4 leading-relaxed">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-slate-200">Garantia de Qualidade</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Todos os projetos incluem garantia de 30 dias, documentação completa e suporte técnico para implementação.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span>Código limpo e documentado</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span>Testes automatizados</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span>Entrega no prazo</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span>Suporte pós-entrega</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

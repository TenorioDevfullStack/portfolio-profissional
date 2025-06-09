import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Bot, BarChart3 } from "lucide-react"

const projects = [
  {
    title: "Chatbot Classificador de Leads",
    description:
      "Sistema inteligente que capta leads através de conversas naturais e os classifica automaticamente em quente, morno e frio usando IA Gemini.",
    image:
      "https://sjc.microlink.io/6BPIlCGWHcX5Sxrs5gykrfdWcYTXlTNkKakeer-9NHy2BpGsUYhYUEIpmW53x1A2zZE3OPnrsiuJOjnXwll_0A.jpeg",
    technologies: ["Gemini AI", "Node.js", "JavaScript", "Render"],
    features: [
      "Classificação automática de leads",
      "Integração com IA Gemini",
      "Interface conversacional natural",
      "Análise de intenção de compra",
    ],
    liveUrl: "https://t.me/CaptaLead_bot", // Substitua pelo link real do Render
    githubUrl: "https://github.com/TenorioDevfullStack",
    icon: Bot,
    status: "Em Produção",
  },
  {
    title: "Dashboard de Análise de Leads",
    description:
      "Painel interativo que apresenta dados detalhados da análise de leads, com métricas em tempo real e visualizações intuitivas.",
    image:
      "https://sjc.microlink.io/zoZjxJ6uG2O8IMtgkwepXfvYkpVfsMAoEc0p8Ki6yOF5-u69r3zEr3_JEkoSYAi_FFtyTPixGMoZsxT9a6R3Dw.jpeg",
    technologies: ["React", "Chart.js", "Node.js", "Render"],
    features: [
      "Visualização de dados em tempo real",
      "Gráficos interativos",
      "Métricas de conversão",
      "Interface responsiva",
    ],
    liveUrl: "https://dashboard-leads-telegram.onrender.com",
    githubUrl: "https://github.com/TenorioDevfullStack",
    icon: BarChart3,
    status: "Em Produção",
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-gray-400 bg-clip-text text-transparent">
            Projetos em Produção
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções reais desenvolvidas e implementadas, demonstrando expertise em IA e desenvolvimento full-stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 hover:border-slate-600 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-600 rounded-lg flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-slate-200" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-200">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-400 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3">Principais Funcionalidades:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="sm"
                    className="w-full sm:w-auto flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Interessado em ver mais projetos?</p>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
            <a href="https://github.com/TenorioDevfullStack" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Ver GitHub Completo
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

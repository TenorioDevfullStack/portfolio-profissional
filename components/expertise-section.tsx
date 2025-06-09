import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Gemini AI", category: "IA" },
  { name: "Chart.js", category: "Visualização" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "Git", category: "Versionamento" },
  { name: "Render", category: "Deploy" },
  { name: "APIs REST", category: "Integração" },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Expertise Técnica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Domínio completo das tecnologias mais avançadas em IA e automação, com foco em resultados práticos e
            escaláveis.
          </p>
        </div>

        {/* Technologies */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-200">Tecnologias e Ferramentas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-white border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors cursor-default"
              >
                <span className="font-medium">{tech.name}</span>
                <span className="ml-2 text-xs text-gray-500">({tech.category})</span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card className="p-6 bg-gray-900 border-gray-700 backdrop-blur-sm border-2 hover:border-purple-200 transition-colors">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">IA</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-200">Inteligência Artificial</h4>
              <p className="text-gray-400">
                Desenvolvimento de soluções com GPT, Claude, e modelos personalizados para automação inteligente.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-gray-900 border-gray-700 backdrop-blur-sm border-2 hover:border-purple-200 transition-colors">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">API</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-200">Integração de Sistemas</h4>
              <p className="text-gray-400">
                Conexão perfeita entre diferentes plataformas e sistemas para fluxos de trabalho otimizados.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-gray-900 border-gray-700 backdrop-blur-sm border-2 hover:border-purple-200 transition-colors">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">WEB</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-200">Desenvolvimento Full-Stack</h4>
              <p className="text-gray-400">
                Aplicações completas com interfaces modernas e backends robustos, otimizadas para performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

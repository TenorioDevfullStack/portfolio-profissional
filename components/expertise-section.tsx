import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const technologies = [
  {
    name: "JavaScript",
    category: "Frontend",
    desc: "Linguagem base para aplicações web interativas.",
  },
  {
    name: "React",
    category: "Frontend",
    desc: "Interfaces dinâmicas e responsivas para web moderna.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    desc: "SSR, SSG e rotas otimizadas para alta performance.",
  },
  {
    name: "Node.js",
    category: "Backend",
    desc: "APIs rápidas e escaláveis para back-end robusto.",
  },
  {
    name: "Gemini AI",
    category: "IA",
    desc: "Integração de IA avançada para automação inteligente.",
  },
  {
    name: "Chart.js",
    category: "Visualização",
    desc: "Gráficos interativos para dashboards e relatórios.",
  },
  {
    name: "HTML/CSS",
    category: "Frontend",
    desc: "Estrutura e estilo para layouts modernos e acessíveis.",
  },
  {
    name: "Git",
    category: "Versionamento",
    desc: "Controle de versões eficiente para projetos colaborativos.",
  },
  {
    name: "Render",
    category: "Deploy",
    desc: "Deploy automatizado e escalável de aplicações web.",
  },
  {
    name: "APIs REST",
    category: "Integração",
    desc: "Integração entre sistemas e serviços de forma padronizada.",
  },
  {
    name: "Python",
    category: "Backend/IA",
    desc: "Scripts, automações e soluções de IA personalizadas.",
  },
  {
    name: "Make",
    category: "Automação",
    desc: "Automação de fluxos e integração entre plataformas.",
  },
  {
    name: "n8n",
    category: "Automação",
    desc: "Workflows visuais para automação de processos.",
  },
  {
    name: "Vercel",
    category: "Deploy",
    desc: "Hospedagem instantânea para projetos Next.js e JAMStack.",
  },
  {
    name: "PythonAnywhere",
    category: "Deploy",
    desc: "Execução e deploy de scripts Python na nuvem.",
  },
];

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-20 bg-gradient-to-br from-background via-blue-50 to-purple-50 dark:from-background dark:via-blue-950 dark:to-purple-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Expertise Técnica
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Domínio completo das tecnologias mais modernas para criar soluções
            robustas e escaláveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card/80 border border-border rounded-xl p-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mt-1 shrink-0">
                <span className="text-lg font-bold text-white">
                  {item.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-base font-semibold text-foreground">
                  {item.name}
                  <span className="ml-2 text-xs text-muted-foreground font-normal">
                    ({item.category})
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card className="p-6 bg-card border-gray-700 backdrop-blur-sm border-2 hover:border-purple-200 transition-colors">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-foreground">IA</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">
                Inteligência Artificial
              </h4>
              <p className="text-muted-foreground">
                Desenvolvimento de soluções com GPT, Claude, e modelos
                personalizados para automação inteligente.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-card border-gray-700 backdrop-blur-sm border-2 hover:border-purple-200 transition-colors">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-foreground">API</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">
                Integração de Sistemas
              </h4>
              <p className="text-muted-foreground">
                Conexão perfeita entre diferentes plataformas e sistemas para
                fluxos de trabalho otimizados.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-card border-gray-700 backdrop-blur-sm border-2 hover:border-purple-200 transition-colors">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-foreground">WEB</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">
                Desenvolvimento Full-Stack
              </h4>
              <p className="text-muted-foreground">
                Aplicações completas com interfaces modernas e backends
                robustos, otimizadas para performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

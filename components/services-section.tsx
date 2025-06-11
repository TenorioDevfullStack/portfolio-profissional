import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, BarChart3, Globe } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description:
      "Desenvolvimento de chatbots com IA para atendimento automatizado e classificação de leads.",
    features: [
      "Integração com IA",
      "Classificação automática",
      "Interface conversacional",
      "Análise de dados",
    ],
    price: "Sob consulta",
  },
  {
    icon: BarChart3,
    title: "Dashboards Interativos",
    description:
      "Painéis de controle personalizados para visualização de dados e métricas em tempo real.",
    features: [
      "Gráficos interativos",
      "Dados em tempo real",
      "Interface responsiva",
      "Relatórios automáticos",
    ],
    price: "Sob consulta",
  },
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description:
      "Aplicações web completas com foco em performance, usabilidade e integração com APIs.",
    features: [
      "React/Next.js",
      "APIs RESTful",
      "Design responsivo",
      "Deploy otimizado",
    ],
    price: "Sob consulta",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-br from-background via-purple-50 to-blue-50 dark:from-background dark:via-purple-950 dark:to-blue-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Serviços Especializados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções personalizadas para impulsionar seu negócio com tecnologia
            de ponta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            asChild
          >
            <a
              href="https://t.me/CaptaLead_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento Personalizado
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

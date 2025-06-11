import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle, MessageCircle, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Análise do Projeto",
    description:
      "Conversa inicial para entender suas necessidades e definir o escopo do projeto.",
    details: [
      "Reunião de alinhamento",
      "Definição de requisitos",
      "Proposta técnica",
      "Cronograma",
    ],
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description:
      "Criação da solução usando as melhores práticas e tecnologias adequadas.",
    details: [
      "Arquitetura da aplicação",
      "Desenvolvimento iterativo",
      "Testes funcionais",
      "Documentação",
    ],
  },
  {
    icon: Rocket,
    title: "Deploy e Entrega",
    description: "Publicação da aplicação e entrega com documentação completa.",
    details: [
      "Deploy em produção",
      "Testes finais",
      "Documentação de uso",
      "Transferência de acesso",
    ],
  },
  {
    icon: CheckCircle,
    title: "Suporte e Evolução",
    description:
      "Acompanhamento após a entrega, com suporte técnico e possibilidade de melhorias contínuas.",
    details: [
      "Suporte técnico",
      "Correções rápidas",
      "Evolução de funcionalidades",
      "Consultoria pós-projeto",
    ],
  },
];

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="py-20 bg-gradient-to-br from-background via-blue-50 to-purple-50 dark:from-background dark:via-blue-950 dark:to-purple-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Processo de Trabalho
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma abordagem estruturada para garantir resultados excepcionais em
            cada projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Garantia de Qualidade
          </h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            Todos os projetos incluem garantia de 30 dias, documentação completa
            e suporte técnico para implementação.
          </p>
        </div>
      </div>
    </section>
  );
}

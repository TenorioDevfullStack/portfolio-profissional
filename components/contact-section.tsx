import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-background via-purple-50 to-blue-50 dark:from-background dark:via-purple-950 dark:to-blue-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vamos transformar suas ideias em realidade. Entre em contato para
            discutirmos seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <FaTelegramPlane size={24} color="#229ED9" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Telegram
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Para uma comunicação rápida e direta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a
                  href="https://t.me/leandrosilva_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <SiGmail size={24} color="#EA4335" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Email
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Para propostas formais e documentação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="mailto:leandrosilva.dev@gmail.com">
                  <SiGmail className="w-4 h-4 mr-2" />
                  Enviar Email
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <FaWhatsapp size={24} color="#25D366" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Agendamento
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Para uma reunião detalhada sobre seu projeto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a
                  href="https://calendly.com/leandrosilva-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-4 h-4 mr-2" />
                  Agendar Reunião
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

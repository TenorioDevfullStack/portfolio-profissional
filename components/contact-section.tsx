"use client";

import { useState, useRef } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);

    const result = await sendEmail(formData);

    if (result.success) {
      toast.success("Mensagem enviada com sucesso!");
      formRef.current?.reset(); // Limpa o formulário
    } else {
      // Trata erros de validação ou de envio
      if (result.errors) {
        const errors = result.errors;
        if (errors.name) toast.error(errors.name[0]);
        if (errors.email) toast.error(errors.email[0]);
        if (errors.message) toast.error(errors.message[0]);
      } else {
        toast.error(result.message || "Ocorreu um erro. Tente novamente.");
      }
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Entre em Contato
        </h2>
        {/* Usamos a action diretamente no formulário */}
        <form
          ref={formRef}
          action={handleSubmit}
          className="max-w-xl mx-auto space-y-4"
        >
          <Input
            name="name"
            type="text"
            placeholder="Seu nome"
            required
            disabled={isSubmitting}
            minLength={3}
          />
          <Input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            required
            disabled={isSubmitting}
          />
          <Textarea
            name="message"
            placeholder="Sua mensagem"
            required
            rows={5}
            disabled={isSubmitting}
            minLength={10}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar Mensagem"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

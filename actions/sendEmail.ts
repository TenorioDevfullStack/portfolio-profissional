"use server";

import { z } from "zod";
import { Resend } from "resend";

// Inicializa o Resend com a chave da API que está no arquivo .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// Define o formato e as regras de validação para os dados do formulário
const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa ter no mínimo 3 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  message: z
    .string()
    .min(10, { message: "A mensagem precisa ter no mínimo 10 caracteres." }),
});

export async function sendEmail(formData: FormData) {
  // Converte os dados do formulário para um objeto simples
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  // Valida os dados usando as regras que definimos com o Zod
  const validationResult = contactFormSchema.safeParse(rawFormData);

  // Se a validação falhar, retorna um erro com as mensagens
  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validationResult.data;

  // Se a validação passar, tenta enviar o e-mail
  try {
    const data = await resend.emails.send({
      from: "Contato Portfólio <onboarding@resend.dev>", // Endereço de envio padrão do Resend
      to: ["seu-email-pessoal@gmail.com"], // <-- IMPORTANTE: SUBSTITUA PELO SEU E-MAIL!
      subject: `Nova mensagem de ${name} do seu Portfólio`,
      replyTo: email, // Permite que você responda diretamente para o e-mail do visitante
      html: `<p>Você recebeu uma nova mensagem através do seu portfólio:</p>
             <p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong></p>
             <p>${message}</p>`,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return {
      success: false,
      message: "Ocorreu um erro no servidor. Tente novamente.",
    };
  }
}

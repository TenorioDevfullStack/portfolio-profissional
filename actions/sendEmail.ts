"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

// A validação com Zod não muda, ela é independente do provedor de e-mail
const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa ter no mínimo 3 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  message: z
    .string()
    .min(10, { message: "A mensagem precisa ter no mínimo 10 caracteres." }),
});

// Configuração do "transportador" do Nodemailer com as variáveis de ambiente do Gmail
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: true, // true para a porta 465 (padrão do Gmail com SSL)
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD, // Aqui entra a sua Senha de App de 16 dígitos
  },
});

export async function sendEmail(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validationResult = contactFormSchema.safeParse(rawFormData);

  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validationResult.data;

  // Tenta enviar o e-mail usando o transportador do Nodemailer
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM, // Ex: "Seu Nome <seu-email@gmail.com>"
      to: process.env.EMAIL_TO, // O e-mail onde você quer receber as mensagens
      replyTo: email, // Para poder responder diretamente ao visitante
      subject: `Nova mensagem de ${name} do seu Portfólio`,
      html: `<p>Você recebeu uma nova mensagem através do seu portfólio:</p>
             <p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong></p>
             <p>${message}</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar e-mail com Nodemailer:", error);
    return {
      success: false,
      message: "Ocorreu um erro no servidor ao enviar a mensagem.",
    };
  }
}

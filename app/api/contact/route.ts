import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Configuração do transporter do nodemailer - Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // false para porta 587, true para porta 465
      auth: {
        user: "901963001@smtp-brevo.com",
        pass: "xsmtpsib-2e4a53ab05fb3ac99bb4e53a8a8754725e026a1e0a3a37a0d83048d58a93d706-Evf2DHtd69RnABTj",
      },
    });

    // Configuração do email
    const mailOptions = {
      from: "contato@intelligentdevsolutions.com",
      to: "contato@intelligentdevsolutions.com", // Email de destino
      replyTo: email, // Email do remetente para resposta direta
      subject: `Nova mensagem do portfólio - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #0066CC; margin: 0; font-size: 24px;">🚀 Nova Mensagem do Portfólio</h1>
              <p style="color: #666; margin: 10px 0 0 0;">Intelligent Dev Solutions</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0066CC;">
              <h3 style="color: #333; margin-top: 0; font-size: 18px;">👤 Informações do Contato:</h3>
              <p style="margin: 10px 0;"><strong>Nome:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0066CC;">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Data:</strong> ${new Date().toLocaleString(
                "pt-BR"
              )}</p>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0; font-size: 18px;">💬 Mensagem:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px;">
                <p style="line-height: 1.6; margin: 0; color: #333;">${message.replace(
                  /\n/g,
                  "<br>"
                )}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                📧 Esta mensagem foi enviada através do formulário de contato do portfólio de Leandro Tenório.
              </p>
              <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">
                🔗 <a href="https://intelligentdevsolutions.com" style="color: #0066CC;">Intelligent Dev Solutions</a>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message:
          "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Database, Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Portfólio
          </Link>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-blue-500/20 border border-blue-500/30">
                <Shield className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transparência sobre como coletamos e protegemos seus dados
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
            <div className="space-y-12">
              {/* Introdução */}
              <section>
                <div className="flex items-center mb-6">
                  <Shield className="w-6 h-6 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    1. Introdução
                  </h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Esta Política de Privacidade descreve como{" "}
                    <strong className="text-white">Leandro Tenório</strong>{" "}
                    coleta, usa e protege suas informações no portfólio{" "}
                    <strong className="text-blue-400">
                      intelligentdevsolutions.com
                    </strong>
                    .
                  </p>
                  <p>
                    Estamos comprometidos com a{" "}
                    <strong className="text-white">
                      Lei Geral de Proteção de Dados (LGPD)
                    </strong>{" "}
                    e outras regulamentações de privacidade aplicáveis.
                  </p>
                </div>
              </section>

              {/* Dados Coletados */}
              <section>
                <div className="flex items-center mb-6">
                  <Database className="w-6 h-6 text-green-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    2. Dados Coletados
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      📝 Formulário de Contato
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>
                        <strong>Dados:</strong> Nome, e-mail e mensagem
                      </li>
                      <li>
                        <strong>Finalidade:</strong> Responder solicitações
                        profissionais
                      </li>
                      <li>
                        <strong>Base Legal:</strong> Consentimento
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      📊 Google Analytics
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>
                        <strong>Dados:</strong> Páginas visitadas, tempo no
                        site, origem do tráfego
                      </li>
                      <li>
                        <strong>Eventos:</strong> Cliques no WhatsApp, envios do
                        formulário
                      </li>
                      <li>
                        <strong>Finalidade:</strong> Melhorar a experiência do
                        usuário
                      </li>
                      <li>
                        <strong>Dados anonimizados:</strong> Não identificamos
                        usuários individualmente
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      🖥️ Dados Técnicos
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>
                        <strong>Dados:</strong> Endereço IP, navegador,
                        dispositivo, sistema operacional
                      </li>
                      <li>
                        <strong>Finalidade:</strong> Funcionalidade e segurança
                        do site
                      </li>
                      <li>
                        <strong>Retenção:</strong> Logs mantidos por 6 meses
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Uso dos Dados */}
              <section>
                <div className="flex items-center mb-6">
                  <Lock className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    3. Como Usamos Seus Dados
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-900/20 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-3">
                      ✅ O que Fazemos
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Responder suas mensagens de contato</li>
                      <li>• Analisar estatísticas anônimas do site</li>
                      <li>• Melhorar a experiência do usuário</li>
                      <li>• Identificar e corrigir problemas técnicos</li>
                      <li>• Enviar propostas comerciais (se solicitado)</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-3">
                      ❌ O que NÃO Fazemos
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Vender seus dados para terceiros</li>
                      <li>• Enviar spam ou e-mails não solicitados</li>
                      <li>• Compartilhar dados sem seu consentimento</li>
                      <li>• Usar dados para fins não informados</li>
                      <li>• Armazenar dados por tempo excessivo</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Compartilhamento */}
              <section>
                <div className="flex items-center mb-6">
                  <Database className="w-6 h-6 text-red-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    4. Compartilhamento de Dados
                  </h2>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <p className="text-gray-300 mb-4">
                    Seus dados são compartilhados apenas nas seguintes
                    situações:
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li>
                      <strong className="text-white">
                        🔍 Google Analytics:
                      </strong>{" "}
                      Dados anonimizados para análise estatística (
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        Política do Google
                      </a>
                      )
                    </li>
                    <li>
                      <strong className="text-white">
                        📧 Provedores de E-mail:
                      </strong>{" "}
                      Para envio de respostas às suas mensagens
                    </li>
                    <li>
                      <strong className="text-white">
                        ⚖️ Requisições Legais:
                      </strong>{" "}
                      Quando exigido por lei ou autoridades competentes
                    </li>
                  </ul>
                </div>
              </section>

              {/* Seus Direitos */}
              <section>
                <div className="flex items-center mb-6">
                  <Shield className="w-6 h-6 text-green-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    5. Seus Direitos (LGPD)
                  </h2>
                </div>
                <div className="text-gray-300 mb-6">
                  <p className="mb-6">
                    Conforme a Lei Geral de Proteção de Dados, você tem os
                    seguintes direitos:
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      titulo: "👁️ Acesso",
                      desc: "Saber quais dados temos sobre você",
                    },
                    {
                      titulo: "✏️ Correção",
                      desc: "Corrigir dados incorretos ou desatualizados",
                    },
                    {
                      titulo: "🗑️ Exclusão",
                      desc: "Solicitar a remoção de seus dados",
                    },
                    {
                      titulo: "📦 Portabilidade",
                      desc: "Receber seus dados em formato legível",
                    },
                    {
                      titulo: "🚫 Revogação",
                      desc: "Retirar seu consentimento a qualquer momento",
                    },
                    {
                      titulo: "⛔ Oposição",
                      desc: "Se opor ao tratamento de seus dados",
                    },
                  ].map((direito, index) => (
                    <div
                      key={index}
                      className="bg-green-500/10 border border-green-500/20 rounded-lg p-4"
                    >
                      <h3 className="text-white font-semibold">
                        {direito.titulo}
                      </h3>
                      <p className="text-sm text-gray-300">{direito.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 text-center">
                  <p className="text-gray-300">
                    <strong className="text-white">
                      Para exercer seus direitos, entre em contato:
                    </strong>
                    <br />
                    📧{" "}
                    <a
                      href="mailto:contato@intelligentdevsolutions.com"
                      className="text-blue-400 hover:underline"
                    >
                      contato@intelligentdevsolutions.com
                    </a>
                    <br />
                    📱{" "}
                    <a
                      href="https://wa.me/5511989437498"
                      className="text-green-400 hover:underline"
                    >
                      WhatsApp: +55 (11) 98943-7498
                    </a>
                  </p>
                </div>
              </section>

              {/* Segurança */}
              <section>
                <div className="flex items-center mb-6">
                  <Lock className="w-6 h-6 text-purple-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    6. Segurança dos Dados
                  </h2>
                </div>
                <div className="text-gray-300 mb-6">
                  <p className="mb-6">
                    Implementamos medidas de segurança adequadas para proteger
                    seus dados:
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🔒</div>
                    <h3 className="text-white font-semibold">Criptografia</h3>
                    <p className="text-sm text-gray-300">
                      HTTPS/SSL em todas as páginas
                    </p>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🛡️</div>
                    <h3 className="text-white font-semibold">Proteção</h3>
                    <p className="text-sm text-gray-300">
                      Servidores seguros e atualizados
                    </p>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🔐</div>
                    <h3 className="text-white font-semibold">
                      Acesso Limitado
                    </h3>
                    <p className="text-sm text-gray-300">
                      Apenas ao necessário
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <div className="flex items-center mb-6">
                  <Database className="w-6 h-6 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">7. Cookies</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Utilizamos cookies para melhorar sua experiência:</p>
                  <div className="space-y-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h3 className="text-white font-semibold">
                        🍪 Cookies Essenciais
                      </h3>
                      <p className="text-sm">
                        Necessários para o funcionamento básico do site (não
                        podem ser desabilitados)
                      </p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h3 className="text-white font-semibold">
                        📊 Cookies de Análise
                      </h3>
                      <p className="text-sm">
                        Google Analytics para estatísticas anônimas de uso
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    💡 <strong>Dica:</strong> Você pode desabilitar cookies nas
                    configurações do seu navegador, mas isso pode afetar algumas
                    funcionalidades do site.
                  </p>
                </div>
              </section>

              {/* Retenção */}
              <section>
                <div className="flex items-center mb-6">
                  <Database className="w-6 h-6 text-orange-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    8. Retenção de Dados
                  </h2>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-300">
                    <li>
                      <strong className="text-white">
                        📝 Dados do Formulário:
                      </strong>{" "}
                      Mantidos por 2 anos ou até você solicitar a exclusão
                    </li>
                    <li>
                      <strong className="text-white">
                        📊 Google Analytics:
                      </strong>{" "}
                      Dados anonimizados mantidos por 26 meses (padrão do
                      Google)
                    </li>
                    <li>
                      <strong className="text-white">🗂️ Logs de Acesso:</strong>{" "}
                      Mantidos por 6 meses para fins de segurança
                    </li>
                    <li>
                      <strong className="text-white">🗑️ Exclusão:</strong> Você
                      pode solicitar a exclusão de seus dados a qualquer momento
                    </li>
                  </ul>
                </div>
              </section>

              {/* Alterações */}
              <section>
                <div className="flex items-center mb-6">
                  <Shield className="w-6 h-6 text-red-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    9. Alterações na Política
                  </h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Esta política pode ser atualizada ocasionalmente. Mudanças
                    significativas serão comunicadas através de:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>• 📢 Aviso na página inicial do site</li>
                    <li>
                      • 📧 E-mail para usuários que já entraram em contato
                    </li>
                    <li>• 📅 Atualização da data no topo desta página</li>
                  </ul>
                  <p className="text-sm text-gray-400">
                    Recomendamos verificar esta política periodicamente para se
                    manter informado sobre como protegemos seus dados.
                  </p>
                </div>
              </section>

              {/* Contato */}
              <section>
                <div className="flex items-center mb-6">
                  <Mail className="w-6 h-6 text-green-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    10. Fale Conosco
                  </h2>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 rounded-lg p-8 text-center">
                  <h3 className="text-white font-semibold text-lg mb-4">
                    💬 Dúvidas sobre esta Política de Privacidade?
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <p>
                      <strong className="text-white">
                        Responsável pelos Dados:
                      </strong>{" "}
                      Leandro Tenório
                      <br />
                      <strong className="text-white">Empresa:</strong> Tenorio
                      AI Solutions
                      <br />
                      <strong className="text-white">Localização:</strong> São
                      Paulo, SP - Brasil
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                      <a
                        href="mailto:contato@intelligentdevsolutions.com"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        E-mail
                      </a>
                      <a
                        href="https://wa.me/5511989437498"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
                      >
                        📱 WhatsApp
                      </a>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                      ⚡ Resposta garantida em até 24 horas
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

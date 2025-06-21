"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Lock, Mail, Database } from "lucide-react";
import Link from "next/link";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              Transparência total sobre como coletamos, usamos e protegemos seus
              dados
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
            {/* Introdução */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">1. Introdução</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Esta Política de Privacidade descreve como{" "}
                  <strong className="text-white">Leandro Tenório</strong>{" "}
                  ("nós", "nosso" ou "nos") coleta, usa e protege suas
                  informações quando você visita nosso portfólio profissional
                  <strong className="text-blue-400">
                    {" "}
                    intelligentdevsolutions.com
                  </strong>{" "}
                  (o "Serviço").
                </p>
                <p>
                  Respeitamos sua privacidade e estamos comprometidos em
                  proteger seus dados pessoais em conformidade com a{" "}
                  <strong className="text-white">
                    Lei Geral de Proteção de Dados (LGPD)
                  </strong>{" "}
                  e outras regulamentações aplicáveis.
                </p>
              </div>
            </section>

            {/* Dados Coletados */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Database className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">
                  2. Dados Que Coletamos
                </h2>
              </div>
              <div className="text-gray-300 space-y-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    📝 Dados Fornecidos por Você
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Formulário de Contato:</strong> Nome, e-mail e
                      mensagem
                    </li>
                    <li>
                      <strong>Finalidade:</strong> Responder suas solicitações e
                      estabelecer contato profissional
                    </li>
                    <li>
                      <strong>Base Legal:</strong> Consentimento e interesse
                      legítimo
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    📊 Dados Coletados Automaticamente
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Google Analytics:</strong> Páginas visitadas,
                      tempo de permanência, origem do tráfego
                    </li>
                    <li>
                      <strong>Informações Técnicas:</strong> Endereço IP,
                      navegador, sistema operacional, dispositivo
                    </li>
                    <li>
                      <strong>Cookies:</strong> Pequenos arquivos para melhorar
                      sua experiência
                    </li>
                    <li>
                      <strong>Finalidade:</strong> Analisar o desempenho do site
                      e melhorar a experiência do usuário
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    📱 Eventos Rastreados
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Cliques em Contatos:</strong> WhatsApp, e-mail,
                      LinkedIn
                    </li>
                    <li>
                      <strong>Interações:</strong> Envio de formulários,
                      navegação entre seções
                    </li>
                    <li>
                      <strong>Finalidade:</strong> Entender quais conteúdos são
                      mais relevantes
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Como Usamos */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">
                  3. Como Usamos Seus Dados
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-3">
                      ✅ Usos Permitidos
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Responder suas mensagens de contato</li>
                      <li>• Analisar estatísticas de uso do site</li>
                      <li>• Melhorar a experiência do usuário</li>
                      <li>• Identificar problemas técnicos</li>
                      <li>• Enviar propostas comerciais (se solicitado)</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-3">
                      ❌ NÃO Fazemos
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Vender seus dados para terceiros</li>
                      <li>• Enviar spam ou e-mails não solicitados</li>
                      <li>• Compartilhar dados sem consentimento</li>
                      <li>• Usar dados para fins diferentes do informado</li>
                      <li>• Armazenar dados por tempo excessivo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Compartilhamento */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-red-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">
                  4. Compartilhamento de Dados
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Seus dados pessoais são compartilhados apenas nas seguintes
                  situações:
                </p>
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <ul className="space-y-3">
                    <li>
                      <strong className="text-white">Google Analytics:</strong>{" "}
                      Dados anonimizados para análise estatística (
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        className="text-blue-400 hover:underline"
                      >
                        Política do Google
                      </a>
                      )
                    </li>
                    <li>
                      <strong className="text-white">
                        Provedores de E-mail:
                      </strong>{" "}
                      Para envio de respostas às suas mensagens
                    </li>
                    <li>
                      <strong className="text-white">
                        Requisições Legais:
                      </strong>{" "}
                      Quando exigido por lei ou autoridades competentes
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Seus Direitos */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">
                  5. Seus Direitos (LGPD)
                </h2>
              </div>
              <div className="text-gray-300">
                <p className="mb-6">
                  Conforme a Lei Geral de Proteção de Dados, você tem os
                  seguintes direitos:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      titulo: "Acesso",
                      desc: "Saber quais dados temos sobre você",
                    },
                    {
                      titulo: "Correção",
                      desc: "Corrigir dados incorretos ou desatualizados",
                    },
                    {
                      titulo: "Exclusão",
                      desc: "Solicitar a remoção de seus dados",
                    },
                    {
                      titulo: "Portabilidade",
                      desc: "Receber seus dados em formato legível",
                    },
                    {
                      titulo: "Revogação",
                      desc: "Retirar seu consentimento a qualquer momento",
                    },
                    {
                      titulo: "Oposição",
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
                <div className="mt-6 p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-center">
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
              </div>
            </section>

            {/* Segurança */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">
                  6. Segurança dos Dados
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Implementamos medidas de segurança adequadas para proteger
                  seus dados:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🔒</div>
                    <h3 className="text-white font-semibold">Criptografia</h3>
                    <p className="text-sm">HTTPS/SSL em todas as páginas</p>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🛡️</div>
                    <h3 className="text-white font-semibold">Proteção</h3>
                    <p className="text-sm">Servidores seguros e atualizados</p>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🔐</div>
                    <h3 className="text-white font-semibold">Acesso</h3>
                    <p className="text-sm">Limitado apenas ao necessário</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Retenção */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Database className="w-6 h-6 text-orange-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">
                  7. Retenção de Dados
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
                  <ul className="space-y-3">
                    <li>
                      <strong className="text-white">
                        Dados do Formulário:
                      </strong>{" "}
                      Mantidos por 2 anos ou até solicitação de exclusão
                    </li>
                    <li>
                      <strong className="text-white">Google Analytics:</strong>{" "}
                      Dados anonimizados mantidos por 26 meses (padrão do
                      Google)
                    </li>
                    <li>
                      <strong className="text-white">Logs de Acesso:</strong>{" "}
                      Mantidos por 6 meses para segurança
                    </li>
                    <li>
                      <strong className="text-white">Exclusão:</strong> Você
                      pode solicitar a exclusão a qualquer momento
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">8. Cookies</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Utilizamos cookies para melhorar sua experiência. Tipos de
                  cookies:
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h3 className="text-white font-semibold">
                      🍪 Cookies Essenciais
                    </h3>
                    <p className="text-sm">
                      Necessários para o funcionamento básico do site
                    </p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h3 className="text-white font-semibold">
                      📊 Cookies de Análise
                    </h3>
                    <p className="text-sm">
                      Google Analytics para estatísticas anônimas
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Você pode desabilitar cookies nas configurações do seu
                  navegador, mas isso pode afetar a funcionalidade do site.
                </p>
              </div>
            </section>

            {/* Alterações */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-red-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">
                  9. Alterações na Política
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Esta política pode ser atualizada ocasionalmente. Mudanças
                  significativas serão comunicadas através:
                </p>
                <ul className="space-y-2">
                  <li>• Aviso na página inicial do site</li>
                  <li>• E-mail para usuários cadastrados (se aplicável)</li>
                  <li>• Data de "última atualização" no topo desta página</li>
                </ul>
              </div>
            </section>

            {/* Contato */}
            <section>
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">10. Contato</h2>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 rounded-lg p-8 text-center">
                <h3 className="text-white font-semibold text-lg mb-4">
                  Dúvidas sobre esta Política de Privacidade?
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <strong className="text-white">Responsável:</strong> Leandro
                    Tenório
                    <br />
                    <strong className="text-white">Empresa:</strong> Tenorio AI
                    Solutions
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <a
                      href="mailto:contato@intelligentdevsolutions.com"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      📧 E-mail
                    </a>
                    <a
                      href="https://wa.me/5511989437498"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      📱 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

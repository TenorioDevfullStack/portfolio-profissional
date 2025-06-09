import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center sm:text-left md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Leandro Tenório
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Desenvolvedor Full Stack especializado em soluções web e integração com IA. Transformando ideias em
              aplicações funcionais e eficientes.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://github.com/TenorioDevfullStack"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/leandro-ten%C3%B3rio-088378310/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:tenorioleandro22@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chatbots Inteligentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Automação de Processos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Assistentes de IA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Análise de Dados
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>tenorioleandro22@gmail.com</li>
              <li>+55 (11) 96637-3319</li>
              <li>São Paulo, SP</li>
              <li>Disponível para projetos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Leandro Tenório. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

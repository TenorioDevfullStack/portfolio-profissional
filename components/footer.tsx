import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Leandro Silva. Todos os direitos
              reservados.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/leandrosilva-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <FaGithub size={24} color="#181717" />
            </a>
            <a
              href="https://linkedin.com/in/leandrosilva-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} color="#0077B5" />
            </a>
            <a
              href="https://t.me/leandrosilva_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Telegram"
            >
              <FaTelegramPlane size={24} color="#229ED9" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer
      className="py-8 bg-background border-t border-border"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
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
              href="https://github.com/TenorioDevfullStack"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="GitHub de Leandro Tenório"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-github" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/leandro-ten%C3%B3rio-088378310/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="LinkedIn de Leandro Tenório"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-linkedin" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

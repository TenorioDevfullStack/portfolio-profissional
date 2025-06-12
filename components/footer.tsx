import { SocialLinks } from "./social-links";

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
          <SocialLinks iconSize={24} />
        </div>
      </div>
    </footer>
  );
}

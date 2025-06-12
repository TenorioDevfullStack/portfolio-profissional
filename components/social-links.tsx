import { socialLinks } from "@/lib/data";

type SocialLinksProps = {
  iconSize?: number;
  className?: string;
};

export function SocialLinks({
  iconSize = 24,
  className = "",
}: SocialLinksProps) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label={link.label}
          >
            <Icon size={iconSize} color={link.color} />
          </a>
        );
      })}
    </div>
  );
}

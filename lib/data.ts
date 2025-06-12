import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export const socialLinks = [
  {
    href: "https://github.com/TenorioDevfullStack",
    label: "GitHub",
    icon: FaGithub,
    color: "#181717",
  },
  {
    href: "https://www.linkedin.com/in/leandro-ten%C3%B3rio-088378310/",
    label: "LinkedIn",
    icon: FaLinkedin,
    color: "#0077B5",
  },
  {
    href: "https://t.me/CaptaLead_bot",
    label: "Telegram",
    icon: FaTelegramPlane,
    color: "#229ED9",
  },
  {
    href: "mailto:tenorioleandro22@gmail.com",
    label: "Gmail",
    icon: SiGmail,
    color: "#EA4335",
  },
  {
    href: "https://wa.me/551196637319",
    label: "WhatsApp",
    icon: FaWhatsapp,
    color: "#25D366",
  },
];

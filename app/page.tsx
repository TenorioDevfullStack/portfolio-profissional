import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { ProjectsSection } from "@/components/projects-section";
import { ProcessSection } from "@/components/process-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ProcessSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}

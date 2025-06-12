import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { ProjectsSection } from "@/components/projects-section";
import { ProcessSection } from "@/components/process-section";
import { CTASection } from "@/components/cta-section"; // <-- CORREÇÃO APLICADA AQUI
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ProcessSection />
        <CTASection /> {/* <-- CORREÇÃO APLICADA AQUI */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

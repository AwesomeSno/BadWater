import { useAuth } from "@/hooks/use-auth";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import ProjectsSection from "@/components/sections/projects-section";
import NewsSection from "@/components/sections/news-section";
import JoinUsSection from "@/components/sections/join-us-section";
import ContactSection from "@/components/sections/contact-section";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <NewsSection />
      <JoinUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

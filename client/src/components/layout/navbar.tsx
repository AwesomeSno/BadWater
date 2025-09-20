import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`floating-nav glass rounded-full px-8 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white/8 backdrop-blur-xl' : 'bg-white/5 backdrop-blur-lg'
      }`}>
        <div className="flex items-center space-x-8">
          <div className="font-futuristic font-bold text-xl text-primary" data-testid="logo-badwater">
            BadWater
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-sm hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-sm hover:text-primary transition-colors"
              data-testid="nav-services"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-sm hover:text-primary transition-colors"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('news')} 
              className="text-sm hover:text-primary transition-colors"
              data-testid="nav-news"
            >
              News
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('join')} 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm hover:glow-blue transition-all"
              data-testid="nav-join"
            >
              Join Us
            </button>
            {user && (
              <a 
                href="/admin" 
                className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm hover:glow-purple transition-all"
                data-testid="nav-admin"
              >
                Admin
              </a>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
            <div className="glass-card rounded-2xl p-6 mx-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-left hover:text-primary transition-colors py-2"
                  data-testid="mobile-nav-home"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-left hover:text-primary transition-colors py-2"
                  data-testid="mobile-nav-about"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-left hover:text-primary transition-colors py-2"
                  data-testid="mobile-nav-services"
                >
                  What We Do
                </button>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-left hover:text-primary transition-colors py-2"
                  data-testid="mobile-nav-projects"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('news')} 
                  className="text-left hover:text-primary transition-colors py-2"
                  data-testid="mobile-nav-news"
                >
                  News
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-left hover:text-primary transition-colors py-2"
                  data-testid="mobile-nav-contact"
                >
                  Contact
                </button>
                <button 
                  onClick={() => scrollToSection('join')} 
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm hover:glow-blue transition-all text-center"
                  data-testid="mobile-nav-join"
                >
                  Join Us
                </button>
                {user && (
                  <a 
                    href="/admin" 
                    className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm hover:glow-purple transition-all text-center block"
                    data-testid="mobile-nav-admin"
                  >
                    Admin
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

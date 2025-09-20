import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-gradient absolute inset-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-float">
          <h1 className="font-futuristic font-black text-5xl md:text-8xl mb-6" data-testid="hero-title">
            <span className="text-gradient">BAD</span><span className="text-white">WATER</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light" data-testid="hero-subtitle">
            Next-Generation Creative Tech Studio
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
            Where cutting-edge technology meets large-scale entertainment production. 
            We craft the future through innovation, artistry, and relentless ambition.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={scrollToProjects}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:glow-blue transition-all transform hover:scale-105"
            data-testid="button-explore-work"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Explore Our Work
          </Button>
          <Button 
            variant="outline"
            className="glass px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all border-white/20"
            data-testid="button-watch-showreel"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Showreel
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse-slow">
        <div className="w-2 h-2 bg-primary rounded-full glow-blue"></div>
      </div>
      <div className="absolute bottom-32 right-20 animate-pulse-slow" style={{animationDelay: '2s'}}>
        <div className="w-3 h-3 bg-accent rounded-full glow-purple"></div>
      </div>
    </section>
  );
}

import { Monitor, Brain, Home, Gamepad2, Film, Music } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Operating Systems",
    description: "Next-generation OS development with intuitive interfaces and revolutionary user experiences.",
    color: "primary"
  },
  {
    icon: Brain,
    title: "AI Research Tools",
    description: "Advanced artificial intelligence solutions that push the boundaries of machine learning.",
    color: "accent"
  },
  {
    icon: Home,
    title: "Home Automation",
    description: "Smart home ecosystems that seamlessly integrate with your lifestyle and preferences.",
    color: "primary"
  },
  {
    icon: Gamepad2,
    title: "Video Games",
    description: "Immersive gaming experiences with cutting-edge graphics and innovative gameplay mechanics.",
    color: "accent"
  },
  {
    icon: Film,
    title: "Motion Pictures",
    description: "Large-scale film production with state-of-the-art visual effects and storytelling.",
    color: "primary"
  },
  {
    icon: Music,
    title: "Sound Production",
    description: "Professional audio engineering and music production for multimedia experiences.",
    color: "accent"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-futuristic font-bold text-4xl md:text-6xl mb-6 text-gradient" data-testid="services-title">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
            Our expertise spans across cutting-edge technology and entertainment production
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const glowClass = service.color === 'primary' ? 'hover:glow-blue' : 'hover:glow-purple';
            const bgColorClass = service.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20';
            const textColorClass = service.color === 'primary' ? 'text-primary' : 'text-accent';
            
            return (
              <div 
                key={index}
                className={`glass-card rounded-2xl p-8 ${glowClass} transition-all project-card`}
                data-testid={`service-card-${index}`}
              >
                <div className={`w-16 h-16 ${bgColorClass} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`text-2xl ${textColorClass} h-8 w-8`} />
                </div>
                <h3 className="font-futuristic font-bold text-xl mb-4" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

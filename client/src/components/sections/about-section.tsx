export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-futuristic font-bold text-4xl md:text-6xl mb-6 text-gradient" data-testid="about-title">
            About BadWater
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="about-subtitle">
            Formerly known as The Shadow Company, we've evolved into a powerhouse that bridges 
            the gap between revolutionary technology and world-class entertainment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech office space" 
              className="rounded-2xl glass-card p-1"
              data-testid="about-image"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h3 className="font-futuristic font-bold text-2xl mb-4 text-primary" data-testid="vision-title">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="vision-description">
                To redefine the boundaries of what's possible when technology, creativity, and 
                ambition converge. We envision a future where immersive experiences and 
                intelligent systems enhance human potential.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-futuristic font-bold text-2xl mb-4 text-accent" data-testid="mission-title">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="mission-description">
                To create groundbreaking solutions across multiple domains—from operating 
                systems and AI research to blockbuster entertainment and immersive gaming 
                experiences that push the industry forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

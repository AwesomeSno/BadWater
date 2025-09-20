export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="font-futuristic font-bold text-2xl text-primary mb-4" data-testid="footer-logo">
              BadWater
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md" data-testid="footer-description">
              Next-generation creative tech studio pushing the boundaries of technology, 
              entertainment, and human imagination.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-primary transition-colors"
                  data-testid="footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-primary transition-colors"
                  data-testid="footer-services"
                >
                  What We Do
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="hover:text-primary transition-colors"
                  data-testid="footer-projects"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('news')} 
                  className="hover:text-primary transition-colors"
                  data-testid="footer-news"
                >
                  News
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection('join')} 
                  className="hover:text-primary transition-colors"
                  data-testid="footer-join"
                >
                  Join Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-primary transition-colors"
                  data-testid="footer-contact"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors" data-testid="footer-partnerships">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors" data-testid="footer-press">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm" data-testid="footer-copyright">
            © 2024 BadWater Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="footer-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="footer-terms">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="footer-security">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

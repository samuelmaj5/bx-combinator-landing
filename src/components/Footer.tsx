const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2">BX Combinator</h3>
            <p className="text-muted-foreground">
              Student-driven startup initiative at École Polytechnique
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Apply
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Community
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2024 BX Combinator - École Polytechnique. Building the future, one idea at a time.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
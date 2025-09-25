const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">BX Combinator</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Student-driven startup initiative at École Polytechnique
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-4 sm:mb-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm sm:text-base">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm sm:text-base">
              Apply
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm sm:text-base">
              Community
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm sm:text-base">
              Contact
            </a>
          </div>
          
          <div className="text-xs sm:text-sm text-muted-foreground px-4">
            © 2024 BX Combinator - École Polytechnique. Building the future, one idea at a time.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
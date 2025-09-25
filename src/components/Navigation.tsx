import { Button } from "@/components/ui/button";
import logo from "@/assets/bx-combinator-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="BX Combinator" 
              className="h-10 w-auto"
            />
            <div className="text-2xl font-bold text-foreground">
              BX Combinator
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              About
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Community
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="https://form.typeform.com/to/W3RTVrbF" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
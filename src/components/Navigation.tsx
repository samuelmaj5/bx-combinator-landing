import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            BX Combinator
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              About
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Community
            </Button>
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
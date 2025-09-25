import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl text-foreground">
              <span className="font-bold">BX</span>
              <span className="font-light italic ml-1">Combinator</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary hidden sm:inline-flex" asChild>
              <Link to="/recommendations">Recommendations</Link>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary sm:hidden text-sm" asChild>
              <Link to="/recommendations">Recs</Link>
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 hover:shadow-glow transition-all duration-300 text-sm sm:text-base px-3 sm:px-4"
              asChild
            >
              <a href="https://form.typeform.com/to/W3RTVrbF" target="_blank" rel="noopener noreferrer">
                <span className="hidden sm:inline">Apply Now</span>
                <span className="sm:hidden">Apply</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
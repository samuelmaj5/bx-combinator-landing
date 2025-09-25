import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Build the Future
            <span className="text-primary block">
              Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            BX Combinator is a student-driven initiative at École Polytechnique that connects 
            the best talent with entrepreneurial ambitions.
          </p>

          <div className="mb-12">
            <blockquote className="text-lg md:text-xl italic text-foreground/80 font-medium">
              "Every $1B idea starts as a student project. Yours?"
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              asChild
            >
              <a href="https://form.typeform.com/to/W3RTVrbF" target="_blank" rel="noopener noreferrer">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="static" 
              size="lg"
              className="border-primary text-primary text-lg px-8 py-6"
              asChild
            >
              <a href="https://t.me/+SUC2dVDJ83liOGU0" target="_blank" rel="noopener noreferrer">
                Join Community
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
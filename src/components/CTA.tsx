import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Ready to Build?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed text-white">
            Join the first cohort of motivated students and turn your ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-background hover:bg-background/90 text-foreground shadow-glow hover:shadow-elegant transition-all duration-300 text-lg px-8 py-6 min-h-[48px] touch-manipulation w-full sm:w-auto"
              asChild
            >
              <a 
                href="https://form.typeform.com/to/W3RTVrbF" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Apply to BX Combinator
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="static"
              className="border-primary-foreground/30 text-white text-lg px-8 py-6 min-h-[48px] touch-manipulation w-full sm:w-auto"
              asChild
            >
              <a 
                href="https://t.me/+SUC2dVDJ83liOGU0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Telegram
              </a>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-lg opacity-75 text-white">
              Questions? Reach out to us and let's build the future together.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-background/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;
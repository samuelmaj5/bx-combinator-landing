const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            What We Do
          </h2>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-foreground">
              BX Combinator is a student-driven initiative at École Polytechnique that connects 
              the best talent with entrepreneurial ambitions.
            </p>
            
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
              <p className="text-foreground mb-6 font-medium">
                <strong className="text-primary">THE goal of this year</strong> is to build a small cohort of motivated students 
                to create our first batch, where everyone will meet like-minded students, start building, 
                share their experience, get feedback, and share their goals for the next 2 weeks.
              </p>
              
              <p className="text-muted-foreground">
                We'll meet every two weeks.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-left p-6 rounded-xl border border-border hover:shadow-elegant transition-smooth">
                <h3 className="text-xl font-semibold text-primary mb-4">What We Offer</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Events with guests (founders, VCs, mentors)</li>
                  <li>• Organized trips and networking</li>
                  <li>• Project development from ideas to startups</li>
                  <li>• Regular cohort meetings and feedback</li>
                </ul>
              </div>
              
              <div className="text-left p-6 rounded-xl border border-border hover:shadow-elegant transition-smooth">
                <h3 className="text-xl font-semibold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  Expose students to startup ambitions so they can maximize their impact 
                  and help change the French mindset toward innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
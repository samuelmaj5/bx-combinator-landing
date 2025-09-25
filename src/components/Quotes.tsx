const Quotes = () => {
  const quotes = [
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      company: "Apple"
    },
    {
      quote: "Move fast and break things.",
      author: "Mark Zuckerberg",
      company: "Meta"
    },
    {
      quote: "Good ideas are always crazy until they're not.",
      author: "Larry Page",
      company: "Google"
    },
    {
      quote: "If you are not embarrassed by the first version of your product, you've launched too late.",
      author: "Reid Hoffman",
      company: "LinkedIn"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            Mindset
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {quotes.map((quoteData, index) => (
              <div 
                key={index}
                className="bg-card/70 rounded-2xl p-8 border border-border shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <blockquote className="text-xl md:text-2xl font-semibold text-foreground text-center leading-relaxed mb-6">
                  "{quoteData.quote}"
                </blockquote>
                <div className="text-center">
                  <p className="text-lg font-medium text-primary mb-1">
                    {quoteData.author}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {quoteData.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
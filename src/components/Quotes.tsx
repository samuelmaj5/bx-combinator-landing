const Quotes = () => {
  const quotes = [
    "Build NOW. Succeed tomorrow.",
    "Every $1B idea starts as a student project. Yours?",
    "Not everyone will make it. You might.",
    "Great minds build. Mediocre ones watch."
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Mindset
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <blockquote className="text-xl md:text-2xl font-semibold text-primary text-center leading-relaxed">
                  "{quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
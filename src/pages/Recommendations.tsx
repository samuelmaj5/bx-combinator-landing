const Recommendations = () => {
  const videos = [
    { id: "LCEmiRjPEtQ", title: "Startup Video 1" },
    { id: "IXubBqd8uXs", title: "Startup Video 2" },
    { id: "uqc_vt95GJg", title: "Startup Video 3" },
    { id: "1W4dFNSQmnA", title: "Startup Video 4" },
    { id: "GU9iT7MW0rs", title: "Startup Video 5" },
    { id: "KHSI0Qu4ovQ", title: "Startup Video 6" },
    { id: "qp0HIF3SfI4", title: "Startup Video 7" },
    { id: "5noIKN8t69U", title: "Startup Video 8" },
    { id: "LSuSb7NFUT8", title: "Startup Video 9" },
    { id: "6Bso2GYLoME", title: "Startup Video 10" },
    { id: "ReGC2GtWFp4", title: "Startup Video 11" },
    { id: "FPYl7nIKRbA", title: "Startup Video 12" },
    { id: "6NZ8-WQGb-g", title: "Startup Video 13" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Content <span className="text-primary">Recommendations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated content to fuel your entrepreneurial journey
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
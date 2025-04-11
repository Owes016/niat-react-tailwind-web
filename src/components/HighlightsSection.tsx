
import { useRef, useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

const highlightsData = [
  {
    year: 1,
    number: "01",
    image: "/lovable-uploads/2092abe6-d35d-4dfe-9df3-33da7715e6bc.png",
    points: [
      "Get a solid grip on programming fundamentals",
      "Build your first full stack applications like"
    ],
    logos: [
      { src: "https://img.icons8.com/color/48/000000/whatsapp--v1.png", alt: "WhatsApp" },
      { src: "https://img.icons8.com/color/48/000000/google-maps-new.png", alt: "Google Maps" },
      { src: "https://img.icons8.com/color/48/000000/youtube-play.png", alt: "YouTube" },
      { src: "https://img.icons8.com/color/48/000000/amazon.png", alt: "Amazon" },
      { src: "https://img.icons8.com/color/48/000000/netflix.png", alt: "Netflix" }
    ]
  },
  {
    year: 2,
    number: "02",
    image: "/lovable-uploads/2092abe6-d35d-4dfe-9df3-33da7715e6bc.png",
    points: [
      "Master competitive programming",
      "Participate in international contests like"
    ],
    logos: [
      { src: "https://img.icons8.com/color/48/000000/summer.png", alt: "Google Summer of Code" },
      { src: "https://img.icons8.com/color/48/000000/competitive-programming.png", alt: "ICPC" }
    ]
  },
  {
    year: 3,
    number: "03",
    image: "/lovable-uploads/2092abe6-d35d-4dfe-9df3-33da7715e6bc.png",
    points: [
      "Specialize in Machine Learning and Data Science",
      "Compete in challenges on"
    ],
    logos: [
      { src: "https://img.icons8.com/color/48/000000/kaggle.png", alt: "Kaggle" }
    ]
  },
  {
    year: 4,
    number: "04",
    image: "/lovable-uploads/2092abe6-d35d-4dfe-9df3-33da7715e6bc.png",
    points: [
      "Build cutting-edge applications using Generative AI and LLMs",
      "Get placed in your dream company"
    ],
    logos: []
  }
];

const HighlightsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(scrollPercentage);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="py-16 bg-yellow-50 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sticky content */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
            <div className="p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Highlights of <span className="text-red-700">NIAT</span>
              </h2>
              <p className="text-gray-700 mb-8">
                Step into NIAT's immersive four-year program, where every module, project is a milestone towards your dream software job.
              </p>
              <div className="hidden lg:block">
                <Progress value={scrollProgress} className="h-2 bg-gray-200 w-full mb-6" />
                <p className="text-sm text-gray-500">{Math.round(scrollProgress)}% completed</p>
              </div>
            </div>
          </div>

          {/* Right scrollable content */}
          <div className="lg:w-2/3" ref={scrollContainerRef}>
            <ScrollArea className="h-[750px] w-full pr-4">
              <div className="space-y-12">
                {highlightsData.map((highlight, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-0 top-0 h-full w-1 bg-red-700"></div>
                    <div className="flex items-start gap-8 ml-6">
                      <div className="text-4xl font-bold text-gray-600 mt-2">
                        {highlight.number}
                      </div>
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-red-700 w-full">
                        <div className="h-64 w-full bg-cover bg-center" style={{ 
                          backgroundImage: `url(${highlight.image})`,
                          backgroundPosition: `${index * 25}% ${index * 25}%`
                        }} />
                        <div className="bg-red-700 text-white text-center py-3">
                          <h3 className="text-xl font-semibold">Year {highlight.year}</h3>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-4">
                            {highlight.points.map((point, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-red-700 mr-2">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                          {highlight.logos.length > 0 && (
                            <div className="flex flex-wrap justify-center mt-4 gap-4">
                              {highlight.logos.map((logo, logoIndex) => (
                                <img
                                  key={logoIndex}
                                  src={logo.src}
                                  alt={logo.alt}
                                  className="h-8 w-auto"
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;

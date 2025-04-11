
import { ArrowRight, Download, Phone } from "lucide-react";
import { Button } from "./ui/button";

const HeadlinesSection = () => {
  const headlines = [
    {
      logo: "https://www.financialexpress.com/wp-content/themes/financial_theme/images/fe_india_today.png",
      date: "11 Jun 2024",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "NxtWave recognized as a 'Technology Pioneer' by World Economic Forum",
    },
    {
      logo: "https://www.timesofindianews.com/wp-content/uploads/2020/06/cropped-WhatsApp-Image-2020-06-14-at-7.46.32-PM.jpeg",
      date: "13 Jun 2024",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "NxtWave, has been named a Tech Pioneer 2024 by the World Economic Forum",
    },
    {
      logo: "https://files.techmahindra.com/static/img/cnbc-logo.png",
      date: "23 Sep 2024",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "NSDC, NxtWave join hands to upskill 3 million students",
    },
    {
      logo: "https://cdn.ndtv.com/static/images/ndtv_default_image_livetv.png",
      date: "30 Sep 2024",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "NxtWave launches new AI training programs in partnership with tech giants",
    }
  ];

  return (
    <div className="bg-amber-100 py-16">
      <div className="container-custom">
        <h2 className="text-center text-4xl font-bold mb-12">
          <span className="text-niat-dark">NxtWave Made </span>
          <span className="text-red-700">Headlines</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {headlines.map((headline, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <img src={headline.logo} alt="News Logo" className="h-8" />
                <span className="text-sm text-gray-600">{headline.date}</span>
              </div>
              <img 
                src={headline.image} 
                alt={headline.title}
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="font-medium text-niat-blue mb-3">{headline.title}</h3>
                <a 
                  href="#" 
                  className="inline-flex items-center text-red-700 hover:text-red-800 font-medium"
                >
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          <Button className="bg-red-800 hover:bg-red-900 text-white px-6 py-6 h-auto">
            <Phone className="mr-2 h-5 w-5" />
            Talk to Our Counsellor
          </Button>
          <Button variant="outline" className="border-2 border-red-800 text-red-800 hover:bg-red-50 px-6 py-6 h-auto">
            <Download className="mr-2 h-5 w-5" />
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeadlinesSection;

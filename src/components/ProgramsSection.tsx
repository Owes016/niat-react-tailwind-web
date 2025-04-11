
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Career Edge Program",
      features: [
        "4-month intensive training",
        "Real-world industry projects",
        "Guaranteed placement assistance",
        "Professional certification"
      ],
      price: "₹49,999",
      popular: true
    },
    {
      title: "Corporate Training",
      features: [
        "Customized for your team",
        "Flexible scheduling options",
        "On-site or remote delivery",
        "Industry expert trainers"
      ],
      price: "Custom Quote",
      popular: false
    },
    {
      title: "Degree Partnership",
      features: [
        "B.Tech/M.Tech collaboration",
        "Industry exposure during study",
        "Dual certification",
        "Higher placement opportunities"
      ],
      price: "Contact for Details",
      popular: false
    }
  ];

  return (
    <div id="programs" className="py-16 bg-niat-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Training Programs</h2>
          <p className="section-subtitle">
            Choose the program that fits your career goals and learning preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden ${
                program.popular 
                  ? 'border-2 border-niat-orange relative' 
                  : 'border border-gray-200'
              }`}
            >
              {program.popular && (
                <div className="absolute top-0 right-0 bg-niat-orange text-white text-sm px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold text-niat-blue mb-4">{program.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-niat-blue">{program.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-niat-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={program.popular ? "btn-primary w-full" : "btn-outline w-full"}>
                  {program.popular ? "Enroll Now" : "Learn More"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;

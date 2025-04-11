
import { ChevronDown, Download, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is the degree as part of NIAT approved by UGC?",
      answer: "Yes, all degrees offered by NIAT are approved by the University Grants Commission (UGC) and are nationally recognized."
    },
    {
      question: "What is the focus of the four-year computer science program at NIAT?",
      answer: "The four-year computer science program at NIAT focuses on providing comprehensive knowledge in programming, data structures, algorithms, software engineering, and emerging technologies like AI and ML."
    },
    {
      question: "What are the specialisations offered?",
      answer: "NIAT offers specializations in Full Stack Development, Data Science & Analytics, Cloud Computing, Cyber Security, Mobile App Development, and Artificial Intelligence."
    },
    {
      question: "What is the curriculum of NxtWave Institute of Advanced Technologies?",
      answer: "The curriculum at NxtWave Institute of Advanced Technologies is industry-aligned and focuses on practical skills, project-based learning, and cutting-edge technologies."
    },
    {
      question: "Does the curriculum include hands-on projects and real-world applications?",
      answer: "Yes, the curriculum includes extensive hands-on projects, real-world applications, and industry case studies to ensure practical exposure."
    },
    {
      question: "Are there opportunities for internships during the program?",
      answer: "Yes, NIAT has partnerships with leading tech companies and provides internship opportunities during the program to gain industry experience."
    },
    {
      question: "What kind of certifications will I receive upon completion of the program?",
      answer: "Upon completion, you will receive a degree certificate and multiple industry-recognized certifications in specialized domains."
    },
    {
      question: "Why do these certifications matter?",
      answer: "These certifications validate your skills to employers, increase your employability, and give you a competitive edge in the job market."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-4xl font-bold text-niat-dark mb-12">FAQ's</h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 rounded-md overflow-hidden"
            >
              <button
                className={`w-full p-5 text-left flex justify-between items-center ${
                  openIndex === index ? "bg-red-800 text-white" : "bg-red-800 text-white"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white border border-gray-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          <Button className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-6 h-auto">
            <Phone className="mr-2 h-5 w-5" />
            Talk to Our Counsellor
          </Button>
          <Button variant="outline" className="border-2 border-amber-400 text-black hover:bg-amber-50 px-6 py-6 h-auto">
            <Download className="mr-2 h-5 w-5" />
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

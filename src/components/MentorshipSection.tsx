
import { User, Building, School } from "lucide-react";

const MentorshipSection = () => {
  const features = [
    {
      icon: <User className="h-10 w-10 text-red-700" />,
      title: "World-Class Mentors",
      description: "From Microsoft, Google, Amazon & Top IITs"
    },
    {
      icon: <Building className="h-10 w-10 text-red-700" />,
      title: "Record Placements",
      description: "Pool of 3000+ Companies for software job opportunities"
    },
    {
      icon: <School className="h-10 w-10 text-red-700" />,
      title: "New-Age Classrooms",
      description: "Surrounded by top software companies"
    }
  ];

  return (
    <div className="bg-amber-100 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center p-6 ${
                index !== features.length - 1 ? "md:border-r md:border-red-700/20" : ""
              }`}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-3">
                {feature.title}
              </h3>
              <p className="text-niat-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorshipSection;

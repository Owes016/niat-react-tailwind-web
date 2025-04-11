
import { Award, Users, BookOpen, Building } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-10 w-10 text-niat-orange" />,
      count: "15,000+",
      label: "Students Trained"
    },
    {
      icon: <Award className="h-10 w-10 text-niat-orange" />,
      count: "95%",
      label: "Placement Rate"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-niat-orange" />,
      count: "50+",
      label: "Course Offerings"
    },
    {
      icon: <Building className="h-10 w-10 text-niat-orange" />,
      count: "100+",
      label: "Corporate Partners"
    }
  ];

  return (
    <div className="bg-niat-light py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="section-subtitle">
            NIAT's contribution to the IT industry through quality education and training
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-niat-blue mb-2">{stat.count}</h3>
              <p className="text-niat-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

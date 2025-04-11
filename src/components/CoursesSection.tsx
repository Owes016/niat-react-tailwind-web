
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Monitor, Server, Smartphone, Laptop } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: <Code className="h-10 w-10 text-niat-orange mb-4" />,
      title: "Full Stack Development",
      description: "Master frontend and backend technologies to build complete web applications",
      popular: true
    },
    {
      icon: <Database className="h-10 w-10 text-niat-orange mb-4" />,
      title: "Data Science & Analytics",
      description: "Learn to analyze data and derive meaningful insights for business decisions",
      popular: false
    },
    {
      icon: <Server className="h-10 w-10 text-niat-orange mb-4" />,
      title: "Cloud Computing",
      description: "Develop skills in AWS, Azure, and Google Cloud platforms with hands-on projects",
      popular: true
    },
    {
      icon: <Monitor className="h-10 w-10 text-niat-orange mb-4" />,
      title: "Cyber Security",
      description: "Learn to protect systems, networks, and programs from digital attacks",
      popular: false
    },
    {
      icon: <Smartphone className="h-10 w-10 text-niat-orange mb-4" />,
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications for iOS and Android",
      popular: false
    },
    {
      icon: <Laptop className="h-10 w-10 text-niat-orange mb-4" />,
      title: "Artificial Intelligence",
      description: "Explore machine learning, deep learning, and neural networks",
      popular: true
    }
  ];

  return (
    <div id="courses" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Featured Courses</h2>
          <p className="section-subtitle">
            Industry-relevant courses designed to help you master the latest technologies and advance your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {course.icon}
                {course.popular && (
                  <span className="inline-block bg-niat-orange text-white text-xs px-2 py-1 rounded-full ml-2">
                    Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-niat-blue mb-3">{course.title}</h3>
                <p className="text-niat-gray mb-4">{course.description}</p>
                <a 
                  href="#" 
                  className="flex items-center text-niat-blue font-medium hover:text-niat-orange transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="btn-secondary">View All Courses</Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;

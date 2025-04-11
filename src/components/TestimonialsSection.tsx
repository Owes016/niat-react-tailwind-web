
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Software Engineer at Google",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      testimonial: "The Full Stack Development course at NIAT completely transformed my career. The practical approach to learning and industry-relevant curriculum helped me land my dream job at Google.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Data Scientist at Amazon",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      testimonial: "I had no prior experience in data science, but the step-by-step guidance from NIAT's experienced faculty made the learning journey smooth and effective. Highly recommended!",
      rating: 5
    },
    {
      name: "Vikram Mehta",
      role: "Cloud Architect at Microsoft",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      testimonial: "The hands-on projects and real-world scenarios in NIAT's Cloud Computing course provided me with the skills employers are looking for. The placement assistance was exceptional.",
      rating: 4
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Student Success Stories</h2>
          <p className="section-subtitle">
            Hear from our alumni who have transformed their careers with NIAT's training
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[currentTestimonial].rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg italic text-gray-700 mb-6">"{testimonials[currentTestimonial].testimonial}"</p>
                <h4 className="font-bold text-niat-blue text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-niat-gray">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 -left-4 md:-left-6">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-niat-blue" />
            </button>
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 -right-4 md:-right-6">
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-niat-blue" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === currentTestimonial ? "bg-niat-orange" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

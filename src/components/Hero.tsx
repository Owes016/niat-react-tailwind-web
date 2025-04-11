
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-niat-blue to-blue-900 text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Careers through Advanced IT Training
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              National Institute of Advanced Information Technology offers cutting-edge courses designed to transform your career in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Explore Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-niat-blue">
                Learn More
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Students learning at NIAT"
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

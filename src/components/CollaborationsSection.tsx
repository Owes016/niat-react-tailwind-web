
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const universities = [
  {
    name: "Sharda University",
    location: "Delhi - Noida",
    image: "/lovable-uploads/5dcd37a0-66ec-4437-a19f-9f9f77cece08.png",
    imagePosition: "0 0"
  },
  {
    name: "Ajeenkya DY Patil University",
    location: "Pune",
    image: "/lovable-uploads/5dcd37a0-66ec-4437-a19f-9f9f77cece08.png",
    imagePosition: "50% 0"
  },
  {
    name: "Sanjay Ghodawat University",
    location: "Kolhapur-Maharashtra",
    image: "/lovable-uploads/5dcd37a0-66ec-4437-a19f-9f9f77cece08.png",
    imagePosition: "100% 0"
  },
  {
    name: "Yenepoya University",
    location: "Mangalore",
    image: "/lovable-uploads/5dcd37a0-66ec-4437-a19f-9f9f77cece08.png",
    imagePosition: "0 33.3%"
  },
  {
    name: "Chaitanya (Deemed to be University)",
    location: "Hyderabad",
    image: "/lovable-uploads/5dcd37a0-66ec-4437-a19f-9f9f77cece08.png", 
    imagePosition: "50% 33.3%"
  },
  {
    name: "NRI",
    location: "Vijayawada",
    image: "/lovable-uploads/5dcd37a0-66ec-4437-a19f-9f9f77cece08.png",
    imagePosition: "100% 33.3%"
  },
  {
    name: "Takshashila University",
    location: "Chennai-Pondicherry",
    image: "/lovable-uploads/5dcd37a0-66ec-4437-a19f-9f9f77cece08.png",
    imagePosition: "0 66.6%"
  },
  {
    name: "Vivekananda Global University",
    location: "Jaipur",
    image: "/lovable-uploads/5dcd37a0-66ec-4437-a19f-9f9f77cece08.png",
    imagePosition: "50% 66.6%"
  },
  {
    name: "Yenepoya University",
    location: "Bangalore",
    image: "/lovable-uploads/5dcd37a0-66ec-4437-a19f-9f9f77cece08.png",
    imagePosition: "100% 66.6%"
  },
  {
    name: "Annamacharya University",
    location: "Andhra Pradesh",
    image: "/lovable-uploads/5dcd37a0-66ec-4437-a19f-9f9f77cece08.png",
    imagePosition: "0 100%"
  }
];

const CollaborationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-12">
          <span className="text-red-700 text-3xl md:text-4xl font-bold">In Collaboration</span>
          <span className="text-niat-blue text-3xl md:text-4xl font-bold"> With</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((university, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url(${university.image})`,
                  backgroundPosition: university.imagePosition
                }}
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-niat-blue mb-2">{university.name}</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1 text-red-700" />
                  <span className="text-sm">{university.location}</span>
                </div>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <button className="text-center w-full py-2 border border-orange-400 text-orange-600 rounded-md hover:bg-orange-50 transition-colors">
                      Know Details
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-semibold">{university.name}</h4>
                      <p className="text-sm text-gray-500">
                        Partnered with NIAT to provide industry-relevant education
                        and career opportunities for students in the tech industry.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;

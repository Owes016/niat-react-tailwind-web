
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <div id="contact" className="py-16 bg-niat-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about our programs? Get in touch with our team for more information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-niat-blue mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-niat-dark mb-1">
                    Full Name
                  </label>
                  <Input 
                    id="name"
                    placeholder="Enter your name" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-niat-dark mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-niat-dark mb-1">
                  Phone Number
                </label>
                <Input 
                  id="phone" 
                  placeholder="Enter your phone number" 
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-niat-dark mb-1">
                  Course of Interest
                </label>
                <select 
                  id="course"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Select a course</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="datascience">Data Science & Analytics</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="cybersecurity">Cyber Security</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="ai">Artificial Intelligence</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-niat-dark mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your inquiry or message" 
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button className="btn-primary w-full">Send Message</Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-niat-blue mb-6">Contact Information</h3>
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex">
                <MapPin className="h-6 w-6 text-niat-orange mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-niat-blue">Address</h4>
                  <p className="text-niat-gray">
                    NIAT Campus, Gachibowli<br />
                    Hyderabad, Telangana 500032<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex">
                <Phone className="h-6 w-6 text-niat-orange mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-niat-blue">Phone</h4>
                  <p className="text-niat-gray">
                    +91 40 6712 3456<br />
                    +91 95024 67890
                  </p>
                </div>
              </div>

              <div className="flex">
                <Mail className="h-6 w-6 text-niat-orange mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-niat-blue">Email</h4>
                  <p className="text-niat-gray">
                    info@niatindia.com<br />
                    admissions@niatindia.com
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-niat-blue mb-2">Business Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-niat-gray">
                  <div>Monday - Friday:</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Saturday:</div>
                  <div>10:00 AM - 4:00 PM</div>
                  <div>Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-2 rounded-lg shadow-sm h-64">
              {/* This would be a real map in production */}
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-niat-gray">
                Google Map would be embedded here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

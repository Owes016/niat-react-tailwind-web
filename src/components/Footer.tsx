
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-niat-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">NIAT</span>
              <span className="text-niat-orange font-bold">India</span>
            </div>
            <p className="text-blue-200 mb-6">
              National Institute of Advanced Information Technology is a premier training institute dedicated to empowering careers through advanced IT education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="text-blue-200 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#programs" className="text-blue-200 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Full Stack Development</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Data Science & Analytics</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Cloud Computing</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Cyber Security</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Artificial Intelligence</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-niat-orange mr-2">Location:</span>
                <span className="text-blue-200">NIAT Campus, Gachibowli, Hyderabad, Telangana 500032</span>
              </li>
              <li className="flex items-start">
                <span className="text-niat-orange mr-2">Phone:</span>
                <span className="text-blue-200">+91 40 6712 3456</span>
              </li>
              <li className="flex items-start">
                <span className="text-niat-orange mr-2">Email:</span>
                <span className="text-blue-200">info@niatindia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} NIAT India. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

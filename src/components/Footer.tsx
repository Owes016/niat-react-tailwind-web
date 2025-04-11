
import { Facebook, Instagram, Linkedin, MapPin, Phone, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://via.placeholder.com/50x50/FFD700/000000?text=NIAT" 
                alt="NIAT Logo" 
                className="mr-3"
              />
              <div>
                <div className="text-xl font-bold text-amber-400">NxtWave Institute of</div>
                <div className="text-xl font-bold text-amber-400">Advanced Technologies</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Masterclass</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Reach Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">+91 8008 9009 08</p>
                  <p className="text-sm text-gray-400">(WhatsApp only)</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                <span>support@niatindia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-start md:items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-400 mt-1 md:mt-0" />
              <div>
                <p className="font-medium">Admissions Office Address:</p>
                <p className="text-gray-400 max-w-md">
                  NIAT - NxtWave Institute of Advanced Technologies, No. 144 Survey 37, 
                  Financial District, Nanakramguda, Telangana 500032
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-amber-400 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-amber-400 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-amber-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-amber-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-amber-400 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Grievance Redressal</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Corporate Information</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of use</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Vision and Mission</a>
          </div>
        </div>
        
        <div className="fixed bottom-6 right-6">
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center gap-2">
            <span className="hidden md:inline">Chat with us</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8L10 16L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-niat-blue">NIAT</span>
              <span className="text-niat-orange font-bold">India</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-niat-dark hover:text-niat-orange font-medium transition-colors">Home</a>
            <a href="#courses" className="text-niat-dark hover:text-niat-orange font-medium transition-colors">Courses</a>
            <a href="#programs" className="text-niat-dark hover:text-niat-orange font-medium transition-colors">Programs</a>
            <a href="#about" className="text-niat-dark hover:text-niat-orange font-medium transition-colors">About Us</a>
            <a href="#contact" className="text-niat-dark hover:text-niat-orange font-medium transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-2 border-niat-blue text-niat-blue hover:bg-niat-blue hover:text-white">Log In</Button>
            <Button className="bg-niat-orange hover:bg-orange-600 text-white">Register Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-niat-dark p-2"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-niat-dark hover:text-niat-orange font-medium px-2">Home</a>
              <a href="#courses" className="text-niat-dark hover:text-niat-orange font-medium px-2">Courses</a>
              <a href="#programs" className="text-niat-dark hover:text-niat-orange font-medium px-2">Programs</a>
              <a href="#about" className="text-niat-dark hover:text-niat-orange font-medium px-2">About Us</a>
              <a href="#contact" className="text-niat-dark hover:text-niat-orange font-medium px-2">Contact</a>
            </nav>
            <div className="mt-4 flex flex-col space-y-3 px-2">
              <Button variant="outline" className="border-2 border-niat-blue text-niat-blue hover:bg-niat-blue hover:text-white justify-center">Log In</Button>
              <Button className="bg-niat-orange hover:bg-orange-600 text-white justify-center">Register Now</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

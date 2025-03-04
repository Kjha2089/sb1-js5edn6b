import React, { FC } from 'react';
import { Briefcase as BriefcaseLaw, Menu, X } from 'lucide-react';

interface props{
  isMenuOpen: boolean,
  setIsMenuOpen: Function,
  
// any props that come into the component
}

const Navbar: FC<props> = ({isMenuOpen, setIsMenuOpen}) => {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
             <img 
              className="h-20 w-35 object-contain" 
              src="src/keshav-jha-and-associates-high-resolution-logo.png" 
              alt="Keshav Jha & Associates Logo" 
            />
            
            {/* <span className="ml-2 text-xl font-bold text-[#588157]">
              Adv. Keshav Jha & Associates
            </span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('practice-areas')}
              className="text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              Practice Areas
            </button>
            <button
              onClick={() => scrollToSection('attorneys')}
              className="text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              Attorneys
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#588157] text-white px-4 py-2 rounded-md font-medium hover:bg-[#a3b18a] transition duration-300"
            >
              +91 9718836537
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#588157] focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-inner">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('practice-areas')}
              className="text-left text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              Practice Areas
            </button>
            <button
              onClick={() => scrollToSection('attorneys')}
              className="text-left text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              Attorneys
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-gray-700 hover:text-[#588157] font-medium transition duration-300"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#588157] text-white px-4 py-2 rounded-md font-medium hover:bg-[#a3b18a] transition duration-300 w-full"
            >
              +91 9718836537
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

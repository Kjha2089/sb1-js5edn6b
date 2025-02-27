import React from 'react';
import {
  Briefcase as BriefcaseLaw,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#588157] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div
              className="flex items-center mb-4 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <BriefcaseLaw className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">
                Keshavjha & Associates
              </span>
            </div>
            <p className="text-white opacity-80 mb-6">
              Providing exceptional legal services with integrity and dedication
              since 2005.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#dad7cd] transition duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#dad7cd] transition duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#dad7cd] transition duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#dad7cd] transition duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practice-areas')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Practice Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('attorneys')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Our Attorneys
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('practice-areas')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Corporate Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practice-areas')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Matrimonial Cases
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practice-areas')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Criminal Cases
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practice-areas')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Intellectual Property
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practice-areas')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Civil Cases
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practice-areas')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Cheque Bounce Cases
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practice-areas')}
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  M.A.C.T Cases
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-white opacity-80 mb-4">
              Subscribe to our newsletter for legal insights and firm updates.
            </p>
            <form>
              <div className="flex mb-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-[#a3b18a] px-4 py-2 rounded-r-md hover:bg-[#dad7cd] hover:text-[#588157] transition duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-white opacity-60">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white opacity-80 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Keshavjha & Associates. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white opacity-80 hover:opacity-100 text-sm transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white opacity-80 hover:opacity-100 text-sm transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white opacity-80 hover:opacity-100 text-sm transition duration-300"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

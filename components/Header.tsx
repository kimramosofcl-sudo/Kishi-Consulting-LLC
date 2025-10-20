'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-custom' : 'bg-transparent'
    }`}>
      <nav className="container flex justify-between items-center py-5">
        <button
          onClick={() => scrollToSection('home')}
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}
        >
          Kishi
        </button>

        <ul className={`flex items-center gap-8 ${
          isMobileMenuOpen 
            ? 'fixed top-0 right-0 w-3/4 max-w-sm h-screen bg-white flex-col justify-center shadow-[-5px_0_15px_rgba(0,0,0,0.1)] transition-right duration-300' 
            : 'hidden md:flex'
        }`}>
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors duration-300 relative ${
                isScrolled ? 'text-text-dark' : 'text-white'
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors duration-300 relative ${
                isScrolled ? 'text-text-dark' : 'text-white'
              }`}
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 relative ${
                isScrolled ? 'text-text-dark' : 'text-white'
              }`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium transition-colors duration-300 relative ${
                isScrolled ? 'text-text-dark' : 'text-white'
              }`}
            >
              Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 relative ${
                isScrolled ? 'text-text-dark' : 'text-white'
              }`}
            >
              Contact
            </button>
          </li>
          <li className="ml-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary"
            >
              Schedule Consultation
            </button>
          </li>
        </ul>

        <button
          onClick={toggleMobileMenu}
          className="flex flex-col gap-1.5 bg-transparent p-1 md:hidden"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${
            isScrolled ? 'bg-primary' : 'bg-white'
          }`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${
            isScrolled ? 'bg-primary' : 'bg-white'
          }`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${
            isScrolled ? 'bg-primary' : 'bg-white'
          }`}></span>
        </button>
      </nav>
    </header>
  );
}

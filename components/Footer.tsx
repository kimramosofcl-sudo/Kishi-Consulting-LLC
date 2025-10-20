'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing!');
    setEmail('');
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
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-secondary text-xl font-bold mb-4">Kishi Consulting</h3>
            <p className="opacity-90 leading-relaxed">
              Your trusted partner in financial excellence and compliance. Building stronger businesses through strategic financial guidance.
            </p>
          </div>

          <div>
            <h3 className="text-secondary text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 hover:pl-2"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 hover:pl-2"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 hover:pl-2"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 hover:pl-2"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 hover:pl-2"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-secondary text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 hover:pl-2">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 hover:pl-2">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 hover:pl-2">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-secondary text-xl font-bold mb-4">Newsletter</h3>
            <p className="opacity-90 mb-4">Stay updated with our latest insights and news</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border-none text-sm"
                aria-label="Newsletter"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-secondary text-primary rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-secondary-light"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 opacity-80">
          <p>&copy; 2025 Kishi Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

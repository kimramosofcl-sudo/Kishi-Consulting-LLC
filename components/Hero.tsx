'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section
      id="home"
      className="bg-gradient-to-br from-primary to-accent min-h-screen flex items-center relative pt-20"
    >
      <div className="container">
        <div ref={heroRef} className="hero-content fade-in text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Strategic Financial Guidance for Growing Businesses
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Expert consulting in SOX compliance, accounting services, and risk management to help your business thrive with confidence and clarity.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="btn btn-outline"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

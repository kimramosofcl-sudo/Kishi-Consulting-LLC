'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { number: '15+', label: 'Years of Excellence' },
  { number: '500+', label: 'Clients Served' }
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      const fadeElements = sectionRef.current.querySelectorAll('.fade-in');
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6 text-left">About Kishi Consulting</h2>
            <p className="text-text-light mb-6 leading-relaxed">
              Founded in 2008, Kishi Consulting has been a trusted partner for businesses seeking expert financial guidance and compliance solutions. Our team of certified professionals brings decades of combined experience in finance, accounting, and regulatory compliance.
            </p>
            <p className="text-text-light mb-6 leading-relaxed">
              We understand that every business faces unique financial challenges. That's why we take a personalized approach, working closely with each client to develop customized strategies that align with their goals and drive sustainable growth.
            </p>
            <p className="text-text-light mb-8 leading-relaxed">
              Our commitment to excellence, integrity, and client success has made us a leading choice for companies ranging from emerging startups to established enterprises seeking reliable financial advisory services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stat-box">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 flex items-center justify-center min-h-96 text-white text-lg text-center">
              <div>
                <p className="text-2xl mb-4">📊</p>
                <p>Professional Team Photo</p>
                <p className="text-sm mt-2">Expert Financial Consultants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

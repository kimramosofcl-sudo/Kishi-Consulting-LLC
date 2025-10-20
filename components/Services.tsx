'use client';

import { useEffect, useRef } from 'react';

const services = [
  {
    icon: '📋',
    title: 'SOX Consulting & Compliance',
    description: 'Navigate the complexities of Sarbanes-Oxley compliance with confidence. Our experts ensure your organization meets all regulatory requirements while implementing efficient internal controls and governance frameworks.'
  },
  {
    icon: '💼',
    title: 'Finance & Accounting Services',
    description: 'Comprehensive financial management solutions including bookkeeping, financial reporting, budgeting, forecasting, and strategic planning to drive your business growth and profitability.'
  },
  {
    icon: '🛡️',
    title: 'Risk Assessment',
    description: 'Identify, evaluate, and mitigate financial risks before they impact your business. Our thorough risk assessment services help you make informed decisions and protect your organization\'s financial health.'
  }
];

export default function Services() {
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
    <section id="services" className="section-padding bg-bg-light">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive financial consulting solutions tailored to your business needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="text-2xl text-primary mb-4">{service.title}</h3>
              <p className="text-text-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

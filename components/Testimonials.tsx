'use client';

import { useEffect, useRef } from 'react';

const testimonials = [
  {
    stars: '★★★★★',
    text: '"Kishi transformed our approach to SOX compliance. Their expertise and attention to detail gave us the confidence we needed during our audit. Highly recommend their services!"',
    author: {
      name: 'Jennifer Davis',
      position: 'CFO, TechVision Inc.',
      initials: 'JD'
    }
  },
  {
    stars: '★★★★★',
    text: '"Working with Kishi has been a game-changer for our business. Their financial planning and risk assessment services helped us navigate a challenging market environment successfully."',
    author: {
      name: 'Michael Chen',
      position: 'CEO, Summit Ventures',
      initials: 'MC'
    }
  },
  {
    stars: '★★★★★',
    text: '"The team at Kishi is incredibly professional and knowledgeable. They simplified complex accounting processes and provided insights that directly improved our bottom line."',
    author: {
      name: 'Sarah Rodriguez',
      position: 'Owner, Coastal Retail Group',
      initials: 'SR'
    }
  }
];

export default function Testimonials() {
  const sectionRef = useRef<>(null);

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
    <section id="testimonials" className="section-padding bg-bg-light">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          Don't just take our word for it – hear from our satisfied clients
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="text-secondary mb-4 text-xl">{testimonial.stars}</div>
              <p className="text-text-light mb-6 italic leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.initials}
                </div>
                <div>
                  <h4 className="text-primary text-lg font-medium mb-1">{testimonial.author.name}</h4>
                  <p className="text-text-light text-sm">{testimonial.author.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

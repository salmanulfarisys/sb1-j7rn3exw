import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import HowItWorksSection from './sections/HowItWorksSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import ContactSection from './sections/ContactSection';
import CtaSection from './sections/CtaSection';
import FooterSection from './sections/FooterSection';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Flowvice | SaaS Implementation Experts';
    
    // Add observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));
    
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
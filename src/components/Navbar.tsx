import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Bot } from 'lucide-react';
import Container from './Container';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverWhiteSection, setIsOverWhiteSection] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      
      // Check if we're over a white/light section
      // Hero section is dark (purple-blue gradient), other sections are light
      const heroHeight = window.innerHeight; // Approximate hero section height
      setIsOverWhiteSection(scrollY > heroHeight - 100); // Start transition 100px before
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTrySia = () => {
    window.open('https://sia.flowvice.xyz/', '_blank');
  };

  // Dynamic styling based on scroll position and background
  const getNavbarStyles = () => {
    if (!isScrolled) {
      return 'bg-transparent';
    }
    
    if (isOverWhiteSection) {
      return 'bg-black/10 backdrop-blur-lg shadow-lg border-b border-black/10';
    } else {
      return 'bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20';
    }
  };

  const getTextStyles = () => {
    if (isOverWhiteSection && isScrolled) {
      return 'text-gray-900 hover:text-purple-600';
    }
    return 'text-white hover:text-purple-300';
  };

  const getLogoStyles = () => {
    if (isOverWhiteSection && isScrolled) {
      return 'text-gray-900';
    }
    return 'text-white';
  };

  const getButtonStyles = () => {
    if (isOverWhiteSection && isScrolled) {
      return 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400';
    }
    return 'border-white/30 text-white hover:bg-white/20 hover:border-white/50';
  };

  const getGetStartedButtonStyles = () => {
    if (isOverWhiteSection && isScrolled) {
      return 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300';
    }
    return 'bg-gradient-to-r from-white to-purple-100 text-purple-900 hover:from-purple-50 hover:to-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300';
  };

  const getMobileMenuStyles = () => {
    if (isOverWhiteSection) {
      return 'bg-black/10 backdrop-blur-lg border-t border-black/10';
    }
    return 'bg-white/10 backdrop-blur-lg border-t border-white/20';
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarStyles()}`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className={`text-2xl font-bold transition-colors duration-300 ${getLogoStyles()}`}>
                Flow<span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">vice</span>
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className={`transition-colors duration-300 ${getTextStyles()}`}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`transition-colors duration-300 ${getTextStyles()}`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`transition-colors duration-300 ${getTextStyles()}`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`transition-colors duration-300 ${getTextStyles()}`}
            >
              Pricing
            </button>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleTrySia}
              className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Bot className="mr-2 h-4 w-4" />
              Try Sia
            </button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className={`transition-all duration-300 ${getButtonStyles()}`}
            >
              Contact Us
            </Button>
            <Button 
              onClick={() => scrollToSection('get-started')}
              className={getGetStartedButtonStyles()}
            >
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <button 
            className={`md:hidden p-2 transition-colors duration-300 ${getTextStyles()}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${getMobileMenuStyles()}`}>
          <Container>
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className={`block w-full text-left py-2 transition-colors ${getTextStyles()}`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className={`block w-full text-left py-2 transition-colors ${getTextStyles()}`}
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={`block w-full text-left py-2 transition-colors ${getTextStyles()}`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`block w-full text-left py-2 transition-colors ${getTextStyles()}`}
              >
                Pricing
              </button>
              <button 
                onClick={handleTrySia}
                className="w-full inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
              >
                <Bot className="mr-2 h-4 w-4" />
                Try Sia
              </button>
              <Button 
                variant="outline" 
                className={`w-full ${getButtonStyles()}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
              <Button 
                className={`w-full ${getGetStartedButtonStyles()}`}
                onClick={() => scrollToSection('get-started')}
              >
                Get Started <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
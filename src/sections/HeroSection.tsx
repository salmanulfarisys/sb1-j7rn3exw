import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ArrowRight, ChevronRight, Sparkles, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const dynamicTexts = [
    "✨ Streamline Your SaaS Implementation",
    "🚀 Accelerate Your Digital Transformation", 
    "⚡ Simplify Complex Integrations",
    "🎯 Focus on Growth, Not Setup"
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Cycle through dynamic texts
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(textTimer);
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative pt-20 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl animate-ping"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
      </div>
      
      <Container className="py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative mb-6">
              <span className="inline-block px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white rounded-full border border-purple-400/30 backdrop-blur-sm transition-all duration-500 transform hover:scale-105">
                <span 
                  key={textIndex}
                  className="inline-block animate-pulse"
                >
                  {dynamicTexts[textIndex]}
                </span>
              </span>
              
              {/* Floating icons around the badge */}
              <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-purple-300 animate-spin" />
              <Zap className="absolute -bottom-1 -left-2 w-3 h-3 text-blue-300 animate-bounce" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Implementation Made{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-pulse">
                  Simple
                </span>
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
              Transform your business with{' '}
              <span className="text-purple-200 font-semibold">seamless SaaS integration</span>. 
              Flowvice handles the technical complexity, so you can{' '}
              <span className="text-blue-200 font-semibold">focus on growth</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('get-started')}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('how-it-works')}
                className="border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm relative group overflow-hidden"
              >
                <span className="relative z-10">See How It Works</span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                      alt={`User ${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white/30 shadow-lg hover:scale-110 transition-transform duration-300"
                    />
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 animate-ping"></div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      className="w-5 h-5 text-yellow-400 animate-pulse" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ animationDelay: `${star * 0.1}s` }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/80">
                  Trusted by{' '}
                  <span className="font-semibold text-purple-200">500+</span>{' '}
                  companies
                </p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-500/30 rounded-full blur-xl animate-bounce"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 group hover:scale-105 transition-transform duration-500">
                <div className="h-12 bg-gradient-to-r from-purple-600/50 to-blue-600/50 flex items-center px-4 border-b border-white/20">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                <div className="p-4">
                  <img 
                    src="https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Dashboard" 
                    className="rounded-lg shadow-sm w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-gradient-to-r from-purple-300/50 to-blue-300/50 rounded-full w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-300/50 to-indigo-300/50 rounded-full w-1/2 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="h-4 bg-gradient-to-r from-indigo-300/50 to-purple-300/50 rounded-full w-5/6 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 -bottom-4 transform translate-y-1/3 bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-lg shadow-2xl border border-white/20 max-w-[200px] backdrop-blur-sm group hover:scale-110 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-lg animate-bounce">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Implementation Complete!</p>
                    <p className="text-xs text-white/80">2 hours ago</p>
                  </div>
                </div>
                {/* Success particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-emerald-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="text-white">
          <path fill="currentColor" fillOpacity="1" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
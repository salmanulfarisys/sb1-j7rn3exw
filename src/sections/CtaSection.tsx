import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ChevronRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl animate-ping"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your SaaS Implementation?
          </h2>
          <p className="text-lg md:text-xl text-purple-100 mb-8">
            Join hundreds of companies that have transformed their businesses with Flowvice's expert implementation services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-white to-purple-100 text-purple-900 hover:from-purple-50 hover:to-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              Schedule a Consultation
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-300 text-purple-200 hover:bg-purple-500/20 hover:border-purple-200 backdrop-blur-sm"
            >
              View Case Studies
            </Button>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 backdrop-blur-lg border border-white/20 max-w-xl mx-auto shadow-xl">
            <p className="text-white font-medium mb-4">Join our newsletter for implementation tips</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
import React from 'react';
import Container from '../components/Container';
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                Flow<span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">vice</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6">
              Streamlining SaaS implementation for businesses of all sizes. We handle the technical complexity so you can focus on growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">Blog</a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-purple-300 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">SaaS Implementation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">Data Migration</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">System Integration</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">Training & Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Custom Development</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">GDPR Compliance</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Flowvice. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-purple-300 transition-colors group"
            >
              Back to top
              <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterSection;
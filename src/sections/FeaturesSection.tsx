import React from 'react';
import Container from '../components/Container';
import FeatureCard from '../components/FeatureCard';
import { 
  Zap, 
  LineChart, 
  Shield, 
  BarChart3, 
  Users, 
  Clock 
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Rapid Implementation',
      description: 'Get your SaaS tools up and running in days, not months. Our streamlined process accelerates your time to value.',
      icon: Zap 
    },
    {
      title: 'Data Integration',
      description: 'Seamlessly connect your existing data systems with new SaaS tools for a unified data ecosystem.',
      icon: LineChart
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade security protocols ensure your data remains protected throughout the implementation process.',
      icon: Shield
    },
    {
      title: 'Custom Analytics',
      description: 'Gain actionable insights with tailored dashboards and reports that align with your business objectives.',
      icon: BarChart3
    },
    {
      title: 'Team Training',
      description: 'Comprehensive training programs ensure your team can maximize the value of your new SaaS investments.',
      icon: Users
    },
    {
      title: '24/7 Support',
      description: 'Our dedicated support team is always available to resolve issues and answer questions whenever you need help.',
      icon: Clock
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simplify Your SaaS <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive suite of services ensures a smooth, efficient implementation process tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="opacity-0 translate-y-8 animate-[fadeInUp_0.5s_ease-out_forwards] hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
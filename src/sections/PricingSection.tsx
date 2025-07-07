import React from 'react';
import Container from '../components/Container';
import PricingCard from '../components/PricingCard';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Basic',
      price: '$100',
      description: 'Perfect for small businesses implementing their first SaaS tool.',
      features: [
        { text: 'Single SaaS tool implementation', included: true },
        { text: 'Basic data migration', included: true },
        { text: 'Standard onboarding', included: true },
        { text: 'Email support', included: true },
        { text: 'Advanced integrations', included: false },
        { text: 'Custom workflows', included: false },
        { text: 'Priority support', included: false },
      ],
      isPopular: false,
      buttonVariant: 'outline' as const,
     
    },

    {
      title: 'Classic',
      price: '$250',
      description: 'Perfect for small businesses implementing their first SaaS tool.',
      features: [
        { text: 'Single SaaS tool implementation', included: true },
        { text: 'Basic data migration', included: true },
        { text: 'Standard onboarding', included: true },
        { text: 'Email support', included: true },
        { text: 'Advanced integrations', included: true },
        { text: 'Custom workflows', included: false },
        { text: 'Priority support', included: false },
      ],
      isPopular: false,
      buttonVariant: 'outline' as const,
     
    },
    {
      title: 'Professional',
      price: '$500',
      description: 'Ideal for growing companies with more complex implementation needs.',
      features: [
        { text: 'Up to 3 SaaS tools implementation', included: true },
        { text: 'Full data migration', included: true },
        { text: 'Enhanced onboarding', included: true },
        { text: 'Email & phone support', included: true },
        { text: 'Advanced integrations', included: true },
        { text: 'Custom workflows', included: true },
        { text: 'Priority support', included: false },
      ],
      isPopular: true,
      buttonVariant: 'outline' as const,
      
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'Comprehensive solutions for large organizations with complex requirements.',
      features: [
        { text: 'Unlimited SaaS implementations', included: true },
        { text: 'Complete data ecosystem', included: true },
        { text: 'Premium onboarding', included: true },
        { text: '24/7 dedicated support', included: true },
        { text: 'Advanced integrations', included: true },
        { text: 'Custom workflows', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Priority support', included: true },
      ],
      isPopular: false,
      buttonVariant: 'outline' as const,
      buttonText: 'Contact Sales',
    },
  ];
  
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your implementation needs. All plans include our core methodology and quality assurance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="opacity-0 translate-y-8 animate-[fadeInUp_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                buttonVariant={plan.buttonVariant}
                buttonText={plan.buttonText}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-purple-100/50 to-blue-100/50 rounded-xl p-6 border border-purple-200/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Need a custom solution?</h3>
              <p className="text-gray-600">Contact our sales team for a personalized quote tailored to your specific requirements.</p>
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
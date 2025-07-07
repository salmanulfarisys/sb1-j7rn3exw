import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',

  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://webhook.site/79f9c491-aeb2-4baa-a6ca-e85c043f2be6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Webhook POST failed');
      }
  
      alert("Thanks for your message! We'll be in touch soon.");
  
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Webhook Error:', error);
      alert('Submission failed. Please try again.');
    }
  };
  
  
  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to <span className="text-primary">Transform</span> Your SaaS Implementation?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss your project. Our team of experts is ready to help you streamline your SaaS implementation journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">hello@flowvice.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Live Chat</h3>
                  <p className="text-gray-600">Available 24/7 for urgent inquiries</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Acme Inc."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Tell us about your project and requirements..."
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
                
                <p className="text-xs text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
import React, { useRef, useState } from 'react';
import Container from '../components/Container';
import TestimonialCard from '../components/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const testimonials = [
    {
      quote: "Flowvice transformed our Salesforce implementation. What would have taken us months internally was completed in just weeks with minimal disruption.",
      author: "Sarah Johnson",
      role: "CTO",
      companyName: "TechNova Solutions",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The team at Flowvice doesn't just implement software; they truly understand business processes. They suggested optimizations we hadn't even considered.",
      author: "Michael Chen",
      role: "Operations Director",
      companyName: "Quantum Industries",
      imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "Their data migration was flawless. Not a single record lost or corrupted, and the team was responsive at every step of the process.",
      author: "Jessica Reynolds",
      role: "Data Manager",
      companyName: "Horizon Financial",
      imageUrl: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "We'd struggled with two failed implementation attempts before finding Flowvice. Their methodical approach and clear communication made all the difference.",
      author: "Robert Alvarez",
      role: "CEO",
      companyName: "Maven Enterprises",
      imageUrl: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The training program Flowvice developed for our team was comprehensive and engaging. Our adoption rates exceeded expectations by 40%.",
      author: "Emma Sullivan",
      role: "HR Director",
      companyName: "Pinnacle Group",
      imageUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;
        
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
      
      setScrollPosition(scrollTo);
    }
  };
  
  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };
  
  return (
    <section id="testimonials" className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from businesses that have transformed their operations with our implementation services.
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 md:flex hidden"
          >
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-primary transition-colors"
              aria-label="Scroll left"
              disabled={scrollPosition <= 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          
          <div 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 md:flex hidden"
          >
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-primary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x scrollbar-hide"
            onScroll={handleScroll}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  companyName={testimonial.companyName}
                  imageUrl={testimonial.imageUrl}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === Math.floor(scrollPosition / (scrollRef.current?.clientWidth || 1) * testimonials.length / 2)
                    ? 'bg-primary'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
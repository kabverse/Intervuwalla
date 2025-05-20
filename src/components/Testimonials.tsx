
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Intervuwalla helped me transform my interview skills. I got 3 job offers after completing their program!",
      name: "Aarav Sharma",
      role: "Software Engineer",
      company: "Microsoft"
    },
    {
      id: 2,
      quote: "The mock interviews and feedback sessions were invaluable. I felt so prepared walking into my actual interviews.",
      name: "Priya Patel",
      role: "Product Manager",
      company: "Amazon"
    },
    {
      id: 3,
      quote: "I was struggling with technical interviews until I found Intervuwalla. Their structured approach made all the difference.",
      name: "Vikram Malhotra",
      role: "Data Scientist",
      company: "Google"
    },
    {
      id: 4,
      quote: "Hands down the coolest professor at SOIL! Your real-world CRM and FinTech lessons (who can forget the farmer creditworthiness exercise!) were engaging, practical, and packed with life lessons. Thank you for keeping it so real.",
      name: "Shivam Sood",
      role: "PGPM STUDENT AT SOIL",
      company: "IT ANALYST"
    },
    {
      id: 5,
      quote: "Thank you so much for your mentorship and guidance, I enjoyed your CRM and fintech classes so much and learned a lot! The way you engaged with students is commendable!! Thank you for motivating me when my morale was sinking 2000 ft under water!! You are an amazing teacher and very generous person.",
      name: "Shrey Raj",
      role: "PGPM ANALYTICS",
      company: "Healthcare Operations | KMC'19"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary/5 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear what our students say about their experience and results.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-10 left-0 transform -translate-x-1/2 opacity-20">
            <Quote className="h-24 w-24 text-primary transform rotate-180" />
          </div>
          
          <div className="absolute bottom-10 right-0 transform translate-x-1/2 opacity-20">
            <Quote className="h-24 w-24 text-primary" />
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-white p-8 md:p-12 shadow-sm">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  idx === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <blockquote className="text-xl md:text-2xl italic text-gray-800 mb-6 text-center">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="text-center">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2 items-center px-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Testimonials;

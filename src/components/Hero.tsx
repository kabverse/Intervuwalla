
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, PlayCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const benefits = [
    "Ace your next interview",
    "Learn from industry experts",
    "Interactive mock interviews",
    "Personalized feedback"
  ];

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden hero-gradient">
      <div className="container-tight relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary animate-pulse">
              <span className="font-medium">New Workshop</span>
              <span className="ml-1 text-primary/60">Starting This Week</span>
            </div>
            
            <h1 className="heading-1 text-gradient animate-pulse-soft">
              Master Your <span className="text-shimmer">Interview Skills</span> With Confidence
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Interactive training to help you prepare, practice, and perform perfectly in your next interview.
            </p>
            
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-foreground/80 stagger-item fade-in">
                  <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 text-foreground font-medium btn-hover-expand btn-glow animate-pulse-soft"
                onClick={() => navigate('/courses')}
              >
                Browse Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-primary/20 text-foreground hover:bg-primary/5 btn-pulse"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <PlayCircle className="mr-2 h-5 w-5 text-primary" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-xl glass-effect max-w-md animate-float">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                alt="Anil Gupta"
                className="h-12 w-12 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <p className="text-sm text-primary font-medium">Leadership by</p>
                <p className="text-foreground font-semibold">Anil Gupta</p>
                <p className="text-xs text-muted-foreground">Founder & Interview Coach</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="Students in workshop" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                <div className="text-white">
                  <p className="text-sm font-medium opacity-80">Featured Workshop</p>
                  <h3 className="text-xl font-bold">Professional Interview Techniques</h3>
                  <div className="mt-2 flex items-center">
                    <span className="text-primary font-semibold">₹199</span>
                    <span className="text-xs text-white/70 ml-2">per person</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-6 -bottom-6 -z-10 w-full h-full rounded-2xl bg-secondary"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="hidden md:block absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      
      {/* Video modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-secondary/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-gray-900/50 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-xl font-semibold text-gradient mb-4">Meet Anil Gupta</h3>
                <p className="text-muted-foreground mb-6">Watch how Anil Gupta has transformed careers through our interview coaching programs</p>
                <div className="animate-pulse">
                  <PlayCircle className="h-16 w-16 text-primary mx-auto" />
                </div>
              </div>
            </div>
            <button 
              className="absolute top-4 right-4 text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

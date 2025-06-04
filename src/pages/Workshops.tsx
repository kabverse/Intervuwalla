import { useEffect } from 'react';
import { ArrowRight, Calendar, CheckCircle, MessageCircle, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import WorkshopsComponent from '@/components/Workshops';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const WorkshopsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Used by 8,000+ job seekers across India & Africa",
    "Trusted by mid-career professionals, MBA graduates, and senior leaders",
    "Proven strategies that work across industries",
    "Immediate, personalized feedback to fix your hurdles"
  ];

  const scrollToWorkshop = () => {
    const workshopSection = document.querySelector('.workshop-section');
    if (workshopSection) {
      workshopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden hero-gradient">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full bg-[#2e5ddd]/10 px-3 py-1 text-sm font-medium text-[#2e5ddd] mb-6">
                <MessageCircle className="h-4 w-4 mr-2" />
                <span className="font-medium">Limited Seats Available</span>
              </div>
              
              <h1 className="heading-1 mb-6 text-gradient-blue-yellow animate-pulse-soft">
                💬 85% of Our Attendees Crack Their Next Interview — <span className="text-shimmer">Will You Be Next?</span>
              </h1>
              
              <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Future has many possibilities, make sure yours is a definite success. Learn exactly how to impress recruiters, answer confidently, and stand out — all in just one powerful session.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary text-white hover:bg-primary/90 rounded-full btn-hover-expand px-8"
                  onClick={scrollToWorkshop}
                >
                  👉 Register Now – Limited Seats
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full border-[#2e5ddd]/20 text-foreground hover:bg-[#2e5ddd]/5 px-8"
                  asChild
                >
                  <Link to="/contact">
                    👉 Talk to a Mentor Before You Decide
                  </Link>
                </Button>
              </div>

              {/* Bonus Insight */}
              <div className="glass-card p-6 bg-primary/5 max-w-2xl mx-auto mb-8">
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-[hsl(var(--yellow))] mr-3 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-lg font-medium text-foreground mb-2">
                      💡 "Hiring managers decide within the first 5–10 minutes of an interview."
                    </p>
                    <p className="text-foreground/80 font-medium">
                      — Time to make those minutes count.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 md:order-1">
                <h2 className="heading-2 mb-4 text-gradient-blue-yellow">
                  Why Join Our <span className="text-shimmer">Workshop?</span>
                </h2>
                
                <p className="text-foreground/80 text-lg">
                  Our interactive workshops provide hands-on experience with real interview scenarios and expert guidance to help you stand out from other candidates.
                </p>
                
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-foreground/80 stagger-item fade-in">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-1" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <div className="glass-card p-6 bg-primary/5">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">Twice Weekly Sessions</h3>
                    </div>
                    <p className="text-foreground/80 mb-4">
                      Join our workshop sessions on Monday and Thursday evenings. Don't miss your chance to participate and transform your interview approach.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-primary">₹199</span>
                        <span className="text-sm text-foreground/70 ml-2">per person</span>
                      </div>
                      <span className="text-[hsl(var(--yellow))] font-medium text-sm">Only 12 spots left</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
                  <img 
                    src="/images/f0e019fb-c25f-4348-abaf-73f954784463.png" 
                    alt="Anil Gupta" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-medium text-[hsl(var(--yellow))]/90">Your Coach</p>
                      <h3 className="text-2xl font-bold">Anil Gupta</h3>
                      <p className="text-sm opacity-80 mt-1">Founder & Interview Coach</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-6 -bottom-6 -z-10 w-full h-full rounded-2xl bg-primary/10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Workshop Listings */}
        <div className="workshop-section">
          <WorkshopsComponent />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WorkshopsPage;
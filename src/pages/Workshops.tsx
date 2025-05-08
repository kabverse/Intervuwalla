
import { useEffect } from 'react';
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Workshops from '@/components/Workshops';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const WorkshopsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Interactive learning with industry experts",
    "Practical exercises and real-world examples",
    "Personalized feedback on your approach",
    "Exclusive resources to take home",
    "Private community access post-workshop",
    "Opportunity for follow-up questions"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden hero-gradient">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <span className="font-medium">Limited Time Offer</span>
                <span className="ml-1 text-primary/60">Only ₹199</span>
              </div>
              
              <h1 className="heading-1 mb-6 text-gradient animate-pulse-soft">
                Transform Your <span className="text-shimmer">Interview Skills</span> in One Workshop
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Join Anil Gupta's exclusive workshop and learn proven techniques to ace your next interview.
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary text-foreground hover:bg-primary/90 rounded-full btn-hover-expand btn-glow"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 md:order-1">
                <h2 className="heading-2 mb-4 text-gradient">
                  Why Join Our <span className="text-shimmer">Workshop?</span>
                </h2>
                
                <p className="text-muted-foreground text-lg">
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
                  <div className="glass-card p-6 bg-secondary/20">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">Upcoming Batch</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Our next workshop starts in 3 days. Don't miss your chance to participate and transform your interview approach.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-primary">₹199</span>
                        <span className="text-sm text-muted-foreground ml-2">per person</span>
                      </div>
                      <span className="text-primary font-medium text-sm">Only 8 spots left</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" 
                    alt="Anil Gupta" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-medium text-primary/90">Your Coach</p>
                      <h3 className="text-2xl font-bold">Anil Gupta</h3>
                      <p className="text-sm opacity-80 mt-1">Founder & Interview Coach</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-6 -bottom-6 -z-10 w-full h-full rounded-2xl bg-secondary"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Testimonial */}
        <section className="py-16 bg-secondary/10">
          <div className="container">
            <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 text-8xl text-primary/10 font-serif">"</div>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-medium text-foreground/90 mb-6">
                  Anil's workshop completely changed my approach to interviews. The techniques we learned were immediately applicable and helped me secure an offer from my dream company within weeks!
                </p>
                
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" 
                    alt="Priya Sharma" 
                    className="h-12 w-12 rounded-full object-cover mr-4 border border-primary"
                  />
                  <div>
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Product Manager at Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Workshop Listings */}
        <Workshops />
      </main>
      
      <Footer />
    </div>
  );
};

export default WorkshopsPage;

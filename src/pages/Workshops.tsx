
import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, CheckCircle, MessageCircle, Lightbulb, Users, Clock, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import WorkshopsComponent from '@/components/Workshops';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WorkshopsPage = () => {
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Show sticky button after scrolling past hero
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowStickyButton(scrollPosition > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const testimonials = [
    {
      name: "Kabeer Ghai",
      role: "Web Developer",
      text: "The salary negotiation tips alone saved me ₹3L+ in my offer!",
      rating: 5
    },
    {
      name: "Kanishk Kataria",
      role: "Software Engineer",
      text: "Worth every rupee. Cracked my dream job within 2 weeks of the session.",
      rating: 5
    },
    {
      name: "Maitri Jha",
      role: "Content Strategist",
      text: "Got 3 offers after Anil's workshop. The confidence boost was incredible!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Sticky CTA Button - Mobile Optimized */}
      {showStickyButton && (
        <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-50 animate-slide-up">
          <Button 
            size="lg" 
            className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold shadow-2xl rounded-full px-6 md:px-8 py-3 md:py-4 animate-pulse text-sm md:text-base"
            onClick={() => {
              window.location.href = "https://rzp.io/rzp/Ve76MNyd";
            }}
          >
            🚀 Register Now - ₹199
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
      
      <main>
        {/* Enhanced Hero Section - Mobile Optimized */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          {/* Warm background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-orange-200/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative z-10 px-4">
            <div className="text-center max-w-5xl mx-auto">
              {/* Enhanced urgency badge - Mobile Optimized */}
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 p-1 mb-4 md:mb-6 animate-pulse shadow-2xl mx-4">
                <div className="flex items-center rounded-full bg-white px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold text-red-600">
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 animate-bounce" />
                  <span className="animate-pulse">⚡ ONLY 8 SEATS LEFT</span>
                  <span className="hidden sm:inline ml-1"> - CLOSES IN 48 HOURS!</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight px-2">
                <span className="text-gradient-blue-yellow">💬 85% of Our Attendees</span>
                <br />
                <span className="text-orange-600 animate-pulse">Crack Their Next Interview</span>
                <br />
                <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-600 dark:text-slate-300 font-medium">
                  Will You Be Next? 🚀
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed font-medium px-4">
                Stop getting rejected! Learn the <span className="font-bold text-orange-600">exact framework</span> that helped 8,000+ professionals land their dream jobs. 
                <span className="block mt-2 text-base md:text-lg font-semibold text-slate-600 dark:text-slate-300">
                  ✨ One session. Lifetime confidence. Guaranteed results.
                </span>
              </p>
              
              {/* Social Proof Counter - Mobile Optimized */}
              <div className="flex justify-center items-center gap-4 md:gap-8 mb-6 md:mb-8 flex-wrap px-4">
                <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-lg">
                  <div className="text-2xl md:text-3xl font-black text-orange-600">8,000+</div>
                  <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium">Success Stories</div>
                </div>
                <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-lg">
                  <div className="text-2xl md:text-3xl font-black text-blue-600">85%</div>
                  <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium">Success Rate</div>
                </div>
                <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-lg">
                  <div className="text-2xl md:text-3xl font-black text-green-600">₹199</div>
                  <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium">Only Today</div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 md:gap-6 justify-center mb-8 md:mb-12 px-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold shadow-2xl rounded-full px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl transform hover:scale-105 transition-all duration-300 relative"
                  onClick={() => {
                    window.location.href = "https://rzp.io/rzp/Ve76MNyd";
                  }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur opacity-30 animate-pulse"></div>
                  <span className="relative">🎯 SECURE YOUR SPOT NOW</span>
                  <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold"
                  asChild
                >
                  <Link to="/contact">
                    💬 Questions? Chat With Us
                  </Link>
                </Button>
              </div>

              {/* Bonus Insight with more warmth - Mobile Optimized */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 md:p-8 rounded-2xl border-2 border-yellow-200 dark:border-yellow-800 max-w-3xl mx-auto shadow-xl">
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-yellow-600 mr-3 md:mr-4 mt-1 flex-shrink-0 animate-pulse" />
                  <div className="text-left">
                    <p className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 md:mb-3">
                      💡 "Most people fail interviews in the first 5 minutes..."
                    </p>
                    <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium">
                      But our attendees know exactly how to make those crucial moments count. 
                      <span className="block mt-2 text-orange-600 font-bold">Join them this week! 🚀</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced Main Content with Testimonials - Mobile Optimized */}
        <section className="section-padding bg-white dark:bg-slate-900">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
                  <span className="text-gradient-blue-yellow">Why 8,000+</span>
                  <br />
                  <span className="text-orange-600">Professionals Trust Us</span>
                </h2>
                
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Our interactive workshops provide hands-on experience with real interview scenarios and expert guidance to help you stand out from other candidates.
                </p>
                
                <ul className="space-y-3 md:space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-base md:text-lg stagger-item fade-in">
                      <CheckCircle className="mr-3 md:mr-4 h-5 w-5 md:h-6 md:w-6 flex-shrink-0 text-green-600 mt-1" />
                      <span className="font-medium">✅ {benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Workshop Details Card - Mobile Optimized */}
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/20 dark:to-orange-900/20 p-6 md:p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                  <div className="flex items-center mb-4 md:mb-6">
                    <Calendar className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mr-3 md:mr-4" />
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">Next Workshop</h3>
                  </div>
                  <div className="grid gap-4 md:gap-6">
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 mb-3 md:mb-4 text-base md:text-lg">
                        <span className="font-bold">When:</span> Sunday
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 mb-4 text-base md:text-lg">
                        <span className="font-bold">Duration:</span> 2 hours of pure value
                      </p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md">
                        <div>
                          <span className="text-2xl md:text-3xl font-black text-green-600">₹199</span>
                          <span className="text-sm text-slate-500 ml-2">per person</span>
                        </div>
                        <Badge variant="destructive" className="animate-pulse text-xs md:text-sm">
                          Only 8 spots left!
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
                  <img 
                    src="/images/f0e019fb-c25f-4348-abaf-73f954784463.png" 
                    alt="Anil Gupta" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 md:p-8 text-white">
                      <Badge className="mb-2 md:mb-3 bg-yellow-500 text-black font-bold text-xs md:text-sm">
                        ⭐ Your Success Coach
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Anil Gupta</h3>
                      <p className="text-base md:text-lg opacity-90 mb-1 md:mb-2">Founder & Interview Expert</p>
                      <p className="text-sm opacity-80">Helped 8,000+ professionals land their dream jobs</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-6 -bottom-6 -z-10 w-full h-full rounded-2xl bg-gradient-to-br from-blue-200/30 to-orange-200/30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Mobile Optimized */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-3 md:mb-4">
                <span className="text-gradient-blue-yellow">Real Success Stories</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
                See what happens when you invest ₹199 in yourself
              </p>
            </div>
            
            <div className="grid gap-6 md:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 dark:text-slate-300 mb-4 md:mb-6 text-base md:text-lg italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-slate-200 text-base md:text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-orange-600 text-sm font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
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

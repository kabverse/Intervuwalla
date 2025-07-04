
import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Check, ArrowRight, Zap, AlertTriangle, Star, Trophy, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Workshop {
  id: string;
  title: string;
  dates: string;
  time: string;
  location: string;
  capacity: number;
  spotsLeft: number;
  imageUrl: string;
  topics: string[];
}

const Workshops = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const workshops: Workshop[] = [
    {
      id: "w1",
      title: "Professional Interview Mastery",
      dates: "Sunday",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual",
      capacity: 50,
      spotsLeft: 8,
      imageUrl: "/images/f0e019fb-c25f-4348-abaf-73f954784463.png",
      topics: [
        "Effective communication",
        "Technical interview preparation", 
        "Resume & LinkedIn optimization",
        "Salary negotiation tactics"
      ]
    }
  ];

  const successMetrics = [
    { icon: Trophy, label: "Success Rate", value: "85%", color: "text-yellow-600" },
    { icon: Users, label: "Lives Changed", value: "8,000+", color: "text-blue-600" },
    { icon: Target, label: "Job Offers", value: "12,000+", color: "text-green-600" },
    { icon: Star, label: "Average Rating", value: "4.9/5", color: "text-orange-600" }
  ];

  const urgencyReasons = [
    "🔥 Only 8 seats remaining for this batch",
    "⚡ Next workshop is 3 weeks away",
    "💼 Companies are hiring NOW for year-end positions",
    "🚀 Early bird pricing ends in 48 hours"
  ];

  const handleOpenModal = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setIsModalOpen(true);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50 to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Warm background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container relative z-10">
        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
          {successMetrics.map((metric, index) => (
            <Card key={index} className="p-4 md:p-6 text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-white/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <metric.icon className={`h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 md:mb-3 ${metric.color}`} />
              <div className={`text-xl md:text-2xl lg:text-3xl font-black ${metric.color} mb-1`}>
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium">
                {metric.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Enhanced flashy badge */}
          <div className="relative inline-flex items-center mb-6 px-4">
            <div className="relative rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 animate-pulse shadow-2xl">
              <div className="flex items-center rounded-full bg-white px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg font-black text-red-600 shadow-xl">
                <AlertTriangle className="mr-2 md:mr-3 h-4 w-4 md:h-6 md:w-6 animate-bounce" />
                <span className="animate-pulse">⚡ URGENT: ONLY 8 SEATS LEFT</span>
                <span className="ml-2 md:ml-3 text-orange-600 hidden sm:inline">Book NOW!</span>
                <Zap className="ml-2 md:ml-3 h-4 w-4 md:h-6 md:w-6 animate-bounce" style={{ animationDelay: '0.3s' }} />
              </div>
              {/* Multiple glow layers */}
              <div className="absolute -inset-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur opacity-40 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-sm opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            {/* Floating elements - hidden on mobile */}
            <div className="absolute -top-4 -right-4 text-2xl animate-bounce hidden md:block">🚀</div>
            <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce hidden md:block" style={{ animationDelay: '0.7s' }}>💼</div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-gradient-blue-yellow">Transform Your</span>
            <br />
            <span className="text-orange-600 animate-pulse">Interview Game</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed px-4">
            Join our exclusive workshop for just <span className="font-black text-green-600 text-2xl md:text-3xl">₹199</span> and learn the secrets that landed 8,000+ professionals their dream jobs.
          </p>
        </div>

        {/* Urgency Reasons */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 md:p-8 rounded-2xl border-2 border-red-200 dark:border-red-800 mb-12 max-w-4xl mx-auto shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold text-center text-red-700 dark:text-red-300 mb-6 flex items-center justify-center">
            <AlertTriangle className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 animate-pulse" />
            Why You Need to Act NOW
          </h3>
          <div className="grid gap-3 md:gap-4">
            {urgencyReasons.map((reason, index) => (
              <div key={index} className="flex items-start text-red-700 dark:text-red-300 font-semibold text-sm md:text-base">
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {workshops.map((workshop) => (
            <div 
              key={workshop.id} 
              className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-white/50 dark:border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in relative"
            >
              {/* Enhanced border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-orange-500 to-red-500 rounded-3xl opacity-30 animate-pulse"></div>
              
              <div className="relative bg-white/95 dark:bg-slate-800/95 rounded-3xl">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative">
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                      <img 
                        src={workshop.imageUrl} 
                        alt="Anil Gupta" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end lg:hidden">
                        <div className="p-4 md:p-6 text-white">
                          <Badge className="mb-2 md:mb-3 bg-yellow-500 text-black font-bold text-xs md:text-sm">
                            ⭐ Your Success Mentor
                          </Badge>
                          <h3 className="text-xl md:text-2xl font-bold mb-1">
                            {workshop.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 p-6 md:p-8 lg:p-12 flex flex-col">
                    <div className="hidden lg:block mb-6">
                      <Badge className="mb-4 bg-yellow-500 text-black font-bold text-lg px-4 py-2">
                        ⭐ Exclusive Workshop with Anil Gupta
                      </Badge>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 text-gradient-blue-yellow">
                        {workshop.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 text-base md:text-lg">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 md:h-6 md:w-6 mr-3 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-slate-800 dark:text-slate-200">Date</div>
                          <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base">{workshop.dates}</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 md:h-6 md:w-6 mr-3 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-slate-800 dark:text-slate-200">Time</div>
                          <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base">{workshop.time}</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 md:h-6 md:w-6 mr-3 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-slate-800 dark:text-slate-200">100% Virtual</div>
                          <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base">Join from anywhere</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 md:h-6 md:w-6 mr-3 text-orange-600 mt-1 flex-shrink-0" />
                        <div className="w-full">
                          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 md:px-4 py-2 rounded-full text-center font-black animate-pulse shadow-lg text-sm md:text-base">
                            🚨 ONLY {workshop.spotsLeft} SPOTS LEFT!
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6 md:mb-8">
                      <h4 className="font-bold mb-3 md:mb-4 text-lg md:text-xl text-slate-800 dark:text-slate-200">What You'll Master:</h4>
                      <ul className="grid grid-cols-1 gap-2 md:gap-3">
                        {workshop.topics.map((topic, index) => (
                          <li key={index} className="flex text-sm md:text-lg">
                            <Check className="h-5 w-5 md:h-6 md:w-6 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto pt-4 md:pt-6 border-t-2 border-slate-200 dark:border-slate-700">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                        <div className="text-center">
                          <div className="text-3xl md:text-4xl font-black text-green-600 mb-2">₹199</div>
                          <div className="text-sm md:text-base text-slate-500 dark:text-slate-400">Investment in your future</div>
                          
                        </div>
                        
                        {/* CTA with enhanced mobile design */}
                        <div className="relative w-full md:w-auto">
                          <Button 
                            className="relative z-10 w-full md:w-auto rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 shadow-2xl transform hover:scale-105 transition-all duration-300"
                            onClick={() => {
                              window.location.href = "https://rzp.io/rzp/Ve76MNyd";
                            }}
                          >
                            🚀 REGISTER NOW
                            <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
                          </Button>
                          {/* Enhanced glow effect */}
                          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur opacity-40 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Urgency Push - Mobile Optimized */}
        <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6">
            🔥 Don't Let This Opportunity Slip Away!
          </h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed px-2">
            While you're thinking, 8 other professionals are about to grab the remaining spots. 
            <span className="block mt-2 font-bold text-yellow-400">
              Your dream job won't wait. Will you?
            </span>
          </p>
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => {
              window.location.href = "https://rzp.io/rzp/Ve76MNyd";
            }}
          >
            ⚡ CLAIM YOUR SPOT - ₹199
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Workshops;

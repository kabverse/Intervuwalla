
import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Check, ArrowRight, Zap, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import RegistrationModal from './RegistrationModal';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card } from "@/components/ui/card";

interface Workshop {
  id: string;
  title: string;
  dates: string[];
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
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  
  // Scroll function to smoothly scroll to courses section
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const workshops: Workshop[] = [
    {
      id: "w1",
      title: "Professional Interview Mastery",
      dates: ["Monday", "Thursday"],
      time: "7:00 PM - 9:00 PM",
      location: "Virtual",
      capacity: 50,
      spotsLeft: 12,
      imageUrl: "/images/f0e019fb-c25f-4348-abaf-73f954784463.png",
      topics: [
        "Effective communication",
        "Technical interview preparation",
        "Resume & LinkedIn optimization",
        "Salary negotiation tactics"
      ]
    }
  ];

  const handleOpenModal = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setIsModalOpen(true);
  };

  return (
    <section className="section-padding bg-background/5 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Enhanced flashy badge */}
          <div className="relative inline-flex items-center mb-4">
            <div className="relative rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 animate-pulse">
              <div className="flex items-center rounded-full bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                <AlertTriangle className="mr-2 h-4 w-4 animate-bounce" />
                <span className="animate-pulse">⚡ LIMITED SEATS</span>
                <span className="ml-2 text-red-100">Book Now!</span>
                <Zap className="ml-2 h-4 w-4 animate-bounce" style={{ animationDelay: '0.3s' }} />
              </div>
              {/* Multiple glow layers */}
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur opacity-40 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-sm opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            {/* Floating sparkles */}
            <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce">✨</div>
            <div className="absolute -bottom-2 -left-2 text-orange-400 animate-bounce" style={{ animationDelay: '0.7s' }}>🔥</div>
          </div>
          
          <h2 className="heading-2 mb-4 text-gradient-blue-yellow animate-pulse-soft">
            Upcoming <span className="text-yellow-500 animate-pulse">Workshop</span>
          </h2>
          <p className="text-foreground/80 text-lg">
            Join our interactive workshop for ₹199 per person and learn essential interview skills directly from Anil Gupta.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workshops.map((workshop) => (
            <div 
              key={workshop.id} 
              className="bg-card/30 rounded-2xl overflow-hidden border border-white/10 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in relative"
            >
              {/* Flashy border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl opacity-20 animate-pulse"></div>
              
              <div className="relative bg-card/90 rounded-2xl">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative aspect-[3/2] md:aspect-auto">
                    <img 
                      src={workshop.imageUrl} 
                      alt="Anil Gupta" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end md:hidden">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-display font-semibold mb-2">
                          {workshop.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 p-6 flex flex-col">
                    <h3 className="hidden md:block text-2xl font-display font-semibold mb-3 text-gradient-blue-yellow">
                      {workshop.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-start">
                        <Calendar className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Twice Weekly</div>
                          <div className="text-foreground/70">{workshop.dates.join(' & ')}</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <div>
                          {/* Enhanced flashy "few spots left" */}
                          {workshop.spotsLeft < 15 ? (
                            <div className="relative">
                              <span className="relative z-10 text-red-600 font-bold animate-pulse bg-gradient-to-r from-red-100 to-orange-100 px-2 py-1 rounded-full border border-red-300">
                                🚨 Only {workshop.spotsLeft} spots left!
                              </span>
                              <div className="absolute inset-0 bg-red-400 rounded-full blur opacity-20 animate-pulse"></div>
                            </div>
                          ) : (
                            <span>{workshop.spotsLeft} spots left</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Topics Covered:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5">
                        {workshop.topics.map((topic, index) => (
                          <li key={index} className="flex text-sm">
                            <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/80">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-primary/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-semibold text-yellow-600">₹199</span>
                          <span className="text-sm text-foreground/70 ml-2">per person</span>
                        </div>
                        {/* Enhanced flashy register button */}
                        <div className="relative">
                          <Button 
                            className="relative z-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
                            onClick={() => handleOpenModal(workshop)}
                          >
                            🔥 Register Now
                            <ArrowRight className="ml-1 h-4 w-4 animate-bounce" />
                          </Button>
                          {/* Glow effect */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur opacity-30 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedWorkshop && (
        <RegistrationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          workshop={selectedWorkshop} 
        />
      )}
    </section>
  );
};

export default Workshops;

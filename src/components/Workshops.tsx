
import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import RegistrationModal from './RegistrationModal';

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
          <div className="inline-flex items-center rounded-full bg-[#2e5ddd]/10 px-3 py-1 text-sm font-medium text-[#2e5ddd] mb-4">
            <span className="font-medium">Limited Seats</span>
            <span className="ml-1 text-[#2e5ddd]/60">Book Now</span>
          </div>
          
          <h2 className="heading-2 mb-4 text-gradient-blue-yellow animate-pulse-soft">
            Upcoming <span className="text-shimmer">Workshop</span>
          </h2>
          <p className="text-foreground/80 text-lg">
            Join our interactive workshop for ₹199 per person and learn essential interview skills directly from Anil Gupta.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workshops.map((workshop) => (
            <div 
              key={workshop.id} 
              className="bg-card/30 rounded-2xl overflow-hidden border border-white/10 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in"
            >
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
                        {workshop.spotsLeft < 10 ? 
                          <span className="text-[hsl(var(--yellow))] font-medium">Only {workshop.spotsLeft} spots left</span> : 
                          <span>{workshop.spotsLeft} spots left</span>
                        }
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
                        <span className="text-lg font-semibold">₹199</span>
                        <span className="text-sm text-foreground/70 ml-2">per person</span>
                      </div>
                      <Button 
                        className="rounded-full bg-primary hover:bg-primary/90 text-white animate-pulse-soft"
                        onClick={() => handleOpenModal(workshop)}
                      >
                        Register
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
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

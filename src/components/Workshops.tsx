
import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import RegistrationModal from './RegistrationModal';

interface Workshop {
  id: string;
  title: string;
  date: string;
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
      title: "Technical Interview Mastery",
      date: "October 15, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "Virtual",
      capacity: 50,
      spotsLeft: 12,
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      topics: [
        "Algorithm problem solving",
        "System design interviews",
        "Behavioral questions",
        "Take-home assignments"
      ]
    },
    {
      id: "w2",
      title: "Professional Communication Skills",
      date: "October 22, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual",
      capacity: 30,
      spotsLeft: 8,
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      topics: [
        "Effective communication",
        "Non-verbal cues",
        "Answering difficult questions",
        "Storytelling techniques"
      ]
    },
    {
      id: "w3",
      title: "Resume & LinkedIn Optimization",
      date: "November 5, 2023",
      time: "11:00 AM - 3:00 PM",
      location: "In-person, Bangalore",
      capacity: 25,
      spotsLeft: 5,
      imageUrl: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      topics: [
        "Resume formatting",
        "Keywords optimization",
        "LinkedIn profile enhancement",
        "Portfolio presentation"
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
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <span className="font-medium">Limited Seats</span>
            <span className="ml-1 text-primary/60">Book Now</span>
          </div>
          
          <h2 className="heading-2 mb-4 text-gradient animate-pulse-soft">
            Upcoming <span className="text-shimmer">Workshops</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join our interactive workshops for ₹199 per person and learn essential interview skills directly from Anil Gupta and our industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div 
              key={workshop.id} 
              className="bg-card/30 rounded-2xl overflow-hidden border border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col animate-fade-in stagger-item"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img 
                  src={workshop.imageUrl} 
                  alt={workshop.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-display font-semibold mb-2">
                      {workshop.title}
                    </h3>
                    <div className="flex items-center text-white/80">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{workshop.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
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
                    <span>Capacity: {workshop.capacity}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-4 w-4 mr-2 text-red-500 mt-0.5">
                      {workshop.spotsLeft < 10 ? 
                        <span className="text-red-500 font-medium">Only {workshop.spotsLeft} left</span> : 
                        <span>{workshop.spotsLeft} spots left</span>
                      }
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Topics Covered:</h4>
                  <ul className="space-y-1.5">
                    {workshop.topics.map((topic, index) => (
                      <li key={index} className="flex text-sm">
                        <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-semibold">₹199</span>
                      <span className="text-sm text-muted-foreground ml-2">per person</span>
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


import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Mail, MapPin, Linkedin, GraduationCap, Users, Award, Briefcase } from 'lucide-react';
import Testimonials from '@/components/Testimonials';

// Sample workshop images - these would be replaced with actual images
const workshopImages = [
  {
    id: 1,
    src: "/images/workshop1.png",
    alt: "Anil Gupta leading a workshop session",
    span: "col-span-1 md:col-span-2"
  },
  {
    id: 2,
    src: "/images/workshop2.png",
    alt: "Interactive session with students",
    span: "col-span-1"
  },
  {
    id: 3,
    src: "/images/workshop3.png", 
    alt: "Corporate training workshop",
    span: "col-span-1"
  },
  {
    id: 4,
    src: "/images/workshop4.png",
    alt: "Panel discussion led by Anil Gupta",
    span: "col-span-1 md:col-span-2"
  },
  {
    id: 5,
    src: "/images/workshop5.png",
    alt: "Workshop at a leading corporate",
    span: "col-span-1"
  },
  {
    id: 6,
    src: "/images/workshop6.png",
    alt: "Student interaction session",
    span: "col-span-1 md:col-span-2"
  },
  {
    id: 7,
    src: "/images/workshop7.png",
    alt: "Anil Gupta giving a keynote",
    span: "col-span-1"
  },
  {
    id: 8,
    src: "/images/workshop8.png",
    alt: "Group mentoring session",
    span: "col-span-1"
  }
];

const teamMembers = [
  {
    id: 1,
    name: "Maitri Jha",
    role: "Wizard",
    image: "/images/maitri.png",
    description: "Maitri loves talking to people but not after 8 PM. One can find her writing poems and stories in complete darkness, listening to random violin. Says just one episode and binges the entire series.",
    mantra: "Eat, sleep and repeat."
  },
  {
    id: 2,
    name: "Kabeer Ghai",
    role: "Operator",
    image: "/images/kabeer.png",
    description: "Kabeer is the cutie on our team, actively trying to crack bad jokes. Looks twice in the mirror wondering how to look less handsome. He is what we call, the G(r)eek God.",
    mantra: "What's there in the looks? Everything!"
  },
  {
    id: 3,
    name: "Kanishk Kataria",
    role: "Strategist",
    image: "/images/kanishk.png",
    description: "Kanishk is the sweet and loving guy of our team. Developed leadership since he monitored his class. Says, he comes from a line of people with something wrong in them, and honestly his team totally feels it.",
    mantra: "I think therefore I am (very philosophical)!"
  }
];

const OurMentor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
  }>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="pb-16 md:pb-24 overflow-hidden">
          <div className="container">
            <div className="max-w-6xl mx-auto mb-16">
              <h1 className="heading-1 mb-6 text-[#2e5ddd] text-center">
                Our <span className="text-[#facf3d]">Mentor</span>
              </h1>
              
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/3">
                  <div className="rounded-xl overflow-hidden mb-6">
                    <img 
                      src="/images/f0e019fb-c25f-4348-abaf-73f954784463.png" 
                      alt="Anil Gupta" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  {/* Contact Information */}
                  <div className="glass-card p-6">
                    <div className="space-y-4">
                      <div className="flex items-center text-foreground/80">
                        <Linkedin className="mr-3 h-4 w-4 text-[#2e5ddd]" />
                        <a href="https://www.linkedin.com/in/anil-gupta-9143b58/" className="hover:text-[#2e5ddd]"><span>LinkedIn</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <h2 className="text-3xl font-bold mb-2">Anil Gupta</h2>
                  <h3 className="text-xl text-[#facf3d] mb-6">Thought Leader | Educator | Strategist | Mentor</h3>
                  
                  <div className="space-y-6 text-foreground/90">
                    <div className="p-6 glass-card border-l-4 border-[#2e5ddd]">
                      <h4 className="font-semibold text-[#2e5ddd] mb-2">Mission Statement</h4>
                      <p className="italic">"Transforming Education, Empowering Leadership."</p>
                    </div>
                    
                    <p>
                      Anil Gupta is a seasoned educator and corporate leader with over three decades of cross-industry experience. As a visionary with a profound passion for learning, he has been instrumental in bridging the gap between academia and industry, shaping the next generation of professionals and organizational leaders.
                    </p>
                    
                    <p>
                      As the Founder of Intervuwalla, Anil focuses on mentoring, career coaching, and professional development. He sees the need to address a critical need in India's employment ecosystem—industry-unready graduates and professionals struggling to navigate career transitions. And with this venture, he aims to democratize access to quality interview preparation and leadership training through practical, personalized, and industry-relevant interventions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#2e5ddd]">
                Our <span className="text-[#facf3d]">Team</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                  <div key={member.id} className="glass-card p-6 text-center">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute top-4 right-4 bg-[#2e5ddd] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {member.role}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="p-3 bg-[#facf3d]/10 rounded-lg border-l-4 border-[#facf3d]">
                      <p className="text-sm font-medium text-[#2e5ddd]">
                        Mantra: <span className="italic">{member.mantra}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials Section */}
            <Testimonials />
            
            {/* Workshop Gallery Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Workshop <span className="text-[#facf3d]">Gallery</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {workshopImages.map((image) => (
                  <div 
                    key={image.id} 
                    className={`${image.span} overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]`}
                    onClick={() => setSelectedImage({
                      src: image.src,
                      alt: image.alt
                    })}
                  >
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-auto h-auto max-h-[90vh]"
            />
            
            <button 
              className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default OurMentor;

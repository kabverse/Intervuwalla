
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Mail, MapPin, Linkedin, GraduationCap, Users, Award, Briefcase } from 'lucide-react';

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
            
            {/* Academic Excellence */}
            <div className="mb-16">
              <div className="glass-card p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-8 w-8 text-[#2e5ddd] mr-3" />
                  <h3 className="text-2xl font-bold">Academic Excellence</h3>
                </div>
                <p className="text-foreground/90 mb-4">
                  Anil has taught at India's and the world's leading institutions, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["IIT Delhi", "IIFT", "BIMTECH", "IMI", "Great Lakes", "SOIL", "TERI", "Amity", "GD Goenka", "Krems University (Austria)"].map((institution, index) => (
                    <div key={index} className="bg-[#2e5ddd]/10 rounded-lg p-3 text-center">
                      <span className="font-medium">{institution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Expertise Areas */}
            <div className="mb-16">
              <div className="glass-card p-8">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-[#2e5ddd] mr-3" />
                  <h3 className="text-2xl font-bold">Areas of Expertise</h3>
                </div>
                <p className="text-foreground/90 mb-4">
                  His expertise lies in Executive Education, PGDM, MBA, and Management Development Programs, with core teaching areas including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Sales Management", "CRM", "Business Communication", "Social Leadership", "International Business Negotiations", "B2B Marketing", "Service Strategy"].map((area, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#facf3d] rounded-full mr-3"></div>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Corporate Training */}
            <div className="mb-16">
              <div className="glass-card p-8">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-8 w-8 text-[#2e5ddd] mr-3" />
                  <h3 className="text-2xl font-bold">Corporate Training Excellence</h3>
                </div>
                <p className="text-foreground/90 mb-4">
                  He has delivered corporate training to leading public and private sector organizations such as:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {["NTPC", "BHEL", "Power Grid", "IBM", "Schneider Electric", "Infosys", "Macquarie AMC (Australia)", "Network International (UAE & Africa)"].map((company, index) => (
                    <div key={index} className="bg-[#facf3d]/10 rounded-lg p-3 text-center">
                      <span className="font-medium text-sm">{company}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Leadership Roles */}
            <div className="mb-16">
              <div className="glass-card p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-[#2e5ddd] mr-3" />
                  <h3 className="text-2xl font-bold">Leadership & Advisory Roles</h3>
                </div>
                <p className="text-foreground/90 mb-4">
                  Anil's influence extends beyond the classroom—he is a member of:
                </p>
                <div className="space-y-3">
                  {[
                    "Selection Advisory Board – IIFT",
                    "Academic Advisory Board – BIMTECH", 
                    "Placement Advisory Board – TERI University",
                    "Mentor – School of Inspired Leadership (SOIL)"
                  ].map((role, index) => (
                    <div key={index} className="flex items-center p-3 border border-[#2e5ddd]/20 rounded-lg">
                      <div className="w-3 h-3 bg-[#2e5ddd] rounded-full mr-4"></div>
                      <span className="font-medium">{role}</span>
                    </div>
                  ))}
                </div>
                <p className="text-foreground/90 mt-4">
                  His coaching and mentoring acumen is sought by CXOs, entrepreneurs, and mid-career professionals navigating complex transitions.
                </p>
              </div>
            </div>
            
            {/* Philosophy */}
            <div className="mb-16">
              <div className="glass-card p-8 bg-gradient-to-r from-[#2e5ddd]/5 to-[#facf3d]/5">
                <h3 className="text-2xl font-bold mb-4 text-center">Philosophy & Vision</h3>
                <p className="text-foreground/90 text-center mb-6">
                  Anil is not just an educator—he is a builder of future leaders. His sessions are a rare blend of intellectual rigor, strategic insight, and pragmatic industry wisdom. Whether it is a classroom, a boardroom, or a career crossroads, Anil empowers individuals and institutions to evolve, compete, and lead with purpose.
                </p>
                <blockquote className="text-center text-xl font-medium text-[#2e5ddd] italic border-l-4 border-[#facf3d] pl-6">
                  "Education must translate into employability, leadership, and impact. That's the mission I've devoted my life to."
                  <footer className="text-base font-normal text-foreground/70 mt-2">— Anil Gupta</footer>
                </blockquote>
              </div>
            </div>
            
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

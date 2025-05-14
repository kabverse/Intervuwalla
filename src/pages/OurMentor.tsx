
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Sample workshop images - these would be replaced with actual images
const workshopImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Anil Gupta leading a workshop session",
    span: "col-span-1 md:col-span-2"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Interactive session with students",
    span: "col-span-1"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", 
    alt: "Corporate training workshop",
    span: "col-span-1"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    alt: "Panel discussion led by Anil Gupta",
    span: "col-span-1 md:col-span-2"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Workshop at a leading corporate",
    span: "col-span-1"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Student interaction session",
    span: "col-span-1 md:col-span-2"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Anil Gupta giving a keynote",
    span: "col-span-1"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1601379329542-31c59347e2b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1457&q=80",
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
            <div className="max-w-4xl mx-auto mb-16">
              <h1 className="heading-1 mb-6 text-[#2e5ddd]">
                Our <span className="text-[#facf3d]">Mentor</span>
              </h1>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/lovable-uploads/f0e019fb-c25f-4348-abaf-73f954784463.png" 
                      alt="Anil Gupta" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4">Anil Gupta</h2>
                  <h3 className="text-xl text-[#facf3d] mb-4">Founder & Chief Mentor</h3>
                  
                  <div className="space-y-4 text-foreground/90">
                    <p>
                      Anil Gupta is the visionary founder and chief mentor at Intervuwalla, bringing over 15 years of experience in career coaching and interview preparation. With a background in corporate HR at Fortune 500 companies, Anil has a unique insight into what employers are looking for in top candidates.
                    </p>
                    <p>
                      His philosophy centers around authentic personal branding and strategic interview preparation that highlights a candidate's unique strengths. Anil believes that interview success comes not just from technical knowledge, but from the ability to communicate effectively and showcase one's true potential.
                    </p>
                    <p>
                      As a visiting faculty at eleven prestigious educational institutions and a speaker at numerous corporate engagements, Anil has helped thousands of professionals transform their careers through expert interview coaching and mentorship.
                    </p>
                  </div>
                </div>
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

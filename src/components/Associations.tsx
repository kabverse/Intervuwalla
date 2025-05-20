import React from 'react';

const Associations = () => {
  const educationalInstitutes = [
    { name: "IIFT", logo: "/images/iift.png" },
    { name: "IIT Delhi", logo: "/images/iitd.png" },
    { name: "Amity University", logo: "/images/amity.png" },
    { name: "GD GOenka World School", logo: "/images/goenka.png" },
    { name: "FIIB", logo: "/images/fiib.png" },
    { name: "Donau University", logo: "/images/donau.png" },
    { name: "Jaipuria Institute of Management", logo: "/images/jaipuria.png" },
    { name: "Teri School of advance studies", logo: "/images/teri.png" },
    { name: "IMI New Delhi", logo: "/images/imi.png" },
    { name: "Bimtech Birla Institute Of Management Tecgnology", logo: "/images/bimtech.png" },
    { name: "SOIL Business Design", logo: "/images/soil.png" }
  ];

  const corporateEngagements = [
    { name: "BHEL", logo: "/images/bhel.png" },
    { name: "Indian Oil", logo: "/images/indianoil.png" },
    { name: "Johnson & Johnson", logo: "/images/jj.png" },
    { name: "Coal India", logo: "/images/coal.png" },
    { name: "Indian Railways", logo: "/images/railways.png" },
    { name: "FEIO", logo: "/images/feio.png" },
    { name: "Bharat Petroleum", logo: "/images/bharatpetroleum.png" },
    { name: "Powergrid", logo: "/images/powergrid.png" },
    { name: "HP", logo: "/images/hp.png" },
    { name: "NTPC", logo: "/images/ntpc.png" },
    { name: "NAVITASYS", logo: "/images/navitasys.png" },
    { name: "Reserve Bank Of India", logo: "/images/rbi.png" },
    { name: "Hindustan Unilever Limited", logo: "/images/hul.png" }
  ];

  const advisoryBoards = [
    { name: "Teri School Of Advance Studies", logo: "/images/teri.png" },
    { name: "Indian Railways", logo: "/images/railways.png" },
    { name: "BIMTECH Birla Institue Of Management Technology", logo: "/images/bimtech.png" }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4 text-[#60b7ff]">
            Our <span className="text-[#facf3d]">Associations</span>
          </h2>
          <p className="text-foreground/80 text-lg">
            We've proudly collaborated with leading educational institutions, corporate organizations, and advisory boards.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Educational Institutes */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-8">
              <span className="bg-[#facf3d] text-black py-2 px-8 rounded-md inline-block">Visiting Faculty</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {educationalInstitutes.map((institute, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-md hover:shadow-lg transition-all">
                  <img 
                    src={institute.logo} 
                    alt={institute.name}
                    className="max-h-16 max-w-full object-contain"
                    title={institute.name}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Corporate Engagements */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-8">
              <span className="bg-[#facf3d] text-black py-2 px-8 rounded-md inline-block">Corporate Sector</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {corporateEngagements.map((company, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-md hover:shadow-lg transition-all">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="max-h-16 max-w-full object-contain"
                    title={company.name}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Advisory Boards */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-8">
              <span className="bg-[#facf3d] text-black py-2 px-8 rounded-md inline-block">Advisory Board Roles</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisoryBoards.map((board, index) => (
                <div key={index} className="bg-white rounded-lg p-6 flex items-center justify-center h-24 shadow-md hover:shadow-lg transition-all">
                  <img 
                    src={board.logo} 
                    alt={board.name}
                    className="max-h-16 max-w-full object-contain"
                    title={board.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Associations;
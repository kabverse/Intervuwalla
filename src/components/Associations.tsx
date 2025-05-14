
import React from 'react';

const Associations = () => {
  const educationalInstitutes = [
    "IIM Ahmedabad", 
    "IIT Bombay", 
    "BITS Pilani", 
    "Delhi University", 
    "NIT Trichy", 
    "XLRI Jamshedpur", 
    "ISB Hyderabad", 
    "Manipal University", 
    "SRM University", 
    "NMIMS Mumbai",
    "VIT Vellore"
  ];

  const corporateEngagements = [
    "Microsoft", 
    "Google", 
    "TCS", 
    "Infosys", 
    "Wipro", 
    "HCL", 
    "Amazon", 
    "Flipkart", 
    "IBM", 
    "Deloitte", 
    "EY", 
    "KPMG",
    "Accenture"
  ];

  const advisoryBoards = [
    "National Skill Development Corporation",
    "CII HR Committee",
    "AIMA Young Leaders Board"
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
        
        <div className="space-y-12">
          {/* Educational Institutes */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-6">
              <span className="border-b-2 border-[#facf3d] pb-1">Visiting Faculty at 11 Educational Institutes</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {educationalInstitutes.map((institute, index) => (
                <div key={index} className="bg-card/30 rounded-lg p-4 flex items-center justify-center h-24 border border-white/5 hover:border-[#60b7ff]/30 transition-colors">
                  <p className="text-center font-medium">{institute}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Corporate Engagements */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-6">
              <span className="border-b-2 border-[#facf3d] pb-1">13 Corporate Sector Engagements</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {corporateEngagements.map((company, index) => (
                <div key={index} className="bg-card/30 rounded-lg p-4 flex items-center justify-center h-24 border border-white/5 hover:border-[#60b7ff]/30 transition-colors">
                  <p className="text-center font-medium">{company}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Advisory Boards */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-6">
              <span className="border-b-2 border-[#facf3d] pb-1">3 Advisory Board Involvements</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisoryBoards.map((board, index) => (
                <div key={index} className="bg-card/30 rounded-lg p-6 flex items-center justify-center h-24 border border-white/5 hover:border-[#60b7ff]/30 transition-colors">
                  <p className="text-center font-medium">{board}</p>
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


import { Clock, Video, MessageSquare, Award, Users, Book } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-12 w-12 text-[#60b7ff]" />,
      title: "Flexible Learning",
      description: "Learn at your own pace with 24/7 access to all course materials curated by Anil Gupta."
    },
    {
      icon: <Video className="h-12 w-12 text-[#60b7ff]" />,
      title: "Interview Simulations",
      description: "Practice with realistic interview scenarios and get instant feedback from industry experts."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-[#60b7ff]" />,
      title: "Expert Coaching",
      description: "One-on-one sessions with Anil Gupta and other professionals for personalized guidance."
    },
    {
      icon: <Award className="h-12 w-12 text-[#60b7ff]" />,
      title: "Certification",
      description: "Earn certificates to showcase your interview preparation achievements to potential employers."
    },
    {
      icon: <Users className="h-12 w-12 text-[#60b7ff]" />,
      title: "Community Support",
      description: "Connect with peers and mentors in our supportive learning community led by career experts."
    },
    {
      icon: <Book className="h-12 w-12 text-[#60b7ff]" />,
      title: "Comprehensive Resources",
      description: "Access our library of interview questions, templates, and guides developed from real-world experience."
    }
  ];

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4 text-[#2e5ddd]">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground text-lg">
            Intervuwalla combines cutting-edge technology with expert guidance from Anil Gupta to help you master the art of interviewing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative glass-card p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-5 relative">
                <div className="absolute -inset-1 rounded-full bg-[#60b7ff]/10 opacity-0  transition-opacity duration-300"></div>
                <div className="relative">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-[#60b7ff] transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Anil Gupta Feature Box */}
        <div className="mt-16 glass-card p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <h3 className="text-4xl lg:text-5xl font-bold text-[#2e5ddd] dark:text-blue-400 leading-tight group-hover:scale-105 transition-transform duration-300">
                  Learn From <span className="text-[#facf3d] dark:text-[#daa520] block mt-2">Anil Gupta</span>
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-[#2e5ddd] to-[#facf3d] dark:from-blue-400 dark:to-[#daa520] rounded-full group-hover:w-32 transition-all duration-500"></div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                With over <span className="font-semibold text-[#facf3d] dark:text-[#daa520]">15 years</span> of experience in career coaching, Anil has helped thousands of professionals secure their dream jobs at top companies.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-lg text-foreground/80 group/item hover:text-foreground transition-colors duration-200">
                  <div className="mr-4 p-2 rounded-full bg-[#2e5ddd]/10 dark:bg-blue-400/10 group-hover/item:bg-[#2e5ddd]/20 dark:group-hover/item:bg-blue-400/20 transition-colors duration-200">
                    <Award className="h-5 w-5 flex-shrink-0 text-[#2e5ddd] dark:text-blue-400" />
                  </div>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">Industry-recognized leadership expert</span>
                </li>
                <li className="flex items-center text-lg text-foreground/80 group/item hover:text-foreground transition-colors duration-200">
                  <div className="mr-4 p-2 rounded-full bg-[#2e5ddd]/10 dark:bg-blue-400/10 group-hover/item:bg-[#2e5ddd]/20 dark:group-hover/item:bg-blue-400/20 transition-colors duration-200">
                    <Users className="h-5 w-5 flex-shrink-0 text-[#2e5ddd] dark:text-blue-400" />
                  </div>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">Mentored 10,000+ career professionals</span>
                </li>
                <li className="flex items-center text-lg text-foreground/80 group/item hover:text-foreground transition-colors duration-200">
                  <div className="mr-4 p-2 rounded-full bg-[#2e5ddd]/10 dark:bg-blue-400/10 group-hover/item:bg-[#2e5ddd]/20 dark:group-hover/item:bg-blue-400/20 transition-colors duration-200">
                    <MessageSquare className="h-5 w-5 flex-shrink-0 text-[#2e5ddd] dark:text-blue-400" />
                  </div>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">Developed proprietary interview frameworks</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 group-hover:from-black/40 transition-all duration-300"></div>
              <img 
                src="/images/image.png"
                alt="Anil Gupta" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 text-white group-hover:translate-y-[-4px] transition-transform duration-300">
                <p className="text-lg font-semibold">Anil Gupta</p>
                <p className="text-sm opacity-80">Founder & Lead Interview Coach</p>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <div className="w-3 h-3 bg-[#b8860b] dark:bg-[#daa520] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#60b7ff]/5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#60b7ff]/5 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/3"></div>
    </section>
  );
};

export default Features;

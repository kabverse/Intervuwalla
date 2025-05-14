
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
          <h2 className="heading-2 mb-4 text-[#60b7ff]">
            Everything You Need to <span className="text-[#facf3d]">Succeed</span>
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
                <div className="absolute -inset-1 rounded-full bg-[#60b7ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        <div className="mt-16 glass-card p-8 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="heading-3 text-[#60b7ff]">Learn From <span className="text-[#facf3d]">Anil Gupta</span></h3>
              <p className="text-lg text-muted-foreground">
                With over 15 years of experience in career coaching, Anil has helped thousands of professionals secure their dream jobs at top companies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-foreground/80">
                  <Award className="mr-3 h-5 w-5 flex-shrink-0 text-[#60b7ff]" />
                  <span>Industry-recognized leadership expert</span>
                </li>
                <li className="flex items-center text-foreground/80">
                  <Users className="mr-3 h-5 w-5 flex-shrink-0 text-[#60b7ff]" />
                  <span>Mentored 10,000+ career professionals</span>
                </li>
                <li className="flex items-center text-foreground/80">
                  <MessageSquare className="mr-3 h-5 w-5 flex-shrink-0 text-[#60b7ff]" />
                  <span>Developed proprietary interview frameworks</span>
                </li>
              </ul>
            </div>
            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                alt="Anil Gupta" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                <p className="text-sm font-semibold">Anil Gupta</p>
                <p className="text-sm opacity-80">Founder & Lead Interview Coach</p>
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


import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Award, BookOpen, Heart, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "12,000+",
      label: "Students"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "92%",
      label: "Success Rate"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      value: "25+",
      label: "Expert Trainers"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      value: "4.8/5",
      label: "Student Rating"
    }
  ];
  
  const team = [
    {
      name: "Rajiv Mehta",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      bio: "Former HR Director at Microsoft with 15+ years of interview expertise."
    },
    {
      name: "Ananya Desai",
      role: "Technical Training Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      bio: "Ex-Google engineer who has interviewed 500+ candidates."
    },
    {
      name: "Karan Singh",
      role: "Career Coach",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      bio: "Certified career coach specializing in career transitions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden hero-gradient">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6 animate-fade-in">
                About <span className="text-primary">Intervuwalla</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
                We're on a mission to transform how professionals prepare for interviews and advance their careers.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        </section>
        
        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative animate-fade-in">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Our story" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -left-6 -bottom-6 -z-10 w-full h-full rounded-2xl bg-secondary"></div>
              </div>
              
              <div className="space-y-6 animate-fade-in">
                <h2 className="heading-2 text-foreground">
                  Our <span className="text-primary">Story</span>
                </h2>
                <p className="text-muted-foreground">
                  Founded in 2018, Intervuwalla began with a simple observation: most professionals struggle with interviews despite being highly skilled at their jobs. Our founder, Rajiv Mehta, having conducted thousands of interviews at Microsoft, realized there was a gap between talent and presentation.
                </p>
                <p className="text-muted-foreground">
                  What started as a small workshop series has grown into India's premier interview training platform. Today, we've helped over 12,000 professionals land their dream jobs at top companies worldwide.
                </p>
                <p className="text-muted-foreground">
                  Our approach combines real-world interview experience, personalized feedback, and cutting-edge training methodologies to ensure our students not only pass interviews but excel in them.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-fade-in stagger-item"
                >
                  <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-2 mb-4">
                Our <span className="text-primary">Team</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Meet the experts behind Intervuwalla who bring decades of industry and interview experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group animate-fade-in stagger-item"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container max-w-4xl">
            <div className="text-center px-4">
              <h2 className="heading-2 mb-6">
                Ready to Transform Your Interview Skills?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of successful professionals who have accelerated their careers with Intervuwalla's specialized training.
              </p>
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 text-white"
              >
                Browse Our Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

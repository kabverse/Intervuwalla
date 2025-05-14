
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
                    src="public/lovable-uploads/logo.png" 
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

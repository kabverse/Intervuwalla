
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedStats from '@/components/AnimatedStats';
import { Users, Award, BookOpen, Heart, ArrowRight, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      icon: <Target className="h-6 w-6 text-[#2e5ddd]" />,
      title: "Skill Mismatch Crisis",
      description: "Over 50% of India's working population faces unemployment due to the gap between academic learning and industry requirements."
    },
    {
      icon: <Users className="h-6 w-6 text-[#2e5ddd]" />,
      title: "Massive Competition",
      description: "With 12 million people entering the workforce annually, each job opening attracts 250-300 applicants."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#2e5ddd]" />,
      title: "Employability Gap",
      description: "Only 20% of Indian graduates meet industry standards, highlighting the urgent need for practical preparation."
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
                Our Story - Why <span className="text-primary">Intervuwalla</span> Exists
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
                Bridging the gap between India's talent and industry expectations through strategic interview preparation and career development.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        </section>

        {/* The Challenge Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 text-center mb-12">
                The <span className="text-[#facf3d]">Challenge</span> We Address
              </h2>
              
              <div className="prose prose-lg max-w-none text-foreground/90 mb-12 space-y-6">
                <p>
                  India is home to one of the world's largest youth populations, with over <strong>12 million people entering the workforce every year</strong>. Yet, more than half of the working population is unemployed (India's Graduate Skill Index 2025 by Mercer-Mettl). On average, one job opening sees 250–300 applicants.
                </p>
                
                <p>
                  Currently, India is facing a skill mismatch in the industry where candidates lack the skills required by companies. <strong>Only 20% of Indian graduates are considered employable by industry standards</strong> (Aspiring Minds, India Skills Report). This gap originates from lack of vocational courses in academic institutions and a lack of preparedness among candidates.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {challenges.map((challenge, index) => (
                  <div key={index} className="glass-card p-6 text-center">
                    <div className="inline-block p-3 rounded-full bg-[#2e5ddd]/10 mb-4">
                      {challenge.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{challenge.title}</h3>
                    <p className="text-sm text-foreground/70">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 text-center mb-12">
                Our <span className="text-[#facf3d]">Journey</span>
              </h2>
              
              <div className="space-y-6 text-foreground/90">
                <p className="text-lg">
                  To bridge this gap, we've engaged with more than <strong>8,000 students and professionals</strong> over the past <strong>18 years</strong>, helping them navigate career choices, overcome interview anxiety, and build confidence.
                </p>
                
                <p>
                  Time and again, our mentor, Anil, found a recurring pattern: despite strong academic backgrounds, candidates lacked the clarity, communication skills, domain insight, and market awareness needed to convert interviews into job offers.
                </p>
                
                <div className="glass-card p-8 my-8 border-l-4 border-[#2e5ddd]">
                  <p className="italic text-lg">
                    "The gap isn't just about answering questions right—it's about understanding the interview as a strategic conversation, a bridge between academic knowledge and industry expectations."
                  </p>
                </div>
                
                <p>
                  Sadly, this gap persists across cities, industries, and even experience levels. Sir has been on both sides of the table—facing rejection early in his career and later interviewing and rejecting candidates who lacked depth, direction, or seriousness.
                </p>
                
                <p>
                  Even with his strong professional network and industry exposure, he had to introspect, learn, and evolve. That reflection led to the question: <strong>"If someone with all the advantages can struggle, what about the rest of the country's aspiring talent?"</strong>
                </p>
                
                <div className="text-center p-8 glass-card bg-gradient-to-r from-[#2e5ddd]/5 to-[#facf3d]/5">
                  <div className="inline-block p-4 rounded-full bg-[#facf3d] mb-4">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2e5ddd] mb-2">This is where Intervuwalla was born</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 text-center mb-12">
                Our <span className="text-[#facf3d]">Mission</span>
              </h2>
              
              <div className="space-y-6 text-foreground/90">
                <p className="text-lg">
                  More than just an interview training platform, <strong>Intervuwalla is a movement to professionalize the last mile of employability</strong>. It is built to bridge the disconnect between academia and industry by preparing candidates not only with technical and domain-specific readiness, but with confidence, communication, awareness of global affairs, and strategic thinking.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold text-[#2e5ddd] mb-4">Our Purpose</h3>
                    <p className="text-lg font-medium">To transform job seekers into industry-ready professionals.</p>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold text-[#2e5ddd] mb-4">Our Vision</h3>
                    <p className="text-lg font-medium">To make India not just a land of jobs, but of meaningful employment.</p>
                  </div>
                </div>
                
                <p>
                  <strong>Intervuwalla is here to change how India gets hired.</strong> By empowering individuals to not just prepare for interviews, but to own their career journeys with clarity and conviction.
                </p>
                
                <p>
                  Whether you're a fresh graduate, a mid-career switcher, or someone feeling stuck in their professional life—<strong>Intervuwalla is your partner in building not just a career, but a legacy.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Animated Stats Section */}
        <AnimatedStats />
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="text-center px-4">
              <h2 className="heading-2 mb-6">
                Ready to Transform Your Career Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of successful professionals who have accelerated their careers with Intervuwalla's industry-focused training and mentorship.
              </p>
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 text-white"
              >
                Explore Our Programs
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

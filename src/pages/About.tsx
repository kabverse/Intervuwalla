import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedStats from '@/components/AnimatedStats';
import { Users, Award, BookOpen, Heart, ArrowRight, Target, Lightbulb, TrendingUp, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Overcome interview anxiety"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Master communication and presence"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Align aspirations with market realities"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Approach interviews with structure and strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden hero-gradient">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-1 mb-6 animate-fade-in text-gradient-blue-yellow">
                Opening the doors of Education to <span className="text-shimmer">Employability</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
                A Journey Rooted in Purpose — Empowering 8,000+ Futures
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        </section>

        {/* Main Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-foreground/90 mb-12 space-y-6">
                <p className="text-lg">
                  Anil Gupta has trained, coached, and mentored more than <strong>8,000 students and professionals</strong> across MBA colleges, corporate leadership programs, and career transition workshops, over the past <strong>18 years</strong>.
                </p>
                
                <p className="text-lg">
                  From the classroom to the boardroom, his mission has remained unwavering: <strong>to bridge the gap between potential and performance</strong>.
                </p>
                
                <p>
                  In every interaction—with job seekers, mid-career professionals, or seasoned executives—Anil observed a troubling pattern. Despite solid academic credentials and technical know-how, most candidates faltered at the last mile: the interview.
                </p>
                
                <div className="glass-card p-8 my-8 border-l-4 border-[#2e5ddd] bg-gradient-to-r from-[#2e5ddd]/5 to-transparent">
                  <div className="flex items-start">
                    <MessageCircle className="h-6 w-6 text-[#2e5ddd] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="italic text-lg font-medium text-[#2e5ddd] mb-2">
                        "The gap isn't just about answering questions right, it's about understanding the interview as a strategic conversation—where clarity, confidence, and industry awareness matter more than rote knowledge."
                      </p>
                      <p className="text-sm text-foreground/70 font-medium">— Anil Gupta</p>
                    </div>
                  </div>
                </div>
                
                <p>
                  This insight was personal. Early in his career, Anil faced rejection despite strong qualifications. Years later, while interviewing others, he saw the same issues: lack of preparation, depth, or purpose. That lived experience became his drive.
                </p>
                
                <p>
                  Through partnerships with top MBA institutions, corporate training, and personalized coaching, Anil developed a proven framework to help people:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center p-4 glass-card">
                    {achievement.icon}
                    <span className="ml-3 font-medium">{achievement.title}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 text-foreground/90">
                <p>
                  He turned every rejection into a lesson. Every success into a case study. Every session into a transformation.
                </p>
                
                <div className="text-center p-8 glass-card bg-gradient-to-r from-[#facf3d]/10 to-[#2e5ddd]/10">
                  <div className="inline-block p-4 rounded-full bg-[#facf3d] mb-4">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <p className="italic text-lg font-medium text-[#2e5ddd] mb-2">
                    "If someone like me—with all the exposure and resources—once struggled to present myself right, what about the rest of the country's aspiring talent?"
                  </p>
                </div>
                
                <p className="text-lg">
                  Today, his programs don't just teach skills—<strong>they ignite belief</strong>. His coaching ensures individuals don't just dream — <strong>they deliver</strong>.
                </p>
                
                <div className="text-center p-8 glass-card bg-gradient-to-r from-[#2e5ddd]/5 to-[#facf3d]/5 border-2 border-[#2e5ddd]/20">
                  <p className="text-xl font-semibold text-[#2e5ddd] mb-4">
                    Whether you're a fresh graduate, a mid-career switcher, or a leader eyeing your next leap — this journey proves one thing:
                  </p>
                  <p className="text-2xl font-bold text-gradient-blue-yellow">
                    With the right coach, anyone can grow, lead, and win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
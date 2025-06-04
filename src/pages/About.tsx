import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedStats from '@/components/AnimatedStats';
import { Users, Award, BookOpen, Heart, ArrowRight, Target, Lightbulb, TrendingUp, MessageCircle, CheckCircle, Sparkles, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    {
      icon: <CheckCircle className="h-6 w-6 text-[#2e5ddd] dark:text-blue-400" />,
      title: "Overcome interview anxiety",
      description: "Build confidence through proven techniques"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#2e5ddd] dark:text-blue-400" />,
      title: "Master communication and presence",
      description: "Develop compelling personal branding"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#2e5ddd] dark:text-blue-400" />,
      title: "Align aspirations with market realities",
      description: "Strategic career positioning"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#2e5ddd] dark:text-blue-400" />,
      title: "Approach interviews with strategy, structure, and confidence",
      description: "Comprehensive preparation framework"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2e5ddd]/5 via-transparent to-[#facf3d]/5 dark:from-blue-400/10 dark:to-[#daa520]/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e5ddd]/10 dark:bg-blue-400/10 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#facf3d]/10 dark:bg-[#daa520]/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
          
          <div className="container relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Floating Badge */}
              <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full glass-card border border-[#2e5ddd]/20 dark:border-blue-400/20 animate-fade-in">
                <Sparkles className="h-5 w-5 text-[#facf3d] dark:text-[#daa520] mr-2 animate-pulse" />
                <span className="text-sm font-medium text-[#2e5ddd] dark:text-blue-400">Transforming Careers Since 2006</span>
              </div>

              {/* Main Heading with Enhanced Typography */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
                <span className="text-[#2e5ddd] dark:text-blue-400 block mb-4">Vision &</span>
                <span className="text-[#facf3d] dark:text-[#daa520] relative">
                  Purpose
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2e5ddd] to-[#facf3d] dark:from-blue-400 dark:to-[#daa520] rounded-full animate-pulse"></div>
                </span>
              </h1>
              
              {/* Enhanced Subtitle */}
              <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in-bottom">
                Empowering individuals to bridge the gap between potential and performance through 
                <span className="font-semibold text-[#facf3d] dark:text-[#daa520]"> transformative education</span> and 
                <span className="font-semibold text-[#2e5ddd] dark:text-blue-400"> strategic mentorship</span>
              </p>

              {/* Interactive Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {[
                  { number: "8000+", label: "Lives Transformed", icon: Users },
                  { number: "18+", label: "Years Experience", icon: Award },
                  { number: "100+", label: "Institutions", icon: BookOpen },
                  { number: "95%", label: "Success Rate", icon: Star }
                ].map((stat, index) => (
                  <div key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300 cursor-pointer">
                    <stat.icon className="h-8 w-8 text-[#2e5ddd] dark:text-blue-400 mx-auto mb-3 group-hover:animate-pulse" />
                    <div className="text-2xl md:text-3xl font-bold text-[#facf3d] dark:text-[#daa520] mb-1">{stat.number}</div>
                    <div className="text-sm text-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Vision and Purpose Section */}
        <section className="py-20 relative">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Vision Card */}
                <div className="glass-card p-10 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2e5ddd]/5 dark:bg-blue-400/5 rounded-full filter blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="flex items-center mb-8 relative z-10">
                    <div className="p-4 rounded-xl bg-[#2e5ddd]/10 dark:bg-blue-400/10 group-hover:bg-[#2e5ddd]/20 dark:group-hover:bg-blue-400/20 transition-colors duration-300 mr-4">
                      <Target className="h-10 w-10 text-[#2e5ddd] dark:text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#2e5ddd] dark:text-blue-400 group-hover:scale-105 transition-transform duration-300">Vision</h2>
                  </div>
                  
                  <p className="text-lg text-foreground/90 leading-relaxed relative z-10">
                    To promote education not merely as an academic pursuit, but as a powerful engine for 
                    <span className="font-semibold text-[#2e5ddd] dark:text-blue-400"> employability, leadership, and meaningful impact</span>—shaping 
                    a world where individuals learn skills, not just theories, and rise beyond qualifications to become 
                    <span className="font-semibold text-[#facf3d] dark:text-[#daa520]"> inspiring and transformative leaders</span>.
                  </p>
                </div>
                
                {/* Purpose Card */}
                <div className="glass-card p-10 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#facf3d]/5 dark:bg-[#daa520]/5 rounded-full filter blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="flex items-center mb-8 relative z-10">
                    <div className="p-4 rounded-xl bg-[#facf3d]/10 dark:bg-[#daa520]/10 group-hover:bg-[#facf3d]/20 dark:group-hover:bg-[#daa520]/20 transition-colors duration-300 mr-4">
                      <Heart className="h-10 w-10 text-[#facf3d] dark:text-[#daa520]" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#facf3d] dark:text-[#daa520] group-hover:scale-105 transition-transform duration-300">Purpose</h2>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    <p className="text-lg text-foreground/90 leading-relaxed">
                      Anil has a deep commitment to enabling individuals and institutions to thrive in an ever-evolving world. 
                      Through a combination of <span className="font-semibold text-[#2e5ddd] dark:text-blue-400">strategic insights</span>, 
                      <span className="font-semibold text-[#facf3d] dark:text-[#daa520]"> experiential learning</span>, and industry-aligned mentorship.
                    </p>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-[#facf3d]/10 to-[#2e5ddd]/10 dark:from-[#daa520]/10 dark:to-blue-400/10 border-l-4 border-[#facf3d] dark:border-[#daa520]">
                      <p className="font-medium text-[#facf3d] dark:text-[#daa520] text-lg">
                        To turn potential into performance and education into employability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Journey Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-[#2e5ddd]/5 dark:to-blue-400/5">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full glass-card">
                  <TrendingUp className="h-5 w-5 text-[#2e5ddd] dark:text-blue-400 mr-2" />
                  <span className="text-sm font-medium text-[#2e5ddd] dark:text-blue-400">Our Journey</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-[#2e5ddd] dark:text-blue-400">Opening the doors of</span>
                  <br />
                  <span className="text-[#facf3d] dark:text-[#daa520]">Education to Employability</span>
                </h1>
                
                <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                  A Journey Rooted in Purpose — <span className="font-semibold text-[#facf3d] dark:text-[#daa520]">Empowering 8,000+ Futures</span>
                </p>
              </div>
              
              {/* Story Content */}
              <div className="space-y-8">
                <div className="glass-card p-8 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg leading-relaxed text-foreground/90">
                    Anil Gupta has trained, coached, and mentored more than <strong className="text-[#facf3d] dark:text-[#daa520]">8,000 students and professionals</strong> across 
                    MBA colleges, corporate leadership programs, and career transition workshops, over the past <strong className="text-[#2e5ddd] dark:text-blue-400">18 years</strong>.
                  </p>
                </div>

                <div className="glass-card p-8 border-l-4 border-[#2e5ddd] dark:border-blue-400 bg-gradient-to-r from-[#2e5ddd]/5 to-transparent dark:from-blue-400/5">
                  <div className="flex items-start">
                    <MessageCircle className="h-8 w-8 text-[#2e5ddd] dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xl font-medium text-[#2e5ddd] dark:text-blue-400 mb-3 italic">
                        "The gap isn't just about answering questions right, it's about understanding the interview as a strategic conversation—where clarity, confidence, and industry awareness matter more than rote knowledge."
                      </p>
                      <p className="text-sm text-foreground/70 font-medium">— Anil Gupta</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Achievement Grid */}
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="glass-card p-6 group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex items-start">
                        <div className="mr-4 p-2 rounded-full bg-[#2e5ddd]/10 dark:bg-blue-400/10 group-hover:bg-[#2e5ddd]/20 dark:group-hover:bg-blue-400/20 transition-colors duration-300">
                          {achievement.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-[#2e5ddd] dark:group-hover:text-blue-400 transition-colors">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-foreground/70">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Inspiring Quote Section */}
                <div className="text-center p-12 glass-card bg-gradient-to-r from-[#facf3d]/10 via-[#2e5ddd]/5 to-[#facf3d]/10 dark:from-[#daa520]/10 dark:via-blue-400/5 dark:to-[#daa520]/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2e5ddd]/5 to-transparent dark:via-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-block p-6 rounded-full bg-gradient-to-br from-[#facf3d] to-[#2e5ddd] dark:from-[#daa520] dark:to-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="h-12 w-12 text-white" />
                    </div>
                    
                    <p className="text-2xl md:text-3xl font-bold text-[#2e5ddd] dark:text-blue-400 mb-4 leading-tight">
                      "If someone like me—with all the exposure and resources—once struggled to present myself right, 
                      <span className="text-[#facf3d] dark:text-[#daa520]"> what about the rest of the country's aspiring talent?</span>"
                    </p>
                    
                    <div className="mt-8 p-6 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                      <p className="text-xl font-semibold text-[#2e5ddd] dark:text-blue-400 mb-2">
                        With the right coaching, anyone can lead, grow, and win.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e5ddd]/10 via-transparent to-[#facf3d]/10 dark:from-blue-400/10 dark:to-[#daa520]/10"></div>
          
          <div className="container max-w-4xl relative z-10">
            <div className="text-center px-4 glass-card p-12 hover:shadow-2xl transition-all duration-500 group">
              <div className="mb-8">
                <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#2e5ddd]/10 to-[#facf3d]/10 dark:from-blue-400/10 dark:to-[#daa520]/10">
                  <Sparkles className="h-5 w-5 text-[#facf3d] dark:text-[#daa520] mr-2" />
                  <span className="text-sm font-medium text-[#2e5ddd] dark:text-blue-400">Start Your Transformation</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-[#2e5ddd] dark:text-blue-400">Ready to Transform</span>
                  <br />
                  <span className="text-[#facf3d] dark:text-[#daa520]">Your Career Journey?</span>
                </h2>
              </div>
              
              <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of successful professionals who have accelerated their careers with Intervuwalla's 
                <span className="font-semibold text-[#2e5ddd] dark:text-blue-400"> industry-focused training</span> and 
                <span className="font-semibold text-[#facf3d] dark:text-[#daa520]"> expert mentorship</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="rounded-full bg-gradient-to-r from-[#2e5ddd] to-blue-600 hover:from-[#2e5ddd]/90 hover:to-blue-600/90 text-white px-8 py-4 text-lg font-medium btn-hover-expand btn-glow"
                >
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full border-2 border-[#facf3d] dark:border-[#daa520] text-[#facf3d] dark:text-[#daa520] hover:bg-[#facf3d]/10 dark:hover:bg-[#daa520]/10 px-8 py-4 text-lg font-medium"
                >
                  Watch Success Stories
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
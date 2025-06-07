
import { useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Workshops from '@/components/Workshops';
import Testimonials from '@/components/Testimonials';
import Associations from '@/components/Associations';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import AnimatedStats from '@/components/AnimatedStats';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredCourses: CourseProps[] = [
    {
      id: "interview-preparation",
      title: "Interview Preparation Program",
      description: "Comprehensive guidance on acing job interviews through SWOT analysis, answer structuring, and managing interview anxiety.",
      image: "/images/06341b9c-e889-4384-ad9e-959eb12dd489.png",
      level: "All Levels",
      students: 892,
      rating: 4.6,
      category: "Coaching + Mentoring",
      price: 7999,
      originalPrice: 15999,
    },
    {
      id: "career-coaching",
      title: "Career Coaching & Mentoring",
      description: "Detailed understanding of career development strategies, decision-making & problem-solving, goal setting, and personal branding.",
      image: "/images/06341b9c-e889-4384-ad9e-959eb12dd489.png",
      level: "All Levels",
      students: 983,
      rating: 4.7,
      category: "Coaching + Mentoring",
      price: 10999,
      originalPrice: 18999,
    },
    {
      id: "business-communication",
      title: "Business Communication",
      description: "Sharpening communication capabilities across written, verbal, interpersonal, ethical, and cross-cultural dimensions.",
      image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png",
      level: "All Levels",
      students: 1245,
      rating: 4.8,
      category: "University / MBA Programs",
      price: 7999,
      originalPrice: 15999,
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      description: "Executive coaching for senior management to enhance leadership capabilities.",
      image: "/images/6c75556a-1a5a-4cbc-95db-eb24dc7b6bcb.png",
      level: "Advanced",
      students: 756,
      rating: 4.9,
      category: "Corporate Training",
      price: 12999,
      originalPrice: 21999,
    },
    {
      id: "fintech",
      title: "Fintech Program",
      description: "Understanding financial technology, lending & credit technologies, Blockchain & Cryptofinance, and RegTech.",
      image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png",
      level: "Intermediate",
      students: 634,
      rating: 4.5,
      category: "University / MBA Programs",
      price: 8999,
      originalPrice: 17999,
    },
    {
      id: "strategic-selling",
      title: "Strategic Selling Skills & Sales Management",
      description: "Equip professionals with structured sales techniques and improve customer relationship management capabilities.",
      image: "/images/6c75556a-1a5a-4cbc-95db-eb24dc7b6bcb.png",
      level: "Advanced",
      students: 567,
      rating: 4.7,
      category: "University / MBA Programs",
      price: 12999,
      originalPrice: 21999,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Enhanced Registration Banner */}
        <div className="py-6 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-red-400/10 backdrop-blur-md relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between rounded-xl glass-effect p-6 border border-yellow-400/20">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="relative">
                  <img
                    src="/images/f0e019fb-c25f-4348-abaf-73f954784463.png"
                    alt="Anil Gupta"
                    className="h-16 w-16 rounded-full object-cover border-2 border-yellow-400 mr-4"
                  />
                  {/* Floating sparkle effect */}
                  <div className="absolute -top-1 -right-1 text-yellow-400 animate-bounce">
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2e5ddd] dark:text-blue-400">Workshop Registration</h3>
                  <p className="text-foreground/70">Join Anil Gupta's exclusive interview preparation workshop</p>
                  <div className="mt-1 flex items-center">
                    <span className="text-lg font-bold text-yellow-600">₹199</span>
                    <span className="text-xs text-foreground/70 ml-2">per person</span>
                    {/* Flashy "limited time" badge */}
                    <span className="ml-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full animate-pulse font-bold">
                      🔥 Limited Time
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Button 
                  className="relative z-10 bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 btn-hover-expand btn-glow font-bold shadow-lg"
                  size="lg"
                  onClick={() => window.location.href = '/workshops'}
                >
                  🚀 Register Now
                </Button>
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded blur opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <AnimatedStats />
        
        {/* Featured Courses */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-2 mb-4 text-[#2e5ddd] dark:text-blue-400">
                Popular <span className="text-[#b8860b] dark:text-[#daa520]">Courses</span>
              </h2>
              <p className="text-foreground/80 text-lg">
                Join thousands of professionals who have transformed their careers with our specialized programs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/courses" 
                className="inline-flex items-center text-[#2e5ddd] dark:text-blue-400 font-medium hover:underline group"
              >
                View all courses
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
        
        <Features />
        <Workshops />
        <Associations />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

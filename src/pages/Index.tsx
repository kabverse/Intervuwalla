
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Workshops from '@/components/Workshops';
import Testimonials from '@/components/Testimonials';
import Associations from '@/components/Associations';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredCourses: CourseProps[] = [
    {
      id: "c1",
      title: "Master the Technical Interview",
      description: "Comprehensive preparation for coding interviews at top tech companies.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      duration: "8 weeks",
      level: "Intermediate",
      students: 1245,
      rating: 4.8,
      category: "Tech",
      price: 2999,
      featured: true
    },
    {
      id: "c2",
      title: "Behavioral Interview Excellence",
      description: "Learn to present your experience and skills persuasively in interviews.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      duration: "4 weeks",
      level: "All Levels",
      students: 983,
      rating: 4.6,
      category: "Soft Skills",
      price: 1999
    },
    {
      id: "c3",
      title: "Resume & LinkedIn Optimization",
      description: "Create standout profiles that get you noticed by recruiters and hiring managers.",
      image: "https://images.unsplash.com/photo-1587614382231-d6f94f4c02a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      duration: "2 weeks",
      level: "Beginner",
      students: 1578,
      rating: 4.9,
      category: "Career",
      price: 999
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Registration Banner */}
        <div className="py-6 bg-[#2e5ddd]/10 backdrop-blur-md">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between rounded-xl glass-effect p-6">
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src="/lovable-uploads/f0e019fb-c25f-4348-abaf-73f954784463.png"
                  alt="Anil Gupta"
                  className="h-16 w-16 rounded-full object-cover border-2 border-[#2e5ddd] mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#2e5ddd]">Workshop Registration</h3>
                  <p className="text-foreground/70">Join Anil Gupta's exclusive interview preparation workshop</p>
                  <div className="mt-1 flex items-center">
                    <span className="text-lg font-bold text-[#facf3d]">₹199</span>
                    <span className="text-xs text-foreground/70 ml-2">per person</span>
                  </div>
                </div>
              </div>
              <Button 
                className="bg-[#2e5ddd] text-white hover:bg-[#2e5ddd]/90 btn-hover-expand btn-glow"
                size="lg"
                onClick={() => window.location.href = '/workshops'}
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Featured Courses */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-2 mb-4 text-[#2e5ddd]">
                Popular <span className="text-[#facf3d]">Courses</span>
              </h2>
              <p className="text-foreground/80 text-lg">
                Join thousands of professionals who have transformed their careers with our specialized interview courses.
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
                className="inline-flex items-center text-[#2e5ddd] font-medium hover:underline group"
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


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
      id: "business-communication",
      title: "Business Communication",
      description: "Sharpening communication capabilities across written, verbal, interpersonal, ethical, and cross-cultural dimensions.",
      image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png",
      duration: "7 weeks",
      level: "All Levels",
      students: 1245,
      rating: 4.8,
      category: "University / MBA Programs",
      price: 14999,
      featured: true
    },
    {
      id: "career-coaching",
      title: "Career Coaching & Mentoring",
      description: "Detailed understanding of career development strategies, decision-making & problem-solving, goal setting, and personal branding.",
      image: "/images/06341b9c-e889-4384-ad9e-959eb12dd489.png",
      duration: "9 weeks",
      level: "All Levels",
      students: 983,
      rating: 4.7,
      category: "Coaching + Mentoring",
      price: 12999
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      description: "Executive coaching for senior management to enhance leadership capabilities.",
      image: "/images/6c75556a-1a5a-4cbc-95db-eb24dc7b6bcb.png",
      duration: "10 weeks",
      level: "Advanced",
      students: 756,
      rating: 4.9,
      category: "Corporate Training",
      price: 19999
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
                  src="/images/f0e019fb-c25f-4348-abaf-73f954784463.png"
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

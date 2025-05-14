
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const courses: CourseProps[] = [
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
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-primary/5 relative overflow-hidden">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6 animate-fade-in">
                Our <span className="text-gradient-blue-yellow animate-pulse-soft">Premium Programs</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 animate-fade-in">
                Specialized courses designed to help you excel in every aspect of the interview process.
              </p>
              <Link to="/workshops">
                <Button className="bg-primary text-white hover:bg-primary/90 btn-glow rounded-full">
                  Start with our ₹199 Workshop
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Courses Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Workshop Callout */}
        <section className="py-12 bg-primary/5 mb-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2 mb-4 text-gradient-blue-yellow">
                Try Before You Buy
              </h2>
              <p className="text-lg mb-8">
                Join our affordable ₹199 workshop to get a taste of our teaching style and curriculum. It's the perfect way to see if our programs are right for you.
              </p>
              <Link to="/workshops">
                <Button className="bg-[hsl(var(--yellow))] hover:bg-[hsl(var(--yellow))]/90 text-black rounded-full animate-pulse-soft">
                  Register for Workshop
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;

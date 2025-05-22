
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, GraduationCap, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

const Courses = () => {
  // Reference for the courses section
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to scroll to courses section
  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const courses: CourseProps[] = [
    {
      id: "business-communication",
      title: "Business Communication",
      description: "Sharpening communication capabilities across written, verbal, interpersonal, ethical, and cross-cultural dimensions.",
      image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png",
      level: "All Levels",
      students: 1245,
      rating: 4.8,
      category: "University / MBA Programs",
      price: 17999,
      featured: true
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
      price: 19999
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
      price: 34999
    }
  ];

  // Program categories with updated details
  const programCategories = [
    {
      id: "university",
      title: "University / MBA Programs",
      description: "Specialized preparation for academic and business school interviews",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "from-blue-500/20 to-blue-600/20",
      image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png",
      programs: [
        { 
          id: "u1", 
          name: "Business Communication", 
          desc: "Sharpening communication capabilities across written, verbal, interpersonal, ethical, and cross-cultural dimensions.",
          modules: 7,
          audience: "Professionals from Academia and Corporate background",
          slug: "business-communication"
        },
        { 
          id: "u2", 
          name: "Fintech", 
          desc: "Understanding financial technology, lending & credit technologies, Blockchain & Cryptofinance, Cybersecurity and RegTech.",
          modules: 9,
          audience: "MBA students, professionals from corporate background",
          slug: "fintech"
        },
        { 
          id: "u3", 
          name: "Customer Relation Management", 
          desc: "Focuses on sales and service automation, customer lifecycle management, campaign management and CRM in marketing.",
          modules: 9,
          audience: "MBA students and professionals from sales & marketing, customer service, banking, startup founders",
          slug: "crm"
        },
      ]
    },
    {
      id: "coaching",
      title: "Coaching + Mentoring for Students",
      description: "Personalized guidance for career development and interview excellence",
      icon: <Users className="h-8 w-8" />,
      color: "from-yellow-500/20 to-yellow-600/20",
      image: "/images/06341b9c-e889-4384-ad9e-959eb12dd489.png",
      programs: [
        { 
          id: "c1", 
          name: "Career Coaching & Mentoring", 
          desc: "Detailed understanding of career development strategies, decision-making & problem-solving, goal setting, and personal branding.",
          modules: 9,
          audience: "Students, job seekers, career changers and professionals",
          slug: "career-coaching"
        },
        { 
          id: "c2", 
          name: "Interview Preparation Program", 
          desc: "Guidance on acing job interviews through SWOT analysis, answer structuring, rapport forming, and managing interview anxiety.",
          modules: 13,
          audience: "Job seekers, career changers, students and professionals",
          slug: "interview-preparation"
        }
      ]
    },
    {
      id: "corporate",
      title: "Corporate Training",
      description: "Professional development programs for organizations and teams",
      icon: <Briefcase className="h-8 w-8" />,
      color: "from-primary/20 to-indigo-600/20",
      image: "/images/6c75556a-1a5a-4cbc-95db-eb24dc7b6bcb.png",
      programs: [
        { 
          id: "ct1", 
          name: "Leadership Development", 
          desc: "Executive coaching for senior management to enhance leadership capabilities.", 
          modules: 10,
          audience: "Mid to senior-level managers and executives",
          slug: "leadership-development"
        },
        { 
          id: "ct2", 
          name: "Team Communication", 
          desc: "Workshops focused on improving cross-functional team communication and collaboration.", 
          modules: 8,
          audience: "Teams and departments within corporate organizations",
          slug: "team-communication"
        },
        { 
          id: "ct3", 
          name: "Strategic Hiring & Talent Management", 
          desc: "Training for HR professionals on identifying and nurturing top talent.", 
          modules: 11,
          audience: "HR professionals and hiring managers",
          slug: "strategic-hiring"
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-yellow/5 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-yellow rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute bottom-0 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6 animate-fade-in">
                Our <span className="text-gradient-blue-yellow animate-pulse-soft">Premium Programs</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 animate-fade-in">
                Specialized courses designed to help you excel in every aspect of the interview process.
              </p>
              <Link to="/workshops">
                <Button className="bg-primary text-white hover:bg-primary/90 btn-glow rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/20">
                  Start with our ₹199 Workshop
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>
        
        {/* Program Categories Section with Visual Cards */}
        <section className="py-16 bg-white relative">
          <div className="container relative z-10">
            <h2 className="heading-2 mb-4 text-center">
              <span className="text-gradient-blue-yellow">Explore Our Programs</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Discover our specialized programs designed to help you excel in different professional contexts
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {programCategories.map((category) => (
                <div 
                  key={category.id} 
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/5 h-[320px]"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col z-10">
                    <div className="bg-white/90 rounded-full p-4 mb-4 w-16 h-16 flex items-center justify-center text-primary shadow-md">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
                    <p className="text-sm text-white/90 mb-4">{category.description}</p>
                    
                    {/* Program count badge */}
                    <div className="inline-flex items-center bg-black/30 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm mt-2 w-fit">
                      <span>{category.programs.length} Programs Available</span>
                    </div>
                    
                    <div className="mt-auto">
                      <Button 
                        variant="ghost" 
                        className="bg-white/80 backdrop-blur-sm hover:bg-white/95 text-foreground group-hover:translate-x-1 transition-transform"
                        onClick={scrollToCourses}
                      >
                        View More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:ml-2 transition-all" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Program Modules Section with Interactive Accordion */}
            <div ref={coursesRef} className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-primary/10 transform hover:scale-[1.01] transition-transform">
              <div className="bg-gradient-to-r from-primary/10 to-yellow/10 p-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-xl">Detailed Program Curriculum</h3>
              </div>
              
              <Accordion type="single" collapsible className="w-full" defaultValue="university">
                {programCategories.map((category) => (
                  <AccordionItem key={category.id} value={category.id} className="border-b border-primary/10">
                    <AccordionTrigger className="py-6 px-4 text-xl font-display font-semibold text-foreground hover:text-primary group">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 rounded-full p-2 group-hover:bg-primary/20 transition-colors">
                          {category.icon}
                        </div>
                        {category.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 px-4">
                      <div className="grid gap-4 relative">
                        {/* Virtual Connection Line */}
                        <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-yellow to-primary/50 opacity-30"></div>
                        
                        {category.programs.map((program, idx) => (
                          <Card 
                            key={program.id} 
                            className="p-1 rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-md border-primary/5 hover:border-primary/20"
                          >
                            <div className="bg-gradient-to-r from-primary/5 via-white to-yellow/5 p-5 rounded">
                              <div className="flex items-start gap-4">
                                {/* Connection Dot */}
                                <div className="flex-shrink-0 mt-1.5">
                                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border-2 border-primary/30">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                  </div>
                                </div>
                                
                                <div className="flex-1">
                                  <div className="flex items-center justify-between flex-wrap gap-2">
                                    <h3 className="font-medium text-lg text-foreground flex items-center">
                                      {program.name}
                                    </h3>
                                    <div className="flex items-center space-x-2">
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                        {program.modules} Modules
                                      </span>
                                    </div>
                                  </div>
                                  
                                  <div className="mt-2">
                                    <p className="text-muted-foreground text-sm">{program.desc}</p>
                                  </div>
                                  
                                  <div className="mt-3 bg-black/5 p-2 rounded-md">
                                    <p className="text-xs text-foreground/70">
                                      <span className="font-medium">Designed for:</span> {program.audience}
                                    </p>
                                  </div>
                                  
                                  <div className="mt-3 flex justify-end">
                                    <Link to={`/programs/${program.slug}`}>
                                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90 hover:bg-primary/10 group">
                                        Learn more
                                        <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                                      </Button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* Our Approach Section with Mentor Image */}
        <section className="py-16 bg-gradient-to-b from-white to-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow/20 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full"></div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/images/25bc291b-fb38-426e-a2a5-80dec983cf49.png" 
                    alt="Virtual Training Session" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-medium">Live Virtual Sessions</h3>
                    <p className="text-sm text-white/80">Interactive learning experience with direct mentorship</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="heading-2 mb-6 text-gradient-blue-yellow">Our Teaching Approach</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Expert-Led Education</h3>
                      <p className="text-muted-foreground">All our programs are designed and delivered by industry professionals with decades of experience in their respective fields.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-5 w-5 text-[hsl(var(--yellow))]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Personalized Mentoring</h3>
                      <p className="text-muted-foreground">Small batch sizes ensure that each participant receives individual attention and personalized feedback throughout the program.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Practical Application</h3>
                      <p className="text-muted-foreground">Our curriculum emphasizes real-world scenarios and hands-on exercises that directly apply to your professional journey.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-[hsl(var(--yellow))] hover:bg-[hsl(var(--yellow))]/90 text-black rounded-full px-6 py-2 font-medium shadow-lg shadow-yellow/20">
                    Learn About Our Methodology
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Courses Grid */}
        <section className="py-16 bg-gradient-to-br from-background to-primary/5">
          <div className="container">
            <h2 className="heading-2 mb-4 text-center">
              <span className="text-gradient-blue-yellow">Featured Courses</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our most popular courses designed to help you prepare for interviews and advance your career
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Workshop Callout */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow/20 to-primary/20 opacity-50"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/20 text-center">
              <h2 className="heading-2 mb-4 text-gradient-blue-yellow">
                Try Before You Buy
              </h2>
              <p className="text-lg mb-8 text-foreground/90">
                Join our affordable ₹199 workshop to get a taste of our teaching style and curriculum. It's the perfect way to see if our programs are right for you.
              </p>
              <Link to="/workshops">
                <Button className="bg-[hsl(var(--yellow))] hover:bg-[hsl(var(--yellow))]/90 text-black rounded-full px-8 py-6 text-lg font-medium shadow-lg shadow-yellow/20 animate-pulse-soft">
                  Register for Workshop
                  <ArrowRight className="ml-2 h-5 w-5" />
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

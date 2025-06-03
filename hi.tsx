import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Calendar, Users, CheckCircle, ArrowLeft, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Define the program data interface
interface ProgramData {
  id: string;
  name: string;
  desc: string;
  modules: number;
  audience: string;
  slug: string;
  category: string;
  duration: string;
  startDate: string;
  price: number;
  features: string[];
  curriculum: { title: string; description: string }[];
  image?: string;
  learningOutcomes?: string[];
}

// Sample program data (would typically come from a database)
const programsData: Record<string, ProgramData> = {
  "job-interview-preparation": {
    id: "c1",
    name: "Job Interview Preparation Program",
    desc: "A comprehensive course designed to build confidence, equip clarity, and provide the strategy needed to stand out during interviews. Focusing on communication skills, strategy making, self-awareness and real-time feedback, it prepares learners to handle any interview scenario and present their best self.",
    modules: 14,
    audience: "Job Seekers, Career Changers, Students, Professionals",
    slug: "job-interview-preparation",
    category: "Coaching + Mentoring",
    duration: "10 hours (Customized for groups)",
    startDate: "Rolling admissions",
    price: 15999,
    features: [
      "Understand the interview landscape, job market trends, and goal-setting techniques",
      "Identify personal weaknesses and boost confidence using self-awareness tools",
      "Master structured response techniques and prepare for tough interview questions",
      "Learn effective pre-interview and post-interview strategies",
      "Develop strong communication skills, active listening, and rapport-building techniques",
      "Optimize professional presence through attire, body language, and LinkedIn/resume crafting",
      "Build networking skills and handle salary negotiations, rejections, and job offers"
    ],
    curriculum: [
      { title: "Introduction to Getting Your Dream Job & Course Overview", description: "Overview of the interview process & job market trends. Understanding the importance of interview skills and career goal-setting workshop." },
      { title: "Mastering Interviewing – Turning Weaknesses into Strengths", description: "Identifying and addressing personal weaknesses through SWOT analysis. Enhancing confidence and building self-awareness for better performance." },
      { title: "Pre-Interview Preparation & Strategy", description: "Learning what to bring to an interview (checklist & strategies) and researching the company. Understanding the job description and tailoring responses along with managing interview anxiety." },
      { title: "Structuring Interview Responses & Answering Difficult Questions", description: "Answering any question confidently using structured frameworks. Learning STAR, CAR, PAR frameworks for interview questions. Knowing when to stop talking & signs of a successful interview." },
      { title: "Building a Connection with the Interviewer", description: "How to bond with the interviewer and making first impression. Importance of active listening and body language cues and adapting to different interviewer personalities." },
      { title: "Predicting & Answering Tough Interview Questions", description: "Understanding how interviewers think and what they look for. Analyzing behavioural and situational questions. Strategies for handling aggressive or high-pressure interviews." },
      { title: "Advanced Interview Techniques & Communication Skills", description: "Learning ideal body language, tone, and voice modulation, the psychology of persuasion in interviews and the words to use and words to avoid." },
      { title: "Dressing for Success – What to Wear in an Interview", description: "Dress codes for different industries and company cultures. Understanding the impact of appearance on first impressions, grooming, accessories, and professional attire tips." },
      { title: "Strategies for Different Interviewers & Panel Interviews", description: "Adapting interview strategies based on the interviewer's seniority. Understanding one-on-one vs. panel interviews vs. technical interviews. Psychological tactics based on the type of interviewer." },
      { title: "Asking the Right Questions in an Interview", description: "Understanding why asking questions is important. The best questions to ask based on the role and interviewer's position. How to demonstrate enthusiasm and cultural fit through questioning." },
      { title: "Pre- and Post-Interview Strategies", description: "What to do on the morning of the interview. Post-interview follow-up: Thank-you emails and professional etiquette. Analyzing your interview performance and learning from feedback." },
      { title: "Handling Job Offers, Rejections & Negotiations", description: "Understanding how to negotiate salary and benefits and when and how to decline a job offer professionally. Dealing with rejection & turning interviews into networking opportunities." },
      { title: "Resume, LinkedIn & Networking for Interview Success", description: "Crafting the perfect resume. Optimizing LinkedIn for job search & recruiter visibility. The power of networking: How to use informational interviews and referrals." },
      { title: "Full Mock Interview & Course Wrap-Up", description: "Real-world mock interview with feedback from experts. Personalized career plan moving forward. Q&A session, course reflection, and certification." }
    ],
    learningOutcomes: [
      "Demonstrate clear, confident, and tailored responses across all interview types",
      "Apply structured frameworks to answer behavioural and situational questions",
      "Adapt communication and body language based on interviewer style and setting",
      "Prepare thoroughly for interviews, from research to checklists to managing nerves",
      "Present a professional image through attire, LinkedIn profile, and resume alignment",
      "Engage in strategic questioning to show interest, fit, and long-term potential",
      "Navigate job offers, rejections, and follow-up communications with professionalism"
    ],
    image: "/lovable-uploads/06341b9c-e889-4384-ad9e-959eb12dd489.png"
  },
  "strategic-selling": {
    id: "u5",
    name: "Strategic Selling Skills & Sales Management Program",
    desc: "Equip professionals with structured and modern sales techniques and to improve customer relationship management and consultative selling capabilities.",
    modules: 10,
    audience: "MBA executives (with 4+ years' experience), sales professionals, mid-level professional, and solution-based consultants",
    slug: "strategic-selling",
    category: "University / MBA Programs",
    duration: "20 hours",
    startDate: "August 15, 2025",
    price: 24999,
    features: [
      "Enhance the ability to identify customer needs and deliver value-driven solutions",
      "Confidence in handling objections and navigating complex negotiations",
      "Improving sales planning, forecasting, and performance monitoring",
      "Tailored techniques to address industry-specific sales challenges",
      "Greater customer satisfaction and long-term relationship management",
      "Increased revenue impact and faster sales cycle closure"
    ],
    curriculum: [
      { title: "Sales in the Modern Business Context", description: "Understanding the role of sales in organizations, types of selling, B2B vs B2C." },
      { title: "The Psychology of Selling", description: "Understanding buyer behavior, decision-making process, trust, and rapport building." },
      { title: "Consultative & Solution Selling", description: "Identifying pain points, customizing solutions, and value-based conversations." },
      { title: "Sales Planning and Prospecting", description: "Insights into target setting, funnel management, using CRM tools, and identifying decision-makers." },
      { title: "Effective Communication & Presentation", description: "Learning sales pitch design, storytelling, listening, and handling Q&A." },
      { title: "Objection Handling and Negotiation", description: "Understanding types of objections, negotiation techniques, and closing strategies." },
      { title: "Sales Metrics and Performance Management", description: "Understanding KPIs, pipeline analysis, forecasting, and territory management." },
      { title: "Sector-Specific Sales Approaches", description: "Adapting selling strategies in, BFSI, retail, agriculture, channel/dealer sales, consulting services, and government sales." },
      { title: "Team Selling and Collaboration", description: "Working with marketing, service, and product teams; managing internal stakeholders." },
      { title: "Digital Tools & the Future of Sales", description: "Social selling, AI & data-driven sales, remote selling strategies." }
    ],
    image: "/lovable-uploads/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "business-negotiation": {
    id: "u4",
    name: "Business Negotiation Skills",
    desc: "Build foundational and advanced negotiation skills, while also developing strategies for value creation, conflict resolution and stakeholder alignment.",
    modules: 10,
    audience: "MBA students with 4+ years of experience, Mid-level executives transitioning to leadership, international trade, and strategic partnership professionals",
    slug: "business-negotiation",
    category: "University / MBA Programs",
    duration: "20 hours",
    startDate: "July 20, 2025",
    price: 22999,
    features: [
      "Sharpen negotiation skills relevant in international and cross-cultural contexts",
      "Enhancing confidence, communication, and adaptability",
      "Learning verbal and non-verbal communication, persuasion, and assertiveness",
      "Enhancing ability to manage conflicts, close deals, and build partnerships",
      "Applying negotiation techniques in real-world scenario"
    ],
    curriculum: [
      { title: "Introduction to Negotiation", description: "Nature, types, and myths of negotiation; distributive vs integrative approaches." },
      { title: "International Business Context", description: "Cultural intelligence, institutional differences, global legal frameworks." },
      { title: "Negotiation Planning", description: "Setting objectives, BATNA, ZOPA, stakeholder mapping, negotiation checklists." },
      { title: "Communication and Influence", description: "Verbal & non-verbal communication, persuasion, listening skills, assertiveness." },
      { title: "Cross-Cultural Negotiation", description: "Hofstede's dimensions, case examples (e.g., US vs Japan, India vs EU), dos and don'ts." },
      { title: "Multi-party and Team Negotiations", description: "Coalition building, internal alignment, managing competing interests." },
      { title: "Negotiation Simulations", description: "Real-world role-plays (mergers, trade agreements, supply chain disputes)." },
      { title: "Ethics and Power in Negotiation", description: "Ethical dilemmas, power dynamics, trust building, long-term relationship management." },
      { title: "Conflict Resolution & Mediation", description: "Handling impasses, mediation tactics, win-win frameworks." },
      { title: "Negotiation in the Digital World", description: "Virtual negotiation tools, cross-border online platforms, AI in negotiation." }
    ],
    image: "/lovable-uploads/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "executive-leadership": {
    id: "l1",
    name: "Executive Leadership Development",
    desc: "Comprehensive leadership training for senior executives and C-suite professionals.",
    modules: 12,
    audience: "Senior executives, C-suite professionals, and aspiring leaders",
    slug: "executive-leadership",
    category: "Leadership Development Programs",
    duration: "24 hours",
    startDate: "September 10, 2025",
    price: 39999,
    features: [
      "Strategic vision development and organizational transformation",
      "Advanced decision-making frameworks for complex scenarios",
      "Executive presence and influential communication mastery",
      "Change leadership and crisis management capabilities",
      "Building high-performance leadership teams",
      "Sustainable leadership practices and legacy building"
    ],
    curriculum: [
      { title: "Strategic Leadership Foundations", description: "Core principles of executive leadership and organizational impact." },
      { title: "Vision & Strategy Development", description: "Creating compelling organizational vision and strategic direction." },
      { title: "Executive Decision Making", description: "Advanced frameworks for complex decision-making under uncertainty." },
      { title: "Leading Organizational Change", description: "Change management, transformation leadership, and cultural evolution." },
      { title: "Executive Communication", description: "Influential communication, stakeholder management, and public speaking." },
      { title: "Building Leadership Teams", description: "Developing and managing high-performance leadership teams." },
      { title: "Crisis Leadership", description: "Leading through crisis, uncertainty, and organizational challenges." },
      { title: "Innovation & Digital Leadership", description: "Leading digital transformation and fostering innovation culture." },
      { title: "Global Leadership", description: "Cross-cultural leadership and managing global teams." },
      { title: "Ethical Leadership", description: "Values-based leadership, governance, and ethical decision-making." },
      { title: "Performance & Results", description: "Driving organizational performance and achieving sustainable results." },
      { title: "Leadership Legacy", description: "Succession planning, mentoring, and building lasting leadership impact." }
    ],
    image: "/lovable-uploads/6c75556a-1a5a-4cbc-95db-eb24dc7b6bcb.png"
  },
  "team-leadership": {
    id: "l2",
    name: "Team Leadership & Management",
    desc: "Essential skills for managing teams, driving performance, and fostering collaboration.",
    modules: 8,
    audience: "Team leaders, department heads, and emerging managers",
    slug: "team-leadership",
    category: "Leadership Development Programs",
    duration: "16 hours",
    startDate: "August 25, 2025",
    price: 19999,
    features: [
      "Effective team building and collaboration strategies",
      "Performance management and feedback systems",
      "Conflict resolution and team dynamics optimization",
      "Delegation and empowerment techniques",
      "Motivational leadership and employee engagement",
      "Goal setting and accountability frameworks"
    ],
    curriculum: [
      { title: "Foundations of Team Leadership", description: "Understanding team dynamics, leadership styles, and management principles." },
      { title: "Building High-Performance Teams", description: "Team formation, role clarity, and creating collaborative environments." },
      { title: "Communication & Feedback", description: "Effective communication strategies and constructive feedback systems." },
      { title: "Performance Management", description: "Goal setting, performance monitoring, and improvement planning." },
      { title: "Conflict Resolution", description: "Managing team conflicts, mediation techniques, and resolution strategies." },
      { title: "Delegation & Empowerment", description: "Effective delegation, empowering team members, and building autonomy." },
      { title: "Motivation & Engagement", description: "Understanding motivation, employee engagement, and retention strategies." },
      { title: "Leading Change at Team Level", description: "Managing team transitions, change adoption, and continuous improvement." }
    ],
    image: "/lovable-uploads/6c75556a-1a5a-4cbc-95db-eb24dc7b6bcb.png"
  }
};

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [program, setProgram] = useState<ProgramData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // In a real app, this would be an API call
    if (slug && programsData[slug]) {
      setProgram(programsData[slug]);
    }
    setLoading(false);
  }, [slug]);

  const handleEnroll = () => {
    // Placeholder for payment integration
    alert("Payment integration would be implemented here. This would connect to Razorpay or collect user information.");
    // In a real implementation, this would redirect to Razorpay or show a form
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">Loading program details...</div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="heading-2 mb-4">Program Not Found</h1>
          <p className="mb-6">We couldn't find the program you're looking for.</p>
          <Link to="/courses">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Programs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 to-yellow/5">
          <div className="container">
            <Link to="/courses" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Programs
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  {program.category}
                </div>
                
                <h1 className="heading-1 mb-6">
                  <span className="text-gradient-blue-yellow">{program.name}</span>
                </h1>
                
                <p className="text-xl text-foreground/80 mb-8">
                  {program.desc}
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col bg-background/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <div className="flex items-center text-primary mb-2">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      <span className="font-medium">Modules</span>
                    </div>
                    <span className="text-2xl font-semibold">{program.modules}</span>
                  </div>
                  
                  <div className="flex flex-col bg-background/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <div className="flex items-center text-primary mb-2">
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="font-medium">Duration</span>
                    </div>
                    <span className="text-2xl font-semibold">{program.duration}</span>
                  </div>
                  
                  <div className="flex flex-col bg-background/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <div className="flex items-center text-[hsl(var(--yellow))] mb-2">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="font-medium">Start Date</span>
                    </div>
                    <span className="text-lg font-semibold">{program.startDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button 
                    onClick={handleEnroll} 
                    size="lg" 
                    className="bg-primary text-white hover:bg-primary/90 rounded-full btn-glow shadow-lg shadow-primary/20"
                  >
                    Enroll Now for ₹{program.price.toLocaleString()}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <span className="text-sm text-foreground/70">Limited seats available</span>
                </div>
              </div>
              
              <div className="relative">
                {program.image ? (
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
                    <img 
                      src={program.image} 
                      alt={program.name} 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-primary/20 to-yellow/20 h-80 rounded-2xl flex items-center justify-center text-primary/50">
                    Program Image
                  </div>
                )}
                
                <div className="absolute -right-6 -bottom-6 -z-10 w-full h-full rounded-2xl bg-primary/10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Program Features */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-2 mb-8 text-center">
                <span className="text-gradient-blue-yellow">Program Highlights</span>
              </h2>
              
              <div className="grid gap-4 mb-8">
                {program.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-4 rounded-lg bg-primary/5 border border-primary/10"
                  >
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-yellow/10 rounded-xl border border-yellow/20">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Users className="h-5 w-5 text-[hsl(var(--yellow))] mr-2" />
                  Target Audience
                </h3>
                <p className="text-lg">{program.audience}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Curriculum */}
        <section className="py-16 bg-gradient-to-br from-background to-primary/5">
          <div className="container">
            <h2 className="heading-2 mb-8 text-center">
              <span className="text-gradient-blue-yellow">Program Curriculum</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Curriculum timeline */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-yellow to-primary/50 opacity-30"></div>
                
                <div className="space-y-8">
                  {program.curriculum.map((module, idx) => (
                    <Card key={idx} className="relative z-10">
                      <CardContent className="p-6">
                        <div className="flex">
                          {/* Connection dot */}
                          <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2">
                            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border-2 border-primary/30 shadow-md">
                              <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                            </div>
                          </div>
                          
                          <div className="pl-8">
                            <h3 className="text-xl font-semibold mb-2">
                              Module {idx + 1}: {module.title}
                            </h3>
                            <p className="text-muted-foreground">{module.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcomes Section */}
        {program.learningOutcomes && (
          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="heading-2 mb-8 text-center">
                  <span className="text-gradient-blue-yellow">Learning Outcomes</span>
                </h2>
                
                <div className="grid gap-4">
                  {program.learningOutcomes.map((outcome, index) => (
                    <div 
                      key={index} 
                      className="flex items-start p-4 rounded-lg bg-yellow/5 border border-yellow/10"
                    >
                      <CheckCircle className="h-6 w-6 text-[hsl(var(--yellow))] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow/20 to-primary/20 opacity-50"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/20 text-center">
              <h2 className="heading-2 mb-4 text-gradient-blue-yellow">
                Ready to Transform Your Skills?
              </h2>
              <p className="text-lg mb-8 text-foreground/90">
                Join our {program.name} program and take the next step in your professional journey.
              </p>
              <Button 
                onClick={handleEnroll} 
                size="lg" 
                className="bg-[hsl(var(--yellow))] hover:bg-[hsl(var(--yellow))]/90 text-black rounded-full px-8 py-6 text-lg font-medium shadow-lg shadow-yellow/20 animate-pulse-soft"
              >
                Enroll Now for ₹{program.price.toLocaleString()}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-4 text-sm text-foreground/70">
                Have questions? <Link to="/contact" className="text-primary hover:underline">Contact our admissions team</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProgramDetail;
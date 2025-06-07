import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Users, CheckCircle, ArrowLeft, GraduationCap, Sparkles, Zap, Timer, Star, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useCountUp } from '@/hooks/useCountUp';

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
  originalPrice: number;
  features: string[];
  curriculum: { title: string; description: string }[];
  image: string;
  learningOutcomes?: string[];
  seatsLeft: number;
  students: number;
  rating: number;
}

// Sample program data (would typically come from a database)
const programsData: Record<string, ProgramData> = {
  "fintech": {
    id: "f1",
    name: "Fintech",
    desc: "Fintech stands for Financial Technology; it is a transformational feature in the financial sector. It is helping in bringing financial inclusion through mobile apps and digital wallets. Through automation, AI, and blockchain, it helps in reducing manual processes and operational costs. Provides personalised and real-time services through different platforms. And lastly, through P2P lending, alternative credit scoring and digital loan disbursements it has brought innovation in credit and lending.",
    modules: 8,
    audience: "Management graduates, banking professionals, startup founders and team members, and other finance related professionals.",
    slug: "fintech",
    category: "University / MBA Programs",
    duration: "20 hours",
    startDate: "Rolling admissions",
    price: 8999,
    originalPrice: 17999,
    seatsLeft: 12,
    students: 850,
    rating: 4.7,
    features: [
      "Understand the fintech ecosystem and its disruption of traditional finance",
      "Explore digital payment systems like UPI, wallets, and their business models",
      "Gain insight into digital lending models, BNPL, and alternative credit scoring",
      "Learn about WealthTech and InsurTech innovations",
      "Understand blockchain, DeFi, crypto wallets, and regulations in India",
      "Examine RegTech tools, cybersecurity challenges, and compliance frameworks",
      "Explore startup trends, funding models, and innovation in fintech",
      "Identify future trends like embedded finance, neo-banking, and AI/ML in fintech"
    ],
    curriculum: [
      { title: "Introduction to Fintech", description: "" },
      { title: "Digital Payments Ecosystem", description: ""},
      { title: "Lending and Credit Technologies.", description: ""},
      { title: "WealthTech and InsurTech", description: ""},
      { title: "RegTech, Cybersecurity and Compliance", description: ""},
      { title: "Fintech Innovation and Startups", description: ""},
      { title: "Future Trends", description: ""},
      { title: "Group Presentations", description: ""}
    ],
    learningOutcomes: [
      "Analyze digital payment models and evaluate their business viability.",
      "Compare lending technologies and assess credit risk using new data sources",
      "Evaluate WealthTech and InsurTech applications for diverse customer needs",
      "Understand the working of blockchain and regulatory landscape of crypto in India.",
      "Apply knowledge of RegTech and cybersecurity to real-world compliance issues",
      "Assess fintech startup models and pitch innovative ideas.",
      "Predict future fintech trends and their implications for the industry."
    ],
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "business-negotiation": {
    id: "l3",
    name: "Business Negotiation",
    desc: "Business negotiation is a core leadership skill. It helps managing cross-border partnerships, securing deals, and resolving conflicts. Strong negotiation skills determine success of individual deals and strengthen long-terms business relationships alongside enhancing organizational reputation.",
    modules: 10,
    audience: "Management graduates (with 4+ years' experience), mid-level executives, strategic partnerships & international trade professionals, individuals interested in learning the skill. ",
    slug: "business-negotiation",
    category: "Leadership Programs",
    duration: "20 hours",
    startDate: "Rolling admissions",
    price: 12999,
    originalPrice: 21999,
    seatsLeft: 8,
    students: 640,
    rating: 4.8,
    features: [
      "To build foundational and advanced negotiation skills relevant in international and cross-cultural business contexts",
      "To develop strategies for value creation, conflict resolution, and stakeholder alignment",
      "To apply negotiation frameworks to real-life scenarios and global business challenges",
      "To enhance participants' confidence, communication, and adaptability in high-stakes situations"
    ],
    curriculum: [
      { title: "Introduction to Negotiation", description: "Evolution and fundamentals of CRM and its types. Understanding strategic importance of CRM in modern businesses." },
      { title: "International Business Context ", description: ""},
      { title: "Negotiation Planning ", description: ""},
      { title: "Communication and Influence ", description: "" },
      { title: "Cross-Cultural Negotiation ", description: ""},
      { title: "Multi-party and Team Negotiations ", description: ""},
      { title: "Negotiation Simulations ", description: ""},
      { title: "Ethics and Power in Negotiation ", description: ""},
      { title: "Conflict Resolution & Mediation ", description: ""},
      { title: "Negotiation in the Digital World ", description: ""},
    ],
    learningOutcomes: [
      "Apply structured negotiation frameworks across various business situations",
      "Identify and leverage their BATNA and ZOPA effectively",
      "Communicate persuasively while navigating diverse cultural settings",
      "Build long-term trust-based relationships with stakeholders",
      "Resolve conflicts and deadlocks using ethical and practical approaches",
      "Lead team and multi-party negotiations with strategic clarity",
      "Adapt to emerging digital tools and practices in global negotiations"
    ],
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "crm": {
    id: "l3",
    name: "Customer Relation Management",
    desc: "CRM plays a crucial role in aligning customer-centric strategies with business outcomes. Helps in attracting right audience and retain high value customers. Enables informed marketing, sale, and service strategies through customer data centralization. Improves conversion rate, allows ROI tracking and targeting and lastly, facilitates ticketing feedback loops.",
    modules: 9,
    audience: "Management and engineering graduates, sales and marketing professionals, startup founders and product managers, customer service leaders and CX leaders, banking, NBFC, telecom, and retail professionals.",
    slug: "crm",
    category: "Leadership Programs",
    duration: "20 hours",
    startDate: "Rolling admissions",
    price: 12999,
    originalPrice: 21999,
    seatsLeft: 15,
    students: 720,
    rating: 4.6,
    features: [
      "Understand core concepts and types of CRM",
      "Learn the customer lifecycle and key CRM metrics like CLV and churn",
      "Explore major CRM tools and implementation basics",
      "Understand CRM in sales, service, and marketing",
      "Use CRM data, analytics, and AI to improve decisions",
      "Build a CRM strategy aligned with business goals",
      "Apply concepts in a real-world capstone project"
    ],
    curriculum: [
      { title: "Introduction to CRM", description: "Evolution and fundamentals of CRM and its types. Understanding strategic importance of CRM in modern businesses." },
      { title: "Customer Lifecycle Management", description: ""},
      { title: "CRM Technologies & Tools", description: ""},
      { title: "Sales and Service Automation", description: "" },
      { title: "CRM in Marketing and Campaign Management", description: ""},
      { title: "CRM Data & Analytics", description: ""},
      { title: "Customer Experience and Engagement", description: ""},
      { title: "CRM Strategy & Implementation", description: ""},
      { title: "Capstone Project / Presentations", description: ""}
    ],
    learningOutcomes: [
      "Identify and explain different CRM types and their business relevance",
      "Analyze customer lifecycle stages and key performance metrics",
      "Select and evaluate CRM tools based on business needs",
      "Design effective sales and marketing campaigns using CRM",
      "Use data and analytics to improve customer engagement",
      "Develop and present a CRM strategy for a real or simulated business"
    ],
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "strategic-selling": {
    id: "l4",
    name: "Strategic Selling Skills & Sales Management",
    desc: "Sales skill is the ability to sell strategically. It is a vital skill in today's hyper-competitive and rapidly evolving markets. Sales professionals must have the ability to understand customer needs, built trust, handle objections and close deals efficiently. Effective selling drives revenue, builds long-term customer relationships and directly impacts business growth.",
    modules: 10,
    audience: "Management graduates, sales professionals, mid-level professionals, and solution-based professionals.",
    slug: "strategic-selling",
    category: "University / MBA Programs",
    duration: "20 hours",
    startDate: "Rolling admissions",
    price: 12999,
    originalPrice: 21999,
    seatsLeft: 18,
    students: 920,
    rating: 4.9,
    features: [
      "To equip professionals with structured and modern selling techniques",
      "To improve relationship-building and consultative selling capabilities",
      "To adapt sales strategies for sector-specific contexts (BFSI, retail, government, etc.)",
      "To enhance influencing and negotiation skills for complex sales environments",
      "To align sales activities with organizational goals and customer value"
    ],
    curriculum: [
      { title: "Sales in the Modern Business Context", description: ""},
      { title: "The Psychology of Selling", description: ""},
      { title: "Consultative & Solution Selling", description: ""},
      { title: "Sales Planning and Prospecting", description: ""},
      { title: "Effective Communication & Presentation", description: ""},
      { title: "Objection Handling and Negotiation", description: ""},
      { title: "Sales Metrics and Performance Management", description: ""},
      { title: "Sector-Specific Sales Approaches", description: ""},
      { title: "Team Selling and Collaboration", description: ""},
      { title: "Digital Tools & the Future of Sales", description: ""}
    ],
    learningOutcomes: [
      "Demonstrate structured and effective sales conversations across industries",
      "Apply consultative selling principles in real-life sales interactions",
      "Develop a sector-specific sales plan using data and analytics",
      "Improve negotiation outcomes with clients and partners",
      "Utilize digital tools to enhance reach and engagement",
      "Effectively manage key accounts and dealer/channel partners"
    ],
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "business-communication": {
    id: "b1",
    name: "Business Communication",
    desc: "Effective business communication allows clarity, fosters collaboration, builds trust, and ensures alignment across teams, functions, and geographies. It gives organisations/companies competitive edge through better decision-making, stronger relationships, and enhanced reputation.",
    modules: 7,
    audience: "Management graduates and corporate professionals. ",
    slug: "business-communication",
    category: "University / MBA Programs",
    duration: "20 hours",
    startDate: "Rolling admissions",
    price: 7999,
    originalPrice: 15999,
    seatsLeft: 25,
    students: 1180,
    rating: 4.8,
    features: [
      "Master clear, persuasive written and verbal communication",
      "Build strong interpersonal skills and executive presence",
      "Learn to design and deliver impactful presentations",
      "Understand ethics in communication and handle dilemmas",
      "Master the art of active listening",
      "Navigate cross-cultural communication with diplomacy",
      "Apply negotiation strategies using empathy and logic",
      "Lead effective group discussions and manage time well"
    ],
    curriculum: [
      { title: "Written and Verbal Communication Mastery", description: ""},
      { title: "Interpersonal skills and Executive Presence", description: ""},
      { title: "Presentation skills and Storytelling", description: "" },
      { title: "Communication and Ethics and Real-world Dilemmas", description: ""},
      { title: "Cross-cultural communication and Diplomacy", description: ""},
      { title: "Negotiation and Influence", description: ""},
      { title: "Group Discussion and Time management", description: ""}
    ],
    learningOutcomes: [
      "Communicate clearly and confidently in professional settings",
      "Build rapport and read non-verbal cues effectively",
      "Create compelling presentations and handle Q&A sessions",
      "Make ethical communication choices in real-world situations",
      "Adapt tone and style for diverse audiences and cultures",
      "Influence others through strategic negotiation techniques",
      "Collaborate efficiently and lead discussions under time constraints"
    ],
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "career-coaching": {
    id: "c1",
    name: "Career Coaching and Mentoring",
    desc: "This course empowers the learners to take ownership of their careers through structured coaching techniques, actionable goal-setting, and personal branding. With the combination of strategic thinking and practical tools, it helps the individual overcome challenges, make confident decisions, and build meaningful professional networks.",
    modules: 9,
    audience: "Professionals, Job Seekers, Students, Career Changers.",
    slug: "career-coaching",
    category: "Coaching + Mentoring for Students",
    duration: "8 hours for individuals (Customized for groups)",
    startDate: "Rolling admissions",
    price: 10999,
    originalPrice: 18999,
    seatsLeft: 10,
    students: 650,
    rating: 4.7,
    features: [
      "Understand roles of mentoring and coaching in career guidance",
      "Strengthen communication, active listening, and workplace interaction skills",
      "Explore career paths, industry trends, and create personalized development strategies",
      "Set actionable SMART goals and maintain motivation through progress tracking",
      "Enhance critical thinking and decision-making for career planning",
      "Build resilience, manage setbacks, and adapt to career transitions",
      "Develop a strong personal brand and use networking effectively for career growth"
    ],
    curriculum: [
      { title: "Introduction to Career Coaching & Mentoring" , description: "Understanding career coaching vs. mentoring, importance of career guidance, role of a career coach & mentor." },
      { title: " Communication Skills for Career Success", description:"Excelling verbal & non-verbal communication, active listening & empathy. Learning professional email & business communication, public speaking & presentation skills, conflict resolution & workplace communication" },
      { title: "Career Development Strategies", description: "Career exploration & industry trends, building a career roadmap, skills development & continuous learning. Learning work-life balance & career transitions" },
      { title: "Goal Setting for Career Success", description: "Understanding SMART goals, short-term vs. long-term career goals. Creating an action plan and tracking progress & staying motivated." },
      { title: "Decision Making & Problem-Solving", description: "Learning critical thinking in career choices, decision-Making frameworks, overcoming decision paralysis and handling career uncertainty" },
      { title: "Overcoming Challenges in Career Growth", description: "Dealing with career setbacks & failure, managing stress & workplace challenges, building resilience & growth mindset. Adapting to change & career Shifts" },
      { title: "Career Visualisation & Personal Branding", description: "Learning career visualisation, creating a personal vision statement. Building a strong personal brand. Leveraging social media (LinkedIn and Personal Website)." },
      { title: "Defining & Achieving Career Goals", description: "Identifying strengths & interests. Aligning passion with career path. Setting career milestones and seeking opportunities for Growth." },
      { title: "How to Network Effectively", description: "Understanding the importance of networking. Online & offline networking strategies. Building Professional Relationships and utilising mentors & industry contacts" },
    ],
    learningOutcomes: [
      "Communicate effectively in professional settings, including during conflict or stress",
      "Create a career roadmap aligned with personal strengths, passions, and market trends",
      "Apply goal-setting frameworks and monitor career progress confidently",
      "Make informed career decisions and navigate uncertainty with clarity",
      "Build a resilient mindset and adapt to evolving professional environments",
      "Leverage LinkedIn, personal branding, and networking to unlock new opportunities"
    ],
    image: "/images/06341b9c-e889-4384-ad9e-959eb12dd489.png"
  },
  "interview-preparation": {
    id: "u1",
    name: "Interview Preparation Program",
    desc: " This course will help an individual build confidence, equip clarity, and strategy needed to stand out during interviews. Focusing on communication skills, strategy making, self-awareness and real-time feedback it prepares the learner to handle any interview scenario and present their best self, leaving a lasting impression.",
    modules: 13,
    audience: "Job seekers, career changers, students and professionals",
    slug: "interview-preparation",
    category: "Coaching + Mentoring for Students",
    duration: "10 hours for individuals (Customized for groups)",
    startDate: "Rolling admissions",
    price: 7999,
    originalPrice: 15999,
    seatsLeft: 5,
    students: 450,
    rating: 4.9,
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
      { title: "Pre-Interview Preparation & Strategy", description: "Learning what to bring to an interview (checklist & strategies) and researching the about company. Understanding the job description and tailoring responses along with managing interview anxiety." },
      { title: "Structuring Interview Responses & Answering Difficult Questions", description: "Answering any question confidently using structured frameworks. Learning STAR, CAR, PAR frameworks for interview questions. Knowing when to stop talking & signs of a successful interview." },
      { title: "Building a Connection with the Interviewer", description: "How to bond with the interviewer and making first impression. Importance of active listening and body language cues and adapting to different interviewer personalities." },
      { title: "Predicting & Answering Tough Interview Questions", description: "Understanding how interviewers think and what they look for. Analyzing behavioral and situational questions. Strategies for handling aggressive or high-pressure interviews." },
      { title: "Advanced Interview Techniques & Communication Skills", description: "Learning ideal Body language, tone, and voice modulation, the psychology of persuasion in interviews and the Words to use and words to avoid." },
      { title: "Dressing for Success – What to Wear in an Interview", description: "Dress codes for different industries and company cultures. Understanding the impact of appearance on first impressions, grooming, accessories, and professional attire tips." },
      { title: "Strategies for Different Interviewers & Panel Interviews", description: "Adapting interview strategies based on the interviewer's seniority. Understanding one-on-one vs. panel interviews vs. technical interviews. Psychological tactics based on the type of interviewer." },
      { title: "Asking the Right Questions in an Interview", description: "Understanding why asking questions is important. The best questions to ask based on the role and interviewer's position. How to demonstrate enthusiasm and cultural fit through questioning." },
      { title: "Pre- and Post-Interview Strategies", description: "What to do on the morning of the interview. Post-interview follow-up: Thank-you emails and professional etiquette. Analysing your interview performance and learning from feedback." },
      { title: "Handling Job Offers, Rejections & Negotiations", description: "Understanding how to negotiate salary and benefits and when and how to decline a job offer professionally. Dealing with rejection & turning interviews into networking opportunities." },
      { title: "Resume, LinkedIn & Networking for Interview Success", description: "Crafting the perfect resume. Optimizing LinkedIn for job search & recruiter visibility. The power of networking: How to use informational interviews and referrals." },
      { title: "Final Mock Interviews & Course Wrap-Up", description: "Real-world mock interview with feedback from experts. Personalised career plan moving forward. Q&A session, course reflection, and certification." }
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
    image: "/images/06341b9c-e889-4384-ad9e-959eb12dd489.png"
  },
  "social-leadership": {
    id: "l1",
    name: "Social Leadership Workshop",
    desc: "Social leadership is the key to building an inclusive, resilient, and high-performing organizations. Social leaders create influence not by authority, but through trust, empathy, collaboration, and ethical action. Social leadership skills empower leaders to mobilize people, navigate change, and drive sustainable impact. ",
    modules: 12,
    audience: "Mid-to-senior level professionals, corporate leaders, potential leaders, HR and L&D professionals, team leads, project managers and business unit heads.",
    slug: "social-leadership",
    category: "University / MBA Programs",
    duration: "3 Days",
    startDate: "Rolling admissions",
    price: 12999,
    originalPrice: 21999,
    seatsLeft: 20,
    students: 380,
    rating: 4.8,
    features: [
      "Understand the concept and importance of social leadership ",
      "Build trust and credibility as a leader",
      "Enhance emotional intelligence and interpersonal skills",
      "Learn techniques for critical thinking and conflict resolution",
      "Influence without formal authority",
      "Lead high-performing teams and drive innovation",
      "Cultivate ethical leadership and align with organizational vision"
    ],
    curriculum: [
      { title: "Welcome & Introduction: Includes objectives of the workshop, ice-breaker activity, and understanding what is social leadership and why it matters today.", description: "" },
      { title: "Building Trust and Credibility", description: "" },
      { title: "Emotional Intelligence (EI) for Leaders", description: "" },
      { title: "Building & Leading an Effective Team", description: "" },
      { title: "Critical Thinking & Decision Making", description: ""},
      { title: "Influencing without Authority", description: ""},
      { title: "Conflict Management", description: ""},
      { title: "Leading Change and Innovation", description: ""},
      { title: "Ethical Leadership & Driving Culture", description: ""},
      { title: "Final Reflection, Action Planning & Certification", description: ""}
    ],
    learningOutcomes: [
      "Gain actionable tools to improve team engagement and trust",
      "Communicate with greater empathy and confidence",
      "Resolve conflicts constructively and manage change effectively",
      "Influence diverse stakeholders without relying on hierarchy",
      "Lead with integrity and contribute to a positive organizational culture"
    ],
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },

  "entrepreneurship": {
    id: "e1",
    name: "Entrepreneurship",
    desc: "Entrepreneurship is the foundation of innovation and economic growth. Entrepreneurs create value and drive social change, generate employment, and reshape industries. This program aims to empower aspiring entrepreneurs to transform ideas into sustainable ventures and understand startup ecosystems along with navigating challenges and scaling business.",
    modules: 12,
    audience: "Management graduates, professionals with potential business plans, entrepreneurship interested individuals and future founders looking for training.",
    slug: "entrepreneurship",
    category: "University / MBA Programs",
    duration: "20 hours",
    startDate: "Rolling admissions",
    price: 8999,
    originalPrice: 17999,
    seatsLeft: 14,
    students: 560,
    rating: 4.6,
    features: [
      "To foster an entrepreneurial mindset and attitude among professionals",
      "To help participants identify viable business opportunities",
      "To teach practical frameworks for building, launching, and scaling startups",
      "To provide tools for managing startup finance, valuation, and funding",
      "To build resilience in facing and overcoming entrepreneurial challenges"
    ],
    curriculum: [
      { title: "Introduction to Entrepreneurship ", description: ""},
      { title: "Developing an Entrepreneurial Mindset", description: ""},
      { title: "Idea Generation and Validation", description: "" },
      { title: "Business Models and Value Proposition", description: ""},
      { title: "Market Research and Competitive Landscape", description: ""},
      { title: "Go-to-Market Strategy", description: ""},
      { title: "Revenue Models and Cost Structures", description: ""},
      { title: "Financial Planning and Forecasting", description: ""},
      { title: "Startup Legal & Compliance", description: ""},
      { title: "Team Building and Strategic Partnerships", description: ""},
      { title: "Startup Valuation & Fundraising", description: ""},
      { title: "Challenges and Risk Mitigation", description: ""}
    ],
    learningOutcomes: [
      "Demonstrate entrepreneurial thinking and opportunity recognition",
      "Design and validate a business model and go-to-market plan",
      "Build a financial plan with realistic cost structures and revenue streams",
      "Understand startup legal, compliance, and funding processes",
      "Develop and deliver a compelling investor pitch",
      "Manage startup uncertainties with resilience and adaptability"
    ],
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
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

  // Initialize counters only after program data is loaded
  const { count: studentsCount, elementRef: studentsRef } = useCountUp({ 
    end: program?.students || 0, 
    duration: 2500,
    startOnView: true
  });
  const { count: modulesCount, elementRef: modulesRef } = useCountUp({ 
    end: program?.modules || 0, 
    duration: 1500,
    startOnView: true
  });
  const { count: seatsCount, elementRef: seatsRef } = useCountUp({ 
    end: program?.seatsLeft || 0, 
    duration: 1000,
    startOnView: true
  });

  const handleEnroll = () => {
    // Redirect to Google Form or Razorpay link
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd5dVh5qJPVqYOQvlw5nB4nNx02mxbcXyWGJzRANDBCZNX-lA/viewform?usp=header";
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
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Program Not Found</h1>
          <p className="mb-6">We couldn't find the program you're looking for.</p>
          <Link to="/courses">
            <Button variant="outline" className="w-full sm:w-auto">
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
      
      <main className="pt-16 md:pt-24">
        {/* Hero Section - Mobile First */}
        <section className="relative py-8 md:py-16 bg-gradient-to-br from-primary/10 to-yellow/5 overflow-hidden">
          {/* Animated background elements - smaller on mobile */}
          <div className="absolute inset-0">
            <div className="absolute top-5 right-10 md:top-10 md:right-20 w-16 h-16 md:w-32 md:h-32 bg-yellow/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-5 left-10 md:bottom-10 md:left-20 w-20 h-20 md:w-40 md:h-40 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container relative z-10 px-4">
            <Link to="/courses" className="inline-flex items-center text-primary hover:text-primary/80 mb-4 md:mb-6 transition-colors group touch-manipulation">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm md:text-base">Back to All Programs</span>
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                {/* Mobile-optimized badges */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                  <Badge variant="flashy" className="text-xs md:text-sm px-2 py-1">
                    <Sparkles className="mr-1 h-3 w-3 animate-spin" />
                    🔥 Most Popular
                  </Badge>
                  <Badge variant="urgent" className="text-xs md:text-sm px-2 py-1">
                    <Zap className="mr-1 h-3 w-3 animate-bounce" />
                    Limited Time!
                  </Badge>
                  <Badge variant="premium" className="text-xs md:text-sm">
                    {program.category}
                  </Badge>
                  {/* Mobile-optimized seats badge */}
                  <div ref={seatsRef} className="relative">
                    <Badge variant="urgent" className="text-xs md:text-sm animate-pulse px-2 py-1">
                      <Timer className="mr-1 h-3 w-3 animate-pulse" />
                      🚨 <span className="font-black text-sm md:text-lg mx-1">{seatsCount}</span> Seats Left!
                    </Badge>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                  <span className="text-gradient-blue-yellow">{program.name}</span>
                </h1>
                
                <p className="text-base md:text-xl text-foreground/80 mb-6 md:mb-8 leading-relaxed">
                  {program.desc}
                </p>
                
                {/* Mobile-optimized pricing section */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-orange-200 dark:border-orange-800 mb-6 md:mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 opacity-50 animate-pulse"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
                      <Badge variant="urgent" className="text-sm md:text-lg px-3 md:px-6 py-2 md:py-3 animate-bounce relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full blur opacity-40 animate-pulse"></div>
                        <span className="relative text-xs md:text-base">🎯 MEGA SALE!</span>
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-3 md:gap-6">
                      <div className="relative">
                        <span className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent animate-pulse">
                          ₹{program.price.toLocaleString()}
                        </span>
                        <div className="absolute -top-2 -right-8 md:-top-3 md:-right-10">
                          <Badge variant="success" className="text-xs md:text-sm animate-bounce">
                            ⚡ BEST PRICE!
                          </Badge>
                        </div>
                      </div>
                      
                      {program.originalPrice && (
                        <div className="flex flex-col">
                          <span className="text-2xl md:text-3xl lg:text-4xl line-through text-red-600 font-bold opacity-80 relative">
                            ₹{program.originalPrice.toLocaleString()}
                            <div className="absolute inset-0 bg-red-500 h-1 top-1/2 transform -translate-y-1/2 rotate-12"></div>
                          </span>
                          <Badge variant="urgent" className="mt-2 text-xs md:text-sm animate-pulse">
                            💥 Save ₹{(program.originalPrice - program.price).toLocaleString()}!
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
                      <Badge variant="success" className="text-xs md:text-sm animate-pulse">
                        🏆 50% OFF Today!
                      </Badge>
                      <Badge variant="flashy" className="text-xs md:text-sm">
                        <Sparkles className="mr-1 h-3 w-3 animate-spin" />
                        Premium Course
                      </Badge>
                    </div>
                    
                    <div className="mt-3 md:mt-4 text-sm md:text-lg text-orange-700 dark:text-orange-300 font-bold animate-pulse">
                      🔥 Limited time offer - secure your spot now!
                    </div>
                  </div>
                </div>
                
                {/* Mobile-optimized stats grid */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="flex flex-col bg-background/60 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-sm text-center" ref={modulesRef}>
                    <div className="flex items-center justify-center text-primary mb-1 md:mb-2">
                      <GraduationCap className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                      <span className="font-medium text-xs md:text-sm">Modules</span>
                    </div>
                    <span className="text-xl md:text-2xl font-semibold text-yellow-600 animate-pulse">{modulesCount || program.modules}</span>
                  </div>

                  <div className="flex flex-col bg-background/60 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-sm text-center">
                    <div className="flex items-center justify-center text-primary mb-1 md:mb-2">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                      <span className="font-medium text-xs md:text-sm">Duration</span>
                    </div>
                    <span className="text-lg md:text-2xl font-semibold text-yellow-600 animate-pulse">{program.duration}</span>
                  </div>
                  
                  <div className="flex flex-col bg-background/60 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-sm text-center" ref={studentsRef}>
                    <div className="flex items-center justify-center text-[#D97706] mb-1 md:mb-2">
                      <Users className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                      <span className="font-medium text-xs md:text-sm">Students</span>
                    </div>
                    <span className="text-lg md:text-xl font-semibold text-yellow-600 animate-pulse">{studentsCount || program.students}+</span>
                  </div>
                </div>
                
                {/* Mobile-optimized rating and badge */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm mb-6 md:mb-8">
                  {program.rating && (
                    <div className="flex items-center">
                      <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-1" />
                      <span className="font-semibold">{program.rating}</span>
                      <span className="text-muted-foreground ml-1">({program.students} students)</span>
                    </div>
                  )}
                  <Badge variant="success" className="text-xs md:text-sm">All Levels</Badge>
                </div>
                
                {/* Mobile-optimized CTA button */}
                <div className="flex gap-4 mb-6">
                  <Button 
                    onClick={handleEnroll} 
                    size="lg" 
                    className="w-full sm:w-auto relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-4 md:py-4 touch-manipulation"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded blur opacity-30 animate-pulse"></div>
                    <span className="relative">🚀 ENROLL NOW</span>
                  </Button>
                </div>
                
                {/* Mobile-optimized urgency section */}
                <div className="bg-red-50 dark:bg-red-900/20 p-4 md:p-6 rounded-xl border border-red-200 dark:border-red-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-orange-100 opacity-60 animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-red-700 dark:text-red-300 mb-2">
                      <Timer className="h-5 w-5 md:h-6 md:w-6 animate-pulse" />
                      <span className="font-bold text-base md:text-lg">⚡ ENROLLMENT CLOSING SOON!</span>
                    </div>
                    <div className="text-red-600 dark:text-red-400 font-semibold text-sm md:text-base">
                      Join thousands who've transformed their careers!
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile-optimized image section */}
              <div className="relative order-1 lg:order-2">
                {program.image ? (
                  <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl animate-float">
                    <img 
                      src={program.image} 
                      alt={program.name} 
                      className="w-full h-auto max-h-64 md:max-h-none object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-primary/20 to-yellow/20 h-48 md:h-80 rounded-xl md:rounded-2xl flex items-center justify-center text-primary/50">
                    Program Image
                  </div>
                )}
                
                <div className="absolute -right-3 -bottom-3 md:-right-6 md:-bottom-6 -z-10 w-full h-full rounded-xl md:rounded-2xl bg-primary/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-optimized stats section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                <div className="space-y-2" ref={modulesRef}>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-600 animate-pulse">{modulesCount || program.modules}</div>
                  <div className="text-muted-foreground text-sm md:text-base">Modules</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-4xl font-bold text-yellow-600 animate-pulse">{program.duration}</div>
                  <div className="text-muted-foreground text-sm md:text-base">Duration</div>
                </div>
                <div className="space-y-2" ref={studentsRef}>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-600 animate-pulse">{studentsCount || program.students}+</div>
                  <div className="text-muted-foreground text-sm md:text-base">Students</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Award className="h-8 w-8 md:h-10 md:w-10 text-yellow-600 animate-pulse" />
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base">Certificate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-optimized features section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">
                <span className="text-gradient-blue-yellow">Program Highlights</span>
              </h2>
              
              <div className="grid gap-3 md:gap-4 mb-6 md:mb-8">
                {program.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-3 md:p-4 rounded-lg bg-primary/5 border border-primary/10"
                  >
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-lg leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-yellow/10 rounded-xl border border-yellow/20">
                <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-[#D97706] mr-2" />
                  Target Audience
                </h3>
                <p className="text-sm md:text-lg leading-relaxed">{program.audience}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mobile-optimized curriculum section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-background to-primary/5">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">
              <span className="text-gradient-blue-yellow">Program Curriculum</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Mobile-optimized timeline */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-yellow to-primary/50 opacity-30 hidden md:block"></div>
                
                <div className="space-y-4 md:space-y-8">
                  {program.curriculum.map((module, idx) => (
                    <Card key={idx} className="relative z-10">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex">
                          {/* Desktop connection dot */}
                          <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 hidden md:block">
                            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border-2 border-primary/30 shadow-md">
                              <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                            </div>
                          </div>
                          
                          <div className="md:pl-8 w-full">
                            <div className="flex items-start gap-3 mb-2">
                              {/* Mobile module number */}
                              <div className="md:hidden flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                                {idx + 1}
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-semibold mb-2">
                                  <span className="hidden md:inline">Module {idx + 1}: </span>
                                  {module.title}
                                </h3>
                                {module.description && (
                                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{module.description}</p>
                                )}
                              </div>
                            </div>
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

        {/* Mobile-optimized learning outcomes */}
        {program.learningOutcomes && (
          <section className="py-12 md:py-16 bg-white">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">
                  <span className="text-gradient-blue-yellow">Learning Outcomes</span>
                </h2>
                
                <div className="grid gap-3 md:gap-4">
                  {program.learningOutcomes.map((outcome, index) => (
                    <div 
                      key={index} 
                      className="flex items-start p-3 md:p-4 rounded-lg bg-yellow/5 border border-yellow/10"
                    >
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#D97706] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-lg leading-relaxed">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Mobile-optimized CTA section */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow/20 to-primary/20 opacity-50"></div>
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-yellow/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          
          <div className="container relative z-10 px-4">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-xl md:rounded-2xl shadow-xl border border-white/20 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gradient-blue-yellow">
                Ready to Transform Your Skills?
              </h2>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-foreground/90">
                Join our {program.name} program and take the next step in your professional journey.
              </p>
              
              <div className="flex flex-col gap-4 justify-center items-center mb-4 md:mb-6">
                <div className="text-center w-full">
                  {program.originalPrice && (
                    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-4 md:mb-6 justify-center">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl md:text-3xl line-through text-red-500 font-bold opacity-80 relative">
                          ₹{program.originalPrice.toLocaleString()}
                          <div className="absolute inset-0 bg-red-500 h-1 top-1/2 transform -translate-y-1/2 rotate-12"></div>
                        </span>
                        <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-pulse">
                          ₹{program.price.toLocaleString()}
                        </span>
                      </div>
                      <Badge variant="urgent" className="bg-red-600 hover:bg-red-700 text-sm md:text-lg px-3 md:px-4 py-2 animate-bounce">
                        <Zap className="mr-1 h-3 w-3 md:h-4 md:w-4 animate-bounce" />
                        Save ₹{(program.originalPrice - program.price).toLocaleString()}!
                      </Badge>
                    </div>
                  )}
                  <Button 
                    onClick={handleEnroll} 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-full px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold shadow-lg shadow-yellow/20 transform hover:scale-105 active:scale-95 transition-all duration-300 relative touch-manipulation"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-30 animate-pulse"></div>
                    <span className="relative">🎯 ENROLL NOW</span>
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                  <p className="mt-3 md:mt-4 text-xs md:text-sm text-foreground/70">
                    30-day money-back guarantee
                  </p>
                </div>
              </div>
              
              <p className="mt-3 md:mt-4 text-xs md:text-sm text-foreground/70">
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
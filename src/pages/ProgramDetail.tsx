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
  category: string
  price: number;
  features: string[];
  curriculum: { title: string; description: string }[];
  image?: string;
}

// Sample program data (would typically come from a database)
const programsData: Record<string, ProgramData> = {
  "fintech": {
    id: "u2",
    name: "Fintech",
    desc: "Understanding financial technology, lending & credit technologies, Blockchain & Cryptofinance, Cybersecurity and RegTech.",
    modules: 9,
    audience: "MBA students, professionals from corporate background",
    slug: "fintech",
    category: "University / MBA Programs",
    price: 24999,
    features: [
      "Comprehensive understanding of financial technology landscape",
      "Hands-on experience with blockchain and crypto technologies",
      "Deep dive into lending and credit technologies",
      "Cybersecurity protocols in financial services",
      "Regulatory technology (RegTech) implementations",
      "Real-world case studies from leading fintech companies"
    ],
    curriculum: [
      { title: "Introduction to Fintech", description: "Overview of the financial technology ecosystem and its impact on traditional banking." },
      { title: "Digital Payments Ecosystem", description: "Understanding UPI, IMPS, wallets, QR codes and digital payment business models." },
      { title: "Lending and Credit Technologies.", description: "Understanding P2P lending, BNPL, and digital lending. Deeper insights into credit scoring using alternative data." },
      { title: "WealthTech and InsurTech", description: "Understanding robo-advisory, goal-based investing, micro-investment, and digital insurance." },
      { title: "Blockchain and Cryptofinance", description: "Learning blockchain basics, smart contracts, and DeFi. Understanding crypto exchanges, wallets, and regulation of digital assets in India." },
      { title: "RegTech, Cybersecurity and Compliance", description: "Understanding KYC/AML automation. Cyber threats in fintech. Regulatory sandboxes and compliance tech." },
      { title: "Fintech Innovation and Startups", description: "Understanding startup ecosystem and funding trends, business model canvas, incubators, accelerators, and VC interest." },
      { title: "Future Trends", description: "Embedded finance, neo banking and open banking. Understanding AI/ML application in Fintech. ESG and sustainability in Fintech." },
      { title: "Group Presentations", description: "Pitching a fintech idea or analysing a real-word case. Final evaluation and feedbacks." }
    ],
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "crm": {
    id: "u3",
    name: "Customer Relation Management",
    desc: "Focuses on sales and service automation, customer lifecycle management, campaign management and CRM in marketing.",
    modules: 9,
    audience: "MBA students and professionals from sales & marketing, customer service, banking, startup founders",
    slug: "crm",
    category: "University / MBA Programs",
    price: 19999,
    features: [
      "Comprehensive CRM strategy development",
      "Sales and service automation techniques",
      "Customer lifecycle management frameworks",
      "Effective campaign management strategies",
      "Integration of CRM with marketing operations",
      "Real-world implementation case studies"
    ],
    curriculum: [
      { title: "Introduction to CRM", description: "Evolution and fundamentals of CRM and its types. Understanding strategic importance of CRM in modern businesses." },
      { title: "Customer Lifecycle Management ", description: "Learning customer acquisition, engagement, retention, and loyalty. Insights into CLV (Customer Lifetime Value), churn analysis, CRM metrics and KPIs." },
      { title: "CRM Technologies & Tools", description: "Overview of leading CRM platforms. Features comparison and selection criteria. Understanding CRM implementation challenges and success factors." },
      { title: "Sales and Service Automation", description: "Lead management, sales pipeline, and forecasting. Learning customer service automation and ticketing systems. CRM mobile apps and field force management." },
      { title: "CRM in Marketing and Campaign Management", description: "Email marketing, lead nurturing, and retargeting. Customer segmentation and targeting. Real-life case studies." },
      { title: "CRM Data & Analytics", description: "Role of big data and predictive analytics in CRM. Dashboards and reporting. AI/ML in CRM." },
      { title: "Customer Experience and Engagement", description: "Voice of customer (VoC) programs and NPS. Omni channel experience and journey mapping. Understanding behavioural and emotional aspects of CRM" },
      { title: "CRM Strategy & Implementation", description: "Building a CRM strategy aligned with business goals. Change management and user adoption and measuring CRM ROI." },
      { title: "Capstone Project / Presentations", description: "Working on CRM case studies or designing CRM strategies for a business along with Final evaluation." }
    ],
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "strategic-selling": {
    id: "u5",
    name: "Strategic Selling Skills & Sales Management Program",
    desc: "Equip professionals with structured and modern sales techniques and to improve customer relationship management and consultative selling capabilities.",
    modules: 10,
    audience: "MBA executives (with 4+ years' experience), sales professionals, mid-level professional, and solution-based consultants",
    slug: "strategic-selling",
    category: "University / MBA Programs",
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
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "business-negotiation": {
    id: "u4",
    name: "Business Negotiation Skills",
    desc: "Build foundational and advanced negotiation skills, while also developing strategies for value creation, conflict resolution and stakeholder alignment.",
    modules: 10,
    audience: "MBA students with 4+ years of experience, Mid-level executives transitioning to leadership, international trade, and strategic partnership professionals",
    slug: "business-negotiation",
    category: "University / MBA Programs",
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
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "technical-interview": {
    id: "p1",
    name: "Technical Interview Preparation",
    desc: "Master technical interviews for software engineering roles with comprehensive preparation on algorithms, data structures, and system design.",
    modules: 8,
    audience: "Software engineers, computer science graduates, tech professionals",
    slug: "technical-interview",
    category: "Professional Development",
    price: 14999,
    features: [
      "In-depth coverage of algorithms and data structures",
      "System design and architecture principles",
      "Mock technical interviews with feedback",
      "Problem-solving techniques and patterns",
      "Time and space complexity optimization",
      "Language-specific coding best practices"
    ],
    curriculum: [
      { title: "Interview Fundamentals", description: "Understanding technical interview formats and expectations." },
      { title: "Data Structures", description: "Arrays, linked lists, trees, graphs, hash tables, and their implementations." },
      { title: "Algorithm Strategies", description: "Sorting, searching, recursion, and dynamic programming." },
      { title: "Problem Solving", description: "Breaking down complex problems and developing optimal solutions." },
      { title: "System Design Basics", description: "Principles of designing scalable distributed systems." },
      { title: "Database Design", description: "Relational and NoSQL database design considerations." },
      { title: "Mock Interviews", description: "Realistic interview simulations with industry professionals." },
      { title: "Final Preparation", description: "Review, optimization, and interview strategy development." }
    ],
    image: "/images/b88ae8ac-0388-4789-a31d-77d5248a39bb.png"
  },
  "behavioral-interview": {
    id: "p2",
    name: "Behavioral Interview Mastery",
    desc: "Learn how to effectively communicate your experience, skills, and cultural fit through structured behavioral interviewing techniques.",
    modules: 6,
    audience: "Job seekers across industries, career changers, leadership candidates",
    slug: "behavioral-interview",
    category: "Professional Development",
    price: 12999,
    features: [
      "STAR method mastery for answering behavioral questions",
      "Personal branding and storytelling techniques",
      "Leadership and teamwork scenario preparation",
      "Conflict resolution and problem-solving frameworks",
      "Cultural fit demonstration strategies",
      "Video interview preparation and feedback"
    ],
    curriculum: [
      { title: "Behavioral Interview Fundamentals", description: "Understanding the psychology and purpose behind behavioral questions." },
      { title: "STAR Method", description: "Situation, Task, Action, Result framework for structured responses." },
      { title: "Personal Branding", description: "Crafting your professional narrative and communicating your unique value." },
      { title: "Leadership & Teamwork", description: "Demonstrating collaborative skills and leadership potential." },
      { title: "Problem Solving & Resilience", description: "Showcasing your approach to challenges and setbacks." },
      { title: "Final Preparation", description: "Mock interviews, feedback, and personalized improvement strategies." }
    ],
    image: "/images/f0e019fb-c25f-4348-abaf-73f954784463.png"
  },
  "resume-optimization": {
    id: "p3",
    name: "Resume Optimization",
    desc: "Transform your resume into a powerful marketing tool that highlights your achievements and gets past Applicant Tracking Systems.",
    modules: 4,
    audience: "Job seekers, career changers, professionals seeking advancement",
    slug: "resume-optimization",
    category: "Professional Development",
    price: 9999,
    features: [
      "ATS optimization techniques",
      "Industry-specific keyword analysis",
      "Achievement-focused content development",
      "Professional formatting and design",
      "LinkedIn profile alignment",
      "Personalized resume reviews and feedback"
    ],
    curriculum: [
      { title: "Resume Fundamentals", description: "Modern resume structure, formats, and best practices." },
      { title: "ATS Optimization", description: "Keyword optimization and formatting for applicant tracking systems." },
      { title: "Achievement Highlighting", description: "Transforming responsibilities into measurable achievements." },
      { title: "Final Optimization", description: "Personalized review, feedback, and final polishing." }
    ],
    image: "/images/4dc0248d-9274-4883-97c4-872cb9c743d3.png"
  },
  "business-communication": {
    id: "u1",
    name: "Business Communication",
    desc: "Sharpening communication capabilities across written, verbal, interpersonal, ethical, and cross-cultural dimensions.",
    modules: 7,
    audience: "Professionals from Academia and Corporate background",
    slug: "business-communication",
    category: "University / MBA Programs",
    price: 17999,
    features: [
      "Effective written communication strategies",
      "Advanced presentation and verbal communication techniques",
      "Cross-cultural communication frameworks",
      "Business etiquette and professional image development",
      "Strategic negotiation communication",
      "Communication Ethics and Real-World Dilemmas"
    ],
    curriculum: [
      { title: "Written and Verbal Communication Mastery", description: "Enhance clarity and impact in business writing and practice persuasive and purposeful verbal messaging." },
      { title: "Interpersonal skills and Executive Presence", description: "Building trust and rapport with stakeholders and decoding non-verbal cues along with active listening cues." },
      { title: "Presentation skills and Storytelling", description: "Designing visually strong presentation with impactful narrative flow, along with confidence delivery of content and handling QnA sessions." },
      { title: "Communication and Ethics and Real-world Dilemmas", description: "Understanding ethical implications of communication and frameworks to navigate gray zones." },
      { title: "Cross-cultural communication and Diplomacy", description: "Appreciating diverse communication styles and applying diplomacy in language and tone." },
      { title: "Negotiation and Influence", description: "Applying negotiation techniques and usage of empathy and logic to influence outcomes." },
      { title: "Group Discussion and Time management", description: "Leading structured discussions and navigating communication in a time-bound setting. Collaboration and conflict resolution." }
    ],
    image: "/images/d0a96913-1092-4852-a457-0a92c9c7f577.png"
  },
  "career-coaching": {
    id: "c1",
    name: "Career Coaching & Mentoring",
    desc: "Detailed understanding of career development strategies, decision-making & problem-solving, goal setting, and personal branding.",
    modules: 9,
    audience: "Students, job seekers, career changers and professionals",
    slug: "career-coaching",
    category: "Coaching + Mentoring for Students",
    price: 19999,
    features: [
      "Personalized career path development",
      "Professional goal setting and achievement strategies",
      "Decision-making frameworks for career advancement",
      "Personal branding and professional image development",
      "Networking and relationship building techniques",
      "Work-life balance optimization"
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
    image: "/images/06341b9c-e889-4384-ad9e-959eb12dd489.png"
  },
  "interview-preparation": {
    id: "c2",
    name: "Interview Preparation Program",
    desc: "Guidance on acing job interviews through SWOT analysis, answer structuring, rapport forming, and managing interview anxiety.",
    modules: 13,
    audience: "Job seekers, career changers, students and professionals",
    slug: "interview-preparation",
    category: "Coaching + Mentoring for Students",
    price: 17999,
    features: [
      "Comprehensive interview preparation strategies",
      "Personal SWOT analysis techniques",
      "Structured answer frameworks for common questions",
      "Rapport building and first impression optimization",
      "Anxiety management and confidence boosting methods",
      "Mock interview practice with personalized feedback"
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
      { title: "Strategies for Different Interviewers & Panel Interviews", description: "Adapting interview strategies based on the interviewer’s seniority. Understanding one-on-one vs. panel interviews vs. technical interviews. Psychological tactics based on the type of interviewer." },
      { title: "Asking the Right Questions in an Interview", description: "Understanding why asking questions is important. The best questions to ask based on the role and interviewer’s position. How to demonstrate enthusiasm and cultural fit through questioning." },
      { title: "Pre- and Post-Interview Strategies", description: "What to do on the morning of the interview. Post-interview follow-up: Thank-you emails and professional etiquette. Analysing your interview performance and learning from feedback." },
      { title: "Handling Job Offers, Rejections & Negotiations", description: "Understanding how to negotiate salary and benefits and when and how to decline a job offer professionally. Dealing with rejection & turning interviews into networking opportunities." },
      { title: "Resume, LinkedIn & Networking for Interview Success", description: "Crafting the perfect resume. Optimizing LinkedIn for job search & recruiter visibility. The power of networking: How to use informational interviews and referrals." },
      { title: "Final Mock Interviews & Course Wrap-Up", description: "Real-world mock interview with feedback from experts. Personalised career plan moving forward. Q&A session, course reflection, and certification." }
    ],
    image: "/images/06341b9c-e889-4384-ad9e-959eb12dd489.png"
  },
  "leadership-development": {
    id: "ct1",
    name: "Leadership Development",
    desc: "Executive coaching for senior management to enhance leadership capabilities.",
    modules: 10,
    audience: "Mid to senior-level managers and executives",
    slug: "leadership-development",
    category: "Corporate Training",
    price: 34999,
    features: [
      "Strategic leadership vision development",
      "Executive presence and influential communication",
      "Team building and organizational culture shaping",
      "Change management and transformation leadership",
      "Decision-making frameworks for complex scenarios",
      "Personal leadership style optimization"
    ],
    curriculum: [
      { title: "Leadership Foundations", description: "Core principles, styles, and the evolution of leadership theory." },
      { title: "Strategic Vision", description: "Developing and articulating compelling organizational direction." },
      { title: "Executive Presence", description: "Authority projection, credibility building, and impression management." },
      { title: "Influential Communication", description: "Persuasive messaging, stakeholder engagement, and storytelling." },
      { title: "Team Development", description: "Building high-performance teams and managing diverse talents." },
      { title: "Organizational Culture", description: "Culture assessment, design, and transformation strategies." },
      { title: "Change Leadership", description: "Leading through uncertainty, resistance management, and agile adaptation." },
      { title: "Executive Decision-Making", description: "Analytical frameworks, ethical considerations, and decisive action." },
      { title: "Emotional Intelligence", description: "Self-awareness, relationship management, and empathetic leadership." },
      { title: "Sustainable Leadership", description: "Work-life integration, burnout prevention, and legacy planning." }
    ],
    image: "/images/6c75556a-1a5a-4cbc-95db-eb24dc7b6bcb.png"
  },
  "team-communication": {
    id: "ct2",
    name: "Team Communication",
    desc: "Workshops focused on improving cross-functional team communication and collaboration.",
    modules: 8,
    audience: "Teams and departments within corporate organizations",
    slug: "team-communication",
    category: "Corporate Training",
    price: 24999,
    features: [
      "Cross-functional collaboration frameworks",
      "Conflict resolution and mediation techniques",
      "Meeting efficiency and productivity optimization",
      "Clear messaging and information sharing protocols",
      "Virtual team communication strategies",
      "Feedback culture development"
    ],
    curriculum: [
      { title: "Communication Fundamentals", description: "Messaging clarity, channels, and communication styles." },
      { title: "Cross-Functional Dynamics", description: "Understanding departmental perspectives and collaborative interfaces." },
      { title: "Effective Meetings", description: "Structuring, facilitating, and maximizing meeting productivity." },
      { title: "Conflict Resolution", description: "Constructive disagreement, mediation techniques, and solution focus." },
      { title: "Virtual Communication", description: "Remote collaboration tools, digital etiquette, and engagement strategies." },
      { title: "Feedback Systems", description: "Constructive feedback frameworks, receptivity, and implementation." },
      { title: "Information Flow", description: "Knowledge sharing, transparency protocols, and communication architecture." },
      { title: "Team Alignment", description: "Vision sharing, goal congruence, and collaborative planning." }
    ],
    image: "/images/6c75556a-1a5a-4cbc-95db-eb24dc7b6bcb.png"
  },
  "strategic-hiring": {
    id: "ct3",
    name: "Strategic Hiring & Talent Management",
    desc: "Training for HR professionals on identifying and nurturing top talent.",
    modules: 11,
    audience: "HR professionals and hiring managers",
    slug: "strategic-hiring",
    category: "Corporate Training",
    price: 29999,
    features: [
      "Talent acquisition strategy development",
      "Competency-based interviewing techniques",
      "Candidate assessment and selection frameworks",
      "Onboarding program optimization",
      "Performance management systems",
      "Succession planning and talent pipeline building"
    ],
    curriculum: [
      { title: "Talent Strategy", description: "Aligning hiring practices with organizational objectives and culture." },
      { title: "Sourcing Innovation", description: "Creative candidate attraction and diverse talent pool development." },
      { title: "Competency Frameworks", description: "Identifying, defining, and assessing critical job competencies." },
      { title: "Interview Excellence", description: "Structured interviewing, bias reduction, and candidate evaluation." },
      { title: "Assessment Methods", description: "Testing protocols, work samples, and predictive hiring tools." },
      { title: "Selection Science", description: "Data-driven decision making and predictive success metrics." },
      { title: "Onboarding Design", description: "Integration systems, knowledge transfer, and early engagement." },
      { title: "Performance Management", description: "Goal setting, feedback cycles, and development planning." },
      { title: "Retention Strategies", description: "Engagement drivers, stay interviews, and turnover prevention." },
      { title: "Succession Planning", description: "Talent review, critical role analysis, and pipeline development." },
      { title: "Talent Analytics", description: "Hiring metrics, dashboard development, and data-driven improvements." }
    ],
    image: "/images/6c75556a-1a5a-4cbc-95db-eb24dc7b6bcb.png"
  },
  "executive-leadership": {
    id: "l1",
    name: "Executive Leadership Development",
    desc: "Comprehensive leadership training for senior executives and C-suite professionals.",
    modules: 12,
    audience: "Senior executives, C-suite professionals, and aspiring leaders",
    slug: "executive-leadership",
    category: "Leadership Development Programs",
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
    image: "/images/6c75556a-1a5a-4cbc-95db-eb24dc7b6bcb.png"
  },
  "team-leadership": {
    id: "l2",
    name: "Team Leadership & Management",
    desc: "Essential skills for managing teams, driving performance, and fostering collaboration.",
    modules: 8,
    audience: "Team leaders, department heads, and emerging managers",
    slug: "team-leadership",
    category: "Leadership Development Programs",
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
    image: "/images/6c75556a-1a5a-4cbc-95db-eb24dc7b6bcb.png"
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
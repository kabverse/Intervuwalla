import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Calendar, Users, CheckCircle, ArrowLeft, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { link } from 'fs';

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
  "fintech": {
    id: "u2",
    name: "Fintech",
    desc: "UFintech stands for Financial Technology; it is a transformational feature in the financial sector. It is helping in bringing financial inclusion through mobile apps and digital wallets. Through automation, AI, and blockchain, it helps in reducing manual processes and operational costs. Provides personalised and real-time services through different platforms. And lastly, through P2P lending, alternative credit scoring and digital loan disbursements it has brought innovation in credit and lending.",
    modules: 8,
    audience: "Management graduates, banking professionals, startup founders and team members, and other finance related professionals.",
    slug: "fintech",
    category: "University / MBA Programs",
    duration: "20 hours",
    startDate: "Rolling admissions",
    price: 24999,
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
  "crm": {
    id: "u3",
    name: "Customer Relation Management",
    desc: "CRM plays a crucial role in aligning customer-centric strategies with business outcomes. Helps in attracting right audience and retain high value customers. Enables informed marketing, sale, and service strategies through customer data centralization. Improves conversion rate, allows ROI tracking and targeting and lastly, facilitates ticketing feedback loops.",
    modules: 9,
    audience: "Management and engineering graduates, sales and marketing professionals, startup founders and product managers, customer service leaders and CX leaders, banking, NBFC, telecom, and retail professionals.",
    slug: "crm",
    category: "University / MBA Programs",
    duration: "20 hours",
    startDate: "Rolling admissions",
    price: 19999,
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
    id: "u5",
    name: "Strategic Selling Skills & Sales Management",
    desc: "Sales skill is the ability to sell strategically. It is a vital skill in today’s hyper-competitive and rapidly evolving markets. Sales professionals must have the ability to understand customer needs, built trust, handle objections and close deals efficiently. Effective selling drives revenue, builds long-term customer relationships and directly impacts business growth.",
    modules: 10,
    audience: "Management graduates, sales professionals, mid-level professionals, and solution-based professionals.",
    slug: "strategic-selling",
    category: "University / MBA Programs",
    duration: "20 hours",
    startDate: "Rolling admissions",
    price: 24999,
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
  "business-negotiation": {
    id: "u4",
    name: "Business Negotiation Skills",
    desc: "Business negotiation is a core leadership skill. It helps managing cross-border partnerships, securing deals, and resolving conflicts. Strong negotiation skills determine success of individual deals and strengthen long-terms business relationships alongside enhancing organizational reputation.",
    modules: 10,
    audience: "Management graduates (with 4+ years’ experience), mid-level executives, strategic partnerships & international trade professionals, individuals interested in learning the skill.",
    slug: "business-negotiation",
    category: "University / MBA Programs",
    duration: "20 hours",
    startDate: "Rolling admissions",
    price: 22999,
    features: [
      "To build foundational and advanced negotiation skills relevant in international and cross-cultural business contexts",
      "To develop strategies for value creation, conflict resolution, and stakeholder alignment",
      "To apply negotiation frameworks to real-life scenarios and global business challenges",
      "To enhance participants’ confidence, communication, and adaptability in high-stakes situations"
    ],
    curriculum: [
      { title: "Introduction to Negotiation", description: ""},
      { title: "International Business Context", description: ""},
      { title: "Negotiation Planning", description: ""},
      { title: "Communication and Influence", description: ""},
      { title: "Cross-Cultural Negotiation", description: ""},
      { title: "Multi-party and Team Negotiations", description: "" },
      { title: "Negotiation Simulations", description: "" },
      { title: "Ethics and Power in Negotiation", description: "" },
      { title: "Conflict Resolution & Mediation", description: ""},
      { title: "Negotiation in the Digital World", description: ""}
    ],
    learningOutcomes: [
      "Apply structured negotiation frameworks across various business situations",
      "Identify and leverage their BATNA and ZOPA effectively",
      "Communicate persuasively while navigating diverse cultural settings",
      "Build long-term trust-based relationships with stakeholders",
      "Resolve conflicts and deadlocks using ethical and practical approaches",
      "Lead team and multi-party negotiations with strategic clarity",
      "Adapt to emerging digital tools and practices in global negotiations",
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
    duration: "10 hours (Customized for groups)",
    startDate: "Rolling admissions",
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
    learningOutcomes: [
      "Demonstrate clear, confident, and tailored responses across all interview types",
      "Apply structured frameworks to answer behavioural and situational questions",
      "Adapt communication and body language based on interviewer style and setting",
      "Prepare thoroughly for interviews, from research to checklists to managing nerves",
      "Present a professional image through attire, LinkedIn profile, and resume alignment",
      "Engage in strategic questioning to show interest, fit, and long-term potential",
      "Navigate job offers, rejections, and follow-up communications with professionalism"
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
    duration: "10 hours (Customized for groups)",
    startDate: "Rolling admissions",
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
    learningOutcomes: [
      "Demonstrate clear, confident, and tailored responses across all interview types",
      "Apply structured frameworks to answer behavioural and situational questions",
      "Adapt communication and body language based on interviewer style and setting",
      "Prepare thoroughly for interviews, from research to checklists to managing nerves",
      "Present a professional image through attire, LinkedIn profile, and resume alignment",
      "Engage in strategic questioning to show interest, fit, and long-term potential",
      "Navigate job offers, rejections, and follow-up communications with professionalism"
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
    duration: "10 hours (Customized for groups)",
    startDate: "Rolling admissions",
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
    learningOutcomes: [
      "Demonstrate clear, confident, and tailored responses across all interview types",
      "Apply structured frameworks to answer behavioural and situational questions",
      "Adapt communication and body language based on interviewer style and setting",
      "Prepare thoroughly for interviews, from research to checklists to managing nerves",
      "Present a professional image through attire, LinkedIn profile, and resume alignment",
      "Engage in strategic questioning to show interest, fit, and long-term potential",
      "Navigate job offers, rejections, and follow-up communications with professionalism"
    ],
    image: "/images/4dc0248d-9274-4883-97c4-872cb9c743d3.png"
  },
  "business-communication": {
    id: "u1",
    name: "Business Communication",
    desc: "Effective business communication allows clarity, fosters collaboration, builds trust, and ensures alignment across teams, functions, and geographies. It gives organisations/companies competitive edge through better decision-making, stronger relationships, and enhanced reputation.",
    modules: 7,
    audience: "Management graduates and corporate professionals. ",
    slug: "business-communication",
    category: "University / MBA Programs",
    duration: "20 hours",
    startDate: "Rolling admissions",
    price: 17999,
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
    price: 19999,
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
    id: "c2",
    name: "Interview Preparation Program",
    desc: " This course will help an individual build confidence, equip clarity, and strategy needed to stand out during interviews. Focusing on communication skills, strategy making, self-awareness and real-time feedback it prepares the learner to handle any interview scenario and present their best self, leaving a lasting impression.",
    modules: 13,
    audience: "Job seekers, career changers, students and professionals",
    slug: "interview-preparation",
    category: "Coaching + Mentoring for Students",
    duration: "10 hours for individuals (Customized for groups)",
    startDate: "Rolling admissions",
    price: 17999,
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
      { title: "Strategies for Different Interviewers & Panel Interviews", description: "Adapting interview strategies based on the interviewer’s seniority. Understanding one-on-one vs. panel interviews vs. technical interviews. Psychological tactics based on the type of interviewer." },
      { title: "Asking the Right Questions in an Interview", description: "Understanding why asking questions is important. The best questions to ask based on the role and interviewer’s position. How to demonstrate enthusiasm and cultural fit through questioning." },
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
  "leadership-development": {
    id: "ct1",
    name: "Leadership Development",
    desc: "Executive coaching for senior management to enhance leadership capabilities.",
    modules: 10,
    audience: "Mid to senior-level managers and executives",
    slug: "leadership-development",
    category: "Corporate Training",
    duration: "10 hours (Customized for groups)",
    startDate: "Rolling admissions",
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
    learningOutcomes: [
      "Demonstrate clear, confident, and tailored responses across all interview types",
      "Apply structured frameworks to answer behavioural and situational questions",
      "Adapt communication and body language based on interviewer style and setting",
      "Prepare thoroughly for interviews, from research to checklists to managing nerves",
      "Present a professional image through attire, LinkedIn profile, and resume alignment",
      "Engage in strategic questioning to show interest, fit, and long-term potential",
      "Navigate job offers, rejections, and follow-up communications with professionalism"
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
    duration: "10 hours (Customized for groups)",
    startDate: "Rolling admissions",
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
    learningOutcomes: [
      "Demonstrate clear, confident, and tailored responses across all interview types",
      "Apply structured frameworks to answer behavioural and situational questions",
      "Adapt communication and body language based on interviewer style and setting",
      "Prepare thoroughly for interviews, from research to checklists to managing nerves",
      "Present a professional image through attire, LinkedIn profile, and resume alignment",
      "Engage in strategic questioning to show interest, fit, and long-term potential",
      "Navigate job offers, rejections, and follow-up communications with professionalism"
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
    duration: "10 hours (Customized for groups)",
    startDate: "Rolling admissions",
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
    learningOutcomes: [
      "Demonstrate clear, confident, and tailored responses across all interview types",
      "Apply structured frameworks to answer behavioural and situational questions",
      "Adapt communication and body language based on interviewer style and setting",
      "Prepare thoroughly for interviews, from research to checklists to managing nerves",
      "Present a professional image through attire, LinkedIn profile, and resume alignment",
      "Engage in strategic questioning to show interest, fit, and long-term potential",
      "Navigate job offers, rejections, and follow-up communications with professionalism"
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
    duration: "10 hours (Customized for groups)",
    startDate: "Rolling admissions",
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
    learningOutcomes: [
      "Demonstrate clear, confident, and tailored responses across all interview types",
      "Apply structured frameworks to answer behavioural and situational questions",
      "Adapt communication and body language based on interviewer style and setting",
      "Prepare thoroughly for interviews, from research to checklists to managing nerves",
      "Present a professional image through attire, LinkedIn profile, and resume alignment",
      "Engage in strategic questioning to show interest, fit, and long-term potential",
      "Navigate job offers, rejections, and follow-up communications with professionalism"
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
    duration: "10 hours (Customized for groups)",
    startDate: "Rolling admissions",
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
    learningOutcomes: [
      "Demonstrate clear, confident, and tailored responses across all interview types",
      "Apply structured frameworks to answer behavioural and situational questions",
      "Adapt communication and body language based on interviewer style and setting",
      "Prepare thoroughly for interviews, from research to checklists to managing nerves",
      "Present a professional image through attire, LinkedIn profile, and resume alignment",
      "Engage in strategic questioning to show interest, fit, and long-term potential",
      "Navigate job offers, rejections, and follow-up communications with professionalism"
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
    // alert("Payment integration would be implemented here. This would connect to Razorpay or collect user information.");
  
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
                    <div className="flex items-center text-[#D97706] mb-2">
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
                  <Users className="h-5 w-5 text-[#D97706] mr-2" />
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
                      <CheckCircle className="h-6 w-6 text-[#D97706] mr-3 mt-0.5 flex-shrink-0" />
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
                className="bg-[#D97706] hover:bg-[#D97706]/90 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg shadow-yellow/20 animate-pulse-soft"
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
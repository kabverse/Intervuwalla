
import { useEffect } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost: BlogPost = {
    id: "b1",
    title: "5 Common Interview Mistakes and How to Avoid Them",
    excerpt: "Learn about the most frequent errors candidates make during interviews and strategies to ensure you don't fall into the same traps.",
    author: "Anil Gupta",
    date: "October 10, 2023",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    category: "Interview Tips",
    readTime: "6 min read"
  };

  const blogPosts: BlogPost[] = [
    {
      id: "b2",
      title: "How to Answer 'Tell Me About Yourself' Like a Pro",
      excerpt: "Master the art of crafting a compelling personal introduction that leaves a lasting impression on your interviewer.",
      author: "Anil Gupta",
      date: "September 28, 2023",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      category: "Interview Tips",
      readTime: "5 min read"
    },
    {
      id: "b3",
      title: "Technical Interview Preparation: A Complete Guide",
      excerpt: "Comprehensive strategies and resources to help you prepare for coding challenges and technical discussions.",
      author: "Priya Sharma",
      date: "September 20, 2023",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Technical Interviews",
      readTime: "10 min read"
    },
    {
      id: "b4",
      title: "Resume Optimization: Getting Past the ATS",
      excerpt: "Techniques to ensure your resume passes through Applicant Tracking Systems and lands on the recruiter's desk.",
      author: "Vikram Patel",
      date: "September 15, 2023",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Resume Building",
      readTime: "7 min read"
    },
    {
      id: "b5",
      title: "Salary Negotiation: Know Your Worth",
      excerpt: "Expert advice on researching market rates and effectively negotiating your compensation package.",
      author: "Anil Gupta",
      date: "September 8, 2023",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      category: "Career Growth",
      readTime: "8 min read"
    },
    {
      id: "b6",
      title: "The Power of Storytelling in Behavioral Interviews",
      excerpt: "Learn how to structure compelling narratives that showcase your skills and experiences effectively.",
      author: "Neha Gupta",
      date: "August 30, 2023",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      category: "Behavioral Interviews",
      readTime: "6 min read"
    }
  ];

  const categories = ["All Posts", "Interview Tips", "Technical Interviews", "Resume Building", "Career Growth", "Behavioral Interviews"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="pb-16 md:pb-24 overflow-hidden">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="heading-1 mb-6 text-gradient animate-pulse-soft">
                Career <span className="text-shimmer">Insights</span> & Resources
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert advice, industry trends, and actionable tips to help you excel in your career journey.
              </p>
            </div>
            
            {/* Featured Post */}
            <div className="rounded-2xl overflow-hidden glass-card mb-16 animate-fade-in">
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative aspect-square md:aspect-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <div className="mb-2 flex items-center">
                    <span className="bg-primary/10 text-primary text-xs font-medium rounded-full px-3 py-1">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-muted-foreground ml-3">{featuredPost.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center ml-4">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{featuredPost.date}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Button className="bg-primary hover:bg-primary/90 rounded-full btn-glow">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 ? 'bg-primary text-white' : 'bg-secondary/50 text-foreground/80 hover:bg-secondary/70'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-card/30 rounded-2xl overflow-hidden border border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col animate-fade-in stagger-item"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/80 backdrop-blur-sm text-white text-xs font-medium rounded-full px-3 py-1">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-display font-semibold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100/10 flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90 p-0">
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-primary/10">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Get weekly career tips, interview strategies, and industry insights delivered straight to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-3 rounded-full bg-background/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 py-3 btn-glow">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;

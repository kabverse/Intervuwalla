
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MessageSquare, Send, CheckCircle, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Your message has been sent!", {
        description: "We'll get back to you shortly.",
        duration: 5000,
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-primary/5 relative overflow-hidden">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6 animate-fade-in">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in">
                Have questions or need assistance? We're here to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="heading-2 mb-6">
                    Contact <span className="text-primary">Information</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us for any inquiries about our courses, workshops, or if you need personalized guidance for your interview preparation.
                  </p>
                </div>
                
                <div className="grid gap-6">
                  <div className="flex items-start p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@intervuwalla.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@intervuwalla.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 9810000622
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/intervuwalla/" 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors border border-gray-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/intervuwalla/" 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors border border-gray-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-display font-semibold">Send Us a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Course Information">Course Information</option>
                      <option value="Workshop Registration">Workshop Registration</option>
                      <option value="Corporate Training">Corporate Training</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      className="w-full rounded-lg bg-primary hover:bg-primary/90 text-white flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : isSuccess ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

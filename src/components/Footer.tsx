
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/40 pt-16 pb-8 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold text-foreground">
                <span className="text-gradient">Intervu</span>walla
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Empowering professionals to excel in interviews and advance their careers with confidence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-foreground transition-all duration-300 border border-white/5"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-foreground transition-all duration-300 border border-white/5"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-foreground transition-all duration-300 border border-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-foreground transition-all duration-300 border border-white/5"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gradient">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">Courses</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gradient">Our Courses</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">Technical Interview Prep</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">Behavioral Interviews</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">Resume Building</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">Salary Negotiation</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">Mock Interviews</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block">Career Transition</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gradient">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Education Street, Bangalore, Karnataka, India - 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a href="mailto:info@intervuwalla.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@intervuwalla.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Intervuwalla. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

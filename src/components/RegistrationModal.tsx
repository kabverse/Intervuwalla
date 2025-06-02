
import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, CheckCircle, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Workshop {
  id: string;
  title: string;
  dates: string[];
  time: string;
  location: string;
  capacity: number;
  spotsLeft: number;
  imageUrl: string;
  topics: string[];
}

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  workshop: Workshop;
}

// Simulating payment integration - In a real app, you would integrate with Razorpay or another payment gateway
const simulatePayment = async (amount: number, userData: any) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate successful payment with 90% probability
  const isSuccessful = Math.random() < 0.9;
  
  if (!isSuccessful) {
    throw new Error("Payment failed. Please try again.");
  }
  
  return {
    id: `pay_${Math.random().toString(36).substr(2, 9)}`,
    amount,
    status: 'successful',
    userData,
  };
};

// Simulate sending confirmation email
const sendConfirmationEmail = async (email: string, name: string, workshopTitle: string) => {
  console.log(`Sending confirmation email to ${email} for ${workshopTitle}`);
  // In a real app, this would call an API or webhook to send an email
  await new Promise(resolve => setTimeout(resolve, 800));
  return true;
};

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, workshop }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '', // New field for company/college
    attendees: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1); // 1: Form, 2: Payment, 3: Success

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'attendees' ? Math.min(Math.max(1, parseInt(value) || 1), workshop.spotsLeft) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Process payment
      const total = formData.attendees * 199;
      
      // This would be replaced with actual Razorpay integration
      const payment = await simulatePayment(total, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
      });
      
      // Send confirmation email with workshop details and WhatsApp groi link
      await sendConfirmationEmail(
        formData.email,
        formData.name,
        workshop.title
      );
      
      // Process successful payment
      setIsSuccess(true);
      setPaymentStep(3);
      
      toast.success("Registration successful! Check your email for details.", {
        description: `You've registered for ${workshop.title}`,
        duration: 5000,
      });
      
      // Reset after showing success
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          attendees: 1,
        });
        setPaymentStep(1);
      }, 5000);
    } catch (error) {
      toast.error("Payment failed", {
        description: error.message || "Please try again",
        duration: 5000,
      });
      setIsSubmitting(false);
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep(2);
  };

  const total = formData.attendees * 199;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-card rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-500 hover:bg-gray-100/10 transition-colors z-10"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-green-100/20 p-3">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold mb-2 text-gradient">Registration Complete!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for registering for {workshop.title}. We've sent the details to your email.
            </p>
            <div className="space-y-4 mb-6 max-w-md mx-auto text-left bg-secondary/30 p-4 rounded-lg">
              <p className="text-sm">
                <span className="font-semibold">Next Steps:</span>
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Check your email for workshop details and Zoom link</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Join our private WhatsApp group for updates and materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Prepare any questions you have for the interactive Q&A session</span>
                </li>
              </ul>
            </div>
            <Button className="bg-primary text-white hover:bg-primary/90 mx-auto animate-pulse-soft" onClick={onClose}>
              Close
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
              <img 
                src={workshop.imageUrl} 
                alt={workshop.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-display font-bold mb-4 text-gradient">{workshop.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Twice Weekly: {workshop.dates.join(' & ')}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{workshop.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {paymentStep === 1 && (
                <>
                  <h4 className="text-xl font-semibold mb-4 text-gradient">Register Now</h4>
                  
                  <form onSubmit={handleNextStep} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-1">College/Company (Optional)</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Where you work or study"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-1">Number of Attendees</label>
                      <input
                        type="number"
                        name="attendees"
                        value={formData.attendees}
                        onChange={handleChange}
                        min="1"
                        max={workshop.spotsLeft}
                        className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        {workshop.spotsLeft} spots left
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex justify-between mb-4">
                        <span>Registration Fee (₹199 × {formData.attendees})</span>
                        <span>₹{total}</span>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white btn-glow"
                      >
                        Continue to Payment
                      </Button>
                      
                      <p className="text-xs text-center text-muted-foreground mt-3">
                        By registering, you agree to our Terms and Privacy Policy.
                      </p>
                    </div>
                  </form>
                </>
              )}

              {paymentStep === 2 && (
                <>
                  <h4 className="text-xl font-semibold mb-4 text-gradient">Complete Payment</h4>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="p-4 border border-white/10 rounded-lg bg-secondary/30">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Workshop Registration</span>
                        <span className="font-bold">₹{total}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {formData.attendees} {formData.attendees > 1 ? 'attendees' : 'attendee'} × ₹199
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-1">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                        <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-1">Expiry Date</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-1">CVC</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white btn-glow"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Processing...' : `Pay ₹${total} & Register`}
                      </Button>
                      
                      <p className="text-xs text-center text-muted-foreground mt-3">
                        Secure payment processing. Your card information is encrypted.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;

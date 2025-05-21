import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Terms = () => {
  // Automatically scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <h1 className="heading-1 mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 21, 2025</p>
          
          <Separator className="mb-8" />
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Intervuwalla ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at www.intervuwalla.com and all related applications and services (collectively, the "Service") operated by Intervuwalla.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            
            <h2>2. Use of the Service</h2>
            <p>
              The Service is designed to provide educational content, training programs, and career development resources. To access certain features of the Service, you may be required to register for an account.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify Intervuwalla of any unauthorized use of your account or any other breach of security.
            </p>
            
            <h2>3. Course Enrollment and Payments</h2>
            <p>
              Some of our courses and programs require payment. By enrolling in a paid course, you agree to pay the specified fees. All payments are processed through our secure payment gateway. Fees are non-refundable except as expressly stated in our refund policy.
            </p>
            <p>
              Course fees may be subject to change, but changes will not affect enrollments that have already been confirmed. We reserve the right to offer promotional discounts that may not be available to all users.
            </p>
            
            <h2>4. Intellectual Property Rights</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Intervuwalla and its licensors. The Service is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              Our course materials, including videos, presentations, documents, and other content, are provided for your personal, non-commercial use only. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service, except as incidental to normal use of the Service.
            </p>
            
            <h2>5. User Content</h2>
            <p>
              In using our Service, you may submit content such as assignments, projects, comments, and feedback ("User Content"). By submitting User Content, you grant Intervuwalla a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, and display such content in connection with the Service.
            </p>
            <p>
              You represent and warrant that you own or control all rights in and to the User Content and have the right to grant the license above. You further represent that such content does not violate the rights of any third party and is not otherwise unlawful.
            </p>
            
            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall Intervuwalla, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
            
            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
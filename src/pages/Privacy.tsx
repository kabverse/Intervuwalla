import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Privacy = () => {
  // Automatically scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <h1 className="heading-1 mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 21, 2025</p>
          
          <Separator className="mb-8" />
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              At Intervuwalla, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the website or use our services.
            </p>
            
            <h2>2. Information We Collect</h2>
            <h3>Personal Data</h3>
            <p>
              When you register for an account, enroll in a course, or contact us, we may collect the following types of information:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing address</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Academic and professional background</li>
              <li>Profile photo (optional)</li>
            </ul>
            
            <h3>Usage Data</h3>
            <p>
              We automatically collect certain information about how you interact with our website and services, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Device information</li>
              <li>Referring website</li>
              <li>Course progress and completion data</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing and maintaining our services</li>
              <li>Processing enrollment and payments</li>
              <li>Sending administrative information and updates</li>
              <li>Personalizing your experience</li>
              <li>Analyzing usage to improve our services</li>
              <li>Communicating about new courses and offerings</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
            
            <h2>5. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>Service providers who perform services on our behalf</li>
              <li>Partners with whom we offer co-branded services</li>
              <li>Law enforcement or other governmental authorities when required by law</li>
              <li>Other parties in connection with a merger, acquisition, or sale of assets</li>
            </ul>
            
            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>7. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate personal data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
            </ul>
            
            <h2>8. Data Retention</h2>
            <p>
              We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
            </p>
            
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal data from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us.
            </p>
            
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.
            </p>
            
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
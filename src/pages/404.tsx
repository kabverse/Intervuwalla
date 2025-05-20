import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileX } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-4 sm:px-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="rounded-full bg-secondary/30 p-6 mx-auto w-32 h-32 flex items-center justify-center mb-8">
          <FileX size={64} className="text-primary animate-pulse-soft" />
        </div>
        
        {/* Error Content */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground heading-1 mb-2">
          <span className="text-primary">4</span>
          <span className="text-yellow">0</span>
          <span className="text-primary">4</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
          Page Not Found
        </h2>
        
        <Separator className="my-6" />
        
        <p className="text-muted-foreground text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="w-full sm:w-auto btn-hover-expand"
            asChild
          >
            <Link to="/">
              Return Home
            </Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto btn-hover-expand"
            asChild
          >
            <Link to="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="hidden md:block absolute top-1/4 left-20 w-12 h-12 rounded-full bg-blue-500/20 animate-float" />
      <div className="hidden md:block absolute bottom-1/4 right-20 w-20 h-20 rounded-full bg-yellow/20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="hidden md:block absolute top-1/3 right-40 w-8 h-8 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "2s" }} />
      <div className="hidden md:block absolute bottom-1/3 left-40 w-16 h-16 rounded-full bg-blue-500/10 animate-float" style={{ animationDelay: "1.5s" }} />
    </div>
  );
};

export default NotFound;
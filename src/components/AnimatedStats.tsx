
import { useCountUp } from '@/hooks/useCountUp';
import { Users, Award, BookOpen, TrendingUp } from 'lucide-react';

const AnimatedStats = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: 8000,
      suffix: "+",
      label: "Students & Professionals"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: 18,
      suffix: "+",
      label: "Years of Experience"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      value: 20,
      suffix: "%",
      label: "Industry Employability Rate"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      value: 275,
      suffix: "",
      label: "Applicants per Job Opening"
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  icon, 
  value, 
  suffix, 
  label, 
  delay = 0 
}: { 
  icon: React.ReactNode; 
  value: number; 
  suffix: string; 
  label: string; 
  delay?: number;
}) => {
  const { count, elementRef } = useCountUp({ 
    end: value, 
    duration: 2000 + delay,
    startOnView: true 
  });

  return (
    <div 
      ref={elementRef}
      className="text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-block p-3 rounded-full bg-primary/10 mb-4 transform transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-3xl font-display font-bold text-foreground mb-1">
        {count.toLocaleString()}{suffix}
      </h3>
      <p className="text-muted-foreground">
        {label}
      </p>
    </div>
  );
};

export default AnimatedStats;

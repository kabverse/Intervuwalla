import { useState } from 'react';
import { Clock, Star, Users, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  category: string;
  price: number;
  featured?: boolean;
}

const CourseCard = ({ 
  id, 
  title, 
  description, 
  image, 
  duration, 
  level, 
  students, 
  rating, 
  category,
  price,
  featured = true
}: CourseProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 h-full ${
        featured 
          ? 'bg-primary/5 border border-primary/20 shadow-xl shadow-primary/5' 
          : 'bg-white border border-gray-100 hover:shadow-xl hover:shadow-gray-100/20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-white">
            Featured
          </span>
        </div>
      )}
      
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-white/90 font-medium">
            {category}
          </span>
          <div className="flex items-center text-white px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="text-xs font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="w-3.5 h-3.5 mr-1" />
            {students} students
          </div>
          <div className="flex items-center px-2 py-1 rounded-full bg-secondary">
            {level}
          </div>
        </div>
        
        <div className="pt-2 flex items-center justify-between">
          <div className="font-semibold">
            <span className="text-xl">₹{price}</span>
            {featured && <span className="ml-2 text-sm line-through text-muted-foreground">₹{Math.floor(price * 1.2)}</span>}
          </div>
          
          <Link to={`/programs/${id}`}>
            <Button
              variant="secondary"
              size="sm"
              className={`rounded-full group-hover:bg-primary group-hover:text-white transition-colors ${
                featured ? 'bg-primary text-white' : ''
              }`}
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
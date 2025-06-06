
import { useState } from 'react';
import { Clock, Star, Users, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  image: string;
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
          <Badge variant="flashy" className="relative">
            <Sparkles className="mr-1 h-3 w-3 animate-spin" />
            Featured
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-30"></div>
          </Badge>
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
          <Badge variant="premium" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center">
            <Badge variant="success" className="flex items-center">
              <Star className="w-3 h-3 text-yellow-300 mr-1" />
              {rating.toFixed(1)}
            </Badge>
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
            <Users className="w-3.5 h-3.5 mr-1" />
            {students} students
          </div>
          <Badge variant="outline" className="text-xs">
            {level}
          </Badge>
        </div>
        
        <div className="pt-2 flex items-center justify-between">
          <div className="font-semibold">
            <span className="text-xl text-yellow-600">₹{price}</span>
            {featured && <span className="ml-2 text-sm line-through text-muted-foreground">₹{Math.floor(price * 1.2)}</span>}
          </div>
          
          <Link to={`/programs/${id}`}>
            <Button
              variant="secondary"
              size="sm"
              className={`rounded-full group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:text-white transition-all duration-300 transform hover:scale-105 ${
                featured ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg' : ''
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


import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import { Search, Filter, X } from 'lucide-react';

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  
  const courses: CourseProps[] = [
    {
      id: "c1",
      title: "Master the Technical Interview",
      description: "Comprehensive preparation for coding interviews at top tech companies.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      duration: "8 weeks",
      level: "Intermediate",
      students: 1245,
      rating: 4.8,
      category: "Tech",
      price: 2999,
      featured: true
    },
    {
      id: "c2",
      title: "Behavioral Interview Excellence",
      description: "Learn to present your experience and skills persuasively in interviews.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      duration: "4 weeks",
      level: "All Levels",
      students: 983,
      rating: 4.6,
      category: "Soft Skills",
      price: 1999
    },
    {
      id: "c3",
      title: "Resume & LinkedIn Optimization",
      description: "Create standout profiles that get you noticed by recruiters and hiring managers.",
      image: "https://images.unsplash.com/photo-1587614382231-d6f94f4c02a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      duration: "2 weeks",
      level: "Beginner",
      students: 1578,
      rating: 4.9,
      category: "Career",
      price: 999
    },
    {
      id: "c4",
      title: "Salary Negotiation Strategies",
      description: "Maximize your compensation package with effective negotiation techniques.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      duration: "2 weeks",
      level: "Intermediate",
      students: 832,
      rating: 4.7,
      category: "Career",
      price: 1499
    },
    {
      id: "c5",
      title: "System Design Interview Prep",
      description: "Prepare for system design interviews at top tech companies.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      duration: "6 weeks",
      level: "Advanced",
      students: 654,
      rating: 4.9,
      category: "Tech",
      price: 3499
    },
    {
      id: "c6",
      title: "Case Study Interview Workshop",
      description: "Master the consulting case study interview format.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      duration: "4 weeks",
      level: "Intermediate",
      students: 421,
      rating: 4.6,
      category: "Business",
      price: 2499
    },
    {
      id: "c7",
      title: "Leadership Interview Preparation",
      description: "Prepare for executive and leadership position interviews.",
      image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      duration: "5 weeks",
      level: "Advanced",
      students: 328,
      rating: 4.8,
      category: "Leadership",
      price: 3999
    },
    {
      id: "c8",
      title: "Product Management Interview Guide",
      description: "Comprehensive preparation for product management interviews.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      duration: "6 weeks",
      level: "Intermediate",
      students: 592,
      rating: 4.7,
      category: "Product",
      price: 2799
    },
    {
      id: "c9",
      title: "Public Speaking for Interviews",
      description: "Enhance your communication and presentation skills for interviews.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      duration: "3 weeks",
      level: "All Levels",
      students: 876,
      rating: 4.5,
      category: "Soft Skills",
      price: 1299
    }
  ];
  
  const categories = Array.from(new Set(courses.map(course => course.category)));
  const levels = Array.from(new Set(courses.map(course => course.level)));
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? course.category === selectedCategory : true;
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedLevel(null);
  };
  
  const hasActiveFilters = searchTerm || selectedCategory || selectedLevel;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-primary/5 relative overflow-hidden">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6 animate-fade-in">
                Our <span className="text-primary">Courses</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
                Specialized courses designed to help you excel in every aspect of the interview process.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto animate-fade-in">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search for courses..."
                  className="pl-12 pr-4 py-3 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Filters and Courses */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Filter className="h-5 w-5 mr-2" />
                      Filters
                    </h3>
                    {hasActiveFilters && (
                      <button 
                        onClick={resetFilters}
                        className="text-sm text-primary hover:underline flex items-center"
                      >
                        Reset <X className="h-4 w-4 ml-1" />
                      </button>
                    )}
                  </div>
                  
                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Category</h4>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center">
                          <input
                            type="radio"
                            id={category}
                            name="category"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <label htmlFor={category} className="ml-2 text-gray-700">
                            {category}
                          </label>
                        </div>
                      ))}
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="all-categories"
                          name="category"
                          checked={selectedCategory === null}
                          onChange={() => setSelectedCategory(null)}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        />
                        <label htmlFor="all-categories" className="ml-2 text-gray-700">
                          All Categories
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Level Filter */}
                  <div>
                    <h4 className="font-medium mb-3">Level</h4>
                    <div className="space-y-2">
                      {levels.map(level => (
                        <div key={level} className="flex items-center">
                          <input
                            type="radio"
                            id={level}
                            name="level"
                            checked={selectedLevel === level}
                            onChange={() => setSelectedLevel(level)}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <label htmlFor={level} className="ml-2 text-gray-700">
                            {level}
                          </label>
                        </div>
                      ))}
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="all-levels"
                          name="level"
                          checked={selectedLevel === null}
                          onChange={() => setSelectedLevel(null)}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        />
                        <label htmlFor="all-levels" className="ml-2 text-gray-700">
                          All Levels
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Courses Grid */}
              <div className="lg:col-span-3">
                {filteredCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map(course => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-medium mb-2">No courses found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search or filters to find what you're looking for.
                    </p>
                    <button 
                      onClick={resetFilters}
                      className="text-primary font-medium hover:underline"
                    >
                      Reset all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;

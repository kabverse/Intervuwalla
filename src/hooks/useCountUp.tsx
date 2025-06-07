import { useState, useEffect, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: number;
  startOnView?: boolean;
}

export const useCountUp = ({ end, duration = 2000, start = 0, startOnView = false }: UseCountUpProps) => {
  const [count, setCount] = useState(start);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(!startOnView);

  useEffect(() => {
    if (!startOnView) {
      // Start immediately if not waiting for view
      const startTime = Date.now();
      const startValue = start;
      const endValue = end;
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
      return;
    }

    // Intersection Observer for viewport-based start
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          const startTime = Date.now();
          const startValue = start;
          const endValue = end;
          
          const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, start, hasStarted, startOnView]);

  return { count, elementRef };
};
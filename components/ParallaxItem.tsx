import React, { useEffect, useRef } from 'react';

interface ParallaxItemProps {
  children: React.ReactNode;
  speed: number;
  className?: string;
  offsetY?: number; 
}

/**
 * ParallaxItem applies a translation based on the window scroll position.
 * speed > 0: Moves up slower/faster than scroll (Classic parallax).
 * speed = 0: No effect.
 * speed < 0: Moves in reverse direction.
 */
const ParallaxItem: React.FC<ParallaxItemProps> = ({ children, speed, className = '', offsetY = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!ref.current) return;
      const scrollY = window.scrollY;
      // Calculate transform. 
      // If speed is 0.5, the element moves 0.5px for every 1px scrolled.
      // This creates the illusion of depth.
      const transformY = scrollY * speed;
      
      ref.current.style.transform = `translate3d(0, ${transformY}px, 0)`;
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`} style={{ top: offsetY, position: 'relative' }}>
      {children}
    </div>
  );
};

export default ParallaxItem;
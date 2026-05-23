'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  const dotsRef = useRef<HTMLDivElement[]>([]);
  const pointsRef = useRef(Array(20).fill({ x: -100, y: -100 }));
  const mouseRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateHoverState);

    let animationFrameId: number;

    const animateSnake = () => {
      let pts = pointsRef.current;
      
      // Head follows actual mouse cursor smoothly
      pts[0] = {
        x: pts[0].x + (mouseRef.current.x - pts[0].x) * 0.4,
        y: pts[0].y + (mouseRef.current.y - pts[0].y) * 0.4,
      };

      // Each body segment follows the segment in front of it
      // This is what creates the true bending/slithering ("morabe") effect!
      for (let i = 1; i < pts.length; i++) {
        pts[i] = {
          x: pts[i].x + (pts[i - 1].x - pts[i].x) * 0.4,
          y: pts[i].y + (pts[i - 1].y - pts[i].y) * 0.4,
        };
      }

      // Update DOM manually for high performance loop
      const time = Date.now() / 15;
      dotsRef.current.forEach((dot, index) => {
        if (!dot) return;
        const size = 26 - index * 1.1; 
        dot.style.transform = `translate(${pts[index].x - size / 2}px, ${pts[index].y - size / 2}px)`;
        
        // Auto-changing multi-color (Rainbow)
        const hue = (time + index * 12) % 360;
        dot.style.backgroundColor = `hsl(${hue}, 100%, 60%)`;
        if (index < 5) {
          dot.style.boxShadow = `0 0 15px hsla(${hue}, 100%, 60%, 0.6)`;
        }
      });

      animationFrameId = requestAnimationFrame(animateSnake);
    };

    animateSnake();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateHoverState);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Snake Body */}
      {[...Array(20)].map((_, index) => {
        const size = 26 - index * 1.1;
        return (
          <div
            key={index}
            ref={(el) => {
              if (el) dotsRef.current[index] = el;
            }}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
            style={{
              width: size,
              height: size,
              opacity: isHovering && index === 0 ? 0 : 1 - index * 0.04,
              willChange: 'transform, background-color',
              transition: 'opacity 0.2s',
            }}
          />
        );
      })}
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white/30 rounded-full pointer-events-none z-[9998] backdrop-blur-[2px]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      />
    </>
  );
}

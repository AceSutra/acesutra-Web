import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const isTouchDevice = useRef(false);

  // Smooth spring motion for responsive fluid tracking
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Detect touch-only devices to disable custom cursor
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      isTouchDevice.current = true;
      return;
    }

    const lastPos = { x: -100, y: -100 };

    const updateHoverState = (target: HTMLElement | null) => {
      if (!target) {
        setIsHovered(false);
        setCursorText('');
        return;
      }

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setIsHovered(true);
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        return;
      }

      const interactiveTarget = target.closest('a, button, input, select, textarea, [role="button"]');
      if (interactiveTarget) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastPos.x = e.clientX;
      lastPos.y = e.clientY;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      updateHoverState(target);
    };

    const handleScroll = () => {
      if (lastPos.x >= 0 && lastPos.y >= 0) {
        const el = document.elementFromPoint(lastPos.x, lastPos.y) as HTMLElement | null;
        updateHoverState(el);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice.current) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      <motion.div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          cursorText
            ? 'w-24 h-24 -ml-12 -mt-12 bg-brand-cyan/20 backdrop-blur-md border border-brand-cyan/60 text-white font-mono text-[10px] tracking-widest uppercase font-semibold shadow-glow-cyan'
            : isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 bg-brand-blue/30 border border-brand-cyan/60 backdrop-blur-sm'
            : 'w-4 h-4 -ml-2 -mt-2 bg-brand-cyan shadow-glow-cyan'
        }`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        {cursorText && (
          <span className="text-center px-1 animate-pulse">{cursorText}</span>
        )}
      </motion.div>
    </div>
  );
};

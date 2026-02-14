import { useEffect, useRef, useCallback } from 'react';

interface MagneticButtonOptions {
  strength?: number;
  radius?: number;
  ease?: number;
}

export function useMagneticButton<T extends HTMLElement>(
  options: MagneticButtonOptions = {}
) {
  const { strength = 0.3, radius = 150, ease = 0.15 } = options;
  const elementRef = useRef<T>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const currentPositionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const animate = useCallback(() => {
    if (!elementRef.current) {
      rafRef.current = null;
      return;
    }

    const element = elementRef.current;

    currentPositionRef.current.x += (positionRef.current.x - currentPositionRef.current.x) * ease;
    currentPositionRef.current.y += (positionRef.current.y - currentPositionRef.current.y) * ease;

    element.style.setProperty('--magnetic-x', `${currentPositionRef.current.x}px`);
    element.style.setProperty('--magnetic-y', `${currentPositionRef.current.y}px`);

    const isStillMoving = 
      Math.abs(currentPositionRef.current.x - positionRef.current.x) > 0.01 ||
      Math.abs(currentPositionRef.current.y - positionRef.current.y) > 0.01;

    if (isStillMoving) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      rafRef.current = null;
    }
  }, [ease]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < radius) {
        const force = (radius - distance) / radius;
        positionRef.current = {
          x: distanceX * strength * force,
          y: distanceY * strength * force
        };
      } else {
        positionRef.current = { x: 0, y: 0 };
      }

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseLeave = () => {
      positionRef.current = { x: 0, y: 0 };
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [strength, radius, animate]);

  return elementRef;
}

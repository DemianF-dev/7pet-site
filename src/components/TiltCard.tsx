import React, { useRef, useState, useCallback, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  scale?: number;
  perspective?: number;
  transitionDuration?: number;
  glareEnabled?: boolean;
}

export function TiltCard({
  children,
  className = '',
  tiltAmount = 10,
  scale = 1.02,
  perspective = 1000,
  transitionDuration = 400,
  glareEnabled = true
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -tiltAmount;
    const rotateY = (mouseX / (rect.width / 2)) * tiltAmount;

    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;

    setTransform({ rotateX, rotateY, scale });
    setGlarePosition({ x: glareX, y: glareY });
  }, [tiltAmount, scale]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
    setGlarePosition({ x: 50, y: 50 });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative transform-gpu ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
        transition: `transform ${transitionDuration}ms cubic-bezier(0.23, 1, 0.32, 1)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glareEnabled && (
        <div
          className={`absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />
      )}
    </div>
  );
}

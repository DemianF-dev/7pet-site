import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { useMagneticButton } from '../hooks/useMagneticButton';

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  magneticStrength?: number;
  className?: string;
}

export function MagneticButton({
  children,
  variant = 'primary',
  size = 'md',
  magneticStrength = 0.3,
  className = '',
  ...props
}: MagneticButtonProps) {
  const buttonRef = useMagneticButton<HTMLButtonElement>({
    strength: magneticStrength,
    radius: 150,
    ease: 0.15
  });

  const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300 active:scale-95 overflow-hidden';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/30',
    accent: 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/30',
    outline: 'bg-white text-foreground border-2 border-primary/20 hover:bg-primary/5 shadow-sm'
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  };

  return (
    <button
      ref={buttonRef}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{
        transform: 'translate(var(--magnetic-x, 0), var(--magnetic-y, 0))',
        transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.3s, box-shadow 0.3s',
      }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300" />
    </button>
  );
}

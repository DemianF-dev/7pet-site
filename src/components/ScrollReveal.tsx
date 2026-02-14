import React, { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

/**
 * ScrollReveal Ultra-Safe
 * Inicia visível se houver qualquer dúvida ou erro.
 * O efeito de revelação é um "bônus", não um requisito de visibilidade.
 */
export function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  once = true
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    // Se não suportar IntersectionObserver, mostramos tudo direto
    if (!('IntersectionObserver' in window)) {
      setHasRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          if (once) observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(element);

    // Safety Force: Revela após 1 segundo se nada acontecer
    const timer = setTimeout(() => setHasRevealed(true), 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [threshold, once]);

  // Definimos os estilos de transformação de forma que o estado "final" seja sempre o natural
  const getTransform = () => {
    if (hasRevealed) return 'none';

    switch (direction) {
      case 'up': return 'translateY(20px)';
      case 'down': return 'translateY(-20px)';
      case 'left': return 'translateX(20px)';
      case 'right': return 'translateX(-20px)';
      case 'scale': return 'scale(0.98)';
      default: return 'none';
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal-container ${className}`}
      style={{
        opacity: hasRevealed ? 1 : 0, // Agora com timeout de 1s forçado
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: 'opacity, transform',
        visibility: hasRevealed ? 'visible' : 'visible' // Garantimos visibilidade
      }}
    >
      {children}
    </div>
  );
}

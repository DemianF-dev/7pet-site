import { useEffect, useRef } from 'react';

interface FloatingParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: 'paw' | 'heart' | 'bone' | 'sparkle';
}

interface FloatingPetElementsProps {
  className?: string;
  density?: number;
}

export function FloatingPetElements({ 
  className = '', 
  density = 15
}: FloatingPetElementsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<FloatingParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Inicializar partículas
    const types: FloatingParticle['type'][] = ['paw', 'heart', 'bone', 'sparkle'];
    particlesRef.current = Array.from({ length: density }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5 - 0.2,
      size: Math.random() * 20 + 10,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.3 + 0.1,
      type: types[Math.floor(Math.random() * types.length)]
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const drawParticle = (particle: FloatingParticle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.globalAlpha = particle.opacity;
      
      // Desenhar formas simples baseadas no tipo
      ctx.strokeStyle = getComputedStyle(canvas).color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      switch (particle.type) {
        case 'paw':
          // Pata simplificada
          ctx.arc(0, 0, particle.size * 0.3, 0, Math.PI * 2);
          ctx.stroke();
          break;
        case 'heart':
          // Coração simplificado
          const s = particle.size * 0.3;
          ctx.moveTo(0, s * 0.3);
          ctx.bezierCurveTo(-s, -s * 0.5, -s, -s, 0, -s * 0.5);
          ctx.bezierCurveTo(s, -s, s, -s * 0.5, 0, s * 0.3);
          ctx.stroke();
          break;
        case 'bone':
          // Osso simplificado
          const b = particle.size * 0.4;
          ctx.roundRect(-b, -b * 0.2, b * 2, b * 0.4, b * 0.2);
          ctx.stroke();
          break;
        case 'sparkle':
          // Brilho
          const sp = particle.size * 0.4;
          ctx.moveTo(0, -sp);
          ctx.lineTo(0, sp);
          ctx.moveTo(-sp, 0);
          ctx.lineTo(sp, 0);
          ctx.stroke();
          break;
      }
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Atualizar posição
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Interação com mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx -= (dx / distance) * force * 0.5;
          particle.vy -= (dy / distance) * force * 0.5;
        }

        // Limitar velocidade
        particle.vx = Math.max(-2, Math.min(2, particle.vx));
        particle.vy = Math.max(-2, Math.min(2, particle.vy));

        // Wrap around
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        drawParticle(particle);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      style={{ color: 'var(--primary)' }}
    />
  );
}

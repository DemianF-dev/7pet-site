import React, { useEffect, useRef, useState } from 'react';
import { PawPrint, Sparkles, Heart, Star, Cloud } from 'lucide-react';

interface SplinePet3DProps {
  className?: string;
  onLoad?: () => void;
}

/**
 * Componente 3D Nativo (Sem Dependências Externas)
 * Cria uma cena de "Hero" animada usando CSS 3D e Parallax.
 * Elimina erros de carregamento (403/404) e é super leve.
 */
export function SplinePet3D({ className = '', onLoad }: SplinePet3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Simula o carregamento "instantâneo" para liberar a animação na Home
  useEffect(() => {
    onLoad?.();
  }, [onLoad]);

  // Efeito de Mouse Parallax
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25; // Sensibilidade X
      const y = (e.clientY - top - height / 2) / 25; // Sensibilidade Y

      const layers = container.querySelectorAll('.parallax-layer');
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute('data-speed') || '1');
        const rotate = parseFloat(layer.getAttribute('data-rotate') || '0');
        (layer as HTMLElement).style.transform = `
          translate(${x * speed}px, ${y * speed}px) 
          rotate(${rotate + (x * 0.05)}deg)
        `;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full flex items-center justify-center perspective-1000 ${className}`}>

      {/* Círculo de Fundo (Aura) */}
      <div
        className="parallax-layer absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-gradient-to-tr from-primary/20 via-secondary/20 to-primary/5 rounded-full blur-[60px] animate-pulse-slow"
        data-speed="-0.5"
      />

      {/* Camada Traseira: Elementos Flutuantes */}
      <div className="parallax-layer absolute top-[10%] right-[10%]" data-speed="0.8">
        <Cloud className="w-16 h-16 text-blue-200/40 fill-blue-100 animate-float" />
      </div>
      <div className="parallax-layer absolute bottom-[20%] left-[10%]" data-speed="0.6">
        <Cloud className="w-20 h-20 text-blue-200/30 fill-blue-100 animate-float-slow" />
      </div>

      {/* Camada Central: Personagens/Elementos */}
      {/* Aqui simulamos o "Pet 3D" com composição de imagens/ícones em camadas */}
      <div className="parallax-layer relative z-10" data-speed="1.5" data-rotate="-2">
        <div className="relative w-64 h-64 lg:w-80 lg:h-80 bg-white/10 backdrop-blur-sm border border-white/30 rounded-[3rem] shadow-2xl flex items-center justify-center transform transition-transform hover:scale-105 duration-500">

          {/* Ícone Gigante Central (Representando o Pet) */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            <PawPrint className="w-40 h-40 text-primary drop-shadow-lg relative z-10" />

            {/* Acessórios do Pet */}
            <div className="absolute -top-6 -right-6 bg-white p-3 rounded-2xl shadow-lg animate-bounce-soft">
              <Heart className="w-8 h-8 text-red-500 fill-red-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-lg animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            </div>
          </div>

        </div>
      </div>

      {/* Camada Frontal: Partículas */}
      <div className="parallax-layer absolute top-[30%] left-[20%] z-20" data-speed="2.5">
        <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
      </div>
      <div className="parallax-layer absolute bottom-[30%] right-[20%] z-20" data-speed="3">
        <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
      </div>

      {/* Badge Flutuante */}
      <div className="parallax-layer absolute bottom-10 right-0 lg:right-10 z-30" data-speed="4">
        <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-xl border border-primary/10 flex items-center gap-3 animate-float-slow">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="font-bold text-foreground/80 text-sm">Disponível Agora</span>
        </div>
      </div>

    </div>
  );
}

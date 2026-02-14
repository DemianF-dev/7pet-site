import React, { useEffect, useState } from 'react';
import { PawPrint, Sparkles } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
    petMode: boolean;
    setPetMode: (mode: boolean) => void;
    scrollProgress: number;
    handleLogoClick: () => void;
    showEasterEgg: boolean;
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
    refs: {
        heroRef: React.RefObject<HTMLDivElement | null>;
        servicesRef: React.RefObject<HTMLDivElement | null>;
        aboutRef: React.RefObject<HTMLDivElement | null>;
        processRef: React.RefObject<HTMLDivElement | null>;
        testimonialsRef: React.RefObject<HTMLDivElement | null>;
        statsRef: React.RefObject<HTMLDivElement | null>;
    };
}

export function Layout({
    children,
    petMode,
    setPetMode,
    scrollProgress,
    handleLogoClick,
    showEasterEgg,
    scrollToSection,
    refs
}: LayoutProps) {
    const [taps, setTaps] = useState<{ id: number; x: number; y: number }[]>([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [confetti, setConfetti] = useState<{ id: number; x: number; y: number; color: string; rotation: number }[]>([]);

    // Efeito de clique (Patinhas onde clica)
    useEffect(() => {
        const handleGlobalClick = (e: MouseEvent) => {
            const id = Date.now();
            setTaps(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
            setTimeout(() => {
                setTaps(prev => prev.filter(t => t.id !== id));
            }, 800);
        };

        window.addEventListener('click', handleGlobalClick);
        return () => window.removeEventListener('click', handleGlobalClick);
    }, []);

    // Efeito de Confete ao ativar o PetMode
    useEffect(() => {
        if (petMode) {
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
            const newConfetti = Array.from({ length: 50 }).map((_, i) => ({
                id: i,
                x: Math.random() * window.innerWidth,
                y: -Math.random() * window.innerHeight, // Começa acima da tela
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360
            }));
            setConfetti(newConfetti);

            // Limpa confetes após a animação
            setTimeout(() => setConfetti([]), 5000);
        }
    }, [petMode]);

    return (
        <div className={`min-h-screen bg-background text-foreground transition-colors duration-500 ${petMode ? 'pet-theme cursor-none' : ''}`}>
            {/* Custom Cursor for Pet Mode */}
            {petMode && (
                <style>{`
                    body { cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="%23FF6B6B" stroke="white" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>') 16 16, auto !important; }
                    a, button { cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="%234ECDC4" stroke="white" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>') 16 16, pointer !important; }
                `}</style>
            )}

            {/* Confetti Explosion */}
            {confetti.map((c) => (
                <div
                    key={c.id}
                    className="fixed z-[100] w-4 h-4 rounded-full animate-fall"
                    style={{
                        left: c.x,
                        top: c.y,
                        backgroundColor: c.color,
                        transform: `rotate(${c.rotation}deg)`,
                        animationDuration: `${2 + Math.random() * 3}s` // Duração aleatória de queda
                    }}
                />
            ))}

            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Patinhas flutuantes aleatórias */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute opacity-[0.03] animate-float-random"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 1.5}s`,
                            transform: `scale(${0.5 + Math.random()})`
                        }}
                    >
                        <PawPrint className="w-12 h-12" />
                    </div>
                ))}
            </div>

            <Navbar
                scrollProgress={scrollProgress}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                handleLogoClick={handleLogoClick}
                scrollToSection={scrollToSection}
                refs={refs}
            />

            <main className="relative z-10 pt-20">
                {children}
            </main>

            <Footer
                petMode={petMode}
                setPetMode={setPetMode}
                scrollToSection={scrollToSection}
                heroRef={refs.heroRef}
                aboutRef={refs.aboutRef}
            />

            {/* Tap-to-Paw Effect */}
            {taps.map(tap => (
                <div
                    key={tap.id}
                    className="fixed pointer-events-none z-50 animate-tap-paw"
                    style={{ left: tap.x - 12, top: tap.y - 12 }}
                >
                    <PawPrint className="w-6 h-6 text-primary/40 fill-primary/20" />
                </div>
            ))}

            {/* Easter Egg Modal */}
            {showEasterEgg && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center animate-bounce-in border-4 border-primary">
                        <Sparkles className="w-16 h-16 text-primary mx-auto mb-4 animate-spin" />
                        <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
                            Você encontrou um Easter Egg!
                        </h3>
                        <p className="text-foreground/60 font-body">
                            A 7Pet ama seus pets! Use o cupom <span className="text-primary font-bold">7PETLOVE</span> para 10% de desconto!
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

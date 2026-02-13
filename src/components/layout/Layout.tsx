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
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    refs: {
        heroRef: React.RefObject<HTMLDivElement>;
        servicesRef: React.RefObject<HTMLDivElement>;
        aboutRef: React.RefObject<HTMLDivElement>;
        processRef: React.RefObject<HTMLDivElement>;
        testimonialsRef: React.RefObject<HTMLDivElement>;
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

    return (
        <div className={`min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-500 ${petMode ? 'pet-theme' : ''}`}>
            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Adiciona patinhas flutuantes aleatórias */}
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

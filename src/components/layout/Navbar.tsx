import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PawPrint, MessageCircle, Sparkles } from 'lucide-react';

interface NavbarProps {
    scrollProgress: number;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    handleLogoClick: () => void;
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
    refs: {
        heroRef: React.RefObject<HTMLDivElement | null>;
        servicesRef: React.RefObject<HTMLDivElement | null>;
        aboutRef: React.RefObject<HTMLDivElement | null>;
        processRef: React.RefObject<HTMLDivElement | null>;
        testimonialsRef: React.RefObject<HTMLDivElement | null>;
    };
}

export function Navbar({
    scrollProgress,
    isMenuOpen,
    setIsMenuOpen,
    handleLogoClick,
    scrollToSection,
    refs
}: NavbarProps) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (section: keyof typeof refs) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: section } });
        } else {
            scrollToSection(refs[section]);
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-background/60 backdrop-blur-xl border-b border-primary/10 shadow-sm animate-slide-down">
            {/* Scroll Progress Pet */}
            <div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
            >
                <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2">
                    <PawPrint className="w-4 h-4 text-primary animate-float-paw fill-primary" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link
                        to="/"
                        className="flex items-center gap-2 cursor-pointer group active:scale-95 transition-transform"
                        aria-label="Ir para a página inicial"
                        onClick={(e) => {
                            if (location.pathname === '/') {
                                e.preventDefault();
                                scrollToSection(refs.heroRef);
                            }
                            handleLogoClick();
                        }}
                    >
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center group-hover:rotate-12 transition-all shadow-sparkle">
                            <span className="text-white font-bold text-lg sm:text-xl relative z-10">7</span>
                            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-secondary animate-pulse" />
                        </div>
                        <span className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Luckiest Guy, cursive' }}>
                            7Pet
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8" role="navigation">
                        <button onClick={() => handleNavClick('heroRef')} className="text-foreground/80 hover:text-primary transition-colors font-semibold nav-link font-heading active:scale-90" aria-label="Navegar para Home">Home</button>
                        <button onClick={() => handleNavClick('servicesRef')} className="text-foreground/80 hover:text-primary transition-colors font-semibold nav-link font-heading active:scale-90" aria-label="Navegar para Serviços">Serviços</button>
                        <button onClick={() => handleNavClick('aboutRef')} className="text-foreground/80 hover:text-primary transition-colors font-semibold nav-link font-heading active:scale-90" aria-label="Navegar para Quem Somos">Quem Somos</button>
                        <button onClick={() => handleNavClick('processRef')} className="text-foreground/80 hover:text-primary transition-colors font-semibold nav-link font-heading active:scale-90" aria-label="Navegar para Como Funciona">Como Funciona</button>
                        <button onClick={() => handleNavClick('testimonialsRef')} className="text-foreground/80 hover:text-primary transition-colors font-semibold nav-link font-heading active:scale-90" aria-label="Navegar para Depoimentos">Depoimentos</button>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://wa.me/5511934823781"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25d366] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#128c7e] transition-all active:scale-95 shadow-lg shadow-green-500/20 text-sm sm:text-base animate-pulse-glow"
                            aria-label="Falar conosco no WhatsApp"
                        >
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                            <span>WhatsApp</span>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-foreground active:scale-90"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                            aria-expanded={isMenuOpen}
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span className={`h-1 w-full bg-primary rounded-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`h-1 w-full bg-primary rounded-full transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`h-1 w-full bg-primary rounded-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <div className={`lg:hidden fixed inset-x-0 top-20 bg-background/95 backdrop-blur-xl border-b border-primary/10 overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 flex flex-col gap-4" role="menu">
                    <button onClick={() => handleNavClick('heroRef')} className="text-left text-lg font-bold font-heading py-2 border-b border-primary/5 active:translate-x-2 transition-transform" role="menuitem">Home</button>
                    <button onClick={() => handleNavClick('servicesRef')} className="text-left text-lg font-bold font-heading py-2 border-b border-primary/5 active:translate-x-2 transition-transform" role="menuitem">Serviços</button>
                    <button onClick={() => handleNavClick('aboutRef')} className="text-left text-lg font-bold font-heading py-2 border-b border-primary/5 active:translate-x-2 transition-transform" role="menuitem">Quem Somos</button>
                    <button onClick={() => handleNavClick('processRef')} className="text-left text-lg font-bold font-heading py-2 border-b border-primary/5 active:translate-x-2 transition-transform" role="menuitem">Como Funciona</button>
                    <button onClick={() => handleNavClick('testimonialsRef')} className="text-left text-lg font-bold font-heading py-2 active:translate-x-2 transition-transform" role="menuitem">Depoimentos</button>
                </div>
            </div>
        </nav>
    );
}

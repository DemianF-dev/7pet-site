import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MessageCircle, Heart, PawPrint, Mail, ExternalLink, Sparkles, Send, ArrowRight, Star } from 'lucide-react';

interface FooterProps {
    petMode: boolean;
    setPetMode: (mode: boolean) => void;
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
    heroRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
}

export function Footer({ petMode, setPetMode, scrollToSection, heroRef, aboutRef }: FooterProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (ref: React.RefObject<HTMLDivElement | null>, section?: string) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: section } });
        } else {
            scrollToSection(ref);
        }
    };

    return (
        <footer className="bg-foreground text-background py-24 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />
            <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paws.png')]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div
                            className="flex items-center gap-3 group cursor-pointer active:scale-95 transition-transform"
                            onClick={() => handleNavClick(heroRef, 'heroRef')}
                        >
                            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all shadow-2xl shadow-primary/20">
                                <span className="text-white font-bold text-2xl">7</span>
                                <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-secondary animate-pulse" />
                            </div>
                            <span className="text-3xl font-bold font-heading tracking-tight" style={{ fontFamily: 'Luckiest Guy, cursive' }}>
                                7Pet
                            </span>
                        </div>
                        <p className="text-background/60 text-lg font-body leading-relaxed border-l-2 border-primary/20 pl-6">
                            Redefinindo o padrão de cuidado e transporte pet com amor, tecnologia e transparência total.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "https://facebook.com/7pet.face", color: "hover:bg-blue-600" },
                                { icon: Instagram, href: "https://www.instagram.com/7pet.insta", color: "hover:bg-pink-600" },
                                { icon: Twitter, href: "https://twitter.com/setpetevc", color: "hover:bg-sky-500" },
                                { icon: Send, href: "https://t.me/tele7pet", color: "hover:bg-blue-400" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 bg-background/5 rounded-xl flex items-center justify-center transition-all duration-500 border border-background/10 hover:border-transparent hover:-translate-y-2 ${social.color} hover:shadow-xl`}
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 font-heading text-primary inline-flex items-center gap-2">
                            Acesso Rápido <ArrowRight className="w-4 h-4 opacity-50" />
                        </h4>
                        <ul className="space-y-4 font-body">
                            <li className="flex flex-col gap-4">
                                <button
                                    onClick={() => handleNavClick(aboutRef, 'aboutRef')}
                                    className="text-background/50 hover:text-white transition-all flex items-center gap-2 group text-left"
                                >
                                    <PawPrint className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                    <span>Quem Somos</span>
                                </button>
                                {[
                                    { label: "Nossos Diferenciais", to: "/diferenciais" },
                                    { label: "Perguntas Frequentes", to: "/faq" },
                                    { label: "Seja um Parceiro", to: "/parceiros" },
                                    { label: "Blog & Notícias", href: "https://7pet.com.br/blog/" }
                                ].map((link, i) => (
                                    <div key={i}>
                                        <div key={i}>
                                            {link.to ? (
                                                <Link
                                                    to={link.to}
                                                    className="text-background/50 hover:text-white transition-all flex items-center gap-2 group"
                                                >
                                                    <PawPrint className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                    <span>{link.label}</span>
                                                </Link>
                                            ) : link.label === "Blog & Notícias" ? (
                                                <Link
                                                    to="/blog"
                                                    className="text-background/50 hover:text-white transition-all flex items-center gap-2 group"
                                                >
                                                    <PawPrint className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                    <span>{link.label}</span>
                                                </Link>
                                            ) : (
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-background/50 hover:text-white transition-all flex items-center gap-2 group"
                                                >
                                                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                                                    <span>{link.label}</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Support */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 font-heading text-primary">Atendimento</h4>
                        <div className="space-y-6">
                            <a href="https://wa.me/5511934823781" className="group block p-4 bg-background/5 rounded-2xl border border-background/10 hover:border-primary/30 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <MessageCircle className="w-5 h-5 text-primary group-hover:text-white" />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-background/40 font-bold mb-1">WhatsApp Suporte</span>
                                        <span className="block font-bold text-background/90 font-body">(11) 93482-3781</span>
                                    </div>
                                </div>
                            </a>
                            <a href="mailto:adm@7pet.com.br" className="group block p-4 bg-background/5 rounded-2xl border border-background/10 hover:border-secondary/30 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                                        <Mail className="w-5 h-5 text-secondary group-hover:text-white" />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-background/40 font-bold mb-1">E-mail Administrativo</span>
                                        <span className="block font-bold text-background/90 font-body">adm@7pet.com.br</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Trust / Badge Column */}
                    <div className="flex flex-col items-center lg:items-end justify-center">
                        <div className="relative group perspective-1000">
                            <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-full flex flex-col items-center justify-center text-center p-6 shadow-2xl animate-float-slow group-hover:rotate-y-12 transition-transform">
                                <Star className="w-10 h-10 text-white fill-white mb-2 animate-spin-slow" />
                                <span className="text-white font-bold leading-tight font-heading">
                                    Serviço<br />5 Estrelas<br />No Google
                                </span>
                                <div className="absolute -bottom-2 -right-2 bg-white text-primary p-3 rounded-full shadow-lg border-4 border-foreground">
                                    <Heart className="w-6 h-6 fill-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left space-y-2">
                        <p className="text-background/30 text-xs font-body uppercase tracking-[0.2em]">
                            © 2020 - {new Date().getFullYear()} SetPet | Grupo AtivaMente
                        </p>
                        <p className="text-background/20 text-[10px] font-body">
                            CNPJ: 37.975.401/0001-77 | Todos os direitos reservados.
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        {/* Secret Mode Toggle Premium */}
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] text-background/20 font-bold uppercase tracking-widest hidden sm:block">Easter Egg</span>
                            <button
                                className={`group relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ${petMode ? 'bg-primary shadow-sparkle scale-110 rotate-12' : 'bg-background/5 grayscale opacity-20 hover:opacity-100 hover:grayscale-0'}`}
                                onClick={() => setPetMode(!petMode)}
                                aria-label="Toggle Pet Mode"
                            >
                                <Heart className={`w-7 h-7 transition-all duration-500 ${petMode ? 'text-white fill-white animate-pulse' : 'text-background group-hover:scale-125'}`} />
                                {petMode && <Sparkles className="absolute -top-3 -right-3 w-6 h-6 text-yellow-300 animate-spin-slow" />}
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-6 text-[10px] text-background/30 font-bold uppercase tracking-widest">
                        <a href="https://7pet.com.br/codigoconsumidor/" className="hover:text-primary transition-colors">CDC</a>
                        <a href="https://7pet.com.br/DefesaDosAnimais/" className="hover:text-primary transition-colors">Proteção</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
                    </div>
                </div>
            </div>

            {/* Smooth Scroll Up Button - Simplified for footer integration */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-10 flex flex-col items-center">
                <span className="text-[8px] uppercase font-bold tracking-[0.5em] mb-2">Topo</span>
                <div className="w-4 h-8 border border-background rounded-full flex justify-center pt-1">
                    <div className="w-1 h-1 bg-background rounded-full animate-bounce" />
                </div>
            </div>
        </footer>
    );
}

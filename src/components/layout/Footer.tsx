import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
    petMode: boolean;
    setPetMode: (mode: boolean) => void;
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
    heroRef: React.RefObject<HTMLDivElement | null>;
}

export function Footer({ petMode, setPetMode, scrollToSection, heroRef }: FooterProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBrandClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            scrollToSection(heroRef);
        }
    };

    return (
        <footer className="bg-foreground text-background py-16 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="animate-fade-in-up">
                        <div className="flex items-center gap-2 mb-6 group cursor-pointer" onClick={handleBrandClick}>
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <span className="text-white font-bold text-xl">7</span>
                            </div>
                            <span className="text-2xl font-bold font-heading">
                                7Pet
                            </span>
                        </div>
                        <p className="text-background/60 mb-6 font-body">
                            Transportes e Tudo para Pets. Cuidamos do seu melhor amigo com amor, segurança e diversão!
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "https://facebook.com/7pet.face", label: "Facebook" },
                                { icon: Instagram, href: "https://www.instagram.com/7pet.insta", label: "Instagram" },
                                { icon: Twitter, href: "https://twitter.com/setpetevc", label: "Twitter" },
                                { icon: MessageCircle, href: "https://t.me/tele7pet", label: "Telegram" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                                    aria-label={`Visite nosso ${social.label}`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <h4 className="text-lg font-bold mb-6 font-heading text-primary">Áreas do Site</h4>
                        <ul className="space-y-3 font-body">
                            {[
                                { label: "Seja Nosso Parceiro", to: "/parceiros" },
                                { label: "Diferenciais", to: "/diferenciais" },
                                { label: "Quem Somos", to: "/sobre" },
                                { label: "Perguntas Frequentes", to: "/faq" },
                                { label: "Marketing", href: "https://7pet.com.br/marketing/" }
                            ].map((link, i) => (
                                <li key={i}>
                                    {link.to ? (
                                        <Link to={link.to} className="text-background/60 hover:text-secondary transition-colors inline-block hover:translate-x-1 transition-transform" aria-label={`Ir para ${link.label}`}>
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a href={link.href} className="text-background/60 hover:text-secondary transition-colors inline-block hover:translate-x-1 transition-transform" aria-label={`Ir para ${link.label}`}>
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h4 className="text-lg font-bold mb-6 font-heading text-primary">Relacionamento</h4>
                        <ul className="space-y-3 font-body">
                            {[
                                { label: "Petshop The Pet", href: "https://7pet.com.br/lojathepetby7pet/home/" },
                                { label: "Hotel Special Pets", href: "https://7pet.com.br/hsp/HotelSpecialPets/" },
                                { label: "7Pet Corp.", href: "https://7pet.com.br/corp/" },
                                { label: "Vem 7Pet", href: "https://7pet.com.br/vem7pet/" },
                                { label: "Promos Para Pets", href: "https://7pet.com.br/promosprapets/" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="text-background/60 hover:text-secondary transition-colors inline-block hover:translate-x-1 transition-transform" aria-label={`Acessar ${link.label}`}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <h4 className="text-lg font-bold mb-6 font-heading text-primary">Assuntos Relevantes</h4>
                        <ul className="space-y-3 font-body">
                            {[
                                { label: "Código de Defesa do Consumidor", href: "https://7pet.com.br/codigoconsumidor/" },
                                { label: "Defesa dos Animais", href: "https://7pet.com.br/DefesaDosAnimais/" },
                                { label: "Vídeos e Fotos 7Pet", href: "https://7pet.com.br/Videos/" },
                                { label: "Blog 7Pet", href: "https://7pet.com.br/blog/" },
                                { label: "eBooks Gratuitos", href: "https://7pet.com.br/ebook1/" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="text-background/60 hover:text-secondary transition-colors inline-block hover:translate-x-1 transition-transform" aria-label={`Ler sobre ${link.label}`}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-background/40 text-sm mb-1 font-body">
                            © 2020 - {new Date().getFullYear()} Todos os direitos reservados.
                        </p>
                        <p className="text-background/30 text-xs font-body">
                            SetPet - CNPJ: 37.975.401/0001-77 | Grupo AtivaMente
                        </p>
                    </div>

                    {/* Secret Pet Mode Toggle */}
                    <button
                        className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 active:scale-75 ${petMode ? 'bg-primary shadow-sparkle scale-110' : 'bg-background/5 grayscale opacity-20 hover:opacity-100 hover:grayscale-0'}`}
                        onClick={() => setPetMode(!petMode)}
                        aria-label={petMode ? "Desativar Modo Pet" : "Ativar Modo Pet"}
                        title="Secret Pet Mode"
                    >
                        <Heart className={`w-6 h-6 ${petMode ? 'text-white fill-white animate-pulse' : 'text-background'}`} />
                    </button>

                    <div className="text-center md:text-right">
                        <p className="text-background/40 text-xs font-body">
                            Em conformidade com a LGPD/2020.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

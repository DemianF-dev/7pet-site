import { useState, useEffect } from 'react';
import {
    PawPrint,
    Heart,
    Sparkles,
    Car,
    Star,
    Leaf,
    ArrowRight,
    TreePine,
    Package,
    Home as HomeIcon,
    Calendar,
    Phone,
    CheckCircle,
    Mail,
    MessageCircle,
    Bone
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimatedCounter } from '../components/AnimatedCounter';

interface HomeProps {
    petMode: boolean;
    counters: { years: number; trips: number; clients: number };
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

export function Home({
    petMode,
    counters,
    scrollToSection,
    refs
}: HomeProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isSloganHovered, setIsSloganHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <SEO
                title="Transporte e Tudo para Pets | São Paulo & Osasco"
                description="A 7Pet oferece transporte premium pet, táxi dog, passeios e cuidados integrados. Cuidamos do seu melhor amigo com amor e segurança. Peça seu orçamento!"
            />
            {/* HERO SECTION - Impactante e Fluido */}
            <section id="hero" ref={refs.heroRef} className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#fdf8f1]">
                {/* Background Animado */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[10%] left-[5%] animate-gentle-float" style={{ animationDelay: '0s' }}>
                        <PawPrint className="w-20 h-20 text-[#ff7a3d]/5 rotate-12" />
                    </div>
                    <div className="absolute top-[35%] right-[10%] animate-gentle-float" style={{ animationDelay: '1s' }}>
                        <PawPrint className="w-24 h-24 text-[#ff7a3d]/5 -rotate-12" />
                    </div>
                    <div className="absolute bottom-[15%] left-[15%] animate-gentle-float" style={{ animationDelay: '2s' }}>
                        <PawPrint className="w-16 h-16 text-[#ff7a3d]/5 rotate-45" />
                    </div>
                    <div className="absolute bottom-[25%] right-[25%] animate-gentle-float" style={{ animationDelay: '1.5s' }}>
                        <Sparkles className="w-12 h-12 text-yellow-400/20" />
                    </div>
                    <div className="absolute top-[60%] left-[8%] animate-gentle-float" style={{ animationDelay: '0.5s' }}>
                        <Heart className="w-8 h-8 text-red-400/10 fill-red-400/10" />
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side: Content com Animações Sequenciais */}
                        <div className="text-center lg:text-left space-y-8">
                            {/* Badge Premium */}
                            <div className="animate-reveal-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
                                <div className="inline-flex items-center gap-2 bg-[#ff7a3d]/10 px-4 py-2 rounded-full border border-[#ff7a3d]/20">
                                    <Sparkles className="w-4 h-4 text-[#ff7a3d] animate-pulse" />
                                    <span className="text-sm font-semibold text-[#ff7a3d]">Transporte Premium para Pets</span>
                                </div>
                            </div>

                            {/* Título Principal */}
                            <div className="animate-reveal-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                                <div
                                    className="relative inline-block cursor-default group"
                                    onMouseEnter={() => setIsSloganHovered(true)}
                                    onMouseLeave={() => setIsSloganHovered(false)}
                                >
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#4a2c2a] leading-[1.1] font-heading tracking-tight">
                                        <span className="inline-block hover:scale-105 transition-transform duration-300">Transporte</span> <br />
                                        <span className="text-[#ff7a3d] inline-block hover:scale-105 transition-transform duration-300">e Tudo</span>{' '}
                                        <span className="inline-block hover:scale-105 transition-transform duration-300">para</span>{' '}
                                        <span className="text-[#ff7a3d] inline-block hover:scale-105 transition-transform duration-300">Pets</span>
                                    </h1>

                                    {/* Ícones flutuantes no hover */}
                                    <div className={`absolute -top-8 left-1/2 -translate-x-1/2 flex gap-3 transition-all duration-500 ${isSloganHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                                        <Heart className="w-6 h-6 text-red-500 fill-red-500 animate-bounce" style={{ animationDelay: '0s' }} />
                                        <PawPrint className="w-6 h-6 text-[#ff7a3d] fill-[#ff7a3d] animate-bounce" style={{ animationDelay: '0.1s' }} />
                                        <Sparkles className="w-6 h-6 text-yellow-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Descrição */}
                            <p className="text-xl sm:text-2xl text-[#4a2c2a]/80 max-w-xl mx-auto lg:mx-0 font-body leading-relaxed animate-reveal-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                                Cuidamos do seu melhor amigo com{' '}
                                <span className="text-[#ff7a3d] font-bold relative inline-block group">
                                    amor
                                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#ff7a3d] rounded-full transition-all duration-300 group-hover:w-full" />
                                </span>,{' '}
                                <span className="text-[#ff7a3d] font-bold relative inline-block group">
                                    segurança
                                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#ff7a3d] rounded-full transition-all duration-300 group-hover:w-full" />
                                </span>{' '}
                                e{' '}
                                <span className="text-[#ff7a3d] font-bold relative inline-block group">
                                    diversão
                                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#ff7a3d] rounded-full transition-all duration-300 group-hover:w-full" />
                                </span>!
                            </p>

                            {/* Botões com Efeitos */}
                            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-reveal-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                                <a
                                    href="https://wa.me/5511934823781"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-[#ff7a3d] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 overflow-hidden shadow-xl shadow-[#ff7a3d]/30 hover:shadow-2xl hover:shadow-[#ff7a3d]/40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                                >
                                    <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                                    <Car className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                                    <span>Agende um Passeio</span>
                                </a>
                                <button
                                    onClick={() => scrollToSection(refs.servicesRef)}
                                    className="group bg-white text-[#4a2c2a] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 border-2 border-[#4a2c2a]/10 hover:border-[#ff7a3d]/30 hover:bg-[#fff8f3] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-lg hover:shadow-xl"
                                >
                                    <Star className="w-6 h-6 text-[#ff7a3d] fill-[#ff7a3d] group-hover:rotate-180 transition-transform duration-500" />
                                    <span>Nossos Serviços</span>
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex items-center justify-center lg:justify-start gap-6 text-[#4a2c2a]/60 text-sm animate-reveal-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
                                <div className="flex items-center gap-2 group cursor-default">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="group-hover:text-[#4a2c2a] transition-colors">Seguro Pet incluso</span>
                                </div>
                                <div className="flex items-center gap-2 group cursor-default">
                                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                                    </div>
                                    <span className="group-hover:text-[#4a2c2a] transition-colors">+5.000 pets atendidos</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Image Composition com Animações */}
                        <div className="relative h-[500px] lg:h-[600px] w-full max-w-[550px] mx-auto lg:ml-auto mt-12 lg:mt-0">
                            <div className="relative w-full h-full">
                                {/* Top Dog (White) - Entrada da direita */}
                                <div
                                    className="absolute top-0 right-0 w-[200px] sm:w-[240px] lg:w-[280px] aspect-[4/5] z-10 rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 border-white shadow-2xl cursor-pointer hover:scale-105 hover:rotate-3 hover:shadow-3xl transition-all duration-500 animate-fade-in-right group"
                                    style={{
                                        animationDelay: '0.3s',
                                        opacity: 0,
                                        transform: `translate(${(mousePos.x - window.innerWidth / 2) * 0.02}px, ${(mousePos.y - window.innerHeight / 2) * 0.02}px) rotate(6deg)`,
                                    }}
                                >
                                    <img src="/hero-dog.png" alt="Cachorro" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Center Cat - Entrada da esquerda */}
                                <div
                                    className="absolute top-[20%] left-0 w-[190px] sm:w-[230px] lg:w-[270px] aspect-[4/5] z-30 rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 border-white shadow-2xl cursor-pointer hover:scale-105 hover:-rotate-2 hover:shadow-3xl transition-all duration-500 animate-fade-in-left group"
                                    style={{
                                        animationDelay: '0.5s',
                                        opacity: 0,
                                        transform: `translate(${(mousePos.x - window.innerWidth / 2) * -0.015}px, ${(mousePos.y - window.innerHeight / 2) * -0.015}px) rotate(-3deg)`,
                                    }}
                                >
                                    <img src="/hero-cat.png" alt="Gato" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Badge Amor com animação */}
                                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl flex items-center gap-2 z-40 border border-primary/5 animate-pop-in hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '0.8s' }}>
                                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                                        <span className="text-sm font-bold text-[#4a2c2a]">Amor</span>
                                    </div>
                                </div>

                                {/* Bottom Dog - Entrada de baixo */}
                                <div
                                    className="absolute bottom-0 right-[10%] w-[180px] sm:w-[210px] lg:w-[250px] aspect-[4/5] z-20 rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 border-white shadow-2xl cursor-pointer hover:scale-105 hover:rotate-2 hover:shadow-3xl transition-all duration-500 animate-slide-up-bounce group"
                                    style={{
                                        animationDelay: '0.7s',
                                        opacity: 0,
                                        transform: `translate(${(mousePos.x - window.innerWidth / 2) * 0.025}px, ${(mousePos.y - window.innerHeight / 2) * 0.025}px) rotate(-6deg)`,
                                    }}
                                >
                                    <img src="/hero-dog2.png" alt="Cachorro Golden" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Badge 5 Estrelas com animação */}
                                    <div className="absolute -left-4 bottom-1/4 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl flex items-center gap-2 z-40 border border-primary/5 animate-pop-in hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '1s' }}>
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 animate-spin" style={{ animationDuration: '3s' }} />
                                        <span className="text-sm font-bold text-[#4a2c2a]">5 Estrelas</span>
                                    </div>
                                </div>

                                {/* Elementos Decorativos Animados */}
                                <div className="absolute top-1/2 -right-8 animate-gentle-float" style={{ animationDelay: '0.5s' }}>
                                    <Bone className="w-12 h-12 text-[#ff7a3d]/20 rotate-45 hover:rotate-90 transition-transform duration-500 cursor-pointer" />
                                </div>
                                <div className="absolute -top-10 left-10 animate-gentle-float" style={{ animationDelay: '1s' }}>
                                    <PawPrint className="w-16 h-16 text-[#ff7a3d]/15 rotate-12" />
                                </div>
                                <div className="absolute bottom-20 -left-4 animate-gentle-float" style={{ animationDelay: '1.5s' }}>
                                    <Sparkles className="w-8 h-8 text-yellow-400/30" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={refs.statsRef} className="py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <PawPrint className="absolute top-[10%] left-[5%] w-24 h-24 rotate-12 animate-float-slow" />
                    <PawPrint className="absolute bottom-[20%] right-[10%] w-32 h-32 -rotate-12 animate-float" />
                    <Bone className="absolute top-[40%] left-[40%] w-16 h-16 rotate-45 opacity-30 animate-float" />
                    <PawPrint className="absolute top-[40%] right-[20%] w-16 h-16 rotate-45 opacity-50 animate-bounce-soft" />
                    <PawPrint className="absolute bottom-[30%] left-[15%] w-20 h-20 -rotate-45 opacity-40 animate-float-slow" />
                    <Bone className="absolute bottom-[10%] left-[45%] w-12 h-12 -rotate-12 opacity-40 animate-pulse" />
                    <Sparkles className="absolute top-[15%] right-[30%] w-12 h-12 text-white animate-pulse" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
                            <Sparkles className="w-5 h-5 text-white" />
                            <span className="text-white font-bold font-body">Pioneirismo e Dedicação</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-heading drop-shadow-md">
                            Nossa Trajetória em Números
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 text-center animate-fade-in-up border border-white/20 hover:bg-white/20 transition-all duration-500 group" style={{ animationDelay: '0.1s' }}>
                            <div className="text-6xl lg:text-7xl font-bold text-white mb-3 font-heading tabular-nums group-hover:scale-110 transition-transform duration-500">
                                +<AnimatedCounter end={counters.years} duration={2000} />
                            </div>
                            <p className="text-white/90 text-xl font-bold font-body">Anos de Empresa</p>
                            <div className="w-12 h-1 bg-white/30 mx-auto mt-4 rounded-full" />
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 text-center animate-fade-in-up border border-white/20 hover:bg-white/20 transition-all duration-500 group" style={{ animationDelay: '0.2s' }}>
                            <div className="text-6xl lg:text-7xl font-bold text-white mb-3 font-heading tabular-nums group-hover:scale-110 transition-transform duration-500">
                                +<AnimatedCounter end={counters.trips} duration={2500} />
                            </div>
                            <p className="text-white/90 text-xl font-bold font-body">Viagens Realizadas</p>
                            <p className="text-white/60 text-sm mt-2 font-body italic">Com nossos AUmigos</p>
                            <div className="w-12 h-1 bg-white/30 mx-auto mt-4 rounded-full" />
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 text-center animate-fade-in-up border border-white/20 hover:bg-white/20 transition-all duration-500 group" style={{ animationDelay: '0.3s' }}>
                            <div className="text-6xl lg:text-7xl font-bold text-white mb-3 font-heading tabular-nums group-hover:scale-110 transition-transform duration-500">
                                +<AnimatedCounter end={counters.clients} duration={2000} />
                            </div>
                            <p className="text-white/90 text-xl font-bold font-body">Clientes Atendidos</p>
                            <p className="text-white/60 text-sm mt-2 font-body italic">Confiança e Segurança</p>
                            <div className="w-12 h-1 bg-white/30 mx-auto mt-4 rounded-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Eco Friendly Section */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 animate-fade-in-up border border-primary/5 shadow-xl shadow-primary/5">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
                                <Leaf className="w-5 h-5 text-green-600" />
                                <span className="text-green-700 font-bold font-body">Sustentabilidade</span>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-heading">
                                Nós Somos EcoFriendly
                            </h3>
                            <p className="text-foreground/60 text-lg mb-6 font-body leading-relaxed">
                                A 7Pet neutraliza a emissão de CO² de todas as suas corridas.
                                Vem ser mais sustentável e cuidar do planeta com a gente! 🌍 ✨
                            </p>
                            <button className="bg-green-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-green-600 transition-all hover:scale-105 active:scale-95 mx-auto lg:mx-0 shadow-lg shadow-green-500/20">
                                Saiba Mais
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="relative animate-float">
                                <div className="w-48 h-48 bg-green-50 rounded-full flex items-center justify-center border-4 border-white shadow-inner">
                                    <Leaf className={`w-24 h-24 text-green-500 transition-all duration-500 ${petMode ? 'rotate-180 scale-125' : ''}`} />
                                </div>
                                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg animate-bounce-soft">
                                    <Heart className="w-6 h-6 text-green-500 fill-green-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Interativo e Animado */}
            <section id="services" ref={refs.servicesRef} className="py-20 bg-background relative overflow-hidden">
                {/* Background Decorativo */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[10%] left-[5%] animate-gentle-float opacity-30">
                        <PawPrint className="w-32 h-32 text-primary/5" />
                    </div>
                    <div className="absolute bottom-[10%] right-[5%] animate-gentle-float opacity-30" style={{ animationDelay: '2s' }}>
                        <PawPrint className="w-40 h-40 text-primary/5" />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 animate-reveal-up">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
                            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                            <span className="text-primary font-bold font-body">O que oferecemos</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
                            Nossos Serviços
                        </h2>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-body">
                            Como podemos ajudar hoje? Escolha uma das opções abaixo para realizar seu orçamento:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Car,
                                title: 'Táxi Pet',
                                desc: 'Transporte seguro e confortável para seu pet ir aonde precisar.',
                                image: '/service-taxi.jpg',
                                color: 'from-primary to-secondary',
                                bgColor: 'bg-orange-50'
                            },
                            {
                                icon: TreePine,
                                title: 'Passeios',
                                desc: 'Seu pet faz exercícios e se diverte com nossos passeadores.',
                                image: '/service-walk.jpg',
                                color: 'from-green-400 to-green-500',
                                bgColor: 'bg-green-50'
                            },
                            {
                                icon: Package,
                                title: 'Mudanças',
                                desc: 'Transporte especializado para mudanças com seu pet.',
                                image: '/service-move.jpg',
                                color: 'from-blue-400 to-blue-500',
                                bgColor: 'bg-blue-50'
                            },
                            {
                                icon: HomeIcon,
                                title: 'Hospedagem',
                                desc: 'Cuidamos do seu pet enquanto você viaja.',
                                image: '/service-host.jpg',
                                color: 'from-purple-400 to-purple-500',
                                bgColor: 'bg-purple-50'
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 animate-reveal-up border border-primary/5 cursor-pointer"
                                style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-50 transition-all duration-500`} />

                                    {/* Ícone flutuante */}
                                    <div className={`absolute top-4 right-4 ${service.bgColor} p-3 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                                        <service.icon className="w-6 h-6 text-primary group-hover:animate-bounce" />
                                    </div>

                                    {/* Overlay de hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="text-sm font-bold text-[#4a2c2a]">Ver detalhes</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 relative">
                                    {/* Linha decorativa */}
                                    <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                    <h3 className="text-xl font-bold text-foreground mb-3 font-heading group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-foreground/60 mb-6 font-body leading-relaxed">{service.desc}</p>
                                    <a
                                        href="https://wa.me/5511934823781"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group/link"
                                        aria-label={`Solicitar orçamento para ${service.title}`}
                                    >
                                        <span className="relative">
                                            Solicitar
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                                        </span>
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons Aprimorados */}
                    <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center animate-reveal-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                        <a
                            href="https://wa.me/5511934823781"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-[#25d366] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 overflow-hidden shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-1"
                            aria-label="Pedir orçamento via WhatsApp"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                            <MessageCircle className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" />
                            <span>Orçamento via WhatsApp</span>
                        </a>
                        <a
                            href="https://b24-auytd7.bitrix24.site/orcamento_23.1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-[#f6a71c] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 overflow-hidden shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
                            aria-label="Fazer orçamento online"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                            <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            <span>Orçamento Online</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Process Section - Passo a Passo Animado */}
            <section ref={refs.processRef} className="py-20 bg-white relative overflow-hidden">
                {/* Linha de conexão animada */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 hidden lg:block transform -translate-y-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 animate-reveal-up">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-primary font-bold font-body">Simples e Rápido</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
                            Como Funciona
                        </h2>
                        <p className="text-xl text-foreground/60 font-body">
                            Veja como funciona o nosso atendimento passo a passo
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Contatar',
                                desc: 'Você solicita informações ou um orçamento através de Redes Sociais, WhatsApp, Site ou Telefone.',
                                icon: Phone,
                                color: 'bg-blue-500'
                            },
                            {
                                step: '02',
                                title: 'Orçar',
                                desc: 'Recebemos a solicitação e em alguns minutos você receberá o orçamento detalhado para análise.',
                                icon: Calendar,
                                color: 'bg-green-500'
                            },
                            {
                                step: '03',
                                title: 'Aprovar',
                                desc: 'Após aprovado, agendamos com a logística a dinâmica do seu serviço com todo cuidado.',
                                icon: CheckCircle,
                                color: 'bg-orange-500'
                            },
                            {
                                step: '04',
                                title: 'Relaxar',
                                desc: 'Agora pronto! É só aproveitar a tranquilidade e todos os benefícios que a 7Pet tem a oferecer.',
                                icon: Heart,
                                color: 'bg-red-500'
                            }
                        ].map((item, index) => (
                            <div key={index} className="relative animate-reveal-up group" style={{ animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 }}>
                                <div className="bg-background/40 border border-primary/5 rounded-3xl p-8 h-full hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                                    {/* Número grande de fundo */}
                                    <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5 font-heading select-none group-hover:text-primary/10 transition-colors">
                                        {item.step}
                                    </div>

                                    {/* Badge do passo */}
                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            <item.icon className="w-8 h-8 text-white" />
                                        </div>

                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-sm font-bold text-primary/60">PASSO {item.step}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-3 font-heading group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-foreground/60 font-body leading-relaxed">{item.desc}</p>
                                    </div>

                                    {/* Indicador de hover */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </div>

                                {/* Seta de conexão */}
                                {index < 3 && (
                                    <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                                        <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <ArrowRight className="w-6 h-6 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section ref={refs.aboutRef} className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-in-left">
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                                <Sparkles className="w-5 h-5 text-primary" />
                                <span className="text-primary font-bold font-body">Prazer, 7Pet! ✨</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
                                Quem Somos
                            </h2>
                            <div className="space-y-6 text-foreground/70 text-lg font-body leading-relaxed">
                                <p>
                                    Nunca mais se preocupe com o bem-estar do seu melhor amigo! A <span className="text-primary font-bold">7Pet</span> é a solução completa para o transporte e cuidado do seu pet.
                                </p>
                                <p>
                                    Imagine estar preso no trabalho e precisar buscar seu pet no banho e tosa. A 7Pet entra em ação para garantir que ele chegue em casa com <span className="text-secondary font-bold">segurança e carinho</span>.
                                </p>
                            </div>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://7pet.com.br/SobreNossaAlma/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                                    aria-label="Conhecer a alma da 7Pet"
                                >
                                    Conheça nossa Alma
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="animate-fade-in-right relative">
                            <div className="relative w-full max-w-md mx-auto">
                                <div className={`absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse-slow ${petMode ? 'animate-sparkle opacity-40' : ''}`} />
                                <div className="relative bg-white rounded-[2.5rem] p-4 shadow-2xl border-4 border-white">
                                    <img
                                        src="/about-pets.png"
                                        alt="Cachorro e Gato da 7Pet"
                                        className="w-full rounded-[2rem] object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -top-6 -right-6 bg-primary text-white px-6 py-3 rounded-2xl shadow-xl animate-float-paw font-bold font-heading">
                                    +4 Anos de Amor
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section - Depoimentos com Carinho */}
            <section ref={refs.testimonialsRef} className="py-20 bg-background relative overflow-hidden">
                {/* Decorativos */}
                <div className="absolute top-[20%] left-[5%] animate-gentle-float opacity-20">
                    <Heart className="w-20 h-20 text-red-400 fill-red-400" />
                </div>
                <div className="absolute bottom-[20%] right-[5%] animate-gentle-float opacity-20" style={{ animationDelay: '1.5s' }}>
                    <PawPrint className="w-24 h-24 text-primary/20" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 animate-reveal-up">
                        <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6 border border-red-100">
                            <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
                            <span className="text-red-600 font-bold font-body">Depoimentos de Amor</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
                            O que dizem de nós
                        </h2>
                        <p className="text-xl text-foreground/60 font-body">
                            Amor e cuidado aprovado por quem mais importa! ❤️ 🐾
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Barbara Ettmuller',
                                pet: '/testimonial-poodle.png',
                                text: 'O atendimento foi maravilhoso do início ao fim, apenas elogios para todos e com certeza vamos nos fidelizar como clientes. OBRIGADA 7PET!',
                                date: '11/12/2020',
                                rating: 5
                            },
                            {
                                name: 'Luana',
                                pet: '/testimonial-golden.png',
                                text: 'Adorei o serviço de vocês e o motorista, já deixei anotado para quando precisar outras vezes. MUITOOOOOO OBRIGADA!!',
                                date: '30/07/2021',
                                rating: 5
                            },
                            {
                                name: 'Juliana (Tutora do Toretto)',
                                pet: '/testimonial-bulldog.png',
                                text: 'Muito Obrigada! E eu quero dizer que o atendimento de vocês é excelente! Super recomendo para todos os pais de pet.',
                                date: '11/06/2021',
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-[2rem] p-8 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 hover:-translate-y-3 animate-reveal-up relative border border-primary/5 cursor-pointer overflow-hidden"
                                style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
                            >
                                {/* Fundo gradiente no hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-background p-1 border-2 border-primary/10 group-hover:border-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                                            <img
                                                src={testimonial.pet}
                                                alt={`Pet de ${testimonial.name}`}
                                                className="w-full h-full object-cover rounded-xl"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-foreground font-heading text-lg group-hover:text-primary transition-colors">{testimonial.name}</h4>
                                            <div className="flex gap-1 mt-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -top-2 -left-2 text-6xl text-primary/10 font-heading">"</span>
                                        <p className="text-foreground/70 mb-6 font-body italic leading-relaxed text-lg relative z-10 pl-4">{testimonial.text}</p>
                                    </div>

                                    <div className="flex justify-between items-center text-sm font-body text-foreground/40 pt-4 border-t border-primary/5">
                                        <span>{testimonial.date}</span>
                                        <Heart className="w-5 h-5 text-red-400 fill-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center animate-reveal-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
                        <a
                            href="https://g.page/r/CTGdKGrH3BBbEBE/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 bg-white text-foreground px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 border-2 border-primary/10 hover:border-primary shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1"
                            aria-label="Ver avaliações no Google"
                        >
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 group-hover:rotate-12 transition-transform" />
                            <span>Ver no Google Reviews</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section - Contatos Interativos */}
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Background decorativo */}
                <div className="absolute top-[10%] left-[10%] animate-gentle-float opacity-10">
                    <Phone className="w-32 h-32 text-primary/20" />
                </div>
                <div className="absolute bottom-[10%] right-[10%] animate-gentle-float opacity-10" style={{ animationDelay: '2s' }}>
                    <Mail className="w-28 h-28 text-primary/20" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 animate-reveal-up">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
                            <Phone className="w-5 h-5 text-primary" />
                            <span className="text-primary font-bold font-body">Fale Conosco</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
                            Nossos Contatos
                        </h2>
                        <p className="text-xl text-foreground/60 font-body">
                            Onde estiver, a 7Pet está com você! 📞 ✨
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                href: 'https://wa.me/5511934823781',
                                icon: Phone,
                                title: 'Suporte Pet',
                                contact: '(11) 93482-3781',
                                color: 'bg-[#25d366]',
                                hoverColor: 'hover:bg-[#25d366]',
                                borderColor: 'border-green-500/10',
                                shadowColor: 'shadow-green-500/20'
                            },
                            {
                                href: 'https://wa.me/5511937367986',
                                icon: Phone,
                                title: 'Financeiro',
                                contact: '(11) 93736-7986',
                                color: 'bg-primary',
                                hoverColor: 'hover:bg-primary',
                                borderColor: 'border-primary/10',
                                shadowColor: 'shadow-primary/20'
                            },
                            {
                                href: 'mailto:adm@7pet.com.br',
                                icon: Mail,
                                title: 'E-mail Oficial',
                                contact: 'adm@7pet.com.br',
                                color: 'bg-foreground',
                                hoverColor: 'hover:bg-foreground',
                                borderColor: 'border-foreground/10',
                                shadowColor: 'shadow-foreground/20'
                            }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className={`group relative bg-background/40 border ${item.borderColor} rounded-[2.5rem] p-10 text-center ${item.hoverColor} hover:text-white transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-reveal-up shadow-xl ${item.shadowColor}`}
                                style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
                                aria-label={`Contatar ${item.title}`}
                            >
                                {/* Efeito de brilho no hover */}
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

                                <div className="relative z-10">
                                    <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-all duration-500 shadow-lg group-hover:scale-110 group-hover:rotate-6`}>
                                        <item.icon className="w-10 h-10 text-white group-hover:text-foreground transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 font-heading group-hover:scale-105 transition-transform">{item.title}</h3>
                                    <p className="text-foreground/60 group-hover:text-white/90 font-body text-lg">{item.contact}</p>

                                    {/* Indicador de interação */}
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="inline-flex items-center gap-2 text-sm font-semibold">
                                            Clique para conversar
                                            <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

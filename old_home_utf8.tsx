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

interface HomeProps {
    mousePos: { x: number; y: number };
    isSloganHovered: boolean;
    setIsSloganHovered: (hovered: boolean) => void;
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
    mousePos,
    isSloganHovered,
    setIsSloganHovered,
    petMode,
    counters,
    scrollToSection,
    refs
}: HomeProps) {
    return (
        <>
            <SEO
                title="Transporte e Tudo para Pets | S├úo Paulo & Osasco"
                description="A 7Pet oferece transporte premium pet, t├íxi dog, passeios e cuidados integrados. Cuidamos do seu melhor amigo com amor e seguran├ºa. Pe├ºa seu or├ºamento!"
            />
            {/* Hero Section */}
            <section ref={refs.heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left animate-fade-in-up">
                            <div
                                className="relative inline-block cursor-default group z-20"
                                onMouseEnter={() => setIsSloganHovered(true)}
                                onMouseLeave={() => setIsSloganHovered(false)}
                            >
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight font-heading">
                                    <span className="inline-block animate-bounce-in" style={{ animationDelay: '0.1s' }}>Transporte</span>{' '}
                                    <span className="inline-block text-primary animate-bounce-in" style={{ animationDelay: '0.2s' }}>e Tudo</span>{' '}
                                    <span className="inline-block animate-bounce-in" style={{ animationDelay: '0.3s' }}>para</span>{' '}
                                    <span className="inline-block text-secondary animate-bounce-in" style={{ animationDelay: '0.4s' }}>Pets</span>
                                </h1>
                                {isSloganHovered && (
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-4">
                                        <Heart className="w-6 h-6 text-red-400 animate-float fill-red-400" style={{ animationDelay: '0s' }} />
                                        <PawPrint className="w-6 h-6 text-primary animate-float fill-primary" style={{ animationDelay: '0.2s' }} />
                                        <Sparkles className="w-6 h-6 text-secondary animate-float" style={{ animationDelay: '0.4s' }} />
                                    </div>
                                )}
                            </div>
                            <p className="text-xl sm:text-2xl text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in font-body" style={{ animationDelay: '0.5s' }}>
                                Cuidamos do seu melhor amigo com <span className="text-primary font-bold">amor</span>,
                                <span className="text-secondary font-bold"> seguran├ºa</span> e
                                <span className="text-primary font-bold"> divers├úo</span>!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.7s' }}>
                                <a
                                    href="https://wa.me/5511934823781"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/30 animate-pulse-glow"
                                    aria-label="Agendar um passeio via WhatsApp"
                                >
                                    <Car className="w-6 h-6" />
                                    Agende um Passeio
                                </a>
                                <button
                                    onClick={() => scrollToSection(refs.servicesRef)}
                                    className="bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/90 transition-all hover:scale-105 active:scale-95 border-2 border-primary/20 shadow-sm"
                                    aria-label="Ver nossos servi├ºos"
                                >
                                    <Star className="w-6 h-6 text-secondary fill-secondary" />
                                    Nossos Servi├ºos
                                </button>
                            </div>
                        </div>

                        <div className="relative h-[500px] lg:h-[600px]">
                            <div
                                className="absolute top-0 right-0 w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform cursor-pointer animate-float-slow hero-image-parallax"
                                style={{
                                    transform: `translate(${(mousePos.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.02}px, ${(mousePos.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * 0.02}px)`,
                                    animationDelay: '0s'
                                }}
                            >
                                <img src="/hero-dog.png" alt="Cachorro feliz da 7Pet" className="w-full h-full object-cover" />
                            </div>
                            <div
                                className="absolute top-1/3 left-0 w-56 h-56 lg:w-72 lg:h-72 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform cursor-pointer z-10 animate-float-slow hero-image-parallax"
                                style={{
                                    transform: `translate(${(mousePos.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * -0.015}px, ${(mousePos.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * -0.015}px)`,
                                    animationDelay: '0.5s'
                                }}
                            >
                                <img src="/hero-cat.png" alt="Gato feliz da 7Pet" className="w-full h-full object-cover" />
                            </div>
                            <div
                                className="absolute bottom-0 right-1/4 w-52 h-52 lg:w-64 lg:h-64 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform cursor-pointer animate-float-slow hero-image-parallax"
                                style={{
                                    transform: `translate(${(mousePos.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.025}px, ${(mousePos.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * 0.025}px)`,
                                    animationDelay: '1s'
                                }}
                            >
                                <img src="/hero-dog2.png" alt="Cachorro golden sendo transportado" className="w-full h-full object-cover" />
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-10 left-10 bg-white px-4 py-2 rounded-full shadow-lg animate-bounce-soft">
                                <span className="flex items-center gap-2 text-sm font-semibold text-[#333]">
                                    <Heart className="w-4 h-4 text-red-500 fill-red-500" /> Amor
                                </span>
                            </div>
                            <div className="absolute bottom-20 right-0 bg-white px-4 py-2 rounded-full shadow-lg animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
                                <span className="flex items-center gap-2 text-sm font-semibold text-[#333]">
                                    <Star className="w-4 h-4 text-[#f8d346] fill-[#f8d346]" /> 5 Estrelas
                                </span>
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
                            <span className="text-white font-bold font-body">Pioneirismo e Dedica├º├úo</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-heading drop-shadow-md">
                            Nossa Trajet├│ria em N├║meros
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 text-center animate-fade-in-up border border-white/20 hover:bg-white/20 transition-all duration-500 group" style={{ animationDelay: '0.1s' }}>
                            <div className="text-6xl lg:text-7xl font-bold text-white mb-3 font-heading tabular-nums group-hover:scale-110 transition-transform duration-500">
                                +{counters.years}
                            </div>
                            <p className="text-white/90 text-xl font-bold font-body">Anos de Empresa</p>
                            <div className="w-12 h-1 bg-white/30 mx-auto mt-4 rounded-full" />
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 text-center animate-fade-in-up border border-white/20 hover:bg-white/20 transition-all duration-500 group" style={{ animationDelay: '0.2s' }}>
                            <div className="text-6xl lg:text-7xl font-bold text-white mb-3 font-heading tabular-nums group-hover:scale-110 transition-transform duration-500">
                                +{counters.trips.toLocaleString('pt-BR')}
                            </div>
                            <p className="text-white/90 text-xl font-bold font-body">Viagens Realizadas</p>
                            <p className="text-white/60 text-sm mt-2 font-body italic">Com nossos AUmigos</p>
                            <div className="w-12 h-1 bg-white/30 mx-auto mt-4 rounded-full" />
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 text-center animate-fade-in-up border border-white/20 hover:bg-white/20 transition-all duration-500 group" style={{ animationDelay: '0.3s' }}>
                            <div className="text-6xl lg:text-7xl font-bold text-white mb-3 font-heading tabular-nums group-hover:scale-110 transition-transform duration-500">
                                +{counters.clients.toLocaleString('pt-BR')}
                            </div>
                            <p className="text-white/90 text-xl font-bold font-body">Clientes Atendidos</p>
                            <p className="text-white/60 text-sm mt-2 font-body italic">Confian├ºa e Seguran├ºa</p>
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
                                N├│s Somos EcoFriendly
                            </h3>
                            <p className="text-foreground/60 text-lg mb-6 font-body leading-relaxed">
                                A 7Pet neutraliza a emiss├úo de CO┬▓ de todas as suas corridas.
                                Vem ser mais sustent├ível e cuidar do planeta com a gente! ­ƒîì Ô£¿
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

            {/* Services Section */}
            <section ref={refs.servicesRef} className="py-20 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
                            Nossos Servi├ºos
                        </h2>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-body">
                            Como podemos ajudar hoje? Escolha uma das op├º├Áes abaixo para realizar seu or├ºamento:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Car,
                                title: 'T├íxi Pet',
                                desc: 'Transporte seguro e confort├ível para seu pet ir aonde precisar.',
                                image: '/service-taxi.jpg',
                                color: 'from-primary to-secondary'
                            },
                            {
                                icon: TreePine,
                                title: 'Passeios',
                                desc: 'Seu pet faz exerc├¡cios e se diverte com nossos passeadores.',
                                image: '/service-walk.jpg',
                                color: 'from-green-400 to-green-500'
                            },
                            {
                                icon: Package,
                                title: 'Mudan├ºas',
                                desc: 'Transporte especializado para mudan├ºas com seu pet.',
                                image: '/service-move.jpg',
                                color: 'from-blue-400 to-blue-500'
                            },
                            {
                                icon: HomeIcon,
                                title: 'Hospedagem',
                                desc: 'Cuidamos do seu pet enquanto voc├¬ viaja.',
                                image: '/service-host.jpg',
                                color: 'from-purple-400 to-purple-500'
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border border-primary/5 active:scale-95"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                                    <div className={`absolute top-4 right-4 bg-white/90 p-3 rounded-xl transition-all duration-500 ${petMode ? 'animate-sparkle rotate-12 scale-110 shadow-sparkle' : ''}`}>
                                        <service.icon className={`w-6 h-6 text-primary ${petMode ? 'animate-float-paw' : ''}`} />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-foreground mb-3 font-heading">
                                        {service.title}
                                    </h3>
                                    <p className="text-foreground/60 mb-6 font-body leading-relaxed">{service.desc}</p>
                                    <a
                                        href="https://wa.me/5511934823781"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all active:scale-95 group/link"
                                        aria-label={`Solicitar or├ºamento para ${service.title}`}
                                    >
                                        Solicitar <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                        <a
                            href="https://wa.me/5511934823781"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25d366] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#128c7e] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20 animate-pulse-glow"
                            aria-label="Pedir or├ºamento via WhatsApp"
                        >
                            <MessageCircle className="w-6 h-6 fill-white" />
                            Or├ºamento via WhatsApp
                        </a>
                        <a
                            href="https://b24-auytd7.bitrix24.site/orcamento_23.1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#f6a71c] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#e09516] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                            aria-label="Fazer or├ºamento online"
                        >
                            <Calendar className="w-6 h-6" />
                            Or├ºamento Online
                        </a>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section ref={refs.processRef} className="py-20 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 animate-fade-in-up">
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
                                desc: 'Voc├¬ solicita informa├º├Áes ou um or├ºamento atrav├®s de Redes Sociais, WhatsApp, Site ou Telefone.',
                                icon: Phone
                            },
                            {
                                step: '02',
                                title: 'Or├ºar',
                                desc: 'Recebemos a solicita├º├úo e em alguns minutos voc├¬ receber├í o or├ºamento detalhado para an├ílise.',
                                icon: Calendar
                            },
                            {
                                step: '03',
                                title: 'Aprovar',
                                desc: 'Ap├│s aprovado, agendamos com a log├¡stica a din├ómica do seu servi├ºo com todo cuidado.',
                                icon: CheckCircle
                            },
                            {
                                step: '04',
                                title: 'Relaxar',
                                desc: 'Agora pronto! ├ë s├│ aproveitar a tranquilidade e todos os benef├¡cios que a 7Pet tem a oferecer.',
                                icon: Heart
                            }
                        ].map((item, index) => (
                            <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className="bg-background/40 border border-primary/5 rounded-3xl p-8 h-full hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group active:scale-95">
                                    <div className="text-6xl font-bold text-primary/10 mb-4 font-heading group-hover:text-primary/20 transition-colors">
                                        {item.step}
                                    </div>
                                    <div className={`w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${petMode ? 'animate-bounce' : ''}`}>
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3 font-heading">
                                        {item.title}
                                    </h3>
                                    <p className="text-foreground/60 font-body leading-relaxed">{item.desc}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-8 h-8 text-primary/20 group-hover:text-primary transition-colors" />
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
                                <span className="text-primary font-bold font-body">Prazer, 7Pet! Ô£¿</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
                                Quem Somos
                            </h2>
                            <div className="space-y-6 text-foreground/70 text-lg font-body leading-relaxed">
                                <p>
                                    Nunca mais se preocupe com o bem-estar do seu melhor amigo! A <span className="text-primary font-bold">7Pet</span> ├® a solu├º├úo completa para o transporte e cuidado do seu pet.
                                </p>
                                <p>
                                    Imagine estar preso no trabalho e precisar buscar seu pet no banho e tosa. A 7Pet entra em a├º├úo para garantir que ele chegue em casa com <span className="text-secondary font-bold">seguran├ºa e carinho</span>.
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
                                    Conhe├ºa nossa Alma
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

            {/* Testimonials Section */}
            <section ref={refs.testimonialsRef} className="py-20 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
                            O que dizem de n├│s
                        </h2>
                        <p className="text-xl text-foreground/60 font-body">
                            Amor e cuidado aprovado por quem mais importa! ÔØñ´©Å ­ƒÉ¥
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Barbara Ettmuller',
                                pet: '/testimonial-poodle.png',
                                text: 'O atendimento foi maravilhoso do in├¡cio ao fim, apenas elogios para todos e com certeza vamos nos fidelizar como clientes. OBRIGADA 7PET!',
                                date: '11/12/2020',
                                rating: 5
                            },
                            {
                                name: 'Luana',
                                pet: '/testimonial-golden.png',
                                text: 'Adorei o servi├ºo de voc├¬s e o motorista, j├í deixei anotado para quando precisar outras vezes. MUITOOOOOO OBRIGADA!!',
                                date: '30/07/2021',
                                rating: 5
                            },
                            {
                                name: 'Juliana (Tutora do Toretto)',
                                pet: '/testimonial-bulldog.png',
                                text: 'Muito Obrigada! E eu quero dizer que o atendimento de voc├¬s ├® excelente! Super recomendo para todos os pais de pet.',
                                date: '11/06/2021',
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[2rem] p-8 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 active:scale-95 animate-fade-in-up relative border border-primary/5 group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-background p-1 border-2 border-primary/10 group-hover:rotate-3 transition-transform">
                                        <img
                                            src={testimonial.pet}
                                            alt={`Pet de ${testimonial.name}`}
                                            className="w-full h-full object-cover rounded-xl"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground font-heading text-lg">{testimonial.name}</h4>
                                        <div className="flex gap-1 mt-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-foreground/70 mb-6 font-body italic leading-relaxed text-lg">"{testimonial.text}"</p>
                                <div className="flex justify-between items-center text-sm font-body text-foreground/40">
                                    <span>{testimonial.date}</span>
                                    <Heart className="w-4 h-4 text-primary fill-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center animate-fade-in-up">
                        <a
                            href="https://g.page/r/CTGdKGrH3BBbEBE/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-foreground px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all border-2 border-primary/10 shadow-lg shadow-primary/5 active:scale-95"
                            aria-label="Ver avalia├º├Áes no Google"
                        >
                            <Star className="w-5 h-5 text-secondary fill-secondary" />
                            Ver no Google Reviews
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
                            Nossos Contatos
                        </h2>
                        <p className="text-xl text-foreground/60 font-body">
                            Onde estiver, a 7Pet est├í com voc├¬! ­ƒô× Ô£¿
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <a
                            href="https://wa.me/5511934823781"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-background/40 border border-green-500/10 rounded-[2.5rem] p-10 text-center hover:bg-[#25d366] hover:text-white transition-all duration-500 active:scale-95 group animate-fade-in-up shadow-xl shadow-green-500/5 hover:shadow-green-500/20"
                            style={{ animationDelay: '0.1s' }}
                            aria-label="Ligar ou mandar mensagem para o Suporte Pet"
                        >
                            <div className="w-20 h-20 bg-[#25d366] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-all duration-500 shadow-lg shadow-green-500/20 group-hover:rotate-6">
                                <Phone className="w-10 h-10 text-white group-hover:text-[#25d366]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heading">Suporte Pet</h3>
                            <p className="text-foreground/60 group-hover:text-white/90 font-body">(11) 93482-3781</p>
                        </a>

                        <a
                            href="https://wa.me/5511937367986"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-background/40 border border-primary/10 rounded-[2.5rem] p-10 text-center hover:bg-primary hover:text-white transition-all duration-500 active:scale-95 group animate-fade-in-up shadow-xl shadow-primary/5 hover:shadow-primary/20"
                            style={{ animationDelay: '0.2s' }}
                            aria-label="Ligar ou mandar mensagem para o Financeiro"
                        >
                            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-all duration-500 shadow-lg shadow-primary/20 group-hover:-rotate-6">
                                <Phone className="w-10 h-10 text-white group-hover:text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heading">Financeiro</h3>
                            <p className="text-foreground/60 group-hover:text-white/90 font-body">(11) 93736-7986</p>
                        </a>

                        <a
                            href="mailto:adm@7pet.com.br"
                            className="bg-background/40 border border-foreground/10 rounded-[2.5rem] p-10 text-center hover:bg-foreground hover:text-background transition-all duration-500 active:scale-95 group animate-fade-in-up shadow-xl shadow-foreground/5 hover:shadow-foreground/20"
                            style={{ animationDelay: '0.3s' }}
                            aria-label="Enviar e-mail oficial"
                        >
                            <div className="w-20 h-20 bg-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-background transition-all duration-500 shadow-lg shadow-foreground/20 group-hover:rotate-6">
                                <Mail className="w-10 h-10 text-background group-hover:text-foreground" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heading">E-mail Oficial</h3>
                            <p className="text-foreground/60 group-hover:text-background/90 font-body">adm@7pet.com.br</p>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

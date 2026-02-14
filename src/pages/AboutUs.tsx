import { Target, Eye, Heart, Shield, Award, Users, Lightbulb, Zap, Smile, Sparkles, PawPrint, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ScrollReveal';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

export function AboutUs() {
    return (
        <div className="relative overflow-visible pb-20">
            <SEO
                title="Sobre Nossa Alma | Valores e História"
                description="Conheça a missão, visão e os valores que movem a 7Pet. Nossa dedicação total ao bem-estar animal e transparência com os tutores em São Paulo e Osasco."
            />

            {/* Header Section */}
            <section className="relative py-32 bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000" />
                    <PawPrint className="absolute top-[20%] left-[10%] w-32 h-32 rotate-12 animate-float-slow" />
                    <Heart className="absolute bottom-[20%] right-[15%] w-40 h-40 -rotate-12 animate-float" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <ScrollReveal direction="up">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/30 animate-bounce-soft">
                            <Sparkles className="w-5 h-5 text-yellow-300 animate-spin-slow" />
                            <span className="text-white font-bold tracking-wider uppercase text-sm">Nossa Identidade</span>
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-bold mb-8 font-heading drop-shadow-xl text-white">Sobre Nossa Alma</h1>
                        <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-body leading-relaxed drop-shadow-md">
                            Muito mais que uma empresa, somos uma família dedicada a transformar a vida dos pets e seus tutores com amor e tecnologia.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Mission & Vision Section with Tilt Cards */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <ScrollReveal direction="left" threshold={0.2}>
                            <TiltCard tiltAmount={5} scale={1.02}>
                                <div className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-primary/5 border border-primary/10 h-full relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
                                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-primary/20 rotate-3 group-hover:rotate-6 transition-transform">
                                        <Target className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold mb-6 font-heading text-foreground">Nossa Missão</h2>
                                    <p className="text-lg text-foreground/70 font-body leading-relaxed">
                                        Oferecer soluções seguras, humanas e personalizadas para pets e seus tutores, com foco em transporte especializado e cuidados integrados, garantindo bem-estar, tranquilidade e confiança em cada etapa da jornada.
                                    </p>
                                </div>
                            </TiltCard>
                        </ScrollReveal>

                        <ScrollReveal direction="right" threshold={0.2} delay={200}>
                            <TiltCard tiltAmount={5} scale={1.02}>
                                <div className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-secondary/5 border border-secondary/10 h-full relative overflow-hidden group">
                                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-500" />
                                    <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-secondary/20 -rotate-3 group-hover:-rotate-6 transition-transform">
                                        <Eye className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold mb-6 font-heading text-foreground">Nossa Visão</h2>
                                    <p className="text-lg text-foreground/70 font-body leading-relaxed">
                                        Ser, nos próximos anos, uma das empresas mais confiáveis e recomendadas em transporte e soluções para pets na região de Osasco e São Paulo, reconhecida pela forma ética, carinhosa e profissional de cuidar de animais.
                                    </p>
                                </div>
                            </TiltCard>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Values Section Grid */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal direction="up">
                        <div className="text-center mb-20">
                            <span className="text-primary font-bold tracking-wider uppercase mb-3 block animate-pulse">Nossos Alicerces</span>
                            <h2 className="text-5xl lg:text-6xl font-bold mb-6 font-heading text-foreground">Valores Inegociáveis</h2>
                            <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-body">Os pilares que sustentam nossa dedicação e amor diário pelos animais.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Heart, title: 'Amor pelos Pets', desc: 'Tudo começa aqui. Cuidamos de cada pet como se fosse nosso, com carinho genuíno.' },
                            { icon: Users, title: 'Respeito', desc: 'Base de nossas relações com pets, tutores e nossa equipe dedicada.' },
                            { icon: Shield, title: 'Segurança', desc: 'Equipamentos e protocolos rigorosos para garantir a proteção física e emocional.' },
                            { icon: Award, title: 'Profissionalismo', desc: 'Carinho com responsabilidade, ética, pontualidade e transparência total.' },
                            { icon: Zap, title: 'Customização', desc: 'Entendemos que cada pet é único e adaptamos nossos serviços às suas necessidades.' },
                            { icon: Lightbulb, title: 'Inovação', desc: 'Buscamos constantemente novas formas de atender melhor, evoluindo sempre.' },
                        ].map((value, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100} threshold={0.1}>
                                <TiltCard tiltAmount={10} scale={1.05}>
                                    <div className="p-10 rounded-[2.5rem] bg-background border border-primary/5 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group h-full relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 group-hover:bg-primary/10 rounded-bl-[5rem] transition-all duration-500" />
                                        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-primary/5">
                                            <value.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-heading text-foreground group-hover:text-primary transition-colors">{value.title}</h3>
                                        <p className="text-foreground/60 font-body leading-relaxed">{value.desc}</p>
                                    </div>
                                </TiltCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Area */}
            <section className="py-24 bg-background overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="scale">
                        <div className="bg-gradient-to-br from-foreground to-foreground/90 rounded-[4rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl border-4 border-primary/20">
                            {/* Decorative elements inside CTA */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paws.png')] pointer-events-none" />
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />

                            <div className="relative z-10 space-y-8">
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto border border-white/20 animate-bounce-soft">
                                    <Smile className="w-12 h-12 text-primary" />
                                </div>
                                <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-heading text-white leading-tight">Vamos Cuidar do Seu Melhor Amigo Juntos?</h2>
                                <p className="text-xl lg:text-2xl text-white/70 font-body mb-10 max-w-3xl mx-auto italic">
                                    "Gratidão é nossa atitude diária. Reconhecemos o privilégio de fazer parte da vida de tantos pets e tutores."
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                                    <MagneticButton
                                        variant="accent"
                                        size="lg"
                                        className="text-white px-12 py-5 text-xl font-bold shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95"
                                        onClick={() => window.open('https://wa.me/5511934823781', '_blank')}
                                    >
                                        <MessageCircle className="w-6 h-6 mr-3 fill-white" />
                                        Agendar Agora
                                    </MagneticButton>
                                    <MagneticButton
                                        variant="outline"
                                        size="lg"
                                        className="text-white border-white/30 hover:bg-white/10 px-12 py-5 text-xl font-bold"
                                        onClick={() => window.location.href = '/'}
                                    >
                                        Voltar ao Início
                                    </MagneticButton>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}

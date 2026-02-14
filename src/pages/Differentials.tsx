import React from 'react';
import { Shield, Sparkles, Heart, Clock, Star, Music, Users, CreditCard, CheckCircle, Car, ArrowRight, PawPrint } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ScrollReveal';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

export function Differentials() {
    const diffs = [
        {
            icon: Sparkles,
            title: 'Higiene e Cuidado Total',
            desc: 'Carros higienizados a cada atendimento e passam por higienização periódica com Ozônio.',
            color: 'from-blue-500/10 to-blue-600/5'
        },
        {
            icon: Shield,
            title: 'Segurança e Conforto',
            desc: 'Equipamentos de segurança de última geração, atendendo todas as exigências da legislação.',
            color: 'from-green-500/10 to-green-600/5'
        },
        {
            icon: Clock,
            title: 'Tranquilidade Diário Pet',
            desc: 'Tudo o que acontece com seu amiguinho em tempo real. Nunca mais esqueça nada sobre seu melhor amigo.',
            color: 'from-orange-500/10 to-orange-600/5'
        },
        {
            icon: Star,
            title: 'Pet Fidelidade',
            desc: 'Quanto mais você usa, menos você paga e mais presentes seu pet ganha em nossa rede.',
            color: 'from-yellow-500/10 to-yellow-600/5'
        },
        {
            icon: Heart,
            title: 'Atendimento Exclusivo',
            desc: 'Um Pet ou uma família por carro/corrida. Sem misturar com pets desconhecidos.',
            color: 'from-red-500/10 to-red-600/5'
        },
        {
            icon: Music,
            title: 'Ambiente Agradável',
            desc: 'Veículos climatizados e com trilha sonora especialmente desenvolvida para acalmar seu pet.',
            color: 'from-purple-500/10 to-purple-600/5'
        },
        {
            icon: Users,
            title: 'Rede de Parcerias',
            desc: 'Acesso a parceiros selecionados (vets, hoteis, shops) com vantagens exclusivas 7Pet.',
            color: 'from-indigo-500/10 to-indigo-600/5'
        },
        {
            icon: CreditCard,
            title: 'Pagamento Facilitado',
            desc: 'Diversas formas de pagamento e planos mensais para sua total comodidade.',
            color: 'from-teal-500/10 to-teal-600/5'
        }
    ];

    return (
        <div className="relative overflow-visible pb-20">
            <SEO
                title="Diferenciais | Por que somos únicos?"
                description="Veículos climatizados, higienização com ozônio, rastreamento em tempo real e atendimento humanizado. Descubra o que torna a 7Pet especial."
            />

            {/* Hero Section */}
            <section className="relative py-32 bg-background overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-pulse delay-700" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <ScrollReveal direction="up">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full mb-8 border border-primary/20 animate-bounce-soft">
                            <Star className="w-5 h-5 text-primary fill-primary animate-spin-slow" />
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">O Padrão 7Pet</span>
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-bold mb-8 font-heading text-foreground">Por que Somos <span className="text-primary underline decoration-wavy decoration-primary/30">Únicos</span>?</h1>
                        <p className="text-xl lg:text-2xl text-foreground/60 max-w-3xl mx-auto font-body leading-relaxed">
                            Aqui cuidamos de cada detalhe para que a experiência do seu pet seja tão incrível quanto a dele com você.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Differentials Grid */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {diffs.map((diff, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 100} threshold={0.1}>
                                <TiltCard tiltAmount={10} scale={1.05}>
                                    <div className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${diff.color} border border-white h-full hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden`}>
                                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                                        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-primary/5">
                                            <diff.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                                        </div>

                                        <h3 className="text-2xl font-bold mb-4 font-heading text-foreground group-hover:text-primary transition-colors leading-tight">
                                            {diff.title}
                                        </h3>
                                        <p className="text-foreground/60 font-body leading-relaxed">
                                            {diff.desc}
                                        </p>

                                        <div className="mt-8 pt-6 border-t border-primary/5 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                            <span>Saber Mais</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </TiltCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section with Large Illustration Feel */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="scale">
                        <div className="bg-gradient-to-br from-primary to-secondary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-2xl shadow-primary/20">
                            {/* Abstract Shapes */}
                            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                                <PawPrint className="absolute top-10 left-10 w-64 h-64 -rotate-12" />
                                <PawPrint className="absolute bottom-10 right-10 w-96 h-96 rotate-12" />
                            </div>

                            <div className="flex-1 text-center lg:text-left space-y-8 relative z-10">
                                <h2 className="text-5xl lg:text-7xl font-bold font-heading leading-tight drop-shadow-lg">
                                    Não Somos Apenas Transporte.
                                </h2>
                                <p className="text-xl lg:text-2xl text-white/90 font-body leading-relaxed max-w-xl">
                                    Somos o elo de segurança, carinho e tecnologia entre você e os melhores serviços para o seu pet.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                                    <MagneticButton
                                        variant="accent"
                                        size="lg"
                                        className="bg-white text-primary hover:bg-white/90 px-12 py-5 text-xl font-bold shadow-xl active:scale-95"
                                        onClick={() => window.open('https://wa.me/5511934823781', '_blank')}
                                    >
                                        <Car className="w-6 h-6 mr-3 border-r pr-3 border-primary/20" />
                                        Experimente Agora
                                    </MagneticButton>
                                    <div className="flex -space-x-4 items-center justify-center lg:justify-start">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-white/20">
                                                <img src={`https://ui-avatars.com/api/?name=Pet+${i}&background=random`} alt="User avatar" />
                                            </div>
                                        ))}
                                        <div className="pl-6 text-white/80 font-bold text-sm">
                                            +2150 Clientes Felizes
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 relative">
                                <div className="absolute inset-0 bg-white/10 rounded-full blur-[80px] animate-pulse" />
                                <TiltCard tiltAmount={15}>
                                    <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                                        <img
                                            src="/hero-dog.png"
                                            alt="Pet 7Pet"
                                            className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] animate-float"
                                        />
                                        {/* Floating Badge */}
                                        <div className="absolute top-10 right-0 bg-white p-6 rounded-3xl shadow-2xl animate-bounce-soft border-4 border-primary/10">
                                            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-2" />
                                            <div className="text-foreground font-bold text-center">Referência<br /><span className="text-primary">Internacional</span></div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}

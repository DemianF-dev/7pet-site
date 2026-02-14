import { Users, Car, TrendingUp, Heart, CheckCircle, ArrowRight, Sparkles, Star, PawPrint, Building } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ScrollReveal';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

export function Partners() {
    return (
        <div className="relative overflow-visible pb-20">
            <SEO
                title="Seja um Parceiro | Oportunidades no Mercado Pet"
                description="Quer crescer no mercado pet? Una-se à rede da 7Pet como prestador de serviços ou parceiro de negócios em São Paulo e Osasco. Modelo ganha-ganha garantido."
            />

            {/* Hero Section */}
            <section className="relative py-32 bg-white overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 animate-pulse" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <ScrollReveal direction="up">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full mb-8 border border-primary/20 animate-bounce-soft">
                            <TrendingUp className="w-5 h-5 text-primary animate-float" />
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">O Ecossistema 7Pet</span>
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-bold mb-8 font-heading text-foreground">Cresça Com <span className="text-primary">Gente!</span></h1>
                        <p className="text-xl lg:text-2xl text-foreground/60 max-w-3xl mx-auto font-body leading-relaxed">
                            Faça parte de um seleto grupo de empresas e profissionais que estão revolucionando o mercado pet com amor e tecnologia.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main Content: Benefits and Types */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <ScrollReveal direction="left" threshold={0.2}>
                            <div className="space-y-10">
                                <h2 className="text-4xl lg:text-5xl font-bold font-heading text-foreground leading-tight">Por que ser um Parceiro 7Pet?</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Visibilidade Premium', desc: 'Sua marca em destaque na nossa rede de milhares de tutores na grande SP.' },
                                        { title: 'Renda Escalável', desc: 'Aumente seu faturamento através de encaminhamentos e parcerias estratégicas.' },
                                        { title: 'Fidelização Elevada', desc: 'Ofereça benefícios exclusivos 7Pet para seus próprios clientes.' },
                                        { title: 'Comunidade Aliada', desc: 'Faça parte de uma rede que luta pela causa animal e bem-estar real.' },
                                        { title: 'Modelo Win-Win', desc: 'Transparência total e ganhos mútuos em cada indicação ou serviço.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-6 group">
                                            <div className="mt-1 w-8 h-8 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform">
                                                <CheckCircle className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold font-heading text-foreground mb-1">{item.title}</h4>
                                                <p className="text-foreground/60 font-body">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 flex flex-col sm:flex-row gap-6">
                                    <MagneticButton
                                        variant="primary"
                                        size="lg"
                                        className="px-10 py-5 text-xl font-bold shadow-2xl shadow-primary/20"
                                        onClick={() => window.open('https://xn--oramento7pet-ldb.bitrix24.site/parceirosouprestadores/', '_blank')}
                                    >
                                        Quero Ser Parceiro
                                        <ArrowRight className="w-6 h-6 ml-3" />
                                    </MagneticButton>
                                    <MagneticButton
                                        variant="outline"
                                        size="lg"
                                        className="px-10 py-5 text-xl font-bold border-primary/20"
                                        onClick={() => window.open('https://wa.me/5511934823781', '_blank')}
                                    >
                                        Dúvidas? WhatsApp
                                        <Heart className="w-5 h-5 ml-3 text-secondary fill-secondary/20" />
                                    </MagneticButton>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="grid sm:grid-cols-1 gap-8">
                            <ScrollReveal direction="right" delay={200}>
                                <TiltCard tiltAmount={10} scale={1.05}>
                                    <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
                                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
                                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                            <Car className="w-10 h-10 text-primary" />
                                        </div>
                                        <h3 className="text-3xl font-bold mb-6 font-heading text-foreground">Para Prestadores</h3>
                                        <p className="text-lg text-foreground/60 font-body leading-relaxed mb-8">
                                            Motoristas (TTM), Dog Walkers, Pet Sitters e Cuidadores. Se você ama pets e busca profissionalismo, este é o seu lugar.
                                        </p>
                                        <div className="inline-flex items-center gap-2 text-primary font-bold">
                                            <Sparkles className="w-5 h-5 animate-pulse" />
                                            Unir-se à Rede
                                        </div>
                                    </div>
                                </TiltCard>
                            </ScrollReveal>

                            <ScrollReveal direction="right" delay={400}>
                                <TiltCard tiltAmount={10} scale={1.05}>
                                    <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-secondary/5 border border-secondary/10 hover:border-secondary/30 transition-all duration-500 group relative overflow-hidden">
                                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-500" />
                                        <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                            <Building className="w-10 h-10 text-secondary" />
                                        </div>
                                        <h3 className="text-3xl font-bold mb-6 font-heading text-foreground">Para Empresas</h3>
                                        <p className="text-lg text-foreground/60 font-body leading-relaxed mb-8">
                                            Clínicas, Hospitais, Creches, Hotéis e PetShops. Integre seus serviços aos fluxos da 7Pet e turbine suas indicações.
                                        </p>
                                        <div className="inline-flex items-center gap-2 text-secondary font-bold">
                                            <Star className="w-5 h-5 fill-secondary animate-spin-slow" />
                                            Potencializar Negócio
                                        </div>
                                    </div>
                                </TiltCard>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Quote / Hero-like Ending */}
            <section className="py-24 bg-white relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="bg-foreground text-background rounded-[4rem] p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />

                            <div className="relative z-10 space-y-10">
                                <div className="w-24 h-24 bg-primary rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500 animate-bounce-soft">
                                    <Users className="w-12 h-12 text-white" />
                                </div>
                                <h2 className="text-5xl lg:text-7xl font-bold font-heading text-white leading-tight">Mude Seu Game Com a 7Pet!</h2>
                                <p className="text-2xl lg:text-3xl text-background/70 font-body max-w-3xl mx-auto italic border-l-4 border-primary/40 pl-8 text-left lg:text-center mx-auto">
                                    "O mercado pet não é apenas sobre números, é sobre confiança e amor. Nossos parceiros compartilham dessa alma."
                                </p>
                                <div className="pt-10 flex items-center justify-center gap-4">
                                    <PawPrint className="w-8 h-8 text-primary/40 animate-float" />
                                    <div className="h-px w-20 bg-primary/20" />
                                    <Heart className="w-8 h-8 text-secondary/40 animate-float delay-500" />
                                    <div className="h-px w-20 bg-primary/20" />
                                    <PawPrint className="w-8 h-8 text-primary/40 animate-float delay-1000" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}

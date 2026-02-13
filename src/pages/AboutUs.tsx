import React from 'react';
import { Target, Eye, Heart, Shield, Award, Users, Lightbulb, Zap, Smile } from 'lucide-react';

export function AboutUs() {
    return (
        <div className="animate-fade-in">
            {/* Header Section */}
            <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Heart className="absolute top-10 left-10 w-32 h-32 rotate-12" />
                    <Heart className="absolute bottom-10 right-10 w-40 h-40 -rotate-12" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">Sobre Nossa Alma</h1>
                    <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-body leading-relaxed">
                        Conheça a 7Pet, a empresa que estabelece o padrão de excelência em serviços para pets em São Paulo.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-primary/5 border border-primary/5 animate-fade-in-left">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold mb-6 font-heading">Nossa Missão</h2>
                            <p className="text-lg text-foreground/70 font-body leading-relaxed">
                                Oferecer soluções seguras, humanas e personalizadas para pets e seus tutores, com foco em transporte especializado e cuidados integrados, garantindo bem-estar, tranquilidade e confiança em cada etapa da jornada.
                            </p>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-secondary/5 border border-secondary/5 animate-fade-in-right">
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-bold mb-6 font-heading">Nossa Visão</h2>
                            <p className="text-lg text-foreground/70 font-body leading-relaxed">
                                Ser, nos próximos anos, uma das empresas mais confiáveis e recomendadas em transporte e soluções para pets na região de Osasco e São Paulo, reconhecida pela forma ética, carinhosa e profissional de cuidar de animais, tutores e equipe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">Nossos Valores</h2>
                        <p className="text-xl text-foreground/60 font-body">Os pilares que sustentam nossa dedicação diária</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Heart,
                                title: 'Amor pelos Pets',
                                desc: 'Tudo começa aqui. Amamos o que fazemos porque amamos os animais. Cuidamos de cada pet como se fosse nosso.'
                            },
                            {
                                icon: Users,
                                title: 'Respeito',
                                desc: 'Respeitamos os pets, os tutores, a equipe e os limites de cada situação. Respeito é a base de nossas relações.'
                            },
                            {
                                icon: Shield,
                                title: 'Segurança',
                                desc: 'Nenhum resultado vale mais do que a segurança física e emocional dos pets. Planejamos tudo pensando na proteção.'
                            },
                            {
                                icon: Award,
                                title: 'Profissionalismo',
                                desc: 'Carinho não exclui responsabilidade. Atuamos com seriedade, pontualidade, ética e compromisso.'
                            },
                            {
                                icon: Zap,
                                title: 'Customização',
                                desc: 'Cada pet é único. Adaptamos rotas, manejos e cuidados às necessidades de cada animal e tutor.'
                            },
                            {
                                icon: Lightbulb,
                                title: 'Inovação',
                                desc: 'Não temos medo de testar novas formas de atender melhor. Estamos sempre abertos ao novo e ao autodesenvolvimento.'
                            },
                        ].map((value, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-background border border-primary/5 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                    <value.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-heading">{value.title}</h3>
                                <p className="text-foreground/60 font-body">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-background text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Smile className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">Obrigado pela Confiança</h2>
                    <p className="text-xl text-foreground/60 font-body mb-8">
                        Gratidão é nossa atitude diária. Reconhecemos o privilégio de fazer parte da vida de tantos pets e tutores.
                    </p>
                </div>
            </section>
        </div>
    );
}

import { Shield, Sparkles, Heart, Clock, Star, Music, Users, CreditCard } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Differentials() {
    const diffs = [
        {
            icon: Sparkles,
            title: 'Higiene e Cuidado Total',
            desc: 'Carros higienizados a cada atendimento e passam por higienização periódica com Ozônio.'
        },
        {
            icon: Shield,
            title: 'Segurança e Conforto',
            desc: 'Equipamentos de segurança no transporte, atendendo todas as exigências da legislação.'
        },
        {
            icon: Clock,
            title: 'Tranquilidade Diário Pet',
            desc: 'Tudo o que acontece com seu amiguinho em tempo real e registrado para sempre. Nunca mais esqueça nada sobre seu melhor amigo.'
        },
        {
            icon: Star,
            title: 'Pet Fidelidade',
            desc: 'Quanto mais você usa, menos você paga e mais presentes ganha.'
        },
        {
            icon: Heart,
            title: 'Atendimento Exclusivo',
            desc: 'Um Pet ou uma família por carro/corrida.'
        },
        {
            icon: Music,
            title: 'Ambiente Agradável',
            desc: 'Veículos climatizados e com trilha sonora especialmente desenvolvida para a tranquilidade e bem estar do seu pet.'
        },
        {
            icon: Users,
            title: 'Parcerias',
            desc: 'Rede de parceiros selecionados para oferecer o melhor para seu pet.'
        },
        {
            icon: CreditCard,
            title: 'Pagamento Facilitado',
            desc: 'Diversas formas de pagamento para sua comodidade.'
        }
    ];

    return (
        <div className="animate-fade-in">
            <SEO
                title="Diferenciais | Por que somos únicos?"
                description="Veículos climatizados, higienização com ozônio, rastreamento em tempo real e atendimento humanizado. Descubra o que torna a 7Pet especial."
            />
            {/* Intro */}
            <section className="py-20 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">Nossos Diferenciais</h1>
                    <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-body leading-relaxed">
                        Aqui tem um pouquinho daquilo que nós fazemos com tanto amor para garantir a melhor experiência para você e seu pet.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {diffs.map((diff, i) => (
                            <div
                                key={i}
                                className="group p-8 rounded-[2rem] bg-background border border-primary/5 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 animate-fade-in-up"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                    <diff.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">{diff.title}</h3>
                                <p className="text-foreground/60 font-body leading-relaxed">{diff.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero-like Image Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 relative z-10">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">Por que escolher a 7Pet?</h2>
                            <p className="text-xl text-white/90 font-body mb-8 leading-relaxed">
                                Não somos apenas uma empresa de transporte. Somos parceiros na jornada do seu pet, oferecendo cuidado humanizado e tecnológico.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                                    <Heart className="w-5 h-5 fill-white" />
                                    <span className="font-bold">Amor Real</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                                    <Shield className="w-5 h-5" />
                                    <span className="font-bold">100% Seguro</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white/10 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                            <img
                                src="/hero-dog.png"
                                alt="Pet feliz sendo transportado com segurança"
                                className="w-full max-w-sm mx-auto relative z-10 drop-shadow-2xl animate-float"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

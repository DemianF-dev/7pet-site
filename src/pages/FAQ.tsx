import { useState } from 'react';
import { HelpCircle, Plus, Minus, MessageCircle, PawPrint, Sparkles, Star, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ScrollReveal';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

export function FAQ() {
    const faqs = [
        {
            question: 'Quais serviços vocês oferecem?',
            answer: (
                <div className="space-y-4 font-body">
                    <p>A 7Pet é uma solução completa para seu pet. Nossos principais serviços são:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Leva & Traz Premium', desc: 'Viagens, Mudanças e Cotidiano.' },
                            { title: 'Tutelas Temporárias', desc: 'Sitter, Dog Walker e Tutor Home.' },
                            { title: 'Intermediações', desc: 'DayCare, Hotel e Hospedagem.' },
                            { title: 'Atendimento Vet', desc: 'Home Vet e TecVet em domicílio.' }
                        ].map((s, i) => (
                            <li key={i} className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                                <strong className="text-primary block mb-1">{s.title}</strong>
                                <span className="text-sm opacity-70">{s.desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        },
        {
            question: 'Como funciona o Leva & Traz?',
            answer: 'Oferecemos um transporte premium e exclusivo (uma família por vez). Nossos veículos contam com equipamentos de segurança, climatização e são higienizados com Ozônio. Durante todo o trajeto, você recebe fotos, vídeos e localização em tempo real via WhatsApp.'
        },
        {
            question: 'Como os valores são calculados?',
            answer: 'A transparência é total. O cálculo baseia-se em 3 pilares: 1) Quilometragem percorrida; 2) Tempo estimado (minutos); 3) Taxa de Largada (deslocamento). O valor mínimo começa em R$ 20,20.'
        },
        {
            question: 'Posso agendar serviços recorrentes?',
            answer: 'Sim! Temos planos mensais para pacotes de transporte, passeios e tutela temporária. Clientes recorrentes têm prioridade na agenda e descontos exclusivos no programa Pet Fidelidade.'
        },
        {
            question: 'Quais são as áreas de atendimento?',
            answer: 'Atendemos prioritariamente São Paulo e Osasco, mas realizamos transportes intermunicipais e mudanças pet para todo o Brasil sob consulta prévia.'
        },
        {
            question: 'O que é o TTM da 7Pet?',
            answer: 'O TTM (Tutor Mobile) é o nosso profissional especializado que não apenas dirige, mas cuida do manejo e segurança do seu pet durante todo o processo, garantindo que ele chegue ao destino feliz e relaxado.'
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="relative overflow-visible pb-20">
            <SEO
                title="FAQ | Perguntas Frequentes sobre Serviços Pet"
                description="Tem dúvidas sobre o táxi pet, valores ou como funcionam nossos serviços? Confira nosso FAQ completo ou fale conosco. Atendemos São Paulo e Osasco."
            />

            {/* Hero Section */}
            <section className="relative py-32 bg-background overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <ScrollReveal direction="up">
                        <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center mx-auto mb-10 rotate-3 border-4 border-primary/10">
                            <HelpCircle className="w-12 h-12 text-primary animate-wiggle" />
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-bold mb-8 font-heading text-foreground">Como Podemos <span className="text-secondary">Ajudar?</span></h1>
                        <p className="text-xl lg:text-2xl text-foreground/60 max-w-2xl mx-auto font-body leading-relaxed">
                            Tire suas dúvidas agora mesmo ou fale diretamente com nosso suporte humanizado.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* FAQ Search Simulation / Accordion */}
            <section className="py-24 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up" threshold={0.2}>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className={`group border-2 rounded-[2.5rem] transition-all duration-500 overflow-hidden ${openIndex === i ? 'border-primary bg-primary/5 shadow-2xl shadow-primary/10' : 'border-background hover:border-primary/20 bg-background/30'}`}
                                >
                                    <button
                                        className="w-full flex items-center justify-between p-8 text-left"
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                        aria-expanded={openIndex === i}
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-primary text-white rotate-12' : 'bg-primary/10 text-primary'}`}>
                                                {openIndex === i ? <Star className="w-6 h-6 fill-white" /> : <PawPrint className="w-6 h-6" />}
                                            </div>
                                            <span className={`text-xl lg:text-2xl font-bold font-heading transition-colors ${openIndex === i ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                                                {faq.question}
                                            </span>
                                        </div>
                                        <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-primary text-white rotate-180 shadow-lg' : 'bg-white text-primary border border-primary/10'}`}>
                                            {openIndex === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                        </div>
                                    </button>

                                    <div
                                        className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                                    >
                                        <div className="p-8 lg:p-12 pt-0 text-lg lg:text-xl text-foreground/70 font-body leading-relaxed border-t border-primary/10">
                                            <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                                                {faq.answer}
                                            </div>

                                            <div className="mt-8 flex items-center gap-4 text-primary font-bold text-sm">
                                                <span>Ainda em dúvida?</span>
                                                <button
                                                    onClick={() => window.open('https://wa.me/5511934823781', '_blank')}
                                                    className="flex items-center gap-2 hover:translate-x-1 transition-transform bg-primary text-white px-4 py-2 rounded-full text-xs shadow-lg"
                                                >
                                                    Falar com Humano <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Support CTA */}
            <section className="py-24 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="scale">
                        <TiltCard tiltAmount={5}>
                            <div className="bg-white rounded-[4rem] p-12 lg:p-20 text-center shadow-2xl shadow-primary/5 border border-primary/5 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-700" />

                                <div className="relative z-10 space-y-8">
                                    <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <MessageCircle className="w-12 h-12 text-primary fill-primary/10" />
                                    </div>
                                    <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-heading text-foreground">Ainda Não Encontrou?</h2>
                                    <p className="text-xl lg:text-2xl text-foreground/60 mb-12 font-body max-w-2xl mx-auto">
                                        Não se preocupe! Nosso time está online para te responder agora mesmo. Sem robôs, atendimento de verdade.
                                    </p>
                                    <MagneticButton
                                        variant="accent"
                                        size="lg"
                                        className="bg-[#25d366] text-white hover:bg-[#128c7e] px-14 py-6 rounded-full font-bold text-2xl shadow-2xl shadow-green-500/30 hover:scale-105 active:scale-95 transition-all"
                                        onClick={() => window.open('https://wa.me/5511934823781', '_blank')}
                                    >
                                        <Sparkles className="w-6 h-6 mr-3 text-yellow-300 animate-spin-slow" />
                                        Chamar no WhatsApp
                                    </MagneticButton>

                                    <div className="pt-8 text-foreground/40 font-body text-sm italic">
                                        Tempo médio de resposta: <span className="text-primary font-bold">2 minutos</span>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}

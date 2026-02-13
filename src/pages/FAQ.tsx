import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Plus, Minus, MessageCircle, PawPrint } from 'lucide-react';

export function FAQ() {
    const faqs = [
        {
            question: 'Quais serviços vocês oferecem?',
            answer: (
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Leva & Traz Premium:</strong> Transporte para Viagem, Mudanças Pet, Creche, Hotel, Consulta, etc.</li>
                    <li><strong>Tutelas Temporárias:</strong> Tutor Home (TTH), PetSitter (7Sitter), Dog Walker (TTW).</li>
                    <li><strong>Intermediações:</strong> DayCare, Hospedagem, PetShop, Veterinários, etc.</li>
                    <li><strong>Home Vet:</strong> Atendimento veterinário domiciliar.</li>
                    <li><strong>Home TecVet:</strong> Procedimentos simples em casa (remédios, curativos).</li>
                    <li><strong>Agenda Fácil:</strong> Agendamento gratuito para todas as necessidades.</li>
                </ul>
            )
        },
        {
            question: 'Como funciona o Leva & Traz?',
            answer: 'Oferecemos um transporte premium e exclusivo (1 família por vez). Contamos com equipe capacitada, veículos com esteira de borracha, cesto impermeável e higienização com HerbalVet. Durante o trajeto, enviamos localização em tempo real, fotos e vídeos do seu pet.'
        },
        {
            question: 'Como vocês cobram os serviços?',
            answer: 'A cobrança é baseada em 3 parâmetros: 1) Quilometragem (origem e destino); 2) Minutos (tempo do trajeto); 3) Largada Base (deslocamento do motorista).'
        },
        {
            question: 'Qual o valor mínimo do Leva & Traz?',
            answer: 'O valor mínimo é de R$ 20,20, considerando a largada base, 1km e 1 minuto. Cada orçamento é personalizado conforme a necessidade.'
        },
        {
            question: 'Porque usar os parceiros da 7Pet?',
            answer: 'Nossos parceiros passam por uma análise técnica e triagem rigorosa. Garantimos que você encontrará a solução ideal com a mesma qualidade e cuidado da 7Pet.'
        },
        {
            question: 'O que é TTM?',
            answer: 'TTM significa Tutor Mobile, nossa equipe especializada que realiza o transporte e cuidado do seu pet durante o deslocamento.'
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="py-20 bg-background relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <HelpCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">Perguntas Frequentes</h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-body leading-relaxed">
                        Tire suas dúvidas sobre nossos serviços, preços e a forma como cuidamos do seu melhor amigo.
                    </p>
                </div>
            </section>

            {/* Accordion List */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`border rounded-3xl transition-all duration-300 ${openIndex === i ? 'border-primary bg-primary/5 shadow-xl shadow-primary/5' : 'border-primary/10 hover:border-primary/30'}`}
                            >
                                <button
                                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                >
                                    <span className={`text-xl font-bold font-heading ${openIndex === i ? 'text-primary' : 'text-foreground'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-background text-primary'}`}>
                                        {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 lg:p-8 pt-0 text-lg text-foreground/70 font-body leading-relaxed border-t border-primary/10">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl shadow-primary/5 border border-primary/5">
                        <PawPrint className="w-16 h-16 text-secondary mx-auto mb-8 animate-float-paw" />
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">Ainda tem dúvidas?</h2>
                        <p className="text-xl text-foreground/60 mb-10 font-body">
                            Nosso suporte está pronto para te ajudar com qualquer informação adicional.
                        </p>
                        <a
                            href="https://wa.me/5511934823781"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25d366] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#128c7e] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-500/20"
                        >
                            <MessageCircle className="w-6 h-6 fill-white" />
                            Falar com Atendimento
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

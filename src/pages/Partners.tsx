import { Users, Car, Home, TrendingUp, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Partners() {
    return (
        <div className="animate-fade-in">
            <SEO
                title="Seja um Parceiro | Oportunidades no Mercado Pet"
                description="Quer crescer no mercado pet? Una-se à rede da 7Pet como prestador de serviços ou parceiro de negócios em São Paulo e Osasco. Modelo ganha-ganha garantido."
            />
            {/* Hero */}
            <section className="relative py-20 bg-white overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span className="text-primary font-bold font-body">Um dos tesouros da 7Pet</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">Seja Nosso Parceiro</h1>
                    <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-body leading-relaxed">
                        Faça parte de um seleto grupo de empresas que levam o mercado pet a sério e com muito bom aumor!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-in-left">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-8 font-heading">Por que ser um parceiro 7Pet?</h2>
                            <div className="space-y-6">
                                {[
                                    'Ganhe visibilidade no mercado animal',
                                    'Aumente sua renda com nossa parceria de sucesso',
                                    'Fidelize seus clientes com serviços de qualidade',
                                    'Faça parte de uma rede aliada na causa animal',
                                    'Regime "ganha x ganha" para todos'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-lg text-foreground/70 font-body">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://xn--oramento7pet-ldb.bitrix24.site/parceirosouprestadores/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                                >
                                    Cadastro Parceiro
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://wa.me/5511934823781"
                                    className="bg-white text-foreground px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/90 transition-all border-2 border-primary/10 shadow-sm"
                                >
                                    Contato WhatsApp
                                    <Heart className="w-5 h-5 text-secondary" />
                                </a>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-right">
                            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-primary/5 hover:-translate-y-2 transition-transform">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Car className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-heading">Prestadores</h3>
                                <p className="text-foreground/60 font-body">Motoristas, Passeadores, Cuidadores e Protetores Pet.</p>
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-secondary/5 border border-secondary/5 hover:-translate-y-2 transition-transform sm:mt-8">
                                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Home className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-heading">Empresas</h3>
                                <p className="text-foreground/60 font-body">Creches, Hotéis, Veterinários, ONGs e muito mais.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Card */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-foreground text-background rounded-[3rem] p-10 lg:p-16 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading relative z-10">Turbine seu negócio com a 7Pet!</h2>
                        <p className="text-xl text-background/70 font-body mb-10 relative z-10">
                            Após o cadastro, entraremos em contato para uma avaliação detalhada dos benefícios que podemos oferecer mutuamente.
                        </p>
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto animate-bounce-soft">
                            <Users className="w-10 h-10 text-white" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

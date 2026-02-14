import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
    Search,
    Calendar,
    Clock,
    ChevronRight,
    ArrowRight,
    TrendingUp,
    PawPrint,
    Mail,
    Sparkles,
    Bookmark
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ScrollReveal';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

import { POSTS, CATEGORIES } from '../data/posts';

export function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const filteredPosts = useMemo(() => {
        return POSTS.filter(post => {
            const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, selectedCategory]);

    const featuredPost = useMemo(() => POSTS.find(p => p.featured), []);

    return (
        <div className="min-h-screen bg-background pb-20">
            <SEO
                title="Blog da 7Pet | Dicas, Saúde e Comportamento Animal"
                description="O maior portal de conteúdo pet do Brasil. Artigos exclusivos escritos por especialistas para o bem-estar do seu melhor amigo."
            />

            {/* -- HEADER SECTION -- */}
            <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -ml-24 -mb-24 animate-pulse delay-700" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal direction="up">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-primary font-bold text-sm tracking-widest uppercase">Universo 7Pet</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 font-heading leading-tight">
                                Conteúdo com <span className="text-primary">Alma</span> e Pata.
                            </h1>
                            <p className="text-xl text-foreground/60 font-body leading-relaxed">
                                Explore artigos, guias e novidades curadas por especialistas para quem ama pets de verdade.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Search & Categories Bar */}
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between bg-white/50 backdrop-blur-xl p-4 lg:p-6 rounded-[2.5rem] border border-primary/10 shadow-xl mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                        <div className="flex flex-wrap justify-center gap-3">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${selectedCategory === cat
                                        ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                        : 'bg-background text-foreground/60 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full lg:w-96 group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40 group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Buscar no blog..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-background border border-primary/5 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-4 focus:ring-primary/20 text-foreground font-body transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* -- FEATURED POST (Big Card) -- */}
            {selectedCategory === "Todos" && !searchQuery && featuredPost && (
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                    <ScrollReveal threshold={0.1}>
                        <Link to={`/blog/${featuredPost.slug}`} className="group block h-full">
                            <div className="relative overflow-hidden rounded-[3.5rem] bg-white shadow-2xl border border-primary/5 h-full">
                                <div className="grid lg:grid-cols-2 h-full min-h-[500px]">
                                    <div className="relative overflow-hidden h-full">
                                        <img
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
                                        <div className="absolute top-8 left-8">
                                            <div className="bg-primary/90 backdrop-blur-md text-white px-5 py-2 rounded-full font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4" />
                                                Destaque da Semana
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-12 lg:p-16 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 text-primary font-bold mb-6 text-sm uppercase tracking-widest">
                                            <span>{featuredPost.category}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                                            <span>{featuredPost.readTime} leitura</span>
                                        </div>
                                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading group-hover:text-primary transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-xl text-foreground/60 mb-10 font-body leading-relaxed">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between border-t border-primary/5 pt-10 mt-auto">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl border-2 border-white shadow-lg">
                                                    {featuredPost.author.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-foreground">{featuredPost.author.name}</p>
                                                    <p className="text-sm text-foreground/40">{featuredPost.author.role}</p>
                                                </div>
                                            </div>
                                            <div className="hidden sm:flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">
                                                Ler Artigo <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </ScrollReveal>
                </section>
            )}

            {/* -- POSTS GRID -- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                {filteredPosts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredPosts.filter(p => selectedCategory !== "Todos" || !p.featured).map((post, i) => (
                            <ScrollReveal key={post.id} delay={i * 100} threshold={0.1}>
                                <Link to={`/blog/${post.slug}`} className="group block">
                                    <TiltCard tiltAmount={5} scale={1.02}>
                                        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-primary/5 hover:shadow-2xl transition-all h-full flex flex-col">
                                            <div className="relative h-64 overflow-hidden">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute top-6 left-6">
                                                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-primary shadow-lg uppercase tracking-wide">
                                                        {post.category}
                                                    </span>
                                                </div>
                                                <div className="absolute bottom-6 right-6 flex gap-2">
                                                    <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all shadow-md active:scale-90">
                                                        <Bookmark className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="p-10 flex flex-col flex-grow">
                                                <div className="flex items-center gap-4 text-xs font-bold text-foreground/40 mb-6 uppercase tracking-wider">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {post.date}
                                                    </div>
                                                    <div className="w-1 h-1 rounded-full bg-foreground/20" />
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {post.readTime}
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                                    {post.title}
                                                </h3>
                                                <p className="text-foreground/60 font-body mb-8 line-clamp-3 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between border-t border-primary/5 pt-8 mt-auto">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold border-2 border-white shadow-sm overflow-hidden">
                                                            <span className="text-xs">{post.author.name.charAt(0)}</span>
                                                        </div>
                                                        <p className="text-sm font-bold text-foreground/80">{post.author.name}</p>
                                                    </div>
                                                    <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-40 bg-white/50 backdrop-blur-md rounded-[4rem] border border-dashed border-primary/20">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Search className="w-10 h-10 text-primary animate-pulse" />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-4 font-heading">Ops! Patinhas não encontradas.</h3>
                        <p className="text-xl text-foreground/60 font-body max-w-md mx-auto">
                            Não encontramos nenhum artigo com "{searchQuery}". Tente outros termos ou navegue pelas categorias.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedCategory("Todos"); }}
                            className="mt-10 bg-primary/10 text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
                        >
                            Limpar Tudo
                        </button>
                    </div>
                )}
            </section>

            {/* -- NEWSLETTER SECTION (PREMIUM) -- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative">
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-foreground rounded-[4rem] lg:rounded-[6rem] -z-10" />
                <div className="bg-gradient-to-br from-primary to-secondary p-12 lg:p-24 rounded-[4rem] lg:rounded-[6rem] shadow-2xl overflow-hidden relative group">
                    {/* Animated Paws BG */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                        <PawPrint className="absolute top-10 left-10 w-32 h-32 rotate-12 animate-float-slow" />
                        <PawPrint className="absolute bottom-10 right-10 w-48 h-48 -rotate-12 animate-float" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-4 border-white/10 rounded-full animate-spin-slow" />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal direction="left">
                            <div className="text-white">
                                <span className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold text-sm tracking-[0.2em] uppercase mb-8 border border-white/30">
                                    Inside 7Pet 🐾
                                </span>
                                <h2 className="text-5xl lg:text-7xl font-bold mb-8 font-heading leading-tight drop-shadow-xl">
                                    Fique por dentro <br /> do mundo pet.
                                </h2>
                                <p className="text-xl lg:text-2xl text-white/90 font-body leading-relaxed max-w-xl">
                                    Receba dicas exclusivas, novidades em primeira mão e ofertas especiais direto no seu e-mail.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={300}>
                            <div className="bg-white/10 backdrop-blur-2xl p-8 lg:p-12 rounded-[3.5rem] border border-white/20 shadow-2xl">
                                <div className="space-y-6">
                                    <div className="relative">
                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
                                        <input
                                            type="email"
                                            placeholder="Seu melhor e-mail aqui..."
                                            className="w-full bg-white/10 border border-white/20 rounded-3xl py-6 pl-16 pr-8 text-white placeholder:text-white/40 focus:outline-none focus:ring-4 focus:ring-white/10 font-body text-lg transition-all"
                                        />
                                    </div>
                                    <MagneticButton
                                        variant="accent"
                                        size="lg"
                                        className="w-full py-6 text-xl rounded-3xl shadow-2xl active:scale-95 transition-all bg-white text-primary hover:bg-white/90"
                                    >
                                        Quero me inscrever! ✨
                                    </MagneticButton>
                                    <p className="text-center text-white/40 text-sm font-body">
                                        Prometemos: zero spam, 100% amor pelos animais.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}

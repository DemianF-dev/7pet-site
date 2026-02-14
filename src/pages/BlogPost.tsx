import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ChevronLeft,
    Share2,
    Heart,
    MessageCircle,
    ArrowRight,
    Facebook,
    Twitter,
    Instagram
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ScrollReveal';
import { MagneticButton } from '../components/MagneticButton';

import { POSTS } from '../data/posts';

export function BlogPost() {
    const { slug } = useParams();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [liked, setLiked] = useState(false);

    const post = POSTS.find(p => p.slug === slug) || POSTS[0];

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setScrollProgress((currentScroll / totalScroll) * 100);
        };
        window.addEventListener('scroll', handleScroll);
        window.scrollTo(0, 0);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [slug]);

    if (!post) return <div className="py-40 text-center">Post não encontrado.</div>;

    return (
        <div className="min-h-screen bg-background pb-20">
            <SEO
                title={`${post.title} | Blog 7Pet`}
                description={post.excerpt}
            />

            {/* Reading Progress Bar */}
            <div
                className="fixed top-20 left-0 h-1.5 bg-primary z-[60] transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Floating Action Bar */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white/80 backdrop-blur-2xl px-8 py-4 rounded-full border border-primary/10 shadow-2xl animate-fade-in-up">
                <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center gap-2 font-bold transition-all ${liked ? 'text-red-500 scale-110' : 'text-foreground/60 hover:text-primary'}`}
                >
                    <Heart className={`w-5 h-5 ${liked ? 'fill-red-500' : ''}`} />
                    <span className="text-sm">1.2k</span>
                </button>
                <div className="w-px h-6 bg-primary/10 mx-2"></div>
                <button className="flex items-center gap-2 text-foreground/60 hover:text-primary font-bold transition-all">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">48</span>
                </button>
                <div className="w-px h-6 bg-primary/10 mx-2"></div>
                <button className="text-foreground/60 hover:text-primary transition-all p-2 rounded-full hover:bg-primary/10">
                    <Share2 className="w-5 h-5" />
                </button>
            </div>

            {/* HEADER */}
            <section className="relative pt-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 h-[80%] -z-10 rounded-b-[5rem] lg:rounded-b-[8rem]" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <ScrollReveal direction="up">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-primary font-bold mb-10 hover:-translate-x-2 transition-transform"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            Voltar para o Blog
                        </Link>

                        <div className="flex items-center gap-4 text-primary font-bold mb-6 text-sm uppercase tracking-widest">
                            <span className="bg-primary/10 px-4 py-1.5 rounded-full">{post.category}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                            <span className="text-foreground/40">{post.readTime} de leitura</span>
                        </div>

                        <h1 className="text-4xl lg:text-7xl font-bold text-foreground mb-10 font-heading leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-between border-t border-primary/10 pt-10">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold border-4 border-white shadow-xl">
                                    {post.author.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-foreground text-lg">{post.author.name}</p>
                                    <p className="text-foreground/40">{post.date}</p>
                                </div>
                            </div>
                            <div className="hidden sm:flex gap-3">
                                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                    <button key={i} className="w-12 h-12 rounded-2xl bg-white border border-primary/5 flex items-center justify-center text-foreground/40 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all shadow-md">
                                        <Icon className="w-5 h-5" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* MAIN IMAGE */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-20">
                <ScrollReveal delay={300}>
                    <div className="relative rounded-[3.5rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-4 border-white">
                        <img src={post.image} alt={post.title} className="w-full h-[400px] lg:h-[700px] object-cover" />
                    </div>
                </ScrollReveal>
            </section>

            {/* CONTENT */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div
                    className="prose prose-xl prose-primary max-w-none text-foreground/80 font-body leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Author Card */}
                <div className="mt-20 p-10 lg:p-16 bg-white rounded-[4rem] border border-primary/5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32" />
                    <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-primary text-white flex items-center justify-center text-5xl font-bold border-8 border-background shadow-2xl group-hover:scale-110 transition-transform duration-500">
                            {post.author.name.charAt(0)}
                        </div>
                        <div className="text-center md:text-left">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Autor do Artigo</span>
                            <h3 className="text-3xl font-bold text-foreground mb-4 font-heading">{post.author.name}</h3>
                            <p className="text-xl text-foreground/60 mb-6 font-body leading-relaxed">{post.author.bio}</p>
                            <div className="flex justify-center md:justify-start gap-4">
                                <MagneticButton variant="outline" size="sm" className="rounded-full">Ver Perfil</MagneticButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED */}
            <section className="bg-primary/5 py-24 rounded-t-[5rem] lg:rounded-t-[8rem] mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-heading">Continue a leitura</h2>
                        <Link to="/blog" className="hidden sm:flex items-center gap-2 text-primary font-bold hover:translate-x-2 transition-transform">
                            Ver todos <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {POSTS.filter(p => p.slug !== slug).slice(0, 3).map((p, i) => (
                            <Link key={i} to={`/blog/${p.slug}`} className="group bg-white rounded-[2.5rem] overflow-hidden border border-primary/5 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                                <div className="h-48 overflow-hidden">
                                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">{p.category}</span>
                                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-heading mb-4 line-clamp-2 leading-tight">
                                        {p.title}
                                    </h4>
                                    <div className="flex items-center justify-between text-xs text-foreground/30 font-bold uppercase mt-auto">
                                        <span>{p.readTime} leitura</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    twitterCard?: string;
}

export function SEO({
    title = '7Pet - Transporte e Tudo para Pets',
    description = '7Pet - Transporte e Tudo para Pets. Cuidamos do seu melhor amigo com amor, segurança e diversão!',
    keywords = 'transporte pet, táxi dog, pet shop, passeio com cachorro, hospedagem pet, 7pet, cuidados com pets, osasco, são paulo',
    ogTitle,
    ogDescription,
    twitterCard = 'summary_large_image',
}: SEOProps) {
    const fullTitle = title.includes('7Pet') ? title : `${title} | 7Pet`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph */}
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || description} />

            {/* Semantic Tags */}
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={window.location.href} />
        </Helmet>
    );
}

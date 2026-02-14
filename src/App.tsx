import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Layout & Pages
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Differentials } from './pages/Differentials';
import { Partners } from './pages/Partners';
import { FAQ } from './pages/FAQ';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { ThePetBoutique } from './pages/ThePetBoutique';

function App() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [petMode, setPetMode] = useState(false);

  // Valores fixos para as estatísticas
  const counters = {
    years: 5,
    trips: 18200,
    clients: 2150
  };

  const location = useLocation();

  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const refs = {
    heroRef,
    servicesRef,
    aboutRef,
    processRef,
    testimonialsRef,
    statsRef
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (scrolled / height) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Robust Scroll To Section Helper
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    const navHeight = 84;
    let targetElement = ref.current;

    // Fallback: If ref is strictly null, try to find by ID based on known refs
    if (!targetElement) {
      if (ref === refs.heroRef) targetElement = document.getElementById('hero') as HTMLDivElement;
      if (ref === refs.servicesRef) targetElement = document.getElementById('services') as HTMLDivElement;
      if (ref === refs.aboutRef) targetElement = document.getElementById('about') as HTMLDivElement;
      if (ref === refs.processRef) targetElement = document.getElementById('process') as HTMLDivElement;
      if (ref === refs.testimonialsRef) targetElement = document.getElementById('testimonials') as HTMLDivElement;
    }

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn('Element not found for scrolling');
    }
  };

  const handleLogoClick = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 5000);
  };

  return (
    <Layout
      petMode={petMode}
      setPetMode={setPetMode}
      scrollProgress={scrollProgress}
      handleLogoClick={handleLogoClick}
      showEasterEgg={showEasterEgg}
      scrollToSection={scrollToSection}
      refs={refs}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Home
              petMode={petMode}
              counters={counters}
              scrollToSection={scrollToSection}
              refs={refs}
            />
          }
        />
        <Route path="/diferenciais" element={<Differentials />} />
        <Route path="/parceiros" element={<Partners />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/thepet" element={<ThePetBoutique />} />
      </Routes>
    </Layout>
  );
}

export default App;

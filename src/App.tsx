import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Layout & Pages
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Differentials } from './pages/Differentials';
import { Partners } from './pages/Partners';
import { FAQ } from './pages/FAQ';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [counters, setCounters] = useState({ years: 0, trips: 0, clients: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSloganHovered, setIsSloganHovered] = useState(false);
  const [petMode, setPetMode] = useState(false);

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
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / height) * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle cross-page scrolling
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const section = location.state.scrollTo as keyof typeof refs;
      setTimeout(() => {
        scrollToSection(refs[section]);
      }, 100);
    }
  }, [location]);

  // Counter animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [location.pathname]); // Re-observe if the path changes back to Home

  const animateCounters = () => {
    const duration = 2500;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        years: Math.floor(easeOut * 4),
        trips: Math.floor(easeOut * 13800),
        clients: Math.floor(easeOut * 1400)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const navHeight = 84;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = () => {
    setLogoClicks(prev => {
      const next = prev + 1;
      if (next === 7) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 5000);
        return 0;
      }
      return next;
    });
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
              mousePos={mousePos}
              isSloganHovered={isSloganHovered}
              setIsSloganHovered={setIsSloganHovered}
              petMode={petMode}
              counters={counters}
              scrollToSection={scrollToSection}
              refs={refs}
            />
          }
        />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/diferenciais" element={<Differentials />} />
        <Route path="/parceiros" element={<Partners />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Layout>
  );
}

export default App;

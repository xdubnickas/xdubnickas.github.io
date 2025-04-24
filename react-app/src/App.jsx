import { useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './contexts/LanguageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
    
    // Add light streak effect
    const lightStreak = document.createElement('div');
    lightStreak.classList.add('light-streak');
    document.body.appendChild(lightStreak);
    
    // Add background shapes
    const shapes = ['circle', 'square', 'triangle'];
    for (let i = 0; i < 6; i++) {
      const shape = document.createElement('div');
      shape.classList.add('bg-shape', shapes[i % shapes.length]);
      shape.style.top = `${Math.random() * 100}vh`;
      shape.style.left = `${Math.random() * 100}vw`;
      shape.style.animationDelay = `${Math.random() * 5}s`;
      shape.style.animationDuration = `${15 + Math.random() * 15}s`;
      document.body.appendChild(shape);
    }
    
    return () => {
      document.body.removeChild(lightStreak);
      const allShapes = document.querySelectorAll('.bg-shape');
      allShapes.forEach(shape => document.body.removeChild(shape));
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="app-container">
        <div className="noise-overlay"></div>
        <Header />
        <Navigation onNavigate={scrollToSection} />
        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;

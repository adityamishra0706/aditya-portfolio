import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Marquee from './components/Marquee';
import PovSection from './sections/PovSection';
import SelectedWork from './sections/SelectedWork';
import About from './sections/About';
import Capabilities from './sections/Capabilities';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Stylesheets
import './styles/variables.css';
import './styles/global.css';
import './styles/components.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/marquee.css';
import './styles/pov.css';
import './styles/work.css';
import './styles/about.css';
import './styles/capabilities.css';
import './styles/contact-footer.css';

export default function App() {
  // Subtle scroll entrance observer for elements with .reveal-on-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <PovSection />
        <SelectedWork />
        <About />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

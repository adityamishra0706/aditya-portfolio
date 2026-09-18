import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { portfolio } from '../data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-container nav-container">
        <a
          href="#hero"
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="nav-brand font-display"
          aria-label="Back to top"
        >
          {portfolio.navBrand}
        </a>

        <nav className="nav-links" aria-label="Main Navigation">
          <a
            href="#work"
            onClick={(e) => handleScrollTo(e, '#work')}
            className="nav-link"
          >
            WORK
          </a>
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="nav-link"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="nav-link"
          >
            CONTACT
          </a>
          <div className="nav-theme-wrap">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

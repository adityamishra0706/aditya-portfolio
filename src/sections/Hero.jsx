import React, { useRef, useEffect, useState } from 'react';
import { portfolio } from '../data/portfolio';

export default function Hero() {
  const { hero, instagram } = portfolio;
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure muted and attempt immediate autoplay
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy or media not yet loaded
      });
    }
  }, []);

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const target = document.querySelector(hero.ctaTarget || '#pov');
    if (target) {
      const navOffset = 70;
      const pos = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: pos - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Real Full-Screen Integrated Background Video */}
      <div className={`hero-video-viewport ${videoFailed ? 'fallback-active' : ''}`}>
        {!videoFailed && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`hero-bg-media ${videoLoaded ? 'is-visible' : ''}`}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoFailed(true)}
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        )}
        {/* Subtle dark overlay for optimal typography legibility */}
        <div className="hero-editorial-overlay" aria-hidden="true"></div>
      </div>

      {/* Typography Hierarchy Directly Over Video */}
      <div className="site-container hero-content-container">
        <div className="hero-composition">
          {/* Top @POV.ADITYA Identity row */}
          <div className="hero-identity-row">
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-identity-tag"
              title="Visit @POV.ADITYA on Instagram"
            >
              <span className="identity-dot"></span>
              <span className="identity-handle">{hero.identityBadge}</span>
            </a>
          </div>

          {/* Dominant Visual Signature Typography: ADITYA MISHRA */}
          <h1 className="hero-title font-signature">
            <span className="hero-name-line">{hero.firstName}</span>
            <span className="hero-name-line">{hero.lastName}</span>
          </h1>

          {/* Subtitle & Role */}
          <div className="hero-meta-row">
            <p className="hero-role-text">
              {hero.tagline}
            </p>
            <span className="hero-creator-badge">
              {hero.identityBadge}
            </span>
          </div>

          {/* Bottom Minimal CTA: WATCH MY WORK ↓ */}
          <div className="hero-bottom-cta-wrap">
            <a
              href={hero.ctaTarget || '#pov'}
              onClick={handleScrollToWork}
              className="hero-cta-link"
              aria-label="Scroll down to watch work"
            >
              <span>{hero.ctaLabel}</span>
              <span className="cta-arrow-down" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

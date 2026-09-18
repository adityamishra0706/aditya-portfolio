import React from 'react';
import { portfolio } from '../data/portfolio';

export default function Contact() {
  const { closing, instagram, linkedin } = portfolio;

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="site-container">
        <div className="contact-editorial-wrap">
          {/* Section Meta */}
          <div className="section-meta">
            <span className="section-tag accented">{closing.eyebrow}</span>
            <span className="section-divider-dot">•</span>
            <span className="section-tag">THE PROCESS CONTINUES</span>
          </div>

          {/* Monumental Creator Ending: KEEP WATCHING. */}
          <h2 className="contact-editorial-heading font-display">
            {closing.heading}
          </h2>

          <p className="contact-editorial-sub">
            {closing.subtext}
          </p>

          {/* Editorial Direct Links (Instagram & LinkedIn Only) */}
          <div className="contact-direct-links">
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-editorial-anchor"
            >
              <span className="anchor-text">{instagram.label}</span>
              <span className="anchor-arrow" aria-hidden="true">→</span>
            </a>

            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-editorial-anchor"
            >
              <span className="anchor-text">{linkedin.label}</span>
              <span className="anchor-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

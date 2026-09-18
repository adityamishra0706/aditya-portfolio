import React from 'react';
import EditorialImage from '../components/EditorialImage';
import { portfolio } from '../data/portfolio';

export default function About() {
  const { about, instagram, linkedin } = portfolio;

  return (
    <section id="about" className="about-section section-padding">
      <div className="site-container">
        <div className="about-editorial-grid">
          {/* Large Editorial Portrait (Rectangular, generous whitespace) */}
          <div className="about-portrait-wrap">
            <div className="about-portrait-frame">
              <EditorialImage
                src={about.image}
                alt={portfolio.name}
                aspectRatio="4/5"
                className="about-portrait-media"
              />
            </div>
            {about.statusBadge && (
              <div className="about-badge-line">
                <span className="about-badge-dot"></span>
                <span>{about.statusBadge}</span>
              </div>
            )}
          </div>

          {/* Editorial Narrative */}
          <div className="about-narrative-wrap">
            <div className="section-meta">
              <span className="section-tag accented">ABOUT</span>
              <span className="section-divider-dot">•</span>
              <span className="section-tag">ENGINEERING × CREATIVE LIFE</span>
            </div>

            <h2 className="about-display-title font-display">
              {about.heading}
            </h2>

            <div className="about-text-stream">
              {about.storyParagraphs.map((paragraph, index) => (
                <p key={index} className="about-narrative-p">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Direct Social Links (Instagram & LinkedIn Only) */}
            <div className="about-connections-strip">
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="about-connect-link"
              >
                <span className="connect-tag">INSTAGRAM</span>
                <span className="connect-val">{instagram.label}</span>
                <span className="connect-arrow" aria-hidden="true">→</span>
              </a>

              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="about-connect-link"
              >
                <span className="connect-tag">LINKEDIN</span>
                <span className="connect-val">{linkedin.label}</span>
                <span className="connect-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

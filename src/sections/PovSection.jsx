import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { portfolio } from '../data/portfolio';

export default function PovSection() {
  const { pov, instagram } = portfolio;

  // If no items are configured, return null to avoid any empty space
  if (!pov.items || pov.items.length === 0) {
    return null;
  }

  return (
    <section id="pov" className="pov-section section-padding">
      <div className="site-container">
        {/* Editorial Header */}
        <div className="pov-header-block">
          <div className="pov-meta-strip">
            <span className="pov-meta-tag">CREATOR PLATFORM</span>
            <span className="pov-meta-divider">/</span>
            <span className="pov-meta-tag">RAW TIMELINE & EXPERIMENTS</span>
          </div>

          <div className="pov-header-content">
            <div className="pov-title-group">
              <span className="pov-brand-handle">{pov.title}</span>
              <h2 className="pov-main-heading font-display">
                DOCUMENTING<br />THE PROCESS.
              </h2>
            </div>

            <div className="pov-bio-group">
              <p className="pov-bio-text">
                {pov.description}
              </p>
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pov-link-action"
              >
                <span>{pov.instagramCta}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Large Media Showcase */}
        <div className="pov-editorial-showcase">
          {pov.items.map((item, index) => (
            <div key={item.id} className="pov-media-column">
              <div className="pov-video-shell">
                <VideoPlayer
                  src={item.video}
                  aspectRatio={item.aspectRatio || '9/16'}
                  title={item.title}
                  category={item.category}
                />
              </div>

              <div className="pov-caption-shell">
                <div className="pov-caption-top">
                  <span className="pov-caption-index">0{index + 1}</span>
                  <span className="pov-caption-cat">{item.category}</span>
                </div>
                <h3 className="pov-caption-title font-display">{item.title}</h3>
                <p className="pov-caption-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Editorial Footer Line */}
        <div className="pov-strip-closing">
          <span className="pov-strip-note">ALL EXPERIMENTS ARCHIVED ON INSTAGRAM</span>
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pov-strip-link"
          >
            <span>VISIT @POV.ADITYA</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

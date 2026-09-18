import React from 'react';
import { portfolio } from '../data/portfolio';

export default function Capabilities() {
  const { capabilities } = portfolio;

  return (
    <section id="capabilities" className="capabilities-section section-padding">
      <div className="site-container">
        {/* Header */}
        <div className="capabilities-header">
          <div className="section-meta">
            <span className="section-tag accented">CREATIVE DIRECTION</span>
            <span className="section-divider-dot">•</span>
            <span className="section-tag">WHAT I DO</span>
          </div>
          <h2 className="section-heading-large font-display">
            WHAT I DO
          </h2>
        </div>

        {/* Minimal Editorial List (Exactly 4 items, no descriptions, no cards) */}
        <div className="capabilities-editorial-list">
          {capabilities.map((item) => (
            <div key={item.number} className="capability-row">
              <div className="capability-item-wrap">
                <span className="capability-num font-display">{item.number} /</span>
                <h3 className="capability-name font-display">{item.title}</h3>
              </div>
              <span className="capability-arrow" aria-hidden="true">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

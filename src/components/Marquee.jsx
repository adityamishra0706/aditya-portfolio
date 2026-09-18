import React from 'react';
import { portfolio } from '../data/portfolio';

export default function Marquee() {
  const items = portfolio.marquee;
  // Repeat items to ensure continuous infinite loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {repeatedItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span className="marquee-text font-display">{item}</span>
            <span className="marquee-dot">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

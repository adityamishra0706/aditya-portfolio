import React from 'react';
import { portfolio } from '../data/portfolio';

export default function Footer() {
  const { footer, instagram } = portfolio;

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">
      <div className="site-container footer-container">
        <div className="footer-left">
          <span className="footer-copy">{footer.copyright}</span>
          <span className="footer-divider-dot">•</span>
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-identity-link"
          >
            {footer.identity}
          </a>
        </div>

        <div className="footer-right">
          <a
            href="#hero"
            onClick={handleScrollToTop}
            className="footer-top-btn"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

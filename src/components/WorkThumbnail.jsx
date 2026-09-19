import React, { useState } from 'react';

/**
 * WorkThumbnail:
 * Pure static visual thumbnail component for the WORK section.
 * - Renders a custom static image (<img>) with smooth fade-in
 * - NO video elements, NO audio, NO autoplay, NO controls
 * - Accessible alt text for all work items
 * - Includes a subtle external link indicator (↗) on hover
 */
export default function WorkThumbnail({
  src,
  alt,
  title,
  badge,
  aspectRatio = '16/9',
  className = '',
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectClass = aspectRatio === '9/16' ? 'aspect-9-16' : 'aspect-16-9';
  const altText = alt || (title ? `${title} — @POV.ADITYA` : 'Project thumbnail — @POV.ADITYA');

  return (
    <div className={`work-thumbnail-container ${aspectClass} ${className}`}>
      {src && !hasError ? (
        <img
          src={src}
          alt={altText}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`work-thumbnail-img ${isLoaded ? 'loaded' : ''}`}
        />
      ) : (
        <div className="work-thumbnail-fallback">
          <div className="fallback-badge-pill">
            <span>{badge || '@POV.ADITYA'}</span>
          </div>
          {title && <h4 className="fallback-title font-display">{title}</h4>}
        </div>
      )}

      {/* Subtle hover destination indicator */}
      <div className="work-external-hint" aria-hidden="true">
        <span className="hint-arrow">↗</span>
      </div>
    </div>
  );
}

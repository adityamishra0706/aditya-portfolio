import React, { useState } from 'react';

/**
 * Editorial Image component with graceful fallback.
 * If image is missing, renders a clean editorial portrait frame without broken image icons.
 */
export default function EditorialImage({
  src,
  alt,
  className = '',
  aspectRatio = '4/5',
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`editorial-image-wrapper ${className}`} style={{ aspectRatio }}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`editorial-img ${isLoaded ? 'loaded' : ''}`}
          loading="lazy"
        />
      ) : null}

      {hasError && (
        <div className="image-fallback-card">
          <div className="image-fallback-inner">
            <span className="image-fallback-pill">EDITORIAL PORTRAIT</span>
            <div className="portrait-monogram font-display">ADITYA MISHRA</div>
            <code className="fallback-path-hint">public{src}</code>
          </div>
        </div>
      )}
    </div>
  );
}

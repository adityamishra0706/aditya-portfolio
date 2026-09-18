import React, { useState, useRef, useEffect } from 'react';

/**
 * Reusable Video Player component:
 * - Autoplays muted loop videos smoothly
 * - Lazy loads video via IntersectionObserver
 * - Never shows broken video icons: if media is missing or fails to load,
 *   renders an intentional editorial placeholder showing MEDIA PREVIEW and file path.
 * - In hero mode, gracefully shows a dark cinematic ambient canvas.
 */
export default function VideoPlayer({
  src,
  poster,
  title,
  category,
  aspectRatio = '16/9',
  isHero = false,
  autoPlay = true,
  loop = true,
  muted = true,
  className = '',
}) {
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-play / pause based on intersection observer for performance
  useEffect(() => {
    if (isHero) return; // Hero handled with priority

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current || hasError) return;
        if (entry.isIntersecting) {
          videoRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              setIsPlaying(false);
            });
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasError, isHero]);

  const handleVideoError = () => {
    setHasError(true);
  };

  const handleLoadedData = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const togglePlayback = () => {
    if (!videoRef.current || hasError) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const aspectClass = aspectRatio === '9/16' ? 'aspect-9-16' : 'aspect-16-9';

  return (
    <div
      ref={containerRef}
      className={`video-player-container ${isHero ? 'hero-video-mode' : aspectClass} ${className}`}
      onClick={!isHero ? togglePlayback : undefined}
    >
      {!hasError ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          preload={isHero ? 'auto' : 'metadata'}
          onError={handleVideoError}
          onLoadedData={handleLoadedData}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className={`video-element ${isLoaded ? 'loaded' : ''}`}
        />
      ) : null}

      {/* Fallback for missing/pending non-hero video */}
      {hasError && !isHero && (
        <div className="video-fallback-editorial">
          <div className="fallback-meta-pill">
            <span className="fallback-live-dot"></span>
            <span>MEDIA PREVIEW</span>
          </div>
          {title && <h4 className="fallback-media-title font-display">{title}</h4>}
          <div className="fallback-target-box">
            <code>public{src}</code>
          </div>
        </div>
      )}

      {/* Non-hero subtle playing/paused indicator */}
      {!isHero && !hasError && isLoaded && (
        <div className="video-status-indicator" aria-hidden="true">
          <span className={`status-dot ${isPlaying ? 'playing' : 'paused'}`}></span>
          <span className="status-text">{isPlaying ? 'PLAYING' : 'PAUSED'}</span>
        </div>
      )}
    </div>
  );
}

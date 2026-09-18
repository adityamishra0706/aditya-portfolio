import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { portfolio } from '../data/portfolio';

export default function SelectedWork() {
  const { selectedWork } = portfolio;

  // Project 01: Coke Ad (Primary widescreen work)
  const cokeProject = selectedWork.find((item) => item.id === 'coke-ad') || selectedWork[0];
  // Project 02: Curls (Landscape 16:9 matching Coke layout)
  const curlsProject = selectedWork.find((item) => item.id === 'curls-ad') || selectedWork[1];
  // Project 03: Fashion Reel 01 (Unchanged vertical format)
  const fashionProject = selectedWork.find((item) => item.id === 'fashion-reel-01') || selectedWork[2];

  return (
    <section id="work" className="work-section section-padding">
      <div className="site-container">
        {/* Section Header */}
        <div className="work-header-row">
          <div className="section-meta">
            <span className="section-tag accented">SELECTED WORK</span>
            <span className="section-divider-dot">•</span>
            <span className="section-tag">COMMERCIAL & SHORT-FORM</span>
          </div>
          <h2 className="section-heading-large font-display">
            SELECTED WORK
          </h2>
        </div>

        {/* Editorial Work Stream (Visually Dominant Media) */}
        <div className="work-editorial-stream">
          {/* 01 — COKE AD (Landscape 16:9) */}
          {cokeProject && (
            <article className="work-feature-entry">
              <div className="work-feature-media">
                <VideoPlayer
                  src={cokeProject.video}
                  aspectRatio="16/9"
                  title={cokeProject.title}
                  category={cokeProject.category}
                />
              </div>

              <div className="work-feature-info">
                <div className="work-meta-badges">
                  <span className="work-badge-tag">{cokeProject.badge || '01 / COMMERCIAL'}</span>
                  <span className="work-badge-dot">•</span>
                  <span className="work-badge-tag">{cokeProject.label || 'EDITED'}</span>
                </div>

                <div className="work-text-group">
                  <h3 className="work-title-display font-display">{cokeProject.title}</h3>
                  <p className="work-body-desc">{cokeProject.description}</p>
                </div>
              </div>
            </article>
          )}

          {/* 02 — CURLS (Landscape 16:9, exactly matching Coke container/layout) */}
          {curlsProject && (
            <article className="work-feature-entry">
              <div className="work-feature-media">
                <VideoPlayer
                  src={curlsProject.video}
                  aspectRatio="16/9"
                  title={curlsProject.title}
                  category={curlsProject.category}
                />
              </div>

              <div className="work-feature-info">
                <div className="work-meta-badges">
                  <span className="work-badge-tag">{curlsProject.badge || '02 / EXPERIMENT'}</span>
                  <span className="work-badge-dot">•</span>
                  <span className="work-badge-tag">{curlsProject.label || 'SHOT + EDITED'}</span>
                </div>

                <div className="work-text-group">
                  <div className="work-title-wrap">
                    <h3 className="work-title-display font-display">{curlsProject.title}</h3>
                    {curlsProject.hook && (
                      <h4 className="curls-creative-hook font-display">
                        {curlsProject.hook}
                      </h4>
                    )}
                  </div>
                  <p className="work-body-desc">{curlsProject.description}</p>
                </div>
              </div>
            </article>
          )}

          {/* 03 — FASHION REEL 01 (Unchanged vertical format) */}
          {fashionProject && (
            <div className="work-vertical-wrap">
              <article className="work-vertical-entry fashion-entry">
                <div className="vertical-header-meta">
                  <div className="work-meta-badges">
                    <span className="work-badge-tag">{fashionProject.badge || '03 / REEL'}</span>
                    <span className="work-badge-dot">•</span>
                    <span className="work-badge-tag">{fashionProject.label || 'SHOT + EDITED'}</span>
                  </div>
                  <h3 className="vertical-title font-display">{fashionProject.title}</h3>
                  <h4 className="fashion-creative-hook font-display">
                    COLLEGE SOCIETY VISUAL
                  </h4>
                </div>

                <div className="vertical-media-frame">
                  <VideoPlayer
                    src={fashionProject.video}
                    aspectRatio="9/16"
                    title={fashionProject.title}
                    category={fashionProject.category}
                  />
                </div>

                <div className="vertical-bottom-meta">
                  <p className="vertical-desc">{fashionProject.description}</p>
                </div>
              </article>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

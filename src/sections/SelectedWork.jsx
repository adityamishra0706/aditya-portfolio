import React from 'react';
import WorkThumbnail from '../components/WorkThumbnail';
import { portfolio } from '../data/portfolio';

function WorkCardLink({ project, children, className = '' }) {
  const hasUrl = Boolean(project.externalUrl);

  return (
    <a
      href={hasUrl ? project.externalUrl : undefined}
      target={hasUrl ? '_blank' : undefined}
      rel={hasUrl ? 'noopener noreferrer' : undefined}
      onClick={(e) => {
        if (!hasUrl) {
          e.preventDefault();
        }
      }}
      className={`work-card-link ${hasUrl ? 'has-destination' : 'destination-pending'} ${className}`}
      aria-label={`${project.title} — Watch on Instagram`}
    >
      {children}
    </a>
  );
}

export default function SelectedWork() {
  const { selectedWork } = portfolio;

  // Project 01: Coke Ad (Primary widescreen work)
  const cokeProject = selectedWork.find((item) => item.id === 'coke-ad') || selectedWork[0];
  // Project 02: Curls (Landscape 16:9 matching Coke layout)
  const curlsProject = selectedWork.find((item) => item.id === 'curls-ad') || selectedWork[1];
  // Project 03: Fashion Reel 01 (Vertical 9:16)
  const fashion01Project = selectedWork.find((item) => item.id === 'fashion-reel-01') || selectedWork[2];
  // Project 04: Fashion Reel 02 (Vertical 9:16)
  const fashion02Project = selectedWork.find((item) => item.id === 'fashion-reel-02') || selectedWork[3];

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

        {/* Editorial Work Stream */}
        <div className="work-editorial-stream">
          {/* 01 — COKE AD (Landscape 16:9) */}
          {cokeProject && (
            <WorkCardLink project={cokeProject}>
              <article className="work-feature-entry">
                <div className="work-feature-media">
                  <WorkThumbnail
                    src={cokeProject.thumbnail}
                    alt={cokeProject.alt}
                    aspectRatio="16/9"
                    title={cokeProject.title}
                    badge={cokeProject.badge}
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
            </WorkCardLink>
          )}

          {/* 02 — CURLS (Landscape 16:9, matching Coke container/layout) */}
          {curlsProject && (
            <WorkCardLink project={curlsProject}>
              <article className="work-feature-entry">
                <div className="work-feature-media">
                  <WorkThumbnail
                    src={curlsProject.thumbnail}
                    alt={curlsProject.alt}
                    aspectRatio="16/9"
                    title={curlsProject.title}
                    badge={curlsProject.badge}
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
            </WorkCardLink>
          )}

          {/* Vertical Reels Grid (03 — FASHION REEL 01 & 04 — FASHION REEL 02) */}
          <div className="work-verticals-grid">
            {/* 03 — FASHION REEL 01 */}
            {fashion01Project && (
              <WorkCardLink project={fashion01Project}>
                <article className="work-vertical-entry fashion-entry">
                  <div className="vertical-header-meta">
                    <div className="work-meta-badges">
                      <span className="work-badge-tag">{fashion01Project.badge || '03 / REEL'}</span>
                      <span className="work-badge-dot">•</span>
                      <span className="work-badge-tag">{fashion01Project.label || 'SHOT + EDITED'}</span>
                    </div>
                    <h3 className="vertical-title font-display">{fashion01Project.title}</h3>
                    <h4 className="fashion-creative-hook font-display">
                      COLLEGE SOCIETY VISUAL
                    </h4>
                  </div>

                  <div className="vertical-media-frame">
                    <WorkThumbnail
                      src={fashion01Project.thumbnail}
                      alt={fashion01Project.alt}
                      aspectRatio="9/16"
                      title={fashion01Project.title}
                      badge={fashion01Project.badge}
                    />
                  </div>

                  <div className="vertical-bottom-meta">
                    <p className="vertical-desc">{fashion01Project.description}</p>
                  </div>
                </article>
              </WorkCardLink>
            )}

            {/* 04 — FASHION REEL 02 */}
            {fashion02Project && (
              <WorkCardLink project={fashion02Project}>
                <article className="work-vertical-entry fashion-entry">
                  <div className="vertical-header-meta">
                    <div className="work-meta-badges">
                      <span className="work-badge-tag">{fashion02Project.badge || '04 / REEL'}</span>
                      <span className="work-badge-dot">•</span>
                      <span className="work-badge-tag">{fashion02Project.label || 'SHOT + EDITED'}</span>
                    </div>
                    <h3 className="vertical-title font-display">{fashion02Project.title}</h3>
                    {fashion02Project.hook && (
                      <h4 className="fashion-creative-hook font-display">
                        {fashion02Project.hook}
                      </h4>
                    )}
                  </div>

                  <div className="vertical-media-frame">
                    <WorkThumbnail
                      src={fashion02Project.thumbnail}
                      alt={fashion02Project.alt}
                      aspectRatio="9/16"
                      title={fashion02Project.title}
                      badge={fashion02Project.badge}
                    />
                  </div>

                  <div className="vertical-bottom-meta">
                    <p className="vertical-desc">{fashion02Project.description}</p>
                  </div>
                </article>
              </WorkCardLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

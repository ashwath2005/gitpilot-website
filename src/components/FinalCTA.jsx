import React from 'react';
import { Github } from 'lucide-react';
import { PRODUCT } from '../config/product';
import { DownloadButton } from './DownloadButton';

export const FinalCTA = () => {
  return (
    <section className="cta-sc" id="get-started">
      <div className="container cta-s">
        <div className="cta-card-wrapper">
          <div className="cta-card">
            <div className="cta-badge-wrap">
              <span className="badge badge-primary font-mono">
                ● Free & Open-Source under MIT
              </span>
            </div>

            <h2 className="cta-title">
              Your Best Code <span className="font-serif-italic">Starts Here</span>
            </h2>

            <p className="cta-description">
              Experience autonomous Git workspace monitoring, sub-millisecond AST diffs, and automatic conventional commits on your local machine.
            </p>

            <div className="cta-actions">
              <DownloadButton
                id="final-cta-btn"
                text="Download for Windows (.exe) →"
                size="lg"
              />

              <a
                href={PRODUCT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="main-btn main-btn-secondary main-btn-lg"
              >
                <Github size={17} />
                <span>View on GitHub</span>
              </a>
            </div>

            <div className="cta-meta-strip font-mono">
              <span>Windows 10 / 11 64-bit</span>
              <span className="meta-dot">•</span>
              <span>v{PRODUCT.version}</span>
              <span className="meta-dot">•</span>
              <span>Zero Cloud Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

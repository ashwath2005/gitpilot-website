import React from 'react';
import { Github, Sparkles } from 'lucide-react';
import { PRODUCT } from '../config/product';
import { DownloadButton } from './DownloadButton';

export const Hero = () => {
  return (
    <section className="sc-hero-section" id="hero">
      {/* Ambient Rotating Glow Blob */}
      <div className="sc-hero-blur-blob"></div>

      <div className="container sc-hero-content">
        <div className="sc-hero-tag-wrap">
          <span className="section-tag">
            <Sparkles size={13} className="text-primary-bright" />
            Next-Gen Autonomous Git Client • {PRODUCT.supportedOs}
          </span>
        </div>

        <div className="sc-hero-title-wrap">
          <h1 className="sc-headline-mega">
            gitpilot
          </h1>
          <div className="sc-hero-tagline">
            Your Git Workspace. <span className="font-serif-italic">On Autopilot.</span>
          </div>
        </div>

        <p className="sc-hero-description">
          Monitor repositories, inspect semantic AST diffs, block leaked credentials, and generate standardized Conventional Commits on pure autopilot.
        </p>

        {/* Superconscious Glass Floating Download Action Capsule */}
        <div className="sc-download-capsule" style={{ marginBottom: '0px' }}>
          <div className="sc-capsule-info">
            <div className="sc-capsule-headline">
              <span className="live-dot"></span>
              <span>Desktop Edition v{PRODUCT.version}</span>
            </div>
            <div className="sc-capsule-sub font-mono">
              64-bit Windows NSIS Installer ({PRODUCT.installerFileName})
            </div>
          </div>

          <div className="sc-capsule-actions">
            <DownloadButton
              id="hero-download-btn"
              text="Download GitPilot →"
              size="lg"
            />

            <a
              id="hero-github-btn"
              href={PRODUCT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="main-btn main-btn-secondary main-btn-lg"
            >
              <Github size={17} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

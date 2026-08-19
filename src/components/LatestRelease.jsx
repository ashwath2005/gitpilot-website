import React from 'react';
import { ExternalLink, FileCheck, HardDrive, Info } from 'lucide-react';
import { useRelease } from '../services/useRelease';
import { DownloadButton } from './DownloadButton';

export const LatestRelease = () => {
  const product = useRelease();

  return (
    <section className="section release-section" id="release">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Release Channel</span>
          <h2 className="section-title">Latest Stable Release</h2>
          <p className="section-subtitle">
            Official installation packages and artifacts for Windows 10 and 11.
          </p>
        </div>

        <div className="release-card">
          <div className="release-card-top">
            <div className="release-title-area">
              <div className="release-tag-group">
                <span className="badge badge-success">Latest Stable</span>
                <span className="badge badge-primary font-mono">v{product.version}</span>
              </div>
              <h3 className="release-name">{product.name} for {product.platform}</h3>
              <p className="release-meta text-secondary">
                {product.supportedOs} • {product.architecture} • Released {product.releaseDate}
              </p>
            </div>

            <div className="release-actions-group">
              <DownloadButton
                id="release-download-btn"
                text="Download Installer (.exe) →"
                variant="primary"
                size="lg"
              />

              <a
                id="release-notes-btn"
                href={product.releaseNotesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <ExternalLink size={15} />
                <span>Release Notes</span>
              </a>
            </div>
          </div>

          <div className="release-details-grid">
            <div className="release-detail-item">
              <FileCheck size={18} className="text-primary-bright" />
              <div>
                <span className="detail-label">Installer Package:</span>
                <span className="detail-val font-mono">{product.installerFileName}</span>
              </div>
            </div>

            <div className="release-detail-item">
              <HardDrive size={18} className="text-primary-bright" />
              <div>
                <span className="detail-label">Platform Target:</span>
                <span className="detail-val font-mono">Windows x64 NSIS</span>
              </div>
            </div>

            <div className="release-detail-item">
              <Info size={18} className="text-success" />
              <div>
                <span className="detail-label">Prerequisites:</span>
                <span className="detail-val font-mono">Git 2.20+ in PATH</span>
              </div>
            </div>
          </div>

          <div className="release-hosting-notice">
            <Info size={16} className="text-primary-bright" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              <strong>Distribution:</strong> The Windows installer is packaged with NSIS and integrates automated update checks with the GitHub Releases channel.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

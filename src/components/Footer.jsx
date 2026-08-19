import React from 'react';
import { PRODUCT } from '../config/product';
import { DownloadButton } from './DownloadButton';

export const Footer = ({ onOpenAdmin }) => {
  return (
    <footer id="contacts" className="footer">
      <section id="contacts" className="footer-sc">
        <div className="container footer-s">
          <div className="footer-top-block">
            <div className="footer-top-links">
              <div className="footer-mail-block">
                <p className="body-main opacity-80 font-mono">AUTONOMOUS WORKSPACE</p>
                <a href={`mailto:${PRODUCT.supportEmail || 'support@gitpilot.dev'}`} className="footer-mail-link">
                  hello@gitpilot.dev
                </a>
              </div>
            </div>

            <div className="footer-download-app">
              <div className="hero-download-text">
                <div className="body-middle">Desktop Edition v{PRODUCT.version}</div>
                <div className="body-main opacity-80">64-bit Windows 10 & 11 • NSIS Standalone Installer</div>
              </div>
              <div className="hero-download-buttons">
                <span className="badge badge-success font-mono">
                  ● Ready for Windows
                </span>
              </div>
            </div>
          </div>

          <div className="footer-middle-block">
            <div className="footer-media-links">
              <a
                href={PRODUCT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-media-link nav-link"
              >
                <div className="hover-link-mask">
                  <div className="media-link-text original">GitHub</div>
                  <div className="media-link-text clone">GitHub</div>
                </div>
              </a>

              <a
                href={PRODUCT.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-media-link nav-link"
              >
                <div className="hover-link-mask">
                  <div className="media-link-text original">Releases</div>
                  <div className="media-link-text clone">Releases</div>
                </div>
              </a>

              <a
                href={PRODUCT.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-media-link nav-link"
              >
                <div className="hover-link-mask">
                  <div className="media-link-text original">Documentation</div>
                  <div className="media-link-text clone">Documentation</div>
                </div>
              </a>

              <a
                href={PRODUCT.changelogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-media-link nav-link"
              >
                <div className="hover-link-mask">
                  <div className="media-link-text original">Changelog</div>
                  <div className="media-link-text clone">Changelog</div>
                </div>
              </a>

              {onOpenAdmin && (
                <button
                  type="button"
                  onClick={onOpenAdmin}
                  className="footer-media-link nav-link"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  <div className="hover-link-mask">
                    <div className="media-link-text original">Admin Portal</div>
                    <div className="media-link-text clone" style={{ color: '#818CF8' }}>Admin Portal</div>
                  </div>
                </button>
              )}
            </div>
          </div>

          <div className="footer-down-block">
            <div aria-hidden="true" className="footer-name">
              GITPILOT
            </div>
            <div className="footer-down-info">
              <div className="policy-link">© 2026 GitPilot. Released under the MIT License.</div>
              <div className="footer-policy-links" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span className="badge badge-success font-mono" style={{ fontSize: '11px' }}>
                  ● Production Ready v{PRODUCT.version}
                </span>
                {onOpenAdmin && (
                  <button
                    type="button"
                    onClick={onOpenAdmin}
                    className="footer-admin-badge font-mono"
                    title="Open Administrator Console (Ctrl+Shift+A)"
                  >
                    🔒 Admin
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

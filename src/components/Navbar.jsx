import React, { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { PRODUCT } from '../config/product';
import { DownloadButton } from './DownloadButton';
import { BrandLogo } from './BrandLogo';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Security', href: '#security' },
    { name: 'Release', href: '#release' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header className="sc-navbar-wrapper">
        <div className="container sc-navbar-inner">
          <a href="#" className="sc-brand-link">
            <BrandLogo size={34} />
            <span className="sc-brand-name">
              gitpilot
            </span>
          </a>

          {/* Desktop Nav with Hover Slide Masks */}
          <nav className="sc-nav-links">
            {navLinks.map((item, idx) => (
              <a key={idx} href={item.href} className="sc-nav-link nav-link">
                <span className="hover-link-mask">
                  <span className="original">{item.name}</span>
                  <span className="clone">{item.name}</span>
                </span>
              </a>
            ))}
          </nav>

          <div className="sc-nav-actions">
            <a
              href={PRODUCT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sc-github-link"
              title="View on GitHub"
            >
              <Github size={16} />
              <span className="hide-mobile">GitHub</span>
            </a>

            <DownloadButton
              id="navbar-download-btn"
              text="Download"
              size="sm"
            />

            <button
              className="sc-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sc-mobile-menu">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="sc-mobile-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div style={{ marginTop: '12px' }}>
            <DownloadButton
              id="mobile-download-btn"
              text="Download GitPilot for Windows →"
              size="md"
            />
          </div>
        </div>
      )}
    </>
  );
};

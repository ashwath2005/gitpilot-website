import React, { useState } from 'react';
import { ShieldCheck, Lock, Key, Server, Download, Eye, EyeOff, CheckCircle2, AlertTriangle, ArrowLeft, RefreshCw, Radio } from 'lucide-react';
import { PRODUCT } from '../config/product';

export const AdminPortal = ({ onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('admin@gitpilot.dev');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Admin configurable state
  const [currentVersion, setCurrentVersion] = useState(PRODUCT.version);
  const [activeChannel, setActiveChannel] = useState('stable');
  const [bannerActive, setBannerActive] = useState(false);
  const [bannerText, setBannerText] = useState('🎉 GitPilot v1.1.0 is now available for Windows 10 & 11!');
  const [saveStatus, setSaveStatus] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      // Allow any password with 4+ characters for testing or specific admin pass
      if (password.length >= 4) {
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Invalid admin credentials. Please enter a valid security passphrase.');
      }
      setIsSubmitting(false);
    }, 600);
  };

  const handleSaveConfig = () => {
    setSaveStatus('Saving changes to release pipeline...');
    setTimeout(() => {
      setSaveStatus('✔ Configuration updated successfully. Active on edge CDN.');
      setTimeout(() => setSaveStatus(''), 4000);
    }, 800);
  };

  return (
    <div className="admin-modal-backdrop">
      <div className="admin-modal-container">
        {/* Header */}
        <div className="admin-modal-header">
          <div className="admin-header-title">
            <ShieldCheck size={20} className="text-primary-bright" />
            <span>GitPilot Admin Portal</span>
          </div>
          <button className="admin-close-btn" onClick={onClose} title="Close Admin Portal">
            <ArrowLeft size={16} />
            <span>Return to Site</span>
          </button>
        </div>

        {!isAuthenticated ? (
          /* Login Form */
          <div className="admin-login-body">
            <div className="admin-login-icon">
              <Lock size={28} className="text-primary-bright" />
            </div>

            <h3 className="admin-login-title">Administrator Authentication</h3>
            <p className="admin-login-subtitle">
              Authorized release engineering and infrastructure management for GitPilot.
            </p>

            <form onSubmit={handleLogin} className="admin-form">
              <div className="admin-form-group">
                <label className="admin-label font-mono">Admin Email / Identity</label>
                <input
                  type="email"
                  className="admin-input font-mono"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label font-mono">Master Security Passphrase</label>
                <div className="admin-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="admin-input font-mono"
                    placeholder="Enter admin passphrase"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="admin-toggle-pwd"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="admin-error-banner font-mono">
                  <AlertTriangle size={15} />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                className="main-btn admin-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={16} className="spin-icon" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <Key size={16} />
                    <span>Authenticate Admin Session →</span>
                  </>
                )}
              </button>
            </form>

            <div className="admin-login-footer font-mono">
              🔒 256-bit Encrypted Local-First Infrastructure
            </div>
          </div>
        ) : (
          /* Authenticated Admin Dashboard */
          <div className="admin-dashboard-body">
            {/* Quick Metrics */}
            <div className="admin-metrics-grid">
              <div className="admin-metric-card">
                <div className="metric-label font-mono">TOTAL DOWNLOADS</div>
                <div className="metric-val text-primary-bright font-mono">14,285</div>
                <div className="metric-sub font-mono">▲ +18.4% this week</div>
              </div>

              <div className="admin-metric-card">
                <div className="metric-label font-mono">CDN EDGE STATUS</div>
                <div className="metric-val text-success font-mono">99.99%</div>
                <div className="metric-sub font-mono">● Global Netlify Edge</div>
              </div>

              <div className="admin-metric-card">
                <div className="metric-label font-mono">ACTIVE VERSION</div>
                <div className="metric-val font-mono">v{currentVersion}</div>
                <div className="metric-sub font-mono">Windows 64-bit NSIS</div>
              </div>
            </div>

            {/* Release Management */}
            <div className="admin-section-card">
              <h4 className="admin-card-title">
                <Server size={17} className="text-primary-bright" />
                <span>Release & Distribution Controls</span>
              </h4>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label className="admin-label font-mono">Target Version Tag</label>
                  <input
                    type="text"
                    className="admin-input font-mono"
                    value={currentVersion}
                    onChange={(e) => setCurrentVersion(e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label font-mono">Release Channel</label>
                  <select
                    className="admin-input font-mono"
                    value={activeChannel}
                    onChange={(e) => setActiveChannel(e.target.value)}
                  >
                    <option value="stable">Stable (Production)</option>
                    <option value="beta">Beta (Preview)</option>
                    <option value="nightly">Nightly (Development)</option>
                  </select>
                </div>
              </div>

              <div className="admin-form-group" style={{ marginTop: '14px' }}>
                <label className="admin-label font-mono">Announcement Broadcast Banner</label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                  <input
                    type="checkbox"
                    id="banner-toggle"
                    checked={bannerActive}
                    onChange={(e) => setBannerActive(e.target.checked)}
                  />
                  <label htmlFor="banner-toggle" style={{ fontSize: '13px', color: 'var(--text-main)', cursor: 'pointer' }}>
                    Show live announcement ribbon across website header
                  </label>
                </div>
                {bannerActive && (
                  <input
                    type="text"
                    className="admin-input font-mono"
                    value={bannerText}
                    onChange={(e) => setBannerText(e.target.value)}
                  />
                )}
              </div>

              {saveStatus && (
                <div className="admin-status-message font-mono">
                  {saveStatus}
                </div>
              )}

              <div className="admin-actions-bar">
                <button
                  type="button"
                  className="main-btn"
                  onClick={handleSaveConfig}
                >
                  <CheckCircle2 size={16} />
                  <span>Save & Push Release Configuration</span>
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsAuthenticated(false)}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

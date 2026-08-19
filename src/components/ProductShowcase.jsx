import React, { useState } from 'react';
import {
  ShieldCheck,
  Terminal,
  FolderGit2,
  CheckCircle2,
  Clock,
  Play,
  Lock,
  AlertTriangle,
  Cpu,
  RefreshCw,
} from 'lucide-react';
import { PRODUCT } from '../config/product';

export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('diff');

  return (
    <section className="section showcase-section" id="product">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Desktop Interface</span>
          <h2 className="section-title">Built for Multi-Repository Control</h2>
          <p className="section-subtitle">
            A native Windows application engineered for high-speed local Git monitoring, secret protection, and automated synchronization.
          </p>
        </div>

        <div className="showcase-window-wrapper">
          <div className="showcase-ambient-glow" aria-hidden="true"></div>

          <div className="desktop-mockup-window" role="region" aria-label="GitPilot Desktop Application Preview">
            {/* Window Titlebar */}
            <div className="mockup-titlebar">
              <div className="mockup-controls">
                <span className="control-dot dot-close"></span>
                <span className="control-dot dot-min"></span>
                <span className="control-dot dot-max"></span>
              </div>
              <div className="mockup-title-text font-mono">
                GitPilot v{PRODUCT.version} • Autonomous Mode: ACTIVE • 8 Repositories
              </div>
              <div className="mockup-status-badges">
                <span className="badge badge-success" style={{ fontSize: '10.5px' }}>
                  <CheckCircle2 size={11} /> Git 2.40+ OK
                </span>
                <span className="badge badge-primary" style={{ fontSize: '10.5px' }}>
                  Ctrl + K
                </span>
              </div>
            </div>

            {/* Window Body 3-Pane Grid */}
            <div className="mockup-body-grid">
              {/* Left Pane: Repository Sidebar */}
              <aside className="mockup-sidebar">
                <div className="mockup-sidebar-header">
                  <FolderGit2 size={13} />
                  <span>MONITORED WORKSPACES</span>
                </div>
                <div className="mockup-repo-list">
                  <div className="mockup-repo-item active">
                    <div className="repo-info">
                      <span className="repo-name">backend-core</span>
                      <span className="repo-branch font-mono">main • 3 files</span>
                    </div>
                    <span className="badge badge-primary" style={{ fontSize: '9.5px' }}>Active</span>
                  </div>

                  <div className="mockup-repo-item">
                    <div className="repo-info">
                      <span className="repo-name">client-portal</span>
                      <span className="repo-branch font-mono">feature/auth</span>
                    </div>
                    <span className="badge badge-success" style={{ fontSize: '9.5px' }}>Synced</span>
                  </div>

                  <div className="mockup-repo-item">
                    <div className="repo-info">
                      <span className="repo-name">rust-telemetry</span>
                      <span className="repo-branch font-mono">main</span>
                    </div>
                    <span className="badge badge-success" style={{ fontSize: '9.5px' }}>Synced</span>
                  </div>

                  <div className="mockup-repo-item">
                    <div className="repo-info">
                      <span className="repo-name">mobile-app</span>
                      <span className="repo-branch font-mono">staging</span>
                    </div>
                    <span className="badge" style={{ fontSize: '9.5px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>Idle</span>
                  </div>
                </div>

                <div className="mockup-scheduler-box">
                  <div className="scheduler-label font-mono">
                    <Clock size={11} />
                    <span>Evaluation interval: 30m</span>
                  </div>
                  <div className="scheduler-progress">
                    <div className="scheduler-fill" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </aside>

              {/* Center Pane: Diff & Commit Synthesis */}
              <main className="mockup-main">
                <div className="mockup-main-header">
                  <div className="mockup-tabs">
                    <button
                      className={`mockup-tab ${activeTab === 'diff' ? 'active' : ''}`}
                      onClick={() => setActiveTab('diff')}
                      type="button"
                    >
                      Semantic Diff
                    </button>
                    <button
                      className={`mockup-tab ${activeTab === 'commit' ? 'active' : ''}`}
                      onClick={() => setActiveTab('commit')}
                      type="button"
                    >
                      Commit Synthesis
                    </button>
                  </div>
                  <span className="font-mono text-muted" style={{ fontSize: '11px' }}>
                    backend-core / src / auth / session.ts
                  </span>
                </div>

                {activeTab === 'diff' ? (
                  <div className="mockup-diff-box font-mono">
                    <div className="diff-line diff-ctx">@@ -18,6 +18,14 @@ export async function validateSession(token: string) &#123;</div>
                    <div className="diff-line diff-del">-  const rawData = await database.query('SELECT * FROM sessions WHERE token = ' + token);</div>
                    <div className="diff-line diff-add">+  const sanitizedToken = sanitizeSessionToken(token);</div>
                    <div className="diff-line diff-add">+  const session = await db.prepared('SELECT * FROM sessions WHERE token = $1').bind(sanitizedToken).first();</div>
                    <div className="diff-line diff-ctx">   if (!session || isExpired(session.expiresAt)) &#123;</div>
                    <div className="diff-line diff-ctx">     return null;</div>
                    <div className="diff-line diff-ctx">   &#125;</div>
                  </div>
                ) : (
                  <div className="mockup-commit-generator">
                    <div className="commit-badge font-mono">CONVENTIONAL COMMIT (ANGULAR SPEC)</div>
                    <div className="commit-title font-mono">
                      feat(auth): sanitize session tokens and use parameterized query validation
                    </div>
                    <div className="commit-body font-mono text-secondary">
                      - Replace concatenated SQL with parameterized statement<br />
                      - Add sanitizeSessionToken to prevent invalid token inputs<br />
                      - Generated from genuine AST diff changes
                    </div>
                  </div>
                )}

                <div className="mockup-action-bar">
                  <div className="action-status">
                    <ShieldCheck size={15} className="text-success" />
                    <span>Secret Interceptor: <strong>0 credentials detected</strong></span>
                  </div>
                  <button className="btn btn-primary btn-sm" style={{ height: '32px', fontSize: '12px' }} type="button">
                    <Play size={12} /> Stage Changes
                  </button>
                </div>
              </main>

              {/* Right Pane: Security & Queue */}
              <aside className="mockup-inspector">
                <div className="inspector-card">
                  <div className="inspector-header">
                    <Lock size={12} />
                    <span>SECRET SCANNER</span>
                  </div>
                  <div className="inspector-status-safe">
                    <CheckCircle2 size={15} />
                    <div>
                      <strong style={{ fontSize: '11.5px', display: 'block', color: 'var(--success)' }}>Entropy Guard PASS</strong>
                      <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>No .env, JWT, AWS or OpenAI tokens detected.</span>
                    </div>
                  </div>
                </div>

                <div className="inspector-card" style={{ flexGrow: 1 }}>
                  <div className="inspector-header">
                    <Terminal size={12} />
                    <span>SEQUENTIAL PUSH QUEUE</span>
                  </div>
                  <div className="queue-list font-mono">
                    <div className="queue-item in-progress">
                      <span className="queue-idx">1</span>
                      <span className="queue-repo">backend-core</span>
                      <span className="queue-state text-primary">Pushing...</span>
                    </div>
                    <div className="queue-item">
                      <span className="queue-idx">2</span>
                      <span className="queue-repo">client-portal</span>
                      <span className="queue-state text-muted">Queued</span>
                    </div>
                  </div>

                  <div className="safety-guarantee-note">
                    <AlertTriangle size={12} className="text-success" />
                    <span>Non-destructive operations only. <code>--force</code> is hardcoded disabled.</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Clean Trust Indicators (Docked below showcase) */}
        <div className="showcase-trust-strip">
          <div className="trust-pill">
            <ShieldCheck size={15} className="text-success" />
            <span>Zero Destructive Force-Pushes</span>
          </div>
          <div className="trust-pill">
            <Cpu size={15} className="text-primary-bright" />
            <span>Native Rust/Tauri & Electron Runtimes</span>
          </div>
          <div className="trust-pill">
            <RefreshCw size={15} className="text-success" />
            <span>100% Genuine Activity Only</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ShieldCheck, Sparkles, FolderGit2, UploadCloud, CheckCircle2, AlertTriangle } from 'lucide-react';

export const BentoShowcase = () => {
  const [activeSecretPreset, setActiveSecretPreset] = useState('openai');

  const secretPresets = {
    openai: {
      diff: `+ apiKey: "sk-proj-94FkLx0018471929481aafe88bc2771829"`,
      safe: false,
      reason: 'BLOCKED: High-entropy OpenAI secret key detected in diff.',
    },
    env: {
      diff: `+ DATABASE_URL="postgres://postgres:secret@db.supabase.co:5432"`,
      safe: false,
      reason: 'BLOCKED: Unsanitized database credentials in .env staged file.',
    },
    clean: {
      diff: `+ export function validateSession(token: string): boolean {\n+   return token.startsWith("session_");\n+ }`,
      safe: true,
      reason: 'PASS: Clean AST diff. 0 exposed tokens or private keys.',
    },
  };

  return (
    <section id="features" className="what-is-sc">
      <div className="container what-is-s">
        <div className="section-header">
          <span className="section-tag">Core Architecture</span>
          <h2 className="section-title">
            Deep-Dive Into GitPilot <span className="font-serif-italic">Intelligence</span>
          </h2>
          <p className="section-subtitle">
            Local-first developer utilities built with Rust and Electron for ultra-low memory overhead and zero latency.
          </p>
        </div>

        <div className="what-is-list">
          {/* Item 1: Diff Engine (Left Widget, Right Text) */}
          <div className="what-is-item s1">
            <div className="what-is-widget-col">
              <div className="widget-mockup-frame font-mono">
                <div className="widget-tag font-mono">AST DIFF ENGINE</div>
                <div className="widget-code-line del">- const rawToken = req.headers['auth'];</div>
                <div className="widget-code-line add">+ const sanitized = sanitizeAuthToken(req.headers['auth']);</div>
                <div className="widget-status">
                  <CheckCircle2 size={14} /> Sub-millisecond local AST parse
                </div>
              </div>
            </div>

            <div className="what-is-text-col">
              <div className="what-is-badge-wrap">
                <span className="badge badge-primary font-mono">SEMANTIC INSPECTION</span>
              </div>
              <h3 className="headline-h3">Hyper-Fast Semantic Diff Inspections</h3>
              <p className="body-main opacity-80">
                Inspect line-by-line syntax-highlighted semantic diffs before committing. Sub-millisecond parsing lets you verify changes instantly with native performance.
              </p>
            </div>
          </div>

          <div className="what-is-line"></div>

          {/* Item 2: Secret Shield (Left Text, Right Widget) */}
          <div className="what-is-item s2">
            <div className="what-is-text-col">
              <div className="what-is-badge-wrap">
                <span className="badge badge-success font-mono">CREDENTIAL DEFENSE</span>
              </div>
              <h3 className="headline-h3">Shannon Entropy Secret Activations</h3>
              <p className="body-main opacity-80">
                Client-side security guard blocks OpenAI, AWS, Stripe tokens, private keys, and .env leaks before git staging. Zero credentials ever escape your machine.
              </p>
            </div>

            <div className="what-is-widget-col">
              <div className="widget-mockup-frame">
                <div className="sc-preset-strip">
                  <span className="preset-label font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Test Payload:</span>
                  <button
                    className={`sc-preset-btn ${activeSecretPreset === 'openai' ? 'active' : ''}`}
                    onClick={() => setActiveSecretPreset('openai')}
                    type="button"
                  >
                    OpenAI
                  </button>
                  <button
                    className={`sc-preset-btn ${activeSecretPreset === 'env' ? 'active' : ''}`}
                    onClick={() => setActiveSecretPreset('env')}
                    type="button"
                  >
                    .env
                  </button>
                  <button
                    className={`sc-preset-btn ${activeSecretPreset === 'clean' ? 'active' : ''}`}
                    onClick={() => setActiveSecretPreset('clean')}
                    type="button"
                  >
                    Clean
                  </button>
                </div>
                <pre className="sc-terminal-preview font-mono" style={{ fontSize: '11.5px', margin: '8px 0' }}>
                  <code>{secretPresets[activeSecretPreset].diff}</code>
                </pre>
                <div className={`sc-scanner-status ${secretPresets[activeSecretPreset].safe ? 'status-safe' : 'status-danger'}`} style={{ padding: '8px 12px', fontSize: '11.5px' }}>
                  {secretPresets[activeSecretPreset].safe ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
                  <span className="font-mono">{secretPresets[activeSecretPreset].reason}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="what-is-line"></div>

          {/* Item 3: AI Commits (Left Widget, Right Text) */}
          <div className="what-is-item s3">
            <div className="what-is-widget-col">
              <div className="widget-mockup-frame font-mono">
                <div className="widget-tag font-mono">CONVENTIONAL COMMIT SYNTHESIS</div>
                <div className="commit-header text-primary-bright" style={{ fontSize: '13px', fontWeight: 600 }}>
                  feat(auth): validate biometric passkey and sanitize token
                </div>
                <div className="commit-sub text-muted" style={{ fontSize: '11.5px', marginTop: '6px', lineHeight: 1.6 }}>
                  - Replace legacy password authentication with WebAuthn validator<br />
                  - Sanitize authorization token headers before database lookup
                </div>
                <div className="widget-status" style={{ marginTop: '12px' }}>
                  <CheckCircle2 size={14} /> 100% Angular Conventional Commit Spec Adherence
                </div>
              </div>
            </div>

            <div className="what-is-text-col">
              <div className="what-is-badge-wrap">
                <span className="badge badge-primary font-mono">AI SYNTHESIS</span>
              </div>
              <h3 className="headline-h3">AI-Powered Conventional Intelligence</h3>
              <p className="body-main opacity-80">
                Track code changes and synthesize standardized Conventional Commits (feat:, fix:, refactor:) for automated Semantic Releases and cleaner git history.
              </p>
            </div>
          </div>

          <div className="what-is-line"></div>

          {/* Item 4: Safe Sequential Push (Left Text, Right Widget) */}
          <div className="what-is-item s4">
            <div className="what-is-text-col">
              <div className="what-is-badge-wrap">
                <span className="badge badge-cyan font-mono">AUTOMATION QUEUE</span>
              </div>
              <h3 className="headline-h3">Non-Destructive Background Queue</h3>
              <p className="body-main opacity-80">
                Automate background pushes without lock contention or merge race conditions. Destructive operations (--force, reset --hard) are hardcoded disabled.
              </p>
            </div>

            <div className="what-is-widget-col">
              <div className="widget-mockup-frame font-mono">
                <div className="widget-tag font-mono">SEQUENTIAL PUSH QUEUE</div>
                <div className="widget-code-line add" style={{ fontSize: '12px', padding: '6px 10px', marginBottom: '6px' }}>
                  ✔ 1. backend-core (main) → Synchronized
                </div>
                <div className="widget-code-line" style={{ fontSize: '12px', padding: '6px 10px', marginBottom: '6px', background: 'rgba(99, 102, 241, 0.12)', color: '#818CF8' }}>
                  ● 2. web-client → Enqueued (Pushing in 5s)
                </div>
                <div className="widget-code-line" style={{ fontSize: '12px', padding: '6px 10px', background: 'rgba(255, 255, 255, 0.03)', color: 'var(--text-muted)' }}>
                  ○ 3. api-docs → Idle
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

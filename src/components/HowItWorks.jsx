import React, { useState } from 'react';
import { Search, Eye, ShieldAlert, GitCommit, UploadCloud, Cpu, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'discover',
      label: 'DISCOVER',
      title: '1. Discover Workspaces',
      icon: Search,
      desc: 'Point GitPilot to your local projects folder. The app scans subdirectories, registers existing Git trees, and indexes current branch states.',
      code: '$ gitpilot scan --path "D:\\Projects"\n✔ Found 8 Git repositories\n✔ Indexed branches and remotes\n[Ready] Workspaces registered in local vault',
    },
    {
      id: 'inspect',
      label: 'INSPECT',
      title: '2. Inspect Working Changes',
      icon: Eye,
      desc: 'Monitors real file changes in real-time. Analyzes semantic AST modifications, additions, and deletions across all registered repositories.',
      code: '$ git status --porcelain\nM  src/services/authService.js\nM  src/controllers/sessionController.js\n✔ Detected genuine code changes',
    },
    {
      id: 'protect',
      label: 'PROTECT',
      title: '3. Protect Secrets & Credentials',
      icon: ShieldAlert,
      desc: 'Shannon entropy analysis scans every diff line. Blocks API keys, passwords, .env variables, and private keys before staging.',
      code: '$ gitpilot check-secrets\n✔ Inspected 84 diff lines across 2 files\n✔ 0 high-entropy tokens found (Safe to stage)',
    },
    {
      id: 'commit',
      label: 'COMMIT',
      title: '4. Generate Structured Commits',
      icon: GitCommit,
      desc: 'Drafts Conventional Commit messages (feat:, fix:, refactor:) based strictly on real diff context with zero fake streaks.',
      code: '$ git commit -m "feat(auth): validate session tokens and sanitize inputs"\n[main 8a2f4c1] feat(auth): validate session tokens\n 2 files changed, 48 insertions(+), 12 deletions(-)',
    },
    {
      id: 'push',
      label: 'PUSH',
      title: '5. Safe Sequential Push',
      icon: UploadCloud,
      desc: 'Enqueues remote pushes sequentially with exponential backoff retries. Never force-pushes or overwrites remote history.',
      code: '$ git push origin main\nEnumerating objects: 12, done.\nTo github.com/ashwath2005/GitPilot.git\n   8a2f4c1..3e9b1d0  main -> main',
    },
    {
      id: 'automate',
      label: 'AUTOMATE',
      title: '6. Background Autopilot',
      icon: Cpu,
      desc: 'Runs silently in the Windows system tray according to your schedule, keeping your multi-repo workspace continuously in sync.',
      code: '$ gitpilot daemon --interval 30m\n[Scheduler] Active • Next evaluation in 29:59\n[System Tray] Running in background (RAM: 24MB)',
    },
  ];

  return (
    <section className="section how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Workflow</span>
          <h2 className="section-title">How GitPilot Works</h2>
          <p className="section-subtitle">
            A transparent 6-step pipeline from repository discovery to automated background synchronization.
          </p>
        </div>

        {/* Stepper Pipeline */}
        <div className="workflow-stepper" role="tablist" aria-label="Workflow Pipeline Steps">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            const isActive = activeStep === idx;
            return (
              <React.Fragment key={step.id}>
                <button
                  className={`step-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                >
                  <StepIcon size={16} />
                  <span className="step-label font-mono">{step.label}</span>
                </button>
                {idx < steps.length - 1 && (
                  <div className="step-arrow" aria-hidden="true">
                    <ArrowRight size={13} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Active Step Details */}
        <div className="workflow-card">
          <div className="workflow-card-left">
            <div className="badge badge-primary font-mono" style={{ marginBottom: '10px' }}>
              STEP {activeStep + 1} OF 6
            </div>
            <h3 className="workflow-card-title">{steps[activeStep].title}</h3>
            <p className="workflow-card-desc">{steps[activeStep].desc}</p>
          </div>

          <div className="workflow-card-right">
            <div className="terminal-header font-mono">
              <span className="terminal-dot"></span>
              <span>gitpilot-cli terminal</span>
            </div>
            <pre className="terminal-body font-mono">
              <code>{steps[activeStep].code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, Server, KeyRound, HardDrive, AlertCircle } from 'lucide-react';

export const Security = () => {
  const securityPillars = [
    {
      icon: HardDrive,
      title: 'Local Repository Management',
      text: 'Git repositories are managed strictly on your local disk. GitPilot does not mirror, copy, or upload your repository directory trees to external servers.',
    },
    {
      icon: Server,
      title: 'Local Git Environment',
      text: 'All Git operations (status, diff, stage, commit, push) execute through your existing local Git CLI installation in your PATH.',
    },
    {
      icon: ShieldCheck,
      title: 'Client-Side Secret Scanning',
      text: 'Secret interception algorithms and Shannon entropy heuristics execute locally on your machine before staging or transmitting any diff payload.',
    },
    {
      icon: KeyRound,
      title: 'Existing Git Credentials',
      text: 'Remote push operations utilize your existing local SSH keys, Git Credential Manager, or Personal Access Tokens already configured in your system.',
    },
  ];

  return (
    <section className="section security-section" id="security">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Security & Privacy</span>
          <h2 className="section-title">Your code stays where it belongs.</h2>
          <p className="section-subtitle">
            GitPilot is designed around a local-first workflow that respects your source code confidentiality.
          </p>
        </div>

        <div className="security-grid">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="security-card">
                <div className="security-icon-wrap">
                  <Icon size={20} className="text-success" />
                </div>
                <h3 className="security-card-title">{item.title}</h3>
                <p className="security-card-desc">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="security-notice-box">
          <AlertCircle size={18} className="text-primary-bright" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div className="notice-content">
            <h4 className="notice-title">AI Provider Transparency</h4>
            <p className="notice-text">
              GitPilot performs Git operations locally. When AI providers are enabled for commit message synthesis, only the sanitized diff text summary required for the requested AI operation is sent to the configured provider using your personal API key. Blacklisted files and high-entropy secrets are intercepted beforehand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

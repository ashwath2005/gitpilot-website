import React from 'react';
import {
  FolderGit2,
  FileCode2,
  ShieldAlert,
  Sparkles,
  ListOrdered,
  Clock,
  AppWindow,
  HardDrive,
} from 'lucide-react';

export const Features = () => {
  const featureList = [
    {
      icon: FolderGit2,
      title: 'Multi-Repository Monitoring',
      description:
        'Point GitPilot at your root development folder. Discovers Git trees recursively and tracks branch states, uncommitted files, and remote synchronization.',
    },
    {
      icon: FileCode2,
      title: 'Git Diff Viewer',
      description:
        'Inspect syntax-highlighted semantic diffs before committing. View line-by-line additions, deletions, and AST modifications with sub-millisecond local response.',
    },
    {
      icon: ShieldAlert,
      title: 'Secret Protection',
      description:
        'Scans diffs and file lists to block commits containing .env files, private keys (.pem, .key), OpenAI/AWS/GitHub tokens, and passwords using Shannon entropy heuristics.',
    },
    {
      icon: Sparkles,
      title: 'AI Commit Generation',
      description:
        'Optional OpenAI integration generates concise, standardized conventional commit messages (feat:, fix:, refactor:) with offline heuristic fallback.',
    },
    {
      icon: ListOrdered,
      title: 'Autonomous Queue',
      description:
        'Executes Git operations through a sequential push queue with exponential retry backoff, preventing network overload and repository lock contention.',
    },
    {
      icon: Clock,
      title: 'Background Scheduler',
      description:
        'Configure custom intervals (e.g., every 15m, 30m, or 1h) to evaluate repositories, generate commits, and push changes automatically without interrupting focus.',
    },
    {
      icon: AppWindow,
      title: 'System Tray',
      description:
        'Runs quietly in the Windows system tray with minimize-to-tray on close, global shortcuts (Ctrl + K), and unobtrusive native desktop notifications.',
    },
    {
      icon: HardDrive,
      title: 'Local-First Architecture',
      description:
        'Executes directly against your local Git installation and local filesystem. Your repositories, source code, and credentials remain strictly on your machine.',
    },
  ];

  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Engineered for Technical Workflows</h2>
          <p className="section-subtitle">
            Every feature is designed with safety, low memory overhead, and genuine software engineering integrity.
          </p>
        </div>

        <div className="features-grid">
          {featureList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon-box">
                  <Icon size={20} className="text-primary-bright" />
                </div>
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

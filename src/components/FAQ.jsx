import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      q: 'What is GitPilot?',
      a: 'GitPilot is a local-first Windows desktop application built with Tauri 2, Rust, and Electron that monitors genuine project changes across multiple repositories, inspects diffs, blocks exposed credentials, drafts conventional commit messages with AI, and safely schedules background pushes.',
    },
    {
      q: 'Which operating systems are supported?',
      a: 'GitPilot is officially packaged and optimized for 64-bit Windows 10 and Windows 11 systems.',
    },
    {
      q: 'Is GitPilot free?',
      a: 'Yes, GitPilot is open-source under the MIT License. You can use it freely for personal and commercial projects.',
    },
    {
      q: 'Where does GitPilot store my repositories?',
      a: 'GitPilot does not move or copy your repositories. Your repositories remain in their original folders on your local hard drive (for example, D:\\Projects). GitPilot only stores local application preferences and repository file paths in its local data directory.',
    },
    {
      q: 'Does GitPilot upload my source code?',
      a: 'No. GitPilot operates with a local-first architecture. Your source code files, Git history, and credentials never leave your machine.',
    },
    {
      q: 'How does secret scanning work?',
      a: 'Before any commit is staged or created, GitPilot inspects modified file paths and diff lines using regular expression patterns for known token structures (AWS, OpenAI, Stripe, private keys, .env) and Shannon entropy heuristics to catch randomized high-entropy password strings locally.',
    },
    {
      q: 'Does GitPilot require an AI API key?',
      a: 'No. An OpenAI API key is optional for advanced AI commit synthesis. If no key is provided, GitPilot automatically uses its smart, offline rule-based heuristic engine to generate accurate Conventional Commit messages.',
    },
    {
      q: 'Can GitPilot automatically push changes?',
      a: 'Yes. GitPilot includes an autonomous background scheduler that can evaluate repositories on configured intervals (e.g. every 15m, 30m, or 1h) and push changes sequentially. Destructive operations like force-pushing (--force) are strictly prohibited in the engine.',
    },
    {
      q: 'How do I update GitPilot?',
      a: 'GitPilot includes an integrated update checker. When a new version is released on GitHub, the app notifies you in the system tray and allows seamless one-click updates.',
    },
    {
      q: 'How do I uninstall GitPilot?',
      a: 'You can uninstall GitPilot at any time via Windows Settings > Apps > Installed apps, or by running the standard uninstaller located in the GitPilot installation directory.',
    },
  ];

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions regarding GitPilot architecture, security guardrails, and installation.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  type="button"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={16}
                    className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <div className="faq-answer-pane" aria-hidden={!isOpen}>
                  <p className="faq-answer-text">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

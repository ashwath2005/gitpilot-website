import React from 'react';
import { Search, Eye, ShieldAlert, GitCommit } from 'lucide-react';

export const InteractiveHowItWorks = () => {
  const cards = [
    {
      num: 's1',
      icon: Search,
      title: 'Input Your Workspaces & Current Repositories',
      desc: 'Point GitPilot at your root development folder. Discovers Git trees recursively and indexes branch states.',
      iconUrl: 'https://cdn.prod.website-files.com/682d7c4461a6cad665ede828/682d7c4461a6cad665ede870_how-work-icon-4.webp',
    },
    {
      num: 's2',
      icon: Eye,
      title: 'GitPilot Analyzes Subconscious Patterns & Diffs',
      desc: 'Inspects real-time AST modifications and runs Shannon entropy heuristics to intercept leaked credentials.',
      iconUrl: 'https://cdn.prod.website-files.com/682d7c4461a6cad665ede828/682d7c4461a6cad665ede8ae_how-work-icon-5.webp',
    },
    {
      num: 's3',
      icon: GitCommit,
      title: 'AI Creates Your Personalized Conventional Commits',
      desc: 'Generates structured feat:, fix:, refactor: messages following Angular 1.0 specifications with zero fake streaks.',
      iconUrl: 'https://cdn.prod.website-files.com/682d7c4461a6cad665ede828/682d7c4461a6cad665ede86d_how-work-icon-1.webp',
    },
    {
      num: 's4',
      icon: ShieldAlert,
      title: 'Adapt and Grow on Pure Autopilot',
      desc: 'Executes non-destructive sequential pushes silently from the Windows system tray with zero force-pushes.',
      iconUrl: 'https://cdn.prod.website-files.com/682d7c4461a6cad665ede828/682d7c4461a6cad665ede8af_how-work-icon-3.webp',
    },
  ];

  return (
    <section id="how-it-works" className="how-work-sc">
      <div className="container how-work-s">
        <div className="how-work-sticky">
          <h2 className="how-work-headline">
            Upgrade<span className="your-space-span">Your</span> <span className="hw-italic font-serif-italic">Workflow</span>
          </h2>
        </div>

        <div className="how-work-widgets-front">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className={`hw-position ${card.num}`}>
                <div className="hw-view">
                  <div className={`hw-card-block ${card.num}`}>
                    <div className="card-gradient-point">
                      <div className="card-gradient"></div>
                    </div>

                    <div className="hw-card">
                      <div className="hw-blur"></div>
                      <div className="hw-card-icon">
                        <Icon size={24} className="text-primary-bright" />
                      </div>
                      <div className="text-elements how-work-card-s">
                        <div className={`name-headline-wrap how-work-card-s ${card.num}`}>
                          <h3 className="headline-h4">{card.title}</h3>
                        </div>
                        <div className={`description-wrap how-work-card-s ${card.num}`}>
                          <p className="body-main opacity-80">{card.desc}</p>
                        </div>
                      </div>
                      <div className="hw-star-point">
                        <div className="how-work-star"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

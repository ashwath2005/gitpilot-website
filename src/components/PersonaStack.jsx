import React from 'react';
import { User, Users, ShieldCheck, CheckCircle2, Zap, Lock, Terminal } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

export const PersonaStack = () => {
  return (
    <section id="for-whom" className="stack-sc">
      <div className="stack-height">
        <div className="stack-sticky">
          <div className="container stack-s">
            {/* Card 1: For Individuals */}
            <div className="stack-card-wrapper s1">
              <div className="stack-card-stroke">
                <div className="card-gradient-point">
                  <div className="card-gradient"></div>
                </div>

                <div className="stack-card s1">
                  <div className="text-elements stack-s">
                    <div className="stact-tag">
                      <User size={13} /> For Individual Developers
                    </div>
                    <div className="name-headline-wrap stactk-s s1">
                      <h2 className="headline-h2">Accelerate Your Solo Velocity</h2>
                    </div>
                    <div className="description-wrap stack-s s1">
                      <p className="body-main opacity-80">
                        GitPilot helps you break through context switching, keep multi-repository side-projects continuously synchronized, and generate conventional commit history automatically. No matter what tech stack you build, GitPilot is your autonomous background co-pilot.
                      </p>
                    </div>

                    <div className="persona-feature-pills" style={{ marginTop: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span className="badge badge-primary font-mono"><Zap size={12} /> Low-Memory Rust Core (sub-30MB RAM)</span>
                      <span className="badge badge-cyan font-mono"><Terminal size={12} /> Ctrl + K Command Palette</span>
                    </div>
                  </div>

                  <div className="stack-circle"></div>

                  <div className="stack-image s1">
                    <div className="stack-terminal-preview font-mono">
                      <div className="terminal-header">
                        <span className="terminal-dot"></span>
                        <span>tray-daemon.log</span>
                      </div>
                      <div className="terminal-body" style={{ fontSize: '12px' }}>
                        <div style={{ color: '#818CF8' }}>[Tray Daemon] Monitored 8 repositories</div>
                        <div style={{ color: '#4ADE80' }}>✔ backend-api: staged 3 changes (feat)</div>
                        <div style={{ color: '#4ADE80' }}>✔ web-client: synchronized to main</div>
                        <div style={{ color: 'var(--text-muted)' }}>[Scheduler] Next evaluation in 29:50</div>
                      </div>
                    </div>
                  </div>

                  <div className="particles-block stack-s">
                    <ParticleCanvas />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: For Teams */}
            <div className="stack-card-wrapper s2">
              <div className="stack-card-stroke">
                <div className="card-gradient-point">
                  <div className="card-gradient"></div>
                </div>

                <div className="stack-card s2">
                  <div className="text-elements stack-s">
                    <div className="stact-tag">
                      <Users size={13} /> For Engineering Teams
                    </div>
                    <div className="name-headline-wrap stactk-s s2">
                      <h2 className="headline-h2">Empower Your Team to Ship Safely</h2>
                    </div>
                    <div className="description-wrap stack-s s2">
                      <p className="body-main opacity-80">
                        GitPilot for Teams helps you unlock the full velocity of your engineering organization by eliminating catastrophic credential leaks, standardizing semantic commit conventions, and enforcing non-destructive sequential push queues across all remotes.
                      </p>
                    </div>

                    <div className="persona-feature-pills" style={{ marginTop: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span className="badge badge-success font-mono"><Lock size={12} /> Shannon Entropy Secret Interceptor</span>
                      <span className="badge badge-primary font-mono"><ShieldCheck size={12} /> Non-Destructive Sequential Queue</span>
                    </div>
                  </div>

                  <div className="stack-circle"></div>

                  <div className="stack-image s2">
                    <div className="stack-terminal-preview font-mono">
                      <div className="terminal-header">
                        <span className="terminal-dot" style={{ background: '#22C55E' }}></span>
                        <span>team-shield.log</span>
                      </div>
                      <div className="terminal-body" style={{ fontSize: '12px' }}>
                        <div style={{ color: '#22C55E' }}>✔ Inspected 142 diff lines across team repos</div>
                        <div style={{ color: '#F59E0B' }}>⚠ Blocked: Staged .env database token</div>
                        <div style={{ color: '#22C55E' }}>✔ Leak intercepted prior to remote push</div>
                        <div style={{ color: 'var(--text-muted)' }}>[Compliance] 100% Angular Spec Adherence</div>
                      </div>
                    </div>
                  </div>

                  <div className="particles-block stack-s">
                    <ParticleCanvas />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

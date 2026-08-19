import React from 'react';
import { Sparkles } from 'lucide-react';

export const BrandWordReveal = () => {
  return (
    <section id="about" className="about-sc">
      <div className="container about-s">
        {/* Eyebrow Tag */}
        <div className="manifesto-tag-wrap">
          <span className="section-tag">
            <Sparkles size={13} className="text-primary-bright" /> Autonomous Workspace Philosophy
          </span>
        </div>

        {/* Large Statement Title */}
        <h2 className="manifesto-title">
          Control Your Codebase. <br />
          <span className="font-serif-italic">Automate</span> Your Workflow.
        </h2>

        {/* Sleek Minimal Feature Pills (Symbols Removed) */}
        <div className="manifesto-capsules-grid">
          <div className="manifesto-capsule">
            <span className="capsule-title">Multi-Repo Workspace</span>
            <span className="capsule-sub font-mono">1-Click Local Discovery</span>
          </div>

          <div className="manifesto-capsule">
            <span className="capsule-title">Shannon Secret Shield</span>
            <span className="capsule-sub font-mono">Zero Credential Leaks</span>
          </div>

          <div className="manifesto-capsule">
            <span className="capsule-title">AI Conventional Commits</span>
            <span className="capsule-sub font-mono">100% Spec Adherence</span>
          </div>
        </div>

        {/* Editorial Statement */}
        <div className="about-pg-area">
          <p className="about-pg-text-d">
            <span className="about-space-span">E</span>verything you build deserves continuous, friction-free synchronization. GitPilot monitors genuine project diffs, intercepts secret leaks with Shannon entropy heuristics, and synthesizes clean Conventional Commits — so your repositories remain in a state of continuous, effortless flow.
          </p>
        </div>
      </div>
    </section>
  );
};

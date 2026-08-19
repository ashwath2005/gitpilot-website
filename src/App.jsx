import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandWordReveal } from './components/BrandWordReveal';
import { InteractiveHowItWorks } from './components/InteractiveHowItWorks';
import { BentoShowcase } from './components/BentoShowcase';
import { LatestRelease } from './components/LatestRelease';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ParticleCanvas } from './components/ParticleCanvas';
import { AdminPortal } from './components/AdminPortal';

export const App = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  // Listen for #admin in URL and Ctrl+Shift+A shortcut
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setShowAdmin(true);
      }
    };

    const handleKeyDown = (e) => {
      // Ctrl + Shift + A or Cmd + Shift + A
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setShowAdmin((prev) => !prev);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCloseAdmin = () => {
    setShowAdmin(false);
    if (window.location.hash === '#admin') {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="page-wrapper">
      {/* Superconscious Particle Canvas & Background Ambience */}
      <ParticleCanvas />
      <div className="bg-ambient"></div>
      <div className="bg-grid"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="main">
        <Hero />
        <BrandWordReveal />
        <InteractiveHowItWorks />
        <BentoShowcase />
        <LatestRelease />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer with Admin Trigger */}
      <Footer onOpenAdmin={() => setShowAdmin(true)} />

      {/* Admin Portal Modal */}
      {showAdmin && <AdminPortal onClose={handleCloseAdmin} />}
    </div>
  );
};

export default App;

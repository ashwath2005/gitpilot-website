import React from 'react';
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

export const App = () => {
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

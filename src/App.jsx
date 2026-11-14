import React, { useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ArenasExplorer from './components/ArenasExplorer';
import ArenaDetailModal from './components/ArenaDetailModal';
import Speakers from './components/Speakers';
import TechnoholixVisualizer from './components/TechnoholixVisualizer';
import PassGenerator from './components/PassGenerator';
import ScheduleTimeline from './components/ScheduleTimeline';
import CampusAccommodation from './components/CampusAccommodation';
import Patronages from './components/Patronages';
import FAQ from './components/FAQ';
import RegistrationModal from './components/RegistrationModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedArena, setSelectedArena] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerEvent, setRegisterEvent] = useState('');

  const handleOpenRegister = (eventName = '') => {
    setRegisterEvent(eventName);
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
    setRegisterEvent('');
  };

  return (
    <div className="min-h-screen bg-[#020409] text-slate-100 relative selection:bg-cyan-400 selection:text-black">
      
      {/* 2D Interactive HTML5 Canvas Constellation Mesh */}
      <ParticleCanvas />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col">
        
        {/* Navigation Bar */}
        <Navbar onOpenRegister={() => handleOpenRegister('General Pass')} />

        {/* Hero Section with Live Countdown */}
        <Hero onOpenRegister={() => handleOpenRegister('General Pass')} />

        {/* Scaled Metrics & Statistics Bar */}
        <StatsBar />

        {/* Verticals / Arenas Explorer */}
        <ArenasExplorer
          onSelectArena={(arena) => setSelectedArena(arena)}
          onOpenRegister={(eventName) => handleOpenRegister(eventName)}
        />

        {/* Technoholix Interactive Stage Visualizer */}
        <TechnoholixVisualizer />

        {/* Hall of Visionaries Keynotes */}
        <Speakers />

        {/* Interactive Holographic Attendee Pass Generator */}
        <PassGenerator />

        {/* 3-Day Festival Schedule & Timeline */}
        <ScheduleTimeline />

        {/* Campus & Accommodation Explorer */}
        <CampusAccommodation onOpenRegister={(event) => handleOpenRegister(event)} />

        {/* Patronages & Global Endorsements */}
        <Patronages />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Footer */}
        <Footer onOpenRegister={() => handleOpenRegister('General Pass')} />

      </div>

      {/* Modals */}
      <ArenaDetailModal
        arena={selectedArena}
        onClose={() => setSelectedArena(null)}
        onRegister={(eventName) => handleOpenRegister(eventName)}
      />

      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
        defaultEvent={registerEvent}
      />

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { soundFX } from '../audio/soundFX';

export default function Navbar({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFX.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !isMuted;
    soundFX.setMuted(nextState);
    setIsMuted(nextState);
  };

  const navLinks = [
    { label: "Arenas", href: "#arenas" },
    { label: "Visionaries", href: "#speakers" },
    { label: "Technoholix", href: "#technoholix" },
    { label: "Schedule", href: "#schedule" },
    { label: "Generate Pass", href: "#pass-generator" },
    { label: "Campus & Stay", href: "#campus" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = () => {
    soundFX.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020409]/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,240,255,0.08)]'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          onMouseEnter={() => soundFX.playHover()}
          onClick={() => soundFX.playClick()}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Hexagon Cyber Frame */}
            <svg viewBox="0 0 100 100" className="w-full h-full transition-transform duration-500 group-hover:rotate-45">
              <polygon
                points="50,4 95,26 95,74 50,96 5,74 5,26"
                fill="rgba(0, 240, 255, 0.08)"
                stroke="#00f0ff"
                strokeWidth="4"
                className="transition-all duration-300 group-hover:stroke-[#b026ff]"
              />
              <polygon
                points="50,20 80,35 80,65 50,80 20,65 20,35"
                fill="none"
                stroke="#00f0ff"
                strokeWidth="2"
                strokeDasharray="4 2"
                opacity="0.6"
              />
              <circle cx="50" cy="50" r="8" fill="#00f0ff" className="animate-ping opacity-30" />
              <circle cx="50" cy="50" r="7" fill="#b026ff" />
              <circle cx="50" cy="50" r="3" fill="#ffffff" />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-orbitron font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                TECHFEST
              </span>
              <span className="text-[10px] font-mono tracking-widest px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold">
                30TH ED.
              </span>
            </div>
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5 flex items-center gap-1">
              IIT BOMBAY <span className="text-cyan-400">•</span> ASIA'S LARGEST
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="text-xs lg:text-sm font-space font-medium text-slate-300 hover:text-cyan-400 px-3 py-1.5 rounded-lg transition-all hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Audio FX Toggle */}
          <button
            onClick={toggleSound}
            title={isMuted ? "Enable Cyber Sound FX" : "Mute Sound FX"}
            className={`p-2 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all ${
              !isMuted 
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.4)]' 
                : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20 hover:text-slate-200'
            }`}
          >
            {!isMuted ? (
              <>
                <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="hidden sm:inline text-[10px] tracking-wider font-semibold">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline text-[10px] tracking-wider">SOUND</span>
              </>
            )}
          </button>

          {/* Register CTA */}
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenRegister();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-orbitron font-bold tracking-wider text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:shadow-neon-cyan transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              REGISTER
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent transform transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-cyan-500/20 bg-[#040915]/95 backdrop-blur-2xl px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between text-base font-space font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-white/5"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <button
              onClick={() => {
                handleLinkClick();
                onOpenRegister();
              }}
              className="mt-3 w-full py-3 rounded-lg text-center font-orbitron font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 shadow-neon-cyan"
            >
              REGISTER FOR TECHFEST 2026
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

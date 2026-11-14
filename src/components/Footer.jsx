import React, { useState } from 'react';
import { ArrowUp, Send, ShieldCheck, Heart, Globe } from 'lucide-react';
import { soundFX } from '../audio/soundFX';

// Crisp, accurate brand SVGs
const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer({ onOpenRegister }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    soundFX.playSuccess();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050e] border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden z-20">
      
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon
                    points="50,4 95,26 95,74 50,96 5,74 5,26"
                    fill="rgba(0, 240, 255, 0.1)"
                    stroke="#00f0ff"
                    strokeWidth="5"
                  />
                  <circle cx="50" cy="50" r="10" fill="#b026ff" />
                  <circle cx="50" cy="50" r="4" fill="#ffffff" />
                </svg>
              </div>
              <div>
                <span className="font-orbitron font-extrabold text-xl text-white tracking-wider">
                  TECHFEST
                </span>
                <span className="block text-[10px] font-mono tracking-widest text-cyan-400">
                  IIT BOMBAY • 30TH EDITION
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-space text-slate-400 max-w-sm leading-relaxed">
              Asia&apos;s Largest Science and Technology Festival. A non-profit student organization at IIT Bombay dedicated to igniting human potential through technology.
            </p>

            <div className="text-xs font-mono text-slate-500 space-y-1">
              <div>Students Gymkhana, IIT Bombay</div>
              <div>Powai, Mumbai - 400076, Maharashtra, India</div>
              <div className="text-cyan-400">info@techfest.org • +91 22 2576 4000</div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { icon: InstagramIcon, href: "https://www.instagram.com/techfest", label: "Instagram" },
                { icon: YoutubeIcon, href: "https://www.youtube.com/user/techfestiitbombay", label: "YouTube" },
                { icon: LinkedinIcon, href: "https://in.linkedin.com/company/techfest", label: "LinkedIn" },
                { icon: FacebookIcon, href: "https://www.facebook.com/iitbombaytechfest/", label: "Facebook" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    onMouseEnter={() => soundFX.playHover()}
                    onClick={() => soundFX.playClick()}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-all cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 1: Verticals */}
          <div>
            <h4 className="font-orbitron font-bold text-xs uppercase tracking-widest text-cyan-400 mb-4">
              Festival Arenas
            </h4>
            <ul className="space-y-2 text-xs font-space text-slate-400">
              <li><a href="#arenas" className="hover:text-cyan-300 transition-colors">Robowars (60kg &amp; 15kg)</a></li>
              <li><a href="#arenas" className="hover:text-cyan-300 transition-colors">International Tech Expo</a></li>
              <li><a href="#technoholix" className="hover:text-cyan-300 transition-colors">Technoholix Night Festival</a></li>
              <li><a href="#speakers" className="hover:text-cyan-300 transition-colors">Keynote Lectures</a></li>
              <li><a href="#arenas" className="hover:text-cyan-300 transition-colors">IDRL Drone Grand Prix</a></li>
              <li><a href="#arenas" className="hover:text-cyan-300 transition-colors">InnovateX &amp; Agentic AI</a></li>
            </ul>
          </div>

          {/* Column 2: Participate */}
          <div>
            <h4 className="font-orbitron font-bold text-xs uppercase tracking-widest text-cyan-400 mb-4">
              Participate
            </h4>
            <ul className="space-y-2 text-xs font-space text-slate-400">
              <li>
                <button onClick={() => onOpenRegister()} className="hover:text-cyan-300 transition-colors cursor-pointer text-left">
                  General Registration (Free)
                </button>
              </li>
              <li><a href="#pass-generator" className="hover:text-cyan-300 transition-colors">Generate Holographic Pass</a></li>
              <li><a href="#campus" className="hover:text-cyan-300 transition-colors">Hostel Accommodation</a></li>
              <li><a href="#schedule" className="hover:text-cyan-300 transition-colors">3-Day Full Itinerary</a></li>
              <li><a href="#faq" className="hover:text-cyan-300 transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#arenas" className="hover:text-cyan-300 transition-colors">Social Initiatives (Eduu)</a></li>
            </ul>
          </div>

          {/* Column 3: Techfest Radar / Updates */}
          <div>
            <h4 className="font-orbitron font-bold text-xs uppercase tracking-widest text-cyan-400 mb-4">
              Festival Dispatch
            </h4>
            <p className="text-xs font-space text-slate-400 mb-3 leading-relaxed">
              Get notified of newly confirmed keynote speakers, exhibition line-ups, and rulebooks.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@college.edu"
                  className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/10 text-xs text-white focus:border-cyan-400 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold transition-colors flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] font-space text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Subscribed to Techfest bulletins!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-space text-slate-500">
          <div>
            © 2026 Techfest, IIT Bombay. All rights reserved. Landmark 30th Edition.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by IIT Bombay Techfest Team
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              title="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="font-mono text-[10px]">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

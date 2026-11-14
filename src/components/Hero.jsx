import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Terminal, Compass, Ticket, Radio } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';
import { soundFX } from '../audio/soundFX';

export default function Hero({ onOpenRegister }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(FESTIVAL_INFO.targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 32, hours: 14, minutes: 25, seconds: 40 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      
      {/* Subtle cyber background ambient aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-purple-500/10 blur-[120px] pointer-events-none -z-10" />

      {/* Cyber Grid Lines overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        
        {/* Top Telemetry & Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono tracking-wide mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)] animate-pulse-slow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-semibold text-white">IIT BOMBAY PRESENTS</span>
          <span className="text-cyan-500">•</span>
          <span className="text-cyan-400">30TH LANDMARK EDITION</span>
          <span className="hidden sm:inline text-cyan-500">•</span>
          <span className="hidden sm:inline text-slate-300">DEC 16-18, 2026</span>
        </div>

        {/* Hero Title with Chromatic Futuristic Polish */}
        <div className="relative mb-3">
          <div className="absolute -inset-x-8 -top-8 -bottom-4 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-2xl pointer-events-none" />
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-orbitron font-black tracking-tight text-white select-none">
            TECH<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 drop-shadow-[0_0_35px_rgba(0,240,255,0.5)]">FEST</span>
          </h1>
        </div>

        {/* Theme Descriptor */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 my-2">
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-cyan-400" />
          <h2 className="text-sm sm:text-lg md:text-xl font-orbitron tracking-[0.25em] text-cyan-300 font-semibold uppercase">
            An Aetherial Renaissance
          </h2>
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-cyan-400" />
        </div>

        {/* Tagline */}
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-space font-light leading-relaxed">
          Asia&apos;s Largest Science &amp; Technology Festival. Where 175,000+ engineers, researchers, combat roboticists, and pioneers converge on the legendary 550-acre campus of IIT Bombay.
        </p>

        {/* High-Tech Countdown Box */}
        <div className="mt-8 mb-10 max-w-xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-cyan-500/30 backdrop-blur-xl shadow-cyber-card relative">
            
            {/* Corner Tech Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 rounded-tl" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 rounded-tr" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 rounded-bl" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 rounded-br" />

            <div className="flex items-center justify-between text-xs font-mono text-cyan-400/80 mb-3 px-1 border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                FESTIVAL COUNTDOWN
              </span>
              <span className="text-slate-400">POWAI, MUMBAI [UTC+05:30]</span>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              {[
                { label: 'DAYS', val: timeLeft.days },
                { label: 'HOURS', val: timeLeft.hours },
                { label: 'MINUTES', val: timeLeft.minutes },
                { label: 'SECONDS', val: timeLeft.seconds },
              ].map((item, idx) => (
                <div key={idx} className="bg-black/40 rounded-xl p-2 sm:p-3 border border-white/5">
                  <div className="text-2xl sm:text-4xl font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300">
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono font-medium text-cyan-400/90 tracking-widest mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenRegister();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-orbitron font-bold text-sm tracking-wider text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:shadow-neon-cyan transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>REGISTER FOR TECHFEST</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#pass-generator"
            onClick={() => soundFX.playClick()}
            onMouseEnter={() => soundFX.playHover()}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-orbitron font-medium text-sm tracking-wide text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.15)] cursor-pointer"
          >
            <Ticket className="w-4 h-4 text-cyan-400" />
            <span>GENERATE ATTENDEE PASS</span>
          </a>

          <a
            href="#arenas"
            onClick={() => soundFX.playClick()}
            onMouseEnter={() => soundFX.playHover()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-space font-medium text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-purple-400" />
            <span>EXPLORE ARENAS</span>
          </a>
        </div>

        {/* Quick Features Micro Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-10 text-xs sm:text-sm font-space text-slate-400">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Robowars 60kg Titan Battles</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Unitree G1 Humanoids Live</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>UNESCO & SAARC Patronages</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-amber-400" />
            <span>Free Campus Entry for All</span>
          </div>
        </div>

      </div>

      {/* Decorative Target HUD elements on flanks */}
      <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 text-left font-mono text-[10px] text-slate-500 space-y-1 select-none pointer-events-none">
        <div className="text-cyan-400 font-semibold">[SYS.TELEMETRY]</div>
        <div>SYS: READY</div>
        <div>LAT: 19.1334° N</div>
        <div>LNG: 72.9133° E</div>
        <div>ELEV: 50m ASL</div>
        <div>CAMPUS: 550 ACRES</div>
        <div className="w-16 h-[1px] bg-cyan-500/30 my-2" />
        <div className="text-purple-400">NET: 10GBPS FIBER</div>
      </div>

      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 text-right font-mono text-[10px] text-slate-500 space-y-1 select-none pointer-events-none">
        <div className="text-cyan-400 font-semibold">[EDITION.INFO]</div>
        <div>FEST: TECHFEST 2026</div>
        <div>LANDMARK: 30 YRS</div>
        <div>PATRON: UNESCO</div>
        <div>TEAMS: 2500+ INST</div>
        <div>POWAI LAKE: ADJACENT</div>
        <div className="w-16 h-[1px] bg-cyan-500/30 my-2 ml-auto" />
        <div className="text-emerald-400">STATUS: ADMISSIONS OPEN</div>
      </div>

    </section>
  );
}

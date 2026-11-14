import React from 'react';
import { Quote, Sparkles, Award } from 'lucide-react';
import { FEATURED_SPEAKERS } from '../data/festivalData';
import { soundFX } from '../audio/soundFX';

export default function Speakers() {
  return (
    <section id="speakers" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Award className="w-3.5 h-3.5 text-cyan-400" />
          <span>HALL OF VISIONARIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white tracking-tight">
          WORDS THAT SHAPED <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">CIVILIZATION</span>
        </h2>
        <p className="mt-3 text-slate-400 font-space text-sm sm:text-base">
          Over 30 years, Techfest&apos;s keynote stage has hosted pioneers whose inventions, policies, and philosophies redefine humanity.
        </p>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_SPEAKERS.map((speaker, idx) => (
          <div
            key={idx}
            onMouseEnter={() => soundFX.playHover()}
            className="group relative rounded-2xl bg-gradient-to-b from-white/[0.06] to-black/60 border border-white/10 hover:border-amber-500/40 p-6 transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-xl shadow-cyber-card flex flex-col justify-between"
          >
            {/* Top Corner Hex Mark */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold">
                {speaker.tag}
              </span>
              <span className="text-xs font-mono text-slate-500">
                {speaker.year}
              </span>
            </div>

            {/* Speaker Info */}
            <div>
              <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-amber-300 transition-colors">
                {speaker.name}
              </h3>
              <div className="text-sm font-space text-cyan-400 font-medium">
                {speaker.role}
              </div>
              <div className="text-xs font-mono text-slate-400 mt-0.5">
                {speaker.org}
              </div>

              {/* Quote */}
              <div className="mt-5 p-4 rounded-xl bg-black/40 border border-white/5 relative">
                <Quote className="w-4 h-4 text-amber-400/50 absolute top-2.5 left-2.5" />
                <p className="pl-6 text-xs sm:text-sm font-space text-slate-300 italic leading-relaxed">
                  &ldquo;{speaker.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1 text-slate-400">
                <Sparkles className="w-3 h-3 text-amber-400" />
                IIT Bombay Convocation Hall
              </span>
              <span className="text-cyan-400/80">ARCHIVED SESSION</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

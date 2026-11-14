import React, { useState } from 'react';
import { ArrowUpRight, Flame, Trophy, Calendar, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { FESTIVAL_ARENAS } from '../data/festivalData';
import { soundFX } from '../audio/soundFX';

export default function ArenasExplorer({ onSelectArena, onOpenRegister }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Combat & Robotics',
    'AI & Code',
    'Expos & Talks',
    'Nights & Shows',
    'Workshops',
    'Social Good',
  ];

  const filteredArenas = activeFilter === 'All'
    ? FESTIVAL_ARENAS
    : FESTIVAL_ARENAS.filter(a => a.category === activeFilter);

  return (
    <section id="arenas" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/5 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>FESTIVAL VERTICALS &amp; ARENAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white tracking-tight">
            EXPLORE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">ARENAS</span>
          </h2>
          <p className="mt-3 text-slate-400 font-space text-sm sm:text-base max-w-2xl">
            From the bone-crushing kinetic energy of 60kg Robowars to international humanoid unveilings and midnight hackathons, choose your battlefield.
          </p>
        </div>

        {/* Quick count badge */}
        <div className="mt-4 md:mt-0 font-mono text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-2 rounded-xl backdrop-blur-md self-start md:self-auto">
          <span>SHOWING: {filteredArenas.length} VERTICALS</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        <Filter className="w-4 h-4 text-slate-500 shrink-0 ml-1 mr-2" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundFX.playClick();
              setActiveFilter(cat);
            }}
            onMouseEnter={() => soundFX.playHover()}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-space font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeFilter === cat
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 hover:border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Arenas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArenas.map((arena) => (
          <div
            key={arena.id}
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => {
              soundFX.playClick();
              onSelectArena(arena);
            }}
            className={`group relative rounded-2xl bg-gradient-to-b ${arena.color} bg-black/60 border border-white/10 hover:${arena.borderAccent} p-6 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer backdrop-blur-xl flex flex-col justify-between overflow-hidden shadow-cyber-card`}
          >
            {/* Top subtle glow on hover */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
              style={{ background: arena.glowColor }}
            />

            <div>
              {/* Card Meta Row */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/10 text-cyan-300 border border-white/10 font-medium">
                  {arena.category}
                </span>

                <div className="flex items-center gap-2">
                  {arena.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold flex items-center gap-1">
                      <Flame className="w-3 h-3 text-cyan-400" />
                      {arena.badge}
                    </span>
                  )}
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                {arena.title}
              </h3>
              <p className="text-xs sm:text-sm font-space text-slate-300 mt-1 font-medium">
                {arena.tagline}
              </p>

              {/* Snippet / Vibe */}
              <div className="mt-3 py-1.5 px-3 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-slate-300">
                {arena.imageSnippet}
              </div>

              {/* Description preview */}
              <p className="mt-3 text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed font-space">
                {arena.description}
              </p>

              {/* Key Bullet Highlights */}
              <div className="mt-4 space-y-1.5 pt-4 border-t border-white/5">
                {arena.highlights.slice(0, 3).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1.5 text-amber-400">
                <Trophy className="w-3.5 h-3.5" />
                <span className="font-semibold">{arena.prize}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{arena.date}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

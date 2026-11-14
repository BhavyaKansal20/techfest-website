import React from 'react';
import { Users, GraduationCap, Globe2, Trophy, Sparkles, TrendingUp } from 'lucide-react';
import { FESTIVAL_STATS } from '../data/festivalData';
import { soundFX } from '../audio/soundFX';

const iconMap = {
  Users: Users,
  GraduationCap: GraduationCap,
  Globe2: Globe2,
  Trophy: Trophy,
  Sparkles: Sparkles,
};

export default function StatsBar() {
  return (
    <section className="relative z-20 py-8 border-y border-cyan-500/20 bg-[#030816]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {FESTIVAL_STATS.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || Sparkles;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="group relative p-4 rounded-xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Glow accent */}
                <div className="absolute inset-0 rounded-xl bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-all duration-300" />
                
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 flex items-center gap-1">
                    <TrendingUp className="w-2.5 h-2.5" />
                    {stat.change}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-orbitron font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>

                <div className="text-xs font-space text-slate-400 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

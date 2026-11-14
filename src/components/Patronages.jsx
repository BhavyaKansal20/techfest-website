import React from 'react';
import { ShieldCheck, Award, Globe } from 'lucide-react';
import { PATRONAGES } from '../data/festivalData';
import { soundFX } from '../audio/soundFX';

export default function Patronages() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-2">
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>GLOBAL &amp; NATIONAL PATRONAGES</span>
        </div>
        <p className="text-xs sm:text-sm font-space text-slate-400 uppercase tracking-widest">
          Endorsed by international bodies and the Government of India
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {PATRONAGES.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => soundFX.playHover()}
            className="group p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 text-center flex flex-col items-center justify-center backdrop-blur-md"
          >
            <div className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2.5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="font-orbitron font-extrabold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
              {item.name}
            </div>
            <div className="text-[10px] font-space text-slate-400 mt-0.5">
              {item.subtitle}
            </div>
            <div className="mt-2 text-[9px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              {item.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

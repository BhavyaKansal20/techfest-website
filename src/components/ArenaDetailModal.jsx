import React, { useEffect } from 'react';
import { X, Trophy, Calendar, CheckCircle2, Flame, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { soundFX } from '../audio/soundFX';

export default function ArenaDetailModal({ arena, onClose, onRegister }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!arena) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#050b18] border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            {arena.category}
          </span>
          {arena.badge && (
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-purple-400" />
              {arena.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
          {arena.title}
        </h3>
        <p className="text-sm sm:text-base font-space text-cyan-300 mt-1 font-medium">
          {arena.tagline}
        </p>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 gap-3 my-6 p-4 rounded-xl bg-black/40 border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">Prize Pool / Grant</div>
              <div className="text-sm sm:text-base font-orbitron font-bold text-white">{arena.prize}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">Schedule</div>
              <div className="text-sm sm:text-base font-orbitron font-bold text-white">{arena.date}</div>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="space-y-4 font-space text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>{arena.description}</p>
        </div>

        {/* Highlights */}
        <div className="my-6">
          <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Arena Features &amp; Specifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {arena.highlights.map((hl, i) => (
              <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certification & Entry Note */}
        <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs font-space text-cyan-200/90 flex items-center gap-2 mb-6">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Verified Certificate of Participation awarded by Techfest IIT Bombay to all registered attendees.</span>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
              onRegister(arena.title);
            }}
            className="flex-1 py-3 px-6 rounded-xl font-orbitron font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 shadow-neon-cyan transition-all flex items-center justify-center gap-2"
          >
            <span>REGISTER FOR {arena.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="py-3 px-6 rounded-xl font-space font-medium text-sm text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}

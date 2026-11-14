import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/festivalData';
import { soundFX } from '../audio/soundFX';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    soundFX.playClick();
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5">
      
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>EVERYTHING YOU NEED TO KNOW</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white tracking-tight">
          FREQUENTLY ASKED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">QUESTIONS</span>
        </h2>
        <p className="mt-3 text-slate-400 font-space text-sm sm:text-base">
          Got questions about passes, team requirements, or campus protocols? Find immediate answers here.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#040915] border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.12)]'
                  : 'bg-white/[0.03] border-white/5 hover:border-white/15'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                onMouseEnter={() => soundFX.playHover()}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-orbitron font-bold text-sm sm:text-base text-white">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-400'
                }`}>
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm font-space leading-relaxed border-t border-white/5">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}

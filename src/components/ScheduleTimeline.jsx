import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Tag, ChevronRight } from 'lucide-react';
import { FESTIVAL_SCHEDULE } from '../data/festivalData';
import { soundFX } from '../audio/soundFX';

export default function ScheduleTimeline() {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);

  const activeSchedule = FESTIVAL_SCHEDULE[selectedDayIdx];

  const tagColors = {
    Ceremony: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    Expo: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    Combat: 'text-red-400 bg-red-500/10 border-red-500/20',
    Lecture: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    Racing: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    Spectacle: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    Code: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    Symposium: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    Debate: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    Innovation: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  };

  return (
    <section id="schedule" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>FESTIVAL ITINERARY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white tracking-tight">
            THE 3-DAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">CHRONICLES</span>
          </h2>
          <p className="mt-3 text-slate-400 font-space text-sm sm:text-base max-w-2xl">
            From sunrise keynote addresses in the Convocation Hall to midnight drone battles and pyrotechnics, plan your three days on campus.
          </p>
        </div>

        {/* Live campus status badge */}
        <div className="mt-4 md:mt-0 font-mono text-xs text-slate-400 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
          <span className="text-cyan-400 font-bold">ALL TIMINGS:</span> IST (MUMBAI)
        </div>
      </div>

      {/* Day Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {FESTIVAL_SCHEDULE.map((dayItem, idx) => (
          <button
            key={dayItem.day}
            onClick={() => {
              soundFX.playClick();
              setSelectedDayIdx(idx);
            }}
            onMouseEnter={() => soundFX.playHover()}
            className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
              selectedDayIdx === idx
                ? 'bg-gradient-to-b from-cyan-500/20 via-black/60 to-black/80 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.25)]'
                : 'bg-white/5 hover:bg-white/10 border-white/5 text-slate-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-xs font-mono font-bold tracking-widest ${selectedDayIdx === idx ? 'text-cyan-400' : 'text-slate-500'}`}>
                {dayItem.day}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {dayItem.date}
              </span>
            </div>

            <div className={`mt-2 font-orbitron font-bold text-base sm:text-lg ${selectedDayIdx === idx ? 'text-white' : 'text-slate-300'}`}>
              {dayItem.theme}
            </div>

            <div className="mt-3 text-xs font-space text-slate-400 flex items-center gap-1.5">
              <span>{dayItem.events.length} Major Lineup Events</span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
            </div>
          </button>
        ))}
      </div>

      {/* Events Timeline List */}
      <div className="space-y-4">
        {activeSchedule.events.map((evt, idx) => (
          <div
            key={idx}
            onMouseEnter={() => soundFX.playHover()}
            className="group relative p-5 sm:p-6 rounded-2xl bg-[#040915]/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-x-1 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start sm:items-center gap-4 sm:gap-6">
              
              {/* Time Box */}
              <div className="w-24 shrink-0 px-3 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-center font-mono text-xs font-bold text-cyan-300 flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{evt.time}</span>
              </div>

              {/* Title & Venue */}
              <div>
                <h3 className="text-base sm:text-lg font-orbitron font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {evt.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-space text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{evt.venue}</span>
                </div>
              </div>
            </div>

            {/* Tag Badge */}
            <div className="self-start sm:self-auto">
              <span className={`text-[11px] font-mono tracking-wider px-3 py-1 rounded-full border font-medium ${tagColors[evt.tag] || 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'}`}>
                {evt.tag}
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

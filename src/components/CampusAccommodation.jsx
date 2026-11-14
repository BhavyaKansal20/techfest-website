import React from 'react';
import { MapPin, Bed, Utensils, Wifi, Shield, Plane, Train, Bus, ExternalLink } from 'lucide-react';
import { soundFX } from '../audio/soundFX';

export default function CampusAccommodation({ onOpenRegister }) {
  const highlights = [
    {
      title: "On-Campus Hostel Stay",
      desc: "Authentic IIT Bombay hostel rooms allotted for registered participants with clean bedding and 24/7 power.",
      icon: Bed,
      color: "text-cyan-400"
    },
    {
      title: "Hygienic Dining Mess",
      desc: "Four wholesome daily meals (Breakfast, Lunch, High Tea, Dinner) in student dining halls.",
      icon: Utensils,
      color: "text-amber-400"
    },
    {
      title: "High-Speed Campus WiFi",
      desc: "10 Gbps gigabit network access across academic areas and convention centres.",
      icon: Wifi,
      color: "text-purple-400"
    },
    {
      title: "24/7 Security & Medical",
      desc: "Gated security checkpoints, round-the-clock patrol, and on-campus hospital assistance.",
      icon: Shield,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="campus" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>POWAI, MUMBAI • 550-ACRE BIOSPHERE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white tracking-tight">
          CAMPUS &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">ACCOMMODATION</span>
        </h2>
        <p className="mt-3 text-slate-400 font-space text-sm sm:text-base">
          Nestled between Powai Lake and the lush green hills of the National Park, IIT Bombay offers an unforgettable festival home.
        </p>
      </div>

      {/* Main Grid: Campus Perks & Transit */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Accommodation Amenities */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                onMouseEnter={() => soundFX.playHover()}
                className="p-6 rounded-2xl bg-[#040915]/80 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 ${h.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-orbitron font-bold text-white mb-2">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-space text-slate-400 leading-relaxed">
                    {h.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400">
                  DEC 15 – 19 DURATION
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Transit Card */}
        <div className="lg:col-span-5 p-7 rounded-3xl bg-gradient-to-b from-white/[0.06] to-black/60 border border-white/10 flex flex-col justify-between backdrop-blur-xl shadow-cyber-card">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                TRANSIT &amp; DIRECTIONS
              </span>
              <span className="text-xs font-mono text-slate-400">
                MUMBAI, INDIA
              </span>
            </div>

            <h3 className="text-xl font-orbitron font-bold text-white">
              Getting to IIT Bombay
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-space text-slate-300 leading-relaxed">
              Main Gate on Adi Shankaracharya Marg, Powai, Mumbai - 400076.
            </p>

            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 font-space">
                <Plane className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white">Chhatrapati Shivaji Maharaj Airport</div>
                  <div className="text-slate-400 text-[11px]">8 km / ~25 mins via cab</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 font-space">
                <Train className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white">Kanjurmarg Station (Central Railway)</div>
                  <div className="text-slate-400 text-[11px]">3 km / direct auto-rickshaws available</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 font-space">
                <Bus className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white">Andheri Station (Western Line &amp; Metro)</div>
                  <div className="text-slate-400 text-[11px]">10 km / Connected via Metro &amp; BEST buses</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenRegister('Accommodation Request');
              }}
              className="w-full py-3 rounded-xl font-orbitron font-bold text-xs tracking-wider text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>APPLY FOR ON-CAMPUS ACCOMMODATION</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

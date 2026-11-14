import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../audio/soundFX';

export default function RegistrationModal({ isOpen, onClose, defaultEvent }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    city: '',
    event: 'All-Access General Entry (Free)',
    teamSize: '1 (Individual)',
    needHostel: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  useEffect(() => {
    if (defaultEvent) {
      setFormData((prev) => ({ ...prev, event: defaultEvent }));
    }
  }, [defaultEvent]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFX.playSuccess();
    const id = `TF30-REG-${Math.floor(10000 + Math.random() * 90000)}`;
    setRegId(id);
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#00f0ff', '#b026ff', '#00ffc8', '#ffd23f'],
    });
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  const eventOptions = [
    'All-Access General Entry (Free)',
    'ROBOWARS - 60kg Heavyweight Combat',
    'ROBOWARS - 15kg Featherweight Combat',
    'Agentic AI & Open LLM 36-Hr Hackathon',
    'InnovateX: Sustainable AQI & Energy',
    'IDRL International Drone Racing Grand Prix',
    'Fullthrottle: 1:8 Nitro & Electric RC',
    'Hands-On AI & Robotics Workshops',
    'Accommodation Request (Dec 15-19)',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#040915] border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.25)] text-left"
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

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                OFFICIAL FESTIVAL REGISTRATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-orbitron font-extrabold text-white mt-3">
                JOIN TECHFEST 2026
              </h3>
              <p className="text-xs sm:text-sm font-space text-slate-400 mt-1">
                30th Landmark Edition • December 16–18, 2026 • IIT Bombay Campus
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Maya Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white font-space text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@university.edu"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white font-space text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    WhatsApp / Mobile *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white font-space text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Institution / University *
                  </label>
                  <input
                    type="text"
                    name="college"
                    required
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="e.g. IIT Bombay / BITS Pilani"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white font-space text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    City / State *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai, Maharashtra"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white font-space text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  Select Event Track / Vertical
                </label>
                <select
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white font-space text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  {eventOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-slate-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Team Composition
                  </label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white font-space text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="1 (Individual)" className="bg-slate-900 text-white">1 (Individual Attendee)</option>
                    <option value="2-3 Members" className="bg-slate-900 text-white">2 - 3 Members Team</option>
                    <option value="4-5 Members" className="bg-slate-900 text-white">4 - 5 Members Team</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 pt-6">
                  <input
                    type="checkbox"
                    id="hostel"
                    name="needHostel"
                    checked={formData.needHostel}
                    onChange={handleChange}
                    className="w-4 h-4 rounded text-cyan-400 focus:ring-cyan-500 bg-black border-white/20"
                  />
                  <label htmlFor="hostel" className="text-xs font-space text-slate-200 cursor-pointer">
                    Need On-Campus Hostel Accommodation (Dec 15–19)
                  </label>
                </div>
              </div>

              {/* Submission Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-orbitron font-bold text-sm text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:shadow-neon-cyan transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>COMPLETE REGISTRATION (FREE)</span>
                </button>
              </div>

              <div className="text-center text-[11px] font-space text-slate-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Instant QR pass confirmation sent directly to your registered email.</span>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              REGISTRATION CONFIRMED
            </span>

            <h3 className="text-2xl sm:text-3xl font-orbitron font-black text-white mt-4">
              WELCOME TO TECHFEST!
            </h3>

            <p className="mt-2 text-sm font-space text-slate-300 max-w-md mx-auto">
              Greetings, <strong className="text-cyan-300">{formData.name}</strong>. Your registration for <strong className="text-white">{formData.event}</strong> has been logged into the festival ledger.
            </p>

            {/* Reference Badge */}
            <div className="my-6 p-4 rounded-2xl bg-black/60 border border-cyan-500/30 max-w-sm mx-auto">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                OFFICIAL REFERENCE ID
              </div>
              <div className="text-xl font-mono font-bold text-cyan-400 mt-1">
                {regId}
              </div>
              <div className="text-[11px] font-space text-slate-400 mt-1">
                Present this reference at Campus Main Gate (Powai)
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#pass-generator"
                onClick={resetForm}
                className="py-2.5 px-6 rounded-xl font-orbitron font-bold text-xs text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>CUSTOMIZE YOUR BADGE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={resetForm}
                className="py-2.5 px-6 rounded-xl font-space text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

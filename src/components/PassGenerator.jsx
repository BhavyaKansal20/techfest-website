import React, { useState, useRef, useEffect } from 'react';
import { Download, Sparkles, QrCode, Shield, Copy, Check, RefreshCw, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../audio/soundFX';

export default function PassGenerator() {
  const [name, setName] = useState('Alex Vance');
  const [institute, setInstitute] = useState('IIT Bombay');
  const [role, setRole] = useState('Robotics Engineer');
  const [tier, setTier] = useState('All-Access Delegate');
  const [passId, setPassId] = useState('TF30-8924-BOM');
  const [copied, setCopied] = useState(false);
  const qrCanvasRef = useRef(null);
  const cardRef = useRef(null);

  const roles = [
    'Robotics Engineer',
    'AI Researcher',
    'Full-Stack Hacker',
    'Combat Pilot',
    'Drone Aviator',
    'Design Visionary',
    'All-Access Delegate'
  ];

  const tiers = [
    { label: 'Student Pass', color: 'text-cyan-400', border: 'border-cyan-500/40' },
    { label: 'Competitor Elite', color: 'text-orange-400', border: 'border-orange-500/40' },
    { label: 'VIP All-Access', color: 'text-purple-400', border: 'border-purple-500/40' },
  ];

  // Draw procedural QR / Matrix code on canvas
  useEffect(() => {
    const canvas = qrCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 110;
    canvas.width = size;
    canvas.height = size;
    ctx.clearRect(0, 0, size, size);

    // Matrix block pattern
    const gridSize = 11;
    const cellSize = size / gridSize;

    // Seed hash from name + passId
    const seed = (name + passId).split('').reduce((acc, c) => acc + c.charCodeAt(0), 42);

    ctx.fillStyle = '#050b18';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#00f0ff';

    // Corner targeting squares (standard QR corners)
    const drawFinder = (x, y) => {
      ctx.fillRect(x * cellSize, y * cellSize, 3 * cellSize, 3 * cellSize);
      ctx.clearRect((x + 0.6) * cellSize, (y + 0.6) * cellSize, 1.8 * cellSize, 1.8 * cellSize);
      ctx.fillRect((x + 1) * cellSize, (y + 1) * cellSize, 1 * cellSize, 1 * cellSize);
    };

    drawFinder(0, 0);
    drawFinder(8, 0);
    drawFinder(0, 8);

    // Random algorithmic blocks based on seed
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if ((r < 3 && c < 3) || (r < 3 && c > 7) || (r > 7 && c < 3)) continue;
        const val = Math.sin(seed * (r * gridSize + c + 1)) * 10000;
        if ((val - Math.floor(val)) > 0.45) {
          ctx.fillRect(c * cellSize + 0.5, r * cellSize + 0.5, cellSize - 1, cellSize - 1);
        }
      }
    }
  }, [name, passId, role]);

  const generateNewId = () => {
    soundFX.playClick();
    const rand = Math.floor(1000 + Math.random() * 9000);
    setPassId(`TF30-${rand}-BOM`);
  };

  const handleCopy = () => {
    soundFX.playSuccess();
    navigator.clipboard.writeText(`${passId} - ${name} (${role}) | Techfest 2026`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerCelebration = () => {
    soundFX.playSuccess();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#b026ff', '#00ffc8', '#ffd23f'],
    });
  };

  return (
    <section id="pass-generator" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <QrCode className="w-3.5 h-3.5 text-cyan-400" />
          <span>INSTANT DIGITAL ACCREDITATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white tracking-tight">
          GENERATE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">CYBER PASS</span>
        </h2>
        <p className="mt-3 text-slate-400 font-space text-sm sm:text-base">
          Customize your official holographic Techfest 2026 credential card with cryptographic verification &amp; priority campus access.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Pass Customizer Controls */}
        <div className="lg:col-span-5 space-y-5 bg-[#040915]/90 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-cyber-card">
          <h3 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-cyan-400" />
            <span>Delegate Credentials</span>
          </h3>

          <div>
            <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Attendee Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white font-space text-sm focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="e.g. Maya Patel"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 uppercase mb-2">College / Organization</label>
            <input
              type="text"
              value={institute}
              onChange={(e) => setInstitute(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white font-space text-sm focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="e.g. IIT Bombay / Stanford"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Specialization / Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white font-space text-sm focus:border-cyan-400 focus:outline-none transition-colors"
            >
              {roles.map((r) => (
                <option key={r} value={r} className="bg-slate-900 text-white">
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Pass Classification</label>
            <div className="grid grid-cols-3 gap-2">
              {tiers.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => {
                    soundFX.playClick();
                    setTier(t.label);
                  }}
                  className={`p-2 rounded-xl text-[11px] font-space font-medium border text-center transition-all cursor-pointer ${
                    tier === t.label
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3">
            <button
              onClick={generateNewId}
              className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Regenerate Hash</span>
            </button>

            <button
              onClick={triggerCelebration}
              className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-orbitron font-bold flex items-center justify-center gap-1.5 shadow-neon-cyan transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Confirm Pass</span>
            </button>
          </div>
        </div>

        {/* Live Holographic Pass Preview */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          
          <div
            ref={cardRef}
            className="relative w-full max-w-md aspect-[1.65/1] rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#0c1938] via-[#040a18] to-[#02050f] border-2 border-cyan-400/50 shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden flex flex-col justify-between"
          >
            {/* Holographic foil overlay sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-purple-500/10 to-transparent pointer-events-none mix-blend-overlay" />
            
            {/* Security watermark pattern */}
            <div className="absolute -right-16 -bottom-16 w-52 h-52 rounded-full border border-cyan-500/20 pointer-events-none" />
            <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full border border-purple-500/20 pointer-events-none" />

            {/* Top Pass Row */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-400 text-black flex items-center justify-center font-orbitron font-black text-sm shadow-[0_0_12px_rgba(0,240,255,0.6)]">
                  TF
                </div>
                <div>
                  <div className="font-orbitron font-extrabold text-sm tracking-wider text-white">
                    TECHFEST 2026
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                    IIT BOMBAY • 30TH ED
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                  {tier}
                </span>
              </div>
            </div>

            {/* Middle Attendee Info */}
            <div className="relative z-10 my-auto py-2">
              <div className="text-xl sm:text-2xl font-orbitron font-black text-white tracking-wide truncate">
                {name || 'DELEGATE NAME'}
              </div>
              <div className="text-xs font-space text-cyan-300 font-medium tracking-wide mt-0.5 truncate">
                {institute || 'INSTITUTION'}
              </div>
              <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-[10px] font-mono text-purple-200">
                ROLE: {role.toUpperCase()}
              </div>
            </div>

            {/* Bottom Pass Row with QR & Barcode */}
            <div className="relative z-10 pt-3 border-t border-white/10 flex items-end justify-between">
              <div>
                <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                  CREDENTIAL SERIAL
                </div>
                <div className="text-xs font-mono font-bold text-cyan-300 tracking-wider">
                  {passId}
                </div>
                <div className="text-[8px] font-mono text-slate-500 mt-0.5">
                  CAMPUS GATE • DEC 16-18, 2026
                </div>
              </div>

              {/* QR Code Canvas */}
              <div className="p-1 rounded-lg bg-black border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <canvas ref={qrCanvasRef} className="w-14 h-14 block" />
              </div>
            </div>

          </div>

          {/* Action Row below badge */}
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY PASS ID</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                triggerCelebration();
                alert(`Pass [${passId}] confirmed for ${name}! Please save this Pass ID for on-campus verification.`);
              }}
              className="px-4 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-xs font-mono text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>SAVE CREDENTIAL</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

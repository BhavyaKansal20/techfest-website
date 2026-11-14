import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Sparkles, Zap, Radio, Volume2, Music2 } from 'lucide-react';
import { soundFX } from '../audio/soundFX';

export default function TechnoholixVisualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeMode, setActiveMode] = useState('Laser'); // 'Laser', 'Drone', 'Bass'
  const canvasRef = useRef(null);
  const beatStepRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 360;
    };
    window.addEventListener('resize', handleResize);

    // Audio bar frequency data
    const barCount = 36;
    const bars = Array.from({ length: barCount }, () => Math.random() * 0.2 + 0.1);

    // Drone light nodes
    const drones = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.6) + 30,
      targetX: Math.random() * width,
      targetY: Math.random() * (height * 0.6) + 30,
      radius: Math.random() * 2.5 + 1.5,
      color: Math.random() > 0.5 ? '#00f0ff' : '#b026ff',
      phase: Math.random() * Math.PI * 2
    }));

    let laserAngle = 0;

    const render = () => {
      ctx.fillStyle = 'rgba(4, 9, 21, 0.35)'; // trailing fade
      ctx.fillRect(0, 0, width, height);

      const step = beatStepRef.current;
      const energyMultiplier = isPlaying ? 1.8 : 0.4;

      // Update bars
      for (let i = 0; i < barCount; i++) {
        const targetHeight = isPlaying 
          ? (Math.sin(Date.now() * 0.005 + i * 0.4) * 0.4 + 0.5) * (0.8 + ((step % 4 === 0) ? 0.3 : 0))
          : Math.sin(Date.now() * 0.002 + i * 0.2) * 0.15 + 0.15;
        bars[i] += (targetHeight - bars[i]) * 0.2;
      }

      // Draw Grid Floor Perspective
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.12)';
      ctx.lineWidth = 1;
      const horizonY = height * 0.68;
      for (let x = 0; x <= width; x += width / 16) {
        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo((x - width / 2) * 0.3 + width / 2, horizonY);
        ctx.stroke();
      }
      for (let y = horizonY; y <= height; y += (height - horizonY) / 5) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // Mode: Laser Sweeps
      laserAngle += isPlaying ? 0.025 : 0.008;
      const beamOrigins = [
        { x: width * 0.2, y: horizonY },
        { x: width * 0.5, y: horizonY - 20 },
        { x: width * 0.8, y: horizonY },
      ];

      beamOrigins.forEach((origin, idx) => {
        const angle = laserAngle + (idx * Math.PI) / 3;
        const endX = origin.x + Math.sin(angle) * (width * 0.6);
        const endY = 0;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(origin.x, origin.y);
        ctx.lineTo(endX, endY);
        const strokeColor = idx % 2 === 0 ? 'rgba(0, 240, 255, ' : 'rgba(255, 0, 127, ';
        ctx.strokeStyle = strokeColor + (isPlaying ? '0.7)' : '0.25)');
        ctx.lineWidth = isPlaying ? 2.5 : 1.2;
        ctx.shadowColor = idx % 2 === 0 ? '#00f0ff' : '#ff007f';
        ctx.shadowBlur = isPlaying ? 18 : 6;
        ctx.stroke();
        ctx.restore();
      });

      // Mode: Drone Swarm light formations
      drones.forEach((d) => {
        d.phase += 0.03;
        if (isPlaying) {
          // Morph into wave or spiral
          d.x += (Math.sin(d.phase) * 1.5);
          d.y += (Math.cos(d.phase * 0.7) * 1.2);
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.shadowColor = d.color;
        ctx.shadowBlur = isPlaying ? 12 : 4;
        ctx.fill();
        ctx.restore();
      });

      // Draw Audio Equalizer Bars at bottom
      const barWidth = width / barCount - 4;
      for (let i = 0; i < barCount; i++) {
        const bHeight = bars[i] * (height * 0.38) * energyMultiplier;
        const bx = i * (barWidth + 4) + 2;
        const by = height - bHeight;

        const grad = ctx.createLinearGradient(0, by, 0, height);
        grad.addColorStop(0, '#00f0ff');
        grad.addColorStop(0.5, '#b026ff');
        grad.addColorStop(1, '#ff007f');

        ctx.fillStyle = grad;
        ctx.fillRect(bx, by, barWidth, bHeight);

        // Bar cap
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(bx, by - 2, barWidth, 2);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPlaying, activeMode]);

  const togglePlayback = () => {
    soundFX.playClick();
    if (isPlaying) {
      soundFX.stopBeat();
      setIsPlaying(false);
    } else {
      soundFX.setMuted(false);
      soundFX.startBeat((step) => {
        beatStepRef.current = step;
      });
      setIsPlaying(true);
    }
  };

  return (
    <section id="technoholix" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono mb-3">
            <Radio className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span>NIGHT SPECTACLE • DEC 16-18 • GYMKHANA GROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white tracking-tight">
            TECHNOHOLIX <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400">ARENA</span>
          </h2>
          <p className="mt-3 text-slate-400 font-space text-sm sm:text-base max-w-2xl">
            Experience the sensory singularity where cutting-edge lasers, 500-drone aerial choreography, pyrotechnics, and international EDM merge into an electric night festival.
          </p>
        </div>

        {/* Live Controller Button */}
        <div className="mt-6 lg:mt-0 flex items-center gap-3">
          <button
            onClick={togglePlayback}
            className={`px-6 py-3 rounded-xl font-orbitron font-bold text-xs sm:text-sm tracking-wider flex items-center gap-2.5 transition-all duration-300 cursor-pointer ${
              isPlaying
                ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.5)]'
                : 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-black shadow-neon-purple hover:scale-105'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-white" />
                <span>PAUSE LIVE BEAT</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-black" />
                <span>ACTIVATE LIVE SIMULATOR</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Visualizer Frame */}
      <div className="relative rounded-3xl bg-[#040915] border border-cyan-500/30 overflow-hidden shadow-[0_0_40px_rgba(176,38,255,0.15)]">
        
        {/* Top bar controls */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-black/40 text-xs font-mono">
          <div className="flex items-center gap-2 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>SYNTH-SPECTRUM AUDIO ENGINE</span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="hidden sm:inline">MODE: 500-DRONE + LASER PYRO</span>
            <span className="text-pink-400 font-bold">128 BPM</span>
          </div>
        </div>

        {/* Canvas Display */}
        <div className="relative w-full h-[360px] bg-[#02050e]">
          <canvas ref={canvasRef} className="w-full h-full block" />

          {/* Overlay info badge when not playing */}
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-[2px] pointer-events-none text-center p-4">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 mb-3 shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                <Music2 className="w-7 h-7 animate-pulse" />
              </div>
              <h4 className="text-lg font-orbitron font-bold text-white">Interactive Stage Simulation</h4>
              <p className="text-xs font-space text-slate-300 max-w-md mt-1">
                Click &ldquo;Activate Live Simulator&rdquo; above to hear procedural Web Audio EDM synthesis and watch reactive laser beams &amp; drone swarms dance!
              </p>
            </div>
          )}
        </div>

        {/* Feature Badges below visualizer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-black/40 border-t border-white/5 text-xs font-space">
          <div className="flex items-center gap-2.5 text-slate-300">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <div>
              <div className="font-semibold text-white">500 Drones</div>
              <div className="text-[11px] text-slate-400">Sky constellation ballet</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-slate-300">
            <Zap className="w-4 h-4 text-cyan-400" />
            <div>
              <div className="font-semibold text-white">40W RGB Lasers</div>
              <div className="text-[11px] text-slate-400">Sub-millisecond tracking</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-slate-300">
            <Volume2 className="w-4 h-4 text-purple-400" />
            <div>
              <div className="font-semibold text-white">International EDM</div>
              <div className="text-[11px] text-slate-400">Global touring DJ headliners</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-slate-300">
            <Radio className="w-4 h-4 text-amber-400" />
            <div>
              <div className="font-semibold text-white">Free Open Access</div>
              <div className="text-[11px] text-slate-400">Every evening 8:00 PM onwards</div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

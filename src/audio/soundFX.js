// Web Audio API Procedural Synthesizer for Techfest Cyber Soundscape
// Zero external files, zero latency, purely procedural

class SoundFXController {
  constructor() {
    this.ctx = null;
    this.muted = true; // start muted by default for friendly web standards
    this.beatInterval = null;
    this.beatStep = 0;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  isMuted() {
    return this.muted;
  }

  setMuted(val) {
    this.muted = val;
    if (!val) {
      this.init();
      this.playSuccess();
    } else {
      this.stopBeat();
    }
  }

  playHover() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // AudioContext safe fail
    }
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {}
  }

  playSuccess() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        const startTime = this.ctx.currentTime + idx * 0.06;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.08, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.15);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.15);
      });
    } catch {}
  }

  playGlitch() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const bufferSize = this.ctx.sampleRate * 0.05;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800;
      filter.Q.value = 3;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch {}
  }

  startBeat(onStep) {
    this.init();
    this.stopBeat();
    if (!this.ctx) return;

    const baseFrequencies = [65.41, 82.41, 98.00, 110.00, 130.81, 164.81]; // C2, E2, G2, A2, C3, E3
    const tempo = 128; // 128 BPM Technoholix vibe
    const intervalMs = (60 / tempo / 2) * 1000; // 16th notes

    this.beatInterval = setInterval(() => {
      this.beatStep = (this.beatStep + 1) % 16;
      if (onStep) {
        onStep(this.beatStep);
      }

      if (this.muted || !this.ctx) return;

      try {
        const now = this.ctx.currentTime;

        // Kick on quarter beats: 0, 4, 8, 12
        if (this.beatStep % 4 === 0) {
          const kickOsc = this.ctx.createOscillator();
          const kickGain = this.ctx.createGain();
          kickOsc.frequency.setValueAtTime(150, now);
          kickOsc.frequency.exponentialRampToValueAtTime(35, now + 0.12);

          kickGain.gain.setValueAtTime(0.2, now);
          kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

          kickOsc.connect(kickGain);
          kickGain.connect(this.ctx.destination);

          kickOsc.start(now);
          kickOsc.stop(now + 0.15);
        }

        // Cyber synth lead arpeggio
        if (this.beatStep % 2 === 0) {
          const noteIndex = (this.beatStep / 2) % baseFrequencies.length;
          const leadOsc = this.ctx.createOscillator();
          const leadGain = this.ctx.createGain();

          leadOsc.type = 'sawtooth';
          leadOsc.frequency.setValueAtTime(baseFrequencies[noteIndex] * 4, now);

          leadGain.gain.setValueAtTime(0.04, now);
          leadGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

          leadOsc.connect(leadGain);
          leadGain.connect(this.ctx.destination);

          leadOsc.start(now);
          leadOsc.stop(now + 0.08);
        }
      } catch {}
    }, intervalMs);
  }

  stopBeat() {
    if (this.beatInterval) {
      clearInterval(this.beatInterval);
      this.beatInterval = null;
    }
  }
}

export const soundFX = new SoundFXController();

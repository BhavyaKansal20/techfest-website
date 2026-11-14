/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#020409',
          900: '#040915',
          850: '#070f23',
          800: '#0c1836',
          700: '#142754',
          cyan: '#00f0ff',
          neon: '#00ffc8',
          purple: '#b026ff',
          magenta: '#ff007f',
          gold: '#ffd23f',
          orange: '#ff6b35'
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2.5s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(0,240,255,0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(176,38,255,0.8))' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.5), 0 0 10px -5px rgba(0, 240, 255, 0.3)',
        'neon-purple': '0 0 25px -5px rgba(176, 38, 255, 0.5), 0 0 10px -5px rgba(176, 38, 255, 0.3)',
        'neon-magenta': '0 0 25px -5px rgba(255, 0, 127, 0.5)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
};

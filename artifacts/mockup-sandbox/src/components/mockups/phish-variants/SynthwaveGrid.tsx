import React, { useState, useEffect } from 'react';

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=Inter:wght@400;500;600&display=swap');

.font-orbitron { font-family: 'Orbitron', sans-serif; }
.font-tech { font-family: 'Share Tech Mono', monospace; }
.font-inter { font-family: 'Inter', sans-serif; }

.bg-synth-base { background-color: #0a0015; }
.bg-synth-card { background-color: #110022; }
.text-synth-lavender { color: #c8b8e8; }
.text-synth-magenta { color: #ff00cc; }
.text-synth-cyan { color: #00e5ff; }

.border-synth-magenta { border-color: #ff00cc; }
.border-synth-cyan { border-color: #00e5ff; }

.glow-text-magenta { text-shadow: 0 0 10px #ff00cc, 0 0 20px #ff00cc; }
.glow-text-cyan { text-shadow: 0 0 10px #00e5ff, 0 0 20px #00e5ff; }

.glow-box-magenta { box-shadow: 0 0 10px #ff00cc, inset 0 0 10px #ff00cc; }
.glow-box-cyan { box-shadow: 0 0 10px #00e5ff, inset 0 0 10px #00e5ff; }

.scanlines {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: repeating-linear-gradient(to bottom, transparent 0, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px);
  pointer-events: none;
  z-index: 9999;
}

.perspective-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.perspective-grid {
  position: absolute;
  bottom: -20vh;
  left: -50%;
  width: 200%;
  height: 80vh;
  transform: perspective(300px) rotateX(75deg);
  background-image: linear-gradient(to right, rgba(255, 0, 204, 0.4) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 0, 204, 0.4) 1px, transparent 1px);
  background-size: 50px 50px;
  transform-origin: bottom center;
  animation: grid-move 2s linear infinite;
}

.animated-gradient-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top center, rgba(119, 0, 255, 0.2) 0%, #0a0015 70%);
  z-index: -1;
}

.pulse-border-magenta {
  animation: border-pulse 2s infinite alternate;
  border-left-width: 4px;
  border-style: solid;
}
@keyframes border-pulse {
  0% { box-shadow: 0 0 5px #ff00cc, inset 0 0 5px rgba(255,0,204,0.1); border-color: rgba(255,0,204,0.5); }
  100% { box-shadow: 0 0 15px #ff00cc, inset 0 0 10px rgba(255,0,204,0.3); border-color: #ff00cc; }
}

.tactics-flipper {
  transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
  transform-style: preserve-3d;
}
.tactics-flipper.flipped {
  transform: rotateY(180deg);
}
.tactics-front, .tactics-back {
  backface-visibility: hidden;
}
.tactics-back {
  transform: rotateY(180deg);
}

.gradient-text {
  background: linear-gradient(to right, #ff00cc, #00e5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-border-magenta-cyan {
  position: relative;
  background-clip: padding-box;
  border: 1px solid transparent;
}
.gradient-border-magenta-cyan::before {
  content: "";
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -1;
  margin: -1px;
  border-radius: inherit;
  background: linear-gradient(45deg, #ff00cc, #00e5ff);
}

/* Nav */
.synth-nav {
  border-bottom: 2px solid #ff00cc;
  box-shadow: 0 2px 10px rgba(255, 0, 204, 0.5);
  background: rgba(10, 0, 21, 0.9);
  backdrop-filter: blur(8px);
}

/* Animations */
@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
.slide-in-right {
  animation: slide-in-right 0.3s ease-out forwards;
}

@keyframes grid-move {
  0% { background-position: 0 0; }
  100% { background-position: 0 50px; }
}
`;

const INTERCEPTS = [
  { id: 'sender', label: 'SPOOFED ORIGIN', severity: 'MEDIUM' },
  { id: 'urgency', label: 'ARTIFICIAL URGENCY', severity: 'HIGH' },
  { id: 'ext-link', label: 'EXTERNAL DOMAIN MISMATCH', severity: 'CRITICAL' }
];

const TACTICS = [
  { id: 1, title: 'CREDENTIAL HARVESTING', desc: 'Adversary uses a clone of a legitimate authentication portal to capture user credentials in transit.' },
  { id: 2, title: 'PAYLOAD DELIVERY', desc: 'Malicious attachments (often macros or executables disguised as documents) execute upon interaction.' },
  { id: 3, title: 'AUTHORITY SPOOFING', desc: 'Social engineering tactic leveraging executive or administrative personas to bypass standard verification.' },
  { id: 4, title: 'TYPOSQUATTING', desc: 'Registering domains visually identical to target organizations (e.g., rnicrosoft.com).' },
  { id: 5, title: 'MFA FATIGUE', desc: 'Repeatedly triggering multi-factor authentication requests until the user mistakenly approves one.' },
  { id: 6, title: 'TOKEN THEFT', desc: 'Extracting active session cookies or OAuth tokens to bypass authentication entirely.' }
];

const TABS = ["ROOT", "INSPECT", "DOMAINS", "TACTICS", "PROTOCOL", "INTEL", "QUIZ"];

export function SynthwaveGrid() {
  const [activeTab, setActiveTab] = useState('ROOT');
  const [foundIntercepts, setFoundIntercepts] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = STYLES;
    document.head.appendChild(styleEl);
    return () => { document.head.removeChild(styleEl); };
  }, []);

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
  };

  const findIntercept = (id: string) => {
    if (!foundIntercepts.includes(id)) {
      setFoundIntercepts(prev => [...prev, id]);
    }
  };

  return (
    <div className="min-h-screen bg-synth-base text-white relative overflow-x-hidden selection:bg-synth-magenta selection:text-white">
      <div className="scanlines"></div>
      
      {/* Sticky Nav */}
      <nav className="synth-nav sticky top-0 z-50 flex items-center justify-between px-6 py-4">
        <div className="font-orbitron font-bold text-xl text-white glow-text-magenta">SYS//CORE</div>
        <div className="hidden md:flex items-center gap-6">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-orbitron text-sm transition-all ${
                activeTab === tab 
                  ? 'text-synth-magenta border-b-2 border-synth-magenta glow-text-magenta' 
                  : 'text-synth-lavender hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="font-tech text-synth-cyan">V_07.4.2</div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-20 pb-32 z-10 px-6 text-center">
        <div className="animated-gradient-bg"></div>
        <div className="perspective-wrapper">
          <div className="perspective-grid"></div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
          <div className="font-orbitron text-synth-magenta tracking-widest text-sm mb-6 glow-text-magenta">
            SYNTHETIC THREAT TRAINING // MODULE 07
          </div>
          
          <h1 className="font-orbitron font-black text-6xl md:text-8xl leading-none mb-2 text-white" style={{ textShadow: '0 0 20px #ffffff, 0 0 40px #ff00cc' }}>
            BREACH
          </h1>
          <h2 className="font-orbitron font-bold text-5xl md:text-7xl leading-none mb-8 text-synth-magenta italic glow-text-magenta">
            PHISH_SHIELD
          </h2>
          
          <div className="inline-block px-6 py-2 border border-synth-cyan glow-box-cyan rounded-full mb-8">
            <span className="font-orbitron font-bold gradient-text tracking-widest">TACTICAL SIMULATION ACTIVE</span>
          </div>
          
          <p className="font-inter text-synth-lavender text-xl max-w-2xl mb-12">
            Every tactical anomaly indexed here is derived from confirmed adversary patterns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="font-orbitron font-bold px-8 py-4 bg-synth-magenta text-white rounded glow-box-magenta hover:bg-white hover:text-synth-magenta transition-all tracking-wider">
              LAUNCH MODULE →
            </button>
            <button className="font-orbitron font-bold px-8 py-4 bg-transparent border-2 border-synth-magenta text-synth-magenta rounded hover:bg-synth-magenta hover:text-white transition-all tracking-wider">
              SKIP TO QUIZ
            </button>
          </div>
        </div>
      </section>

      {/* Email Inspector Section */}
      <section className="relative z-20 px-6 py-24 bg-synth-base border-t border-[#330066]">
        <div className="max-w-6xl mx-auto">
          <div className="font-orbitron text-synth-magenta text-2xl mb-12 glow-text-magenta">
            [01] SIGNAL INTERCEPT ANALYSIS
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Holographic Panel */}
            <div className="flex-1 relative p-8 bg-synth-card gradient-border-magenta-cyan rounded-lg text-synth-lavender font-inter z-10 shadow-[0_0_30px_rgba(255,0,204,0.15)]">
              <div className="flex justify-between items-start mb-8 pb-6 border-b border-[#330066]">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-sm md:text-base">
                    <span className="font-tech text-synth-cyan min-w-[60px]">FROM:</span>
                    <span 
                      className={`text-white cursor-pointer transition-all border-b border-transparent hover:border-synth-magenta hover:text-synth-magenta ${foundIntercepts.includes('sender') ? 'text-synth-magenta border-synth-magenta' : ''}`} 
                      onClick={() => findIntercept('sender')}
                    >
                      security@microsoft-update-alert.com
                    </span>
                    {foundIntercepts.includes('sender') && <span className="text-synth-magenta text-xs glow-text-magenta animate-pulse ml-2">◆</span>}
                  </div>
                  <div className="flex items-center gap-2 text-sm md:text-base">
                    <span className="font-tech text-synth-cyan min-w-[60px]">TO:</span>
                    <span className="text-white">user@company.com</span>
                  </div>
                </div>
                <div className="font-tech text-synth-cyan text-xs md:text-sm bg-[#0a0015] px-3 py-1 rounded border border-synth-cyan">
                  TS: 14:02:44 UTC
                </div>
              </div>
              
              <h3 className="font-orbitron text-white text-xl md:text-2xl mb-6">REQUIRED ACTION: Verify Account Ownership</h3>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>We have detected unauthorized login attempts from IP Address: <span className="font-tech text-synth-magenta bg-[#2a0033] px-2 py-1 rounded">192.168.1.104</span>.</p>
                
                <p>
                  Your account will be{' '}
                  <span 
                    className={`font-bold cursor-pointer transition-all border-b border-transparent hover:border-synth-magenta hover:text-synth-magenta ${foundIntercepts.includes('urgency') ? 'text-synth-magenta border-synth-magenta' : 'text-white'}`} 
                    onClick={() => findIntercept('urgency')}
                  >
                    locked in 12 hours
                  </span>
                  {foundIntercepts.includes('urgency') && <span className="text-synth-magenta text-xs glow-text-magenta animate-pulse ml-2">◆</span>}
                  {' '}unless you verify your identity immediately.
                </p>
                
                <div className="pt-6 pb-6 text-center md:text-left">
                  <button 
                    onClick={(e) => { e.preventDefault(); findIntercept('ext-link'); }}
                    className="inline-flex items-center gap-3 bg-synth-magenta text-white font-orbitron font-bold py-4 px-8 rounded cursor-pointer glow-box-magenta hover:bg-[#ff33dd] transition-all"
                  >
                    INITIATE VERIFICATION SEQUENCE
                    {foundIntercepts.includes('ext-link') && <span className="text-white text-xs animate-pulse">◆</span>}
                  </button>
                </div>
                
                <p className="text-sm opacity-60 font-tech">Failure to comply will result in immediate suspension of network privileges.</p>
              </div>
            </div>

            {/* Intercept Log */}
            <div className="lg:w-96 flex flex-col">
              <div className="font-orbitron text-white text-lg mb-4 flex items-center justify-between">
                <span>INTERCEPT LOG</span>
                <span className="font-tech text-synth-cyan text-sm">{foundIntercepts.length} / 3 ANOMALIES</span>
              </div>
              
              <div className="flex-1 bg-synth-card border-l-2 border-synth-cyan rounded-r-lg p-6 space-y-4 shadow-[inset_0_0_20px_rgba(0,229,255,0.05)]">
                {foundIntercepts.length === 0 ? (
                  <div className="h-full flex items-center justify-center flex-col text-synth-lavender opacity-50 space-y-4 py-12">
                    <div className="w-12 h-12 border-2 border-dashed border-synth-cyan rounded-full animate-[spin_4s_linear_infinite]"></div>
                    <span className="font-tech">SCANNING FOR ANOMALIES...</span>
                    <span className="text-sm text-center">Click on suspicious elements in the panel to log them.</span>
                  </div>
                ) : (
                  INTERCEPTS.filter(i => foundIntercepts.includes(i.id)).map(intercept => (
                    <div key={intercept.id} className="slide-in-right bg-[#0a0015] border border-[#330066] p-4 rounded relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-synth-magenta glow-box-magenta"></div>
                      <div className="flex justify-between items-start mb-2 pl-2">
                        <span className="font-tech text-xs px-2 py-1 bg-[#2a0033] text-synth-magenta rounded font-bold">
                          {intercept.severity}
                        </span>
                        <span className="font-tech text-[#330066] text-xs">LOGGED</span>
                      </div>
                      <div className="font-orbitron text-white text-sm pl-2">
                        {intercept.label}
                      </div>
                    </div>
                  ))
                )}
                {foundIntercepts.length === 3 && (
                  <div className="slide-in-right mt-6 p-4 bg-[rgba(0,229,255,0.1)] border border-synth-cyan rounded text-center">
                    <span className="font-orbitron text-synth-cyan glow-text-cyan text-sm">ALL ANOMALIES LOGGED</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tactics Grid */}
      <section className="relative z-20 px-6 py-24 bg-[#0a0015]">
        <div className="max-w-6xl mx-auto">
          <div className="font-orbitron text-synth-cyan text-2xl mb-12 glow-text-cyan">
            [02] ADVERSARY STRATAGEM MATRIX
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TACTICS.map(tactic => {
              const isFlipped = flippedCards.includes(tactic.id);
              return (
                <div key={tactic.id} className="h-64 cursor-pointer" style={{ perspective: '1000px' }} onClick={() => toggleFlip(tactic.id)}>
                  <div className={`tactics-flipper w-full h-full relative ${isFlipped ? 'flipped' : ''}`}>
                    {/* Front */}
                    <div className="tactics-front absolute inset-0 bg-synth-card pulse-border-magenta p-6 flex flex-col justify-between rounded-r-lg group hover:bg-[#1a0033] transition-colors">
                      <h4 className="font-orbitron text-white text-xl group-hover:glow-text-magenta transition-all">{tactic.title}</h4>
                      <div className="font-tech text-synth-lavender text-sm flex items-center justify-between opacity-70">
                        <span>[ID_{tactic.id.toString().padStart(3, '0')}]</span>
                        <span className="group-hover:text-synth-magenta transition-colors">FLIP →</span>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="tactics-back absolute inset-0 bg-[#1a0033] border-l-4 border-synth-cyan glow-box-cyan p-6 flex flex-col rounded-r-lg">
                      <h4 className="font-orbitron text-synth-cyan text-lg mb-4 border-b border-[#330066] pb-2">{tactic.title} // DECRYPTED</h4>
                      <p className="font-inter text-synth-lavender leading-relaxed">{tactic.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-20 py-8 border-t border-[#330066] text-center bg-[#05000a]">
        <div className="font-tech text-synth-lavender text-sm opacity-50">
          SYS//CORE SIMULATION END // {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

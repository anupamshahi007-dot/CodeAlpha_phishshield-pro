import React, { useState, useEffect, useRef } from 'react';
import { Shield, Mail, Terminal, AlertTriangle, Clock, Handshake, Users, ArrowRight, Check } from 'lucide-react';

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops: number[] = [];
    for(let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // stagger initial drops
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px "Share Tech Mono", monospace';
      
      for(let i = 0; i < drops.length; i++) {
        if (drops[i] > 0) {
          const text = letters.charAt(Math.floor(Math.random() * letters.length));
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        }
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      .matrix-rain-root {
        font-family: 'Share Tech Mono', monospace;
        background-color: transparent;
        color: #00ff41;
      }
      .glitch {
        animation: glitch-anim 2s linear infinite;
        position: relative;
      }
      @keyframes glitch-anim {
        0%, 100% { text-shadow: 0 0 10px #00ff41; transform: translate(0, 0); }
        2%, 64% { transform: translate(2px, 0); text-shadow: 2px 0 #00ff41; }
        4%, 60% { transform: translate(-2px, 0); text-shadow: 0 0 15px #00ff41; }
        62% { transform: translate(0, 0) skew(5deg); text-shadow: 2px 0 #00ff41, -2px 0 #ff0000; }
        80% { transform: translate(0, 0); text-shadow: 0 0 10px #00ff41; }
        82% { transform: translate(-1px, 2px); }
        84% { transform: translate(0, 0); }
      }
      .tactic-card {
        perspective: 1000px;
        min-height: 200px;
      }
      .tactic-inner {
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        transform-style: preserve-3d;
        width: 100%;
        height: 100%;
        position: relative;
      }
      .tactic-card:hover .tactic-inner {
        transform: rotateY(180deg);
      }
      .tactic-front, .tactic-back {
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .tactic-back {
        transform: rotateY(180deg);
      }
      .log-entry {
        animation: slide-in 0.3s ease-out forwards;
      }
      @keyframes slide-in {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  const fullText = "Every tactical anomaly indexed here is derived from confirmed adversary patterns.";
  const [subtitle, setSubtitle] = useState("");
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setSubtitle(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 40);
    return () => clearInterval(intervalId);
  }, []);

  const [activeTab, setActiveTab] = useState("// ROOT");
  const navItems = ["// ROOT", "// INSPECT_MSG", "// DOMAIN_RECON", "// TACTICS", "// PROTOCOL", "// INTEL", "// ASSESS"];

  const anomalies = [
    { id: 1, name: "SPOOFED_SENDER", desc: "Domain mismatch detected: support@paypaI.com" },
    { id: 2, name: "URGENCY_TRIGGER", desc: "Artificial time constraint: 'Account suspended in 24 hours'" },
    { id: 3, name: "MALICIOUS_LINK", desc: "Embedded URL routes to blacklisted IP subnet" },
    { id: 4, name: "GENERIC_GREETING", desc: "Missing personalization: 'Dear Valued Customer'" },
    { id: 5, name: "SUSPICIOUS_ATTACH", desc: "Unexpected payload: Invoice_Details.pdf.exe" },
  ];
  
  const [foundAnomalies, setFoundAnomalies] = useState<number[]>([]);
  const [logs, setLogs] = useState<{time: string, text: string, desc: string}[]>([]);
  
  const toggleAnomaly = (id: number) => {
    if (!foundAnomalies.includes(id)) {
      setFoundAnomalies([...foundAnomalies, id]);
      const anomaly = anomalies.find(a => a.id === id);
      const now = new Date();
      const timeStr = `[${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}]`;
      setLogs(prev => [...prev, { 
        time: timeStr, 
        text: `ANOMALY [${id}] DETECTED: ${anomaly?.name}`,
        desc: anomaly?.desc || ''
      }]);
    }
  };

  const tactics = [
    { id: 1, name: "PRETEXTING", icon: <Users size={24} />, desc: "Fabricating a scenario to compel the victim into divulging information or performing an action." },
    { id: 2, name: "AUTHORITY CLOAKING", icon: <Shield size={24} />, desc: "Impersonating an executive or IT admin to bypass rational skepticism via power dynamics." },
    { id: 3, name: "TEMPORAL MANIPULATION", icon: <Clock size={24} />, desc: "Inducing panic by imposing artificial deadlines, reducing the target's cognitive processing time." },
    { id: 4, name: "BAITING MECHANICS", icon: <AlertTriangle size={24} />, desc: "Offering a false promise or reward (e.g., infected USB drives, gift cards) to trigger an engagement." },
    { id: 5, name: "QUID PRO QUO", icon: <Handshake size={24} />, desc: "Offering a simulated service or benefit in exchange for access or credentials." },
    { id: 6, name: "PROXIMITY TAILGATING", icon: <Terminal size={24} />, desc: "Exploiting physical or logical proximity to follow an authorized user into a restricted zone." },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden matrix-rain-root">
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-0 opacity-15 pointer-events-none"
      />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Sticky Nav */}
        <nav className="sticky top-0 z-50 bg-black/90 border-b border-[#003b00] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto hide-scrollbar">
            <div className="flex items-center h-14 gap-8 whitespace-nowrap">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`text-sm font-bold tracking-widest transition-colors duration-300 relative py-4 ${
                    activeTab === item ? 'text-[#00ff41]' : 'text-[#003b00] hover:text-[#00ff41]/60'
                  }`}
                >
                  {item}
                  {activeTab === item && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00ff41] shadow-[0_0_8px_#00ff41]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full space-y-32">
          
          {/* Hero Section */}
          <section className="pt-16 pb-12 flex flex-col items-start gap-6 border-l-2 border-[#003b00] pl-8">
            <div className="text-[#00ff41]/80 text-sm tracking-widest font-bold">
              SYS_RECORD // FILE_07-PH
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-tight text-white">
              <span className="text-[#00ff41]/60">Breach Prevent: </span><br/>
              <span className="text-[#00ff41] glitch inline-block mt-2">PHISH_SHIELD</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white max-w-2xl h-14">
              <span className="text-[#00ff41] mr-2">&gt;</span>
              {subtitle}
              <span className="animate-pulse ml-1 inline-block w-3 h-5 bg-[#00ff41] translate-y-1"></span>
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-[#00ff41] text-black px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2 group">
                INITIALIZE ANALYSIS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-[#003b00] text-[#00ff41] px-8 py-4 font-bold tracking-wider hover:border-[#00ff41] hover:bg-[#00ff41]/10 transition-colors duration-300">
                BYPASS TO ASSESSMENT
              </button>
            </div>
          </section>

          {/* Email Inspector Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-widest border-b border-[#003b00] pb-2 inline-block">
              [01] VECTOR INVESTIGATION
            </h2>
            <div className="text-[#00ff41]/70 mb-8">
              &gt; SYSTEM PROMPT: Identify anomalies in the intercepted transmission. Click highlighted sectors to log evidence. ({foundAnomalies.length}/5 found)
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Terminal Window (Left) */}
              <div className="lg:col-span-2 border border-[#003b00] bg-black/80 rounded-sm relative overflow-hidden group">
                {/* Terminal Header */}
                <div className="bg-[#001a00] border-b border-[#003b00] px-4 py-2 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-900"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-900"></div>
                    <div className="w-3 h-3 rounded-full bg-green-900"></div>
                  </div>
                  <div className="text-xs text-[#00ff41]/50 tracking-widest">root@target-sys:~</div>
                </div>

                {/* Email Content */}
                <div className="p-6 font-mono text-sm space-y-4">
                  <div className="text-[#00ff41]/60">
                    <span className="text-white">FROM:</span> Support Dept 
                    <button 
                      onClick={() => toggleAnomaly(1)}
                      className={`ml-2 inline-flex items-center gap-1 px-2 py-0.5 border ${foundAnomalies.includes(1) ? 'border-[#00ff41] bg-[#00ff41]/20 text-[#00ff41]' : 'border-[#003b00] text-white hover:border-[#00ff41]/50 cursor-pointer'}`}
                    >
                      &lt;support@paypaI.com&gt;
                      {foundAnomalies.includes(1) && <Check size={14} />}
                    </button>
                  </div>
                  
                  <div className="text-[#00ff41]/60">
                    <span className="text-white">TO:</span> victim@company.com
                  </div>

                  <div className="text-[#00ff41]/60 border-b border-[#003b00] pb-4">
                    <span className="text-white">SUBJECT:</span> 
                    <button 
                      onClick={() => toggleAnomaly(2)}
                      className={`ml-2 inline-flex items-center gap-1 px-2 py-0.5 border ${foundAnomalies.includes(2) ? 'border-[#00ff41] bg-[#00ff41]/20 text-[#00ff41]' : 'border-[#003b00] text-white hover:border-[#00ff41]/50 cursor-pointer'}`}
                    >
                      ACTION REQUIRED: Account suspended in 24 hours
                      {foundAnomalies.includes(2) && <Check size={14} />}
                    </button>
                  </div>

                  <div className="space-y-6 pt-4 text-white leading-relaxed">
                    <p>
                      <button 
                        onClick={() => toggleAnomaly(4)}
                        className={`inline-flex items-center gap-1 px-2 py-0.5 border ${foundAnomalies.includes(4) ? 'border-[#00ff41] bg-[#00ff41]/20 text-[#00ff41]' : 'border-[#003b00] hover:border-[#00ff41]/50 cursor-pointer'}`}
                      >
                        Dear Valued Customer,
                        {foundAnomalies.includes(4) && <Check size={14} />}
                      </button>
                    </p>

                    <p>
                      We have detected unusual activity on your account. To prevent permanent suspension, you must verify your identity immediately.
                    </p>

                    <p>
                      Please click the link below to access the secure verification portal:
                    </p>

                    <div className="pl-4 border-l-2 border-[#003b00]">
                      <button 
                        onClick={() => toggleAnomaly(3)}
                        className={`inline-flex items-center gap-1 px-2 py-0.5 border break-all ${foundAnomalies.includes(3) ? 'border-[#00ff41] bg-[#00ff41]/20 text-[#00ff41]' : 'border-[#003b00] text-[#00ff41] hover:border-[#00ff41]/50 cursor-pointer underline'}`}
                      >
                        http://secure-verify-update-account.192-168-1-x.com/login
                        {foundAnomalies.includes(3) && <Check size={14} />}
                      </button>
                    </div>

                    <p>
                      Failure to complete this within 24 hours will result in data deletion.
                    </p>

                    <p>
                      ATTACHMENT: 
                      <button 
                        onClick={() => toggleAnomaly(5)}
                        className={`ml-2 inline-flex items-center gap-1 px-2 py-0.5 border ${foundAnomalies.includes(5) ? 'border-[#00ff41] bg-[#00ff41]/20 text-[#00ff41]' : 'border-[#003b00] text-[#00ff41]/80 hover:border-[#00ff41]/50 cursor-pointer'}`}
                      >
                        Invoice_Details.pdf.exe [4.2MB]
                        {foundAnomalies.includes(5) && <Check size={14} />}
                      </button>
                    </p>

                    <p className="mt-8">
                      Regards,<br/>
                      Security Team
                    </p>
                  </div>
                  
                  <div className="mt-8 text-[#00ff41]/50 animate-pulse">
                    root@target-sys:~# _
                  </div>
                </div>
              </div>

              {/* Telemetry Log Panel (Right) */}
              <div className="border border-[#003b00] bg-black/80 rounded-sm flex flex-col h-[500px]">
                <div className="bg-[#001a00] border-b border-[#003b00] px-4 py-2 flex items-center justify-between">
                  <div className="text-sm tracking-widest text-[#00ff41]">TELEMETRY LOG</div>
                  <Terminal size={16} className="text-[#00ff41]/50" />
                </div>
                
                <div className="p-4 flex-1 overflow-y-auto font-mono text-sm space-y-4">
                  {logs.length === 0 ? (
                    <div className="text-[#00ff41]/30 italic text-center mt-10">
                      Awaiting anomaly detection...
                    </div>
                  ) : (
                    logs.map((log, idx) => (
                      <div key={idx} className="log-entry border-l-2 border-[#00ff41] pl-3 py-1 space-y-1 bg-[#00ff41]/5">
                        <div className="text-[#00ff41]/60 text-xs">{log.time}</div>
                        <div className="text-white font-bold">{log.text}</div>
                        <div className="text-[#00ff41]/80 text-xs">{log.desc}</div>
                      </div>
                    ))
                  )}
                  {foundAnomalies.length === 5 && (
                    <div className="mt-6 border border-[#00ff41] p-3 text-center bg-[#00ff41]/10 animate-pulse">
                      <div className="font-bold text-white mb-1">ALL ANOMALIES LOGGED</div>
                      <div className="text-[#00ff41] text-xs">VECTOR INVESTIGATION COMPLETE</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Social Tactics Grid */}
          <section className="space-y-6 pb-24">
            <h2 className="text-2xl font-bold tracking-widest border-b border-[#003b00] pb-2 inline-block">
              [02] SOC_STRATAGEMS
            </h2>
            <div className="text-[#00ff41]/70 mb-8">
              &gt; SYSTEM PROMPT: Review documented adversarial techniques. Hover cards to decrypt payload.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tactics.map((tactic) => (
                <div key={tactic.id} className="tactic-card group cursor-crosshair">
                  <div className="tactic-inner border border-[#003b00]">
                    {/* Front Face */}
                    <div className="tactic-front bg-black p-6 flex flex-col justify-between border-l-4 border-[#00ff41]">
                      <div className="text-[#00ff41]/40">
                        {tactic.icon}
                      </div>
                      <div>
                        <div className="text-[#00ff41]/50 text-xs mb-2">ID: T-{1000 + tactic.id}</div>
                        <h3 className="text-xl font-bold text-white tracking-wider">{tactic.name}</h3>
                      </div>
                      <div className="text-xs text-[#00ff41]/50 text-right uppercase tracking-widest mt-4 group-hover:text-[#00ff41] transition-colors">
                        [ Decrypt ]
                      </div>
                    </div>
                    
                    {/* Back Face */}
                    <div className="tactic-back bg-[#001a00] p-6 flex flex-col border-l-4 border-[#003b00]">
                      <h3 className="text-[#00ff41] font-bold text-sm mb-4 tracking-widest border-b border-[#003b00] pb-2">
                        // {tactic.name}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed flex-1">
                        {tactic.desc}
                      </p>
                      <div className="text-xs text-[#00ff41]/40 mt-4 font-mono">
                        STATUS: ANALYZED
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

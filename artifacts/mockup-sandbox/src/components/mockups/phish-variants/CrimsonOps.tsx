import React, { useState, useEffect } from 'react';

export function CrimsonOps() {
  const [foundAnomalies, setFoundAnomalies] = useState<number[]>([]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const anomalies = [
    { id: 1, text: "Sender Domain Discrepancy (support@paypal-security.com)" },
    { id: 2, text: "Urgency Indicator (Account locked within 24 hours)" },
    { id: 3, text: "Generic Greeting (Dear Valued Customer)" },
    { id: 4, text: "Suspicious Link Payload (http://paypal.update-billing102.com)" },
    { id: 5, text: "Unusual Request (Provide social security number)" }
  ];

  const tactics = [
    { title: "PRETEXTING", desc: "Fabricating a scenario to compel the target to divulge sensitive information. Often involves complex backstory creation." },
    { title: "AUTHORITY CLOAKING", desc: "Impersonating a person in a position of power (CEO, IT Admin, Law Enforcement) to bypass critical thinking." },
    { title: "TEMPORAL MANIPULATION", desc: "Engineering an artificial sense of urgency to force immediate action without verification protocols." },
    { title: "BAITING MECHANICS", desc: "Offering something enticing—physical or digital—to induce the target to compromise their own security." },
    { title: "QUID PRO QUO", desc: "Promising a benefit in exchange for information. Commonly disguised as a required service or technical support." },
    { title: "PROXIMITY TAILGATING", desc: "Exploiting physical or digital proximity to gain unauthorized access by riding on a legitimate user's credentials." }
  ];

  const handleSpotClick = (id: number) => {
    if (!foundAnomalies.includes(id)) {
      setFoundAnomalies([...foundAnomalies, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#e8e0d0] selection:bg-[#cc0022] selection:text-[#080808] flex flex-col font-courier overflow-x-hidden">
      <style>{`
        .font-courier { font-family: 'Courier Prime', Courier, monospace; }
        .font-georgia { font-family: Georgia, serif; }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s infinite; }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in { animation: slide-in 0.4s ease-out forwards; }
        .bg-diagonal-lines {
          background-image: repeating-linear-gradient(45deg, rgba(204, 0, 34, 0.03) 0px, rgba(204, 0, 34, 0.03) 2px, transparent 2px, transparent 10px);
        }
        .bg-classified-grid {
          background-image: 
            linear-gradient(rgba(204, 0, 34, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204, 0, 34, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .tactic-desc {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .group:hover .tactic-desc {
          max-height: 150px;
          opacity: 1;
        }
        .border-stripe {
          position: relative;
        }
        .border-stripe::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 6px;
          background: repeating-linear-gradient(
            45deg,
            #cc0022,
            #cc0022 10px,
            transparent 10px,
            transparent 20px
          );
          z-index: 10;
        }
      `}</style>

      {/* Top Nav */}
      <nav className="bg-[#080808] border-b border-[#cc0022] py-3 px-6 flex justify-between items-center sticky top-0 z-50 shadow-[0_4px_20px_rgba(204,0,34,0.1)]">
        <div className="flex space-x-6 overflow-x-auto no-scrollbar font-bold">
          {['FILE_ROOT', 'MSG_INSPECT', 'DOMAIN_SCAN', 'SOCIAL_VEC', 'MITIGATION', 'INCIDENT', 'ASSESSMENT'].map((tab, i) => (
            <button key={tab} className={`whitespace-nowrap pb-1 transition-colors ${i === 1 ? 'text-[#cc0022] border-b-2 border-[#cc0022]' : 'text-[#e8e0d0]/50 hover:text-[#e8e0d0]'}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 text-[#c8960c] shrink-0 ml-4">
          <span className="w-2.5 h-2.5 bg-[#c8960c] rounded-full animate-blink shadow-[0_0_8px_#c8960c]"></span>
          <span className="text-xs font-bold tracking-widest hidden sm:inline">THREAT ACTIVE</span>
        </div>
      </nav>

      <main className="flex-1 p-6 space-y-16 max-w-6xl mx-auto w-full pb-20">
        
        {/* Hero Section */}
        <section className="border border-[#333] bg-[#111111]/80 p-8 md:p-12 relative overflow-hidden bg-diagonal-lines shadow-2xl">
          <div className="absolute inset-0 bg-classified-grid opacity-30 pointer-events-none"></div>
          
          <div className="border-b border-[#cc0022]/50 pb-3 mb-10 flex flex-col sm:flex-row sm:justify-between sm:items-center relative z-10 gap-2">
            <span className="text-[#cc0022] text-sm tracking-widest font-bold">[CLASSIFIED] CYBER THREAT INTEL REPORT</span>
            <span className="text-[#e8e0d0]/50 text-sm">DOC-REF: PH-07-2024</span>
          </div>

          <div className="relative z-10">
            {/* Stamp */}
            <div className="absolute -top-6 right-0 md:right-10 transform rotate-[12deg] border-4 border-[#cc0022]/60 border-dashed px-6 py-2 text-[#cc0022]/60 font-bold text-3xl md:text-5xl tracking-[0.3em] pointer-events-none select-none z-20 mix-blend-screen opacity-80 shadow-[0_0_15px_rgba(204,0,34,0.2)]">
              TOP SECRET
            </div>

            <h1 className="font-bold text-5xl md:text-7xl text-[#e8e0d0] tracking-tight mb-8 uppercase leading-none">
              Operation <br/><span className="text-[#cc0022]">Phish_Shield</span>
            </h1>
            
            <p className="font-georgia text-xl md:text-2xl text-[#e8e0d0]/80 max-w-3xl leading-relaxed mb-12">
              Every <span className="bg-[#080808] text-[#080808] select-none px-2 rounded-sm inline-block transform -skew-x-6">malicious</span> anomaly indexed here is derived from <span className="bg-[#080808] text-[#080808] select-none px-2 rounded-sm inline-block transform -skew-x-6">state-sponsored</span> adversary patterns. Map the vectors and finalize the <span className="bg-[#080808] text-[#080808] select-none px-2 rounded-sm inline-block transform -skew-x-6">defense</span> sequence.
            </p>

            <div className="flex flex-wrap gap-6 font-bold tracking-widest">
              <button className="bg-[#cc0022] hover:bg-[#a3001b] text-[#080808] px-8 py-4 transition-colors flex items-center gap-3 uppercase shadow-[0_0_20px_rgba(204,0,34,0.3)]">
                INITIALIZE BRIEFING <span className="text-xl">→</span>
              </button>
              <button className="border-2 border-[#cc0022] text-[#cc0022] hover:bg-[#cc0022]/10 px-8 py-4 transition-colors uppercase">
                JUMP TO ASSESSMENT
              </button>
            </div>
          </div>
        </section>

        {/* Email Inspector Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-4 border-b border-[#333] pb-3">
            <span className="bg-[#cc0022] w-3 h-3 block shadow-[0_0_8px_#cc0022]"></span>
            <h2 className="font-bold text-2xl tracking-widest text-[#e8e0d0] uppercase">
              <span className="text-[#cc0022] mr-2">[INTEL-01]</span>
              THREAT PAYLOAD ANALYSIS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left side: Email Document */}
            <div className="lg:col-span-2 bg-[#e8e0d0] text-[#111111] p-8 relative font-georgia shadow-[0_0_30px_rgba(0,0,0,0.8)] border-stripe">
              <div className="border-b-2 border-[#cc0022] pb-3 mb-6 flex justify-between items-center mt-2">
                <span className="font-courier text-[#cc0022] font-bold tracking-widest text-sm md:text-base">INTERCEPTED COMMUNICATION — DECLASSIFIED</span>
                <span className="font-courier text-xs text-[#111111]/50 font-bold hidden sm:inline">DOC_ID: INT-8922</span>
              </div>
              
              <div className="font-courier text-sm mb-8 pb-6 border-b border-[#111111]/20 leading-loose">
                <p>
                  <span className="text-[#111111]/50 font-bold w-20 inline-block">FROM:</span>
                  PayPal Security &lt;
                  <span className="relative inline-block cursor-pointer group" onClick={() => handleSpotClick(1)}>
                    <span className={`px-1 transition-colors ${foundAnomalies.includes(1) ? 'bg-[#cc0022]/20' : 'group-hover:bg-[#111111]/10'}`}>support@paypal-security.com</span>
                    <span className={`absolute -right-4 -top-2 w-5 h-5 rounded-full font-courier text-[10px] font-bold flex items-center justify-center border transition-all ${foundAnomalies.includes(1) ? 'bg-[#111111] text-[#e8e0d0] border-[#111111]' : 'bg-[#cc0022] text-[#e8e0d0] border-[#e8e0d0] animate-pulse group-hover:scale-110 shadow-[0_0_8px_rgba(204,0,34,0.6)]'}`}>
                      {foundAnomalies.includes(1) ? '✓' : '1'}
                    </span>
                  </span>
                  &gt;
                </p>
                <p><span className="text-[#111111]/50 font-bold w-20 inline-block">TO:</span> user@company.com</p>
                <p><span className="text-[#111111]/50 font-bold w-20 inline-block">DATE:</span> 2024-10-24 14:03:11 UTC</p>
                <p><span className="text-[#111111]/50 font-bold w-20 inline-block">SUBJECT:</span> URGENT: Account Locked Due To Suspicious Activity</p>
              </div>
              
              <div className="space-y-6 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="relative inline-block cursor-pointer group" onClick={() => handleSpotClick(3)}>
                    <span className={`px-1 transition-colors ${foundAnomalies.includes(3) ? 'bg-[#cc0022]/20' : 'group-hover:bg-[#111111]/10'}`}>Dear Valued Customer,</span>
                    <span className={`absolute -right-3 -top-3 w-5 h-5 rounded-full font-courier text-[10px] font-bold flex items-center justify-center border transition-all ${foundAnomalies.includes(3) ? 'bg-[#111111] text-[#e8e0d0] border-[#111111]' : 'bg-[#cc0022] text-[#e8e0d0] border-[#e8e0d0] animate-pulse group-hover:scale-110 shadow-[0_0_8px_rgba(204,0,34,0.6)]'}`}>
                      {foundAnomalies.includes(3) ? '✓' : '3'}
                    </span>
                  </span>
                </p>

                <p>
                  We detected an unauthorized login attempt from a foreign IP address on your account. For your protection, your account has been temporarily restricted.
                </p>

                <p>
                  <span className="relative inline-block cursor-pointer group" onClick={() => handleSpotClick(2)}>
                    <span className={`px-1 transition-colors ${foundAnomalies.includes(2) ? 'bg-[#cc0022]/20' : 'group-hover:bg-[#111111]/10'}`}>You must verify your identity within 24 hours</span>
                    <span className={`absolute -right-3 -top-3 w-5 h-5 rounded-full font-courier text-[10px] font-bold flex items-center justify-center border transition-all ${foundAnomalies.includes(2) ? 'bg-[#111111] text-[#e8e0d0] border-[#111111]' : 'bg-[#cc0022] text-[#e8e0d0] border-[#e8e0d0] animate-pulse group-hover:scale-110 shadow-[0_0_8px_rgba(204,0,34,0.6)]'}`}>
                      {foundAnomalies.includes(2) ? '✓' : '2'}
                    </span>
                  </span>
                  {' '}or your account will be permanently suspended.
                </p>

                <p>Please click the secure link below to restore your access:</p>

                <p className="text-blue-900 underline break-all font-bold">
                  <span className="relative inline-block cursor-pointer group" onClick={() => handleSpotClick(4)}>
                    <span className={`px-1 transition-colors ${foundAnomalies.includes(4) ? 'bg-[#cc0022]/20' : 'group-hover:bg-blue-900/10'}`}>http://paypal.update-billing102.com/verify</span>
                    <span className={`absolute -right-4 -top-3 w-5 h-5 rounded-full font-courier text-[10px] font-bold flex items-center justify-center border transition-all ${foundAnomalies.includes(4) ? 'bg-[#111111] text-[#e8e0d0] border-[#111111]' : 'bg-[#cc0022] text-[#e8e0d0] border-[#e8e0d0] animate-pulse group-hover:scale-110 shadow-[0_0_8px_rgba(204,0,34,0.6)]'}`}>
                      {foundAnomalies.includes(4) ? '✓' : '4'}
                    </span>
                  </span>
                </p>

                <p>
                  For additional verification, please reply to this email with your{' '}
                  <span className="relative inline-block cursor-pointer group" onClick={() => handleSpotClick(5)}>
                    <span className={`px-1 transition-colors ${foundAnomalies.includes(5) ? 'bg-[#cc0022]/20' : 'group-hover:bg-[#111111]/10'}`}>full Social Security Number</span>
                    <span className={`absolute -right-3 -top-3 w-5 h-5 rounded-full font-courier text-[10px] font-bold flex items-center justify-center border transition-all ${foundAnomalies.includes(5) ? 'bg-[#111111] text-[#e8e0d0] border-[#111111]' : 'bg-[#cc0022] text-[#e8e0d0] border-[#e8e0d0] animate-pulse group-hover:scale-110 shadow-[0_0_8px_rgba(204,0,34,0.6)]'}`}>
                      {foundAnomalies.includes(5) ? '✓' : '5'}
                    </span>
                  </span>
                  {' '}and date of birth.
                </p>

                <p className="pt-4">
                  Thank you,<br/>
                  PayPal Security Team
                </p>
              </div>
            </div>

            {/* Right side: Intel Log */}
            <div className="bg-[#111111] border border-[#333] border-l-4 border-l-[#cc0022] flex flex-col font-courier relative min-h-[400px] lg:h-full shadow-xl">
              <div className="bg-[#cc0022] text-[#080808] px-5 py-3 font-bold tracking-widest text-sm flex justify-between items-center shadow-[0_4px_15px_rgba(204,0,34,0.2)]">
                <span>INTEL LOG</span>
                <span className="text-[10px] bg-[#080808] text-[#cc0022] px-2 py-1 rounded-sm">{foundAnomalies.length}/5 IDENTIFIED</span>
              </div>
              
              <div className="p-5 flex-1 overflow-y-auto space-y-4">
                {foundAnomalies.length === 0 ? (
                  <div className="text-[#e8e0d0]/30 text-sm italic text-center mt-10">
                    Awaiting anomaly detection...
                    <br/><br/>
                    <span className="text-xs not-italic">Click highlighted markers in the document to index threats.</span>
                  </div>
                ) : (
                  foundAnomalies.map(id => {
                    const a = anomalies.find(x => x.id === id);
                    if (!a) return null;
                    return (
                      <div key={a.id} className="p-4 bg-[#0a0a0a] border border-[#333] border-l-2 border-l-[#cc0022] animate-slide-in shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-8 h-8 bg-[#cc0022]/10 rotate-45 transform translate-x-4 -translate-y-4"></div>
                        <div className="text-xs font-bold tracking-wider text-[#cc0022] mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#cc0022] rounded-full inline-block"></span>
                          REC-00{a.id}
                        </div>
                        <div className="text-sm text-[#e8e0d0] font-georgia leading-relaxed">{a.text}</div>
                      </div>
                    )
                  })
                )}
              </div>
            </div>

          </div>
        </section>

        {/* Threat Tactics Grid */}
        <section className="space-y-8 pt-8 border-t border-[#333]">
          <div className="flex items-center gap-4 border-b border-[#333] pb-3">
            <span className="bg-[#cc0022] w-3 h-3 block shadow-[0_0_8px_#cc0022]"></span>
            <h2 className="font-bold text-2xl tracking-widest text-[#e8e0d0] uppercase">
              <span className="text-[#cc0022] mr-2">[INTEL-02]</span>
              ADVERSARY TACTICS PROFILE
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tactics.map((tactic, i) => (
              <div key={i} className="relative overflow-hidden bg-[#e8e0d0] text-[#080808] border-t-8 border-[#cc0022] group flex flex-col p-6 min-h-[220px] shadow-[inset_0_0_40px_rgba(0,0,0,0.1),0_10px_30px_rgba(0,0,0,0.5)] cursor-crosshair transition-transform hover:-translate-y-1">
                <div className="absolute top-3 right-3 text-[10px] text-[#cc0022] font-courier font-bold opacity-70 border-2 border-[#cc0022] px-2 py-0.5 transform rotate-6 tracking-wider">CLASSIFIED</div>
                
                <h3 className="font-bold text-xl mb-1 uppercase tracking-widest z-10 pr-20">{tactic.title}</h3>
                <div className="text-xs font-bold text-[#080808]/40 mb-4 z-10 tracking-widest">TCT-00{i+1}</div>
                
                <div className="mt-auto relative z-10 tactic-desc text-[#080808]/90">
                  <div className="pt-4 border-t-2 border-[#080808]/10 font-georgia text-[15px] leading-relaxed">
                    {tactic.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      
      <footer className="border-t border-[#cc0022]/30 p-8 text-center text-[#e8e0d0]/40 text-sm tracking-widest bg-[#0a0a0a]">
        <p>END OF REPORT // INTEL-DIR-09 // AUTHORIZED EYES ONLY</p>
        <p className="mt-2 text-[10px] text-[#cc0022]/50">CONFIDENTIAL // SECURE-OPS-PROTOCOL // NOFORN</p>
      </footer>
    </div>
  );
}

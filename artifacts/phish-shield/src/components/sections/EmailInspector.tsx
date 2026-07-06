import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EVIDENCE = [
  { id: 1, title: 'Domain Discrepancy', desc: '"corp-secure-support.com" originates from external rogue subnets, not administrative root registries.' },
  { id: 2, title: 'Artificial Clock Intercept', desc: 'A condensed operational timeline ("2 hours") forces immediate processing routines, bypassing logic nodes.' },
  { id: 3, title: 'Masked Redirect Payload', desc: '"Verify identity" lacks clean tracking flags. Execution targets unvetted off-grid destinations.' },
  { id: 4, title: 'Coercion Routine Detected', desc: 'Threat matrices targeting storage integrity are explicitly tuned to evoke anxiety, breaking security discipline.' },
  { id: 5, title: 'Compromised Payload Matrix', desc: 'Dual-extension array (".html.zip") mimics voice data stream to deploy script executors.' }
];

export function EmailInspector() {
  const [found, setFound] = useState<number[]>([]);

  const toggleHotspot = (id: number) => {
    if (!found.includes(id)) {
      setFound([...found, id]);
    }
  };

  return (
    <section id="inspect" className="min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col gap-12 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <h2 className="font-orbitron text-3xl md:text-4xl text-white mb-4">
          <span className="text-text-muted mr-3">[01]</span>VECTOR INVESTIGATION
        </h2>
        <p className="text-text-main max-w-3xl text-lg">
          This ingress payload breached perimeter nodes last quarter. Intercept the payload highlights to append telemetry indicators — isolate all 5 vulnerabilities.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Email Frame */}
        <div className="bg-bg-surface border border-text-muted/30 rounded-lg overflow-hidden flex flex-col shadow-2xl relative z-10">
          <div className="bg-bg-card border-b border-text-muted/30 p-3 flex justify-between items-center font-mono text-xs shadow-md">
            <span className="text-text-muted">LOG_STREAM // INBOUND_SMTP</span>
            <span className="text-neon-red flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,0,85,0.8)]">
              <span className="animate-pulse">●</span> LIVE_PAYLOAD
            </span>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col gap-4 font-sans text-sm md:text-base bg-[#f4f4f5] text-[#18181b] flex-1">
            <div className="border-b border-[#e4e4e7] pb-5 space-y-2">
              <div>
                <span className="text-[#71717a] mr-2 inline-block w-16">From:</span>
                <span className="font-medium">IT Service Desk</span> &lt;
                <Hotspot id={1} isFound={found.includes(1)} onClick={() => toggleHotspot(1)}>
                  helpdesk@corp-secure-support.com
                </Hotspot>
                &gt;
              </div>
              <div>
                <span className="text-[#71717a] mr-2 inline-block w-16">To:</span>
                node_user@internal_subnet.net
              </div>
              <div className="pt-2 text-lg">
                <span className="text-[#71717a] mr-2 font-normal text-base inline-block w-16">Subject:</span>
                <span className="font-bold">URGENT: Your mailbox will be suspended in{' '}
                  <Hotspot id={2} isFound={found.includes(2)} onClick={() => toggleHotspot(2)}>
                    2 hours
                  </Hotspot>
                </span>
              </div>
            </div>

            <div className="py-6 space-y-5 leading-relaxed text-[#3f3f46]">
              <p>Dear User,</p>
              <p>
                Our system has detected unusual sign-in activity. To avoid permanent suspension of your mailbox, you must{' '}
                <Hotspot id={3} isFound={found.includes(3)} onClick={() => toggleHotspot(3)}>
                  verify your identity here
                </Hotspot>{' '}
                within the next 2 hours.
              </p>
              <p>
                <Hotspot id={4} isFound={found.includes(4)} onClick={() => toggleHotspot(4)}>
                  Failure to verify will result in permanent data loss. This requires immediate action.
                </Hotspot>
              </p>
              <p className="pt-4">Regards,<br/><span className="font-medium">IT Security Team</span></p>
            </div>
            
            <div className="mt-auto pt-6 border-t border-[#e4e4e7]">
              <Hotspot id={5} isFound={found.includes(5)} onClick={() => toggleHotspot(5)} className="inline-flex items-center gap-2 px-4 py-2 border border-[#d4d4d8] rounded-md bg-white hover:bg-[#f4f4f5] cursor-pointer shadow-sm">
                📎 Voicemail_Transcript.html.zip
              </Hotspot>
            </div>
          </div>
        </div>

        {/* Evidence Panel */}
        <div className="flex flex-col gap-4">
          <div className="bg-bg-card/80 backdrop-blur border border-neon-cyan/30 p-6 font-mono h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 blur-3xl -z-10" />
            
            <h3 className="text-neon-cyan text-xl mb-3 tracking-widest uppercase">Telemetry Indicator Log</h3>
            <div className="text-text-muted mb-8 text-sm flex items-center gap-4 border-b border-text-muted/20 pb-4">
              <span>Progress:</span> 
              <span className="text-white text-base">[{found.length} / 5]</span> 
              <span>anomalies mapped</span>
            </div>
            
            <div className="space-y-4 flex-1">
              <AnimatePresence>
                {found.map((id) => {
                  const ev = EVIDENCE.find(e => e.id === id)!;
                  return (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="border-l-2 border-neon-cyan pl-4 py-2 bg-bg-surface/50"
                    >
                      <div className="text-neon-cyan font-bold text-sm tracking-wide mb-1">[{id}] {ev.title}</div>
                      <div className="text-text-main text-sm leading-relaxed">{ev.desc}</div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              
              {found.length === 0 && (
                <div className="h-full flex items-center justify-center text-text-muted/50 text-sm animate-pulse">
                  &gt; Waiting for stream interaction...
                </div>
              )}
            </div>

            <AnimatePresence>
              {found.length === 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 border border-neon-green text-neon-green bg-neon-green/10 p-4 text-center tracking-widest font-bold shadow-[0_0_15px_rgba(0,255,102,0.2)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-neon-green/10 animate-pulse" />
                  PAYLOAD ANOMALIES CAPTURED — THREAT ISOLATED
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hotspot({ id, isFound, onClick, children, className = '' }: any) {
  return (
    <span 
      onClick={onClick}
      className={`relative inline-block cursor-pointer transition-all duration-300 ${
        isFound 
          ? 'bg-[#dcfce7] text-[#166534] border-b-2 border-[#16a34a]' 
          : 'bg-[#fee2e2] hover:bg-[#fca5a5] text-[#991b1b] border-b-2 border-[#dc2626]'
      } ${className}`}
    >
      {children}
      <span className={`absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-[10px] font-mono font-bold rounded-full text-white z-20 ${
        isFound ? 'bg-[#16a34a] shadow-[0_0_8px_#16a34a]' : 'bg-[#dc2626] shadow-[0_0_8px_#dc2626] animate-pulse'
      }`}>
        {id}
      </span>
    </span>
  );
}

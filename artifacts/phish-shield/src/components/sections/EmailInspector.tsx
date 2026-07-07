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
        <div className="font-mono text-xs tracking-[0.2em] text-neon-cyan uppercase mb-2 section-label">
          [01] Vector Investigation
        </div>
        <h2 className="font-sans font-bold text-2xl text-white mt-1 mb-3">
          VECTOR INVESTIGATION
        </h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-3xl">
          This ingress payload breached perimeter nodes last quarter. Intercept the payload highlights to append telemetry indicators — isolate all 5 vulnerabilities.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Email Frame */}
        <div className="bg-bg-card border border-white/7 rounded-lg overflow-hidden flex flex-col relative z-10 card-border">
          <div className="bg-bg-surface border-b border-white/6 px-4 py-3 flex justify-between items-center font-mono text-xs">
            <span className="text-text-muted">LOG_STREAM // INBOUND_SMTP</span>
            <span className="text-neon-cyan flex items-center gap-2">
              <span className="animate-pulse">●</span> LIVE_PAYLOAD
            </span>
          </div>
          
          <div className="flex flex-col font-sans text-sm bg-bg-card text-text-main flex-1 rounded-b-lg">
            <div className="bg-bg-surface border-b border-white/6 px-4 py-3 space-y-2">
              <div>
                <span className="font-mono text-xs text-text-muted mr-2 inline-block w-16">From:</span>
                <span className="font-mono text-xs text-text-main">IT Service Desk</span> &lt;
                <Hotspot id={1} isFound={found.includes(1)} onClick={() => toggleHotspot(1)}>
                  helpdesk@corp-secure-support.com
                </Hotspot>
                &gt;
              </div>
              <div>
                <span className="font-mono text-xs text-text-muted mr-2 inline-block w-16">To:</span>
                <span className="font-mono text-xs text-text-main">node_user@internal_subnet.net</span>
              </div>
              <div className="pt-2 text-lg">
                <span className="font-mono text-xs text-text-muted mr-2 inline-block w-16">Subject:</span>
                <span className="font-mono text-xs text-text-main font-bold">URGENT: Your mailbox will be suspended in{' '}
                  <Hotspot id={2} isFound={found.includes(2)} onClick={() => toggleHotspot(2)}>
                    2 hours
                  </Hotspot>
                </span>
              </div>
            </div>

            <div className="bg-bg-card text-text-main text-sm p-4 space-y-5 leading-relaxed">
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
              
              <div className="mt-8 pt-6 border-t border-slate-800/60">
                <Hotspot id={5} isFound={found.includes(5)} onClick={() => toggleHotspot(5)} className="px-4 py-2">
                  📎 Voicemail_Transcript.html.zip
                </Hotspot>
              </div>
            </div>
          </div>
        </div>

        {/* Evidence Panel */}
        <div className="flex flex-col gap-4">
          <div className="border border-white/7 bg-bg-card rounded-lg p-6 h-full flex flex-col relative overflow-hidden">
            <h3 className="font-mono text-xs tracking-[0.2em] text-neon-cyan uppercase mb-3 section-label">Telemetry Indicator Log</h3>
            <div className="text-text-muted mb-8 text-sm flex items-center gap-4 border-b border-slate-800/60 pb-4">
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
                      className="border-l-2 border-neon-cyan/40 pl-3 py-2 bg-bg-surface/50 rounded-r mb-2"
                    >
                      <div className="font-mono text-xs text-text-muted mb-1">[{id}] {ev.title}</div>
                      <div className="text-text-main text-sm">{ev.desc}</div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              
              {found.length === 0 && (
                <div className="h-full flex items-center justify-center text-text-muted text-sm italic">
                  &gt; Waiting for stream interaction...
                </div>
              )}
            </div>

            <AnimatePresence>
              {found.length === 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 bg-neon-green/8 border border-neon-green/30 text-neon-green rounded px-3 py-2 text-sm text-center"
                >
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
      className={`relative transition-all duration-300 ${
        isFound 
          ? 'inline border border-neon-green/50 bg-neon-green/8 rounded px-1 text-neon-green' 
          : 'inline border border-text-muted/30 bg-text-muted/5 rounded px-1 cursor-pointer text-text-muted hover:border-neon-cyan/50 hover:text-text-main'
      } ${className}`}
    >
      {children}
    </span>
  );
}

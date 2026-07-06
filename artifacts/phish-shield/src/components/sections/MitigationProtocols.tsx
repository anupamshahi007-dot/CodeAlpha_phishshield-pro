import { useState } from 'react';
import { motion } from 'framer-motion';

const PROTOCOLS = [
  { id: 1, title: 'Force Temporal Dampening', desc: 'Slow down operational parsing speed instantly if an inbound stream maps a high-urgency metric.' },
  { id: 2, title: 'Secondary Channel Handshake', desc: 'Authenticate transmission sources via secondary out-of-band links — never use provided metadata lines.' },
  { id: 3, title: 'Inspect Target Pointers', desc: 'Hover routing links to audit actual destination paths prior to execution. If structural naming differs, abort.' },
  { id: 4, title: 'Expose Ingress Metadata', desc: "Don't just inspect the presentation alias — expand structural header strings to trace precise origin subnets." },
  { id: 5, title: 'Enforce Cryptographic MFA', desc: 'While not impenetrable, it shuts down lateral authentication movements from simple structural token leaks.' },
  { id: 6, title: 'Telemetry Broadcasting', desc: 'Forward suspected vectors instantly to telemetry arrays to update system firewall policies for the entire fleet.' }
];

export function MitigationProtocols() {
  const [checked, setChecked] = useState<number[]>([]);

  const toggleCheck = (id: number) => {
    if (checked.includes(id)) {
      setChecked(checked.filter(c => c !== id));
    } else {
      setChecked([...checked, id]);
    }
  };

  const progress = (checked.length / PROTOCOLS.length) * 100;

  return (
    <section id="checklist" className="min-h-screen py-24 px-6 max-w-4xl mx-auto flex flex-col gap-12 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <h2 className="font-orbitron text-3xl md:text-4xl text-white mb-4">
          <span className="text-text-muted mr-3">[04]</span>MITIGATION PROTOCOLS
        </h2>
        <p className="text-text-main text-lg">
          Verify execution parameters prior to stream navigation. This sequence safely intercepts threat distributions before lateral mutation.
        </p>
      </motion.div>

      <div className="bg-bg-card/80 backdrop-blur border border-text-muted/30 p-6 md:p-10 rounded-lg font-mono shadow-2xl relative z-10">
        <div className="flex justify-between items-end mb-4">
          <span className="text-neon-green tracking-widest uppercase font-bold drop-shadow-[0_0_8px_rgba(0,255,102,0.8)]">
            {checked.length} / 6 PROTOCOLS ACTIVE
          </span>
          <span className="text-text-muted text-xs hidden sm:block">STATUS: {checked.length === 6 ? 'SECURED' : 'PENDING'}</span>
        </div>
        
        <div className="h-2 w-full bg-black/80 overflow-hidden mb-10 border border-text-muted/20">
          <motion.div 
            className="h-full bg-neon-green shadow-[0_0_15px_#00ff66]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

        <div className="space-y-4">
          {PROTOCOLS.map((protocol, idx) => {
            const isChecked = checked.includes(protocol.id);
            return (
              <motion.div 
                key={protocol.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                onClick={() => toggleCheck(protocol.id)}
                className={`flex gap-4 p-5 border rounded cursor-pointer transition-all duration-300 ${
                  isChecked 
                    ? 'border-neon-green bg-neon-green/10 opacity-70 scale-[0.99]' 
                    : 'border-text-muted/30 hover:border-neon-cyan/50 hover:bg-bg-surface'
                }`}
              >
                <div className={`mt-0.5 w-6 h-6 border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                  isChecked ? 'border-neon-green text-neon-green bg-neon-green/20' : 'border-text-muted/50 text-transparent'
                }`}>
                  {isChecked && '✓'}
                </div>
                <div>
                  <h3 className={`font-bold uppercase tracking-wider mb-2 transition-colors ${
                    isChecked ? 'text-neon-green line-through' : 'text-white'
                  }`}>
                    {protocol.title}
                  </h3>
                  <p className={`text-sm font-sans leading-relaxed transition-colors ${
                    isChecked ? 'line-through text-text-muted' : 'text-text-main'
                  }`}>
                    {protocol.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

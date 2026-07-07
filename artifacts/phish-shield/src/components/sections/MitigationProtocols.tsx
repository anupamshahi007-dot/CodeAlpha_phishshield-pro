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
        <div className="font-mono text-xs tracking-[0.2em] text-neon-cyan uppercase mb-2">
          [04] MITIGATION PROTOCOLS
        </div>
        <h2 className="font-sans font-bold text-2xl md:text-4xl text-white mt-1 mb-3">
          Execution Parameters
        </h2>
        <p className="text-text-main text-lg">
          Verify execution parameters prior to stream navigation. This sequence safely intercepts threat distributions before lateral mutation.
        </p>
      </motion.div>

      <div className="bg-bg-card border border-white/7 p-6 md:p-10 rounded-lg shadow-sm relative z-10">
        <div className="flex justify-between items-end mb-4">
          <span className="text-neon-cyan font-mono text-xs tracking-widest uppercase font-bold">
            {checked.length} / 6 PROTOCOLS ACTIVE
          </span>
          <span className={`text-xs hidden sm:block px-3 py-1 rounded-sm border ${checked.length === 6 ? 'bg-neon-green/8 border-neon-green/30 text-neon-green' : 'text-text-muted border-white/7'}`}>
            STATUS: {checked.length === 6 ? 'SECURED' : 'PENDING'}
          </span>
        </div>
        
        <div className="h-2 w-full bg-bg-card border border-white/7 rounded-full overflow-hidden mb-10">
          <motion.div 
            className="h-full bg-neon-cyan transition-all duration-500 ease-out"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-3">
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
                className={`flex gap-4 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  isChecked 
                    ? 'border border-neon-green/30 bg-neon-green/5' 
                    : 'border border-white/7 bg-bg-card hover:border-neon-cyan/30 hover:bg-neon-cyan/[0.02]'
                }`}
              >
                <div className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${
                  isChecked ? 'bg-neon-green border-neon-green text-white text-[10px]' : 'border-2 border-text-muted/50 text-transparent'
                }`}>
                  {isChecked && '✓'}
                </div>
                <div>
                  <h3 className={`font-sans font-bold mb-1 transition-colors ${
                    isChecked ? 'text-text-muted line-through' : 'text-text-main'
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

        {checked.length === 6 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-neon-green/8 border border-neon-green/30 text-neon-green rounded-lg px-4 py-3 text-sm font-sans"
          >
            All protocols verified. Node optimization complete. Ready for operational streams.
          </motion.div>
        )}
      </div>
    </section>
  );
}
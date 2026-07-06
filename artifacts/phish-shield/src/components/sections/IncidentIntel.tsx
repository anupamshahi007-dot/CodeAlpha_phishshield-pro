import { motion } from 'framer-motion';

const CASES = [
  {
    id: 'BEC-01',
    title: 'The $100M Synthetic Vendor Profile',
    desc: 'Adversaries successfully map hardware vendor logistics between 2013-2015. Forged transaction requests matched real ledger setups perfectly, allowing standard finance routing to pass multi-million payloads over two full calendar cycles without triggering anomaly blocks.',
    stats: ['$100M+ Exfiltrated Assets', '730 Days Dwell Window']
  },
  {
    id: 'LATERAL-02',
    title: 'HVAC Ingress Core Piercing',
    desc: 'In 2013, an environmental systems technician endpoint was compromised via zero-day data harvesters. Compromised asset clearance parameters allowed adversaries to bridge to structural databases inside a tier-1 retail framework via standard vendor pipeline hooks.',
    stats: ['40M+ Dataset Breaches', '1 Node Vulnerable Source']
  }
];

export function IncidentIntel() {
  return (
    <section id="cases" className="min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col gap-12 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <h2 className="font-orbitron text-3xl md:text-4xl text-white mb-4">
          <span className="text-text-muted mr-3">[05]</span>INCIDENT INTEL ARCHIVES
        </h2>
        <p className="text-text-main max-w-3xl text-lg">
          Declassified profiles tracking multi-vector compromises executed through singular client endpoints.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        {CASES.map((c, idx) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-[#080b12] border border-text-muted/30 p-8 md:p-10 relative overflow-hidden group shadow-2xl hover:border-neon-amber/50 transition-colors duration-500"
          >
            {/* Folder tab visual */}
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-neon-amber/20 text-neon-amber font-mono text-xs border-b border-l border-neon-amber/40 font-bold tracking-widest shadow-[0_0_10px_rgba(255,170,0,0.2)]">
              CLASSIFIED
            </div>
            
            <div className="font-mono text-text-muted text-sm mb-6 tracking-widest uppercase">
              INTEL_RECORD // {c.id}
            </div>
            
            <h3 className="font-orbitron text-2xl md:text-3xl text-white mb-6 group-hover:text-neon-amber transition-colors drop-shadow-md">
              {c.title}
            </h3>
            
            <p className="text-text-main mb-8 leading-relaxed font-sans text-base">
              {c.desc}
            </p>
            
            <div className="flex flex-col gap-3 font-mono text-sm md:text-base border-t border-text-muted/20 pt-6">
              {c.stats.map((s, i) => (
                <div key={i} className="flex items-center gap-3 text-neon-red">
                  <span className="w-2 h-2 bg-neon-red inline-block shadow-[0_0_8px_rgba(255,0,85,0.8)] animate-pulse" /> 
                  <span className="tracking-wide">{s}</span>
                </div>
              ))}
            </div>
            
            {/* Decorative background grid */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-text-muted/10 grid grid-cols-4 grid-rows-4 opacity-20 rotate-12 pointer-events-none transition-transform duration-1000 group-hover:rotate-45">
              {Array.from({length: 16}).map((_, i) => (
                <div key={i} className="border border-text-muted/10" />
              ))}
            </div>
            <div className="absolute top-10 -left-10 w-32 h-32 bg-neon-amber/5 blur-3xl rounded-full pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

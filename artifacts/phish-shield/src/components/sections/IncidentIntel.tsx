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
        <div className="font-mono text-xs tracking-[0.2em] text-neon-cyan uppercase mb-2">
          [05] INCIDENT INTEL ARCHIVES
        </div>
        <h2 className="font-sans font-bold text-2xl md:text-4xl text-white mt-1 mb-3">
          Declassified Profiles
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
            className="bg-bg-card border border-white/7 rounded-xl p-6 relative overflow-hidden group hover:border-neon-cyan/25 transition-all duration-500"
          >
            {/* Folder tab visual */}
            <div className="absolute top-4 right-4 px-2 py-0.5 bg-neon-amber/10 border border-neon-amber/30 text-neon-amber font-mono text-xs rounded tracking-widest">
              CLASSIFIED
            </div>
            
            <div className="font-mono text-text-muted text-xs mb-4 tracking-widest uppercase">
              INTEL_RECORD // {c.id}
            </div>
            
            <h3 className="font-sans font-bold text-lg text-white mb-4 transition-colors">
              {c.title}
            </h3>
            
            <p className="text-text-main mb-6 leading-relaxed font-sans text-sm">
              {c.desc}
            </p>
            
            <div className="border-t border-white/6 my-4" />

            <div className="flex flex-col gap-4 font-mono text-sm pt-2">
              {c.stats.map((s, i) => {
                const parts = s.split(' ');
                const val = parts[0];
                const label = parts.slice(1).join(' ');
                return (
                  <div key={i} className="flex flex-col">
                    <span className="font-sans font-bold text-3xl text-neon-cyan">{val}</span>
                    <span className="font-mono text-xs text-text-muted uppercase tracking-wider mt-1">{label}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Decorative background grid */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-white/4 grid grid-cols-4 grid-rows-4 opacity-50 rotate-12 pointer-events-none transition-transform duration-1000 group-hover:rotate-45">
              {Array.from({length: 16}).map((_, i) => (
                <div key={i} className="border border-white/4 transition-colors duration-500" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
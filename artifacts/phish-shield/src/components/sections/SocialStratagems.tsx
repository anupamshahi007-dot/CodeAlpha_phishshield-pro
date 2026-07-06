import { useState } from 'react';
import { motion } from 'framer-motion';

const TACTICS = [
  {
    id: 1,
    title: 'Pretexting',
    front: 'STRATAGEM MATRIX // 01\n[Query Database]',
    back: 'Constructing synthetic structural scenarios ("Helpdesk parsing context") to manipulate credential protocols.'
  },
  {
    id: 2,
    title: 'Authority Cloaking',
    front: 'STRATAGEM MATRIX // 02\n[Query Database]',
    back: 'Masking vectors as administrative tier requests to leverage high compliance trends across organizational structures.'
  },
  {
    id: 3,
    title: 'Temporal Manipulation',
    front: 'STRATAGEM MATRIX // 03\n[Query Database]',
    back: 'Weaponizing false system deadlines to panic human processing vectors out of safe baseline checks.'
  },
  {
    id: 4,
    title: 'Baiting Mechanics',
    front: 'STRATAGEM MATRIX // 04\n[Query Database]',
    back: 'Deploying synthetic incentives (clearance shifts, financial items, vouchers) to capture inbound query metrics.'
  },
  {
    id: 5,
    title: 'Quid Pro Quo Exchange',
    front: 'STRATAGEM MATRIX // 05\n[Query Database]',
    back: 'Trading pseudo-technical troubleshooting support paths directly for functional administrative passwords.'
  },
  {
    id: 6,
    title: 'Proximity Tailgating',
    front: 'STRATAGEM MATRIX // 06\n[Query Database]',
    back: 'Physical endpoint exploitation by shadowing validated credentials into highly partitioned operational spaces.'
  }
];

export function SocialStratagems() {
  return (
    <section id="tactics" className="min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col gap-12 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <h2 className="font-orbitron text-3xl md:text-4xl text-white mb-4">
          <span className="text-text-muted mr-3">[03]</span>SOCIAL STRATAGEMS
        </h2>
        <p className="text-text-main max-w-3xl text-lg">
          Malicious actors optimize cognitive patterns rather than just brute forcing firewalls. Explode node fields below to read target telemetry.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {TACTICS.map((tactic, idx) => (
          <FlipCard key={tactic.id} tactic={tactic} index={idx} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ tactic, index }: { tactic: any, index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative w-full h-56 cursor-pointer group"
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="w-full h-full transition-transform duration-700 font-mono shadow-xl"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 bg-bg-card border border-text-muted/30 border-l-4 border-l-neon-cyan p-6 flex flex-col justify-between hover:bg-bg-surface hover:border-text-muted/60 transition-colors"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="text-neon-cyan font-bold uppercase tracking-widest text-lg">{tactic.title}</div>
          <div className="text-text-muted whitespace-pre-line text-sm tracking-widest uppercase">
            {tactic.front}
            <div className="mt-4 text-xs text-neon-cyan/50 animate-pulse">&gt; Explode node...</div>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 bg-[#1f0a12] border border-neon-red/30 border-l-4 border-l-neon-red p-6 flex flex-col gap-4"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
          <div className="text-neon-red font-bold uppercase tracking-widest text-lg drop-shadow-[0_0_8px_rgba(255,0,85,0.8)]">{tactic.title}</div>
          <div className="text-red-200/80 font-sans text-sm md:text-base leading-relaxed">{tactic.back}</div>
        </div>
      </div>
    </motion.div>
  );
}

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
        <div className="font-mono text-xs tracking-[0.2em] text-neon-cyan uppercase mb-2 section-label">
          [03] Social Stratagems
        </div>
        <h2 className="font-sans font-bold text-2xl text-white mt-1 mb-3">
          SOCIAL STRATAGEMS
        </h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-3xl">
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
        className="w-full h-full transition-transform duration-700"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 bg-bg-card border border-white/7 rounded-lg border-l-2 border-l-neon-cyan p-6 flex flex-col justify-between transition-all duration-200 hover:border-neon-cyan/30 hover:bg-neon-cyan/[0.02] card-border"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="font-sans font-bold text-sm text-white flex items-center justify-between">
            {tactic.title}
            <span className="text-neon-cyan">✦</span>
          </div>
          <div className="font-mono text-neon-cyan whitespace-pre-line text-sm tracking-widest uppercase opacity-80">
            {tactic.front}
            <div className="mt-4 font-mono text-xs text-text-muted/50">&gt; Explode node...</div>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 bg-bg-surface border border-white/7 rounded-lg border-l-2 border-l-neon-green p-6 flex flex-col gap-4"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
          <div className="text-neon-green font-bold uppercase tracking-widest text-lg">{tactic.title}</div>
          <div className="text-text-main text-sm leading-relaxed">{tactic.back}</div>
        </div>
      </div>
    </motion.div>
  );
}

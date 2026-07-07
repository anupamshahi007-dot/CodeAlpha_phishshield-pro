import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* Subtle background accent */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '800px', height: '500px',
        background: 'radial-gradient(ellipse at top, rgba(14,165,233,0.07) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        
        {/* Module badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-slate-700/60 bg-slate-800/40"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
          <span className="font-mono text-xs tracking-widest text-text-muted uppercase">Security Awareness Training · Module 07</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans font-bold text-[clamp(2.8rem,6vw,4.5rem)] text-white leading-tight tracking-tight mb-4"
        >
          Phishing Awareness<br />
          <span className="text-neon-cyan">Training Module</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-muted text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          Learn to identify phishing emails, fake websites, and social engineering tactics through interactive simulations and real-world case studies.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-8 mb-10 text-sm"
        >
          {[
            { value: '7', label: 'Modules' },
            { value: '10', label: 'Quiz Questions' },
            { value: '2', label: 'Case Studies' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-sans font-bold text-2xl text-white">{stat.value}</div>
              <div className="font-mono text-xs text-text-muted tracking-wider uppercase mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => document.querySelector('#inspect')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-8 py-3 text-sm rounded font-sans font-semibold"
          >
            Begin Training →
          </button>
          <button
            onClick={() => document.querySelector('#quiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost px-8 py-3 text-sm rounded font-sans"
          >
            Skip to Assessment
          </button>
        </motion.div>
      </div>
    </section>
  );
}

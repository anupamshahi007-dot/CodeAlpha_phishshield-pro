import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center relative px-6 pt-10">
      <div className="absolute top-10 right-10 hidden md:block border-2 border-dashed border-neon-red text-neon-red px-4 py-2 font-mono font-bold rotate-[12deg] opacity-80 shadow-[0_0_15px_rgba(255,0,85,0.5)]">
        TACTICAL SIMULATION
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full flex flex-col gap-6"
      >
        <span className="font-mono text-neon-cyan text-sm tracking-widest">
          SYS_RECORD // FILE_07-PH
        </span>
        
        <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white leading-[1.1]">
          Breach Prevent:<br/>
          <span className="text-neon-red drop-shadow-[0_0_15px_rgba(255,0,85,0.6)]">PHISH_SHIELD</span>
        </h1>
        
        <p className="text-text-main max-w-2xl text-lg leading-relaxed border-l-2 border-neon-cyan/50 pl-6 mt-4">
          Every tactical anomaly indexed here is derived from confirmed adversary patterns. Map the vectors, neutralize the indicators, and finalize the confirmation sequence to authenticate clearance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 font-mono">
          <button 
            onClick={() => document.getElementById('inspect')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-neon-cyan/10 border border-neon-cyan text-neon-cyan px-8 py-4 hover:bg-neon-cyan hover:text-black transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] uppercase tracking-wider font-bold"
          >
            Initialize Analysis →
          </button>
          <button 
            onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border border-text-muted text-text-muted px-8 py-4 hover:text-text-main hover:border-text-main transition-all uppercase tracking-wider"
          >
            Bypass to Assessment
          </button>
        </div>
      </motion.div>
    </section>
  );
}

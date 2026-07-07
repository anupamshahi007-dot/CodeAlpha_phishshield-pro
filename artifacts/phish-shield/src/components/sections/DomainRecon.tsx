import { useState } from 'react';
import { motion } from 'framer-motion';

const DOMAINS = [
  {
    id: 1,
    url: 'accounts.chase.com/login',
    safe: true,
    title: 'Root Match',
    desc: 'Genuine record. Path resolves directly to structural assets under authorization.'
  },
  {
    id: 2,
    url: 'chase.com.verify-id-secure.net',
    safe: false,
    title: 'Subdomain Manipulation',
    desc: 'Spoof variant. String parsing reveals base target node is actually verify-id-secure.net.'
  },
  {
    id: 3,
    url: 'chase-secure-login.com',
    safe: false,
    title: 'Morphing Vector',
    desc: 'Character alteration via hyphens used to fabricate synthetic structural context.'
  },
  {
    id: 4,
    url: 'chaselnvestments.com',
    safe: false,
    title: 'Homograph Attack',
    desc: "Character substitution detected. Lowercase 'l' replaced with uppercase 'I' to exploit visual cache."
  }
];

export function DomainRecon() {
  const [revealed, setRevealed] = useState<number[]>([]);

  const toggleDomain = (id: number) => {
    if (!revealed.includes(id)) {
      setRevealed([...revealed, id]);
    }
  };

  return (
    <section id="urls" className="min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col gap-12 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <div className="font-mono text-xs tracking-[0.2em] text-neon-cyan uppercase mb-2 section-label">
          [02] Domain Recon
        </div>
        <h2 className="font-sans font-bold text-2xl text-white mt-1 mb-3">
          DOMAIN RECONNAISSANCE
        </h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-3xl">
          Transport-layer handshakes (HTTPS padlocks) merely encrypt streams — they do not validate ownership matrix. Decouple domain structures below to scan for spoof variants.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        {DOMAINS.map((domain, idx) => {
          const isRevealed = revealed.includes(domain.id);
          const colorClass = isRevealed 
            ? (domain.safe 
                ? 'bg-bg-card border border-neon-green/40 rounded-lg' 
                : 'bg-bg-card border border-neon-red/40 rounded-lg'
              )
            : 'bg-bg-card card-border border border-white/7 rounded-lg cursor-pointer hover:border-neon-cyan/30 hover:bg-neon-cyan/[0.02] transition-all duration-200';

          return (
            <motion.div 
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => toggleDomain(domain.id)}
              className={`p-6 md:p-8 flex flex-col justify-center min-h-[160px] ${colorClass}`}
            >
              <div className="flex items-center gap-4 text-lg md:text-xl mb-2">
                <span className={isRevealed ? (domain.safe ? 'text-neon-green' : 'text-neon-red') : 'text-text-muted'}>
                  🔒
                </span>
                <span className={`break-all font-mono text-sm ${isRevealed ? (domain.safe ? 'text-neon-green font-semibold' : 'text-neon-red font-semibold') : 'text-text-main'}`}>
                  https://{domain.url}
                </span>
                {isRevealed && (
                  <span className={`ml-auto font-sans font-bold text-sm ${domain.safe ? 'text-neon-green' : 'text-neon-red'}`}>
                    {domain.safe ? '✓ SAFE' : '⚠ UNSAFE'}
                  </span>
                )}
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 origin-top ${isRevealed ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className="pt-4 border-t border-slate-800/60">
                  <strong className="block mb-2 font-mono text-xs text-text-muted uppercase">{domain.title}</strong>
                  <span className="text-sm text-text-main font-sans leading-relaxed block">{domain.desc}</span>
                </div>
              </div>
              
              {!isRevealed && (
                <div className="font-mono text-xs text-text-muted/60 mt-4">
                  &gt; Click to decouple node...
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

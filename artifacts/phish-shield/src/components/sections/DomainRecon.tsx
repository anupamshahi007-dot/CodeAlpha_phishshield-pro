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
        <h2 className="font-orbitron text-3xl md:text-4xl text-white mb-4">
          <span className="text-text-muted mr-3">[02]</span>DOMAIN RECONNAISSANCE
        </h2>
        <p className="text-text-main max-w-3xl text-lg">
          Transport-layer handshakes (HTTPS padlocks) merely encrypt streams — they do not validate ownership matrix. Decouple domain structures below to scan for spoof variants.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        {DOMAINS.map((domain, idx) => {
          const isRevealed = revealed.includes(domain.id);
          const colorClass = isRevealed 
            ? (domain.safe 
                ? 'border-neon-green shadow-[0_0_20px_rgba(0,255,102,0.15)] bg-neon-green/5' 
                : 'border-neon-red shadow-[0_0_20px_rgba(255,0,85,0.15)] bg-neon-red/5'
              )
            : 'border-text-muted/30 bg-bg-surface hover:border-text-muted/60 cursor-pointer';

          return (
            <motion.div 
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => toggleDomain(domain.id)}
              className={`p-6 md:p-8 rounded border transition-all duration-500 font-mono flex flex-col justify-center min-h-[160px] ${colorClass}`}
            >
              <div className="flex items-center gap-4 text-lg md:text-xl mb-2">
                <span className={isRevealed ? (domain.safe ? 'text-neon-green drop-shadow-[0_0_8px_rgba(0,255,102,0.8)]' : 'text-neon-red drop-shadow-[0_0_8px_rgba(255,0,85,0.8)]') : 'text-text-muted'}>
                  🔒
                </span>
                <span className={`break-all ${isRevealed ? (domain.safe ? 'text-neon-green' : 'text-neon-red') : 'text-white'}`}>
                  https://{domain.url}
                </span>
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 origin-top ${isRevealed ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className="pt-4 border-t border-current/20">
                  <strong className="block mb-2 tracking-wider uppercase text-sm md:text-base">{domain.title}</strong>
                  <span className="text-sm text-text-main font-sans leading-relaxed block">{domain.desc}</span>
                </div>
              </div>
              
              {!isRevealed && (
                <div className="text-xs text-text-muted mt-4 animate-pulse uppercase tracking-widest">
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

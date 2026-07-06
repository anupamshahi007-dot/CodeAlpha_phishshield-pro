import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: '// root' },
  { id: 'inspect', label: '// inspect_msg' },
  { id: 'urls', label: '// domain_recon' },
  { id: 'tactics', label: '// soc_stratagems' },
  { id: 'checklist', label: '// mit_protocol' },
  { id: 'cases', label: '// incident_intel' },
  { id: 'quiz', label: '// assess_matrix' }
];

export function StickyNav() {
  const [activeId, setActiveId] = useState('root');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset for detection
      for (const section of [...SECTIONS].reverse()) {
        const element = document.getElementById(section.id);
        if (element && scrollPos >= element.offsetTop) {
          setActiveId(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-bg-pure/80 backdrop-blur border-b border-neon-cyan/20 px-4 py-3 overflow-x-auto custom-scrollbar">
      <div className="max-w-7xl mx-auto flex gap-6 sm:gap-8">
        {SECTIONS.map((sec) => (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            className={`font-mono text-sm whitespace-nowrap transition-colors tracking-wide ${
              activeId === sec.id
                ? 'text-neon-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]'
                : 'text-text-muted hover:text-text-main'
            }`}
          >
            {sec.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

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
  const [activeId, setActiveId] = useState('hero');

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
    <nav 
      className="sticky top-0 z-50 w-full bg-bg-pure/80 backdrop-blur px-4 py-3 overflow-x-auto"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 1px 0 rgba(56,189,248,0.08)' }}
    >
      <div className="max-w-7xl mx-auto flex gap-6 sm:gap-8">
        {SECTIONS.map((sec) => (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            className={`font-mono text-sm whitespace-nowrap transition-colors tracking-wide border-b-2 pb-1 ${
              activeId === sec.id
                ? 'text-neon-cyan border-neon-cyan'
                : 'text-text-muted hover:text-text-main border-transparent'
            }`}
          >
            {sec.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

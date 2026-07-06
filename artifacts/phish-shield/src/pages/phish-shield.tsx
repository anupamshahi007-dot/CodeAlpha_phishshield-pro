import { StickyNav } from '../components/StickyNav';
import { HeroSection } from '../components/sections/HeroSection';
import { EmailInspector } from '../components/sections/EmailInspector';
import { DomainRecon } from '../components/sections/DomainRecon';
import { SocialStratagems } from '../components/sections/SocialStratagems';
import { MitigationProtocols } from '../components/sections/MitigationProtocols';
import { IncidentIntel } from '../components/sections/IncidentIntel';
import { AssessmentMatrix } from '../components/sections/AssessmentMatrix';

export default function PhishShield() {
  return (
    <div className="min-h-screen bg-bg-pure text-text-main font-sans selection:bg-neon-cyan/30">
      <StickyNav />
      <main className="flex flex-col relative z-10">
        <HeroSection />
        <EmailInspector />
        <DomainRecon />
        <SocialStratagems />
        <MitigationProtocols />
        <IncidentIntel />
        <AssessmentMatrix />
      </main>
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  {
    context: "Payload Origin: IT Support <security@paypa1-support.com> | String Map: Account Verification Cycle Required [24hr Window]",
    q: "Identify the primary visual manipulation trace within this origin address string:",
    options: [
      "The structural timeline indicator is condensed",
      '"paypa1" substitutes a numeral 1 for lowercase character l — establishing lookalike syntax',
      "Inbound transmission occurred during early log shifts",
      "The vector landed directly on terminal target scopes"
    ],
    correct: 1,
    explain: "Character substitution (1 for l, 0 for o, rn for m) exploits human visual cache. Parsing engines must check string arrays down to precise bit matching."
  },
  {
    q: "Evaluate structural truth: A browser connection layer lock icon guarantees absolute authenticity of target identity nodes.",
    options: ["System True", "System False"],
    correct: 1,
    explain: "The secure socket lock only verifies transport encryption (HTTPS). Threat actors generate legitimate encryption certificates for rogue domains natively."
  },
  {
    context: "Structural notice: A high-level financial vector communicates via open personal network structures asking for immediate $50k asset routing on a secure, unlogged acquisition vector.",
    q: "Which protocol execution sequence should be initialized?",
    options: [
      "Execute asset routing rapidly to preserve compliance workflows",
      "Halt pipeline processing and execute a secondary out-of-band validation check before committing data",
      "Query the open address requesting deeper transmission manifests",
      "Forward vectors to secondary peers to balance administrative load"
    ],
    correct: 1,
    explain: "High-urgency, unlogged requests using open networks match standard Executive Identity Theft parameters. Out-of-band validation stops execution vectors cold."
  },
  {
    q: "An incoming stream claims association with 'Enterprise OS Support,' asserting device corruption and demanding deep remote terminal access. Profile this tactic:",
    options: [
      "Asset Baiting Loop",
      "Pretexting matched with structural authority cloaking",
      "Lateral Tailgating Vector",
      "Pure Quid Pro Quo execution"
    ],
    correct: 1,
    explain: "Establishing synthetic structural scenarios while matching external trusted organizational identities defines standard pretexting/authority cloaking combinations."
  },
  {
    q: "Identify the authentic structural portal route for standard Chase infrastructure:",
    options: [
      "chase-secure-login.net",
      "accounts.chase.com",
      "chase.com.verify-id.net",
      "chaselnvestments.com"
    ],
    correct: 1,
    explain: "Parse path arrays from the root slash backward: 'accounts.chase.com' lands safely on authorized structural subdomains. Other vectors utilize hyphens and structural swaps."
  },
  {
    context: "Header: EXTREME URGENT // Account Terminal Lock | Payload: Attention Node User, authentication databases demand password entry within a 120-minute cycle.",
    q: "Isolate THREE structural anomalies inside this transmission:",
    options: [
      "Generic address greeting parameters only",
      "Condensed processing window constraints only",
      "Generic layout greeting, structural time constraint forcing, and deep credential demands",
      "The configuration aligns safely with internal IT operational mandates"
    ],
    correct: 2,
    explain: "Generic greeting matrices combined with tight temporal limits and high-clearance access requests indicate standard compromise vectors."
  },
  {
    q: "An operations invoice from a long-term supply vendor specifies updated payment database routing coordinates. Select optimal initial behavior:",
    options: [
      "Process routing instantly to match legacy schedule pacing",
      "Halt process and call vendor through an authenticated off-site directory — not listed invoice contacts — to verify modifications",
      "Transmit an inbound response map query requesting authenticity confirmations",
      "Pass payload to a secondary peer node to distribute processing liability"
    ],
    correct: 1,
    explain: "This vector caused major high-tier supply loop compromises. Validating architectural asset modification changes out-of-band ensures pipeline safety."
  },
  {
    q: "Evaluate structural truth: If an inbound communication displays flawless structural grammar, translation accuracy, and proper corporate formatting, it is certified clear.",
    options: ["System True", "System False"],
    correct: 1,
    explain: "Generative AI engines generate grammatically clean language frameworks dynamically. Audit indicators based on domain registry origins and payload behaviors instead."
  },
  {
    q: "A QR code flyer placed on open external node hardware offers rapid traffic fine routing. Scanning it with a handheld array exposes users to which attack classification?",
    options: [
      "Vishing Vector",
      "Quishing (QR Code phishing exploit)",
      "Lateral Facility Tailgating",
      "Basic Incentive Baiting"
    ],
    correct: 1,
    explain: "QR code structures mask destination text strings from initial optical view, bypassing standard human pre-click scanning instincts."
  },
  {
    q: "A suspicious link asset was executed, but terminal tabs were aborted before typing data flags. Select subsequent protocol requirements:",
    options: [
      "No actionable threat trace identified since input fields remained clear",
      "Broadcast threat context immediately to Security operations teams for system inspection",
      "Monitor system state changes passively before executing alert routines",
      "Purge historical stream data and continue standard tasks"
    ],
    correct: 1,
    explain: "Initialize broadcast protocols immediately. Advanced drive-by exploit scripts drop components directly upon page execution without needing manual text submission."
  }
];

export function AssessmentMatrix() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredIndex, setAnsweredIndex] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const q = QUESTIONS[index];

  const handleAnswer = (optIndex: number) => {
    if (answeredIndex !== null) return;
    setAnsweredIndex(optIndex);
    if (optIndex === q.correct) {
      setScore(s => s + 1);
    }
  };

  const nextLayer = () => {
    if (index === QUESTIONS.length - 1) {
      setFinished(true);
    } else {
      setIndex(i => i + 1);
      setAnsweredIndex(null);
    }
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setAnsweredIndex(null);
    setFinished(false);
  };

  const getResultInfo = () => {
    if (score >= 9) return { title: 'NODE OPTIMIZED // EXCELLENT CLEARANCE', desc: 'Your cognitive filter arrays are successfully isolating high-sophistication adversarial patterns. Maintain this level of telemetry tracking on operational streams.', color: 'text-neon-cyan' };
    if (score >= 7) return { title: 'DEGRADED STATE // STABLE READINGS', desc: 'Logic engine processed most standard vulnerabilities successfully. Re-verify the error markers and review mitigation protocols to lock down execution loopholes.', color: 'text-neon-amber' };
    return { title: 'CRITICAL DISRUPT // MATRIX FAILURE', desc: 'Vulnerability indexing indicates high exploit openness. Threat loops require structural reinforcement. Re-run protocol simulators before field node exposure.', color: 'text-neon-red' };
  };

  return (
    <section id="quiz" className="min-h-screen py-24 px-6 max-w-4xl mx-auto flex flex-col gap-8 w-full mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <h2 className="font-orbitron text-3xl md:text-4xl text-white mb-4">
          <span className="text-text-muted mr-3">[06]</span>ASSESSMENT MATRIX
        </h2>
        <p className="text-text-main text-lg">
          10 verification layers. Validate logic engines, review instantly compiled feedback, and pull terminal evaluation metrics upon termination.
        </p>
      </motion.div>

      <div className="bg-bg-card/90 backdrop-blur border border-text-muted/30 p-6 md:p-10 min-h-[600px] flex flex-col relative overflow-hidden shadow-2xl rounded-lg">
        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div 
              key={`q-${index}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex justify-between text-xs md:text-sm font-mono text-text-muted mb-6 tracking-widest uppercase">
                <span>LAYER_INDEX {index + 1} / 10</span>
                <span className="text-white">VERIFIED: {score}</span>
              </div>
              
              <div className="h-1 w-full bg-black/50 mb-10 border border-text-muted/20">
                <div 
                  className="h-full bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all duration-500 ease-out" 
                  style={{ width: `${((index) / 10) * 100}%` }}
                />
              </div>

              {q.context && (
                <div className="bg-neon-amber/5 border-l-4 border-neon-amber p-4 mb-8 font-mono text-sm md:text-base text-neon-amber leading-relaxed shadow-[0_0_15px_rgba(255,170,0,0.1)]">
                  {q.context}
                </div>
              )}

              <h3 className="font-orbitron text-xl md:text-2xl text-white mb-8 leading-relaxed">
                {q.q}
              </h3>

              <div className="space-y-4 font-sans text-base md:text-lg flex-1">
                {q.options.map((opt, i) => {
                  let btnClass = "border-text-muted/30 hover:border-neon-cyan text-text-main hover:bg-bg-surface hover:text-white";
                  if (answeredIndex !== null) {
                    if (i === q.correct) btnClass = "border-neon-green bg-neon-green/10 text-neon-green shadow-[0_0_15px_rgba(0,255,102,0.2)]";
                    else if (i === answeredIndex) btnClass = "border-neon-red bg-neon-red/10 text-neon-red shadow-[0_0_15px_rgba(255,0,85,0.2)]";
                    else btnClass = "border-text-muted/10 text-text-muted/40";
                  }

                  return (
                    <button
                      key={i}
                      disabled={answeredIndex !== null}
                      onClick={() => handleAnswer(i)}
                      className={`w-full text-left p-5 border rounded transition-all duration-300 ${btnClass}`}
                    >
                      <span className="font-mono mr-4 opacity-50 text-sm">[{String.fromCharCode(65 + i)}]</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {answeredIndex !== null && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    className="mt-8 border-t border-text-muted/30 pt-8"
                  >
                    <div className={`font-mono text-sm md:text-base mb-3 tracking-widest font-bold ${answeredIndex === q.correct ? 'text-neon-green drop-shadow-[0_0_8px_rgba(0,255,102,0.8)]' : 'text-neon-red drop-shadow-[0_0_8px_rgba(255,0,85,0.8)]'}`}>
                      {answeredIndex === q.correct ? 'VERIFIED MATCH' : 'ANOMALY DETECTED'}
                    </div>
                    <p className="text-text-main text-base leading-relaxed mb-8 bg-bg-surface p-4 border-l-2 border-text-muted/50">{q.explain}</p>
                    <button 
                      onClick={nextLayer}
                      className="px-8 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-mono transition-all tracking-widest uppercase font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
                    >
                      Cycle Next Layer →
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-8 relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-cyan/10 via-transparent to-transparent -z-10" />
              
              <div className="font-mono text-text-muted mb-4 tracking-widest uppercase">FINAL EVALUATION METRICS</div>
              <div className="text-8xl md:text-9xl font-orbitron text-neon-cyan drop-shadow-[0_0_30px_rgba(0,240,255,0.6)] mb-10">
                {score}/10
              </div>
              <h3 className={`font-mono text-2xl md:text-3xl mb-6 tracking-widest font-bold drop-shadow-md ${getResultInfo().color}`}>
                {getResultInfo().title}
              </h3>
              <p className="text-text-main max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
                {getResultInfo().desc}
              </p>
              <button 
                onClick={restart}
                className="px-10 py-4 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-mono transition-all uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)]"
              >
                Re-initialize Logic Matrix
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

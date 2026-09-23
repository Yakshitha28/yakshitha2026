import React, { useState } from 'react';
import { Lightbulb, Network, Code, ShieldCheck, Rocket, ChevronRight, Check } from 'lucide-react';
import { ROADMAP_STEPS } from '../data/portfolioData';

const stepIcons: Record<string, React.ReactNode> = {
  '01': <Lightbulb className="w-5 h-5" />,
  '02': <Network className="w-5 h-5" />,
  '03': <Code className="w-5 h-5" />,
  '04': <ShieldCheck className="w-5 h-5" />,
  '05': <Rocket className="w-5 h-5" />,
};

export const Roadmap: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const activeStep = ROADMAP_STEPS[selectedStepIndex];

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-[#0a0a0e]/60 border-t border-white/[0.06]">
      {/* Background glow behind active node */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              02 · Methodology & Engineering Discipline
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Core Execution Road Map
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            From algorithmic problem formulation to resilient deployment — a structured 5-phase execution model applied to systems simulations and modern web applications.
          </p>
        </div>

        {/* Horizontal Process Track (Desktop) / Interactive Nodes */}
        <div className="relative mb-12">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 -translate-y-1/2 bg-gradient-to-r from-cyan-500/20 via-sky-500/30 to-purple-500/20 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {ROADMAP_STEPS.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 backdrop-blur-xl border ${
                    isSelected
                      ? 'bg-white/[0.08] border-cyan-400/60 shadow-[0_0_25px_-5px_rgba(56,189,248,0.3)] scale-[1.02]'
                      : 'bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-cyan-400 text-zinc-950 font-bold shadow-md shadow-cyan-400/30'
                          : 'bg-white/[0.05] text-zinc-400'
                      }`}
                    >
                      {stepIcons[step.step]}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-500">
                      PHASE {step.step}
                    </span>
                  </div>

                  <h3
                    className={`text-sm sm:text-base font-semibold transition-colors ${
                      isSelected ? 'text-white' : 'text-zinc-300'
                    }`}
                  >
                    {step.title.split(' & ')[0]}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                    {step.tagline}
                  </p>

                  {/* Active bottom highlight bar */}
                  {isSelected && (
                    <div className="absolute -bottom-px left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-mono text-cyan-300">
                <span>PHASE {activeStep.step} OF 05</span>
                <span>·</span>
                <span>{activeStep.tagline}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Core Stage Deliverables & Rigor:
                </h4>
                <div className="space-y-2.5">
                  {activeStep.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                      <div className="w-5 h-5 rounded-md bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-300">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Navigation / Stage Switcher */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">STAGE PROGRESSION</span>
                <span className="text-xs font-mono text-cyan-400">
                  {selectedStepIndex + 1} / {ROADMAP_STEPS.length}
                </span>
              </div>

              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-sky-400 h-full transition-all duration-300"
                  style={{ width: `${((selectedStepIndex + 1) / ROADMAP_STEPS.length) * 100}%` }}
                />
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Applied directly in projects like <span className="text-white font-medium">L'Amore Restaurant</span> to optimize interactive table reservation workflows, responsive menu discovery, and multi-device performance.
              </p>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setSelectedStepIndex((prev) => Math.max(0, prev - 1))}
                  disabled={selectedStepIndex === 0}
                  className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  Previous Phase
                </button>
                <button
                  onClick={() => setSelectedStepIndex((prev) => Math.min(ROADMAP_STEPS.length - 1, prev + 1))}
                  disabled={selectedStepIndex === ROADMAP_STEPS.length - 1}
                  className="px-4 py-1.5 text-xs font-medium text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1 font-semibold"
                >
                  Next Phase
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

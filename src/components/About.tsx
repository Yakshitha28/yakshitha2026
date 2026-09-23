import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              01 · About & Academic Foundation
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering at the intersection of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              low-level systems
            </span>{' '}
            & modern web engines.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
            {PERSONAL_INFO.aboutBio}
          </p>
        </div>

        {/* 3-Column Bento Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Education Timeline & Institutions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Academic Trajectory</span>
            </h3>

            <div className="space-y-4">
              {PERSONAL_INFO.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-white/[0.06]">
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.institution}
                    </h4>
                    <span className="text-xs font-mono text-cyan-400/90 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-zinc-300 mt-2 mb-3">
                    {edu.degree}
                  </p>

                  <div className="space-y-2 mt-3">
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Principles Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-sky-950/20 to-transparent border border-cyan-500/20 backdrop-blur-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white">Engineering Philosophy</h5>
                <p className="text-xs text-zinc-400 mt-0.5">
                  "Clean algorithmic logic beneath the hood, delightful and responsive glassmorphic interfaces on the surface."
                </p>
              </div>
            </div>
          </div>

          {/* Right: Technical Competencies Matrix from Resume (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span>Technical Competencies</span>
            </h3>

            <div className="glass-card rounded-2xl p-6 space-y-5 border border-white/10">
              {/* Category 1: Languages */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Terminal className="w-3.5 h-3.5" /> Core Languages
                  </span>
                  <span>Python · C · C++ · HTML · CSS · JS</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-sky-400 h-full w-[92%] rounded-full" />
                </div>
              </div>

              {/* Category 2: Engineering & CS Concepts */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span className="flex items-center gap-1.5 text-sky-400">
                    <Cpu className="w-3.5 h-3.5" /> Engineering & Algorithms
                  </span>
                  <span>Data Structures · OOP · Problem Solving</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-sky-500 to-blue-400 h-full w-[88%] rounded-full" />
                </div>
              </div>

              {/* Category 3: Web Systems */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Layers className="w-3.5 h-3.5" /> Development & Web
                  </span>
                  <span>Layout Architecture · Modern CSS · Simulation UX</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-400 h-full w-[94%] rounded-full" />
                </div>
              </div>

              {/* Category 4: Tools & Platforms */}
              <div className="pt-3 border-t border-white/[0.06]">
                <span className="text-xs font-medium text-zinc-300 block mb-2.5">
                  Developer Environment & Tooling
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'Command Line / Bash', 'Linux CLI', 'Responsive DevTools'].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300 font-mono"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Key Metric Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.06]">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="font-display text-2xl font-bold text-white block">SRM '30</span>
                  <span className="text-[11px] text-zinc-400">B.Tech CSE Core</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="font-display text-2xl font-bold text-amber-400 block">L'Amore</span>
                  <span className="text-[11px] text-zinc-400">Web Platform Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

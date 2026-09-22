import React from 'react';
import { Award, ShieldCheck, Trophy, Terminal, Code2, GitBranch, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

const certIcons: Record<string, React.ReactNode> = {
  Hackathon: <Trophy className="w-5 h-5 text-amber-400" />,
  University: <Award className="w-5 h-5 text-cyan-400" />,
  Engineering: <Terminal className="w-5 h-5 text-sky-400" />,
  Systems: <Code2 className="w-5 h-5 text-indigo-400" />,
  Tools: <GitBranch className="w-5 h-5 text-rose-400" />,
};

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#090a0e]/70 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              04 · Accreditations & Milestones
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications & Honors
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Recognitions across hackathon engineering, academic core curricula, and software engineering problem solving.
          </p>
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform">
                    {certIcons[cert.category] || <Award className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  {cert.issuer}
                </p>
              </div>

              {/* Skills breakdown */}
              <div className="pt-5 mt-5 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.03] text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

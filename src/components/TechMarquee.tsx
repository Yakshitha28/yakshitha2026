import React from 'react';
import {
  Terminal,
  Cpu,
  Binary,
  Code2,
  Layout,
  GitBranch,
  Network,
  Workflow,
  Boxes,
  Sparkles,
  Eye,
  Zap,
  TerminalSquare,
  Activity,
  Layers,
  Database
} from 'lucide-react';
import { TECHNOLOGIES_MARQUEE } from '../data/portfolioData';

// Icon map helper
const iconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-4 h-4 text-cyan-400" />,
  Cpu: <Cpu className="w-4 h-4 text-sky-400" />,
  Binary: <Binary className="w-4 h-4 text-blue-400" />,
  Code2: <Code2 className="w-4 h-4 text-amber-400" />,
  Layout: <Layout className="w-4 h-4 text-indigo-400" />,
  GitBranch: <GitBranch className="w-4 h-4 text-rose-400" />,
  Network: <Network className="w-4 h-4 text-emerald-400" />,
  Workflow: <Workflow className="w-4 h-4 text-teal-400" />,
  Boxes: <Boxes className="w-4 h-4 text-violet-400" />,
  Sparkles: <Sparkles className="w-4 h-4 text-purple-400" />,
  Eye: <Eye className="w-4 h-4 text-cyan-300" />,
  Zap: <Zap className="w-4 h-4 text-yellow-400" />,
  TerminalSquare: <TerminalSquare className="w-4 h-4 text-slate-300" />,
  Activity: <Activity className="w-4 h-4 text-red-400" />,
  Layers: <Layers className="w-4 h-4 text-cyan-400" />,
  Database: <Database className="w-4 h-4 text-emerald-400" />,
};

export const TechMarquee: React.FC = () => {
  // Triple the array to ensure uninterrupted loop across 1440px+ ultra-wide viewports
  const items = [...TECHNOLOGIES_MARQUEE, ...TECHNOLOGIES_MARQUEE, ...TECHNOLOGIES_MARQUEE];

  return (
    <section id="skills" className="py-12 border-y border-white/[0.06] bg-[#0c0d12]/60 overflow-hidden relative">
      {/* Edge shadow fades for seamless marquee flow */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Technologies & Core Toolchain
            </h2>
          </div>
          <span className="text-xs text-zinc-500 hidden sm:inline">
            Hover marquee to pause · Systems & Web Stack
          </span>
        </div>
      </div>

      {/* Marquee Row */}
      <div className="w-full overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-3.5 py-2 pl-4">
          {items.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-400/40 backdrop-blur-md transition-all duration-200 shadow-sm cursor-default select-none group"
            >
              <div className="p-1 rounded-full bg-white/[0.04] group-hover:scale-110 transition-transform">
                {iconMap[tech.icon] || <Terminal className="w-4 h-4 text-cyan-400" />}
              </div>
              <span className="text-sm font-medium text-zinc-200 group-hover:text-white whitespace-nowrap">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-white/[0.04]">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

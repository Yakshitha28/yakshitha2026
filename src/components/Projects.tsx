import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  Layers,
  Terminal,
  Eye
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'lamore' | 'cafe'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'lamore') return p.id === 'lamore-restaurant';
    if (filter === 'cafe') return p.id === 'student-cafe';
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                03 · Selected Engineering Works
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects & Web Architecture
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              Showcasing modern responsive web applications, interactive dining and reservation platforms, and clean UI/UX craftsmanship.
            </p>
          </div>

          {/* Filter segment control */}
          <div className="flex items-center gap-1 p-1 bg-white/[0.03] border border-white/[0.08] rounded-xl backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-white/10 text-cyan-300 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('lamore')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filter === 'lamore'
                  ? 'bg-white/10 text-amber-300 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              L'Amore Restaurant
            </button>
            <button
              onClick={() => setFilter('cafe')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filter === 'cafe'
                  ? 'bg-white/10 text-cyan-300 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Campus Brew Cafe
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`group glass-card rounded-3xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1.5 flex flex-col ${
                  isFeatured ? 'lg:col-span-12 bg-[#0e111a]/80' : 'lg:col-span-6 bg-[#0c0e14]/70'
                }`}
              >
                {/* For Featured (L'Amore), use a horizontal split showcase on large screens */}
                <div
                  className={`grid ${
                    isFeatured ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'
                  } h-full`}
                >
                  {/* Media / Screenshot Container */}
                  <div
                    className={`relative overflow-hidden bg-zinc-950 ${
                      isFeatured ? 'lg:col-span-7 aspect-[16/10]' : 'aspect-[16/10]'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 filter contrast-[1.02]"
                    />

                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent opacity-80" />

                    {/* Top Pill / Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md bg-black/70 border border-white/15 text-white flex items-center gap-1.5">
                        {isFeatured ? (
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        ) : (
                          <Layers className="w-3.5 h-3.5 text-cyan-400" />
                        )}
                        {project.badge}
                      </span>
                    </div>

                    {/* Quick Preview Hover Button */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl bg-black/70 hover:bg-cyan-500/90 text-white hover:text-zinc-950 text-xs font-medium backdrop-blur-md border border-white/15 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{isFeatured ? "Explore L'Amore Portal" : 'Inspect Case Study'}</span>
                    </button>
                  </div>

                  {/* Content Container */}
                  <div
                    className={`p-6 sm:p-8 flex flex-col justify-between ${
                      isFeatured ? 'lg:col-span-5' : ''
                    }`}
                  >
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 block mb-1">
                          {project.tagline}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack tags */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Metrics if featured */}
                      {isFeatured && project.metrics && (
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
                          {project.metrics.slice(0, 2).map((m, mIdx) => (
                            <div key={mIdx} className="p-2.5 rounded-lg bg-white/[0.02]">
                              <span className="text-[10px] text-zinc-400 font-mono block">
                                {m.label}
                              </span>
                              <span className="text-sm font-bold text-cyan-300 font-display">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Action Buttons */}
                    <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/[0.06] mt-6">
                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-400 hover:text-white p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
                          title="GitHub Source"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>

                      <button
                        onClick={() => onSelectProject(project)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 active:scale-95 ${
                          isFeatured
                            ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 text-zinc-950 shadow-[0_0_20px_-5px_rgba(251,191,36,0.4)]'
                            : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10'
                        }`}
                      >
                        <span>{isFeatured ? "Explore L'Amore" : 'View Details'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

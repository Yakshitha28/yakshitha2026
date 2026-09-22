import React, { useState } from 'react';
import { X, ExternalLink, Github, Sparkles, Activity, AlertTriangle, ShieldCheck, Check, Layers, RefreshCw } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Simulator state for CodeRed
  const [surgeLevel, setSurgeLevel] = useState<number>(3); // 1 to 5 scale
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator' | 'specs'>('overview');
  const [bedRebalanced, setBedRebalanced] = useState(false);

  // Dynamic calculations for CodeRed simulator
  const patientRate = surgeLevel * 24;
  const criticalQueue = Math.max(2, Math.round(surgeLevel * 7.5));
  const baseBedSaturation = Math.min(99, 45 + surgeLevel * 11);
  const bedSaturation = bedRebalanced ? Math.max(35, baseBedSaturation - 18) : baseBedSaturation;
  const ventilatorNeed = Math.min(100, 20 + surgeLevel * 14);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#0f1118] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
              Project Case Study · {project.title.split('—')[0]}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-white/[0.06] bg-[#0c0e14]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 text-xs sm:text-sm font-medium transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Overview & Design
          </button>

          {project.interactiveType === 'codered' && (
            <button
              onClick={() => setActiveTab('simulator')}
              className={`pb-3 text-xs sm:text-sm font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === 'simulator'
                  ? 'border-red-400 text-red-400'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span>Interactive Crisis Engine</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-3 text-xs sm:text-sm font-medium transition-colors border-b-2 ${
              activeTab === 'specs'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Architecture & Highlights
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Image Preview with overlay */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="bg-black/60 px-3 py-1 rounded-md backdrop-blur-md border border-white/10 font-mono">
                    {project.badge || 'Featured Work'}
                  </span>
                  {project.metrics && (
                    <span className="hidden sm:inline bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 rounded-md text-cyan-300">
                      {project.metrics[0].label}: {project.metrics[0].value}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Technologies Pill Row */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                  Core Technologies & Concepts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-medium text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center"
                    >
                      <span className="block text-xs text-zinc-400 font-mono">{m.label}</span>
                      <span className="block text-lg font-bold text-white font-display mt-0.5">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'simulator' && project.interactiveType === 'codered' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-red-300">
                    VIT Hackathon Resonance 1.0 — Crisis Surge Engine (Live Prototype)
                  </p>
                  <p className="text-zinc-400">
                    Adjust the catastrophe scale slider below to observe how CodeRed prioritizes critical trauma triage, predicts bed starvation, and reallocates emergency capacity.
                  </p>
                </div>
              </div>

              {/* Slider Control */}
              <div className="glass-card p-5 rounded-xl space-y-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-white">
                    Simulate Crisis Influx Level
                  </label>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                    Stage {surgeLevel}: {['Baseline', 'Minor Incident', 'Mass Influx', 'Extreme Surge', 'Catastrophic Event'][surgeLevel - 1]}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="5"
                  value={surgeLevel}
                  onChange={(e) => {
                    setSurgeLevel(Number(e.target.value));
                    setBedRebalanced(false);
                  }}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                />

                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>1: Normal ER</span>
                  <span>2: Moderate</span>
                  <span>3: Resonance Sim</span>
                  <span>4: Mass Casualty</span>
                  <span>5: Critical Peak</span>
                </div>
              </div>

              {/* Live Metric Gauges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-zinc-400 block font-mono">Patient Flow Rate</span>
                  <span className="text-2xl font-bold text-white font-display mt-1">
                    {patientRate} / hr
                  </span>
                  <span className="text-[11px] text-red-400 mt-1 block">
                    +{surgeLevel * 80}% over baseline
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-zinc-400 block font-mono">ICU Bed Saturation</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span
                      className={`text-2xl font-bold font-display ${
                        bedSaturation > 85 ? 'text-red-400' : 'text-amber-300'
                      }`}
                    >
                      {bedSaturation}%
                    </span>
                    {bedRebalanced && (
                      <span className="text-[11px] text-emerald-400 font-medium">
                        (Optimized)
                      </span>
                    )}
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div
                      className={`h-full ${bedSaturation > 85 ? 'bg-red-500' : 'bg-amber-400'}`}
                      style={{ width: `${bedSaturation}%` }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-zinc-400 block font-mono">Ventilator Demand</span>
                  <span className="text-2xl font-bold text-cyan-300 font-display mt-1">
                    {ventilatorNeed}%
                  </span>
                  <span className="text-[11px] text-zinc-400 mt-1 block">
                    {criticalQueue} critical patients in queue
                  </span>
                </div>
              </div>

              {/* Action Button for simulation */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-xs text-zinc-400">
                  Algorithmic triage redistribution reclaims secondary recovery bays into high-dependency units.
                </p>
                <button
                  onClick={() => setBedRebalanced(true)}
                  disabled={bedRebalanced}
                  className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 disabled:bg-zinc-700 disabled:text-zinc-400 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  {bedRebalanced ? 'Beds Dynamically Reallocated' : 'Execute Triage Rebalance'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                  Key Engineering Capabilities & Architecture
                </h4>
                <div className="space-y-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-zinc-300"
                    >
                      <div className="w-5 h-5 rounded-md bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-300 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-xs font-mono text-zinc-400">REPOSITORY SPECIFICATION</span>
                <p className="text-xs text-zinc-300 font-mono">
                  Target Branch: main · Framework: Modern Clean Architecture · Author: Yakshitha Sri N D
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-white/10 bg-[#0c0e14]">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <a
              href={`mailto:yakshithasri.nd@gmail.com?subject=Inquiry regarding ${encodeURIComponent(project.title)}`}
              className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Discuss Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

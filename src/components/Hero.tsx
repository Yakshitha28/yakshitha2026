import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  Terminal,
  Sparkles,
  Download,
  Github,
  Linkedin,
  Mail,
  Camera,
  RotateCcw,
  Check,
  Upload
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  // Allow user to upload custom photo or fall back to default
  const [photoUrl, setPhotoUrl] = useState<string>(PERSONAL_INFO.avatarImage);
  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(false);
  const [uploadToast, setUploadToast] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedPhoto = localStorage.getItem('yakshitha_custom_photo');
    if (savedPhoto && savedPhoto.startsWith('data:image/')) {
      setPhotoUrl(savedPhoto);
      setHasCustomPhoto(true);
    } else {
      setPhotoUrl(PERSONAL_INFO.avatarImage);
      setHasCustomPhoto(false);
      if (savedPhoto) {
        localStorage.removeItem('yakshitha_custom_photo');
      }
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        setUploadToast('File is too large. Please select an image under 15MB.');
        setTimeout(() => setUploadToast(null), 3000);
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          setHasCustomPhoto(true);
          try {
            localStorage.setItem('yakshitha_custom_photo', result);
          } catch {
            // In case of quota exceed in local storage, photo still displays in session state
          }
          setUploadToast('Photo updated successfully!');
          setTimeout(() => setUploadToast(null), 3000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setPhotoUrl(PERSONAL_INFO.avatarImage);
    setHasCustomPhoto(false);
    localStorage.removeItem('yakshitha_custom_photo');
    setUploadToast('Reset to original portrait');
    setTimeout(() => setUploadToast(null), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* High-Tech Cinematic Atmospheric Hero Background — Featuring Yakshitha's Photo with Smooth Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Base dark canvas */}
        <div className="absolute inset-0 bg-[#0a0a0c]" />

        {/* Ambient tech matrix layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen scale-105"
          style={{ backgroundImage: `url(${PERSONAL_INFO.heroBgImage})` }}
        />

        {/* PROMINENT DEVELOPER PHOTO IN THE BACKGROUND WITH SMOOTH ANIMATION */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full flex items-center justify-center lg:justify-end overflow-hidden">
          <div
            className="w-full h-full max-w-3xl bg-contain lg:bg-cover bg-top lg:bg-[center_top_12%] bg-no-repeat opacity-65 lg:opacity-85 filter contrast-[1.04] saturate-[1.02] animate-hero-photo transition-all duration-1000 ease-out"
            style={{
              backgroundImage: `url(${photoUrl})`,
              maskImage: 'radial-gradient(ellipse 90% 85% at 65% 42%, black 45%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 65% 42%, black 45%, transparent 80%)',
            }}
          />
        </div>

        {/* Soft atmospheric depth glow from the developer portrait */}
        <div
          className="absolute right-10 top-1/4 w-[650px] h-[650px] rounded-full filter blur-[150px] opacity-25 bg-cover bg-center animate-ambient-pulse"
          style={{ backgroundImage: `url(${photoUrl})` }}
        />

        {/* Precision cyber grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-50" />

        {/* Deep dark cinematic vignette overlays for absolute contrast and text legibility on the left column */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/85 to-transparent lg:via-[#0a0a0c]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/90 via-transparent to-[#0a0a0c]" />

        {/* Centered & Balanced ambient glowing orbs */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Tagline Bar: B.Tech Class 2026 to 2030 + SRM University */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide uppercase">
              B.Tech CSE Core · 2026 to 2030
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-medium text-zinc-300">{PERSONAL_INFO.taglineTopRight}</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">SRM University, Chennai</span>
          </div>
        </div>

        {/* Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4">
              {/* Terminal Status Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)]">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>B.Tech CSE Core · 2026–2030</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-zinc-300">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>SRM Institute of Science & Technology</span>
                </div>
              </div>

              {/* Perfectly Aligned Name Block */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-400 inline-block rounded-full" />
                  <span className="font-semibold">Hello World, I'm</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                  <span className="bg-gradient-to-r from-white via-zinc-100 to-slate-200 bg-clip-text text-transparent block">
                    {PERSONAL_INFO.name}
                  </span>
                </h1>

                <div className="pt-2 flex items-center gap-3">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                    {PERSONAL_INFO.title}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.hireTagline}
            </p>

            {/* Quick Badges / Micro proof */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>L'Amore Restaurant Web Platform</span>
              </div>
              <span className="text-zinc-600">·</span>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Campus Brew Cafe</span>
              </div>
              <span className="text-zinc-600">·</span>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Full-Stack Web & Python</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onExploreProjects}
                className="px-6 py-3.5 text-sm font-semibold text-zinc-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 rounded-xl shadow-[0_0_25px_-5px_rgba(56,189,248,0.5)] transition-all duration-300 active:scale-95 flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 text-sm font-medium text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-cyan-400/40 rounded-xl transition-all duration-300 flex items-center gap-2 active:scale-95 backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Interactive Resume</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-4 text-zinc-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.07] hover:border-cyan-400/40 hover:text-white transition-all"
                title="Visit GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.07] hover:border-cyan-400/40 hover:text-white transition-all"
                title="Visit LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.07] hover:border-cyan-400/40 hover:text-white transition-all"
                title="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-zinc-500 pl-1">
                {PERSONAL_INFO.email}
              </span>
            </div>
          </div>

          {/* Right Column: Sleek Glassmorphic HUD & Controls (Background Photo is Unobstructed & Visible) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end relative">
            {/* Hidden file input for photo upload */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handlePhotoUpload}
              accept="image/*"
              className="hidden"
              aria-label="Upload photo"
            />

            {/* Glassmorphic Info & Control Showcase */}
            <div className="w-full max-w-[360px] sm:max-w-[380px] space-y-4 animate-smooth-float">
              {/* Photo Controls Bar */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0e111a]/70 backdrop-blur-xl border border-white/15 shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono text-cyan-300 font-medium">Portrait Background Active</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload your own photo"
                    className="px-3 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-400 text-cyan-300 hover:text-zinc-950 text-xs font-semibold border border-cyan-400/30 hover:border-cyan-400 transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-sm"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Upload Photo</span>
                  </button>

                  {hasCustomPhoto && (
                    <button
                      onClick={handleResetPhoto}
                      title="Reset to default portrait"
                      className="p-1.5 rounded-xl bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-300 border border-white/10 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Toast Notification when Photo Uploaded */}
              {uploadToast && (
                <div className="p-3 rounded-xl bg-cyan-950/95 border border-cyan-400 text-cyan-300 text-xs font-medium shadow-2xl backdrop-blur-md flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>{uploadToast}</span>
                </div>
              )}

              {/* Glass Stat Card 1: Academic Standing */}
              <div className="p-4 rounded-2xl bg-[#0e111a]/60 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition-all shadow-xl group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Education Core</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/15 text-cyan-300 border border-cyan-400/30">2026–2030</span>
                </div>
                <h4 className="font-semibold text-white text-sm">SRM Institute of Science and Technology</h4>
                <p className="text-xs text-zinc-400 mt-0.5">B.Tech Computer Science & Engineering (Core)</p>
              </div>

              {/* Glass Stat Card 2: Featured Development */}
              <div className="p-4 rounded-2xl bg-[#0e111a]/60 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 transition-all shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">Featured Systems</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <h4 className="font-semibold text-white text-sm">L'Amore Restaurant & Campus Brew</h4>
                <p className="text-xs text-zinc-400 mt-0.5">Modern Web Platforms · Responsive Architecture</p>
              </div>

              {/* Glass Stat Card 3: Availability Badge */}
              <div className="p-3.5 rounded-2xl bg-emerald-950/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-300 font-medium">Available for Opportunities</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">Chennai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

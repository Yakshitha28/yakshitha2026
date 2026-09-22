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
    if (savedPhoto) {
      setPhotoUrl(savedPhoto);
      setHasCustomPhoto(true);
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
      {/* Photo as Atmospheric Hero Background with Smooth Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Softly blurred animated background photo layer */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-3xl scale-110 opacity-20 animate-ambient-pulse transition-all duration-1000 ease-out"
          style={{ backgroundImage: `url(${photoUrl})` }}
        />
        {/* Deep dark cinematic vignette overlays to preserve high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/90 via-[#0a0a0c]/85 to-[#0a0a0c]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_15%,_#0a0a0c_85%)]" />

        {/* Ambient colored glowing orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[150px]" />
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
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300 backdrop-blur-md">
                <Terminal className="w-3.5 h-3.5" />
                <span>B.Tech CSE Core · 2026 to 2030</span>
              </div>

              {/* Name kept in one single line as requested */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight whitespace-normal sm:whitespace-nowrap">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              <div className="pt-2">
                <p className="text-2xl sm:text-3xl font-light text-zinc-300">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 underline decoration-cyan-400/60 decoration-2 underline-offset-8">
                    {PERSONAL_INFO.title}
                  </span>
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.hireTagline}
            </p>

            {/* Quick Badges / Micro proof */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>VIT Hackathon Finalist (CodeRed)</span>
              </div>
              <span className="text-zinc-600">·</span>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Low-Level Systems & Python</span>
              </div>
              <span className="text-zinc-600">·</span>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Web Simulation Engines</span>
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

          {/* Right Column: Hero Portrait Showcase with Glassmorphic Framing & Corner Upload Option */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-sky-400/10 to-transparent rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl p-3 bg-gradient-to-b from-white/10 via-white/[0.03] to-white/[0.02] border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl group animate-float">
              {/* Hidden file input for photo upload */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                accept="image/*"
                className="hidden"
                aria-label="Upload photo"
              />

              {/* Photo Frame */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                <img
                  src={photoUrl}
                  alt="Yakshitha Sri N D - Systems and Web Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = parent.querySelector('.photo-fallback');
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }
                  }}
                />

                {/* Resilient fallback container */}
                <div className="photo-fallback hidden absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-cyan-950/40 p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-display text-2xl font-bold mb-3">
                    YS
                  </div>
                  <h3 className="text-white font-bold text-lg">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{PERSONAL_INFO.title}</p>
                </div>

                {/* CORNER PHOTO UPLOAD OPTION */}
                <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload your own photo"
                    className="px-3 py-1.5 rounded-full bg-black/80 hover:bg-cyan-400 text-white hover:text-zinc-950 text-xs font-medium backdrop-blur-md border border-white/25 hover:border-cyan-400 transition-all duration-200 shadow-xl flex items-center gap-1.5 group/upload active:scale-95 cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5 text-cyan-400 group-hover/upload:text-zinc-950 transition-colors" />
                    <span className="text-[11px] font-semibold tracking-tight">Upload Photo</span>
                  </button>

                  {hasCustomPhoto && (
                    <button
                      onClick={handleResetPhoto}
                      title="Reset to default portrait"
                      className="p-1.5 rounded-full bg-black/80 hover:bg-red-500/80 text-zinc-300 hover:text-white backdrop-blur-md border border-white/20 transition-all duration-200 active:scale-95"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Toast Notification when Photo Uploaded */}
                {uploadToast && (
                  <div className="absolute top-12 right-3 z-40 px-3 py-1.5 rounded-lg bg-cyan-950/95 border border-cyan-400 text-cyan-300 text-[11px] font-medium shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200 flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-cyan-400" />
                    <span>{uploadToast}</span>
                  </div>
                )}

                {/* Subtle bottom vignette overlay for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Floating caption on portrait */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs backdrop-blur-md bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5">
                  <div>
                    <p className="font-medium text-white">{PERSONAL_INFO.name}</p>
                    <p className="text-[11px] text-cyan-300">SRM University · CSE Core</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono">
                    2026–2030
                  </span>
                </div>
              </div>

              {/* Decorative Accent Badges Floating */}
              <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-xl bg-[#12141c]/90 border border-cyan-500/40 shadow-lg text-[11px] font-medium text-cyan-300 flex items-center gap-1.5 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Creative Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

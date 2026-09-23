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
  Upload,
  RotateCcw,
  CheckCircle2,
  ImageIcon
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  // Developer photo state, initialized from localStorage or portfolio data
  const [photoUrl, setPhotoUrl] = useState<string>(PERSONAL_INFO.avatarImage);
  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('yakshitha_custom_photo');
      if (saved && (saved.startsWith('data:image/') || saved.startsWith('/assets/'))) {
        setPhotoUrl(saved);
        setHasCustomPhoto(true);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const processImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file (JPEG, PNG, WEBP).');
      return;
    }

    if (file.size > 25 * 1024 * 1024) {
      showToast('Image is larger than 25MB. Please choose a smaller image.');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPhotoUrl(dataUrl);
        setHasCustomPhoto(true);

        try {
          localStorage.setItem('yakshitha_custom_photo', dataUrl);
        } catch {
          // localStorage quota might be limited on very large images
        }

        // Persist to server disk via /api/upload-photo
        try {
          const res = await fetch('/api/upload-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: dataUrl }),
          });
          const json = await res.json();
          if (json.success && json.url) {
            // Server has written it to public assets
          }
        } catch {
          // Still loaded and persisted in localStorage
        }

        setIsUploading(false);
        showToast('Photo uploaded & applied permanently to background and side!');
      }
    };
    reader.onerror = () => {
      setIsUploading(false);
      showToast('Error reading image file.');
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleResetPhoto = () => {
    setPhotoUrl(PERSONAL_INFO.avatarImage);
    setHasCustomPhoto(false);
    try {
      localStorage.removeItem('yakshitha_custom_photo');
    } catch {
      // Ignore
    }
    showToast('Reset to original portrait');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
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

        {/* PROMINENT DEVELOPER PHOTO IN THE EXACT MIDDLE OF THE WHOLE SCREEN IN THE BACKGROUND */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <div
            className="w-full max-w-5xl h-full bg-contain bg-center bg-no-repeat opacity-50 sm:opacity-60 lg:opacity-65 filter contrast-[1.05] brightness-95 animate-hero-photo transition-all duration-1000 ease-out"
            style={{
              backgroundImage: `url(${photoUrl})`,
              maskImage: 'radial-gradient(ellipse 75% 75% at 50% 45%, black 45%, transparent 85%)',
              WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 45%, black 45%, transparent 85%)',
            }}
          />
        </div>

        {/* Soft atmospheric depth glow from the developer portrait in the center */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full filter blur-[160px] opacity-25 bg-cover bg-center animate-ambient-pulse"
          style={{ backgroundImage: `url(${photoUrl})` }}
        />

        {/* Precision cyber grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40" />

        {/* Deep dark cinematic vignette overlays for absolute contrast and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c]/90 via-[#0a0a0c]/40 to-[#0a0a0c]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/85 via-transparent to-[#0a0a0c]" />

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
                <span>Café Caresse</span>
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

          {/* Right Column: Hero Portrait Card with Direct Photo Display & Upload Controls */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end relative">
            {/* Hidden file input for photo upload */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              accept="image/*"
              className="hidden"
              aria-label="Upload your portrait photo"
            />

            <div className="w-full max-w-[360px] sm:max-w-[390px] space-y-3 animate-smooth-float">
              {/* Portrait Frame Card with Drag and Drop Support */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`relative rounded-3xl p-3 bg-gradient-to-b from-white/12 via-white/[0.04] to-white/[0.02] border transition-all duration-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] backdrop-blur-2xl group ${
                  isDragging ? 'border-cyan-400 ring-2 ring-cyan-400/50 scale-[1.02]' : 'border-white/20'
                }`}
              >
                {/* Decorative ambient aura behind the card */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/25 via-sky-400/15 to-transparent rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Picture Frame */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/15">
                  <img
                    src={photoUrl}
                    alt="Yakshitha Sri N D - Computer Science Undergraduate and Web Developer"
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

                  {/* Drag overlay indicator */}
                  {isDragging && (
                    <div className="absolute inset-0 bg-cyan-950/80 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-4 text-center border-2 border-dashed border-cyan-400 rounded-2xl">
                      <Upload className="w-10 h-10 text-cyan-400 animate-bounce mb-2" />
                      <p className="text-white font-semibold text-sm">Drop your photo here</p>
                      <p className="text-xs text-cyan-300 mt-1">Applies permanently to background & side</p>
                    </div>
                  )}

                  {/* Top-Right Fast Upload Button */}
                  <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      title="Upload your photo file"
                      className="px-3 py-1.5 rounded-full bg-black/85 hover:bg-cyan-400 text-white hover:text-zinc-950 text-xs font-semibold backdrop-blur-md border border-white/25 hover:border-cyan-400 transition-all duration-200 shadow-xl flex items-center gap-1.5 group/btn cursor-pointer active:scale-95"
                    >
                      <Camera className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:text-zinc-950 transition-colors" />
                      <span className="text-[11px] tracking-tight">Upload Photo</span>
                    </button>

                    {hasCustomPhoto && (
                      <button
                        onClick={handleResetPhoto}
                        title="Reset photo"
                        className="p-1.5 rounded-full bg-black/80 hover:bg-red-500 text-zinc-300 hover:text-white backdrop-blur-md border border-white/20 transition-all active:scale-95 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Toast Feedback Notification */}
                  {toastMessage && (
                    <div className="absolute top-12 right-3 left-3 z-40 px-3 py-2 rounded-xl bg-cyan-950/95 border border-cyan-400/80 text-cyan-200 text-xs shadow-2xl backdrop-blur-md flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="font-medium text-[11px] leading-tight">{toastMessage}</span>
                    </div>
                  )}

                  {/* Resilient fallback container */}
                  <div className="photo-fallback hidden absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-cyan-950/40 p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-display text-2xl font-bold mb-3">
                      YS
                    </div>
                    <h3 className="text-white font-bold text-lg">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{PERSONAL_INFO.title}</p>
                  </div>

                  {/* Bottom subtle gradient vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Floating caption on portrait */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-black/70 border border-white/10 rounded-xl px-3.5 py-2.5">
                    <div>
                      <p className="font-semibold text-white">{PERSONAL_INFO.name}</p>
                      <p className="text-[11px] text-cyan-300">SRM University · CSE Core</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono">
                      2026–2030
                    </span>
                  </div>
                </div>

                {/* Floating Creative Developer Accent Badge */}
                <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-xl bg-[#12141c]/95 border border-cyan-500/40 shadow-lg text-[11px] font-medium text-cyan-300 flex items-center gap-1.5 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Creative Developer</span>
                </div>
              </div>

              {/* Photo Upload & Quick Controls Bar */}
              <div className="p-3 rounded-2xl bg-[#0f111a]/90 backdrop-blur-xl border border-cyan-500/30 shadow-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white truncate">Permanent Photo</p>
                    <p className="text-[10px] text-zinc-400 truncate">Background & Side Frame</p>
                  </div>
                </div>

                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-bold text-xs shadow-lg shadow-cyan-500/25 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all shrink-0"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{isUploading ? 'Applying...' : 'Upload Photo'}</span>
                </button>
              </div>

              {/* Academic & Availability Badges */}
              <div className="grid grid-cols-1 gap-2">
                <div className="p-3 rounded-2xl bg-emerald-950/30 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-between shadow-xl">
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
      </div>
    </section>
  );
};

import React, { useRef, useState, useEffect } from 'react';
import {
  ArrowRight,
  Terminal,
  Sparkles,
  Download,
  Github,
  Linkedin,
  Mail,
  Camera
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  // Developer photo provided by user, permanently bundled for deployment
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem('yakshitha_custom_portrait') || null;
    } catch {
      return null;
    }
  });

  const [isImageLoading, setIsImageLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  const photoUrl = customPhoto || PERSONAL_INFO.avatarImage;
  // Always keep the same picture in the background and beside the name
  const bgPhotoUrl = photoUrl;
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsImageLoading(true);
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsImageLoading(false);
    }
  }, [photoUrl]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          try {
            localStorage.setItem('yakshitha_custom_portrait', result);
          } catch {
            // LocalStorage quota fallback
          }
          setCustomPhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          try {
            localStorage.setItem('yakshitha_custom_portrait', result);
          } catch {
            // LocalStorage quota fallback
          }
          setCustomPhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Full-width hero background image with dark navy gradient overlay (75% opacity) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Full-width & height background image (synchronized with the portrait photo) */}
        <img
          src={bgPhotoUrl}
          alt="Hero Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top filter blur-[2px] brightness-90 scale-105 transition-all duration-700"
        />

        {/* Dark navy gradient overlay (about 70-80% opacity) for high contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07112c]/85 via-[#081635]/75 to-[#040918]/90" />

        {/* Precision cyber grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
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

          {/* Right Column: Hero Portrait Card with Permanent Photo Display */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end relative">
            <div className="w-full max-w-[360px] sm:max-w-[390px] space-y-4 animate-smooth-float">
              {/* Portrait Frame Card */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/12 via-white/[0.04] to-white/[0.02] border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] backdrop-blur-2xl group">
                {/* Decorative ambient aura behind the card */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/25 via-sky-400/15 to-transparent rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Picture Frame */}
                <div
                  className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/15"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  {/* Subtle skeleton loader with shimmer sweep */}
                  <div
                    className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#090d16] transition-opacity duration-700 pointer-events-none ${
                      isImageLoading ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden={!isImageLoading}
                  >
                    {/* Ambient pulse background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/30 via-zinc-900/60 to-sky-950/20 animate-pulse" />

                    {/* Dynamic shimmer sweep */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-shimmer" />
                    </div>

                    {/* Geometric avatar skeleton placeholder */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-zinc-900/90 border border-cyan-500/25 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.15)] animate-pulse">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400/80 font-mono text-xs">
                          YS
                        </div>
                      </div>
                      <div className="mt-4 h-3 w-28 rounded-full bg-zinc-800/80 animate-pulse" />
                      <div className="mt-2 h-2.5 w-16 rounded-full bg-zinc-900/80 animate-pulse" />
                    </div>
                  </div>

                  <img
                    ref={imgRef}
                    src={photoUrl}
                    alt="Yakshitha Sri N D - Computer Science Undergraduate and Web Developer"
                    referrerPolicy="no-referrer"
                    onLoad={() => setIsImageLoading(false)}
                    className={`w-full h-full object-cover object-top filter contrast-[1.03] transition-all duration-700 ease-out group-hover:scale-105 ${
                      isImageLoading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
                    }`}
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    onError={(e) => {
                      setIsImageLoading(false);
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

                  {/* Hidden file input for photo upload */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden"
                    aria-label="Upload custom photo"
                  />

                  {/* Photo change overlay controls (accessible on touch & desktop hover) */}
                  <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                    {customPhoto && (
                      <button
                        type="button"
                        onClick={() => {
                          try {
                            localStorage.removeItem('yakshitha_custom_portrait');
                          } catch {
                            // ignore
                          }
                          setCustomPhoto(null);
                        }}
                        className="px-2 py-1 rounded-lg bg-black/75 hover:bg-black text-[10px] font-medium text-zinc-300 hover:text-white border border-white/20 backdrop-blur-md cursor-pointer transition-all shadow-md"
                        title="Revert to bundled portrait"
                      >
                        Reset
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 rounded-xl bg-black/80 hover:bg-cyan-950/90 text-cyan-300 hover:text-cyan-200 border border-cyan-500/40 backdrop-blur-md cursor-pointer transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-1.5 text-[11px]"
                      title="Upload your photo from device"
                    >
                      <Camera className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-[10px] font-medium">Upload Photo</span>
                    </button>
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

              {/* Academic & Availability Badges */}
              <div className="grid grid-cols-1 gap-2">
                <div className="p-3.5 rounded-2xl bg-emerald-950/30 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-between shadow-xl">
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

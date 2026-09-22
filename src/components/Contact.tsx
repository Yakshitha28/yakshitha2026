import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration / Internship Opportunity',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form after delay
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          subject: 'Project Collaboration / Internship Opportunity',
          message: '',
        });
        setSubmitted(false);
      }, 5000);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered CTA Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>05 · Initiate Contact</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-balance">
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              extraordinary
            </span>
            .
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Whether you are discussing engineering internships, low-level systems collaborations, or modern web applications — my inbox is always open.
          </p>

          {/* Quick Copy-to-Clipboard Email Pill */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-cyan-400/50 backdrop-blur-xl text-xs sm:text-sm font-mono text-zinc-200 transition-all flex items-center gap-2.5 shadow-md active:scale-95 group"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{PERSONAL_INFO.email}</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] text-cyan-300 flex items-center gap-1 font-sans">
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy
                  </>
                )}
              </span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-zinc-950 font-semibold text-xs sm:text-sm hover:from-cyan-300 hover:to-sky-200 transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(56,189,248,0.5)] active:scale-95"
            >
              <span>Compose Email</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left Column: Direct channels & Information (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Connect Directly</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Based in Chennai, India. Available for remote engineering opportunities and university research teams.
                </p>
              </div>

              <div className="space-y-3">
                {/* Location */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block">CURRENT BASE</span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-400/30 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-300 group-hover:text-white shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-zinc-500 block">GITHUB</span>
                      <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-cyan-300">
                        {PERSONAL_INFO.githubDisplay}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-400/30 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:text-white shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-zinc-500 block">LINKEDIN</span>
                      <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-cyan-300">
                        {PERSONAL_INFO.linkedinDisplay}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Availability Status */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-xs text-zinc-400">
                Typical reply window: <span className="text-zinc-200 font-medium">&lt; 12 hours</span>
              </p>
            </div>
          </div>

          {/* Right Column: Sleek Glassmorphic Form (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              Drop a note directly to start a conversation or arrange an interview.
            </p>

            {submitted ? (
              <div className="py-12 px-4 text-center space-y-3 bg-cyan-950/20 border border-cyan-500/30 rounded-2xl animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto">
                  Thank you for reaching out, {formState.name || 'Friend'}. I will get back to your email at{' '}
                  <span className="text-cyan-300 font-mono">{formState.email || 'your address'}</span> promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    SUBJECT / OPPORTUNITY
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, or engineering role..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-zinc-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_-3px_rgba(56,189,248,0.5)] active:scale-[0.99] disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Dispatching Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

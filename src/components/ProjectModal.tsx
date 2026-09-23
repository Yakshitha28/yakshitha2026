import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Sparkles,
  UtensilsCrossed,
  Wine,
  Calendar,
  Users,
  Clock,
  Check,
  Coffee,
  MapPin,
  BookmarkCheck
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'interactive' | 'specs'>('overview');

  // Interactive state for L'Amore Restaurant
  const [course, setCourse] = useState<'starters' | 'pasta' | 'entree' | 'dessert'>('entree');
  const [partySize, setPartySize] = useState<number>(2);
  const [seatingZone, setSeatingZone] = useState<'Veranda Terrace' | 'Main Dining Room' | "Chef's Wine Cellar">('Main Dining Room');
  const [selectedTime, setSelectedTime] = useState<string>('19:30');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Interactive state for Student Cafe
  const [cafeCombo, setCafeCombo] = useState<'study' | 'lunch' | 'express'>('study');

  const menuItems = {
    starters: [
      { name: 'Carpaccio di Manzo', desc: 'Truffle-infused prime tenderloin, aged parmigiano reggiano, wild arugula, caper berries', price: '$26' },
      { name: 'Heirloom Burrata & Figs', desc: 'Pugliese burrata, mission figs, aged Modena balsamic, micro basil, toasted brioche', price: '$22' },
    ],
    pasta: [
      { name: 'Tagliolini al Tartufo Bianco', desc: 'Hand-rolled egg pasta, French cultured butter, 24-month parmigiano, shaved Alba white truffle', price: '$44' },
      { name: 'Lobster Agnolotti', desc: 'Maine lobster mousse, saffron seafood bisque, Meyer lemon emulsion, chive oil', price: '$38' },
    ],
    entree: [
      { name: 'A5 Wagyu Striploin', desc: 'Miyazaki A5 beef, roasted bone marrow jus, glazed chanterelles, black garlic purée', price: '$68' },
      { name: 'Pan-Roasted Mediterranean Branzino', desc: 'Crispy skin, fennel pollen, saffron braised leeks, citrus beurre blanc', price: '$42' },
    ],
    dessert: [
      { name: 'Smoked Madagascar Vanilla Panna Cotta', desc: 'Passion fruit coulis, spun sugar crisp, edible gold leaf, Sicilian pistachio crumb', price: '$18' },
      { name: 'L’Amore Signature Dark Chocolate Sphere', desc: '72% Valrhona ganache, hazelnut praline core, warm salted caramel pour', price: '$20' },
    ],
  };

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
              Project Showcase · {project.title.split('—')[0]}
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

          {project.id === 'lamore-restaurant' && (
            <button
              onClick={() => setActiveTab('interactive')}
              className={`pb-3 text-xs sm:text-sm font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === 'interactive'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive Dining & Reservation</span>
            </button>
          )}

          {project.id === 'student-cafe' && (
            <button
              onClick={() => setActiveTab('interactive')}
              className={`pb-3 text-xs sm:text-sm font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === 'interactive'
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Coffee className="w-3.5 h-3.5 text-cyan-400" />
              <span>Campus Combos & Menu</span>
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
            Architecture & Features
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

          {activeTab === 'interactive' && project.id === 'lamore-restaurant' && (
            <div className="space-y-6">
              {/* Header Banner */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-amber-300">
                    L'Amore Restaurant — Interactive Guest Dining & Reservation Simulator
                  </p>
                  <p className="text-zinc-400">
                    Explore curated course tiers, pairings, and customize a table booking with real-time seating capacity recalculations.
                  </p>
                </div>
              </div>

              {/* Course Selector Tabs */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-zinc-400">Curated Culinary Courses</span>
                  <span className="text-xs text-amber-400 flex items-center gap-1 font-mono">
                    <Wine className="w-3.5 h-3.5" /> Sommelier Pairing Available
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['starters', 'pasta', 'entree', 'dessert'] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCourse(c)}
                      className={`p-2.5 rounded-xl text-xs font-semibold capitalize border transition-all ${
                        course === c
                          ? 'bg-amber-400/20 text-amber-200 border-amber-400/50 shadow-sm'
                          : 'bg-white/[0.03] text-zinc-400 border-white/5 hover:text-white'
                      }`}
                    >
                      {c === 'starters' ? '1. Antipasti' : c === 'pasta' ? '2. Primi' : c === 'entree' ? '3. Secondi' : '4. Dolci'}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {menuItems[course].map((dish, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <h5 className="font-semibold text-sm text-white">{dish.name}</h5>
                          <span className="font-mono text-amber-300 text-sm font-bold">{dish.price}</span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">{dish.desc}</p>
                      </div>
                      <div className="pt-3 flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Fresh artisanal preparation</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table Booking Configuration */}
              <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Reserve an Evening at L'Amore</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> Party Size
                    </label>
                    <div className="grid grid-cols-4 gap-1">
                      {[2, 4, 6, 8].map((num) => (
                        <button
                          key={num}
                          onClick={() => {
                            setPartySize(num);
                            setBookingConfirmed(false);
                          }}
                          className={`py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                            partySize === num
                              ? 'bg-amber-400 text-zinc-950 font-bold border-amber-300'
                              : 'bg-white/[0.04] text-zinc-300 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          {num}p
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> Dining Ambience
                    </label>
                    <select
                      value={seatingZone}
                      onChange={(e) => {
                        setSeatingZone(e.target.value as any);
                        setBookingConfirmed(false);
                      }}
                      className="w-full bg-zinc-900 border border-white/15 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Main Dining Room">Main Dining Room</option>
                      <option value="Veranda Terrace">Veranda Terrace</option>
                      <option value="Chef's Wine Cellar">Chef's Wine Cellar (Private)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> Seating Slot
                    </label>
                    <div className="grid grid-cols-3 gap-1">
                      {['18:30', '19:30', '21:00'].map((time) => (
                        <button
                          key={time}
                          onClick={() => {
                            setSelectedTime(time);
                            setBookingConfirmed(false);
                          }}
                          className={`py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                            selectedTime === time
                              ? 'bg-amber-400 text-zinc-950 font-bold border-amber-300'
                              : 'bg-white/[0.04] text-zinc-300 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking status confirmation preview */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-zinc-300 font-mono">
                    Reservation: <span className="text-white font-semibold">{partySize} Guests</span> ·{' '}
                    <span className="text-amber-300 font-medium">{seatingZone}</span> at{' '}
                    <span className="text-white font-semibold">{selectedTime}</span>
                  </div>

                  <button
                    onClick={() => setBookingConfirmed(true)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-400 to-yellow-300 text-zinc-950 hover:brightness-110 shadow-sm transition-all flex items-center gap-1.5"
                  >
                    <BookmarkCheck className="w-3.5 h-3.5" />
                    <span>{bookingConfirmed ? 'Reservation Confirmed ✓' : 'Simulate Confirmation'}</span>
                  </button>
                </div>

                {bookingConfirmed && (
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in duration-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Table verified for {partySize} guests in {seatingZone} at {selectedTime}. Digital concierge invitation generated.</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'interactive' && project.id === 'student-cafe' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3">
                <Coffee className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-cyan-300">
                    Café Caresse — Student Friendly Cafe Showcase
                  </p>
                  <p className="text-zinc-400">
                    Designed to provide SRM undergraduates with instant pricing transparency, cozy study zone reservations, and quick pick-up combos.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'study', title: 'Late Night Exam Cram', items: 'Cold Brew + Cinnamon Roll', price: '₹149' },
                  { id: 'lunch', title: 'Campus Power Lunch', items: 'Grilled Panini + Mint Lemonade', price: '₹189' },
                  { id: 'express', title: 'Between-Class Express', items: 'Double Espresso + Croissant', price: '₹119' },
                ].map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => setCafeCombo(tier.id as any)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      cafeCombo === tier.id
                        ? 'bg-cyan-500/10 border-cyan-400 text-white shadow-md'
                        : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <h5 className="font-semibold text-sm text-white">{tier.title}</h5>
                      <span className="font-mono text-cyan-300 text-xs font-bold">{tier.price}</span>
                    </div>
                    <p className="text-xs text-zinc-400">{tier.items}</p>
                    <div className="mt-3 text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Student ID Discount Eligible
                    </div>
                  </div>
                ))}
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

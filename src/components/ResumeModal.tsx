import React from 'react';
import { X, Printer, Download, Mail, Github, Linkedin, ExternalLink, GraduationCap, Code2, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200 print:p-0 print:bg-white">
      {/* Background overlay */}
      <div className="fixed inset-0 print:hidden" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#0e1017] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col print:border-none print:shadow-none print:max-h-none print:my-0 print:rounded-none print:bg-white print:text-black">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0a0f] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
              Formatted Interactive Resume · Yakshitha Sri N D
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-medium text-white flex items-center gap-1.5 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Paper */}
        <div className="overflow-y-auto p-6 sm:p-10 text-zinc-300 space-y-8 print:text-black print:p-0">
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-white/10 print:border-black/20 space-y-2">
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-medium text-cyan-400 print:text-zinc-700">
              Computer Science Undergraduate & Web Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-400 font-mono print:text-zinc-600 pt-1">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.email}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.githubDisplay}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.linkedinDisplay}
              </a>
            </div>
          </div>

          {/* Professional Profile */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold print:text-black border-b border-white/10 print:border-black/20 pb-1">
              PROFESSIONAL PROFILE
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">
              First-year Computer Science and Engineering (Core) student at SRM University with a strong foundation in programming and problem solving. Skilled in Python, HTML5, CSS3 and JavaScript, with hands-on project experience through L'Amore Restaurant dining portal and a student friendly cafe website. Interested in core computer science areas such as programming, data structures and software development, and eager to apply my skills to real-world engineering problems.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold print:text-black border-b border-white/10 print:border-black/20 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between items-baseline text-sm font-bold text-white print:text-black">
                  <span>SRM University</span>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-600 font-normal">First Year (Expected 2029–2030)</span>
                </div>
                <p className="text-xs text-cyan-300 print:text-zinc-700">Computer Science and Engineering (CSE Core)</p>
                <ul className="list-disc list-inside text-xs text-zinc-400 print:text-zinc-800 space-y-0.5 pt-1">
                  <li>Core Curriculum: Programming Fundamentals, Problem Solving, Engineering Mathematics, Computer Fundamentals.</li>
                  <li>Focus Areas: Algorithmic Logic, Object-Oriented Principles, Systems Architecture.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex justify-between items-baseline text-sm font-bold text-white print:text-black">
                  <span>Sri Chaitanya Techno School</span>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-600 font-normal">Completed</span>
                </div>
                <p className="text-xs text-zinc-400 print:text-zinc-600">School Education — Chennai</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold print:text-black border-b border-white/10 print:border-black/20 pb-1">
              FEATURED PROJECTS & SOFTWARE ARCHITECTURE
            </h2>

            {/* L'Amore Restaurant */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline text-sm font-bold text-white print:text-black">
                <span className="flex items-center gap-1.5">
                  <span>L'Amore Restaurant — Dining Portal & Reservation Platform</span>
                  <span className="text-[10px] font-mono font-normal px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 print:border-black print:text-black">
                    Featured Project
                  </span>
                </span>
                <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">HTML5 · CSS3 · JavaScript</span>
              </div>
              <ul className="list-disc list-inside text-xs text-zinc-400 print:text-zinc-800 space-y-1 pt-0.5">
                <li>Architected an elegant culinary dining website featuring interactive course-by-course menu navigation and wine pairing recommendations.</li>
                <li>Engineered a dynamic table reservation flow supporting guest party sizing, seating zone selection (Indoor, Terrace, Private Booth), and booking verification.</li>
                <li>Crafted a responsive luxury aesthetic with modern CSS grid layouts, smooth micro-interactions, and accessible typography.</li>
              </ul>
            </div>

            {/* Cafe */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline text-sm font-bold text-white print:text-black">
                <span>Campus Brew — Student Friendly Cafe Website</span>
                <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">HTML5 · CSS3</span>
              </div>
              <ul className="list-disc list-inside text-xs text-zinc-400 print:text-zinc-800 space-y-1 pt-0.5">
                <li>Designed and built a website for a student friendly cafe with a simple, welcoming layout.</li>
                <li>Structured the pages with clean semantic HTML so the menu and cafe details are easy to find.</li>
                <li>Styled the site with CSS to give it a consistent look and a comfortable reading experience.</li>
              </ul>
            </div>
          </div>

          {/* Technical Competencies */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold print:text-black border-b border-white/10 print:border-black/20 pb-1">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-bold text-white print:text-black block mb-0.5">Core Languages:</span>
                <span className="text-zinc-400 print:text-zinc-700">Python, C, C++, HTML, CSS, JavaScript</span>
              </div>
              <div>
                <span className="font-bold text-white print:text-black block mb-0.5">Engineering Concepts:</span>
                <span className="text-zinc-400 print:text-zinc-700">Programming Fundamentals, Problem Solving, Data Structures & Algorithms (basics), Object-Oriented Programming, Engineering Mathematics</span>
              </div>
              <div>
                <span className="font-bold text-white print:text-black block mb-0.5">Development & Web:</span>
                <span className="text-zinc-400 print:text-zinc-700">Website structure and layout, page styling, user-friendly interface design</span>
              </div>
              <div>
                <span className="font-bold text-white print:text-black block mb-0.5">Tools & Platforms:</span>
                <span className="text-zinc-400 print:text-zinc-700">Git, GitHub, VS Code, Command Line / Bash</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer button */}
        <div className="p-4 border-t border-white/10 bg-[#0a0a0f] flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
          >
            Done Viewing
          </button>
        </div>
      </div>
    </div>
  );
};

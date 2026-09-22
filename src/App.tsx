/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Roadmap } from './components/Roadmap';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f3f4f6] relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan-950/20 via-sky-950/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[35%] -left-48 w-[600px] h-[600px] bg-blue-950/15 rounded-full blur-[160px]" />
        <div className="absolute top-[65%] -right-48 w-[700px] h-[700px] bg-cyan-950/15 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <Navbar
          onOpenResume={() => setResumeOpen(true)}
          onHireMeClick={handleHireMeClick}
        />

        {/* Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onExploreProjects={handleExploreProjects}
        />

        {/* Technologies Infinite Looping Marquee */}
        <TechMarquee />

        {/* About & Academic Foundation */}
        <About />

        {/* Core Execution Road Map */}
        <Roadmap />

        {/* Projects Grid (Featured: CodeRed) */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Certifications & Milestones */}
        <Certifications />

        {/* Contact & Inquiry */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>

      {/* Interactive Project Case Study & Live Simulator Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Formatted Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

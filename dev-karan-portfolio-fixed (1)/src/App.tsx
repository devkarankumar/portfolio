import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDemoModal } from './components/ProjectDemoModal';
import { GitHubUploadGuideModal } from './components/GitHubUploadGuideModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProjectForDemo, setSelectedProjectForDemo] = useState<Project | null>(null);
  const [isGitHubGuideOpen, setIsGitHubGuideOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200 flex flex-col">
      {/* Navigation Bar */}
      <Navbar
        onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Projects Section */}
        <ProjectsSection
          onSelectProjectForDemo={(proj) => setSelectedProjectForDemo(proj)}
        />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience & Education Section */}
        <ExperienceEducationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Project Simulator Modal */}
      <ProjectDemoModal
        project={selectedProjectForDemo}
        onClose={() => setSelectedProjectForDemo(null)}
      />

      {/* GitHub Upload & Deployment Guide Modal */}
      <GitHubUploadGuideModal
        isOpen={isGitHubGuideOpen}
        onClose={() => setIsGitHubGuideOpen(false)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

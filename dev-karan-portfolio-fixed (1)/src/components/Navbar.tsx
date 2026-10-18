import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, FileText, UploadCloud } from 'lucide-react';

interface NavbarProps {
  onOpenGitHubGuide: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGitHubGuide, onOpenResume }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a 
          href="#top" 
          className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 bg-cyan-500 rounded-sm inline-block" />
          <span>DEV KARAN</span>
          <span className="text-xs font-normal text-slate-400 hidden sm:inline">· Python & AI</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Projects
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Skills
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Experience & Education
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenGitHubGuide}
            className="px-3.5 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/70 border border-cyan-800/70 rounded-lg hover:bg-cyan-900/60 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm"
            title="GitHub Upload Guide"
          >
            <UploadCloud className="w-3.5 h-3.5 text-cyan-400" />
            <span>GitHub Guide</span>
          </button>
          
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 text-xs font-medium text-slate-950 bg-white rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-slate-900" />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, UploadCloud, Github, Linkedin, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenGitHubGuide: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGitHubGuide, onOpenResume }) => {
  return (
    <section id="about" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl text-cyan-300 font-semibold mb-5">{PERSONAL_INFO.title}</p>
          <p className="text-slate-300 leading-relaxed max-w-xl mb-8">{PERSONAL_INFO.summary}</p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              View Projects
            </a>
            <button
              onClick={onOpenResume}
              className="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" /> Resume
            </button>
            <button
              onClick={onOpenGitHubGuide}
              className="px-5 py-2.5 text-sm font-medium text-cyan-300 bg-cyan-950/70 hover:bg-cyan-900/60 border border-cyan-800/70 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <UploadCloud className="w-4 h-4" /> GitHub Guide
            </button>
          </div>

          <div className="flex items-center gap-4 mt-8 text-slate-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="relative aspect-[3/4] max-w-sm w-full mx-auto overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          <img
            src={PERSONAL_INFO.avatar}
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

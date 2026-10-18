import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenGitHubGuide: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGitHubGuide, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <div className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-sm" />
              <span>DEV KARAN</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Python Developer | AI & Generative AI Enthusiast · Noida, India
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenGitHubGuide}
              className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              GitHub Upload Guide
            </button>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <button
              onClick={onOpenResume}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Resume PDF
            </button>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer border border-slate-800"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <div>
            © {new Date().getFullYear()} Dev Karan. Crafted with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-3">
            <span>thedevkaran@gmail.com</span>
            <span>·</span>
            <span>+91 9315628567</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { Github, Play, ExternalLink, Sparkles, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProjectForDemo: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProjectForDemo }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'genai' | 'mobile' | 'python' | 'fullstack'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <span>Selected Portfolio Works</span>
              <span aria-hidden="true">·</span>
              <span>Production & Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              High-impact systems spanning multimodal RAG, mobile proximity radar, voice automation, and full-stack REST architectures.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Works ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('genai')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'genai'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              GenAI & LLMs
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'mobile'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mobile & Apps
            </button>
            <button
              onClick={() => setActiveFilter('python')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'python'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Python Core
            </button>
          </div>
        </div>

        {/* Projects Grid: Single elevation Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Media frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60" />
                  
                  {/* Category tag - unboxed clean text */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800 text-[11px] font-semibold text-cyan-300">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-cyan-400 font-medium">{project.subtitle}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Bullet points from resume */}
                  <ul className="space-y-2 text-xs text-slate-400 mb-6">
                    {project.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-cyan-400 font-bold shrink-0 mt-0.5">·</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 text-xs">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action footer */}
              <div className="p-6 pt-0 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProjectForDemo(project)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Interactive Simulator</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">GitHub Code</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

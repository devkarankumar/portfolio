import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Search, Terminal, Cpu, Database, Globe, Code } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const icons = [Cpu, Code, Terminal, Globe, Database];

  return (
    <section id="skills" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <span>Technical Competencies</span>
              <span aria-hidden="true">·</span>
              <span>Full-Stack & Generative AI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Grounded in strong Computer Science fundamentals (DSA, OOP, System Architecture) combined with modern Generative AI tooling.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. RAG, Python, Django)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* 5 Distinct Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx % icons.length];
            const matchingSkills = searchQuery.trim() === ''
              ? cat.skills
              : cat.skills.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

            if (searchQuery.trim() !== '' && matchingSkills.length === 0) {
              return null;
            }

            return (
              <div
                key={cat.title}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-white font-bold text-base mb-1.5">
                    <div className="p-2 bg-slate-950 border border-slate-800 rounded-lg text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{cat.title}</span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List with Progress Bars */}
                  <div className="space-y-3.5">
                    {matchingSkills.map((s) => (
                      <div key={s.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className={`font-medium ${s.highlight ? 'text-white' : 'text-slate-300'}`}>
                            {s.name}
                          </span>
                          <span className="text-[11px] font-mono text-cyan-400 tabular-nums">
                            {s.level}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/80">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              s.highlight 
                                ? 'bg-gradient-to-r from-cyan-500 to-sky-400' 
                                : 'bg-slate-600'
                            }`}
                            style={{ width: `${s.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{cat.skills.length} core competencies</span>
                  <span className="text-cyan-400">Production ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

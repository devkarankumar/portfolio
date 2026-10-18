import React, { useState } from 'react';
import { EXPERIENCES, EDUCATIONS, CERTIFICATIONS } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceEducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>('experience');

  return (
    <section id="experience" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <span>Career Trajectory</span>
              <span aria-hidden="true">·</span>
              <span>Professional Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience & Qualifications
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Academic pedigree in Computer Science paired with hands-on faculty mentorship, mobile development, and professional GenAI programs.
            </p>
          </div>

          {/* Segmented control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience ({EXPERIENCES.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education ({EDUCATIONS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Certifications ({CERTIFICATIONS.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-cyan-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-medium mb-4">
                  {exp.type}
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-cyan-400 font-bold shrink-0 mt-0.5">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATIONS.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-base font-bold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    {edu.score && (
                      <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono font-bold text-cyan-300 shrink-0">
                        {edu.score}
                      </span>
                    )}
                  </div>

                  <div className="text-xs text-cyan-400 font-medium mb-1">
                    {edu.institution}
                  </div>

                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
                    <span>{edu.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>Year: {edu.year}</span>
                  </div>

                  {edu.description && (
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Verified Degree</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cert.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 shrink-0">
                      {cert.year}
                    </span>
                  </div>

                  <div className="text-xs text-cyan-300 font-medium mb-4">
                    Issuer: {cert.issuer}
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                      Core Curriculum Covered:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {cert.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-cyan-400 mt-0.5">·</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Credential Validation</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Certified
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
